
export type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Very Hard';

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
  difficulty: Difficulty;
  animationEnabled: boolean;
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
