'use client';

import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Lightbulb, RefreshCw, Settings, Trophy, XCircle, Trash2, Book, User } from 'lucide-react';
import { History } from 'lucide-react';
import { Chess } from 'chess.js';

import SettingsModal from '@/components/SettingsModal';
import PasswordModal from '@/components/PasswordModal';
import OpeningsModal from '@/components/OpeningsModal';
import { checkGuess, getRandomOpening, normalizeString } from '@/utils/gameLogic';
import { readLocalNumber, persistLocalNumber } from '@/utils/helpers';
import {
  GameRecord,
  GameSettings,
  GameState,
  PlayerStats,
  Difficulty,
  SessionEntry,
  UserProgressPayload,
  ResumeState
} from '@/types';
import { useAuth } from '@/context/AuthContext';

import GameControls from '@/components/GameControls';

const ChessBoardView = dynamic(() => import('@/components/ChessBoardView'), { ssr: false });

const INITIAL_LIVES = 5;
const MAX_HINTS = 3;

const DEFAULT_SETTINGS: GameSettings = {
  showCoordinates: true,
  allowMistakes: true,
  soundEnabled: true,
  soundVolume: 0.7,
  animationEnabled: true,
  difficulty: 'Adaptive',
  themeMode: 'system',
};

const DEFAULT_STATS: PlayerStats = {
  gamesPlayed: 0,
  bestScore: 0,
  totalGuesses: 0,
  correctGuesses: 0,
  difficultyStats: {},
};

const readLocalStorage = <T,>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') return fallback;
  try {
    const saved = window.localStorage.getItem(key);
    return saved ? (JSON.parse(saved) as T) : fallback;
  } catch {
    return fallback;
  }
};

const persistLocalStorage = (key: string, value: unknown) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore write errors (e.g., private mode)
  }
};

const normalizeTimestamp = (value: unknown): number | null => {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const ts = Date.parse(value);
    return Number.isNaN(ts) ? null : ts;
  }
  return null;
};

const mergeGameHistory = (remote: GameRecord[], local: GameRecord[]) => {
  const records = new Map<string, GameRecord>();
  [...remote, ...local].forEach((record) => {
    records.set(record.id, record);
  });
  return Array.from(records.values()).sort((a, b) => a.timestamp - b.timestamp);
};

const mergeSessionHistory = (remote: SessionEntry[], local: SessionEntry[]) => {
  const seen = new Set<string>();
  const merged: SessionEntry[] = [];

  [...remote, ...local].forEach((entry) => {
    const key = `${entry.name}-${entry.moves}-${entry.scoreAfter}-${entry.outcome}-${entry.livesLost}-${entry.hintsUsed}`;
    if (!seen.has(key)) {
      seen.add(key);
      merged.push(entry);
    }
  });

  return merged;
};

const pickLatestResumeState = (
  remote: ResumeState | null | undefined,
  remoteUpdated: number,
  local: ResumeState | null | undefined,
  localUpdated: number
) => {
  if (!remote && !local) return null;
  if (remote && !local) return remote;
  if (local && !remote) return local;
  if (!remote || !local) return local ?? remote ?? null;
  return remoteUpdated > localUpdated ? remote : local;
};

const mergeProgressPayload = (
  remote: UserProgressPayload,
  local: UserProgressPayload,
  remoteUpdatedAt: number,
  localUpdatedAt: number
): UserProgressPayload => {
  const mergedSettings: GameSettings = {
    ...DEFAULT_SETTINGS,
    ...remote.settings,
    ...local.settings
  };

  const mergedGameHistory = mergeGameHistory(remote.gameHistory, local.gameHistory);
  const mergedSessionHistory = mergeSessionHistory(remote.sessionHistory, local.sessionHistory);

  const bestFromGames = mergedGameHistory.reduce(
    (max, record) => Math.max(max, record.score),
    0
  );

  /* Merge Difficulty Stats */
  const remoteDiff = remote.stats.difficultyStats || {};
  const localDiff = local.stats.difficultyStats || {};
  const mergedDifficultyStats: Record<string, { solved: number; failed: number }> = { ...localDiff };

  Object.entries(remoteDiff).forEach(([diff, counts]) => {
    if (!mergedDifficultyStats[diff]) {
      mergedDifficultyStats[diff] = { solved: 0, failed: 0 };
    }
    // Taking the max is a simple heuristic similar to other stats, assuming strictly increasing
    mergedDifficultyStats[diff].solved = Math.max(mergedDifficultyStats[diff].solved, counts.solved);
    mergedDifficultyStats[diff].failed = Math.max(mergedDifficultyStats[diff].failed, counts.failed);
  });

  const mergedStats: PlayerStats = {
    gamesPlayed: Math.max(
      remote.stats.gamesPlayed,
      local.stats.gamesPlayed,
      mergedGameHistory.length
    ),
    bestScore: Math.max(remote.stats.bestScore, local.stats.bestScore, bestFromGames),
    totalGuesses: Math.max(remote.stats.totalGuesses, local.stats.totalGuesses),
    correctGuesses: Math.max(remote.stats.correctGuesses, local.stats.correctGuesses),
    difficultyStats: mergedDifficultyStats,
  };

  const resumeState = pickLatestResumeState(
    remote.resumeState,
    remoteUpdatedAt,
    local.resumeState,
    localUpdatedAt
  );

  return {
    settings: mergedSettings,
    stats: mergedStats,
    gameHistory: mergedGameHistory,
    sessionHistory: mergedSessionHistory,
    resumeState,
    updatedAt: Math.max(remoteUpdatedAt, localUpdatedAt)
  };
};

