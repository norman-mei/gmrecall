
export type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Very Hard' | 'Adaptive';

export interface ChessOpening {
  name: string;
  fen: string;
  moves: string; // PGN format or space separated moves
  eco: string;
  difficulty: Difficulty;
}

export type GameStatus = 'idle' | 'playing' | 'gameover';

export interface GameSettings {
  showCoordinates: boolean;
  allowMistakes: boolean;
  soundEnabled: boolean;
  soundVolume: number; // 0-1
  difficulty: Difficulty;
  animationEnabled: boolean;
  themeMode: 'light' | 'dark' | 'system';
}

export interface GameRecord {
  id: string;
  timestamp: number;
  score: number;
  difficulty: Difficulty;
  openingsSolved: string[];
}

export interface PlayerStats {
  gamesPlayed: number;
  bestScore: number;
  totalGuesses: number;
  correctGuesses: number;
  difficultyStats?: Record<string, { solved: number; failed: number }>;
}

export interface GameState {
  status: GameStatus;
  currentOpening: ChessOpening | null;
  score: number;
  lives: number;
  history: string[]; // Names of correctly guessed openings
  message: string | null;
  hintsRemaining: number;
}

export interface ResumeState {
  status: GameStatus;
  currentOpening: ChessOpening | null;
  score: number;
  lives: number;
  history: string[];
  hintsRemaining: number;
  inputStr?: string;
  openingStats?: { livesLost: number; hintsUsed: number };
  message?: string | null;
}

export interface SessionEntry {
  name: string;
  moves: string;
  livesLost: number;
  hintsUsed: number;
  scoreAfter: number;
  outcome: 'solved' | 'skipped' | 'failed' | 'unfinished';
}

export interface UserProgressPayload {
  settings: GameSettings;
  stats: PlayerStats;
  gameHistory: GameRecord[];
  sessionHistory: SessionEntry[];
  resumeState?: ResumeState | null;
  updatedAt?: number;
}
