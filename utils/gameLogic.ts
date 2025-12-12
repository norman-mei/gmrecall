import { OPENINGS } from '../data/openings';
import { ChessOpening, Difficulty } from '../types';

type AdaptiveContext = {
  accuracy?: number; // 0-1, lifetime-ish accuracy
  recentAccuracy?: number; // 0-1, short-term trend
  streak?: number; // consecutive solved openings
};

const clamp = (val: number, min: number, max: number) => Math.min(max, Math.max(min, val));

export const getRandomOpening = (
  excludeNames: string[] = [],
  difficulty: Difficulty = 'Adaptive',
  adaptiveContext?: AdaptiveContext,
): ChessOpening => {
  const pools = {
    Easy: OPENINGS.filter((o) => o.difficulty === 'Easy'),
    Medium: OPENINGS.filter((o) => o.difficulty === 'Easy' || o.difficulty === 'Medium'),
    Hard: OPENINGS.filter((o) => o.difficulty === 'Easy' || o.difficulty === 'Medium' || o.difficulty === 'Hard'),
    'Very Hard': OPENINGS,
  };

  const chooseAdaptivePool = () => {
    const accuracy = clamp(adaptiveContext?.accuracy ?? 0.6, 0, 1);
    const recent = clamp(adaptiveContext?.recentAccuracy ?? accuracy, 0, 1);
    const streakScore = clamp((adaptiveContext?.streak ?? 0) / 6, 0, 1);

    // Weighted blend: recent performance matters most, streak gives a small nudge.
    const performanceScore = clamp(recent * 0.55 + accuracy * 0.3 + streakScore * 0.15, 0, 1);

    const weights = {
      Easy: clamp(0.48 - 0.38 * performanceScore, 0.05, 0.7),
      Medium: clamp(0.28 - 0.05 * (performanceScore - 0.5), 0.1, 0.5),
      Hard: clamp(0.16 + 0.18 * performanceScore, 0.05, 0.45),
      'Very Hard': clamp(0.08 + 0.25 * performanceScore, 0.05, 0.4),
    };

    const totalWeight = weights.Easy + weights.Medium + weights.Hard + weights['Very Hard'];
    const roll = Math.random() * totalWeight;
    const ordered: Array<keyof typeof weights> = ['Easy', 'Medium', 'Hard', 'Very Hard'];
    let cumulative = 0;
    for (const tier of ordered) {
      cumulative += weights[tier];
      if (roll <= cumulative) {
        return pools[tier];
      }
    }
    return pools['Medium'];
  };

  let eligibleOpenings: ChessOpening[];

  if (difficulty === 'Adaptive') {
    eligibleOpenings = chooseAdaptivePool();
  } else if (difficulty === 'Easy') {
    eligibleOpenings = pools.Easy;
  } else if (difficulty === 'Medium') {
    eligibleOpenings = pools.Medium;
  } else if (difficulty === 'Hard') {
    eligibleOpenings = pools.Hard;
  } else {
    eligibleOpenings = pools['Very Hard'];
  }

  // Safety fallback: if filtering results in empty list, revert to full list
  if (!eligibleOpenings || eligibleOpenings.length === 0) {
    eligibleOpenings = OPENINGS;
  }

  // Filter out previously played openings in this session
  const available = eligibleOpenings.filter((o) => !excludeNames.includes(o.name));

  // If we've exhausted the filtered list, restart cycling from the eligible pool
  if (available.length === 0) {
    return eligibleOpenings[Math.floor(Math.random() * eligibleOpenings.length)];
  }

  return available[Math.floor(Math.random() * available.length)];
};

export const normalizeString = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/['".,\\-\\/()]/g, '') // Remove punctuation, dashes, slashes, parentheses
    .replace(/\b(the|opening|defense|game|system|attack|gambit|variation)\b/g, '') // Remove filler words for loose matching
    .replace(/\s+/g, '') // Remove spaces
    .trim();
};

export const checkGuess = (guess: string, actualName: string): boolean => {
  const normalizedGuess = normalizeString(guess);
  const normalizedActual = normalizeString(actualName);
  
  if (!normalizedGuess) return false;
  return normalizedGuess === normalizedActual;
};
