import { OPENINGS } from '../data/openings';
import { ChessOpening, Difficulty } from '../types';

export const getRandomOpening = (excludeNames: string[] = [], difficulty: Difficulty = 'Easy'): ChessOpening => {
  // Filter by difficulty
  let eligibleOpenings = OPENINGS;
  
  if (difficulty === 'Easy') {
    eligibleOpenings = OPENINGS.filter(o => o.difficulty === 'Easy');
  } else if (difficulty === 'Medium') {
    eligibleOpenings = OPENINGS.filter(o => o.difficulty === 'Easy' || o.difficulty === 'Medium');
  } else if (difficulty === 'Hard') {
    eligibleOpenings = OPENINGS.filter(o => o.difficulty === 'Easy' || o.difficulty === 'Medium' || o.difficulty === 'Hard');
  } else if (difficulty === 'Very Hard') {
    // Very Hard deliberately allows the full catalog, including rare variations
    eligibleOpenings = OPENINGS;
  }
  // Fallback uses all openings

  // Safety fallback: if filtering results in empty list (shouldn't happen with correct data), revert to full list
  if (eligibleOpenings.length === 0) {
    eligibleOpenings = OPENINGS;
  }
  
  // Filter out previously played openings in this session
  const available = eligibleOpenings.filter(o => !excludeNames.includes(o.name));
  
  // If we've exhausted the filtered list, restart cycling from the eligible pool
  if (available.length === 0) {
    return eligibleOpenings[Math.floor(Math.random() * eligibleOpenings.length)];
  }
  
  return available[Math.floor(Math.random() * available.length)];
};

export const normalizeString = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/['".,-]/g, '') // Remove punctuation
    .replace(/\b(the|opening|defense|game|system|attack|gambit)\b/g, '') // Remove filler words for loose matching
    .replace(/\s+/g, '') // Remove spaces
    .trim();
};

export const checkGuess = (guess: string, actualName: string): boolean => {
  const normalizedGuess = normalizeString(guess);
  const normalizedActual = normalizeString(actualName);
  
  if (!normalizedGuess) return false;
  return normalizedGuess === normalizedActual;
};
