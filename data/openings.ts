import { ChessOpening } from '../types';
import { VERY_HARD_OPENINGS } from './very_hard_openings';
import { ADDITIONAL_OPENINGS } from './additional_openings';

export const OPENINGS: ChessOpening[] = [
  // Easy (Common, distinct)
  { name: "Ruy Lopez", fen: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", moves: "e4 e5 Nf3 Nc6 Bb5", eco: "C60", difficulty: "Easy" },
  { name: "Italian Game", fen: "r1bqkbnr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", moves: "e4 e5 Nf3 Nc6 Bc4", eco: "C50", difficulty: "Easy" },
  { name: "Sicilian Defense", fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", moves: "e4 c5", eco: "B20", difficulty: "Easy" },
  { name: "French Defense", fen: "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", moves: "e4 e6", eco: "C00", difficulty: "Easy" },
  { name: "Queen's Gambit", fen: "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2", moves: "d4 d5 c4", eco: "D06", difficulty: "Easy" },

  // Medium (Common but slightly less distinct or varied)
  { name: "Caro-Kann Defense", fen: "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", moves: "e4 c6", eco: "B10", difficulty: "Medium" },
  { name: "Petrov's Defense", fen: "rnbqkb1r/pppppppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", moves: "e4 e5 Nf3 Nf6", eco: "C42", difficulty: "Medium" },
  { name: "Philidor Defense", fen: "rnbqkbnr/ppp1pppp/3p4/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3", moves: "e4 e5 Nf3 d6", eco: "C41", difficulty: "Medium" },
  { name: "Modern Defense", fen: "rnbqkbnr/pppppp1p/6p1/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", moves: "e4 g6", eco: "B06", difficulty: "Medium" },
  { name: "Owen's Defense", fen: "rnbqkbnr/pppppppp/1b6/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 1 2", moves: "e4 b6", eco: "B00", difficulty: "Medium" },
  { name: "Pirc Defense", fen: "rnbqkbnr/ppp1pppp/3p4/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", moves: "e4 d6", eco: "B00", difficulty: "Medium" },
  { name: "King's Gambit", fen: "rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2", moves: "e4 e5 f4", eco: "C30", difficulty: "Medium" },
  { name: "Ponziani Opening", fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R b KQkq - 0 3", moves: "e4 e5 Nf3 Nc6 c3", eco: "C44", difficulty: "Medium" },
  { name: "King's Indian Attack", fen: "rnbqkbnr/ppp1pppp/8/3p4/8/3P1N2/PPP1PPPP/RNBQKB1R b KQkq - 0 2", moves: "Nf3 d5 d3", eco: "A07", difficulty: "Medium" },
  { name: "Colle System", fen: "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/4PN2/PPP1PPPP/RNBQKB1R b KQkq - 0 3", moves: "d4 d5 Nf3 Nf6 e3", eco: "D05", difficulty: "Medium" },
  { name: "London System", fen: "rnbqkbnr/ppp1pppp/8/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR b KQkq - 1 2", moves: "d4 d5 Bf4", eco: "D02", difficulty: "Medium" },
  { name: "Indian Defense", fen: "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2", moves: "d4 Nf6", eco: "A45", difficulty: "Medium" },
  { name: "King's Indian Defense", fen: "rnbqk2r/ppppppbp/5np1/8/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 2 4", moves: "d4 Nf6 c4 g6 Nc3 Bg7", eco: "E60", difficulty: "Medium" },
  { name: "English Opening", fen: "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1", moves: "c4", eco: "A10", difficulty: "Medium" },
  { name: "Scandinavian Defense", fen: "rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", moves: "e4 d5", eco: "B01", difficulty: "Medium" },

  // Hard (Transpositional, Hypermodern, or less common)
  { name: "Alekhine's Defense", fen: "rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 1 2", moves: "e4 Nf6", eco: "B02", difficulty: "Hard" },
  { name: "Nimzo-Indian Defense", fen: "rnbqk2r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 4", moves: "d4 Nf6 c4 e6 Nc3 Bb4", eco: "E20", difficulty: "Hard" },
  { name: "Dutch Defense", fen: "rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2", moves: "d4 f5", eco: "A80", difficulty: "Hard" },
  { name: "Reti Opening", fen: "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 1 1", moves: "Nf3", eco: "A04", difficulty: "Hard" },
  { name: "Vienna Game", fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 2", moves: "e4 e5 Nc3", eco: "C25", difficulty: "Hard" },
  { name: "Scotch Game", fen: "rnbqkbnr/pppp1ppp/8/3Pp3/8/5N2/PPP1PPPP/RNBQKB1R b KQkq - 0 3", moves: "e4 e5 Nf3 Nc6 d4 exd4", eco: "C44", difficulty: "Hard" },
  { name: "Slav Defense", fen: "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3", moves: "d4 d5 c4 c6", eco: "D10", difficulty: "Hard" },
  { name: "Grunfeld Defense", fen: "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4", moves: "d4 Nf6 c4 g6 Nc3 d5", eco: "D80", difficulty: "Hard" },
  { name: "Benoni Defense", fen: "rnbqkb1r/pp1ppppp/5n2/2p5/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3", moves: "d4 Nf6 c4 c5", eco: "A56", difficulty: "Hard" },
  { name: "Catalan Opening", fen: "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3", moves: "d4 Nf6 c4 e6 g3", eco: "E00", difficulty: "Hard" },
  { name: "Bogo-Indian Defense", fen: "rnbqk2r/pppp1ppp/4pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 2 3", moves: "d4 Nf6 c4 e6 Nf3 Bb4+", eco: "E11", difficulty: "Hard" },
  { name: "Budapest Gambit", fen: "rnbqkb1r/pppp1ppp/5n2/4p3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3", moves: "d4 Nf6 c4 e5", eco: "A51", difficulty: "Hard" },
  { name: "Queen's Indian Defense", fen: "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4", moves: "d4 Nf6 c4 e6 Nf3 b6", eco: "E12", difficulty: "Hard" },
  { name: "Chigorin Defense", fen: "r1bqkbnr/ppp1pppp/2n5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 2 3", moves: "d4 d5 c4 Nc6", eco: "D07", difficulty: "Hard" },
  { name: "Marshall Defense", fen: "rnbqkb1r/ppp1pppp/5n2/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 2 3", moves: "d4 d5 c4 Nf6", eco: "D06", difficulty: "Hard" },
  { name: "Albin Counter-Gambit", fen: "rnbqkbnr/ppp1pppp/8/3pp3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3", moves: "d4 d5 c4 e5", eco: "D08", difficulty: "Hard" },
  { name: "Baltic Defense", fen: "rnbqk1nr/ppp1pppp/8/3p1b2/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 1 3", moves: "d4 d5 c4 Bf5", eco: "D06", difficulty: "Hard" },
  { name: "Trompowsky Attack", fen: "rnbqkb1r/pppppppp/5n2/6B1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq - 1 2", moves: "d4 Nf6 Bg5", eco: "A45", difficulty: "Hard" },
  { name: "Larsen's Opening", fen: "rnbqkbnr/pppppppp/8/8/8/1P6/P1PPPPPP/RNBQKBNR b KQkq - 0 1", moves: "b3", eco: "A01", difficulty: "Hard" },
  { name: "Bird's Opening", fen: "rnbqkbnr/pppppppp/8/8/5P2/8/PPPPP1PP/RNBQKBNR b KQkq - 0 1", moves: "f4", eco: "A02", difficulty: "Hard" },

  // Very Hard (Full catalog + tricky sideline variations)
  ...VERY_HARD_OPENINGS,
  ...ADDITIONAL_OPENINGS
];