export default function Page() {
  const { user, loading: authLoading } = useAuth();
  const [mounted, setMounted] = useState(false);
  const storedResume = readLocalStorage<ResumeState | null>('chess-resume-state', null);
  const [systemPrefersDark, setSystemPrefersDark] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isOpeningsOpen, setIsOpeningsOpen] = useState(false);
  // openingsSearch/Sort moved to OpeningsModal component for performance
  const [inputStr, setInputStr] = useState(() => storedResume?.inputStr ?? '');
  const [historySearch, setHistorySearch] = useState('');
  const [historySort, setHistorySort] = useState('recent');

  const [settings, setSettings] = useState<GameSettings>(() => {
    const stored = readLocalStorage('chess-settings', DEFAULT_SETTINGS);
    const storedDifficulty = readLocalStorage<Difficulty>(
      'chess-last-difficulty',
      stored.difficulty ?? DEFAULT_SETTINGS.difficulty,
    );
    return { ...DEFAULT_SETTINGS, ...stored, difficulty: storedDifficulty };
  });
  const [stats, setStats] = useState<PlayerStats>(() =>
    readLocalStorage('chess-stats', DEFAULT_STATS),
  );
  const [gameHistory, setGameHistory] = useState<GameRecord[]>(() =>
    readLocalStorage('chess-history', []),
  );

  const [gameState, setGameState] = useState<GameState>(() => {
    if (storedResume?.status === 'playing' && storedResume.currentOpening) {
      return {
        status: 'playing',
        currentOpening: storedResume.currentOpening,
        score: storedResume.score ?? 0,
        lives: storedResume.lives ?? INITIAL_LIVES,
        history: storedResume.history ?? [],
        message: storedResume.message ?? null,
        hintsRemaining: storedResume.hintsRemaining ?? MAX_HINTS,
      };
    }
    return {
      status: 'idle',
      currentOpening: null,
      score: 0,
      lives: INITIAL_LIVES,
      history: [],
      message: null,
      hintsRemaining: MAX_HINTS,
    };
  });

  const [feedbackState, setFeedbackState] = useState<'none' | 'correct' | 'incorrect'>('none');
  const [sessionHistory, setSessionHistory] = useState<SessionEntry[]>(() =>
    readLocalStorage('chess-session-history', []),
  );
  const [hasHydratedAccount, setHasHydratedAccount] = useState(false);
  const [isSyncingAccount, setIsSyncingAccount] = useState(false);
  const [openingStats, setOpeningStats] = useState<{ livesLost: number; hintsUsed: number }>(() =>
    storedResume?.openingStats ?? { livesLost: 0, hintsUsed: 0 },
  );
  const [autoAdvanceSeconds, setAutoAdvanceSeconds] = useState<number | null>(null);
  const [isSolutionRevealed, setIsSolutionRevealed] = useState(false);
  const [animationDelay, setAnimationDelay] = useState<number>(() =>
    readLocalStorage('chess-animation-delay', 800),
  );
  const autoAdvanceTimeoutRef = useRef<number | null>(null);
  const autoAdvanceIntervalRef = useRef<number | null>(null);
  const skipClickRef = useRef<number | null>(null);
  const saveProgressTimeoutRef = useRef<number | null>(null);
  const latestProgressRef = useRef<UserProgressPayload>({
    settings,
    stats,
    gameHistory,
    sessionHistory,
    resumeState: {
      status: gameState.status,
      currentOpening: gameState.currentOpening,
      score: gameState.score,
      lives: gameState.lives,
      history: gameState.history,
      hintsRemaining: gameState.hintsRemaining,
      inputStr,
      openingStats,
      message: gameState.message,
    },
    updatedAt: Date.now(),
  });

  useEffect(() => {
    latestProgressRef.current = {
      settings,
      stats,
      gameHistory,
      sessionHistory,
      resumeState: {
        status: gameState.status,
        currentOpening: gameState.currentOpening,
        score: gameState.score,
        lives: gameState.lives,
        history: gameState.history,
        hintsRemaining: gameState.hintsRemaining,
        inputStr,
        openingStats,
        message: gameState.message,
      },
      updatedAt: Date.now(),
    };
  }, [settings, stats, gameHistory, sessionHistory, gameState, inputStr, openingStats]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pushProgressToServer = useCallback(
    async (payload: UserProgressPayload) => {
      if (!user) return;
      try {
        await fetch('/api/user/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch (error) {
        console.error('Failed to save account progress', error);
      }
    },
    [user]
  );

  useEffect(() => {
    persistLocalStorage('chess-settings', settings);
  }, [settings]);

  useEffect(() => {
    persistLocalStorage('chess-last-difficulty', settings.difficulty);
  }, [settings.difficulty]);

  useEffect(() => {
    persistLocalStorage('chess-stats', stats);
  }, [stats]);

  useEffect(() => {
    persistLocalStorage('chess-history', gameHistory);
  }, [gameHistory]);

  useEffect(() => {
    persistLocalStorage('chess-session-history', sessionHistory);
  }, [sessionHistory]);

  useEffect(() => {
    persistLocalStorage('chess-animation-delay', animationDelay);
  }, [animationDelay]);

  useEffect(() => {
    if (authLoading || !user) {
      setHasHydratedAccount(false);
      setIsSyncingAccount(false);
      return;
    }

    let cancelled = false;

    const hydrateFromAccount = async () => {
      setIsSyncingAccount(true);
      try {
        const response = await fetch('/api/user/progress', { cache: 'no-store' });
        const payload = response.ok ? await response.json().catch(() => null) : null;
        const remote = payload?.progress as UserProgressPayload | null;
        const remoteUpdatedAt =
          normalizeTimestamp(remote?.updatedAt) ??
          normalizeTimestamp(payload?.updatedAt) ??
          0;
        const localUpdatedAt = normalizeTimestamp(latestProgressRef.current.updatedAt) ?? 0;
        const merged = remote
          ? mergeProgressPayload(remote, latestProgressRef.current, remoteUpdatedAt, localUpdatedAt)
          : latestProgressRef.current;

        if (cancelled) return;
        latestProgressRef.current = merged;
        setSettings(merged.settings);
        setStats(merged.stats);
        setGameHistory(merged.gameHistory);
        setSessionHistory(merged.sessionHistory);
        if (merged.resumeState?.currentOpening) {
          setGameState((prev) => ({
            ...prev,
            status: merged.resumeState?.status ?? 'playing',
            currentOpening: merged.resumeState?.currentOpening ?? prev.currentOpening,
            score: merged.resumeState?.score ?? prev.score,
            lives: merged.resumeState?.lives ?? prev.lives,
            history: merged.resumeState?.history ?? prev.history,
            message: merged.resumeState?.message ?? null,
            hintsRemaining: merged.resumeState?.hintsRemaining ?? prev.hintsRemaining,
          }));
          setInputStr(merged.resumeState?.inputStr ?? '');
          setOpeningStats(merged.resumeState?.openingStats ?? { livesLost: 0, hintsUsed: 0 });
        }

        await pushProgressToServer(merged);
        if (!cancelled) {
          setHasHydratedAccount(true);
        }
      } catch (error) {
        console.error('Failed to sync account progress', error);
        if (!cancelled) {
          setHasHydratedAccount(true);
        }
      } finally {
        if (!cancelled) {
          setIsSyncingAccount(false);
        }
      }
    };

    hydrateFromAccount();

    return () => {
      cancelled = true;
    };
  }, [authLoading, user, pushProgressToServer]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemPrefersDark(media.matches);
    const handler = (event: MediaQueryListEvent) => setSystemPrefersDark(event.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  const isDarkMode =
    settings.themeMode === 'dark' ||
    (settings.themeMode === 'system' && systemPrefersDark);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    if (!user || !hasHydratedAccount || isSyncingAccount) return;

    if (saveProgressTimeoutRef.current) {
      clearTimeout(saveProgressTimeoutRef.current);
    }

    saveProgressTimeoutRef.current = window.setTimeout(() => {
      pushProgressToServer(latestProgressRef.current);
    }, 800);

    return () => {
      if (saveProgressTimeoutRef.current) {
        clearTimeout(saveProgressTimeoutRef.current);
      }
    };
  }, [
    user,
    hasHydratedAccount,
    isSyncingAccount,
    settings,
    stats,
    gameHistory,
    sessionHistory,
    gameState,
    inputStr,
    openingStats,
    pushProgressToServer
  ]);

  // Auto-start the game on initial load
  useEffect(() => {
    if (gameState.status === 'idle') {
      startGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startGame = () => {
    clearAutoAdvance();
    const firstOpening = getRandomOpening([], settings.difficulty, buildAdaptiveContext());
    setGameState({
      status: 'playing',
      currentOpening: firstOpening,
      score: 0,
      lives: INITIAL_LIVES,
      history: [],
      message: null,
      hintsRemaining: MAX_HINTS,
    });
    setFeedbackState('none');
    setInputStr('');
    setOpeningStats({ livesLost: 0, hintsUsed: 0 });
  };

  const useHint = () => {
    if (gameState.hintsRemaining <= 0 || !gameState.currentOpening) return;

    const targetName = gameState.currentOpening.name;
    const normalizedTarget = normalizeString(targetName);
    const normalizedInput = normalizeString(inputStr);

    let prefixLen = 0;
    for (let i = 0; i < normalizedInput.length; i++) {
      if (i < normalizedTarget.length && normalizedInput[i] === normalizedTarget[i]) {
        prefixLen++;
      } else {
        break;
      }
    }

    const nextCharIndex = prefixLen;
    if (nextCharIndex < targetName.length) {
      const nextSub = targetName.substring(0, nextCharIndex + 1);
      setInputStr(nextSub);

      setGameState((prev) => ({
        ...prev,
        hintsRemaining: prev.hintsRemaining - 1,
      }));
      setOpeningStats((prev) => ({ ...prev, hintsUsed: prev.hintsUsed + 1 }));
    }
  };

  const handleGuess = (e: FormEvent) => {
    e.preventDefault();
    if (!inputStr.trim() || gameState.status !== 'playing' || !gameState.currentOpening) return;

    // Don't increment totalGuesses here to avoid double counting or missing auto-advance.
    // We'll do it in handleCorrectGuess and handleIncorrectGuess.

    const isCorrect = checkGuess(inputStr, gameState.currentOpening.name);

    if (isCorrect) {
      handleCorrectGuess();
    } else {
      handleIncorrectGuess();
    }
  };

  const handleCorrectGuess = () => {
    if (!gameState.currentOpening) return;
    clearAutoAdvance();
    const completedOpening = gameState.currentOpening;
    const statsSnapshot = { ...openingStats };
    const nextScore = gameState.score + 1;

    setStats((prev) => {
      const currentDiff = completedOpening.difficulty;
      const oldDiffStats = prev.difficultyStats || {};
      const currentEntry = oldDiffStats[currentDiff] || { solved: 0, failed: 0 };

      return {
        ...prev,
        correctGuesses: prev.correctGuesses + 1,
        totalGuesses: prev.totalGuesses + 1, // Count as a guess
        difficultyStats: {
          ...oldDiffStats,
          [currentDiff]: {
            ...currentEntry,
            solved: currentEntry.solved + 1,
          }
        }
      };
    });
    setFeedbackState('correct');

    setTimeout(() => {
      setSessionHistory((prev) => [
        ...prev,
        {
          name: completedOpening.name,
          moves: completedOpening.moves,
          livesLost: statsSnapshot.livesLost,
          hintsUsed: statsSnapshot.hintsUsed,
          scoreAfter: nextScore,
          outcome: 'solved',
        },
      ]);
      setOpeningStats({ livesLost: 0, hintsUsed: 0 });
      setGameState((prev) => {
        const newHistory = [...prev.history, prev.currentOpening!.name];
        const nextOpening = getRandomOpening(newHistory, settings.difficulty, buildAdaptiveContext());
        return {
          ...prev,
          score: prev.score + 1,
          history: newHistory,
          currentOpening: nextOpening,
          message: 'Correct!',
        };
      });
      setFeedbackState('none');
      setInputStr('');
    }, 1000);
  };

  const handleIncorrectGuess = () => {
    clearAutoAdvance();
    setFeedbackState('incorrect');
    const newLivesLost = openingStats.livesLost + 1;
    setOpeningStats((prev) => ({ ...prev, livesLost: newLivesLost }));
    setStats((prev) => ({ ...prev, totalGuesses: prev.totalGuesses + 1 })); // Count as a guess

    setTimeout(() => {
      setGameState((prev) => {
        const updatedLives = prev.lives - 1;
        if (updatedLives <= 0) {
          // Record failed opening on game over
          if (prev.currentOpening) {
            setSessionHistory((hist) => [
              ...hist,
              {
                name: prev.currentOpening!.name,
                moves: prev.currentOpening!.moves,
                livesLost: newLivesLost,
                hintsUsed: openingStats.hintsUsed,
                scoreAfter: prev.score,
                outcome: 'failed',
              },
            ]);

            // Update Failed Difficulty Stats
            setStats((prevStats) => {
              const currentDiff = prev.currentOpening!.difficulty;
              const oldDiffStats = prevStats.difficultyStats || {};
              const currentEntry = oldDiffStats[currentDiff] || { solved: 0, failed: 0 };
              return {
                ...prevStats,
                difficultyStats: {
                  ...oldDiffStats,
                  [currentDiff]: {
                    ...currentEntry,
                    failed: currentEntry.failed + 1,
                  }
                }
              };
            });
          }
          handleGameOver({ ...prev, lives: 0, status: 'gameover' });
          return { ...prev, status: 'gameover', lives: 0 };
        }
        return { ...prev, lives: updatedLives };
      });
      setFeedbackState('none');
    }, 600);
  };

  const handleGameOver = (finalState: GameState) => {
    const record: GameRecord = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      score: finalState.score,
      difficulty: settings.difficulty,
      openingsSolved: finalState.history,
    };

    setGameHistory((prev) => [...prev, record]);

    setStats((prev) => ({
      ...prev,
      gamesPlayed: prev.gamesPlayed + 1,
      bestScore: Math.max(prev.bestScore, finalState.score),
    }));
  };

  useEffect(() => {
    if (gameState.status === 'gameover' && gameState.score > 5) {
      import('canvas-confetti')
        .then(({ default: confetti }) =>
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          }),
        )
        .catch(() => null);
    }
  }, [gameState.status, gameState.score]);

  const skipOpening = (difficultyOverride?: Difficulty) => {
    clearAutoAdvance();
    setGameState((prev) => {
      if (prev.status !== 'playing' || !prev.currentOpening) return prev;
      const used = [...prev.history, prev.currentOpening.name];
      const nextOpening = getRandomOpening(
        used,
        difficultyOverride ?? settings.difficulty,
        buildAdaptiveContext(),
      );
      setSessionHistory((hist) => [
        ...hist,
        {
          name: prev.currentOpening!.name,
          moves: prev.currentOpening!.moves,
          livesLost: openingStats.livesLost,
          hintsUsed: openingStats.hintsUsed,
          scoreAfter: prev.score,
          outcome: 'skipped',
        },
      ]);
      setOpeningStats({ livesLost: 0, hintsUsed: 0 });
      return {
        ...prev,
        currentOpening: nextOpening,
        message: 'Skipped',
        history: prev.history,
      };
    });
    setFeedbackState('none');
    setInputStr('');
  };

  const handleSkipClick = () => {
    const now = Date.now();
    if (skipClickRef.current && now - skipClickRef.current <= 3000) {
      skipClickRef.current = null;
      skipOpening();
      return;
    }
    skipClickRef.current = now;
    window.setTimeout(() => {
      if (skipClickRef.current === now) {
        skipClickRef.current = null;
      }
    }, 3000);
  };

  const clearAutoAdvance = () => {
    if (autoAdvanceTimeoutRef.current) {
      clearTimeout(autoAdvanceTimeoutRef.current);
      autoAdvanceTimeoutRef.current = null;
    }
    if (autoAdvanceIntervalRef.current) {
      clearInterval(autoAdvanceIntervalRef.current);
      autoAdvanceIntervalRef.current = null;
    }
    setAutoAdvanceSeconds(null);
  };

  useEffect(() => {
    // Auto-detect correct input and schedule auto-advance
    const detected =
      gameState.status === 'playing' &&
      gameState.currentOpening &&
      checkGuess(inputStr, gameState.currentOpening.name);

    if (detected) {
      if (!autoAdvanceTimeoutRef.current) {
        const deadline = Date.now() + 10000; // 10 seconds
        setAutoAdvanceSeconds(10);
        setFeedbackState('correct');
        autoAdvanceTimeoutRef.current = window.setTimeout(() => {
          clearAutoAdvance();
          // Double-check still valid and game is active
          if (
            gameState.status === 'playing' &&
            gameState.currentOpening &&
            checkGuess(inputStr, gameState.currentOpening.name)
          ) {
            handleCorrectGuess();
          }
        }, 10000);
        autoAdvanceIntervalRef.current = window.setInterval(() => {
          const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
          setAutoAdvanceSeconds(remaining === 0 ? null : remaining);
        }, 500);
      }
    } else {
      clearAutoAdvance();
      if (autoAdvanceSeconds !== null && feedbackState === 'correct') {
        setFeedbackState('none');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputStr, gameState.currentOpening, gameState.status]);

  const handleManualAdvance = () => {
    clearAutoAdvance();
    if (
      gameState.status === 'playing' &&
      gameState.currentOpening &&
      checkGuess(inputStr, gameState.currentOpening.name)
    ) {
      handleCorrectGuess();
    }
  };

  const buildAdaptiveContext = () => {
    const totalGuesses = stats.totalGuesses;
    const lifetimeAccuracy = totalGuesses === 0 ? 0.6 : stats.correctGuesses / totalGuesses;

    const recent = sessionHistory.slice(-10);
    const recentSolved = recent.filter((r) => r.outcome === 'solved').length;
    const recentSkipped = recent.filter((r) => r.outcome === 'skipped').length;
    const recentAttempts = recent.length + recentSkipped * 0.5; // count skips as half-weighted attempts
    const recentAccuracy =
      recentAttempts === 0 ? lifetimeAccuracy : (recentSolved + recentSkipped * 0.25) / recentAttempts;

    let solvedStreak = 0;
    for (let i = sessionHistory.length - 1; i >= 0; i--) {
      if (sessionHistory[i].outcome === 'solved') {
        solvedStreak++;
      } else {
        break;
      }
    }

    return {
      accuracy: lifetimeAccuracy,
      recentAccuracy,
      streak: solvedStreak,
    };
  };



  const handleUpdateSettings = (key: keyof GameSettings, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));

    if (
      key === 'difficulty' &&
      value !== settings.difficulty &&
      inputStr.length === 0 &&
      gameState.status === 'playing' &&
      gameState.currentOpening
    ) {
      // Instantly move to a new opening at the selected difficulty when no guess has been started.
      skipOpening(value as Difficulty);
    }
  };

  const [isLoadedSolved, setIsLoadedSolved] = useState(false);

  const loadOpening = (openingName: string, moves: string, outcome: string) => {
    // Find the full opening object if possible, or construct a temporary one
    // Since we only have name and moves in history, we'll use that.
    // We need to be careful if the opening is "???" - wait, the history entry has the REAL name stored,
    // we just hide it in the UI. So we can pass the real name here.

    const openingToLoad = {
      name: openingName,
      moves: moves,
      // We might not have fen/pgn if not stored, but ChessBoardView mainly needs moves (or we might need to fetch/reconstruct)
      // Assuming ChessBoardView handles it or we have enough info.
      // Actually, `getRandomOpening` returns objects with `fen`, `pgn` etc.
      // If `sessionHistory` only stores name/moves, we might lack data if ChessBoardView needs it.
      // Let's check `SessionEntry` type. It has name and moves.
      // `ChessBoardView` takes `opening`.
      // Let's see `ChessBoardView` props. It takes `opening`.
      // If `opening` needs more fields, we might need to look it up.
      // For now, let's assume we can reconstruct or it's fine.
      // Actually, to be safe, let's try to find it in the full list if we had access, but we don't easily here.
      // Let's just create a partial object and cast it if needed, or hope `moves` is enough.
      // Re-reading `getRandomOpening`: it returns `Opening`.
      // Let's assume we can just pass what we have.
      eco: '', // Dummy
      fen: '', // Dummy - ChessBoardView might generate from moves?
      pgn: '', // Dummy
      difficulty: 'Medium' as Difficulty, // Dummy
    };

    // Save current game as unfinished if playing
    if (gameState.status === 'playing' && gameState.currentOpening && gameState.currentOpening.name !== openingName) {
      const currentOp = gameState.currentOpening;
      const statsSnapshot = { ...openingStats };
      setSessionHistory((prev) => [
        ...prev,
        {
          name: currentOp.name,
          moves: currentOp.moves,
          livesLost: statsSnapshot.livesLost,
          hintsUsed: statsSnapshot.hintsUsed,
          scoreAfter: gameState.score,
          outcome: 'unfinished',
        },
      ]);
      setOpeningStats({ livesLost: 0, hintsUsed: 0 });
    }

    const isSolved = outcome === 'solved';
    setIsLoadedSolved(isSolved);

    setGameState(prev => ({
      ...prev,
      status: 'playing',
      currentOpening: openingToLoad,
      message: isSolved ? 'Loaded from history' : 'Unfinished',
      hintsRemaining: MAX_HINTS, // Reset hints? Or keep? Let's reset for a fresh try/review.
      lives: prev.lives > 0 ? prev.lives : 1, // Ensure at least 1 life if game over?
    }));

    if (isSolved) {
      setFeedbackState('correct');
      setInputStr('You already solved this opening!');
    } else {
      setFeedbackState('none');
      setInputStr('');
    }
    setIsHistoryOpen(false);
  };

  const difficultyColors: Record<Difficulty, string> = {
    Easy: 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400',
    Medium: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400',
    Hard: 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400',
    'Very Hard': 'text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300',
    Adaptive: 'text-teal-700 bg-teal-100 dark:bg-teal-900/30 dark:text-teal-300',
  };

  const formatDate = (ts: number) => {
    return new Date(ts).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [rightSidebarWidth, setRightSidebarWidth] = useState<number>(() =>
    readLocalNumber('right-sidebar-width', 320),
  );
  const [movesSidebarWidth, setMovesSidebarWidth] = useState<number>(() =>
    readLocalNumber('moves-sidebar-width', 300),
  );
  const rightSidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    persistLocalNumber('right-sidebar-width', rightSidebarWidth);
  }, [rightSidebarWidth]);

  useEffect(() => {
    persistLocalNumber('moves-sidebar-width', movesSidebarWidth);
  }, [movesSidebarWidth]);

  useEffect(() => {
    persistLocalStorage('chess-resume-state', latestProgressRef.current.resumeState ?? null);
  }, [gameState, inputStr, openingStats]);

  useEffect(() => {
    // Reset reveal state whenever a new opening is loaded.
    setIsSolutionRevealed(false);
  }, [gameState.currentOpening?.name]);

  const handleResetLayout = () => {
    setRightSidebarWidth(320);
    setMovesSidebarWidth(300);
  };

  const handleShowSolution = () => {
    if (!gameState.currentOpening) return;
    setIsPasswordModalOpen(true);
  };

  const revealSolution = () => {
    if (!gameState.currentOpening) return;
    setIsSolutionRevealed(true);
    // Reveal the solution
    setFeedbackState('correct');
    setInputStr(gameState.currentOpening.name);
    // Optionally auto-submit or just show it.
    // Let's just fill it in and let user submit or see it.
    // Or maybe we should just show an alert?
    // User said "pop up a Show Solution...".
    // Let's assume filling it in is good, or maybe showing a toast.
    // Let's just set it in the input.
  };

  // Resize logic for Right Sidebar (between Main Content and Right Sidebar)
  // Wait, the user said "in between the right sidebar and move sidebar".
  // Looking at the layout:
  // Grid: [ChessBoardView] [Right Sidebar (Score/Lives/Input)]
  // The "Move Sidebar" is INSIDE ChessBoardView?
  // Let's re-read ChessBoardView.
  // Yes, ChessBoardView has "Chess Board" and "Move History Sidebar".
  // So the layout is:
  // [ChessBoardView (Board + MoveSidebar)] [Right Sidebar (Score/Lives/Input)]
  // The user wants:
  // 1. Resize between Right Sidebar and Move Sidebar.
  //    This means resizing the gap or the width of the Right Sidebar relative to ChessBoardView?
  //    Actually, ChessBoardView is on the left (order-1), Right Sidebar is on the right (order-2).
  //    So the "Move Sidebar" is the right part of ChessBoardView.
  //    So the order is: [Board] [MoveSidebar] ... [RightSidebar]
  //    So "between right sidebar and move sidebar" is the gap between the two main columns.
  //    So I need a handle between column 1 and column 2.
  // 2. "adjust size thingy in between the moves sidebar and main chessboard"
  //    This is INSIDE ChessBoardView.

  // So here in page.tsx, I handle the resize between the main two columns.
  // The grid is: `grid-cols-1 xl:grid-cols-[auto_minmax(320px,1fr)]`
  // I should probably make it flex or explicit grid with widths.
  // Let's use flex for easier resizing.


  const filteredAndSortedHistory = useMemo(() => {
    const filtered = sessionHistory.filter((entry) => {
      if (!historySearch) return true;
      // Lenient search: remove non-alphanumeric, lowercase
      const normalizeForSearch = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
      const searchNorm = normalizeForSearch(historySearch);
      const nameNorm = normalizeForSearch(entry.name);
      const movesNorm = normalizeForSearch(entry.moves);

      return nameNorm.includes(searchNorm) || movesNorm.includes(searchNorm);
    });

    let sorted = [...filtered];
    if (historySort === 'recent') {
      sorted.reverse();
    } else if (historySort === 'oldest') {
      // Keep as is
    } else if (historySort === 'a-z') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (historySort === 'z-a') {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else if (historySort === 'status-desc') {
      const priority = { unfinished: 0, skipped: 1, failed: 2, solved: 3 };
      sorted.sort((a, b) => priority[a.outcome] - priority[b.outcome]);
    } else if (historySort === 'status-asc') {
      const priority = { solved: 0, failed: 1, skipped: 2, unfinished: 3 };
      sorted.sort((a, b) => priority[a.outcome] - priority[b.outcome]);
    }
    return sorted;
  }, [sessionHistory, historySearch, historySort]);

  const wrongGuesses = Math.max(stats.totalGuesses - stats.correctGuesses, 0);

  const averageScore = useMemo(() => {
    if (gameHistory.length === 0) return 0;
    const totalScore = gameHistory.reduce((sum, game) => sum + game.score, 0);
    return totalScore / gameHistory.length;
  }, [gameHistory]);

  const averageGuessesPerGame = useMemo(() => {
    if (stats.gamesPlayed === 0) return 0;
    return stats.totalGuesses / stats.gamesPlayed;
  }, [stats.gamesPlayed, stats.totalGuesses]);

  const recentGames = useMemo(
    () => [...gameHistory].sort((a, b) => b.timestamp - a.timestamp).slice(0, 3),
    [gameHistory],
  );

  const sessionStats = useMemo(() => {
    const totals = sessionHistory.reduce(
      (acc, entry) => {
        acc.openingsSeen += 1;
        acc.hintsUsed += entry.hintsUsed;
        acc.livesLost += entry.livesLost;
        return acc;
      },
      { openingsSeen: 0, hintsUsed: 0, livesLost: 0 },
    );

    return {
      openingsSeen: totals.openingsSeen + (gameState.status === 'playing' ? 1 : 0),
      hintsUsed: totals.hintsUsed + openingStats.hintsUsed,
      livesLost: totals.livesLost + openingStats.livesLost,
    };
  }, [sessionHistory, openingStats, gameState.status]);

  const solvedOpeningsSet = useMemo(() => {
    const set = new Set<string>();
    gameHistory.forEach((game) => game.openingsSolved.forEach((name) => set.add(name)));
    sessionHistory.forEach((entry) => {
      if (entry.outcome === 'solved') set.add(entry.name);
    });
    gameState.history.forEach((name) => set.add(name));
    return set;
  }, [gameHistory, sessionHistory, gameState.history]);




  return (
    !mounted ? null :
      <div className="min-h-screen w-full bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-100 transition-colors duration-500 font-sans flex flex-col overflow-hidden">
        <SettingsModal
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
          themeMode={settings.themeMode}
          resolvedIsDark={isDarkMode}
          onThemeModeChange={(mode) => handleUpdateSettings('themeMode', mode)}
          settings={settings}
          updateSettings={handleUpdateSettings}
          stats={stats}
          currentStreak={gameState.score}
          averageScore={averageScore}
          averageGuessesPerGame={averageGuessesPerGame}
          wrongGuesses={wrongGuesses}
          recentGames={recentGames}
          sessionStats={sessionStats}
          animationDelay={animationDelay}
          onAnimationDelayChange={setAnimationDelay}
          onResetLayout={handleResetLayout}
        />

        <PasswordModal
          isOpen={isPasswordModalOpen}
          onClose={() => setIsPasswordModalOpen(false)}
          onSuccess={revealSolution}
        />

        <header className="absolute top-0 w-full p-6 flex justify-end items-start z-40 pointer-events-none">
          <div className="pointer-events-auto relative flex items-center justify-end gap-3">
            <Link
              href="/account"
              className="group flex items-center gap-3 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-gray-200 dark:border-zinc-700 transition-all duration-300 ease-out hover:pr-6 hover:ring-4 ring-blue-500/20"
              title="Account"
            >
              <User className="w-6 h-6 text-gray-700 dark:text-gray-200 transition-transform duration-500 group-hover:scale-110" />
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold text-gray-700 dark:text-gray-200 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                Account
              </span>
            </Link>
            <button
              onClick={() => setIsOpeningsOpen(true)}
              className="group flex items-center gap-3 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-gray-200 dark:border-zinc-700 transition-all duration-300 ease-out hover:pr-6 hover:ring-4 ring-blue-500/20"
              title="Openings"
            >
              <Book className="w-6 h-6 text-gray-700 dark:text-gray-200 transition-transform duration-500 group-hover:-rotate-6" />
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold text-gray-700 dark:text-gray-200 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                Openings
              </span>
            </button>
            <button
              onClick={() => setIsHistoryOpen(true)}
              className="group flex items-center gap-3 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-gray-200 dark:border-zinc-700 transition-all duration-300 ease-out hover:pr-6 hover:ring-4 ring-blue-500/20"
              title="History"
            >
              <History className="w-6 h-6 text-gray-700 dark:text-gray-200 transition-transform duration-500 group-hover:-rotate-90" />
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold text-gray-700 dark:text-gray-200 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                History
              </span>
            </button>
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="group flex items-center gap-3 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-gray-200 dark:border-zinc-700 transition-all duration-300 ease-out hover:pr-6 hover:ring-4 ring-blue-500/20"
            >
              <Settings className="w-6 h-6 text-gray-700 dark:text-gray-200 transition-transform duration-500 group-hover:rotate-180" />
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold text-gray-700 dark:text-gray-200 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                Settings
              </span>
            </button>
          </div>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center relative p-4">
          <AnimatePresence mode="wait">
            {gameState.status === 'playing' && gameState.currentOpening && (
              <motion.div
                key="playing"
                {...({
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 1.05 },
                } as any)}
                className="w-full max-w-[1600px] flex flex-col xl:flex-row items-start justify-center gap-0 z-10 px-2 md:px-4 relative"
              >
                <div className="flex-1 flex flex-col items-center gap-6 min-w-0">
                  <ChessBoardView
                    key={gameState.currentOpening.name}
                    opening={gameState.currentOpening}
                    isDark={isDarkMode}
                    showCoords={settings.showCoordinates}
                    animationEnabled={settings.animationEnabled}
                    animationDelay={animationDelay}
                    soundEnabled={settings.soundEnabled}
                    soundVolume={settings.soundVolume}
                    sidebarWidth={movesSidebarWidth}
                    onSidebarWidthChange={setMovesSidebarWidth}
                    rightSidebarWidth={rightSidebarWidth}
                    onRightSidebarWidthChange={setRightSidebarWidth}
                  >
                    <GameControls
                      gameState={gameState}
                      inputStr={inputStr}
                      setInputStr={setInputStr}
                      handleGuess={handleGuess}
                      useHint={useHint}
                      feedbackState={feedbackState}
                      autoAdvanceSeconds={autoAdvanceSeconds}
                      handleSkipClick={handleSkipClick}
                      onShowSolution={handleShowSolution}
                      INITIAL_LIVES={INITIAL_LIVES}
                      MAX_HINTS={MAX_HINTS}
                      isLoadedSolved={isLoadedSolved}
                      isSolutionRevealed={isSolutionRevealed}
                      onManualAdvance={handleManualAdvance}
                    />
                  </ChessBoardView>
                </div>
              </motion.div>
            )}

            {gameState.status === 'gameover' && (
              <motion.div
                key="gameover"
                {...({
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                } as any)}
                className="text-center z-10"
              >
                <div className="bg-white dark:bg-zinc-800 p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-zinc-700 max-w-lg mx-auto">
                  <h2 className="text-3xl font-bold mb-2">Game Over!</h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-8">You ran out of lives.</p>

                  <div className="py-8 px-12 bg-gray-50 dark:bg-zinc-700/50 rounded-2xl mb-8 border border-dashed border-gray-200 dark:border-zinc-600">
                    <p className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-2">Final Score</p>
                    <p className="text-6xl font-black text-blue-600 dark:text-blue-400">{gameState.score}</p>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm text-gray-500 mb-2 font-medium">Correctly identified:</p>
                    <div className="flex flex-wrap gap-2 justify-center max-h-32 overflow-y-auto custom-scrollbar">
                      {gameState.history.map((op, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded"
                        >
                          {op}
                        </span>
                      ))}
                      {gameState.history.length === 0 && (
                        <span className="text-xs text-gray-400 italic">None</span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={startGame}
                    className="w-full px-8 py-4 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
                  >
                    <RefreshCw size={20} /> Try Again
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {gameState.status === 'playing' && !gameState.currentOpening && (
            <div className="text-center text-gray-500 dark:text-gray-400 mt-6">
              <p>Loading next opening...</p>
            </div>
          )}

          <OpeningsModal
            isOpen={isOpeningsOpen}
            onClose={() => setIsOpeningsOpen(false)}
            solvedOpenings={solvedOpeningsSet}
          />

          {isHistoryOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
              onClick={() => setIsHistoryOpen(false)}
            >
              <div
                className="w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-700 max-h-[80vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-zinc-800 shrink-0">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white">History</h3>
                  </div>
                  <button
                    onClick={() => setIsHistoryOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-600 dark:text-gray-300"
                  >
                    <XCircle size={22} />
                  </button>
                </div>

                <div className="px-6 pt-4 shrink-0 space-y-3">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Search history..."
                        value={historySearch}
                        onChange={(e) => setHistorySearch(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-gray-100 dark:bg-zinc-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.3-4.3" />
                        </svg>
                      </div>
                    </div>
                    <select
                      value={historySort}
                      onChange={(e) => setHistorySort(e.target.value)}
                      className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 border-none rounded-lg text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
                    >
                      <option value="recent">Recent</option>
                      <option value="oldest">Oldest</option>
                      <option value="a-z">A-Z</option>
                      <option value="z-a">Z-A</option>
                      <option value="status-desc">Status (Priority)</option>
                      <option value="status-asc">Status (Solved)</option>
                    </select>
                  </div>
                </div>

                <div className="p-6 space-y-4 overflow-y-auto custom-scrollbar flex-1">
                  {sessionHistory.length === 0 ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic text-center py-8">
                      No openings played in this session yet.
                    </p>
                  ) : (
                    <div className="flex justify-end mb-2">
                      <button
                        onClick={() => setSessionHistory([])}
                        className="text-xs text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 px-2 py-1 rounded transition-colors flex items-center gap-1.5 font-medium"
                        title="Clear History"
                      >
                        <Trash2 size={14} />
                        Clear History
                      </button>
                    </div>
                  )}
                  {filteredAndSortedHistory.map((entry, idx) => (
                    <div key={`${entry.name}-${idx}`} className="group">
                      <div className="flex flex-col gap-3 py-2">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded ${entry.outcome === 'solved'
                                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                  : entry.outcome === 'skipped'
                                    ? 'bg-gray-100 text-gray-600 dark:bg-zinc-800 dark:text-gray-400'
                                    : entry.outcome === 'unfinished'
                                      ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                                      : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                  }`}
                              >
                                {entry.outcome}
                              </span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                              {entry.outcome === 'solved' ? entry.name : '???'}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-mono mt-1 break-all">
                              {entry.moves}
                            </p>
                          </div>

                          <button
                            onClick={() => loadOpening(entry.name, entry.moves, entry.outcome)}
                            disabled={gameState.currentOpening?.name === entry.name}
                            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors shrink-0 ${gameState.currentOpening?.name === entry.name
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-zinc-800 dark:text-gray-500'
                              : 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40'
                              }`}
                          >
                            {gameState.currentOpening?.name === entry.name ? 'Loaded' : 'Load'}
                          </button>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400 justify-end">
                          <div className="flex items-center gap-3 ml-auto">
                            {entry.livesLost > 0 && (
                              <span className="flex items-center gap-1 text-red-500 dark:text-red-400">
                                <Heart size={12} className="fill-current" /> -{entry.livesLost}
                              </span>
                            )}
                            {entry.hintsUsed > 0 && (
                              <span className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400">
                                <Lightbulb size={12} className="fill-current" /> {entry.hintsUsed}
                              </span>
                            )}
                            <span className="font-mono opacity-60">
                              Score: {entry.scoreAfter}
                            </span>
                          </div>
                        </div>
                      </div>
                      {idx < filteredAndSortedHistory.length - 1 && (
                        <hr className="border-gray-100 dark:border-zinc-800 mt-2" />
                      )}
                    </div>
                  ))}
                </div >
              </div >
            </div >
          )
          }

          <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-500/5"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl dark:bg-purple-500/5"></div>
          </div>
        </main >
      </div >
  );
}
