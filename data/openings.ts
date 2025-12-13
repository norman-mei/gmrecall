import { ChessOpening } from '../types';
import { VERY_HARD_OPENINGS } from './very_hard_openings';
import { ADDITIONAL_OPENINGS } from './additional_openings';

export const OPENINGS: ChessOpening[] = [
  {
    name: "English Opening",
    fen: "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1",
    moves: "c4",
    eco: "A10",
    difficulty: "Easy"
  },
  {
    name: "Reti Opening",
    fen: "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 1 1",
    moves: "Nf3",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Larsen's Opening",
    fen: "rnbqkbnr/pppppppp/8/8/8/1P6/P1PPPPPP/RNBQKBNR b KQkq - 0 1",
    moves: "b3",
    eco: "A01",
    difficulty: "Easy"
  },
  {
    name: "Bird's Opening",
    fen: "rnbqkbnr/pppppppp/8/8/5P2/8/PPPPP1PP/RNBQKBNR b KQkq - 0 1",
    moves: "f4",
    eco: "A02",
    difficulty: "Easy"
  },
  {
    name: "Anderssen's Opening",
    fen: "rnbqkbnr/pppppppp/8/8/8/P7/1PPPPPPP/RNBQKBNR b KQkq - 0 1",
    moves: "a3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Ware/Meadow Hay Opening",
    fen: "rnbqkbnr/pppppppp/8/8/P7/8/1PPPPPPP/RNBQKBNR b KQkq - 0 1",
    moves: "a4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Saragossa Opening",
    fen: "rnbqkbnr/pppppppp/8/8/8/2P5/PP1PPPPP/RNBQKBNR b KQkq - 0 1",
    moves: "c3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "English Opening",
    fen: "rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1",
    moves: "c4",
    eco: "A10",
    difficulty: "Easy"
  },
  {
    name: "Mieses Opening",
    fen: "rnbqkbnr/pppppppp/8/8/8/3P4/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
    moves: "d3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn",
    fen: "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
    moves: "d4",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Van't Kruijs Opening",
    fen: "rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
    moves: "e3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn",
    fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
    moves: "e4",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Barnes/Gedult's Opening",
    fen: "rnbqkbnr/pppppppp/8/8/8/5P2/PPPPP1PP/RNBQKBNR b KQkq - 0 1",
    moves: "f3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Bird System",
    fen: "rnbqkbnr/pppppppp/8/8/5P2/8/PPPPP1PP/RNBQKBNR b KQkq - 0 1",
    moves: "f4",
    eco: "A02",
    difficulty: "Easy"
  },
  {
    name: "Benko/Hungarian Opening",
    fen: "rnbqkbnr/pppppppp/8/8/8/6P1/PPPPPP1P/RNBQKBNR b KQkq - 0 1",
    moves: "g3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Deprez/Kádas/Desprès Opening",
    fen: "rnbqkbnr/pppppppp/8/8/7P/8/PPPPPPP1/RNBQKBNR b KQkq - 0 1",
    moves: "h4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti/Zukertort Opening",
    fen: "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 1 1",
    moves: "Nf3",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Paris/Amar Opening",
    fen: "rnbqkbnr/pppppppp/8/8/8/7N/PPPPPPPP/RNBQKB1R b KQkq - 1 1",
    moves: "Nh3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Sicilian Defense",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 c5",
    eco: "B20",
    difficulty: "Easy"
  },
  {
    name: "French Defense",
    fen: "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 e6",
    eco: "C00",
    difficulty: "Easy"
  },
  {
    name: "Caro-Kann Defense",
    fen: "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 c6",
    eco: "B10",
    difficulty: "Easy"
  },
  {
    name: "Modern Defense",
    fen: "rnbqkbnr/pppppp1p/6p1/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 g6",
    eco: "B06",
    difficulty: "Easy"
  },
  {
    name: "Owen's Defense",
    fen: "rnbqkbnr/pppppppp/1b6/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 1 2",
    moves: "e4 b6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Pirc Defense",
    fen: "rnbqkbnr/ppp1pppp/3p4/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 d6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Scandinavian Defense",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 d5",
    eco: "B01",
    difficulty: "Easy"
  },
  {
    name: "Dutch Defense",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
    moves: "d4 f5",
    eco: "A80",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Dutch Defence",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/1P6/8/P1PPPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "b4 f5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Polish Defence",
    fen: "rnbqkbnr/p1pppppp/8/1p6/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
    moves: "d4 b5",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
    moves: "d4 f5",
    eco: "A80",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 c5",
    eco: "B20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence",
    fen: "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 c6",
    eco: "B10",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Pirc Defence",
    fen: "rnbqkbnr/ppp1pppp/3p4/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 d6",
    eco: "B07",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Open Game",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 e5",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence",
    fen: "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 e6",
    eco: "C00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Barnes Defence",
    fen: "rnbqkbnr/ppppp1pp/5p2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 f6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Carr's Defence",
    fen: "rnbqkbnr/ppppppp1/7p/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 h6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Myers Defence",
    fen: "rnbqkbnr/p1pppppp/8/1p6/5P2/8/PPPPP1PP/RNBQKBNR w KQkq - 0 2",
    moves: "f4 b5",
    eco: "A02",
    difficulty: "Easy"
  },
  {
    name: "Benko Opening-Dutch Defence",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/8/6P1/PPPPPP1P/RNBQKBNR w KQkq - 0 2",
    moves: "g3 f5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Benko Opening-Myers Defence",
    fen: "rnbqkbnr/pppppp1p/8/6p1/8/6P1/PPPPPP1P/RNBQKBNR w KQkq - 0 2",
    moves: "g3 g5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Nimzowitsch-Larsen Attack",
    fen: "rnbqkbnr/pppppppp/8/8/8/1P6/P1PPPPPP/RNBQKBNR b KQkq - 0 1",
    moves: "b3",
    eco: "A01",
    difficulty: "Easy"
  },
  {
    name: "Grob Attack",
    fen: "rnbqkbnr/pppppppp/8/8/6P1/8/PPPPPP1P/RNBQKBNR b KQkq - 0 1",
    moves: "g4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Sodium/Durkin's Attack",
    fen: "rnbqkbnr/pppppppp/8/8/8/N7/PPPPPPPP/R1BQKBNR b KQkq - 1 1",
    moves: "Na3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Ware Opening-Aquisap Opening",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/P3P3/8/1PPP1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "a4 e5 e4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Ware Opening-Crab Opening",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/P6P/8/1PPPPPP1/RNBQKBNR b KQkq - 0 2",
    moves: "a4 e5 h4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-The Whale",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e5 c4",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Johansen Opening",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/6P1/PPPP1P1P/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e5 g3",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Morphy Opening",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/7P/PPPP1PP1/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e5 h3",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "Clemenz Opening-Global Opening",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/8/P6P/1PPPPPP1/RNBQKBNR b KQkq - 0 2",
    moves: "h3 e5 a3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Indian Defense",
    fen: "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2",
    moves: "d4 Nf6",
    eco: "A45",
    difficulty: "Easy"
  },
  {
    name: "Alekhine's Defense",
    fen: "rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 1 2",
    moves: "e4 Nf6",
    eco: "B02",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence",
    fen: "rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2",
    moves: "d4 Nf6",
    eco: "A45",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Alekhine Defence",
    fen: "rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 1 2",
    moves: "e4 Nf6",
    eco: "B02",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Adams Defence",
    fen: "rnbqkb1r/pppppppp/7n/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 1 2",
    moves: "e4 Nh6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Dutch Variation",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/5P2/8/PPPPP1PP/RNBQKBNR w KQkq - 0 2",
    moves: "f4 d5",
    eco: "A03",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Horsefly Defence",
    fen: "rnbqkb1r/pppppppp/7n/8/5P2/8/PPPPP1PP/RNBQKBNR w KQkq - 1 2",
    moves: "f4 Nh6",
    eco: "A03",
    difficulty: "Easy"
  },
  {
    name: "Benko Opening-Indian Defence",
    fen: "rnbqkb1r/pppppppp/5n2/8/8/6P1/PPPPPP1P/RNBQKBNR w KQkq - 1 2",
    moves: "g3 Nf6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Ware Defence",
    fen: "rnbqkbnr/1ppppppp/8/p7/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",
    moves: "Nf3 a5",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Polish Defence",
    fen: "rnbqkbnr/p1pppppp/8/1p6/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",
    moves: "Nf3 b5",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Slav Invitation",
    fen: "rnbqkbnr/pp1ppppp/2p5/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",
    moves: "Nf3 c6",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Basman Defence",
    fen: "rnbqkbnr/ppppppp1/7p/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",
    moves: "Nf3 h6",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Slav Defense",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 d5 c4 c6",
    eco: "D10",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Borg Gambit",
    fen: "rnbqkbnr/pppppp1p/8/6p1/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
    moves: "d4 g5",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Polish Gambit",
    fen: "rnbqkbnr/p1pppppp/8/1p6/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 b5",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Bird System-From Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/5P2/8/PPPPP1PP/RNBQKBNR w KQkq - 0 2",
    moves: "f4 e5",
    eco: "A02",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Hobbs Gambit",
    fen: "rnbqkbnr/pppppp1p/8/6p1/5P2/8/PPPPP1PP/RNBQKBNR w KQkq - 0 2",
    moves: "f4 g5",
    eco: "A02",
    difficulty: "Easy"
  },
  {
    name: "London System",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR b KQkq - 1 2",
    moves: "d4 d5 Bf4",
    eco: "D02",
    difficulty: "Easy"
  },
  {
    name: "Vienna Game",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 2",
    moves: "e4 e5 Nc3",
    eco: "C25",
    difficulty: "Easy"
  },
  {
    name: "Ware Opening-Meadow Hay Trap",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/P7/R7/1PPPPPPP/1NBQKBNR b Kkq - 1 2",
    moves: "a4 e5 Ra3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Polish/Orangutan/Sokolsky/Hunt Opening",
    fen: "rnbqkbnr/pppppppp/8/8/1P6/8/P1PPPPPP/RNBQKBNR b KQkq - 0 1",
    moves: "b4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Bugayev Attack",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/1P6/P7/2PPPPPP/RNBQKBNR b KQkq - 0 2",
    moves: "b4 e5 a3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Mason's Attack",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/3P1P2/8/PPP1P1PP/RNBQKBNR b KQkq - 0 2",
    moves: "d4 d5 f4",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Portuguese Opening",
    fen: "rnbqkbnr/pppp1ppp/8/1B2p3/4P3/8/PPPP1PPP/RNBQK1NR b KQkq - 1 2",
    moves: "e4 e5 Bb5",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Blackburne Opening",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPPBPPP/RNBQK1NR b KQkq - 1 2",
    moves: "e4 e5 Be2",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Vienna Game",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 2",
    moves: "e4 e5 Nc3",
    eco: "C25",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Alapin's Opening",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPPNPPP/RNBQKB1R b KQkq - 1 2",
    moves: "e4 e5 Ne2",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Mueller Opening",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPPQPPP/RNB1KBNR b KQkq - 1 2",
    moves: "e4 e5 Qe2",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Mujannah Opening",
    fen: "rnbqkb1r/pppppppp/5n2/8/2P2P2/8/PP1PP1PP/RNBQKBNR b KQkq - 0 2",
    moves: "f4 Nf6 c4",
    eco: "A03",
    difficulty: "Easy"
  },
  {
    name: "Clemenz Opening/Mead's/Basman's/de Klerk's Opening",
    fen: "rnbqkbnr/pppppppp/8/8/8/7P/PPPPPPP1/RNBQKBNR b KQkq - 0 1",
    moves: "h3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Deprez Opening-Beginner's Trap",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/7P/7R/PPPPPPP1/RNBQKBN1 b Qkq - 1 2",
    moves: "h4 d5 Rh3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst/Sleipner/Heinrichsen/Van Geet Opening",
    fen: "rnbqkbnr/pppppppp/8/8/8/2N5/PPPPPPPP/R1BQKBNR b KQkq - 1 1",
    moves: "Nc3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-The Potato",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/P7/5N2/1PPPPPPP/RNBQKB1R b KQkq - 0 2",
    moves: "Nf3 d5 a4",
    eco: "A06",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Dutch Variation",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",
    moves: "Nf3 f5",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Queen's Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
    moves: "d4 d5 c4",
    eco: "D06",
    difficulty: "Easy"
  },
  {
    name: "King's Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e5 f4",
    eco: "C30",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Husky's Gambit",
    fen: "rnbqkbnr/p1pppppp/8/1p6/1PP5/8/P2PPPPP/RNBQKBNR b KQkq - 0 2",
    moves: "b4 b5 c4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
    moves: "d4 d5 c4",
    eco: "D06",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Zurich Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/3P2P1/8/PPP1PP1P/RNBQKBNR b KQkq - 0 2",
    moves: "d4 d5 g4",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Centre Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e5 d4",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e5 f4",
    eco: "C30",
    difficulty: "Easy"
  },
  {
    name: "Deprez Opening-Kádas Gambit #1",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/1P5P/8/P1PPPPP1/RNBQKBNR b KQkq - 0 2",
    moves: "h4 c5 b4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Petrov's Defense",
    fen: "rnbqkb1r/pppppppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
    moves: "e4 e5 Nf3 Nf6",
    eco: "C42",
    difficulty: "Easy"
  },
  {
    name: "Philidor Defense",
    fen: "rnbqkbnr/ppp1pppp/3p4/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 e5 Nf3 d6",
    eco: "C41",
    difficulty: "Easy"
  },
  {
    name: "Benoni Defense",
    fen: "rnbqkb1r/pp1ppppp/5n2/2p5/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 Nf6 c4 c5",
    eco: "A56",
    difficulty: "Easy"
  },
  {
    name: "Chigorin Defense",
    fen: "r1bqkbnr/ppp1pppp/2n5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 2 3",
    moves: "d4 d5 c4 Nc6",
    eco: "D07",
    difficulty: "Easy"
  },
  {
    name: "Marshall Defense",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 2 3",
    moves: "d4 d5 c4 Nf6",
    eco: "D06",
    difficulty: "Easy"
  },
  {
    name: "Baltic Defense",
    fen: "rnbqk1nr/ppp1pppp/8/3p1b2/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 1 3",
    moves: "d4 d5 c4 Bf5",
    eco: "D06",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Baltic Defence",
    fen: "rn1qkbnr/ppp1pppp/8/3p1b2/1P6/8/PBPPPPPP/RN1QKBNR w KQkq - 2 3",
    moves: "b4 d5 Bb2 Bf5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Czech Defence",
    fen: "rnbqkbnr/ppp2ppp/3p4/4p3/1P6/8/PBPPPPPP/RN1QKBNR w KQkq - 0 3",
    moves: "b4 e5 Bb2 d6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Scandinavian Defence",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "c4 d5",
    eco: "A10",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Agincourt Defence",
    fen: "rnbqkbnr/pppp1ppp/4p3/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "c4 e6",
    eco: "A13",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Dutch Defence",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "c4 f5",
    eco: "A10",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-English #2/Queen Fianchetto/Owen Defence",
    fen: "rnbqkbnr/p1pppppp/1p6/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
    moves: "d4 b6",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
    moves: "d4 c5",
    eco: "A43",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Rat/Modern Defence",
    fen: "rnbqkbnr/ppp1pppp/3p4/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
    moves: "d4 d6",
    eco: "A41",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Horwitz/Franco-Indian Defence",
    fen: "rnbqkbnr/pppp1ppp/4p3/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
    moves: "d4 e6",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Modern/Queen Pawn Fianchetto/Kotov Defence",
    fen: "rnbqkbnr/pppppp1p/6p1/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
    moves: "d4 g6",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Corn Stalk/Ware Defence",
    fen: "rnbqkbnr/1ppppppp/8/p7/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 a5",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-St. George/Baker Defence",
    fen: "rnbqkbnr/1ppppppp/p7/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 a6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Owen/Queen's Fianchetto/Greek Defence",
    fen: "rnbqkbnr/p1pppppp/1p6/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 b6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Centre Countergambit/Scandinavian Defence",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 d5",
    eco: "B01",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Borg/Basman/Macho Grob Defence",
    fen: "rnbqkbnr/pppppp1p/8/6p1/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 g5",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Robatsch/Modern/King Pawn Fianchetto Defence",
    fen: "rnbqkbnr/pppppp1p/6p1/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 g6",
    eco: "B06",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Goldsmith/Pickering Defence",
    fen: "rnbqkbnr/ppppppp1/8/7p/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 h5",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Benko Opening-Sicilian Invitation",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/8/6P1/PPPPPP1P/RNBQKBNR w KQkq - 0 2",
    moves: "g3 c5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Benko Opening-Slav Formation",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/8/6P1/PPPPPPBP/RNBQK1NR w KQkq - 0 3",
    moves: "g3 d5 Bg2 c6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Benko Opening-Lasker Simul Special",
    fen: "rnbqkbnr/ppppppp1/8/7p/8/6P1/PPPPPP1P/RNBQKBNR w KQkq - 0 2",
    moves: "g3 h5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Grob Attack-Alessi Gambit",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/6P1/8/PPPPPP1P/RNBQKBNR w KQkq - 0 2",
    moves: "g4 f5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Laroche Gambit",
    fen: "rnbqkbnr/p1pppppp/8/1p6/8/2N5/PPPPPPPP/R1BQKBNR w KQkq - 0 2",
    moves: "Nc3 b5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Ross Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",
    moves: "Nf3 e5",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Herrström Gambit",
    fen: "rnbqkbnr/pppppp1p/8/6p1/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",
    moves: "Nf3 g5",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Black Mustang Defence",
    fen: "r1bqkbnr/pppppppp/2n5/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 2 2",
    moves: "Nf3 Nc6",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "King's Indian Attack",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/8/3P1N2/PPP1PPPP/RNBQKB1R b KQkq - 0 2",
    moves: "Nf3 d5 d3",
    eco: "A07",
    difficulty: "Easy"
  },
  {
    name: "Ware Opening-Potato Variation",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/P7/5N2/1PPPPPPP/RNBQKB1R b KQkq - 1 2",
    moves: "a4 d5 Nf3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Levitsky Attack",
    fen: "rnbqkbnr/ppp1pppp/8/3p2B1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq - 1 2",
    moves: "d4 d5 Bg5",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Amazon Attack",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/3Q4/PPP1PPPP/RNB1KBNR b KQkq - 1 2",
    moves: "d4 d5 Qd3",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Bongcloud Attack",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPPKPPP/RNBQ1BNR b kq - 1 2",
    moves: "e4 e5 Ke2",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Napoleon's Attack",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5Q2/PPPP1PPP/RNB1KBNR b KQkq - 1 2",
    moves: "e4 e5 Qf3",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Polish Variation",
    fen: "rnbqkb1r/pppppppp/5n2/8/1P3P2/8/P1PPP1PP/RNBQKBNR b KQkq - 0 2",
    moves: "f4 Nf6 b4",
    eco: "A02",
    difficulty: "Easy"
  },
  {
    name: "Grob Attack-Macho Variation",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/6P1/7P/PPPPPP2/RNBQKBNR b KQkq - 0 2",
    moves: "g4 e5 h3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Albin Counter-Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/3pp3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 d5 c4 e5",
    eco: "D08",
    difficulty: "Easy"
  },
  {
    name: "Ponziani Opening",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 Nc6 c3",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "Colle System",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/4PN2/PPP1PPPP/RNBQKB1R b KQkq - 0 3",
    moves: "d4 d5 Nf3 Nf6 e3",
    eco: "D05",
    difficulty: "Easy"
  },
  {
    name: "Catalan Opening",
    fen: "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3",
    moves: "d4 Nf6 c4 e6 g3",
    eco: "E00",
    difficulty: "Easy"
  },
  {
    name: "Anderssen's Opening-Andersspike",
    fen: "rnbqkbnr/pppppp1p/6p1/8/6P1/P7/1PPPPP1P/RNBQKBNR b KQkq - 0 2",
    moves: "a3 g6 g4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Rat Defence-Old Indian Defence",
    fen: "rnbqkbnr/ppp1pppp/3p4/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
    moves: "d4 d6 c4",
    eco: "A41",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Bednikova/Czyzewski Opening",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/1P6/P1PP1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e5 b3",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Leonardis/Indian/Clam Opening",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/3P4/PPP2PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e5 d3",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "Deprez Opening-Myers Variation",
    fen: "rnbqkbnr/pp2pppp/8/2pp4/3P3P/4P3/PPP2PP1/RNBQKBNR b KQkq - 0 3",
    moves: "h4 d5 d4 c5 e3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Tübingen Gambit",
    fen: "rnbqkb1r/pppppppp/5n2/8/6P1/2N5/PPPPPP1P/R1BQKBNR b KQkq - 0 2",
    moves: "Nc3 Nf6 g4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Ware Opening-King's Pawn Variation",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/P7/8/1PPPPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "a4 e5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Symmetrical Variation",
    fen: "rnbqkbnr/p1pppppp/8/1p6/1P6/8/P1PPPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "b4 b5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Outflank Variation",
    fen: "rnbqkbnr/pp1ppppp/2p5/8/1P6/8/P1PPPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "b4 c6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-German Defence",
    fen: "rnb1kbnr/ppp1pppp/3q4/3p4/1P6/8/PBPPPPPP/RN1QKBNR w KQkq - 2 3",
    moves: "b4 d5 Bb2 Qd6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Symmetrical Variation",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "c4 c5",
    eco: "A30",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Bremen/King's English Variation",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "c4 e5",
    eco: "A20",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Great Snake Variation",
    fen: "rnbqkbnr/pppppp1p/6p1/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "c4 g6",
    eco: "A10",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Indian Defence",
    fen: "rnbqkb1r/pppppppp/5n2/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 1 2",
    moves: "c4 Nf6",
    eco: "A15",
    difficulty: "Easy"
  },
  {
    name: "Mieses Opening-Reversed Rat Variation",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/8/3P4/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
    moves: "d3 e5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Australian Defence",
    fen: "r1bqkbnr/pppppppp/n7/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2",
    moves: "d4 Na6",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Lemming/Guatemala Defence",
    fen: "r1bqkbnr/pppppppp/n7/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 1 2",
    moves: "e4 Na6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence",
    fen: "r1bqkbnr/pppppppp/2n5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 1 2",
    moves: "e4 Nc6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Benko Opening-Symmetrical Variation",
    fen: "rnbqkbnr/pppppp1p/6p1/8/8/6P1/PPPPPP1P/RNBQKBNR w KQkq - 0 2",
    moves: "g3 g6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Deprez Opening-Koola-Koola Variation",
    fen: "rnbqkbnr/1ppppppp/8/p7/7P/8/PPPPPPP1/RNBQKBNR w KQkq - 0 2",
    moves: "h4 a5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-St. George Defence",
    fen: "rnbqkbnr/1ppppppp/p7/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",
    moves: "Nf3 a6",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Sicilian Invitation",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",
    moves: "Nf3 c5",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Queen Pawn/Zukertort Defence",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",
    moves: "Nf3 d5",
    eco: "A06",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Wade Defence/Pirc Invitation",
    fen: "rnbqkbnr/ppp1pppp/3p4/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",
    moves: "Nf3 d6",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Zukertort Opening-Arctic Defence",
    fen: "rnbqkbnr/ppppp1pp/5p2/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",
    moves: "Nf3 f6",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Symmetrical Variation",
    fen: "rnbqkb1r/pppppppp/5n2/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 2 2",
    moves: "Nf3 Nf6",
    eco: "A05",
    difficulty: "Easy"
  },
  {
    name: "Trompowsky Attack",
    fen: "rnbqkb1r/pppppppp/5n2/6B1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq - 1 2",
    moves: "d4 Nf6 Bg5",
    eco: "A45",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Twyble Attack",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/8/2N5/PPPPPPPP/1RBQKBNR b Kkq - 1 2",
    moves: "Nc3 c5 Rb1",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Grunfeld Defense",
    fen: "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4",
    moves: "d4 Nf6 c4 g6 Nc3 d5",
    eco: "D80",
    difficulty: "Easy"
  },
  {
    name: "Budapest Gambit",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 Nf6 c4 e5",
    eco: "A51",
    difficulty: "Easy"
  },
  {
    name: "Queen's Indian Defense",
    fen: "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 Nf6 c4 e6 Nf3 b6",
    eco: "E12",
    difficulty: "Easy"
  },
  {
    name: "Anderssen's Opening-Creepy Crawly Formation",
    fen: "rnbqkbnr/ppp2ppp/8/3pp3/8/P6P/1PPPPPP1/RNBQKBNR w KQkq - 0 3",
    moves: "a3 e5 h3 d5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Birmingham Gambit",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/1P6/8/P1PPPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "b4 c5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Wolferts Gambit",
    fen: "rnbqkbnr/pp1p1ppp/8/2p1p3/1P6/8/PBPPPPPP/RN1QKBNR w KQkq - 0 3",
    moves: "b4 e5 Bb2 c5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Jaenisch/Halibut Gambit",
    fen: "rnbqkbnr/p1pppppp/8/1p6/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "c4 b5",
    eco: "A10",
    difficulty: "Easy"
  },
  {
    name: "English Opening-English Defence",
    fen: "rnbqkbnr/p1pp1ppp/1p2p3/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "c4 b6 d4 e6",
    eco: "A10",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Agincourt Defence-English Defence",
    fen: "rnbqkbnr/p1pp1ppp/1p2p3/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "c4 e6 d4 b6",
    eco: "A13",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence-Mujannah/Clarendon Court Formation",
    fen: "rnbqkbnr/pp1pp1pp/8/2pP1p2/8/8/PPP1PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 c5 d5 f5",
    eco: "A43",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Anglo-Slav Opening",
    fen: "rnbqkbnr/pp2pppp/2pp4/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 c6 c4 d6",
    eco: "A41",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Charlick Gambit Complex",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",
    moves: "d4 e5",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Horwitz Defence-Keres/English Defence",
    fen: "rnbqkbnr/p1pp1ppp/1p2p3/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 e6 c4 b6",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Pirc Defence-Maroczy Defence",
    fen: "rnbqkbnr/ppp2ppp/3p4/4p3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 d6 d4 e5",
    eco: "B07",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Pirc Defence-Small Centre Defence",
    fen: "rnbqkbnr/ppp2ppp/3pp3/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 d6 d4 e6",
    eco: "C00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Pirc Defence-Balogh Defence",
    fen: "rnbqkbnr/ppp1p1pp/3p4/5p2/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 d6 d4 f5",
    eco: "B07",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Fred Defence/Duras Gambit",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    moves: "e4 f5",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Lasker Gambit",
    fen: "rnbqkbnr/pppp2pp/5p2/4P3/8/8/PPPPP1PP/RNBQKBNR w KQkq - 0 3",
    moves: "f4 e5 fxe5 f6",
    eco: "A02",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Double Duck Formation",
    fen: "rnbqkbnr/ppp1p1pp/8/3p1p2/3P1P2/8/PPP1P1PP/RNBQKBNR w KQkq - 0 3",
    moves: "f4 f5 d4 d5",
    eco: "A02",
    difficulty: "Easy"
  },
  {
    name: "Deprez Opening-Schneider Gambit",
    fen: "rnbqkbnr/pppppp1p/8/6p1/7P/8/PPPPPPP1/RNBQKBNR w KQkq - 0 2",
    moves: "h4 g5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Damhaug Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/3pp3/5P2/2N5/PPPPP1PP/R1BQKBNR w KQkq - 0 3",
    moves: "Nc3 d5 f4 e5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Ruy Lopez",
    fen: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
    moves: "e4 e5 Nf3 Nc6 Bb5",
    eco: "C60",
    difficulty: "Easy"
  },
  {
    name: "Italian Game",
    fen: "r1bqkbnr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
    moves: "e4 e5 Nf3 Nc6 Bc4",
    eco: "C50",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Myers Variation",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/PP6/8/1BPPPPPP/RN1QKBNR b KQkq - 0 3",
    moves: "b4 d5 Bb2 c6 a4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Zukertort System",
    fen: "rnbqkb1r/pppppppp/5n2/8/1P6/5N2/P1PPPPPP/RNBQKB1R b KQkq - 2 2",
    moves: "b4 Nf6 Nf3",
    eco: "A05",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Bremen Variation-Double Whammy Variation",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/2P2P2/8/PP1PP1PP/RNBQKBNR b KQkq - 0 2",
    moves: "c4 e5 f4",
    eco: "A20",
    difficulty: "Easy"
  },
  {
    name: "Mieses Opening-Myers Spike Attack",
    fen: "rnbqkbnr/pppppp1p/6p1/8/6P1/3P4/PPP1PP1P/RNBQKBNR b KQkq - 0 2",
    moves: "d3 g6 g4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Czyzewski Variation",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/6P1/PPP1PP1P/RNBQKBNR b KQkq - 0 2",
    moves: "d4 d5 g3",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Fianchetto/Indian Attack",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/3P4/6P1/PPP1PP1P/RNBQKBNR b KQkq - 0 2",
    moves: "d4 f5 g3",
    eco: "A81",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Korchnoi Attack",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/3P4/7P/PPP1PPP1/RNBQKBNR b KQkq - 0 2",
    moves: "d4 f5 h3",
    eco: "A80",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Canard Opening",
    fen: "rnbqkb1r/pppppppp/5n2/8/3P1P2/8/PPP1P1PP/RNBQKBNR b KQkq - 0 2",
    moves: "d4 Nf6 f4",
    eco: "A45",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Mengarini Variation",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/P7/1PPP1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 c5 a3",
    eco: "B20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Myers Attack",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/P3P3/8/1PPP1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 c5 a4",
    eco: "B20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Snyder Variation",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/1P6/P1PP1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 c5 b3",
    eco: "B20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Alapin Variation",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 c5 c3",
    eco: "B22",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Grand Prix/McDonnell/Macdonnell Attack",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 c5 f4",
    eco: "B21",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Grob Variation",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/4P1P1/8/PPPP1P1P/RNBQKBNR b KQkq - 0 2",
    moves: "e4 c5 g4",
    eco: "B20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-King David's Opening",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPPKPPP/RNBQ1BNR b kq - 1 2",
    moves: "e4 c5 Ke2",
    eco: "B20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-The Brick",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/7N/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
    moves: "e4 c5 Nh3",
    eco: "B20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Pirc Defence-Harmonist Variation",
    fen: "rnbqkbnr/ppp1pppp/3p4/8/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 d6 f4",
    eco: "B07",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Pirc Defence-Spike Attack",
    fen: "rnbqkbnr/ppp1pppp/3p4/8/4P1P1/8/PPPP1P1P/RNBQKBNR b KQkq - 0 2",
    moves: "e4 d6 g4",
    eco: "B07",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Pirc Defence-Petruccioli Attack",
    fen: "rnbqkbnr/ppp1pppp/3p4/8/4P2P/8/PPPP1PP1/RNBQKBNR b KQkq - 0 2",
    moves: "e4 d6 h4",
    eco: "B07",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Mengarini's Variation",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/P7/1PPP1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e5 a3",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Bishop Opening",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq - 1 2",
    moves: "e4 e5 Bc4",
    eco: "C23",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Tortise/Tortoise Opening",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/3B4/PPPP1PPP/RNBQK1NR b KQkq - 1 2",
    moves: "e4 e5 Bd3",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Lopez/Macleod Attack",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e5 c3",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Head Variation",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5P2/PPPP2PP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e5 f3",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
    moves: "e4 e5 Nf3",
    eco: "C40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Speers Opening",
    fen: "rnbqkb1r/pppp1ppp/5n2/4pQ2/4P3/8/PPPP1PPP/RNB1KBNR b KQkq - 3 3",
    moves: "e4 e5 Qg4 Nf6 Qf5",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Réti/Spielmann/Horwitz Attack",
    fen: "rnbqkbnr/pppp1ppp/4p3/8/4P3/1P6/P1PP1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e6 b3",
    eco: "C00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Bird Invitation",
    fen: "rnbqkbnr/pppp1ppp/4p3/1B6/4P3/8/PPPP1PPP/RNBQK1NR b KQkq - 1 2",
    moves: "e4 e6 Bb5",
    eco: "C00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Steiner Variation",
    fen: "rnbqkbnr/pppp1ppp/4p3/8/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e6 c4",
    eco: "C00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Hanham/King's Indian Attack",
    fen: "rnbqkbnr/pppp1ppp/4p3/8/4P3/3P4/PPP2PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e6 d3",
    eco: "C00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Normal Variation",
    fen: "rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e6 d4",
    eco: "C01",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Steinitz Attack",
    fen: "rnbqkbnr/pppp1ppp/4p3/4P3/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e6 e5",
    eco: "C00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-La Bourdonnais Variation",
    fen: "rnbqkbnr/pppp1ppp/4p3/8/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e6 f4",
    eco: "C00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence Declined",
    fen: "r1bqkbnr/pppppppp/2n5/8/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 2 2",
    moves: "e4 Nc6 Nf3",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Alekhine Defence-Main Line",
    fen: "rnbqkb1r/pppppppp/5n2/4P3/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 Nf6 e5",
    eco: "B02",
    difficulty: "Easy"
  },
  {
    name: "Barnes Opening-Hammerschlag/Fried Fox/Pork Chop Opening",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/8/5P2/PPPPPKPP/RNBQ1BNR b kq - 1 2",
    moves: "f3 e5 Kf2",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Dutch Variation-Canard Variation",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/3P1P2/8/PPP1P1PP/RNBQKBNR b KQkq - 0 2",
    moves: "f4 d5 d4",
    eco: "A03",
    difficulty: "Easy"
  },
  {
    name: "Benko Opening-Reversed Alekhine Defence",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq - 1 2",
    moves: "g3 e5 Nf3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Grob Attack-Grob Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/6P1/8/PPPPPPBP/RNBQK1NR b KQkq - 1 2",
    moves: "g4 d5 Bg2",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Grob Attack-Spike-Hurst Attack",
    fen: "rnbqkbnr/ppp2ppp/8/3pp3/2P3P1/8/PP1PPPBP/RNBQK1NR b KQkq - 0 3",
    moves: "g4 e5 Bg2 d5 c4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-Santasiere's Folly",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/1P6/5N2/P1PPPPPP/RNBQKB1R b KQkq - 0 2",
    moves: "Nf3 d5 b4",
    eco: "A06",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-Reversed Mexican Defence",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/8/2N2N2/PPPPPPPP/R1BQKB1R b KQkq - 1 2",
    moves: "Nf3 d5 Nc3",
    eco: "A06",
    difficulty: "Easy"
  },
  {
    name: "Nimzowitsch-Larsen Attack-Polish Variation",
    fen: "rnbqkbnr/p1pppppp/8/1p6/8/1P6/P1PPPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "b3 b5",
    eco: "A01",
    difficulty: "Easy"
  },
  {
    name: "Nimzowitsch-Larsen Attack-Symmetrical Variation",
    fen: "rnbqkbnr/p1pppppp/1p6/8/8/1P6/P1PPPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "b3 b6",
    eco: "A01",
    difficulty: "Easy"
  },
  {
    name: "Nimzowitsch-Larsen Attack-English Variation",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/8/1P6/P1PPPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "b3 c5",
    eco: "A01",
    difficulty: "Easy"
  },
  {
    name: "Nimzowitsch-Larsen Attack-Classical Variation",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/8/1P6/P1PPPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "b3 d5",
    eco: "A01",
    difficulty: "Easy"
  },
  {
    name: "Nimzowitsch-Larsen Attack-Modern Variation",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/8/1P6/P1PPPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "b3 e5",
    eco: "A01",
    difficulty: "Easy"
  },
  {
    name: "Nimzowitsch-Larsen Attack-Dutch Variation",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/8/1P6/P1PPPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "b3 f5",
    eco: "A01",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Grigorian/Aasum Variation",
    fen: "r1bqkbnr/pppppppp/2n5/8/1P6/8/P1PPPPPP/RNBQKBNR w KQkq - 1 2",
    moves: "b4 Nc6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Tübingen/Karniewski Variation",
    fen: "rnbqkb1r/pppppppp/7n/8/1P6/8/P1PPPPPP/RNBQKBNR w KQkq - 1 2",
    moves: "b4 Nh6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Lithuanian Variation",
    fen: "r1bqkbnr/pppppppp/2n5/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 1 2",
    moves: "c4 Nc6",
    eco: "A10",
    difficulty: "Easy"
  },
  {
    name: "Grob Attack-Double Grob/Symmetrical Variation",
    fen: "rnbqkbnr/pppppp1p/8/6p1/6P1/8/PPPPPP1P/RNBQKBNR w KQkq - 0 2",
    moves: "g4 g5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Reversed Nimzowitsch Variation",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/8/2N5/PPPPPPPP/R1BQKBNR w KQkq - 0 2",
    moves: "Nc3 e5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Queenside Fianchetto Variation",
    fen: "rnbqkbnr/p1pppppp/1p6/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",
    moves: "Nf3 b6",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Kingside Fianchetto Variation",
    fen: "rnbqkbnr/pppppp1p/6p1/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",
    moves: "Nf3 g6",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Anderssen's Opening-Polish Gambit",
    fen: "rnbqkbnr/1ppppppp/8/p7/1P6/P7/2PPPPPP/RNBQKBNR b KQkq - 0 2",
    moves: "a3 a5 b4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
    moves: "d4 d5 e4",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Charlick Gambit Complex Declined",
    fen: "rnbqkbnr/pppp1ppp/8/3Pp3/8/8/PPP1PPPP/RNBQKBNR b KQkq - 0 2",
    moves: "d4 e5 d5",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Staunton Gambit",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
    moves: "d4 f5 e4",
    eco: "A82",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Krejcik Gambit",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/3P2P1/8/PPP1PP1P/RNBQKBNR b KQkq - 0 2",
    moves: "d4 f5 g4",
    eco: "A80",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Wing Gambit",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/1P2P3/8/P1PP1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 c5 b4",
    eco: "B20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Centre Countergambit-Unnamed Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/4P3/1P6/P1PP1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 d5 b3",
    eco: "B01",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Centre Countergambit-Zilbermints Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/1P2P3/8/P1PP1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 d5 b4",
    eco: "B01",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Wagner-Zwitersch Gambit",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2",
    moves: "f4 f5 e4",
    eco: "A02",
    difficulty: "Easy"
  },
  {
    name: "Benko Opening-Buecker Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/3pp3/1P6/6P1/P1PPPPBP/RNBQK1NR b KQkq - 0 3",
    moves: "g3 e5 Bg2 d5 b4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Clemenz Opening-Spike Lee Gambit",
    fen: "rnbqkbnr/ppppppp1/8/7p/6P1/7P/PPPPPP2/RNBQKBNR b KQkq - 0 2",
    moves: "h3 h5 g4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Deprez Opening-Kadas Gambit #3",
    fen: "rnbqkbnr/pppp1ppp/8/8/3p3P/2P5/PP2PPP1/RNBQKBNR b KQkq - 0 3",
    moves: "h4 e5 d4 exd4 c3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Deprez Opening-Steinbok Gambit",
    fen: "rnbqkbnr/ppppp1pp/8/8/4p2P/3P4/PPP2PP1/RNBQKBNR b KQkq - 0 3",
    moves: "h4 f5 e4 fxe4 d3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "King's Indian Defense",
    fen: "rnbqk2r/ppppppbp/5np1/8/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 2 4",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7",
    eco: "E60",
    difficulty: "Easy"
  },
  {
    name: "Nimzo-Indian Defense",
    fen: "rnbqk2r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 4",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4",
    eco: "E20",
    difficulty: "Easy"
  },
  {
    name: "Scotch Game",
    fen: "rnbqkbnr/pppp1ppp/8/3Pp3/8/5N2/PPP1PPPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 Nc6 d4 exd4",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "Ware Opening-Wing Gambit",
    fen: "rn1qkbnr/pbpppppp/8/1P6/8/8/1PPPPPPP/RNBQKBNR w KQkq - 1 3",
    moves: "a4 b5 axb5 Bb7",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Caro/Anglo-Slav/Caro-Kann Defensive System",
    fen: "rnbqkbnr/pp1ppppp/2p5/8/2P5/8/PP1PPPPP/RNBQKBNR w KQkq - 0 2",
    moves: "c4 c6",
    eco: "A11",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Bremen Variation-Drill Variation",
    fen: "rnbqkbnr/pppp1pp1/8/4p2p/2P5/6P1/PP1PPP1P/RNBQKBNR w KQkq - 0 3",
    moves: "c4 e5 g3 h5",
    eco: "A20",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Great Snake Variation-Adorjan Defence",
    fen: "rnbqkbnr/pppp1p1p/6p1/4p3/2P1P3/8/PP1P1PPP/RNBQKBNR w KQkq - 0 3",
    moves: "c4 g6 e4 e5",
    eco: "A10",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence-Pawn Thrust Variation",
    fen: "rnbqkbnr/pp1p1ppp/8/2pPp3/8/8/PPP1PPPP/RNBQKBNR w KQkq e6 0 3",
    moves: "d4 c5 d5 e5",
    eco: "A44",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Classical Variation",
    fen: "rnbqkbnr/pppp2pp/4p3/5p2/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 f5 c4 e6",
    eco: "A84",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Indian Defence",
    fen: "rnbqkb1r/ppp1pppp/3p1n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 Nf6 c4 d6",
    eco: "A53",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-King's Indian/Kingside Fianchetto Defence",
    fen: "rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 Nf6 c4 g6",
    eco: "E60",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Reversed Chigorin Defence",
    fen: "rnbqkb1r/pp1ppppp/5n2/2p5/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq - 0 3",
    moves: "d4 Nf6 Nc3 c5",
    eco: "A45",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Pseudo-Queen's Indian/Capablanca Defence",
    fen: "rnbqkb1r/p1pppppp/1p3n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 3",
    moves: "d4 Nf6 Nf3 b6",
    eco: "A47",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Pseudo-King's Indian/East Indian Defence",
    fen: "rnbqkb1r/pppppp1p/5np1/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 3",
    moves: "d4 Nf6 Nf3 g6",
    eco: "A48",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Corn Stalk Defence-Snaglepuss Defence",
    fen: "r1bqkbnr/1ppppppp/2n5/p7/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 a5 d4 Nc6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-St. George Defence-New St. George Variation",
    fen: "rnbqkbnr/1ppp1ppp/p3p3/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 a6 d4 e6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Owen Defence-Guatemala Defence",
    fen: "rn1qkbnr/p1pppppp/bp6/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 b6 d4 Ba6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Pirc Defence-Antal Defence",
    fen: "r1bqkbnr/pppnpppp/3p4/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 d6 d4 Nd7",
    eco: "B07",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Classical/Boi Defence",
    fen: "rnbqk1nr/pppp1ppp/8/2b1p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq - 2 3",
    moves: "e4 e5 Bc4 Bc5",
    eco: "C23",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Philidor Counterattack",
    fen: "rnbqkbnr/pp1p1ppp/2p5/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq - 0 3",
    moves: "e4 e5 Bc4 c6",
    eco: "C23",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Calabrese/Calabrian Countergambit",
    fen: "rnbqkbnr/pppp2pp/8/4pp2/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq - 0 3",
    moves: "e4 e5 Bc4 f5",
    eco: "C23",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Vienna Game-Max Lange Defence",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 3",
    moves: "e4 e5 Nc3 Nc6",
    eco: "C25",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Jalalabad Defence",
    fen: "rnbqkbnr/pp1p1ppp/8/2p1p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 e5 Nf3 c5",
    eco: "C40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Queen's Pawn/Elephant Countergambit",
    fen: "rnbqkbnr/ppp2ppp/8/3pp3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 e5 Nf3 d5",
    eco: "C40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Philidor's Defence",
    fen: "rnbqkbnr/ppp2ppp/3p4/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 e5 Nf3 d6",
    eco: "C41",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Latvian/Greco Countergambit",
    fen: "rnbqkbnr/pppp2pp/8/4pp2/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 e5 Nf3 f5",
    eco: "C40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Damiano Defence",
    fen: "rnbqkbnr/pppp2pp/5p2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 e5 Nf3 f6",
    eco: "C40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Normal/Queen's Knight Game (Italian Game)",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
    moves: "e4 e5 Nf3 Nc6",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "Ruy Lopez-Cozio Defence",
    fen: "r1bqkb1r/ppppnppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nge7",
    eco: "C60",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Petrov's Defence/Russian Game",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
    moves: "e4 e5 Nf3 Nf6",
    eco: "C42",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Barnes Defence-Fried Fox Defence",
    fen: "rnbq1bnr/pppppkpp/5p2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQ - 1 3",
    moves: "e4 f6 d4 Kf7",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Robatsch Defence-Lizard Variation",
    fen: "rnbqkbnr/ppp1pp1p/3p2p1/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 g6 d4 d6",
    eco: "B06",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Robatsch Defence-Norwegian Defence",
    fen: "rnbqkb1r/pppppp1p/5np1/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 g6 d4 Nf6",
    eco: "B06",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Goldsmith Defence-Picklepuss Defence",
    fen: "rnbqkb1r/ppppppp1/5n2/7p/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 h5 d4 Nf6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence-French Connection",
    fen: "r1bqkbnr/pppp1ppp/2n1p3/8/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 3",
    moves: "e4 Nc6 Nc3 e6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence-Pirc Connection",
    fen: "r1bqkbnr/pppppp1p/2n3p1/8/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 3",
    moves: "e4 Nc6 Nc3 g6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Alekhine Defence-Brooklyn Defence",
    fen: "rnbqkbnr/pppppppp/8/4P3/8/8/PPPP1PPP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 Nf6 e5 Ng8",
    eco: "B02",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Platz Gambit",
    fen: "rnbqkb1r/ppppnppp/8/4P3/8/8/PPPPP1PP/RNBQKBNR w KQkq - 1 3",
    moves: "f4 e5 fxe5 Ne7",
    eco: "A02",
    difficulty: "Easy"
  },
  {
    name: "Benko Opening-Reversed Modern Defence",
    fen: "rnbqkbnr/pp2pppp/8/2pp4/8/6P1/PPPPPPBP/RNBQK1NR w KQkq - 0 3",
    moves: "g3 d5 Bg2 c5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Benko Opening-Catalan Formation",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/8/6P1/PPPPPPBP/RNBQK1NR w KQkq - 0 3",
    moves: "g3 d5 Bg2 e6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Grob Attack-Keene Defence",
    fen: "rnbqkbnr/pp3ppp/2p5/3pp3/6P1/7P/PPPPPPB1/RNBQK1NR w KQkq - 0 4",
    moves: "g4 d5 h3 e5 Bg2 c6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Clemenz Opening-Global Opening-Creepy Crawly Variation",
    fen: "rnbqkbnr/ppp2ppp/8/3pp3/8/P6P/1PPPPPP1/RNBQKBNR w KQkq - 0 3",
    moves: "h3 e5 a3 d5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Queen's Gambit Invitation",
    fen: "rnbqkbnr/pppp1ppp/4p3/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2",
    moves: "Nf3 e6",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Symmetrical Variation-All Knights Opening",
    fen: "r1bqkb1r/pppppppp/2n2n2/8/8/2N2N2/PPPPPPPP/R1BQKB1R w KQkq - 4 3",
    moves: "Nf3 Nf6 Nc3 Nc6",
    eco: "A05",
    difficulty: "Easy"
  },
  {
    name: "Ware Opening-Ware Gambit",
    fen: "rnbqkbnr/ppp3pp/P7/3ppp2/8/4P3/1PPP1PPP/RNBQKBNR b KQkq - 0 4",
    moves: "a4 e5 a5 d5 e3 f5 a6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Symmetrical Variation-Normal/Asymmetrical Variation",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq - 1 2",
    moves: "c4 c5 Nc3",
    eco: "A34",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Bremen Variation-Reversed Sicilian",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq - 1 2",
    moves: "c4 e5 Nc3",
    eco: "A21",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Bremen Variation-Nimzowitsch Variation",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq - 1 2",
    moves: "c4 e5 Nf3",
    eco: "A20",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Bremen Variation-English Queen Variation",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/Q1P5/8/PP1PPPPP/RNB1KBNR b KQkq - 1 2",
    moves: "c4 e5 Qa4",
    eco: "A20",
    difficulty: "Easy"
  },
  {
    name: "Mieses Opening-Reversed Rat Variation-Valencia Opening",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/8/3P4/PPPBPPPP/RN1QKBNR b KQkq - 1 2",
    moves: "d3 e5 Bd2",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Sarratt/Mason Attack",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/3P1B2/8/PPP1PPPP/RN1QKBNR b KQkq - 1 2",
    moves: "d4 d5 Bf4",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Chigorin/Veresov Attack",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/2N5/PPP1PPPP/R1BQKBNR b KQkq - 1 2",
    moves: "d4 d5 Nc3",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Grunfeld Reversed/Zukertort Variation",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq - 1 2",
    moves: "d4 d5 Nf3",
    eco: "D02",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Raphael Variation",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/3P4/2N5/PPP1PPPP/R1BQKBNR b KQkq - 1 2",
    moves: "d4 f5 Nc3",
    eco: "A80",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Manhattan/Alapin/Ulvestad/Kmoch Attack",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/3P4/3Q4/PPP1PPPP/RNB1KBNR b KQkq - 1 2",
    moves: "d4 f5 Qd3",
    eco: "A80",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Normal Variation",
    fen: "rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
    moves: "d4 Nf6 c4",
    eco: "A50",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Pawn Push Variation",
    fen: "rnbqkb1r/pppppppp/5n2/3P4/8/8/PPP1PPPP/RNBQKBNR b KQkq - 0 2",
    moves: "d4 Nf6 d5",
    eco: "A45",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Paleface Attack",
    fen: "rnbqkb1r/pppppppp/5n2/8/3P4/5P2/PPP1P1PP/RNBQKBNR b KQkq - 0 2",
    moves: "d4 Nf6 f3",
    eco: "A45",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Tartakower Attack",
    fen: "rnbqkb1r/pppppppp/5n2/8/3P4/6P1/PPP1PP1P/RNBQKBNR b KQkq - 0 2",
    moves: "d4 Nf6 g3",
    eco: "A45",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Torre/Knights Attack",
    fen: "rnbqkb1r/pppppppp/5n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq - 2 2",
    moves: "d4 Nf6 Nf3",
    eco: "A46",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Bowlder/Philidor Attack",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq - 1 2",
    moves: "e4 c5 Bc4",
    eco: "B20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Slow Sicilian Variation",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPPBPPP/RNBQK1NR b KQkq - 1 2",
    moves: "e4 c5 Be2",
    eco: "B20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Kronberger Variation",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/N7/PPPP1PPP/R1BQKBNR b KQkq - 1 2",
    moves: "e4 c5 Na3",
    eco: "B20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Closed Variation",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 2",
    moves: "e4 c5 Nc3",
    eco: "B23",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Keres/Chameleon Variation",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPPNPPP/RNBQKB1R b KQkq - 1 2",
    moves: "e4 c5 Ne2",
    eco: "B20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-King's Knight Variation",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
    moves: "e4 c5 Nf3",
    eco: "B27",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Amazon Attack",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/4P1Q1/8/PPPP1PPP/RNB1KBNR b KQkq - 1 2",
    moves: "e4 c5 Qg4",
    eco: "B20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Patzer Opening/Parham/Wayward Queen Attack",
    fen: "rnbqkbnr/pppp1ppp/8/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR b KQkq - 1 2",
    moves: "e4 e5 Qh5",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Queen's Knight Variation",
    fen: "rnbqkbnr/pppp1ppp/4p3/8/4P3/2N5/PPPP1PPP/R1BQKBNR b KQkq - 1 2",
    moves: "e4 e6 Nc3",
    eco: "C00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Knight/King's Knight Variation",
    fen: "rnbqkbnr/pppp1ppp/4p3/8/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
    moves: "e4 e6 Nf3",
    eco: "C00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Chigorin Variation",
    fen: "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPPQPPP/RNB1KBNR b KQkq - 1 2",
    moves: "e4 e6 Qe2",
    eco: "C00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence-Centre Variation",
    fen: "r1bqkbnr/pppppppp/2n5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 Nc6 d4",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Alekhine Defence-Maróczy Variation",
    fen: "rnbqkb1r/pppppppp/5n2/8/4P3/3P4/PPP2PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 Nf6 d3",
    eco: "B02",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Alekhine Defence-Omega Variation",
    fen: "rnbqkb1r/pppppppp/5n2/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 Nf6 d4",
    eco: "B02",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Reversed Nimzowitsch Variation-Battambang Opening",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/8/P1N5/1PPPPPPP/R1BQKBNR b KQkq - 0 2",
    moves: "Nc3 e5 a3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Anti-Pirc Variation",
    fen: "rnbqkbnr/pppppp1p/6p1/8/8/2N4P/PPPPPPP1/R1BQKBNR b KQkq - 0 2",
    moves: "Nc3 g6 h3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Sicilian Invitation-2 Knights Variation",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/8/2N2N2/PPPPPPPP/R1BQKB1R b KQkq - 1 2",
    moves: "Nf3 c5 Nc3",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-Old Indian Attack",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/8/3P1N2/PPP1PPPP/RNBQKB1R b KQkq - 0 2",
    moves: "Nf3 d5 d3",
    eco: "A06",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-Barcza Opening/King's Indian Attack",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq - 0 2",
    moves: "Nf3 d5 g3",
    eco: "A07",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Dutch Variation-Improved Lisitsin Variation",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/8/3P1N2/PPP1PPPP/RNBQKB1R b KQkq - 0 2",
    moves: "Nf3 f5 d3",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Symmetrical Variation-Quiet System",
    fen: "rnbqkb1r/pppppppp/5n2/8/8/4PN2/PPPP1PPP/RNBQKB1R b KQkq - 0 2",
    moves: "Nf3 Nf6 e3",
    eco: "A05",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-King's Indian Attack",
    fen: "rnbqkb1r/pppppppp/5n2/8/8/5NP1/PPPPPP1P/RNBQKB1R b KQkq - 0 2",
    moves: "Nf3 Nf6 g3",
    eco: "A05",
    difficulty: "Easy"
  },
  {
    name: "Ware Opening-Cologne Gambit",
    fen: "r1bqkbnr/p1pnpppp/1p6/3p4/P2P4/2N5/1PP1PPPP/R1BQKBNR w KQkq - 2 4",
    moves: "a4 b6 d4 d5 Nc3 Nd7",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Nimzowitsch-Larsen Attack-Indian Variation",
    fen: "rnbqkb1r/pppppppp/5n2/8/8/1P6/P1PPPPPP/RNBQKBNR w KQkq - 1 2",
    moves: "b3 Nf6",
    eco: "A01",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Zilbermints Gambit",
    fen: "rnbqkbnr/pppp1p1p/8/4p1p1/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "c4 g5 d4 e5",
    eco: "A10",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Zilbermints Gambit",
    fen: "rnbqkbnr/p1p1pppp/8/1p1p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 d5 c4 b5",
    eco: "D06",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Symmetrical/Austrian Defence",
    fen: "rnbqkbnr/pp2pppp/8/2pp4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 d5 c4 c5",
    eco: "D02",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Slav Defence",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 d5 c4 c6",
    eco: "D10",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Albin Countergambit",
    fen: "rnbqkbnr/ppp2ppp/8/3pp3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 d5 c4 e5",
    eco: "D08",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 d5 c4 e6",
    eco: "D30",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-St. George Defence-Zilbermints Gambit",
    fen: "rnbqkbnr/1ppp1ppp/p7/4p3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 a6 d4 e5",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-The Whale-Bavarian Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/3pp3/2P1P3/8/PP1P1PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e5 c4 d5",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Leonardis Opening-King's Gambit Reversed/Indian Gambit",
    fen: "rnbqkbnr/pppp2pp/8/4pp2/4P3/3P4/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e5 d3 f5",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Centre Gambit-Beyer/Breyer Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/3pp3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e5 d4 d5",
    eco: "C21",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Mafia Defence",
    fen: "rnbqkbnr/pp1p1ppp/8/2p1p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e5 f4 c5",
    eco: "C30",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Falkbeer Countergambit",
    fen: "rnbqkbnr/ppp2ppp/8/3pp3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e5 f4 d5",
    eco: "C31",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit-Panteldakis Countergambit",
    fen: "rnbqkbnr/pppp2pp/8/4pp2/4PP2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e5 f4 f5",
    eco: "C30",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit-Zilbermints Double Countergambit",
    fen: "rnbqkbnr/pppp1p1p/8/4p1p1/4PP2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e5 f4 g5",
    eco: "C30",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Borg Defence-Zilbermints Gambit",
    fen: "rnbqkbnr/pppp1p1p/8/4p1p1/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 g5 d4 e5",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Robatsch Defence-Fianchetto Gambit",
    fen: "rnbqkbnr/ppppp2p/6p1/5p2/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 g6 d4 f5",
    eco: "B06",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Carr's Defence-Zilbermints Gambit",
    fen: "rnbqkbnr/pppp1pp1/7p/4p3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 h6 d4 e5",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Melleby Gambit",
    fen: "rnbqkbnr/pp2pppp/8/2p5/3pNP2/8/PPPPP1PP/R1BQKBNR w KQkq - 0 4",
    moves: "Nc3 d5 f4 d4 Ne4 c5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Pfeiffer Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/4p3/3pNP2/8/PPPPP1PP/R1BQKBNR w KQkq - 0 4",
    moves: "Nc3 d5 f4 d4 Ne4 e5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Amar Opening-Paris Gambit",
    fen: "rnbqkbnr/ppp3pp/8/3ppp2/4P3/5P1N/PPPP2PP/RNBQKB1R w KQkq - 0 4",
    moves: "Nh3 d5 f3 e5 e4 f5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Symmetrical Variation-Wing Gambit",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/1PP5/8/P2PPPPP/RNBQKBNR b KQkq - 0 2",
    moves: "c4 c5 b4",
    eco: "A30",
    difficulty: "Easy"
  },
  {
    name: "Mieses Opening-Venezolana Opening",
    fen: "r1bqkbnr/pp1ppppp/2n5/2p5/8/2NP2P1/PPP1PP1P/R1BQKBNR b KQkq - 0 3",
    moves: "d3 c5 Nc3 Nc6 g3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence-Benoni Gambit Accepted",
    fen: "rnbqkbnr/pp1ppppp/8/2P5/8/8/PPP1PPPP/RNBQKBNR b KQkq - 0 2",
    moves: "d4 c5 dxc5",
    eco: "A43",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Charlick Gambit Complex Declined-Reversed French Variation",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/3P4/4P3/PPP2PPP/RNBQKBNR b KQkq - 0 2",
    moves: "d4 e5 e3",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-East Indian Defence-Catalan Opening",
    fen: "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3",
    moves: "d4 Nf6 c4 e6 g3",
    eco: "E00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-King's Indian Defence",
    fen: "rnbqkb1r/pppppp1p/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3",
    moves: "d4 Nf6 c4 g6 Nc3",
    eco: "E61",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Omega Gambit",
    fen: "rnbqkb1r/pppppppp/5n2/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
    moves: "d4 Nf6 e4",
    eco: "A45",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-McStraw Opening",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/P4N2/1PPP1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 Nc6 a3",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Palmiotto Opening",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/1P3N2/P1PP1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 Nc6 b3",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ponziani Opening",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 Nc6 c3",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Torre Opening",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/3P1N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 Nc6 d3",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 Nc6 d4",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Konstantinopolsky Opening",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5NP1/PPPP1P1P/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 Nc6 g3",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Coll Opening",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N1P/PPPP1PP1/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 Nc6 h3",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-3 Knights Game",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq - 3 3",
    moves: "e4 e5 Nf3 Nc6 Nc3",
    eco: "C46",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence-Wheeler Gambit",
    fen: "r1bqkbnr/pppppppp/2n5/8/1P2P3/8/P1PP1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 Nc6 b4",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Alekhine Defence-Normal/Main Line",
    fen: "rnbqkb1r/pppppppp/8/3nP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 Nf6 e5 Nd5 d4",
    eco: "B03",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Alekhine Defence-John Tracy Gambit",
    fen: "rnbqkb1r/pppppppp/5n2/8/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 2 2",
    moves: "e4 Nf6 Nf3",
    eco: "B02",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Dutch Variation-Sturm/Mujannah Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/2P2P2/8/PP1PP1PP/RNBQKBNR b KQkq - 0 2",
    moves: "f4 d5 c4",
    eco: "A03",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Dutch Variation-Williams Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2",
    moves: "f4 d5 e4",
    eco: "A03",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Dutch Variation-Dudweiler Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/5PP1/8/PPPPP2P/RNBQKBNR b KQkq - 0 2",
    moves: "f4 d5 g4",
    eco: "A03",
    difficulty: "Easy"
  },
  {
    name: "Bird System-From Gambit-Bahr Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/5P2/2N5/PPPPP1PP/R1BQKBNR b KQkq - 1 2",
    moves: "f4 e5 Nc3",
    eco: "A02",
    difficulty: "Easy"
  },
  {
    name: "Benko Opening-Reversed Alekhine Defence-Reversed Norwegian Defence",
    fen: "rnbqkbnr/pppp1ppp/8/8/4p2N/6P1/PPPPPP1P/RNBQKB1R b KQkq - 1 3",
    moves: "g3 e5 Nf3 e4 Nh4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Duesseldorf Gambit",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/1P6/2N5/P1PPPPPP/R1BQKBNR b KQkq - 0 2",
    moves: "Nc3 c5 b4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Dougherty Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/8/4p3/2N2P2/PPPP2PP/R1BQKBNR b KQkq - 0 3",
    moves: "Nc3 d5 e4 dxe4 f3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Klüver Gambit",
    fen: "rnbqkbnr/ppppp1pp/8/8/4p3/2NP4/PPP2PPP/R1BQKBNR b KQkq - 0 3",
    moves: "Nc3 f5 e4 fxe4 d3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-Réti Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq - 0 2",
    moves: "Nf3 d5 c4",
    eco: "A09",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-Tennison/Lemberg/Zukertort Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 0 2",
    moves: "Nf3 d5 e4",
    eco: "A06",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Stabenow Variation",
    fen: "rnbqk1nr/pppp1ppp/3b4/4p3/1P6/8/PBPPPPPP/RN1QKBNR w KQkq - 2 3",
    moves: "b4 e5 Bb2 Bd6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Bremen Variation-Reversed Closed Sicilian",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq - 2 3",
    moves: "c4 e5 Nc3 Nc6",
    eco: "A25",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Agincourt Defence-King's Knight Variation",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq - 0 3",
    moves: "c4 e6 Nf3 d5",
    eco: "A13",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Myers Variation",
    fen: "rnbqk1nr/ppppppbp/8/6p1/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 1 3",
    moves: "c4 g5 d4 Bg7",
    eco: "A10",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence-Jaffe's Folly/Snail Variation",
    fen: "r1bqkbnr/pp1ppppp/n7/2pP4/8/8/PPP1PPPP/RNBQKBNR w KQkq - 1 3",
    moves: "d4 c5 d5 Na6",
    eco: "A43",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Sarratt Attack-Steinitz Countergambit",
    fen: "rnbqkbnr/pp2pppp/8/2pp4/3P1B2/8/PPP1PPPP/RN1QKBNR w KQkq - 0 3",
    moves: "d4 d5 Bf4 c5",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Dutch System",
    fen: "rnbqkbnr/ppp1p1pp/8/3p1p2/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq - 0 3",
    moves: "d4 d5 Nc3 f5",
    eco: "A80",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Shropshire Defence",
    fen: "rnbqkbnr/ppp1ppp1/8/3p3p/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq - 0 3",
    moves: "d4 d5 Nc3 h5",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Grunfeld Reversed-Chigorin Variation",
    fen: "r1bqkbnr/ppp1pppp/2n5/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 2 3",
    moves: "d4 d5 Nf3 Nc6",
    eco: "D02",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Grunfeld Reversed-Symmetrical Variation",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 2 3",
    moves: "d4 d5 Nf3 Nf6",
    eco: "D02",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Rat Defence-Tartakower/Wade Defence",
    fen: "rn1qkbnr/ppp1pppp/3p4/8/3P2b1/5N2/PPP1PPPP/RNBQKB1R w KQkq - 2 3",
    moves: "d4 d6 Nf3 Bg4",
    eco: "A41",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Normal Variation",
    fen: "rnbqkb1r/ppppp1pp/5n2/5p2/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 1 3",
    moves: "d4 f5 c4 Nf6",
    eco: "A84",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Modern Defence-Robatsch Variation",
    fen: "rnbqk1nr/ppppppbp/6p1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 1 3",
    moves: "d4 g6 c4 Bg7",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Lundin/Kevitz-Mikenas(-Bogoljubow-Miles)/Nimzovich Defence",
    fen: "r1bqkbnr/pppppppp/2n5/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2",
    moves: "d4 Nc6",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-St. George Defence-Woodchuck Variation",
    fen: "r1bqkbnr/1ppppppp/p1n5/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 a6 d4 Nc6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Berlin Defence",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq - 2 3",
    moves: "e4 e5 Bc4 Nf6",
    eco: "C24",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Head Variation-Walkerling Variation",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5P2/PPPP2PP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 e5 f3 Nf6",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Vienna Game-Anderssen Defence",
    fen: "rnbqk1nr/pppp1ppp/8/2b1p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 3",
    moves: "e4 e5 Nc3 Bc5",
    eco: "C25",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Vienna Game-Falkbeer Variation",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 3",
    moves: "e4 e5 Nc3 Nf6",
    eco: "C26",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Duck Opening",
    fen: "rnbqk1nr/pppp1ppp/3b4/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
    moves: "e4 e5 Nf3 Bd6",
    eco: "C40",
    difficulty: "Easy"
  },
  {
    name: "Ruy Lopez-Retreat Variation",
    fen: "rnbqkbnr/pppp1ppp/8/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nb8",
    eco: "C60",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Gunderam/Brazilian Defence",
    fen: "rnb1kbnr/ppppqppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
    moves: "e4 e5 Nf3 Qe7",
    eco: "C40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Greco/McConnell Defence",
    fen: "rnb1kbnr/pppp1ppp/5q2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
    moves: "e4 e5 Nf3 Qf6",
    eco: "C40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence Declined-Williams Variation",
    fen: "r1bqkbnr/ppp1pppp/2np4/8/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 Nc6 Nf3 d6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence Declined-Colorado Counter/Lean Variation",
    fen: "r1bqkbnr/ppppp1pp/2n5/5p2/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 Nc6 Nf3 f5",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Alekhine Defence-Normal Variation",
    fen: "rnbqkb1r/pppppppp/8/3nP3/8/8/PPPP1PPP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 Nf6 e5 Nd5",
    eco: "B02",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Alekhine Defence-Mokele Mbembe/Buecker Variation",
    fen: "rnbqkb1r/pppppppp/8/4P3/4n3/8/PPPP1PPP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 Nf6 e5 Ne4",
    eco: "B02",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Alekhine Defence-Scandinavian Variation",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p4/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 3",
    moves: "e4 Nf6 Nc3 d5",
    eco: "B02",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Caro-Kann Variation",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 3",
    moves: "Nc3 d5 e4 c6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-Double Fianchetto/Barcza Variation",
    fen: "rnbqkbnr/ppp1pp1p/6p1/3p4/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq - 0 3",
    moves: "Nf3 d5 g3 g6",
    eco: "A07",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Zukertort Defence-Sicilian Knight Variation",
    fen: "r1bqkbnr/pp1ppppp/n7/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "Nf3 Na6 e4 c5",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Zukertort Defence-Drunken Cavalry Variation",
    fen: "r1bqkb1r/pppppppp/n6n/8/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 1 3",
    moves: "Nf3 Na6 e4 Nh6",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-King's Indian Attack-Barcza Defence",
    fen: "rnbqkb1r/pppppp1p/5np1/8/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq - 0 3",
    moves: "Nf3 Nf6 g3 g6",
    eco: "A05",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Zukertort Defence-Kingside Variation",
    fen: "rnbqkb1r/pppppp1p/6pn/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 3",
    moves: "Nf3 Nh6 d4 g6",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Nimzowitsch-Larsen Attack-Classical Variation",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/8/1P3N2/P1PPPPPP/RNBQKB1R b KQkq - 1 2",
    moves: "b3 d5 Nf3",
    eco: "A06",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Trompowsky/Ruth/Opovcensky Attack",
    fen: "rnbqkb1r/pppppppp/5n2/6B1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq - 2 2",
    moves: "d4 Nf6 Bg5",
    eco: "A45",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Alekhine Defence-Krejcik Variation",
    fen: "rnbqkb1r/pppppppp/5n2/8/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq - 2 2",
    moves: "e4 Nf6 Bc4",
    eco: "B02",
    difficulty: "Easy"
  },
  {
    name: "Durkin's Attack-Chenoboskian Variation",
    fen: "rnbqkbnr/pppppp1p/6p1/8/6P1/N7/PPPPPP1P/R1BQKBNR b KQkq - 0 2",
    moves: "Na3 g6 g4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-Ampel Variation",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKBR1 b Qkq - 1 2",
    moves: "Nf3 d5 Rg1",
    eco: "A06",
    difficulty: "Easy"
  },
  {
    name: "Bogo-Indian Defense",
    fen: "rnbqk2r/pppp1ppp/4pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 2 3",
    moves: "d4 Nf6 c4 e6 Nf3 Bb4+",
    eco: "E11",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Labahn Gambit",
    fen: "rnbqkbnr/pp2pppp/8/2p5/1P1p4/5N2/PBPPPPPP/RN1QKB1R w KQkq - 0 4",
    moves: "b4 d5 Bb2 d4 Nf3 c5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence-Schmid's System",
    fen: "rnbqkbnr/pp2pp1p/3p2p1/2pP4/8/2N5/PPP1PPPP/R1BQKBNR w KQkq - 0 4",
    moves: "d4 c5 d5 d6 Nc3 g6",
    eco: "A43",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Keres/Grau/Sahovic/Baltic Defence",
    fen: "rn1qkbnr/ppp1pppp/8/3p1b2/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 1 3",
    moves: "d4 d5 c4 Bf5",
    eco: "D06",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted",
    fen: "rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 d5 c4 dxc4",
    eco: "D20",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Alekhine Variation",
    fen: "rnbqkbnr/ppp1pp1p/6p1/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 d5 c4 g6",
    eco: "D06",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Chigorin's Defence",
    fen: "r1bqkbnr/ppp1pppp/2n5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 1 3",
    moves: "d4 d5 c4 Nc6",
    eco: "D07",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Marshall Defence",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 1 3",
    moves: "d4 d5 c4 Nf6",
    eco: "D06",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Grunfeld Reversed-Krause/Reversed Queen's Gambit",
    fen: "rnbqkbnr/pp2pppp/8/2pp4/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 3",
    moves: "d4 d5 Nf3 c5",
    eco: "D02",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Rat Defence-Old Indian Defence-English Rat Defence",
    fen: "rnbqkbnr/ppp2ppp/3p4/4p3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 d6 c4 e5",
    eco: "A41",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Charlick Gambit Complex-Soller Gambit",
    fen: "rnbqkbnr/pppp2pp/5p2/4P3/8/8/PPP1PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 e5 dxe5 f6",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Horwitz Defence-Franco-Sicilian Defence",
    fen: "rnbqkbnr/pp1p1ppp/4p3/2p5/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 e6 e4 c5",
    eco: "C01",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Staunton Gambit Accepted",
    fen: "rnbqkbnr/ppppp1pp/8/8/3Pp3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 f5 e4 fxe4",
    eco: "A82",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Indian Defence",
    fen: "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 Nf6 c4 e6 Nf3 b6",
    eco: "E12",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Grünfeld/Classical Defence",
    fen: "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4",
    moves: "d4 Nf6 c4 g6 Nc3 d5",
    eco: "D80",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Maddigan Gambit",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq - 0 3",
    moves: "d4 Nf6 Nc3 e5",
    eco: "A45",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Lazard Gambit",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/3P4/8/PPPNPPPP/R1BQKBNR w KQkq - 0 3",
    moves: "d4 Nf6 Nd2 e5",
    eco: "A45",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Massachussets Defence",
    fen: "rnbqkbnr/pp1pp1pp/2p5/5p2/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 c6 d4 f5",
    eco: "B12",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Pirc Defence-Lion Defence",
    fen: "r1bqkb1r/pppnpppp/3p1n2/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 3 4",
    moves: "e4 d6 d4 Nf6 Nc3 Nbd7",
    eco: "B07",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Khan Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/3pp3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq - 0 3",
    moves: "e4 e5 Bc4 d5",
    eco: "C23",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Lopez Attack-Lasa Gambit",
    fen: "rnbqkbnr/pppp2pp/8/4pp2/4P3/2P5/PP1P1PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e5 c3 f5",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Centre Gambit-Maróczy Variation",
    fen: "rnbqkbnr/ppp2ppp/3p4/4p3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e5 d4 d6",
    eco: "C21",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted",
    fen: "rnbqkbnr/pppp1ppp/8/8/3pP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e5 d4 exd4",
    eco: "C21",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Nimzovich Variation",
    fen: "rnbqkbnr/ppp2ppp/3p4/4p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e5 f4 d6",
    eco: "C30",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Accepted",
    fen: "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e5 f4 exf4",
    eco: "C33",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Queen's Knight Defence",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 e5 f4 Nc6",
    eco: "C30",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Petrov's Defence",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 e5 f4 Nf6",
    eco: "C31",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Albin Gambit",
    fen: "rnbqkbnr/1ppp1ppp/p7/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 e5 Nf3 a6",
    eco: "C40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Berry Gambit",
    fen: "rnbqkbnr/p1pp1ppp/1p6/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 e5 Nf3 b6",
    eco: "C40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Gunderam Gambit",
    fen: "rnbqkbnr/pp1p1ppp/2p5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 e5 Nf3 c6",
    eco: "C40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight's Opening-Wittoch Gambit",
    fen: "rnbqkbnr/pppp1p1p/6p1/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 e5 Nf3 g6",
    eco: "C40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-4 Knights Game",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 4 4",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6",
    eco: "C46",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Borg Defence-Borg Gambit",
    fen: "rnbqk1nr/ppppppbp/8/6p1/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 g5 d4 Bg7",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence Declined-El Columpio Defence",
    fen: "r1bqkb1r/pppppppp/2n5/4P3/6n1/5N2/PPPP1PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 Nc6 Nf3 Nf6 e5 Ng4",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Adams Defence-Hippopotamus Defence",
    fen: "rnbqkb1r/ppppp2p/5ppn/8/2PPP3/8/PP3PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 Nh6 d4 g6 c4 f6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Hobbs-Zilbermints Gambit",
    fen: "rnbqkbnr/pppppp2/7p/6p1/5P2/5N2/PPPPP1PP/RNBQKB1R w KQkq - 0 3",
    moves: "f4 h6 Nf3 g5",
    eco: "A02",
    difficulty: "Easy"
  },
  {
    name: "Benko Opening-Wiedenhagen-Beta Gambit",
    fen: "rnbqkbnr/ppp1pp1p/8/3p2p1/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq - 0 3",
    moves: "g3 d5 Nf3 g5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Benko Opening-Lasker Simul Special-Van Kruijk Gambit",
    fen: "rnbqkbnr/ppppppp1/8/8/7p/5NP1/PPPPPP1P/RNBQKB1R w KQkq - 0 3",
    moves: "g3 h5 Nf3 h4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Sodium Attack-Durkin Gambit",
    fen: "r1bqkbnr/pppp2pp/2n5/4pp2/2N1P3/8/PPPP1PPP/R1BQKBNR w KQkq - 0 4",
    moves: "Na3 e5 Nc4 Nc6 e4 f5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Sleipner Gambit",
    fen: "rnbqk1nr/ppp2ppp/8/3pp3/1b1P4/2N1P3/PPP2PPP/R1BQKBNR w KQkq - 1 4",
    moves: "Nc3 d5 e3 e5 d4 Bb4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Warsteiner Gambit",
    fen: "rnbqkbnr/ppp1pp1p/8/3p2p1/5P2/2N5/PPPPP1PP/R1BQKBNR w KQkq - 0 3",
    moves: "Nc3 d5 f4 g5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Hergert Gambit",
    fen: "r1bqkbnr/ppp2ppp/2np4/4P3/8/2N5/PPPPP1PP/R1BQKBNR w KQkq - 1 4",
    moves: "Nc3 d6 f4 e5 fxe5 Nc6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Wade Defence-Vos Gambit",
    fen: "rnbqkbnr/ppp2ppp/3p4/4p3/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 3",
    moves: "Nf3 d6 d4 e5",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Bugayev Advance Variation",
    fen: "rnbqkbnr/pppp2pp/5p2/1P2p3/8/8/PBPPPPPP/RN1QKBNR b KQkq - 0 3",
    moves: "b4 e5 Bb2 f6 b5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Caro-Kann Defensive System (Bogolubov Variation)",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/2P5/1P3N2/P2PPPPP/RNBQKB1R b KQkq - 0 3",
    moves: "c4 c6 Nf3 d5 b3",
    eco: "A12",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Dutch Defence-Polish Variation",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/1PP5/8/P2PPPPP/RNBQKBNR b KQkq - 0 2",
    moves: "c4 f5 b4",
    eco: "A10",
    difficulty: "Easy"
  },
  {
    name: "Mieses Opening-Venezolana Variation",
    fen: "r1bqkbnr/ppp1pppp/2n5/3p4/8/2NP2P1/PPP1PP1P/R1BQKBNR b KQkq - 0 3",
    moves: "d3 d5 Nc3 Nc6 g3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Richter Attack",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/2N2P2/PPP1P1PP/R1BQKBNR b KQkq - 0 3",
    moves: "d4 d5 Nc3 Nf6 f3",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Charlick Gambit Complex Declined-Reversed Alekhine Variation",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq - 1 2",
    moves: "d4 e5 Nf3",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Senechaud Variation",
    fen: "rnbqkbnr/pppp2pp/4p3/5p2/3P1BP1/8/PPP1PP1P/RN1QKBNR b KQkq - 0 3",
    moves: "d4 f5 Bf4 e6 g4",
    eco: "A80",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Sjodin Variation",
    fen: "rnbqkbnr/pppp2pp/4p3/5p2/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
    moves: "d4 f5 Nf3 e6 e4",
    eco: "A80",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Alekhine/Nimzovich Variation",
    fen: "rnbqkb1r/pppppp1p/5np1/8/2PP4/5P2/PP2P1PP/RNBQKBNR b KQkq - 0 3",
    moves: "d4 Nf6 c4 g6 f3",
    eco: "D70",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-King's Knight Variation",
    fen: "rnbqkb1r/pppppp1p/5np1/8/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 3",
    moves: "d4 Nf6 c4 g6 Nf3",
    eco: "E60",
    difficulty: "Easy"
  },
  {
    name: "Van't Kruijs Opening-Bouncing Bishop Variation",
    fen: "rnbqkbnr/p1pp1ppp/8/1p2p3/8/1B2P3/PPPP1PPP/RNBQK1NR b KQkq - 1 3",
    moves: "e3 e5 Bc4 b5 Bb3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Staunton-Cochrane/English Variation",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 c5 c4",
    eco: "B20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Steinitz/Lasker-Dunne Attack",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/6P1/PPPP1P1P/RNBQKBNR b KQkq - 0 2",
    moves: "e4 c5 g3",
    eco: "B20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Euwe Attack",
    fen: "rnbqkbnr/pp1ppppp/2p5/8/4P3/1P6/P1PP1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 c6 b3",
    eco: "B10",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Labahn Attack",
    fen: "rnbqkbnr/pp1ppppp/2p5/8/1P2P3/8/P1PP1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 c6 b4",
    eco: "B10",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Anti-Caro-Kann Defence/Accelerated Panov Attack",
    fen: "rnbqkbnr/pp1ppppp/2p5/8/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 c6 c4",
    eco: "B10",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Closed/Breyer Variation",
    fen: "rnbqkbnr/pp1ppppp/2p5/8/4P3/3P4/PPP2PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 c6 d3",
    eco: "B10",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Spike Variation",
    fen: "rnbqkbnr/pp1ppppp/2p5/8/4P1P1/8/PPPP1P1P/RNBQKBNR b KQkq - 0 2",
    moves: "e4 c6 g4",
    eco: "B10",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Pirc Defence-Lion's Jaw Variation",
    fen: "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/5P2/PPP3PP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 d6 d4 Nf6 f3",
    eco: "B07",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Latvian Countergambit Accepted",
    fen: "rnbqkbnr/pppp2pp/8/4pP2/8/5N2/PPPP1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 f5 exf5",
    eco: "C40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Italian Game",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
    moves: "e4 e5 Nf3 Nc6 Bc4",
    eco: "C50",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Inverted Hungarian/Tayler Opening",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPPBPPP/RNBQK2R b KQkq - 3 3",
    moves: "e4 e5 Nf3 Nc6 Be2",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Réti-Spielmann Attack",
    fen: "rnbqkbnr/pppp1ppp/4p3/8/4P3/6P1/PPPP1P1P/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e6 g3",
    eco: "C00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Robatsch Defence-Bishop Attack",
    fen: "rnbqk1nr/ppppppbp/6p1/8/2BPP3/8/PPP2PPP/RNBQK1NR b KQkq - 2 3",
    moves: "e4 g6 d4 Bg7 Bc4",
    eco: "B06",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Robatsch Defence-3 Pawns Attack",
    fen: "rnbqk1nr/ppppppbp/6p1/8/3PPP2/8/PPP3PP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 g6 d4 Bg7 f4",
    eco: "B06",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Robatsch Defence-Standard Line",
    fen: "rnbqk1nr/ppppppbp/6p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 2 3",
    moves: "e4 g6 d4 Bg7 Nc3",
    eco: "B06",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence Declined-Colorado Counter Accepted",
    fen: "r1bqkbnr/ppppp1pp/2n5/5P2/8/5N2/PPPP1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 Nc6 Nf3 f5 exf5",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Polish Variation-Batavo Variation",
    fen: "rnbqkb1r/pppppp1p/5np1/8/1P3P2/5N2/P1PPP1PP/RNBQKB1R b KQkq - 1 3",
    moves: "f4 Nf6 b4 g6 Nf3",
    eco: "A02",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Batavo-Polish Attack",
    fen: "rnbqkb1r/pppppp1p/5np1/8/1P3P2/5N2/P1PPP1PP/RNBQKB1R b KQkq - 0 3",
    moves: "f4 Nf6 Nf3 g6 b4",
    eco: "A02",
    difficulty: "Easy"
  },
  {
    name: "Grob Attack-Zilbermints Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/8/4p1P1/2N5/PPPP1P1P/R1BQKBNR b KQkq - 1 3",
    moves: "g4 d5 e4 dxe4 Nc3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Venezolana Variation",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p4/8/2NP2P1/PPP1PP1P/R1BQKBNR b KQkq - 0 3",
    moves: "Nc3 d5 d3 Nf6 g3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Hector Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/8/2B1p3/2N5/PPPP1PPP/R1BQK1NR b KQkq - 1 3",
    moves: "Nc3 d5 e4 dxe4 Bc4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Symmetrical Variation-Lemberg Gambit",
    fen: "rnbqkb1r/pppppppp/5n2/8/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 0 2",
    moves: "Nf3 Nf6 e4",
    eco: "A05",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-King's Indian Variation",
    fen: "rnbqkb1r/pppppp1p/5np1/8/1P6/8/PBPPPPPP/RN1QKBNR w KQkq - 0 3",
    moves: "b4 Nf6 Bb2 g6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Levitsky Attack-Welling Variation",
    fen: "rn1qkbnr/ppp1pppp/8/3p2B1/3P2b1/8/PPP1PPPP/RN1QKBNR w KQkq - 2 3",
    moves: "d4 d5 Bg5 Bg4",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Alburt Defence",
    fen: "rn1qkbnr/ppp1pppp/8/3p1b2/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq - 2 3",
    moves: "d4 d5 Nc3 Bf5",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Centre Countergambit-Modern Variation",
    fen: "rnbqkb1r/ppp1pppp/5n2/3P4/8/8/PPPP1PPP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 d5 exd5 Nf6",
    eco: "B01",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Wayward Queen Attack-Kiddie Countergambit",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR w KQkq - 2 3",
    moves: "e4 e5 Qh5 Nf6",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Borg Defence-Troon Gambit",
    fen: "rnbqkbnr/pppppp2/7p/8/3PP1pP/8/PPP2PP1/RNBQKBNR w KQkq - 0 4",
    moves: "e4 g5 d4 h6 h4 g4",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Grob Attack-Macho Variation-London Defence",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/6P1/7P/PPPPPP2/RNBQKBNR w KQkq - 1 3",
    moves: "g4 e5 h3 Nc6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-King's Indian Attack-Spassky Variation",
    fen: "rnbqkb1r/p1pppppp/5n2/1p6/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq - 0 3",
    moves: "Nf3 Nf6 g3 b5",
    eco: "A05",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Tartakower Gambit",
    fen: "rnbqkbnr/pppp2pp/5p2/4p3/1P2P3/8/PBPP1PPP/RN1QKBNR b KQkq - 0 3",
    moves: "b4 e5 Bb2 f6 e4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Schuffler Gambit",
    fen: "rnbqkbnr/pppp2pp/4p3/5p2/1P2P3/8/PBPP1PPP/RN1QKBNR b KQkq - 0 3",
    moves: "b4 e6 Bb2 f5 e4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Saragossa Opening-Bendig Gambit",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4PP2/2P5/PP1P2PP/RNBQKBNR b KQkq - 0 3",
    moves: "c3 e5 e4 Nc6 f4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Dutch Defence-Hickmann Gambit",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "c4 f5 e4",
    eco: "A10",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Dutch Defence-Wade Gambit",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/2P3P1/8/PP1PPP1P/RNBQKBNR b KQkq - 0 2",
    moves: "c4 f5 g4",
    eco: "A10",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence-Zilbermints-Benoni/Nakamura Gambit",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/1P1P4/8/P1P1PPPP/RNBQKBNR b KQkq - 0 2",
    moves: "d4 c5 b4",
    eco: "A43",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence-Liedmann Gambit",
    fen: "rnbqkbnr/pp1ppppp/8/8/2Pp4/4P3/PP3PPP/RNBQKBNR b KQkq - 0 3",
    moves: "d4 c5 c4 cxd4 e3",
    eco: "A43",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Franco-Benoni/Franco-Sicilian Defence",
    fen: "rnbqkbnr/pp1p1ppp/4p3/2pP4/4P3/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
    moves: "d4 c5 d5 e6 e4",
    eco: "A43",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Gedult Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/8/3Pp3/5P2/PPP3PP/RNBQKBNR b KQkq - 0 3",
    moves: "d4 d5 e4 dxe4 f3",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Indian Defence-Aged Gibbon Gambit",
    fen: "rnbqkb1r/ppp1pppp/3p1n2/8/2PP2P1/8/PP2PP1P/RNBQKBNR b KQkq - 0 3",
    moves: "d4 Nf6 c4 d6 g4",
    eco: "A53",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-East Indian Defence-Devin Gambit",
    fen: "rnbqkb1r/pppp1ppp/4pn2/8/2PP2P1/8/PP2PP1P/RNBQKBNR b KQkq - 0 3",
    moves: "d4 Nf6 c4 e6 g4",
    eco: "E00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Indian Defence-Petrosian System",
    fen: "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/P4N2/1P2PPPP/RNBQKB1R b KQkq - 0 4",
    moves: "d4 Nf6 c4 e6 Nf3 b6 a3",
    eco: "E12",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Indian Defence-Spassky System",
    fen: "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/4PN2/PP3PPP/RNBQKB1R b KQkq - 0 4",
    moves: "d4 Nf6 c4 e6 Nf3 b6 e3",
    eco: "E14",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Owen Defence-Naselwaus Gambit",
    fen: "rn1qkbnr/pbpppppp/1p6/6B1/3PP3/8/PPP2PPP/RN1QKBNR b KQkq - 2 3",
    moves: "e4 b6 d4 Bb7 Bg5",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Big Clamp Formation",
    fen: "r1bqkbnr/pp2pppp/2np4/2p5/4PP2/2PP4/PP4PP/RNBQKBNR b KQkq - 0 4",
    moves: "e4 c5 d3 Nc6 c3 d6 f4",
    eco: "B20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit/Centre Game",
    fen: "rnbqkbnr/pp1ppppp/8/2p5/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 c5 d4",
    eco: "B21",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Pirc Defence-Sveshnikov System",
    fen: "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N3P1/PPP2P1P/R1BQKBNR b KQkq - 0 4",
    moves: "e4 d6 d4 Nf6 Nc3 g6 g3",
    eco: "B07",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Pirc Defence-Classical/2 Knights System",
    fen: "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 1 4",
    moves: "e4 d6 d4 Nf6 Nc3 g6 Nf3",
    eco: "B08",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Pirc Defence-Roscher Gambit",
    fen: "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 2 3",
    moves: "e4 d6 d4 Nf6 Nf3",
    eco: "B07",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Portuguese Opening-Miguel Gambit",
    fen: "rnbqk1nr/pppp1ppp/8/1Bb1p3/1P2P3/8/P1PP1PPP/RNBQK1NR b KQkq - 0 3",
    moves: "e4 e5 Bb5 Bc5 b4",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Danish Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 e5 d4 exd4 c3",
    eco: "C21",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Wizard Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/4P3/3p4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 e5 d4 exd4 e5",
    eco: "C21",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Falkbeer Countergambit Accepted",
    fen: "rnbqkbnr/ppp2ppp/8/3Pp3/5P2/8/PPPP2PP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 e5 f4 d5 exd5",
    eco: "C31",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Accepted-Orsini Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/8/4Pp2/1P6/P1PP2PP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 e5 f4 exf4 b3",
    eco: "C33",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Accepted-Villemson/Steinitz/Polerio Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/8/3PPp2/8/PPP3PP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 e5 f4 exf4 d4",
    eco: "C33",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Accepted-Gaga Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/8/4Pp2/6P1/PPPP3P/RNBQKBNR b KQkq - 0 3",
    moves: "e4 e5 f4 exf4 g3",
    eco: "C33",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Accepted-Pawn's/Stamma/Calvi Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/8/4Pp1P/8/PPPP2P1/RNBQKBNR b KQkq - 0 3",
    moves: "e4 e5 f4 exf4 h4",
    eco: "C33",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Vienna Game-Omaha Gambit",
    fen: "rnbqkbnr/ppp2ppp/3p4/4p3/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq - 0 3",
    moves: "e4 e5 Nc3 d6 f4",
    eco: "C25",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Banzai-Leong Gambit",
    fen: "rnbqkbnr/pppp1ppp/4p3/8/1P2P3/8/P1PP1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "e4 e6 b4",
    eco: "C00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Robatsch Defence-Westermann Gambit",
    fen: "rnbqk1nr/ppppppbp/6p1/8/3PP3/8/PPPB1PPP/RN1QKBNR b KQkq - 2 3",
    moves: "e4 g6 d4 Bg7 Bd2",
    eco: "B06",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Robatsch Defence-Wind Gambit",
    fen: "rnbqk1nr/ppppppbp/6p1/8/3PP3/3B4/PPP2PPP/RNBQK1NR b KQkq - 2 3",
    moves: "e4 g6 d4 Bg7 Bd3",
    eco: "B06",
    difficulty: "Easy"
  },
  {
    name: "Deprez Opening-Kádas Gambit #2",
    fen: "rnbqkbnr/pp2pppp/8/3p4/3p3P/2P2N2/PP2PPP1/RNBQKB1R b KQkq - 0 4",
    moves: "h4 d5 d4 c5 Nf3 cxd4 c3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Berlin Gambit",
    fen: "r1bqkbnr/ppp1pppp/2n5/3P4/4p3/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 4",
    moves: "Nc3 Nc6 d4 d5 e4 dxe4 d5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Kucharkowski-Meybohm Gambit",
    fen: "rnbqk1nr/pppp1ppp/8/4p3/1b6/8/PBPPPPPP/RN1QKBNR w KQkq - 0 3",
    moves: "b4 e5 Bb2 Bxb4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Queenside Defence",
    fen: "rnbqkb1r/1ppp1ppp/p3pn2/1P6/8/8/PBPPPPPP/RN1QKBNR w KQkq - 0 4",
    moves: "b4 Nf6 Bb2 e6 b5 a6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence-Franco-Benoni Variation",
    fen: "rnbqkbnr/pp1p1ppp/4p3/2p5/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 c5 c4 e6",
    eco: "A43",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence-Benoni-Indian Defence",
    fen: "rnbqkb1r/pp1ppppp/5n2/2pP4/8/8/PPP1PPPP/RNBQKBNR w KQkq - 1 3",
    moves: "d4 c5 d5 Nf6",
    eco: "A43",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Irish Gambit",
    fen: "rnbqkbnr/pp2pppp/8/2pp4/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq - 0 3",
    moves: "d4 d5 Nc3 c5",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Shaviliuk Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/3pp3/3P4/2N5/PPP1PPPP/R1BQKBNR w KQkq - 0 3",
    moves: "d4 d5 Nc3 e5",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Rat Defence-Old Indian Defence-Anglo-Slav Variation",
    fen: "rnbqkbnr/pp2pppp/2pp4/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 d6 c4 c6",
    eco: "A41",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Charlick Gambit Complex-Mosquito Gambit",
    fen: "rnb1kbnr/pppp1ppp/8/4P3/7q/8/PPP1PPPP/RNBQKBNR w KQkq - 1 3",
    moves: "d4 e5 dxe5 Qh4",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Bladel Variation",
    fen: "rnbqkb1r/ppppp2p/6pn/5p2/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
    moves: "d4 f5 c4 g6 Nc3 Nh6",
    eco: "A84",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Kevitz-Mikenas Defence-Montevideo Defence",
    fen: "rnbqkbnr/pppppppp/8/3P4/8/8/PPP1PPPP/RNBQKBNR w KQkq - 1 3",
    moves: "d4 Nc6 d5 Nb8",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Indian Defence-Czech Variation",
    fen: "rnbqkb1r/pp2pppp/2pp1n2/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4",
    moves: "d4 Nf6 c4 d6 Nc3 c6",
    eco: "A53",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Indian Defence-Ukrainian Variation",
    fen: "rnbqkb1r/ppp2ppp/3p1n2/4p3/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4",
    moves: "d4 Nf6 c4 d6 Nc3 e5",
    eco: "A54",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence",
    fen: "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4",
    eco: "E20",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Bronstein Gambit Accepted",
    fen: "rnbqkb1r/pppppppp/8/8/3P2n1/8/PPP1PP1P/RNBQKBNR w KQkq - 0 3",
    moves: "d4 Nf6 g4 Nxg4",
    eco: "A45",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Snyder Variation-Queen Fianchetto Variation",
    fen: "rnbqkbnr/p2ppppp/1p6/2p5/4P3/1P6/P1PP1PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 c5 b3 b6",
    eco: "B20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Grand Prix Attack-Tal Defence",
    fen: "rnbqkbnr/pp2pppp/8/2pp4/4PP2/8/PPPP2PP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 c5 f4 d5",
    eco: "B21",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Accelerated Panov Attack-Anti-Anti-Caro-Kann Defence",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/2P1P3/8/PP1P1PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 c6 c4 d5",
    eco: "B10",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-De Bruycker Defence",
    fen: "r1bqkbnr/pp1ppppp/n1p5/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 c6 d4 Na6",
    eco: "B12",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Caro-Masi Defence",
    fen: "rnbqkb1r/pp1ppppp/2p2n2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 c6 d4 Nf6",
    eco: "B12",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Classical Variation",
    fen: "rnbqk1nr/pppp1ppp/8/2b1p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 e5 f4 Bc5",
    eco: "C30",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Norwalde Variation",
    fen: "rnb1kbnr/pppp1ppp/5q2/4p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 e5 f4 Qf6",
    eco: "C30",
    difficulty: "Easy"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Lucena Defence",
    fen: "r1bqk1nr/ppppbppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 Be7",
    eco: "C60",
    difficulty: "Easy"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Barnes/Fianchetto/Smyslov Defence",
    fen: "r1bqkbnr/pppp1p1p/2n3p1/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 g6",
    eco: "C60",
    difficulty: "Easy"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Pollock Defence",
    fen: "r1bqkbnr/pppp1ppp/8/nB2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 Na5",
    eco: "C60",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Normal Variation-St. George Variation",
    fen: "rnbqkbnr/1ppp1ppp/p3p3/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e6 d4 a6",
    eco: "C01",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Normal Variation-Franco-Benoni/Franco-Sicilian Defence",
    fen: "rnbqkbnr/pp1p1ppp/4p3/2p5/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e6 d4 c5",
    eco: "C01",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Normal Variation-Classical Variation",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e6 d4 d5",
    eco: "C01",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Normal Variation-Lengfellner System",
    fen: "rnbqkbnr/ppp2ppp/3pp3/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e6 d4 d6",
    eco: "C01",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Robatsch Defence-Mongrédien Defence",
    fen: "rnbqk1nr/p1ppppbp/1p4p1/8/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 g6 d4 Bg7 Nf3 b6",
    eco: "B06",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence-Breyer Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 Nc6 Nc3 Nf6 d4 e5",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Dutch Variation-Canard Variation-Double Duck Variation",
    fen: "rnbqkbnr/ppp1p1pp/8/3p1p2/3P1P2/8/PPP1P1PP/RNBQKBNR w KQkq - 0 3",
    moves: "f4 d5 d4 f5",
    eco: "A03",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Dutch Variation-Lasker Variation",
    fen: "rnbqkb1r/pp2pppp/5n2/2pp4/5P2/4PN2/PPPP2PP/RNBQKB1R w KQkq - 0 4",
    moves: "f4 d5 e3 Nf6 Nf3 c5",
    eco: "A03",
    difficulty: "Easy"
  },
  {
    name: "Bird System-From Gambit-Schlechter Gambit",
    fen: "r1bqkbnr/pppp1ppp/2n5/4P3/8/8/PPPPP1PP/RNBQKBNR w KQkq - 1 3",
    moves: "f4 e5 fxe5 Nc6",
    eco: "A02",
    difficulty: "Easy"
  },
  {
    name: "Grob Attack-Grob Gambit Declined",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/6P1/8/PPPPPPBP/RNBQK1NR w KQkq - 0 3",
    moves: "g4 d5 Bg2 c6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-Réti Gambit Accepted",
    fen: "rnbqkbnr/ppp1pppp/8/8/2p5/5N2/PP1PPPPP/RNBQKB1R w KQkq - 0 3",
    moves: "Nf3 d5 c4 dxc4",
    eco: "A09",
    difficulty: "Easy"
  },
  {
    name: "Zukertort Opening-Arctic Defence-Drunken Knight Variation",
    fen: "rnbqkb1r/pppppnpp/5p2/8/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 4",
    moves: "Nf3 f6 e4 Nh6 d4 Nf7",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-King's Indian Variation-Spike Variation",
    fen: "rnbqkb1r/pppppp1p/5np1/8/1P4P1/8/PBPPPP1P/RN1QKBNR b KQkq - 0 3",
    moves: "b4 Nf6 Bb2 g6 g4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Indian Defence-Orangutan/Polish Variation",
    fen: "rnbqkb1r/pppppppp/5n2/8/1PP5/8/P2PPPPP/RNBQKBNR b KQkq - 0 2",
    moves: "c4 Nf6 b4",
    eco: "A15",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Indian Defence-Queen's Knight Variation",
    fen: "rnbqkb1r/pppppppp/5n2/8/2P5/2N5/PP1PPPPP/R1BQKBNR b KQkq - 2 2",
    moves: "c4 Nf6 Nc3",
    eco: "A16",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Indian Defence-King's Knight Variation",
    fen: "rnbqkb1r/pppppppp/5n2/8/2P5/5N2/PP1PPPPP/RNBQKB1R b KQkq - 2 2",
    moves: "c4 Nf6 Nf3",
    eco: "A15",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Stonewall Attack-Zukertort Variation",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/3P4/3BP3/PPP2PPP/RNBQK1NR b KQkq - 1 3",
    moves: "d4 d5 e3 c6 Bd3",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Stonewall Attack-Showalter Variation",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/3P4/3BP3/PPP2PPP/RNBQK1NR b KQkq - 1 3",
    moves: "d4 d5 e3 e6 Bd3",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Amazon Attack-Siberian Attack",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/2NQ4/PPP1PPPP/R1B1KBNR b KQkq - 3 3",
    moves: "d4 d5 Qd3 Nf6 Nc3",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Lebedyev-Barden/Hopton Attack",
    fen: "rnbqkbnr/ppppp1pp/8/5pB1/3P4/8/PPP1PPPP/RN1QKBNR b KQkq - 1 2",
    moves: "d4 f5 Bg5",
    eco: "A80",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Mengarini Attack",
    fen: "rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PPQ1PPPP/RNB1KBNR b KQkq - 1 3",
    moves: "d4 Nf6 c4 g6 Qc2",
    eco: "E60",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Hillbilly Attack",
    fen: "rnbqkbnr/pp1ppppp/2p5/8/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq - 1 2",
    moves: "e4 c6 Bc4",
    eco: "B10",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Vienna Game-Zhuravlev Countergambit",
    fen: "rnbqk1nr/pppp1ppp/8/4p3/1b2P1Q1/2N5/PPPP1PPP/R1B1KBNR b KQkq - 3 3",
    moves: "e4 e5 Nc3 Bb4 Qg4",
    eco: "C25",
    difficulty: "Easy"
  },
  {
    name: "Barnes Opening-Walkerling Variation",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/5P2/PPPP2PP/RNBQK1NR b KQkq - 2 3",
    moves: "f3 e5 e4 Nf6 Bc4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Reversed Nimzowitsch Variation-Napoleon Attack",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/3P4/2N2N2/PPP1PPPP/R1BQKB1R b KQkq - 0 3",
    moves: "Nc3 e5 Nf3 Nc6 d4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-Nimzowitsch-Larsen Attack",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/8/1P3N2/P1PPPPPP/RNBQKB1R b KQkq - 0 2",
    moves: "Nf3 d5 b3",
    eco: "A06",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Symmetrical Variation-Myers Polish Attack",
    fen: "rnbqkb1r/pppppp1p/5np1/8/PP6/5N2/2PPPPPP/RNBQKB1R b KQkq - 0 3",
    moves: "Nf3 Nf6 a4 g6 b4",
    eco: "A05",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Symmetrical Variation-Nimzo-Larsen Variation",
    fen: "rnbqkb1r/pppppppp/5n2/8/8/1P3N2/P1PPPPPP/RNBQKB1R b KQkq - 0 2",
    moves: "Nf3 Nf6 b3",
    eco: "A05",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-King's Indian Attack-Smyslov Variation",
    fen: "rnbqkb1r/pppppp1p/5n2/6p1/1P6/5NP1/P1PPPP1P/RNBQKB1R b KQkq - 0 3",
    moves: "Nf3 Nf6 g3 g5 b4",
    eco: "A05",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Agincourt Defence-Horwitz Defence-Zilbermints Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/4p3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "c4 e6 d4 e5",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Agincourt Defence-Romanishin Gambit",
    fen: "rnbqkb1r/1ppp1ppp/p3pn2/8/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq - 0 4",
    moves: "c4 e6 Nf3 Nf6 g3 a6",
    eco: "A13",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Staunton Gambit-Balogh Defence",
    fen: "rnbqkbnr/ppp1p1pp/3p4/5p2/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 f5 e4 d6",
    eco: "A82",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Krejcik Gambit-Hevendehl/Hevendahl Gambit",
    fen: "rnbqkbnr/pppp2pp/8/4pp2/3P2P1/8/PPP1PP1P/RNBQKBNR w KQkq - 0 3",
    moves: "d4 f5 g4 e5",
    eco: "A80",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Owen Defence-Wind Gambit",
    fen: "rn1qkbnr/pbpp1ppp/1p6/4p3/3PP3/5P2/PPP3PP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 b6 d4 Bb7 f3 e5",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Nimzowitsch-Larsen Attack-Ringelbach Gambit",
    fen: "rnbqkbnr/pppp2pp/4p3/5p2/4P3/1P6/PBPP1PPP/RN1QKBNR b KQkq - 0 3",
    moves: "b3 e6 Bb2 f5 e4",
    eco: "A01",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Symmetrical Variation-Napolitano Gambit",
    fen: "rnbqkb1r/pp1ppppp/5n2/2p5/1PP5/5N2/P2PPPPP/RNBQKB1R b KQkq - 0 3",
    moves: "c4 c5 Nf3 Nf6 b4",
    eco: "A30",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Indian Defence-Achilles-Omega Gambit",
    fen: "rnbqkb1r/pppppppp/5n2/8/2P1P3/8/PP1P1PPP/RNBQKBNR b KQkq - 0 2",
    moves: "c4 Nf6 e4",
    eco: "A15",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Indian Defence-Unnamed Gambit",
    fen: "rnbqkb1r/pppppppp/5n2/8/2P3P1/8/PP1PPP1P/RNBQKBNR b KQkq - 0 2",
    moves: "c4 Nf6 g4",
    eco: "A15",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Polish Defence-Spassky Gambit Accepted",
    fen: "rn1qkbnr/pbpppppp/8/1B6/3PP3/8/PPP2PPP/RNBQK1NR b KQkq - 0 3",
    moves: "d4 b5 e4 Bb7 Bxb5",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence-Benoni-Indian Defence-Kingside Move Order",
    fen: "rnbqkb1r/pp1ppppp/5n2/2pP4/8/5N2/PPP1PPPP/RNBQKB1R b KQkq - 2 3",
    moves: "d4 c5 d5 Nf6 Nf3",
    eco: "A43",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Old Variation",
    fen: "rnbqkbnr/ppp1pppp/8/8/2pP4/4P3/PP3PPP/RNBQKBNR b KQkq - 0 3",
    moves: "d4 d5 c4 dxc4 e3",
    eco: "D20",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Saduleto/Central Variation",
    fen: "rnbqkbnr/ppp1pppp/8/8/2pPP3/8/PP3PPP/RNBQKBNR b KQkq - 0 3",
    moves: "d4 d5 c4 dxc4 e4",
    eco: "D20",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Queen's Knight Variation",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3",
    moves: "d4 d5 c4 e6 Nc3",
    eco: "D31",
    difficulty: "Easy"
  },
  {
    name: "Rat Defence-Modern Defence-Averbakh System",
    fen: "rnbqk1nr/ppp1ppbp/3p2p1/8/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 4",
    moves: "d4 d6 c4 g6 Nc3 Bg7 e4",
    eco: "A42",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Indian Defence-Fianchetto Variation",
    fen: "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R b KQkq - 0 4",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3",
    eco: "E15",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Indian Defence-Kasparov/Russian Variation",
    fen: "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 1 4",
    moves: "d4 Nf6 c4 e6 Nf3 b6 Nc3",
    eco: "E12",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Bronstein/Gibbins-Wiedenhagen Gambit",
    fen: "rnbqkb1r/pppppppp/5n2/8/3P2P1/8/PPP1PP1P/RNBQKBNR b KQkq - 0 2",
    moves: "d4 Nf6 g4",
    eco: "A45",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Owen Defence-Smith Gambit",
    fen: "rn1qkbnr/pbpppppp/1p6/8/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 2 3",
    moves: "e4 b6 d4 Bb7 Nf3",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Advance Variation",
    fen: "rnbqkbnr/pp2pppp/2p5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 c6 d4 d5 e5",
    eco: "B12",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Tartakower/Fantasy/Maróczy Variation",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/5P2/PPP3PP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 c6 d4 d5 f3",
    eco: "B12",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Pirc Defence-Kholmov System",
    fen: "rnbqkb1r/ppp1pp1p/3p1np1/8/2BPP3/2N5/PPP2PPP/R1BQK1NR b KQkq - 1 4",
    moves: "e4 d6 d4 Nf6 Nc3 g6 Bc4",
    eco: "B07",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Pirc Defence-Austrian Attack",
    fen: "rnbqkb1r/ppp1pp1p/3p1np1/8/3PPP2/2N5/PPP3PP/R1BQKBNR b KQkq - 0 4",
    moves: "e4 d6 d4 Nf6 Nc3 g6 f4",
    eco: "B09",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Portuguese Opening-Portuguese Gambit",
    fen: "rnbqkb1r/pppp1ppp/5n2/1B2p3/3PP3/8/PPP2PPP/RNBQK1NR b KQkq - 0 3",
    moves: "e4 e5 Bb5 Nf6 d4",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Von der Lasa Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/8/2BpP3/8/PPP2PPP/RNBQK1NR b KQkq - 1 3",
    moves: "e4 e5 d4 exd4 Bc4",
    eco: "C21",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Ross Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/8/3pP3/3B4/PPP2PPP/RNBQK1NR b KQkq - 1 3",
    moves: "e4 e5 d4 exd4 Bd3",
    eco: "C21",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Accepted-Schurig Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/1B6/4Pp2/8/PPPP2PP/RNBQK1NR b KQkq - 1 3",
    moves: "e4 e5 f4 exf4 Bb5",
    eco: "C33",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/8/2B1Pp2/8/PPPP2PP/RNBQK1NR b KQkq - 1 3",
    moves: "e4 e5 f4 exf4 Bc4",
    eco: "C33",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Accepted-Tumbleweed Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP1KPP/RNBQ1BNR b kq - 1 3",
    moves: "e4 e5 f4 exf4 Kf2",
    eco: "C33",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Accepted-Paris Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPPN1PP/RNBQKB1R b KQkq - 1 3",
    moves: "e4 e5 f4 exf4 Ne2",
    eco: "C33",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight's Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R b KQkq - 1 3",
    moves: "e4 e5 f4 exf4 Nf3",
    eco: "C34",
    difficulty: "Easy"
  },
  {
    name: "King's Gambit Accepted-Carrera/Basman Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPPQ1PP/RNB1KBNR b KQkq - 1 3",
    moves: "e4 e5 f4 exf4 Qe2",
    eco: "C33",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Accepted-Breyer Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/8/4Pp2/5Q2/PPPP2PP/RNB1KBNR b KQkq - 1 3",
    moves: "e4 e5 f4 exf4 Qf3",
    eco: "C33",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Accepted-Carrera Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/7Q/4Pp2/8/PPPP2PP/RNB1KBNR b KQkq - 1 3",
    moves: "e4 e5 f4 exf4 Qh5",
    eco: "C33",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Philidor's Defence-Main Line",
    fen: "rnbqkbnr/ppp2ppp/3p4/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 d6 d4",
    eco: "C41",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Latvian Countergambit-Diepstraten Countergambit",
    fen: "rnbqkbnr/pppp2pp/8/4pp2/2P1P3/5N2/PP1P1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 f5 c4",
    eco: "C40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Latvian Countergambit-Mason Countergambit",
    fen: "rnbqkbnr/pppp2pp/8/4pp2/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 f5 d4",
    eco: "C40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Italian Game-Dresden Opening",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2P1P3/5N2/PP1P1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 Nc6 c4",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Petrov's Defence-Petrov 3 Knights Game",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq - 3 3",
    moves: "e4 e5 Nf3 Nf6 Nc3",
    eco: "C42",
    difficulty: "Easy"
  },
  {
    name: "French Defence-Normal Variation-Classical Variation-Advance Variation",
    fen: "rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 e6 d4 d5 e5",
    eco: "C02",
    difficulty: "Easy"
  },
  {
    name: "Barnes Opening-Gedult Gambit #2",
    fen: "rnbqkbnr/ppppp1pp/8/8/4p3/2N2P2/PPPP2PP/R1BQKBNR b KQkq - 1 3",
    moves: "f3 f5 e4 fxe4 Nc3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Grob Attack-Grob Gambit Declined-Spike Attack",
    fen: "rnbqkbnr/pp2pppp/2p5/3p2P1/8/8/PPPPPPBP/RNBQK1NR b KQkq - 0 3",
    moves: "g4 d5 Bg2 c6 g5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Grob Attack-Double Grob-Coca-Cola Gambit",
    fen: "rnbqkbnr/pppppp1p/8/6p1/5PP1/8/PPPPP2P/RNBQKBNR b KQkq - 0 2",
    moves: "g4 g5 f4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Van Geet Opening-Dunst-Perrenet Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/8/4p3/2NP4/PPP2PPP/R1BQKBNR b KQkq - 0 3",
    moves: "Nc3 d5 e4 dxe4 d3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Myers Gambit",
    fen: "rnbqkb1r/ppp1pppp/5n2/6B1/4p3/2NP4/PPP2PPP/R2QKBNR b KQkq - 1 4",
    moves: "Nc3 d5 e4 Nf6 d3 dxe4 Bg5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Sicilian Invitation-Speelsmet Gambit",
    fen: "rnbqkbnr/pp1ppppp/8/8/3p4/4PN2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
    moves: "Nf3 c5 d4 cxd4 e3",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Dutch Variation-Lisitsin Gambit Deferred",
    fen: "rnbqkb1r/ppppp1pp/5n2/5p2/4P3/3P1N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
    moves: "Nf3 f5 d3 Nf6 e4",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Queen's Indian Variation",
    fen: "rnbqkb1r/p1pp1ppp/1p2pn2/1P6/8/8/PBPPPPPP/RN1QKBNR w KQkq - 0 4",
    moves: "b4 Nf6 Bb2 e6 b5 b6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Symmetrical Variation-Normal Variation-2 Knights Variation",
    fen: "r1bqkbnr/pp1ppppp/2n5/2p5/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq - 2 3",
    moves: "c4 c5 Nc3 Nc6",
    eco: "A35",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Bremen Variation-Reversed Sicilian-2 Knights Variation",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq - 2 3",
    moves: "c4 e5 Nc3 Nf6",
    eco: "A22",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Bremen Variation-Nimzowitsch Variation-Flohr Variation",
    fen: "rnbqkbnr/pppp1ppp/8/8/2P1p3/5N2/PP1PPPPP/RNBQKB1R w KQkq - 0 3",
    moves: "c4 e5 Nf3 e4",
    eco: "A20",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Indian Defence-Queen's Knight Variation-Anglo-Grünfeld/Golombek Defence",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p4/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq - 0 3",
    moves: "c4 Nf6 Nc3 d5",
    eco: "A16",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Indian Defence-Queen's Knight Variation-Hedgehog System",
    fen: "rnbqkb1r/pppp1ppp/4pn2/8/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq - 0 3",
    moves: "c4 Nf6 Nc3 e6",
    eco: "A17",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Indian Defence-King's Knight Variation-Queen's Indian Formation",
    fen: "rnbqkb1r/p1pppppp/1p3n2/8/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq - 0 3",
    moves: "c4 Nf6 Nf3 b6",
    eco: "A15",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Indian Defence-King's Knight Variation-Scandinavian Defence",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p4/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq - 0 3",
    moves: "c4 Nf6 Nf3 d5",
    eco: "A15",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Indian Defence-King's Knight Variation-Old Indian Formation",
    fen: "rnbqkb1r/ppp1pppp/3p1n2/8/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq - 0 3",
    moves: "c4 Nf6 Nf3 d6",
    eco: "A15",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Indian Defence-King's Knight Variation-King's Indian Formation",
    fen: "rnbqkb1r/pppppp1p/5np1/8/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq - 0 3",
    moves: "c4 Nf6 Nf3 g6",
    eco: "A15",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Cologne Variation",
    fen: "r1bqkbnr/p1pnpppp/1p6/3p4/P2P4/2N5/1PP1PPPP/R1BQKBNR w KQkq - 1 4",
    moves: "d4 d5 Nc3 b6 a4 Nd7",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Fianchetto Defence",
    fen: "rnbqk1nr/ppp1ppbp/6p1/3p4/3P4/2N2N2/PPP1PPPP/R1BQKB1R w KQkq - 2 4",
    moves: "d4 d5 Nc3 g6 Nf3 Bg7",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Charlick Gambit Complex-Englund Variation",
    fen: "r1bqkbnr/pppp1ppp/2n5/4P3/8/8/PPP1PPPP/RNBQKBNR w KQkq - 1 3",
    moves: "d4 e5 dxe5 Nc6",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Fianchetto Attack-Leningrad Variation",
    fen: "rnbqkbnr/ppppp2p/6p1/5p2/3P4/6P1/PPP1PP1P/RNBQKBNR w KQkq - 0 3",
    moves: "d4 f5 g3 g6",
    eco: "A81",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Normal Variation-Accelerated/Sämisch-Indian Variation",
    fen: "rnbqkb1r/p1pppppp/1p3n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 Nf6 c4 b6",
    eco: "A50",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Normal Variation-Modern Benoni Defence",
    fen: "rnbqkb1r/pp1ppppp/5n2/2p5/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 Nf6 c4 c5",
    eco: "A56",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Normal Variation-Slav Indian Defence",
    fen: "rnbqkb1r/pp1ppppp/2p2n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 Nf6 c4 c6",
    eco: "A50",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Indian Defence-Janowski Variation",
    fen: "rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
    moves: "d4 Nf6 c4 d6 Nc3 Bf5",
    eco: "A53",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Normal Variation-East Indian/Neo-Indian Defence",
    fen: "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 Nf6 c4 e6",
    eco: "E00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Normal Variation-Mexican/Kevitz-Trajkovich Defence",
    fen: "r1bqkb1r/pppppppp/2n2n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 1 3",
    moves: "d4 Nf6 c4 Nc6",
    eco: "A50",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Torre Attack-Czech-Indian Defence",
    fen: "rnbqkb1r/pp1ppppp/2p2n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 3",
    moves: "d4 Nf6 Nf3 c6",
    eco: "A46",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Torre Attack-Wade-Tarkatower Defence",
    fen: "rnbqkb1r/ppp1pppp/3p1n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 3",
    moves: "d4 Nf6 Nf3 d6",
    eco: "A46",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Torre Attack-Döry Defence",
    fen: "rnbqkb1r/pppppppp/8/8/3Pn3/5N2/PPP1PPPP/RNBQKB1R w KQkq - 3 3",
    moves: "d4 Nf6 Nf3 Ne4",
    eco: "A46",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Closed Variation-Severino Defence",
    fen: "rnbqkbnr/pp1p1ppp/8/2p1p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 3",
    moves: "e4 c5 Nc3 e5",
    eco: "B23",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Closed Variation-Traditional Variation",
    fen: "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 3",
    moves: "e4 c5 Nc3 Nc6",
    eco: "B23",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-King's Knight Variation-O'Kelly Variation",
    fen: "rnbqkbnr/1p1ppppp/p7/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 c5 Nf3 a6",
    eco: "B28",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-King's Knight Variation-Katalimov Variation",
    fen: "rnbqkbnr/p2ppppp/1p6/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 c5 Nf3 b6",
    eco: "B27",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-King's Knight Variation-Kopec Variation",
    fen: "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 c5 Nf3 d6",
    eco: "B50",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-King's Knight Variation-Jalalabad Variation",
    fen: "rnbqkbnr/pp1p1ppp/8/2p1p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 c5 Nf3 e5",
    eco: "B27",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-King's Knight Variation-Paulsen/French Variation",
    fen: "rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 c5 Nf3 e6",
    eco: "B40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-King's Knight Variation-Hungarian/Hyperaccelerated Dragon Variation",
    fen: "rnbqkbnr/pp1ppp1p/6p1/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 c5 Nf3 g6",
    eco: "B27",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-King's Knight Variation-Bücker Variation",
    fen: "rnbqkbnr/pp1pppp1/7p/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 c5 Nf3 h6",
    eco: "B27",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-King's Knight Variation-Old Sicilian Defence",
    fen: "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
    moves: "e4 c5 Nf3 Nc6",
    eco: "B30",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-King's Knight Variation-Nimzowitsch-Rubinstein Variation",
    fen: "rnbqkb1r/pp1ppppp/5n2/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
    moves: "e4 c5 Nf3 Nf6",
    eco: "B29",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Accelerated Panov Attack-Open Variation",
    fen: "rnbqkbnr/pp1p1ppp/2p5/4p3/2P1P3/8/PP1P1PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 c6 c4 e5",
    eco: "B10",
    difficulty: "Easy"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Nuremberg/Nürnberg Variation",
    fen: "r1bqkbnr/pppp2pp/2n2p2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 f6",
    eco: "C60",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Normal Variation-Mediterranean Defence",
    fen: "rnbqkb1r/pppp1ppp/4pn2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 1 3",
    moves: "e4 e6 d4 Nf6",
    eco: "C01",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Robatsch Defence-Small Centre Variation",
    fen: "rnbqk1nr/ppp1ppbp/3p2p1/8/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 g6 d4 Bg7 Nf3 d6",
    eco: "B06",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence-Centre Variation-Woodchuck Variation",
    fen: "r1bqkbnr/1ppppppp/p1n5/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 Nc6 d4 a6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence-Centre Variation-Scandinavian Variation",
    fen: "r1bqkbnr/ppp1pppp/2n5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 Nc6 d4 d5",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence-Centre Variation-Mikenas Variation",
    fen: "r1bqkbnr/ppp1pppp/2np4/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 Nc6 d4 d6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence-Centre Variation-Kennedy Variation",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 Nc6 d4 e5",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence-Centre Variation-Neo-Mongoloid Defence",
    fen: "r1bqkbnr/ppppp1pp/2n2p2/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 Nc6 d4 f6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence Declined-Franco-Nimzowitsch/French Variation",
    fen: "r1bqkbnr/pppp1ppp/2n1p3/8/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 Nc6 Nf3 e6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Dutch Variation-Schlechter Variation",
    fen: "rn1qkb1r/ppp1pppp/5n2/3p4/5Pb1/4PN2/PPPP2PP/RNBQKB1R w KQkq - 3 4",
    moves: "f4 d5 e3 Nf6 Nf3 Bg4",
    eco: "A03",
    difficulty: "Easy"
  },
  {
    name: "Grob Attack-Macho Variation-Keene Variation",
    fen: "rnbqkbnr/pp3ppp/2p5/3pp3/6P1/7P/PPPPPPB1/RNBQK1NR w KQkq - 0 4",
    moves: "g4 e5 h3 d5 Bg2 c6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Gruenfeld Defence",
    fen: "rnbqkbnr/ppp2ppp/8/4p3/4N3/8/PPPP1PPP/R1BQKBNR w KQkq - 0 4",
    moves: "Nc3 d5 e4 dxe4 Nxe4 e5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Pirc Invitation-Wade-Tartakower Defence",
    fen: "rn1qkbnr/ppp1pppp/3p4/8/4P1b1/5N2/PPPP1PPP/RNBQKB1R w KQkq - 1 3",
    moves: "Nf3 d6 e4 Bg4",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Nimzowitsch-Larsen Attack-Classical Variation-Graz Attack",
    fen: "rnbqkbnr/ppp1pppp/8/3p4/8/BP6/P1PPPPPP/RN1QKBNR b KQkq - 1 2",
    moves: "b3 d5 Ba3",
    eco: "A01",
    difficulty: "Easy"
  },
  {
    name: "Nimzowitsch-Larsen Attack-Modern Variation #4",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/8/1P2P3/PBPP1PPP/RN1QKBNR b KQkq - 0 3",
    moves: "b3 e5 Bb2 Nc6 e3",
    eco: "A01",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-King's Indian Variation-Schiffler Attack",
    fen: "rnbqkb1r/pppppp1p/5np1/8/1P2P3/8/PBPP1PPP/RN1QKBNR b KQkq - 0 3",
    moves: "b4 Nf6 Bb2 g6 e4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence-Mujannah Formation-Benoni-Staunton Gambit",
    fen: "rnbqkbnr/pp1pp1pp/8/2pP1p2/4P3/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
    moves: "d4 c5 d5 f5 e4",
    eco: "A43",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Slav Defence-Diemer Gambit",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/2PPP3/8/PP3PPP/RNBQKBNR b KQkq - 0 3",
    moves: "d4 d5 c4 c6 e4",
    eco: "B12",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Stonewall Attack-Pillsbury Variation",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/3BP3/PPP2PPP/RNBQK1NR b KQkq - 2 3",
    moves: "d4 d5 e3 Nf6 Bd3",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Horwitz Defence-Dutch Defence-Bellon Gambit",
    fen: "rnbqkbnr/pppp2pp/4p3/5p2/2PPP3/8/PP3PPP/RNBQKBNR b KQkq - 0 3",
    moves: "d4 e6 c4 f5 e4",
    eco: "A84",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Falkbeer Countergambit-Hinrichsen Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/3pp3/3PPP2/8/PPP3PP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 e5 f4 d5 d4",
    eco: "C31",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence-Pseudo-Spanish Variation",
    fen: "r1bqkbnr/pppppppp/2n5/1B6/4P3/8/PPPP1PPP/RNBQK1NR b KQkq - 2 2",
    moves: "e4 Nc6 Bb5",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Barnes Opening-Gedult Gambit #1",
    fen: "rnbqkbnr/ppp1pp1p/6p1/8/3Pp3/2P2P2/PP4PP/RNBQKBNR b KQkq - 0 4",
    moves: "f3 d5 e4 g6 d4 dxe4 c3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Bird System-Thomas Gambit",
    fen: "rnbqkb1r/pp2pppp/5n2/2p5/3p1P2/1P2PN2/PBPP2PP/RN1QKB1R b KQkq - 0 5",
    moves: "f4 d5 b3 Nf6 Bb2 d4 Nf3 c5 e3",
    eco: "A03",
    difficulty: "Easy"
  },
  {
    name: "Benko Opening-Burk Gambit",
    fen: "rnbqk1nr/ppp1bppp/8/3p4/4p2N/P2P2P1/1PP1PP1P/RNBQKB1R b KQkq - 0 5",
    moves: "g3 e5 a3 d5 Nf3 e4 Nh4 Be7 d3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Pfeiffer Gambit-Sleipner Countergambit",
    fen: "rnbqkbnr/ppp2ppp/8/4p3/3pNP2/5N2/PPPPP1PP/R1BQKB1R b KQkq - 1 4",
    moves: "Nc3 d5 f4 d4 Ne4 e5 Nf3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Tartakower Gambit-Polish/Sokolsky Gambit",
    fen: "rnbqk1nr/pppp2pp/5p2/4p3/1b2P3/8/PBPP1PPP/RN1QKBNR w KQkq - 0 4",
    moves: "b4 e5 Bb2 f6 e4 Bxb4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Scandinavian Defence-Vector Gambit",
    fen: "rnbqkbnr/pp2pppp/2p5/3P4/8/8/PP1PPPPP/RNBQKBNR w KQkq - 0 3",
    moves: "c4 d5 cxd5 c6",
    eco: "A10",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Scandinavian Defence-Löhn Gambit",
    fen: "rnbqkbnr/ppp2ppp/4p3/3P4/8/8/PP1PPPPP/RNBQKBNR w KQkq - 0 3",
    moves: "c4 d5 cxd5 e6",
    eco: "A10",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Reversed Sicilian-Carls-Bremen System-Reversed Dragon",
    fen: "rnbqkb1r/ppp2ppp/5n2/3pp3/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq - 0 4",
    moves: "c4 e5 Nc3 Nf6 g3 d5",
    eco: "A22",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Indian Defence-Hedgehog System-Queen's Indian Formation",
    fen: "rnbqkb1r/p1pp1ppp/1p2pn2/8/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq - 0 4",
    moves: "c4 Nf6 Nc3 e6 Nf3 b6",
    eco: "A17",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-English Defence #2-Eastbourne Gambit",
    fen: "rn1qkbnr/pbpp1ppp/1p6/4p3/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4",
    moves: "d4 b6 c4 Bb7 Nc3 e5",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence-Pawn Thrust Variation-Semi-Benoni/Blockade/Russian Variation",
    fen: "rnbqkbnr/pp3ppp/3p4/2pPp3/4P3/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
    moves: "d4 c5 d5 e5 e4 d6",
    eco: "A44",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence-Benoni-Indian Defence-The Vulture Defence",
    fen: "rnbqkb1r/pp1ppppp/8/2pP4/2P1n3/8/PP2PPPP/RNBQKBNR w KQkq - 1 4",
    moves: "d4 c5 d5 Nf6 c4 Ne4",
    eco: "A56",
    difficulty: "Easy"
  },
  {
    name: "Old Benoni Defence-Benoni-Indian Defence-Kingside Move Order-Hawk/Habichd Defence",
    fen: "rnbqkb1r/pp1ppppp/5n2/3P4/2p5/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 c5 d5 Nf6 Nf3 c4",
    eco: "A43",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence-Benoni Gambit Accepted-Cormorant Gambit",
    fen: "rnbqkbnr/p2ppppp/1p6/2P5/8/8/PPP1PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 c5 dxc5 b6",
    eco: "A43",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Lemberger Countergambit",
    fen: "rnbqkbnr/ppp2ppp/8/4p3/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "d4 d5 e4 dxe4 Nc3 e5",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Rat Defence-Old Indian Defence-English Rat Defence,Pounds Gambit",
    fen: "rn1qkbnr/ppp2ppp/3pb3/4P3/2P5/8/PP2PPPP/RNBQKBNR w KQkq - 1 4",
    moves: "d4 d6 c4 e5 dxe5 Be6",
    eco: "A41",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Charlick Gambit Complex Declined-Diemer Counterattack",
    fen: "rnb1k1nr/pppp1ppp/8/2bPp3/4P2q/8/PPP2PPP/RNBQKBNR w KQkq - 1 4",
    moves: "d4 e5 d5 Bc5 e4 Qh4",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Charlick Gambit Complex-Hartlaub-Charlick/Blackburne-Hartlaub Gambit",
    fen: "rnbqkbnr/ppp2ppp/3p4/4P3/8/8/PPP1PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 e5 dxe5 d6",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Horwitz Defence-Franco-Indian/Kangaroo/Keres Defence",
    fen: "rnbqk1nr/pppp1ppp/4p3/8/1bPP4/8/PP2PPPP/RNBQKBNR w KQkq - 1 3",
    moves: "d4 e6 c4 Bb4+",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Staunton Gambit-Massachussets Variation",
    fen: "rnbqkbnr/pp1pp1pp/2p5/5p2/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 f5 e4 c6",
    eco: "A82",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Omega-Isis Gambit",
    fen: "rnbqkbnr/pppp2pp/8/4pp2/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 3",
    moves: "d4 f5 Nf3 e5",
    eco: "A80",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Bogo-Indian Defence",
    fen: "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 2 4",
    moves: "d4 Nf6 c4 e6 Nf3 Bb4+",
    eco: "E11",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Kemeri/Neo-Grünfeld Defence",
    fen: "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq - 0 4",
    moves: "d4 Nf6 c4 g6 g3 d5",
    eco: "D70/D71",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Bronstein Gambit-Oshima Defence",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/3P2P1/8/PPP1PP1P/RNBQKBNR w KQkq - 0 3",
    moves: "d4 Nf6 g4 e5",
    eco: "A45",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Hübsch Gambit",
    fen: "rnbqkb1r/ppp1pppp/8/3p4/3Pn3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "d4 Nf6 Nc3 d5 e4 Nxe4",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Van't Kruijs Opening-Amsterdam Attack",
    fen: "r1bqkb1r/ppp2ppp/2np1n2/4p3/2P5/1PN1P3/P2P1PPP/R1BQKBNR w KQkq - 1 5",
    moves: "e3 e5 c4 d6 Nc3 Nc6 b3 Nf6",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Advance Variation-Botvinnik-Carls Defence",
    fen: "rnbqkbnr/pp2pppp/8/2ppP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 c6 d4 d5 e5 c5",
    eco: "B12",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Centre Countergambit-Blackburne-Kloosterboer Gambit",
    fen: "rnbqkbnr/pp2pppp/2p5/3P4/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 d5 exd5 c6",
    eco: "B01",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Pirc Defence-Ufimtsev-Pytel/Czech Defence",
    fen: "rnbqkb1r/pp2pppp/2pp1n2/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 d6 d4 Nf6 Nc3 c6",
    eco: "B07",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Anderssen Gambit",
    fen: "rnbqkbnr/p2p1ppp/2p5/1B2p3/4P3/8/PPPP1PPP/RNBQK1NR w KQkq - 0 4",
    moves: "e4 e5 Bc4 b5 Bxb5 c6",
    eco: "C23",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Thorold Gambit",
    fen: "rnbqkbnr/p1pp2pp/8/1B2pp2/4P3/8/PPPP1PPP/RNBQK1NR w KQkq - 0 4",
    moves: "e4 e5 Bc4 b5 Bxb5 f5",
    eco: "C23",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Leonardis Opening-Radisch Gambit",
    fen: "rnbqk2r/pppp1ppp/5n2/2b1p3/4PP2/3P4/PPP3PP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 e5 d3 Nf6 f4 Bc5",
    eco: "C20",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Brien's/Kieseritzky's Countergambit 2/Lesser Bryan",
    fen: "rnbqkbnr/p1pp1ppp/8/1p6/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq - 0 4",
    moves: "e4 e5 f4 exf4 Bc4 b5",
    eco: "C33",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Ruy López Defence",
    fen: "rnbqkbnr/pp1p1ppp/2p5/8/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq - 0 4",
    moves: "e4 e5 f4 exf4 Bc4 c6",
    eco: "C33",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Anderssen Defence",
    fen: "rnbqkbnr/pppp1p1p/8/6p1/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq - 0 4",
    moves: "e4 e5 f4 exf4 Bc4 g5",
    eco: "C33",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Classical/Modern/Abazzia Defence",
    fen: "rnbqkbnr/ppp2ppp/8/3p4/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 f4 exf4 Nf3 d5",
    eco: "C36",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Fischer Defence",
    fen: "rnbqkbnr/ppp2ppp/3p4/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 f4 exf4 Nf3 d6",
    eco: "C34",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Gianutio Countergambit",
    fen: "rnbqkbnr/pppp2pp/8/5p2/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 f4 exf4 Nf3 f5",
    eco: "C34",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Becker Defence",
    fen: "rnbqkbnr/pppp1pp1/7p/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 f4 exf4 Nf3 h6",
    eco: "C34",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-MacLeod Defence",
    fen: "r1bqkbnr/pppp1ppp/2n5/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 2 4",
    moves: "e4 e5 f4 exf4 Nf3 Nc6",
    eco: "C34",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Schallopp Defence",
    fen: "rnbqkb1r/pppp1ppp/5n2/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 2 4",
    moves: "e4 e5 f4 exf4 Nf3 Nf6",
    eco: "C34",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Philidor's Defence-Philidor Countergambit",
    fen: "rnbqkbnr/ppp3pp/3p4/4pp2/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 Nf3 d6 d4 f5",
    eco: "C41",
    difficulty: "Easy"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Brentano Gambit",
    fen: "r1bqkbnr/pppp1p1p/2n5/1B2p1p1/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 g5",
    eco: "C60",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ponziani Opening-Ponziani Countergambit",
    fen: "r1bqkbnr/pppp2pp/2n5/4pp2/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 c3 f5",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ponziani Opening-Jaenisch Counterattack",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 e5 Nf3 Nc6 c3 Nf6",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Lasker Counterattack",
    fen: "r1bqkbnr/ppp2ppp/2n5/3pp3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 d4 d5",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Fonaroff Defence",
    fen: "r1bqkbnr/ppp2ppp/2np4/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 d4 d6",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Bayer Defence",
    fen: "r1bqkbnr/pppp2pp/2n2p2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 d4 f6",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Mattern Counterattack",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 e5 Nf3 Nc6 d4 Nf6",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-3 Knights Game-Winawer/Gothic Defence",
    fen: "r1bqkbnr/pppp2pp/2n5/4pp2/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Nc3 f5",
    eco: "C46",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-3 Knights Game-Steinitz Defence",
    fen: "r1bqkbnr/pppp1p1p/2n3p1/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Nc3 g6",
    eco: "C46",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Hanham Attack-Franco-Hiva Gambit III",
    fen: "rnbqkbnr/pppp2pp/4p3/5p2/4P3/3P4/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e6 d3 f5",
    eco: "C00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Normal Variation-Baeuerle Gambit",
    fen: "rnbqkbnr/p1pp1ppp/4p3/1p6/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e6 d4 b5",
    eco: "C01",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Normal Variation-Franco-Hiva Gambit I",
    fen: "rnbqkbnr/pppp2pp/4p3/5p2/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 e6 d4 f5",
    eco: "C01",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-Réti Gambit-Zilbermints Gambit",
    fen: "rnbqkbnr/p1p1pppp/8/1p1p4/2P5/5N2/PP1PPPPP/RNBQKB1R w KQkq - 0 3",
    moves: "Nf3 d5 c4 b5",
    eco: "A09",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-Omega-Delta Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/3pp3/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq - 0 3",
    moves: "Nf3 d5 g3 e5",
    eco: "A07",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Schiffler-Sokolsky Variation",
    fen: "rnbqkb1r/ppp2ppp/4pn2/1P1p4/8/4P3/PBPP1PPP/RN1QKBNR b KQkq - 0 4",
    moves: "b4 Nf6 Bb2 d5 e3 e6 b5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Normal Variation-2 Knights Variation-Fianchetto Variation",
    fen: "r1bqkbnr/pp1ppppp/2n5/2p5/2P5/2N3P1/PP1PPP1P/R1BQKBNR b KQkq - 0 3",
    moves: "c4 c5 Nc3 Nc6 g3",
    eco: "A36",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Symmetrical Variation-Normal Variation-Fianchetto Variation",
    fen: "rnbqkb1r/pp1ppppp/5n2/2p5/2P5/2N3P1/PP1PPP1P/R1BQKBNR b KQkq - 0 3",
    moves: "c4 c5 Nc3 Nf6 g3",
    eco: "A34",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Symmetrical Variation-Anti-Benoni Formation",
    fen: "rnbqkb1r/pp1ppppp/5n2/2p5/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 0 3",
    moves: "c4 c5 Nf3 Nf6 d4",
    eco: "A31",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Bremen Variation-Reversed Sicilian-General Variation",
    fen: "rnbqkbnr/ppp2ppp/3p4/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R b KQkq - 1 3",
    moves: "c4 e5 Nc3 d6 Nf3",
    eco: "A21",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Bremen Variation-Reversed Closed Sicilian-Mazedonisch Variation",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2P2P2/2N5/PP1PP1PP/R1BQKBNR b KQkq - 0 3",
    moves: "c4 e5 Nc3 Nc6 f4",
    eco: "A25",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Bremen Variation-Reversed Closed Sicilian-Carls Variation",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR b KQkq - 0 3",
    moves: "c4 e5 Nc3 Nc6 g3",
    eco: "A25",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Bremen Variation-Reversed Closed Sicilian-3 Knights System",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R b KQkq - 3 3",
    moves: "c4 e5 Nc3 Nc6 Nf3",
    eco: "A27",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Reversed Sicilian-2 Knights Variation-Mazedonisch Variation",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/2P2P2/2N5/PP1PP1PP/R1BQKBNR b KQkq - 0 3",
    moves: "c4 e5 Nc3 Nf6 f4",
    eco: "A22",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Bremen Variation-2 Knights Variation-Carls-Bremen System/Fianchetto Line",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR b KQkq - 0 3",
    moves: "c4 e5 Nc3 Nf6 g3",
    eco: "A22",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Agincourt Defence-King's Knight Variation-Agincourt Variation",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/2P5/5NP1/PP1PPP1P/RNBQKB1R b KQkq - 0 3",
    moves: "c4 e6 Nf3 d5 g3",
    eco: "A13",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Indian Defence-Queen's Knight Variation-Flohr-Mikenas-Carls Variation #2",
    fen: "rnbqkb1r/pppp1ppp/4pn2/8/2P1P3/2N5/PP1P1PPP/R1BQKBNR b KQkq - 0 3",
    moves: "c4 Nf6 Nc3 e6 e4",
    eco: "A18",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Sarratt Attack-Steinitz Countergambit-Morris Countergambit",
    fen: "rnbqkbnr/pp2pppp/8/2pp4/3PPB2/8/PPP2PPP/RN1QKBNR b KQkq - 0 3",
    moves: "d4 d5 Bf4 c5 e4",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Normal Variation",
    fen: "rnbqkbnr/ppp1pppp/8/8/2pP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 3",
    moves: "d4 d5 c4 dxc4 Nf3",
    eco: "D21",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Fritz Attack",
    fen: "rnbqkbnr/ppp1pppp/8/8/2BPp3/8/PPP2PPP/RNBQK1NR b KQkq - 1 3",
    moves: "d4 d5 e4 dxe4 Bc4",
    eco: "D00",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Grunfeld Reversed-Symmetrical Variation-Colle/Closed System",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/4PN2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
    moves: "d4 d5 Nf3 Nf6 e3",
    eco: "D04",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Grunfeld Reversed-Symmetrical Variation-Pseudo-Catalan Variation",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p4/3P4/5NP1/PPP1PP1P/RNBQKB1R b KQkq - 0 3",
    moves: "d4 d5 Nf3 Nf6 g3",
    eco: "D02",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Reversed Alekhine Variation-Reversed Krebs Variation-Reversed Mokele Mbembe Variation",
    fen: "rnbqkbnr/pppp1ppp/8/4N3/3Pp3/8/PPP1PPPP/RNBQKB1R b KQkq - 1 3",
    moves: "d4 e5 Nf3 e4 Ne5",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Reversed Alekhine Variation-Reversed Krebs Variation-Reversed Brooklyn Variation",
    fen: "rnbqkbnr/pppp1ppp/8/8/3Pp3/8/PPP1PPPP/RNBQKBNR b KQkq - 1 3",
    moves: "d4 e5 Nf3 e4 Ng1",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Classical Variation-Rubinstein Variation",
    fen: "rnbqkbnr/pppp2pp/4p3/5p2/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3",
    moves: "d4 f5 c4 e6 Nc3",
    eco: "A84",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Normal Variation-Fianchetto Variation",
    fen: "rnbqkb1r/ppppp1pp/5n2/5p2/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3",
    moves: "d4 f5 c4 Nf6 g3",
    eco: "A86Explore",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Normal Variation-Queen's Knight Variation",
    fen: "rnbqkb1r/ppppp1pp/5n2/5p2/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 2 3",
    moves: "d4 f5 c4 Nf6 Nc3",
    eco: "A85",
    difficulty: "Easy"
  },
  {
    name: "Indian Defence-Normal Variation-Sämisch-Indian Variation-Marienbad Variation",
    fen: "rnbqkb1r/p1pppppp/1p3n2/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3",
    moves: "d4 Nf6 c4 b6 Nc3",
    eco: "A50",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-East Indian Defence-Anti-Nimzo-Indian Variation",
    fen: "rnbqkb1r/pppp1ppp/4pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 3",
    moves: "d4 Nf6 c4 e6 Nf3",
    eco: "E10",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Indian Defence-Miles Variation",
    fen: "rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP1B2/5N2/PP2PPPP/RN1QKB1R b KQkq - 1 4",
    moves: "d4 Nf6 c4 e6 Nf3 b6 Bf4",
    eco: "E12",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Anti-Grünfeld/Advance Variation",
    fen: "rnbqkb1r/pppppp1p/5np1/3P4/2P5/8/PP2PPPP/RNBQKBNR b KQkq - 0 3",
    moves: "d4 Nf6 c4 g6 d5",
    eco: "E60",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Neo-Grünfeld/Immediate Fianchetto Variation",
    fen: "rnbqkb1r/pppppp1p/5np1/8/2PP4/6P1/PP2PP1P/RNBQKBNR b KQkq - 0 3",
    moves: "d4 Nf6 c4 g6 g3",
    eco: "E60",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Smyslov Variation",
    fen: "rnbqk2r/ppppppbp/5np1/6B1/2PP4/2N5/PP2PPPP/R2QKBNR b KQkq - 3 4",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Bg5",
    eco: "E61",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Normal/Schwarz Variation",
    fen: "rnbqk2r/ppppppbp/5np1/8/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4",
    eco: "E70",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Paleface Attack-Gedult Attack",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p4/3P2P1/5P2/PPP1P2P/RNBQKBNR b KQkq - 0 3",
    moves: "d4 Nf6 f3 d5 g4",
    eco: "A45",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Torre Attack-Yusupov-Rubinstein System",
    fen: "rnbqkb1r/pppp1ppp/4pn2/8/3P4/4PN2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
    moves: "d4 Nf6 Nf3 e6 e3",
    eco: "A46",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Pseudo-King's Indian Defence-London System",
    fen: "rnbqkb1r/pppppp1p/5np1/8/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 1 3",
    moves: "d4 Nf6 Nf3 g6 Bf4",
    eco: "A48",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Pseudo-King's Indian Defence-Fianchetto/Torre Defence",
    fen: "rnbqkb1r/pppppp1p/5np1/6B1/3P4/5N2/PPP1PPPP/RN1QKB1R b KQkq - 1 3",
    moves: "d4 Nf6 Nf3 g6 Bg5",
    eco: "A48",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Pseudo-King's Indian Defence-Fianchetto/Przepiorka Variation",
    fen: "rnbqkb1r/pppppp1p/5np1/8/3P4/5NP1/PPP1PP1P/RNBQKB1R b KQkq - 0 3",
    moves: "d4 Nf6 Nf3 g6 g3",
    eco: "A49",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-St. George Defence-New St. George Variation-3 Pawn Attack",
    fen: "rnbqkbnr/1ppp1ppp/p3p3/8/2PPP3/8/PP3PPP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 a6 d4 e6 c4",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Sicilian Defence-Closed Variation-Traditional Variation-Fianchetto Variation",
    fen: "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/2N3P1/PPPP1P1P/R1BQKBNR b KQkq - 0 3",
    moves: "e4 c5 Nc3 Nc6 g3",
    eco: "B24",
    difficulty: "Easy"
  },
  {
    name: "Sicilian Defence-Closed Variation-Traditional Variation-Chameleon Variation",
    fen: "r1bqkbnr/pp1ppppp/2n5/2p5/4P3/2N5/PPPPNPPP/R1BQKB1R b KQkq - 3 3",
    moves: "e4 c5 Nc3 Nc6 Nge2",
    eco: "B23",
    difficulty: "Easy"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-O'Kelly Variation-Kieseritzky System",
    fen: "rnbqkbnr/1p1ppppp/p7/2p5/4P3/1P3N2/P1PP1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 c5 Nf3 a6 b3",
    eco: "B28",
    difficulty: "Easy"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-O'Kelly Variation-Venice System",
    fen: "rnbqkbnr/1p1ppppp/p7/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 c5 Nf3 a6 c3",
    eco: "B28",
    difficulty: "Easy"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-O'Kelly Variation-Maróczy Bind",
    fen: "rnbqkbnr/1p1ppppp/p7/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 c5 Nf3 a6 c4",
    eco: "B28",
    difficulty: "Easy"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-O'Kelly Variation-Quiet System",
    fen: "rnbqkbnr/1p1ppppp/p7/2p5/4P3/3P1N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 c5 Nf3 a6 d3",
    eco: "B28",
    difficulty: "Easy"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-O'Kelly Variation-Normal System",
    fen: "rnbqkbnr/1p1ppppp/p7/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 c5 Nf3 a6 d4",
    eco: "B28",
    difficulty: "Easy"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-O'Kelly Variation-Reti System",
    fen: "rnbqkbnr/1p1ppppp/p7/2p5/4P3/5NP1/PPPP1P1P/RNBQKB1R b KQkq - 0 3",
    moves: "e4 c5 Nf3 a6 g3",
    eco: "B28",
    difficulty: "Easy"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-O'Kelly Variation-Yerevan System",
    fen: "rnbqkbnr/1p1ppppp/p7/2p5/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq - 1 3",
    moves: "e4 c5 Nf3 a6 Nc3",
    eco: "B28",
    difficulty: "Easy"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-Kopec Variation-Delayed Alapin Variation",
    fen: "rnbqkbnr/pp2pppp/3p4/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 c5 Nf3 d6 c3",
    eco: "B50",
    difficulty: "Easy"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-Paulsen Variation-Delayed Alapin Variation",
    fen: "rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 c5 Nf3 e6 c3",
    eco: "B40",
    difficulty: "Easy"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-Paulsen Variation-Kramnik Variation",
    fen: "rnbqkbnr/pp1p1ppp/4p3/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 c5 Nf3 e6 c4",
    eco: "B40",
    difficulty: "Easy"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-Hungarian Variation-Maróczy Variation",
    fen: "rnbqkbnr/pp1ppp1p/6p1/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 c5 Nf3 g6 c4",
    eco: "B27",
    difficulty: "Easy"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-Hungarian Variation-Hyperaccelerated Fianchetto",
    fen: "rnbqkbnr/pp1ppp1p/6p1/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 c5 Nf3 g6 d4",
    eco: "A42",
    difficulty: "Easy"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-Old Sicilian Defence-Open Variation",
    fen: "r1bqkbnr/pp1ppppp/2n5/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 c5 Nf3 Nc6 d4",
    eco: "B32",
    difficulty: "Easy"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-Nimzowitsch-Rubinstein Variation-Advance Variation",
    fen: "rnbqkb1r/pp1ppppp/5n2/2p1P3/8/5N2/PPPP1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 c5 Nf3 Nf6 e5",
    eco: "B29",
    difficulty: "Easy"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-Nimzowitsch-Rubinstein Variation-Closed Variation",
    fen: "rnbqkb1r/pp1ppppp/5n2/2p5/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq - 3 3",
    moves: "e4 c5 Nf3 Nf6 Nc3",
    eco: "B29",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Exchange Variation",
    fen: "rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 c6 d4 d5 exd5",
    eco: "B13",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Traditional/Standard Variation",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 3",
    moves: "e4 c6 d4 d5 Nc3",
    eco: "B15",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Modern Variation",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPPN1PPP/R1BQKBNR b KQkq - 1 3",
    moves: "e4 c6 d4 d5 Nd2",
    eco: "B12",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-2 Knights Attack",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq - 1 3",
    moves: "e4 c6 Nc3 d5 Nf3",
    eco: "B10",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Pirc Defence-Classical Variation",
    fen: "rnbqkb1r/ppp1pp1p/3p1np1/8/3PP3/2N5/PPP1BPPP/R1BQK1NR b KQkq - 1 4",
    moves: "e4 d6 d4 Nf6 Nc3 g6 Be2",
    eco: "B07",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Pirc Defence-Byrne Variation",
    fen: "rnbqkb1r/ppp1pp1p/3p1np1/6B1/3PP3/2N5/PPP2PPP/R2QKBNR b KQkq - 1 4",
    moves: "e4 d6 d4 Nf6 Nc3 g6 Bg5",
    eco: "B07",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Classical Defence-Philidor Variation",
    fen: "rnbqk1nr/pppp1ppp/8/2b1p3/2B1P3/2P5/PP1P1PPP/RNBQK1NR b KQkq - 0 3",
    moves: "e4 e5 Bc4 Bc5 c3",
    eco: "C23",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Calabrese Countergambit-Jaenisch Variation",
    fen: "rnbqkbnr/pppp2pp/8/4pp2/2B1P3/3P4/PPP2PPP/RNBQK1NR b KQkq - 0 3",
    moves: "e4 e5 Bc4 f5 d3",
    eco: "C23",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Accepted-Eisenberg Variation",
    fen: "rnbqkbnr/pppp1ppp/8/8/4Pp2/7N/PPPP2PP/RNBQKB1R b KQkq - 1 3",
    moves: "e4 e5 f4 exf4 Nh3",
    eco: "C33",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Accepted-Dodo Variation",
    fen: "rnbqkbnr/pppp1ppp/8/8/4PpQ1/8/PPPP2PP/RNB1KBNR b KQkq - 1 3",
    moves: "e4 e5 f4 exf4 Qg4",
    eco: "C33",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Vienna Game-Max Lange Defence-Paulsen Variation",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N3P1/PPPP1P1P/R1BQKBNR b KQkq - 0 3",
    moves: "e4 e5 Nc3 Nc6 g3",
    eco: "C25",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Vienna Game-Falkbeer Variation-Mengarini Variation",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/P1N5/1PPP1PPP/R1BQKBNR b KQkq - 0 3",
    moves: "e4 e5 Nc3 Nf6 a3",
    eco: "C26",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Vienna Game-Falkbeer Variation-Walkerling Variation",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N2P2/PPPP2PP/R1BQKBNR b KQkq - 0 3",
    moves: "e4 e5 Nc3 Nf6 f3",
    eco: "C26",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Vienna Game-Falkbeer Variation-Paulsen-Mieses Variation",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N3P1/PPPP1P1P/R1BQKBNR b KQkq - 0 3",
    moves: "e4 e5 Nc3 Nf6 g3",
    eco: "C26",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Latvian Countergambit-Mlotkowski Variation",
    fen: "rnbqkbnr/pppp2pp/8/4pp2/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq - 1 3",
    moves: "e4 e5 Nf3 f5 Nc3",
    eco: "C40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Italian Game-Ruy Lopez",
    fen: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
    moves: "e4 e5 Nf3 Nc6 Bb5",
    eco: "C60",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Petrov's Defence-Indian Variation",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/3P1N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 Nf6 d3",
    eco: "C42",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Petrov's Defence-Modern/Steinitz Attack",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 Nf6 d4",
    eco: "C43",
    difficulty: "Easy"
  },
  {
    name: "French Defence-Normal Variation-Classical Variation-Schlechter Variation",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/3B4/PPP2PPP/RNBQK1NR b KQkq - 1 3",
    moves: "e4 e6 d4 d5 Bd3",
    eco: "C01",
    difficulty: "Easy"
  },
  {
    name: "French Defence-Normal Variation-Classical Variation-Exchange Variation",
    fen: "rnbqkbnr/ppp2ppp/4p3/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 e6 d4 d5 exd5",
    eco: "C01",
    difficulty: "Easy"
  },
  {
    name: "French Defence-Normal Variation-Classical Variation-Tarrasch Variation",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR b KQkq - 1 3",
    moves: "e4 e6 d4 d5 Nd2",
    eco: "C03",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Queen's Knight Variation-Pelikán Variation",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq - 0 3",
    moves: "e4 e6 Nc3 d5 f4",
    eco: "C00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Queen's Knight Variation-2 Knights Variation",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq - 1 3",
    moves: "e4 e6 Nc3 d5 Nf3",
    eco: "C00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-French Defence-Knight Variation-2 Knights Variation",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/4P3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq - 1 3",
    moves: "e4 e6 Nf3 d5 Nc3",
    eco: "C00",
    difficulty: "Easy"
  },
  {
    name: "Nimzowitsch Defence-Centre Variation-Scandinavian Variation-Advance Variation",
    fen: "r1bqkbnr/ppp1pppp/2n5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 Nc6 d4 d5 e5",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Nimzowitsch Defence-Centre Variation-Scandinavian Variation-Bogoljubov Variation",
    fen: "r1bqkbnr/ppp1pppp/2n5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 3",
    moves: "e4 Nc6 d4 d5 Nc3",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Nimzowitsch Defence-Centre Variation-Kennedy Variation-Linksspringer Variation",
    fen: "r1bqkbnr/pppp1ppp/2n5/3Pp3/4P3/8/PPP2PPP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 Nc6 d4 e5 d5",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Alekhine Defence-Normal Variation-Welling Variation",
    fen: "rnbqkb1r/pppppppp/8/3nP3/8/1P6/P1PP1PPP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 Nf6 e5 Nd5 b3",
    eco: "B02",
    difficulty: "Easy"
  },
  {
    name: "Grob Attack-Grob Gambit-Fritz Gambit",
    fen: "rn1qkbnr/ppp1pppp/8/3p4/2P3b1/8/PP1PPPBP/RNBQK1NR b KQkq - 0 3",
    moves: "g4 d5 Bg2 Bxg4 c4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Grob Attack-Grob Gambit-Hurst Variation",
    fen: "rnbqkbnr/ppp2ppp/8/3pp3/2P3P1/8/PP1PPPBP/RNBQK1NR b KQkq - 0 3",
    moves: "g4 d5 Bg2 e5 c4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Grob Attack-Grob Gambit-Basman Gambit",
    fen: "rnbqkbnr/ppp1ppp1/8/3p3P/8/8/PPPPPPBP/RNBQK1NR b KQkq - 0 3",
    moves: "g4 d5 Bg2 h5 gxh5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Dunst Opening-Reversed Nimzowitsch Variation-Nowokunski Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/8/4Pp2/2N5/PPPP2PP/R1BQKBNR b KQkq e3 0 3",
    moves: "Nc3 e5 f4 exf4 e4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Dutch Variation-Pirc-Lisitsin Gambit",
    fen: "rnbqkbnr/ppppp1pp/8/5p2/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 0 2",
    moves: "Nf3 f5 e4",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Bremen Variation-Reversed Sicilian-Kramnik-Shirov/Vienna Counterattack",
    fen: "rnbqk1nr/pppp1ppp/8/4p3/1bP5/2N5/PP1PPPPP/R1BQKBNR w KQkq - 2 3",
    moves: "c4 e5 Nc3 Bb4",
    eco: "A21",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Grunfeld Reversed-Anti-Torre Variation",
    fen: "rn1qkbnr/ppp1pppp/8/3p4/3P2b1/5N2/PPP1PPPP/RNBQKB1R w KQkq - 2 3",
    moves: "d4 d5 Nf3 Bg4",
    eco: "D02",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Trompowsky Attack-Classical Defence",
    fen: "rnbqkb1r/pppp1ppp/4pn2/6B1/3P4/8/PPP1PPPP/RN1QKBNR w KQkq - 0 3",
    moves: "d4 Nf6 Bg5 e6",
    eco: "A45",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Tartakower Attack-Psuedo-Budapest Variation",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/3P4/6P1/PPP1PP1P/RNBQKBNR w KQkq - 0 3",
    moves: "d4 Nf6 g3 e5",
    eco: "A45",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Torre Attack-Alburt-Miles Variation",
    fen: "rnbqkb1r/1ppppppp/p4n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 3",
    moves: "d4 Nf6 Nf3 a6",
    eco: "A46",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Torre Attack-Polish Variation",
    fen: "rnbqkb1r/p1pppppp/5n2/1p6/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 3",
    moves: "d4 Nf6 Nf3 b5",
    eco: "A46",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Indian Defence-Torre Attack-Spielmann-Indian Variation",
    fen: "rnbqkb1r/pp1ppppp/5n2/2p5/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 3",
    moves: "d4 Nf6 Nf3 c5",
    eco: "A46",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-King's Knight Variation-Stilletto/Althouse/Mongoose Variation",
    fen: "rnb1kbnr/pp1ppppp/8/q1p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
    moves: "e4 c5 Nf3 Qa5",
    eco: "B27",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-King's Knight Variation-Quinteros Variation",
    fen: "rnb1kbnr/ppqppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
    moves: "e4 c5 Nf3 Qc7",
    eco: "B27",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Keene's Defence",
    fen: "rnb1kbnr/ppppqppp/8/4p3/4PP2/6P1/PPPP3P/RNBQKBNR w KQkq - 1 4",
    moves: "e4 e5 f4 Qh4+ g3 Qe7",
    eco: "C30",
    difficulty: "Easy"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Vinogradov Variation",
    fen: "r1b1kbnr/ppppqppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 Qe7",
    eco: "C60",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Borg Defence-Langhorst Gambit",
    fen: "rnbqkbnr/p2p1p1p/1p2p3/2P3p1/4P3/2P5/PP3PPP/RNBQKBNR w KQkq - 0 5",
    moves: "e4 g5 d4 e6 c3 c5 dxc5 b6",
    eco: "B00",
    difficulty: "Easy"
  },
  {
    name: "Benko Opening-Asten Gambit",
    fen: "r1bqkbnr/ppp3pp/2n5/4Pp2/3pN3/6P1/PPP1PP1P/R1BQKBNR w KQkq f6 0 6",
    moves: "g3 Nc6 Nc3 d5 d4 e5 dxe5 d4 Ne4 f5",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-King's Indian Attack-Sicilian Variation",
    fen: "rnbqkbnr/pp2pppp/8/2pp4/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq - 0 3",
    moves: "Nf3 d5 g3 c5",
    eco: "A07",
    difficulty: "Easy"
  },
  {
    name: "Réti Opening-Queen's Gambit Invitation-Shabulov Gambit",
    fen: "rnbqkbnr/3p1ppp/p3p3/1pp5/2P5/2N2NP1/PP1PPP1P/R1BQKB1R w KQkq - 0 5",
    moves: "Nf3 e6 c4 a6 Nc3 c5 g3 b5",
    eco: "A04",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Katalymov Gambit",
    fen: "rnb1kbnr/1p1ppppp/1qp5/p7/1PP5/P7/1B1PPPPP/RN1QKBNR b KQkq - 0 4",
    moves: "b4 c6 Bb2 Qb6 a3 a5 c4",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Reversed Closed Sicilian-4 Knights System #2-Marini/Korchnoi Line",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/P1N2N2/1P1PPPPP/R1BQKB1R b KQkq - 0 4",
    moves: "c4 e5 Nc3 Nc6 Nf3 Nf6 a3",
    eco: "A28",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Reversed Closed Sicilian-4 Knights System #2-Capablanca/Flexible Line",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2NP1N2/PP2PPPP/R1BQKB1R b KQkq - 0 4",
    moves: "c4 e5 Nc3 Nc6 Nf3 Nf6 d3",
    eco: "A28",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Reversed Closed Sicilian-4 Knights System #2-Quiet Line #3",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N1PN2/PP1P1PPP/R1BQKB1R b KQkq - 0 4",
    moves: "c4 e5 Nc3 Nc6 Nf3 Nf6 e3",
    eco: "A28",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Reversed Closed Sicilian-4 Knights System #2-Nimzowitsch/Botvinnik Line",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P1P3/2N2N2/PP1P1PPP/R1BQKB1R b KQkq - 0 4",
    moves: "c4 e5 Nc3 Nc6 Nf3 Nf6 e4",
    eco: "A28",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Dutch Defence-Ferenc Gambit",
    fen: "rnbqkb1r/ppppp1pp/5n2/5p2/2P1P3/2N5/PP1P1PPP/R1BQKBNR b KQkq - 0 3",
    moves: "c4 f5 Nc3 Nf6 e4",
    eco: "A10",
    difficulty: "Easy"
  },
  {
    name: "English Opening-Anglo-Dutch Defence-Chabanon Gambit",
    fen: "rnbqkbnr/ppp1p1pp/3p4/5p2/2P1P3/5N2/PP1P1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "c4 f5 Nf3 d6 e4",
    eco: "A10",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Slav Defence-Modern/Rubinstein Line",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 3",
    moves: "d4 d5 c4 c6 Nf3",
    eco: "D11",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Horwitz Defence-Dutch Defence-Senechaud Gambit",
    fen: "rnbqkbnr/pppp2pp/4p3/5p2/3P1BP1/8/PPP1PP1P/RN1QKBNR b KQkq - 0 3",
    moves: "d4 e6 Bf4 f5 g4",
    eco: "A80",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Classical Variation-Bellon Gambit/Staunton Gambit Deferred",
    fen: "rnbqkbnr/pppp2pp/4p3/5p2/2PPP3/8/PP3PPP/RNBQKBNR b KQkq - 0 3",
    moves: "d4 f5 c4 e6 e4",
    eco: "A84",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Manhattan Gambit-Von Pretzel/Anti-Classical Gambit",
    fen: "rnbqkbnr/pppp2pp/4p3/5p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR b KQkq - 0 3",
    moves: "d4 f5 Qd3 e6 g4",
    eco: "A80",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-Modern Defence-Lizard Defence-Pirc-Diemer Gambit",
    fen: "rnbqkb1r/pppppp1p/5np1/7P/3P4/8/PPP1PPP1/RNBQKBNR b KQkq - 0 3",
    moves: "d4 g6 h4 Nf6 h5",
    eco: "A40",
    difficulty: "Easy"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Smyslov System Deferred",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/6B1/2PP4/2N2N2/PP2PPPP/R2QKB1R b KQkq - 1 5",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 Bg5",
    eco: "E61",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit-Halasz/Larsen Gambit",
    fen: "rnbqkbnr/pp1ppppp/8/8/3pPP2/8/PPP3PP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 c5 d4 cxd4 f4",
    eco: "B21",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Labahn Attack-Double Gambit",
    fen: "rnbqkbnr/pp2pppp/2p5/1P1p4/4P3/8/P1PP1PPP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 c6 b4 d5 b5",
    eco: "B10",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Accelerated Panov Attack-Anti-Anti-Caro-Kann Defence-Toikkanen Gambit",
    fen: "rnbqkbnr/pp2pppp/2p5/3pP3/2P5/8/PP1P1PPP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 c6 c4 d5 e5",
    eco: "B10",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Mieses Gambit",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/4B3/PPP2PPP/RN1QKBNR b KQkq - 1 3",
    moves: "e4 c6 d4 d5 Be3",
    eco: "B12",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Classical Defence-Wing/MacDonnell Gambit",
    fen: "rnbqk1nr/pppp1ppp/8/2b1p3/1PB1P3/8/P1PP1PPP/RNBQK1NR b KQkq - 0 3",
    moves: "e4 e5 Bc4 Bc5 b4",
    eco: "C23",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Classical Defence-Lewis Gambit",
    fen: "rnbqk1nr/pppp1ppp/8/2b1p3/2BPP3/8/PPP2PPP/RNBQK1NR b KQkq - 0 3",
    moves: "e4 e5 Bc4 Bc5 d4",
    eco: "C23",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Classical Defence-Stein Gambit",
    fen: "rnbqk1nr/pppp1ppp/8/2b1p3/2B1PP2/8/PPPP2PP/RNBQK1NR b KQkq - 0 3",
    moves: "e4 e5 Bc4 Bc5 f4",
    eco: "C23",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Halasz-McDonnell Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/8/3pPP2/8/PPP3PP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 e5 d4 exd4 f4",
    eco: "C21",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Rosentreter Gambit",
    fen: "rnbqkbnr/pppp1p1p/8/6p1/3PPp2/5N2/PPP3PP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 f4 exf4 Nf3 g5 d4",
    eco: "C37",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Quaade/Quade Gambit",
    fen: "rnbqkbnr/pppp1p1p/8/6p1/4Pp2/2N2N2/PPPP2PP/R1BQKB1R b KQkq - 1 4",
    moves: "e4 e5 f4 exf4 Nf3 g5 Nc3",
    eco: "C37",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Vienna Game-Max Lange Defence-Fyfe Gambit",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 3",
    moves: "e4 e5 Nc3 Nc6 d4",
    eco: "C25",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-Vienna Game-Max Lange Defence-Vienna Gambit",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq - 0 3",
    moves: "e4 e5 Nc3 Nc6 f4",
    eco: "C25",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Latvian Countergambit-Senechaud Gambit",
    fen: "rnbqkbnr/pppp2pp/8/4pp2/1P2P3/5N2/P1PP1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 f5 b4",
    eco: "C40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Latvian Countergambit-Lobster Gambit",
    fen: "rnbqkbnr/pppp2pp/8/4pp2/4P1P1/5N2/PPPP1P1P/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 f5 g4",
    eco: "C40",
    difficulty: "Easy"
  },
  {
    name: "King's Pawn-King's Knight Opening-Italian Game-Paschman Wing Gambit",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/1P2P3/5N2/P1PP1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 Nc6 b4",
    eco: "C44",
    difficulty: "Easy"
  },
  {
    name: "French Defence-Normal Variation-Classical Variation-Diemer-Duhm Gambit",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/2PPP3/8/PP3PPP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 e6 d4 d5 c4",
    eco: "C01",
    difficulty: "Easy"
  },
  {
    name: "Bird System-From Gambit-Siegener Gambit",
    fen: "rnbqkbnr/pp1p1ppp/8/2p5/3p1P2/2P2N2/PP2P1PP/RNBQKB1R b KQkq - 0 4",
    moves: "f4 e5 d4 exd4 Nf3 c5 c3",
    eco: "A02",
    difficulty: "Easy"
  },
  {
    name: "Benko Opening-Winterberg Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/4p3/2p5/1P4P1/P2PPPBP/RNBQK1NR b KQkq - 0 4",
    moves: "g3 d5 Bg2 e5 c4 dxc4 b3",
    eco: "A00",
    difficulty: "Easy"
  },
  {
    name: "Polish Opening-Lewin Double Gambit",
    fen: "rnbqk1nr/pppp1ppp/8/8/1b2Pp2/8/P1PP2PP/RNBQKBNR w KQkq - 0 4",
    moves: "b4 e5 e4 Bxb4 f4 exf4",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Symmetrical Variation-Normal Variation-4 Knights System",
    fen: "r1bqkb1r/pp1ppppp/2n2n2/2p5/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq - 4 4",
    moves: "c4 c5 Nc3 Nc6 Nf3 Nf6",
    eco: "A35",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Anglo-Scandinavian Defence-Schultz Gambit",
    fen: "rnbqkb1r/ppp1pppp/5n2/3P4/8/8/PP1PPPPP/RNBQKBNR w KQkq - 1 3",
    moves: "c4 d5 cxd5 Nf6",
    eco: "A10",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Bremen Variation-Reversed Sicilian-Keres Defence",
    fen: "rnbqkbnr/pp3ppp/2pp4/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq - 0 4",
    moves: "c4 e5 Nc3 d6 g3 c6",
    eco: "A21",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Reversed Closed Sicilian-3 Knights System-Dutch Variation",
    fen: "r1bqkbnr/pppp2pp/2n5/4pp2/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq - 0 4",
    moves: "c4 e5 Nc3 Nc6 Nf3 f5",
    eco: "A27",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Bremen Variation-Reversed Closed Sicilian-4 Knights System #2",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq - 4 4",
    moves: "c4 e5 Nc3 Nc6 Nf3 Nf6",
    eco: "A28",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Reversed Sicilian-Carls-Bremen System-Keres Variation",
    fen: "rnbqkb1r/pp1p1ppp/2p2n2/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq - 0 4",
    moves: "c4 e5 Nc3 Nf6 g3 c6",
    eco: "A23",
    difficulty: "Medium"
  },
  {
    name: "English Opening-2 Knights Variation-Carls-Bremen System-Fianchetto Line",
    fen: "rnbqkb1r/pppp1p1p/5np1/4p3/2P5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq - 0 4",
    moves: "c4 e5 Nc3 Nf6 g3 g6",
    eco: "A24",
    difficulty: "Medium"
  },
  {
    name: "English Opening-King's Knight Variation-Agincourt Variation-Catalan Defence",
    fen: "rnbqkbnr/pp3ppp/4p3/2pp4/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq - 0 4",
    moves: "c4 e6 Nf3 d5 g3 c5",
    eco: "A13",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Agincourt Defence-Agincourt Variation-Kurajica Defence",
    fen: "rnbqkbnr/pp3ppp/2p1p3/3p4/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq - 0 4",
    moves: "c4 e6 Nf3 d5 g3 c6",
    eco: "A13",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Agincourt Defence-Agincourt Variation-Neo-Catalan",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3p4/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq - 1 4",
    moves: "c4 e6 Nf3 d5 g3 Nf6",
    eco: "A13",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Anglo-Indian Defence-Flohr-Mikenas-Carls Variation #2-Sicilian Variation",
    fen: "rnbqkb1r/pp1p1ppp/4pn2/2p5/2P1P3/2N5/PP1P1PPP/R1BQKBNR w KQkq - 0 4",
    moves: "c4 Nf6 Nc3 e6 e4 c5",
    eco: "A19",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Queen's Knight Variation-Flohr-Mikenas-Carls Variation #2-French Variation",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3p4/2P1P3/2N5/PP1P1PPP/R1BQKBNR w KQkq - 0 4",
    moves: "c4 Nf6 Nc3 e6 e4 d5",
    eco: "A18",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Queen's Knight Variation-Flohr-Mikenas-Carls Variation #2-Kevitz Defence",
    fen: "r1bqkb1r/pppp1ppp/2n1pn2/8/2P1P3/2N5/PP1P1PPP/R1BQKBNR w KQkq - 1 4",
    moves: "c4 Nf6 Nc3 e6 e4 Nc6",
    eco: "A18",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Anglo-Indian Defence-Hedgehog System-Nimzo-English/Nimzovich Opening",
    fen: "rnbqk2r/pppp1ppp/4pn2/8/1bP5/2N2N2/PP1PPPPP/R1BQKB1R w KQkq - 2 4",
    moves: "c4 Nf6 Nc3 e6 Nf3 Bb4",
    eco: "A17",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Anglo-Indian Defence-King's Knight Variation-Romanishin Variation",
    fen: "rnbqkb1r/1ppp1ppp/p3pn2/8/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq - 0 4",
    moves: "c4 Nf6 Nf3 e6 g3 a6",
    eco: "A15",
    difficulty: "Medium"
  },
  {
    name: "English Opening-King's Knight Variation-King's Indian Formation-Slav Formation",
    fen: "rnbqkb1r/pp1ppp1p/2p2np1/8/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq - 0 4",
    moves: "c4 Nf6 Nf3 g6 g3 c6",
    eco: "A15",
    difficulty: "Medium"
  },
  {
    name: "English Opening-King's Knight Variation-King's Indian Formation-Gruenfeld Formation",
    fen: "rnbqkb1r/ppp1pp1p/5np1/3p4/2P5/5NP1/PP1PPP1P/RNBQKB1R w KQkq - 0 4",
    moves: "c4 Nf6 Nf3 g6 g3 d5",
    eco: "A15",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence-Benoni-Indian Defence-Woozle Defence",
    fen: "rnb1kb1r/pp1ppppp/5n2/q1pP4/8/2N5/PPP1PPPP/R1BQKBNR w KQkq - 3 4",
    moves: "d4 c5 d5 Nf6 Nc3 Qa5",
    eco: "A43",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence-Benoni Gambit Accepted-Schlenker Defence",
    fen: "r1bqkbnr/pp1ppppp/n7/2P5/8/8/PPP1PPPP/RNBQKBNR w KQkq - 1 3",
    moves: "d4 c5 dxc5 Na6",
    eco: "A43",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Zeller Defence",
    fen: "rn1qkbnr/ppp1pppp/8/5b2/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq - 2 4",
    moves: "d4 d5 e4 dxe4 Nc3 Bf5",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Netherlands Variation",
    fen: "rnbqkbnr/ppp1p1pp/8/5p2/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "d4 d5 e4 dxe4 Nc3 f5",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Grunfeld Reversed-Symmetrical Variation-Zilbermints Countergambit",
    fen: "rnbqkb1r/p1p1pppp/5n2/1p1p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 d5 Nf3 Nf6 c4 b5",
    eco: "D02",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Grunfeld Reversed-Symmetrical Variation-Colle System",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3p4/3P4/4PN2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 d5 Nf3 Nf6 e3 e6",
    eco: "D05",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Rat Defence-Old Indian Defence-Modern Defence",
    fen: "rnbqk1nr/ppp1ppbp/3p2p1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
    moves: "d4 d6 c4 g6 Nc3 Bg7",
    eco: "A41",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Charlick Gambit Complex Declined-Reversed Alekhine Variation-Reversed Krebs Variation",
    fen: "rnbqkbnr/pppp1ppp/8/8/3Pp3/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 3",
    moves: "d4 e5 Nf3 e4",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "Dutch Defence-Normal Variation-Fianchetto Variation-Leningrad Variation",
    fen: "rnbqkb1r/ppppp2p/5np1/5p2/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq - 0 4",
    moves: "d4 f5 c4 Nf6 g3 g6",
    eco: "A86",
    difficulty: "Medium"
  },
  {
    name: "Dutch Defence-Normal Variation-Queen's Knight Variation-Krause Variation",
    fen: "rnbqkb1r/ppp1p1pp/3p1n2/5p2/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4",
    moves: "d4 f5 c4 Nf6 Nc3 d6",
    eco: "A85",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Modern Defence-Robatsch Variation-Neo-Modern Defence",
    fen: "rnbqk1nr/pppp1pbp/6p1/4p3/2PPP3/8/PP3PPP/RNBQKBNR w KQkq - 0 4",
    moves: "d4 g6 c4 Bg7 e4 e5",
    eco: "A41",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Kevitz-Mikenas Defence-Lithuanian Variation",
    fen: "r1bqkbnr/ppppnppp/8/3Pp3/2P5/8/PP2PPPP/RNBQKBNR w KQkq - 1 4",
    moves: "d4 Nc6 c4 e5 d5 Nce7",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Kevitz-Mikenas Defence-Cannstatter Variation",
    fen: "r1bqkbnr/pppp1ppp/8/3Pp3/2Pn4/8/PP2PPPP/RNBQKBNR w KQkq - 1 4",
    moves: "d4 Nc6 c4 e5 d5 Nd4",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Indian Defence-Normal Variation-Pyrenees Gambit",
    fen: "rnbqkb1r/p1pppppp/5n2/1p6/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 Nf6 c4 b5",
    eco: "A50",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Modern Benoni Defence-Hromádka System",
    fen: "rnbqkb1r/pp2pppp/3p1n2/2pP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq - 0 4",
    moves: "d4 Nf6 c4 c5 d5 d6",
    eco: "A57",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Modern Benoni Defence-Czech Benoni Defence",
    fen: "rnbqkb1r/pp1p1ppp/5n2/2pPp3/2P5/8/PP2PPPP/RNBQKBNR w KQkq e6 0 4",
    moves: "d4 Nf6 c4 c5 d5 e5",
    eco: "A56",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Modern Variation-Benoni Defence",
    fen: "rnbqkb1r/pp1p1ppp/4pn2/2pP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq - 0 4",
    moves: "d4 Nf6 c4 c5 d5 e6",
    eco: "A60",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Modern Benoni Defence-The Vulture Defence",
    fen: "rnbqkb1r/pp1ppppp/8/2pP4/2P1n3/8/PP2PPPP/RNBQKBNR w KQkq - 1 4",
    moves: "d4 Nf6 c4 c5 d5 Ne4",
    eco: "A56",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Indian Defence-Normal Variation-Budapest Gambit",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 Nf6 c4 e5",
    eco: "A51",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-East Indian Defence-Anti-Nimzo-Indian Variation-Dzindzikhashvili/Dzindzi-Indian Defence",
    fen: "rnbqkb1r/1ppp1ppp/p3pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 Nf6 c4 e6 Nf3 a6",
    eco: "E10",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Indian Defence-Fianchetto Traditional Variation",
    fen: "rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R w KQkq - 1 5",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7",
    eco: "E15",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-East Indian Defence-Anti-Nimzo-Indian Variation-Blumenfeld Variation",
    fen: "rnbqkb1r/pp1p1ppp/4pn2/2p5/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 Nf6 c4 e6 Nf3 c5",
    eco: "E10",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-East Indian Defence-Anti-Nimzo-Indian Variation-Small Centre Variation",
    fen: "rnbqkb1r/ppp2ppp/3ppn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 Nf6 c4 e6 Nf3 d6",
    eco: "E10",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-East Indian Defence-Anti-Nimzo-Indian Variation-Döry Indian Defence",
    fen: "rnbqkb1r/pppp1ppp/4p3/8/2PPn3/5N2/PP2PPPP/RNBQKB1R w KQkq - 2 4",
    moves: "d4 Nf6 c4 e6 Nf3 Ne4",
    eco: "E10",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Indian Defence-Normal Variation-Medusa Gambit",
    fen: "rnbqkb1r/pppppp1p/5n2/6p1/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
    moves: "d4 Nf6 c4 g5",
    eco: "A50",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-King's Knight Variation-Non- or Delayed Fianchetto/Neo-Grünfeld Variation",
    fen: "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 Nf6 c4 g6 Nf3 d5",
    eco: "D70/E60",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-St. George Defence-Polish Variation",
    fen: "rn1qkbnr/1bpp1ppp/p3p3/1p6/3PP3/3B1N2/PPP2PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 a6 d4 b5 Nf3 Bb7 Bd3 e6",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Closed Variation-Korchnoi Defence",
    fen: "rnbqkbnr/pp3ppp/4p3/2pp4/4P3/2N3P1/PPPP1P1P/R1BQKBNR w KQkq - 0 4",
    moves: "e4 c5 Nc3 e6 g3 d5",
    eco: "B23",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-O'Kelly Variation-Venice System-Ljubojevic Line",
    fen: "rnbqkbnr/3ppppp/p7/1pp5/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 c5 Nf3 a6 c3 b5",
    eco: "B28",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-O'Kelly Variation-Venice System-Steiner Line",
    fen: "rnbqkbnr/1p2pppp/p2p4/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 c5 Nf3 a6 c3 d6",
    eco: "B28",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-O'Kelly Variation-Venice System-Barcza Line",
    fen: "rnbqkb1r/1p1ppppp/p4n2/2p5/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 c5 Nf3 a6 c3 Nf6",
    eco: "B28",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-O'Kelly Variation-Maróczy Bind-Robatsch Line",
    fen: "rnbqkbnr/1p2pppp/p2p4/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 c5 Nf3 a6 c4 d6",
    eco: "B28",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-O'Kelly Variation-Maróczy Bind-Paulsen Line",
    fen: "rnbqkbnr/1p1p1ppp/p3p3/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 c5 Nf3 a6 c4 e6",
    eco: "B28",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-King's Knight Variation-Polish Gambit",
    fen: "rnbqkbnr/p2ppppp/8/1pp5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 c5 Nf3 b5",
    eco: "B27",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Kopec Variation-Cortlever/Alatortsev Variation",
    fen: "rnbqkb1r/pp2pppp/3p1n2/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 c5 Nf3 d6 d4 Nf6",
    eco: "B53",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-Paulsen Variation-Drazic Variation",
    fen: "rnbqkbnr/1p1p1ppp/p3p3/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 c5 Nf3 e6 d4 a6",
    eco: "B40",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Paulsen Variation-Marshall Counterattack",
    fen: "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 c5 Nf3 e6 d4 d5",
    eco: "B40",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-King's Knight Variation-Brussels Gambit",
    fen: "rnbqkbnr/pp1pp1pp/8/2p2p2/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 c5 Nf3 f5",
    eco: "B27",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Hungarian Variation-Hyperaccelerated Fianchetto-Frederico/Fred Variation",
    fen: "rnbqkbnr/pp1pp2p/6p1/2p2p2/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 c5 Nf3 g6 d4 f5",
    eco: "A42",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Old Sicilian Defence-Open Variation-Franco-Scilian Variation",
    fen: "r1bqkbnr/pp1p1ppp/2n1p3/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 c5 Nf3 Nc6 d4 e6",
    eco: "B32",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Traditional Variation-Gurgenidze Counterattack",
    fen: "rnbqkbnr/p3pppp/2p5/1p1p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 c6 d4 d5 Nc3 b5",
    eco: "B15",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Traditional Variation-Gurgenidze System",
    fen: "rnbqkbnr/pp2pp1p/2p3p1/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 c6 d4 d5 Nc3 g6",
    eco: "B15",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Traditional Variation-Campomanes Variation",
    fen: "rnbqkb1r/pp2pppp/2p2n2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 2 4",
    moves: "e4 c6 d4 d5 Nc3 Nf6",
    eco: "B15",
    difficulty: "Medium"
  },
  {
    name: "King's Bishop Opening-Classical Defence-Philidor Variation-Lewis Countergambit",
    fen: "rnbqk1nr/ppp2ppp/8/2bpp3/2B1P3/2P5/PP1P1PPP/RNBQK1NR w KQkq - 0 4",
    moves: "e4 e5 Bc4 Bc5 c3 d5",
    eco: "C23",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Lopez Attack-Norwalder Gambit",
    fen: "rnbqk1nr/ppp2ppp/3b4/3pp2Q/4P3/2P5/PP1P1PPP/RNB1KBNR w KQkq - 2 4",
    moves: "e4 e5 c3 d5 Qh5 Bd6",
    eco: "C20",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Bledow Variation",
    fen: "rnbqkbnr/ppp2ppp/8/3p4/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq - 0 4",
    moves: "e4 e5 f4 exf4 Bc4 d5",
    eco: "C33",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Maurian Defence",
    fen: "r1bqkbnr/pppp1ppp/2n5/8/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq - 2 4",
    moves: "e4 e5 f4 exf4 Bc4 Nc6",
    eco: "C33",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Steinitz Defence",
    fen: "rnbqkb1r/ppppnppp/8/8/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq - 2 4",
    moves: "e4 e5 f4 exf4 Bc4 Ne7",
    eco: "C33",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Cozio/Morphy Defence",
    fen: "rnbqkb1r/pppp1ppp/5n2/8/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq - 2 4",
    moves: "e4 e5 f4 exf4 Bc4 Nf6",
    eco: "C33",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Cunningham Gambit",
    fen: "rnbqk1nr/ppppbppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 2 4",
    moves: "e4 e5 f4 exf4 Nf3 Be7",
    eco: "C35",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Busch-Gass Gambit",
    fen: "rnbqk1nr/pppp1ppp/8/2b1p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
    moves: "e4 e5 Nf3 Bc5",
    eco: "C40",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Elephant Countergambit-Paulsen Countergambit",
    fen: "rnbqkbnr/ppp2ppp/8/3P4/4p3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 Nf3 d5 exd5 e4",
    eco: "C40",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Philidor's Defence-López Countergambit",
    fen: "rnbqkbnr/ppp3pp/3p4/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    moves: "e4 e5 Nf3 d6 Bc4 f5",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Philidor's Defence-Hanham Variation",
    fen: "r1bqkbnr/pppn1ppp/3p4/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 e5 Nf3 d6 d4 Nd7",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Philidor's Defence-Jaenisch Variation",
    fen: "rnbqkb1r/ppp2ppp/3p1n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 e5 Nf3 d6 d4 Nf6",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ruy Lopez-Morphy Defence",
    fen: "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6",
    eco: "C60",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ruy Lopez-Alapin's Defence",
    fen: "r1bqk1nr/pppp1ppp/2n5/1B2p3/1b2P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 Bb4",
    eco: "C60",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ruy Lopez-Cordel/Classical Defence",
    fen: "r1bqk1nr/pppp1ppp/2n5/1Bb1p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 Bc5",
    eco: "C64",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ruy Lopez-Spanish Countergambit",
    fen: "r1bqkbnr/ppp2ppp/2n5/1B1pp3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 d5",
    eco: "C60",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ruy Lopez-Old Steinitz Defence",
    fen: "r1bqkbnr/ppp2ppp/2np4/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 d6",
    eco: "C62",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ruy Lopez-Schliemann Defence",
    fen: "r1bqkbnr/pppp2pp/2n5/1B2pp2/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 f5",
    eco: "C63",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ruy Lopez-Bird Defence",
    fen: "r1bqkbnr/pppp1ppp/8/1B2p3/3nP3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nd4",
    eco: "C61",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ruy Lopez-Berlin Defence",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6",
    eco: "C65",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Italian Game-Hungarian Defence",
    fen: "r1bqk1nr/ppppbppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    moves: "e4 e5 Nf3 Nc6 Bc4 Be7",
    eco: "C50",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Italian Game-Anti-Fried Liver Defence",
    fen: "r1bqkbnr/pppp1pp1/2n4p/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bc4 h6",
    eco: "C55",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Italian Game-2 Knights Defence",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6",
    eco: "C55",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ponziani Opening-Réti Variation",
    fen: "r1bqkb1r/ppppnppp/2n5/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 e5 Nf3 Nc6 c3 Nge7",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Lafitte Variation",
    fen: "r1bqkbnr/1ppp1ppp/p1n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 d4 a6",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Advance Variation-Extended Bishop Swap",
    fen: "rn1qkbnr/pppb1ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 e6 d4 d5 e5 Bd7",
    eco: "C02",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Tarrasch Variation-Modern System",
    fen: "rnbqkbnr/1pp2ppp/p3p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 e6 d4 d5 Nd2 a6",
    eco: "C03",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Tarrasch Variation-Open System",
    fen: "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 e6 d4 d5 Nd2 c5",
    eco: "C07",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Tarrasch Variation-Haberditz Variation",
    fen: "rnbqkbnr/ppp3pp/4p3/3p1p2/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 e6 d4 d5 Nd2 f5",
    eco: "C03",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Tarrasch Variation-Guimard Defence",
    fen: "r1bqkbnr/ppp2ppp/2n1p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq - 2 4",
    moves: "e4 e6 d4 d5 Nd2 Nc6",
    eco: "C03/C04",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Tarrasch Variation-Closed Variation",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq - 2 4",
    moves: "e4 e6 d4 d5 Nd2 Nf6",
    eco: "C05",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-French Defence-Knight Variation-Franco-Hiva Gambit II",
    fen: "rnbqkbnr/pppp2pp/4p3/5p2/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
    moves: "e4 e6 Nf3 f5",
    eco: "C00",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Barnes Defence-Owen Defence-Unicorn Variation",
    fen: "rn1qkbnr/pbppp1pp/1p3p2/8/2PPP3/8/PP3PPP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 f6 d4 b6 c4 Bb7",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Standard Line-Mongredien Defence",
    fen: "rnbqk1nr/p1ppppbp/1p4p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 g6 d4 Bg7 Nc3 b6",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Standard Line-Standard Defence",
    fen: "rnbqk1nr/ppp1ppbp/3p2p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 g6 d4 Bg7 Nc3 d6",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Lizard Variation-Accelerated Gurgenidze Variation",
    fen: "rnbqkbnr/pp2pp1p/2pp2p1/8/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 g6 d4 d6 Nc3 c6",
    eco: "B07",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch Defence-Scandinavian Variation-Bogoljubov Variation-Vehre Variation",
    fen: "r1bqkb1r/ppp1pppp/2n2n2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 2 4",
    moves: "e4 Nc6 d4 d5 Nc3 Nf6",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Alekhine Defence-Mokele Mbembe Variation-Vavra Defence",
    fen: "rnbqkb1r/pppp1ppp/4p3/4P3/3Pn3/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 Nf6 e5 Ne4 d4 e6",
    eco: "B02",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Alekhine Defence-Mokele Mbembe Variation-Modern Line",
    fen: "rnbqkb1r/ppppp1pp/5p2/4P3/3Pn3/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 Nf6 e5 Ne4 d4 f6",
    eco: "B02",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Alekhine Defence-Brooklyn Defence-Everglades Variation",
    fen: "rnbqkbnr/ppppp1pp/8/4Pp2/3P4/8/PPP2PPP/RNBQKBNR w KQkq f6 0 4",
    moves: "e4 Nf6 e5 Ng8 d4 f5",
    eco: "B02",
    difficulty: "Medium"
  },
  {
    name: "Bird System-Dutch Variation-Batavo Gambit",
    fen: "rnbqkbnr/pp2pppp/8/2p5/4pP2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4",
    moves: "f4 d5 Nf3 c5 e4 dxe4",
    eco: "A03",
    difficulty: "Medium"
  },
  {
    name: "Bird System-From Gambit-Langheld Gambit",
    fen: "rnbqkb1r/ppp2ppp/3P1n2/8/8/8/PPPPP1PP/RNBQKBNR w KQkq - 1 4",
    moves: "f4 e5 fxe5 d6 exd6 Nf6",
    eco: "A02",
    difficulty: "Medium"
  },
  {
    name: "Grob Attack-Zilbermints Gambit-Schiller Defence",
    fen: "rnbqkbnr/ppp1ppp1/8/7p/4p1P1/2N5/PPPP1P1P/R1BQKBNR w KQkq - 0 4",
    moves: "g4 d5 e4 dxe4 Nc3 h5",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Dunst Opening-Reversed Nimzowitsch Variation-Liebig Gambit",
    fen: "rnbqkb1r/ppp2ppp/5n2/3pp2Q/8/2N1P3/PPPP1PPP/R1B1KBNR w KQkq - 2 4",
    moves: "Nc3 e5 e3 d5 Qh5 Nf6",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-Réti Gambit-Advance Variation",
    fen: "rnbqkbnr/ppp1pppp/8/8/2Pp4/5N2/PP1PPPPP/RNBQKB1R w KQkq - 0 3",
    moves: "Nf3 d5 c4 d4",
    eco: "A09",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch-Larsen Attack-Dutch Variation-Ringelbach Variation",
    fen: "rnbqkbnr/pppp2pp/4p3/5p2/4P3/1P6/PBPP1PPP/RN1QKBNR b KQkq - 0 3",
    moves: "b3 f5 Bb2 e6 e4",
    eco: "A01",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Richter-Veresov Attack",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p2B1/3P4/2N5/PPP1PPPP/R2QKBNR b KQkq - 3 3",
    moves: "d4 d5 Nc3 Nf6 Bg5",
    eco: "D01",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Grunfeld Reversed-Symmetrical Variation-Queen's Bishop Game/London System",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p4/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 3 3",
    moves: "d4 d5 Nf3 Nf6 Bf4",
    eco: "D02",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-East Indian Defence-Neo-Indian/Seirawan Attack",
    fen: "rnbqkb1r/pppp1ppp/4pn2/6B1/2PP4/8/PP2PPPP/RN1QKBNR b KQkq - 1 3",
    moves: "d4 Nf6 c4 e6 Bg5",
    eco: "E00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Indian Defence-Reversed Chigorin Defence-von Beivorseen Variation",
    fen: "rnbqkb1r/pp1ppppp/5n2/2P5/8/2N5/PPP1PPPP/R1BQKBNR b KQkq - 0 3",
    moves: "d4 Nf6 Nc3 c5 dxc5",
    eco: "A45",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Indian Defence-Torre Attack-London System",
    fen: "rnbqkb1r/pppp1ppp/4pn2/8/3P1B2/5N2/PPP1PPPP/RN1QKB1R b KQkq - 1 3",
    moves: "d4 Nf6 Nf3 e6 Bf4",
    eco: "A46",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Indian Defence-Torre Attack-Classical Defence",
    fen: "rnbqkb1r/pppp1ppp/4pn2/6B1/3P4/5N2/PPP1PPPP/RN1QKB1R b KQkq - 1 3",
    moves: "d4 Nf6 Nf3 e6 Bg5",
    eco: "A46",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Grand Prix Attack-Tal Defence-Toilet Variation",
    fen: "rnbqkbnr/pp2pppp/8/2pp4/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq - 1 3",
    moves: "e4 c5 f4 d5 Nc3",
    eco: "B21",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Closed Variation-Traditional Variation-Grand Prix/Zukertort Attack",
    fen: "r1bqkbnr/pp1ppppp/2n5/2p5/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq - 0 3",
    moves: "e4 c5 Nc3 Nc6 f4",
    eco: "B23",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Closed Variation-Traditional Variation-Grob Attack",
    fen: "r1bqkbnr/pp1ppppp/2n5/2p5/4P1P1/2N5/PPPP1P1P/R1BQKBNR b KQkq - 0 3",
    moves: "e4 c5 Nc3 Nc6 g4",
    eco: "B23",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-O'Kelly Variation-Aronin System",
    fen: "rnbqkbnr/1p1ppppp/p7/2p5/4P3/5N2/PPPPBPPP/RNBQK2R b KQkq - 1 3",
    moves: "e4 c5 Nf3 a6 Be2",
    eco: "B28",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-Paulsen Variation-Westerinen Attack",
    fen: "rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/1P3N2/P1PP1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 c5 Nf3 e6 b3",
    eco: "B40",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Labahn Attack-Polish Variation",
    fen: "rnbqkbnr/pp1p1ppp/2p5/4p3/1P2P3/8/PBPP1PPP/RN1QKBNR b KQkq - 1 3",
    moves: "e4 c6 b4 e5 Bb2",
    eco: "B10",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Goldman/Spielmann Variation",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N2Q2/PPPP1PPP/R1B1KBNR b KQkq - 1 3",
    moves: "e4 c6 Nc3 d5 Qf3",
    eco: "B10",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Classical Defence-Lopez Variation",
    fen: "rnbqk1nr/pppp1ppp/8/2b1p3/2B1P3/8/PPPPQPPP/RNB1K1NR b KQkq - 3 3",
    moves: "e4 e5 Bc4 Bc5 Qe2",
    eco: "C23",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Berlin Defence-Walkerling Variation",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/5P2/PPPP2PP/RNBQK1NR b KQkq - 0 3",
    moves: "e4 e5 Bc4 Nf6 f3",
    eco: "C24",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Vienna Game-Anderssen Defence-Hamppe-Meitner Variation",
    fen: "rnbqk1nr/pppp1ppp/8/2b1p3/N3P3/8/PPPP1PPP/R1BQKBNR b KQkq - 3 3",
    moves: "e4 e5 Nc3 Bc5 Na4",
    eco: "C25",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Vienna Game-Falkbeer Variation-Stanley Variation",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR b KQkq - 3 3",
    moves: "e4 e5 Nc3 Nf6 Bc4",
    eco: "C26",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Latvian Countergambit-Mayet Attack",
    fen: "rnbqkbnr/pppp2pp/8/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 3",
    moves: "e4 e5 Nf3 f5 Bc4",
    eco: "C40",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Normal Variation-Classical Variation-Paulsen Attack",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 3",
    moves: "e4 e6 d4 d5 Nc3",
    eco: "C10",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Alekhine Defence-Normal Variation-2 Pawns/Chase Attack",
    fen: "rnbqkb1r/pppppppp/8/3nP3/2P5/8/PP1P1PPP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 Nf6 e5 Nd5 c4",
    eco: "B02",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Alekhine Defence-Normal Variation-Buckley Attack",
    fen: "rnbqkb1r/pppppppp/8/3nP3/8/N7/PPPP1PPP/R1BQKBNR b KQkq - 2 3",
    moves: "e4 Nf6 e5 Nd5 Na3",
    eco: "B03",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Alekhine Defence-Normal Variation-Sämisch Attack",
    fen: "rnbqkb1r/pppppppp/8/3nP3/8/2N5/PPPP1PPP/R1BQKBNR b KQkq - 2 3",
    moves: "e4 Nf6 e5 Nd5 Nc3",
    eco: "B02",
    difficulty: "Medium"
  },
  {
    name: "Dunst Opening-Novosibirsk Opening",
    fen: "r1bqkbnr/pp1ppppp/2n5/8/7Q/2N5/PPP1PPPP/R1B1KBNR b KQkq - 2 4",
    moves: "Nc3 c5 d4 cxd4 Qxd4 Nc6 Qh4",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Dunst Opening-Sicilian 2 Knights Variation",
    fen: "r1bqkbnr/pp1ppppp/2n5/8/3N4/2N5/PPP1PPPP/R1BQKB1R b KQkq - 0 4",
    moves: "Nc3 c5 Nf3 Nc6 d4 cxd4 Nxd4",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Dunst Opening-Caro-Kann Variation-St. Patrick's Attack",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/4P3/2N4P/PPPP1PP1/R1BQKBNR b KQkq - 0 3",
    moves: "Nc3 d5 e4 c6 h3",
    eco: "B10",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Sicilian Invitation-Grünfeld Reversed",
    fen: "r1bqkbnr/pp3ppp/2n1p3/2pp4/3P4/5NP1/PPP1PPBP/RNBQ1RK1 b kq - 1 5",
    moves: "Nf3 c5 g3 d5 Bg2 Nc6 d4 e6 O-O",
    eco: "A49",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-King's Indian Attack-Barcza Defence-Smyslov Variation",
    fen: "rnbqkb1r/pppppp1p/5np1/8/1P6/5NP1/P1PPPP1P/RNBQKB1R b KQkq - 0 3",
    moves: "Nf3 Nf6 g3 g6 b4",
    eco: "A05",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-St. George Defence-St. Georgs Gambit",
    fen: "rnbqkbnr/2pp1ppp/4p3/1p6/3PP3/8/PP3PPP/RNBQKBNR w KQkq - 0 5",
    moves: "d4 a6 c4 b5 e4 e6 cxb5 axb5",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Austrian Defence-Salvio Countergambit",
    fen: "rnbqkbnr/pp2pppp/8/2P5/2Pp4/8/PP2PPPP/RNBQKBNR w KQkq - 0 4",
    moves: "d4 d5 c4 c5 dxc5 d4",
    eco: "D02",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Slav Defence-Winawer Countergambit",
    fen: "rnbqkbnr/pp3ppp/2p5/3pp3/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4",
    moves: "d4 d5 c4 c6 Nc3 e5",
    eco: "D10",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Chigorin Defence-Tartakower Gambit",
    fen: "r1bqkbnr/ppp2ppp/2n5/3pp3/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4",
    moves: "d4 d5 c4 Nc6 Nc3 e5",
    eco: "D07",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Chigorin Defence-Lazard Gambit",
    fen: "r1bqkbnr/ppp2ppp/2n5/3pp3/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 d5 c4 Nc6 Nf3 e5",
    eco: "D07",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit Declined-Brombacher Countergambit",
    fen: "rnbqkb1r/pp2pppp/5n2/2p5/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq - 0 5",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 c5",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit Declined-O'Kelly Defence",
    fen: "rnbqkb1r/pp2pppp/2p2n2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq - 0 5",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 c6",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit Declined-Langeheinecke Defence",
    fen: "rnbqkb1r/ppp1pppp/5n2/8/3P4/2N1pP2/PPP3PP/R1BQKBNR w KQkq - 0 5",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 e3",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit Declined-Elbert Countergambit",
    fen: "rnbqkb1r/ppp2ppp/5n2/4p3/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq - 0 5",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 e5",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit Declined-Weinsbach Declination",
    fen: "rnbqkb1r/ppp2ppp/4pn2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq - 0 5",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 e6",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit Declined-Lamb Defence",
    fen: "r1bqkb1r/ppp1pppp/2n2n2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq - 1 5",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 Nc6",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Anti-Veresov Variation",
    fen: "rn1qkbnr/ppp1pppp/8/3p4/3P2b1/2N5/PPP1PPPP/R1BQKBNR w KQkq - 2 3",
    moves: "d4 d5 Nc3 Bg4",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Kevitz-Mikenas Defence-Montevideo Defence-Zaire Defence",
    fen: "rnbqkbnr/pppppppp/8/3PP3/8/8/PPP2PPP/RNBQKBNR w KQkq - 1 5",
    moves: "d4 Nc6 d5 Nb8 e4 Nf6 e5 Ng8",
    eco: "B02",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-East Indian Defence-Catalan Opening-Hungarian Gambit",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/2PP4/6P1/PP2PP1P/RNBQKBNR w KQkq - 0 4",
    moves: "d4 Nf6 c4 e6 g3 e5",
    eco: "E00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Anti-Grünfeld-Danube/Adorjan Gambit",
    fen: "rnbqkb1r/p1pppp1p/5np1/1p1P4/2P5/8/PP2PPPP/RNBQKBNR w KQkq - 0 4",
    moves: "d4 Nf6 c4 g6 d5 b5",
    eco: "E60",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Pseudo-Queen's Indian Defence-Schnepper Gambit",
    fen: "rnbqkb1r/p1pp1ppp/1p3n2/4p3/3P4/2P2N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 Nf6 Nf3 b6 c3 e5",
    eco: "A47",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit Declined-Scandinavian Formation",
    fen: "rnbqkbnr/pp2pppp/8/3p4/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 c5 d4 cxd4 c3 d5",
    eco: "B21",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit Declined-Centre Formation",
    fen: "rnbqkbnr/pp1p1ppp/8/4p3/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 c5 d4 cxd4 c3 e5",
    eco: "B21",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Danish Gambit Declined-Soerensen Defence",
    fen: "rnbqkbnr/ppp2ppp/8/3p4/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 e5 d4 exd4 c3 d5",
    eco: "C21",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Falkbeer Countergambit Accepted-Nimzowitsch-Marshall Countergambit",
    fen: "rnbqkbnr/pp3ppp/2p5/3Pp3/5P2/8/PPPP2PP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 e5 f4 d5 exd5 c6",
    eco: "C31",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Falkbeer Countergambit Accepted-Staunton Line",
    fen: "rnbqkbnr/ppp2ppp/8/3P4/4pP2/8/PPPP2PP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 e5 f4 d5 exd5 e4",
    eco: "C31",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Queen's Knight Defence-Miles Defence",
    fen: "r1bqkbnr/pppp2pp/2n5/4pp2/4PP2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 f4 Nc6 Nf3 f5",
    eco: "C30",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Queen's Knight Defence-Zilbermints Double Gambit I",
    fen: "r1bqkbnr/pppp1p1p/2n5/4p1p1/4PP2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 f4 Nc6 Nf3 g5",
    eco: "C30",
    difficulty: "Medium"
  },
  {
    name: "Vienna Game-Max Lange Defence-Fyfe Gambit-Philidor Countergambit",
    fen: "r1bqkbnr/pppp2pp/2n5/4pp2/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 e5 Nc3 Nc6 d4 f5",
    eco: "C25",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Anderssen Gambit",
    fen: "r1bqkbnr/pppp2pp/2n5/4pp2/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 d4 f5",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "Benko Opening-Dutch Defence-Paschmann Gambit",
    fen: "rnbqkbnr/ppppp2p/6p1/7Q/4p3/6P1/PPPP1P1P/RNB1KBNR w KQkq - 0 4",
    moves: "g3 f5 e4 fxe4 Qh5+ g6",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Polish Opening-Outflank Variation-Schuehler Gambit",
    fen: "rnbqkbnr/1p1ppppp/8/pp6/4P3/8/PBPP1PPP/RN1QKBNR b KQkq - 0 4",
    moves: "b4 c6 Bb2 a5 b5 cxb5 e4",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Bremen Variation-Reversed Closed Sicilian-Kingside Fianchetto Line",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2P5/2N2NP1/PP1PPP1P/R1BQKB1R b KQkq - 0 4",
    moves: "c4 e5 Nc3 Nc6 Nf3 Nf6 g3",
    eco: "A29",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Flohr-Mikenas-Carls Variation #2-French Variation-Flohr Variation",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3pP3/2P5/2N5/PP1P1PPP/R1BQKBNR b KQkq - 0 4",
    moves: "c4 Nf6 Nc3 e6 e4 d5 e5",
    eco: "A18",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence-Zilbermints-Benoni Gambit",
    fen: "rnbqkbnr/pp1ppppp/8/8/1P1p4/5N2/P1P1PPPP/RNBQKB1R b KQkq - 0 3",
    moves: "d4 c5 Nf3 cxd4 b4",
    eco: "A56",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Slav Defence-Classical Exchange Variation",
    fen: "rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PP2PPPP/RNBQKBNR b KQkq - 0 3",
    moves: "d4 d5 c4 c6 cxd5",
    eco: "D10",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Accelerated Mannheim Variation",
    fen: "rnbqkbnr/ppp1pppp/8/8/Q1pP4/8/PP2PPPP/RNB1KBNR b KQkq - 1 3",
    moves: "d4 d5 c4 dxc4 Qa4+",
    eco: "D20",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Traditional Variation",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3p2B1/2PP4/5N2/PP2PPPP/RN1QKB1R b KQkq - 3 4",
    moves: "d4 d5 c4 e6 Nf3 Nf6 Bg5",
    eco: "D30",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Von Popiel Gambit",
    fen: "rnbqkb1r/ppp1pppp/5n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR b KQkq - 3 4",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 Bg5",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Blackmar-Diemer Gambit",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 3",
    moves: "d4 d5 Nc3 Nf6 e4",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Grunfeld Reversed-Symmetrical Variation-Colle System-Semi-Colle Variation",
    fen: "rnbqkb1r/pp2pppp/5n2/2pp4/3P4/2P1PN2/PP3PPP/RNBQKB1R b KQkq - 0 4",
    moves: "d4 d5 Nf3 Nf6 e3 c5 c3",
    eco: "D04",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Normal Variation-Russian Variation",
    fen: "rnbqkb1r/ppppp2p/5np1/5p2/2PP4/5NP1/PP2PP1P/RNBQKB1R b KQkq - 0 4",
    moves: "d4 f5 c4 Nf6 Nf3 g6 g3",
    eco: "A84",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Korchnoi Attack-Janzen-Korchnoi Gambit",
    fen: "rnbqkb1r/ppppp1pp/5n2/5p2/3P2P1/7P/PPP1PP2/RNBQKBNR b KQkq - 0 3",
    moves: "d4 f5 h3 Nf6 g4",
    eco: "A80",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Raphael Variation-Kingfisher Gambit",
    fen: "rnbqkbnr/ppp1p1pp/8/3p1p2/3PP3/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 3",
    moves: "d4 f5 Nc3 d5 e4",
    eco: "A80",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Raphael Variation-Spielmann Gambit",
    fen: "rnbqkb1r/ppppp1pp/5n2/5p2/3P2P1/2N5/PPP1PP1P/R1BQKBNR b KQkq - 0 3",
    moves: "d4 f5 Nc3 Nf6 g4",
    eco: "A80",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Manhattan Gambit-Anti-Stonewall Variation",
    fen: "rnbqkbnr/ppp1p1pp/8/3p1p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR b KQkq - 0 3",
    moves: "d4 f5 Qd3 d5 g4",
    eco: "A80",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Manhattan Gambit-Anti-Modern Variation",
    fen: "rnbqkbnr/ppp1p1pp/3p4/5p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR b KQkq - 0 3",
    moves: "d4 f5 Qd3 d6 g4",
    eco: "A80",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Manhattan Gambit-Anti-Leningrad Variation",
    fen: "rnbqkbnr/ppppp2p/6p1/5p2/3P2P1/3Q4/PPP1PP1P/RNB1KBNR b KQkq - 0 3",
    moves: "d4 f5 Qd3 g6 g4",
    eco: "A80",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Old Indian Defence-Ukrainian Variation-2 Knights Variation",
    fen: "rnbqkb1r/ppp2ppp/3p1n2/4p3/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 1 4",
    moves: "d4 Nf6 c4 d6 Nc3 e5 Nf3",
    eco: "A54",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Rubinstein/Normal Line",
    fen: "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3",
    eco: "E40",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Romanishin-Kasparov/Steiner System",
    fen: "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N3P1/PP2PP1P/R1BQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 g3",
    eco: "E20",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Delayed Fianchetto Variation",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/8/2PP4/2N2NP1/PP2PP1P/R1BQKB1R b KQkq - 0 5",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3",
    eco: "E62",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Grünfeld Defence-Lutikov Variation",
    fen: "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N2P2/PP2P1PP/R1BQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 c4 g6 Nc3 d5 f3",
    eco: "D80",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Grünfeld Defence-Kemeri Variation",
    fen: "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N3P1/PP2PP1P/R1BQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 c4 g6 Nc3 d5 g3",
    eco: "D80",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Grünfeld Defence-3 Knights Variation",
    fen: "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 1 4",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3",
    eco: "D90",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Indian Defence-Paleface Attack-Blackmar-Diemer Gambit Deferred",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p4/3PP3/5P2/PPP3PP/RNBQKBNR b KQkq - 0 3",
    moves: "d4 Nf6 f3 d5 e4",
    eco: "A45",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Wing Gambit-Marshall Variation",
    fen: "rnbqkbnr/pp1ppppp/8/8/1p2P3/P7/2PP1PPP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 c5 b4 cxb4 a3",
    eco: "B20",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Wing Gambit-Santasiere Variation",
    fen: "rnbqkbnr/pp1ppppp/8/8/1pP1P3/8/P2P1PPP/RNBQKBNR b KQkq c3 0 3",
    moves: "e4 c5 b4 cxb4 c4",
    eco: "B20",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit-Morphy Gambit",
    fen: "rnbqkbnr/pp1ppppp/8/8/3pP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 1 3",
    moves: "e4 c5 d4 cxd4 Nf3",
    eco: "B21",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-O'Kelly Variation-Wing Gambit",
    fen: "rnbqkbnr/1p1ppppp/p7/2p5/1P2P3/5N2/P1PP1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 c5 Nf3 a6 b4",
    eco: "B28",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Kopec Variation-Wing Gambit Deferred",
    fen: "rnbqkbnr/pp2pppp/3p4/2p5/1P2P3/5N2/P1PP1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 c5 Nf3 d6 b4",
    eco: "B50",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-Paulsen Variation-Wing Gambit Deferred",
    fen: "rnbqkbnr/pp1p1ppp/4p3/2p5/1P2P3/5N2/P1PP1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 c5 Nf3 e6 b4",
    eco: "B40",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Advance Variation-Tal Variation",
    fen: "rn1qkbnr/pp2pppp/2p5/3pPb2/3P3P/8/PPP2PP1/RNBQKBNR b KQkq - 0 4",
    moves: "e4 c6 d4 d5 e5 Bf5 h4",
    eco: "B12",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Pirc Defence-Lion Defence-Anti-Philidor Variation",
    fen: "r1bqkb1r/pppnpppp/3p1n2/8/3PPP2/2N5/PPP3PP/R1BQKBNR b KQkq - 0 4",
    moves: "e4 d6 d4 Nf6 Nc3 Nbd7 f4",
    eco: "B07",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Pirc Defence-Lion Defence-Bayonet Attack",
    fen: "r1bqkb1r/pppnpppp/3p1n2/8/3PP1P1/2N5/PPP2P1P/R1BQKBNR b KQkq - 0 4",
    moves: "e4 d6 d4 Nf6 Nc3 Nbd7 g4",
    eco: "B07",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Berlin Defence-Vienna Hybrid",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2NP4/PPP2PPP/R1BQK1NR b KQkq - 2 4",
    moves: "e4 e5 Bc4 Nf6 d3 Nc6 Nc3",
    eco: "C28",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Berlin Defence-Ponziani Gambit",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/2BPP3/8/PPP2PPP/RNBQK1NR b KQkq - 0 3",
    moves: "e4 e5 Bc4 Nf6 d4",
    eco: "C24",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Berlin Defence-Greco Gambit",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/2B1PP2/8/PPPP2PP/RNBQK1NR b KQkq - 0 3",
    moves: "e4 e5 Bc4 Nf6 f4",
    eco: "C24",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Falkbeer Countergambit-Milner-Barry Variation",
    fen: "rnbqkbnr/ppp2ppp/8/3pp3/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq - 1 3",
    moves: "e4 e5 f4 d5 Nc3",
    eco: "C31",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Falkbeer Countergambit-Tartakower/Blackburne Attack",
    fen: "rnbqkbnr/ppp2ppp/8/3pp3/4PP2/5N2/PPPP2PP/RNBQKB1R b KQkq - 1 3",
    moves: "e4 e5 f4 d5 Nf3",
    eco: "C31",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Accepted-Lesser Bishop's/Petroff-Jaenisch-Tartakower Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPPB1PP/RNBQK1NR b KQkq - 1 3",
    moves: "e4 e5 f4 exf4 Be2",
    eco: "C33",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Accepted-Mason-Keres/Mason-Steinitz Gambit",
    fen: "rnbqkbnr/pppp1ppp/8/8/4Pp2/2N5/PPPP2PP/R1BQKBNR b KQkq - 1 3",
    moves: "e4 e5 f4 exf4 Nc3",
    eco: "C33",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Accepted-King's Knight's Gambit",
    fen: "rnbqkbnr/pppp1p1p/8/6p1/2B1Pp2/5N2/PPPP2PP/RNBQK2R b KQkq - 1 4",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4",
    eco: "C37",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Paris Attack",
    fen: "rnbqkbnr/pppp1p1p/8/6p1/4Pp1P/5N2/PPPP2P1/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4",
    eco: "C39",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Vienna Game-Falkbeer Variation-Vienna Gambit",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/4PP2/2N5/PPPP2PP/R1BQKBNR b KQkq - 0 3",
    moves: "e4 e5 Nc3 Nf6 f4",
    eco: "C29",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Philidor Countergambit-Zukertort Variation",
    fen: "rnbqkbnr/ppp3pp/3p4/4pp2/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 1 4",
    moves: "e4 e5 Nf3 d6 d4 f5 Nc3",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Jaenisch Variation-Locock Variation",
    fen: "rnbqkb1r/ppp2ppp/3p1n2/4p1N1/3PP3/8/PPP2PPP/RNBQKB1R b KQkq - 2 4",
    moves: "e4 e5 Nf3 d6 d4 Nf6 Ng5",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Damiano Defence-Damiano Gambit",
    fen: "rnbqkbnr/pppp2pp/5p2/4N3/4P3/8/PPPP1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "e4 e5 Nf3 f6 Nxe5",
    eco: "C40",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Cordel Defence-Central/Classical Defence",
    fen: "r1bqk1nr/pppp1ppp/2n5/1Bb1p3/4P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 Bc5 c3",
    eco: "C64",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Italian Game-Giuoco Piano-Giuoco Pianissimo",
    fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 d3",
    eco: "C50",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-2 Knights Defence-Modern Bishop's Opening",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d3",
    eco: "C55",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Inverted Hungarian Opening-Tayler Opening",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/5N2/PPP1BPPP/RNBQK2R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Be2 Nf6 d4",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ponziani Opening-Jaenisch Counterattack-Modern Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2PP1N2/PP3PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 c3 Nf6 d3",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Dresden Opening-The Goblin",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4N3/2P1P3/8/PP1P1PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 c4 Nf6 Nxe5",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-4 Knights Game-Gunsberg Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/P1N2N2/1PPP1PPP/R1BQKB1R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 a3",
    eco: "C46",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-4 Knights Game-Scotch Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 d4",
    eco: "C47",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Petrov's Defence-Italian/Urusov Gambit",
    fen: "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
    moves: "e4 e5 Nf3 Nf6 Bc4",
    eco: "C42",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-French Defence-Réti Attack-Papa-Ticulat Gambit",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/4P3/1P6/PBPP1PPP/RN1QKBNR b KQkq - 1 3",
    moves: "e4 e6 b3 d5 Bb2",
    eco: "C00",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-French Defence-Banzai-Leong Gambit-Pinova Gambit",
    fen: "rnbqk1nr/pppp1ppp/4p3/4P3/1b6/8/P1PP1PPP/RNBQKBNR b KQkq - 0 3",
    moves: "e4 e6 b4 Bxb4 e5",
    eco: "C00",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Normal Variation-Classical Variation-Alapin Gambit",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/4B3/PPP2PPP/RN1QKBNR b KQkq - 1 3",
    moves: "e4 e6 d4 d5 Be3",
    eco: "C01",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Advance Variation-Steinitz Variation",
    fen: "rnbqkbnr/pp3ppp/4p3/2PpP3/8/8/PPP2PPP/RNBQKBNR b KQkq - 0 4",
    moves: "e4 e6 d4 d5 e5 c5 dxc5",
    eco: "C02",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Advance Variation-Nimzowitsch System",
    fen: "rnbqkbnr/pp3ppp/4p3/2ppP3/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq - 1 4",
    moves: "e4 e6 d4 d5 e5 c5 Nf3",
    eco: "C02",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Tarrasch Variation-Open System-Suechting Line",
    fen: "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/2P5/PP1N1PPP/R1BQKBNR b KQkq - 0 4",
    moves: "e4 e6 d4 d5 Nd2 c5 c3",
    eco: "C07",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Tarrasch Variation-Open System-Euwe-Keres Line",
    fen: "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/5N2/PPPN1PPP/R1BQKB1R b KQkq - 1 4",
    moves: "e4 e6 d4 d5 Nd2 c5 Ngf3",
    eco: "C07",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Normal Variation-Classical Variation-Perseus Gambit",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 1 3",
    moves: "e4 e6 d4 d5 Nf3",
    eco: "C01",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Normal Variation-Classical Variation-Morphy Gambit",
    fen: "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/7N/PPP2PPP/RNBQKB1R b KQkq - 1 3",
    moves: "e4 e6 d4 d5 Nh3",
    eco: "C01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Alekhine Defence-Normal Variation-Hunt Variation",
    fen: "rnbqkb1r/ppp1pppp/3p4/3nP3/2PP4/8/PP3PPP/RNBQKBNR b KQkq - 0 4",
    moves: "e4 Nf6 e5 Nd5 d4 d6 c4",
    eco: "B03",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Alekhine Defence-Normal Variation-Modern Variation",
    fen: "rnbqkb1r/ppp1pppp/3p4/3nP3/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq - 1 4",
    moves: "e4 Nf6 e5 Nd5 d4 d6 Nf3",
    eco: "B04",
    difficulty: "Medium"
  },
  {
    name: "Bird System-Dutch Variation-Williams Gambit-Prokofiev Variation",
    fen: "rnbqkbnr/ppp1pppp/8/8/4pP2/3P4/PPP3PP/RNBQKBNR b KQkq - 0 3",
    moves: "f4 d5 e4 dxe4 d3",
    eco: "A03",
    difficulty: "Medium"
  },
  {
    name: "Grob Attack-Grob Gambit-Keres Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/3p4/3p2P1/2P5/PP2PPBP/RNBQK1NR b KQkq - 0 4",
    moves: "g4 d5 Bg2 e5 d4 exd4 c3",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Dunst Opening-Gruenfeld Defence-Steiner Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/4p3/4NP2/8/PPPP2PP/R1BQKBNR b KQkq - 0 4",
    moves: "Nc3 d5 e4 dxe4 Nxe4 e5 f4",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Dunst Opening-Reversed Nimzowitsch Variation-Gladbacher Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/4p3/4p3/1PNP4/P1P2PPP/R1BQKBNR b KQkq - 0 4",
    moves: "Nc3 e5 b3 d5 e4 dxe4 d3",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-Nimzowitsch-Larsen Attack-Norfolk Gambit 2/Accelerated Norfolk",
    fen: "rnbqkbnr/pp2pppp/8/2pp4/4P3/1P3N2/P1PP1PPP/RNBQKB1R b KQkq - 0 3",
    moves: "Nf3 d5 b3 c5 e4",
    eco: "A01",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Réti Gambit-Anglo-Slav Variation-Bogoljubov Variation III",
    fen: "rnbqkbnr/pp2pppp/2p5/3p4/2P5/1P3N2/P2PPPPP/RNBQKB1R b KQkq - 0 3",
    moves: "Nf3 d5 c4 c6 b3",
    eco: "A12",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Réti Gambit-Advance Variation-Polonaise Variation",
    fen: "rnbqkbnr/ppp1pppp/8/8/1PPp4/5N2/P2PPPPP/RNBQKB1R b KQkq - 0 3",
    moves: "Nf3 d5 c4 d4 b4",
    eco: "A09",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Caro-Kann Defensive System-Bogoljubov Variation",
    fen: "rn1qkbnr/pp2pppp/2p5/3p4/2P3b1/1P3N2/P2PPPPP/RNBQKB1R w KQkq - 1 4",
    moves: "c4 c6 Nf3 d5 b3 Bg4",
    eco: "A12",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Reversed Sicilian-General Variation-Smyslov Defence",
    fen: "rn1qkbnr/ppp2ppp/3p4/4p3/2P3b1/2N2N2/PP1PPPPP/R1BQKB1R w KQkq - 2 4",
    moves: "c4 e5 Nc3 d6 Nf3 Bg4",
    eco: "A21",
    difficulty: "Medium"
  },
  {
    name: "English Opening-2 Knights Variation-Carls-Bremen System-Smyslov System",
    fen: "rnbqk2r/pppp1ppp/5n2/4p3/1bP5/2N3P1/PP1PPP1P/R1BQKBNR w KQkq - 1 4",
    moves: "c4 e5 Nc3 Nf6 g3 Bb4",
    eco: "A22",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Stonewall Attack-Showalter Variation-Gunsberg Variation",
    fen: "rnbqkbnr/pp3ppp/4p3/2pp4/3P4/3BP3/PPP2PPP/RNBQK1NR w KQkq - 0 4",
    moves: "d4 d5 e3 e6 Bd3 c5",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Richter-Veresov Attack-Boyce Defence",
    fen: "rnbqkb1r/ppp1pppp/8/3p2B1/3Pn3/2N5/PPP1PPPP/R2QKBNR w KQkq - 4 4",
    moves: "d4 d5 Nc3 Nf6 Bg5 Ne4",
    eco: "D01",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Symmetrical Variation-Colle System-Anti-Colle Variation",
    fen: "rn1qkb1r/ppp1pppp/5n2/3p1b2/3P4/4PN2/PPP2PPP/RNBQKB1R w KQkq - 1 4",
    moves: "d4 d5 Nf3 Nf6 e3 Bf5",
    eco: "D04",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Modern Benoni Defence-Weenink Variation",
    fen: "rnbqkb1r/pp1p1ppp/4pn2/2P5/2P5/8/PP2PPPP/RNBQKBNR w KQkq - 0 4",
    moves: "d4 Nf6 c4 c5 dxc5 e6",
    eco: "A56",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Old Indian Defence-Tartakower-Indian Variation",
    fen: "rn1qkb1r/ppp1pppp/3p1n2/8/2PP2b1/5N2/PP2PPPP/RNBQKB1R w KQkq - 2 4",
    moves: "d4 Nf6 c4 d6 Nf3 Bg4",
    eco: "A54",
    difficulty: "Medium"
  },
  {
    name: "King's Indian Defence-Alekhine Variation-Neo-Grünfeld Defence/Goglidze Attack",
    fen: "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/5P2/PP2P1PP/RNBQKBNR w KQkq - 0 4",
    moves: "d4 Nf6 c4 g6 f3 d5",
    eco: "D70",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Torre Attack-Spielmann-Indian Variation-Pseudo-Benko Variation",
    fen: "rnbqkb1r/p2ppppp/5n2/1ppP4/8/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 Nf6 Nf3 c5 d5 b5",
    eco: "A46",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-St. George Defence-San Jorge Defence",
    fen: "r2qkbnr/1bpnpppp/p2p4/1p6/3PP3/3B1N2/PPP2PPP/RNBQ1RK1 w kq - 2 6",
    moves: "e4 a6 d4 b5 Nf3 Bb7 Bd3 d6 O-O Nd7",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Kopec Variation-Tartakower Variation",
    fen: "rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 c5 Nf3 d6 d4 cxd4",
    eco: "B53",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-Paulsen Variation-Open Variation",
    fen: "rnbqkbnr/pp1p1ppp/4p3/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 c5 Nf3 e6 d4 cxd4",
    eco: "B40",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Hungarian Variation-Maróczy Variation-Acton Extension",
    fen: "rnbqk1nr/pp1ppp1p/6pb/2p5/2P1P3/5N2/PP1P1PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 c5 Nf3 g6 c4 Bh6",
    eco: "B27",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Hungarian Variation-Hyperaccelerated Fianchetto-Hyperaccelerated Pterodactyl Variation",
    fen: "rnbqk1nr/pp1pppbp/6p1/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 c5 Nf3 g6 d4 Bg7",
    eco: "A42",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Old Sicilian Defence-Nimzowitsch-Rossolimo Attack-Brooklyn Retreat Defence",
    fen: "rnbqkbnr/pp1ppppp/8/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    moves: "e4 c5 Nf3 Nc6 Bb5 Nb8",
    eco: "B31",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Modern Variation-Edinburgh Variation",
    fen: "rnb1kbnr/pp2pppp/1qp5/3p4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq - 2 4",
    moves: "e4 c6 d4 d5 Nd2 Qb6",
    eco: "B12",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Countergambit-Boehnke Gambit",
    fen: "rn1qkbnr/ppp2ppp/4b3/8/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 d5 exd5 e5 dxe6 Bxe6",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Countergambit-Modern Variation-Richter Variation",
    fen: "rnbqkb1r/ppp1pp1p/5np1/3P4/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 d5 exd5 Nf6 d4 g6",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Countergambit-Mieses-Kotroc/Classical Gambit",
    fen: "rnb1kbnr/ppp1pppp/8/3q4/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3",
    moves: "e4 d5 exd5 Qxd5",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Countergambit-Anderssen Counterattack",
    fen: "rnb1kbnr/ppp2ppp/8/q3p3/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 5",
    moves: "e4 d5 exd5 Qxd5 Nc3 Qa5 d4 e5",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Bishop Opening-Classical Defence-Philidor Variation-del Rio Variation",
    fen: "rnb1k1nr/pppp1ppp/8/2b1p1q1/2B1P3/2P5/PP1P1PPP/RNBQK1NR w KQkq - 1 4",
    moves: "e4 e5 Bc4 Bc5 c3 Qg5",
    eco: "C23",
    difficulty: "Medium"
  },
  {
    name: "Vienna Game-Falkbeer Variation-Stanley Variation-Reversed Spanish Variation",
    fen: "rnbqk2r/pppp1ppp/5n2/4p3/1bB1P3/2N5/PPPP1PPP/R1BQK1NR w KQkq - 4 4",
    moves: "e4 e5 Nc3 Nf6 Bc4 Bb4",
    eco: "C26",
    difficulty: "Medium"
  },
  {
    name: "Vienna Game-Falkbeer Variation-Stanley Variation-3 Knights Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR w KQkq - 4 4",
    moves: "e4 e5 Nc3 Nf6 Bc4 Nc6",
    eco: "C28",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Main Line-Harrwitz Variation",
    fen: "rn1qkbnr/ppp2ppp/3p4/4p3/3PP1b1/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 e5 Nf3 d6 d4 Bg4",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Philidor's Defence-Exchange Variation",
    fen: "rnbqkbnr/ppp2ppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 Nf3 d6 d4 exd4",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Latvian Countergambit-Mayet Attack-Morgado Defence",
    fen: "rnbqkb1r/pppp2pp/5n2/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 4",
    moves: "e4 e5 Nf3 f5 Bc4 Nf6",
    eco: "C40",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ruy Lopez-Bulgarian Variation",
    fen: "r1bqkbnr/1ppp1ppp/2n5/pB2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 a5",
    eco: "C60",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Italian Game-Italian Variation/Giuoco Piano",
    fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5",
    eco: "C50",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Italian Game-Semi-Italian Variation",
    fen: "r1bqkbnr/ppp2ppp/2np4/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bc4 d6",
    eco: "C50",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ponziani Opening-Romanishin Variation",
    fen: "r1bqk1nr/ppppbppp/2n5/4p3/4P3/2P2N2/PP1P1PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 e5 Nf3 Nc6 c3 Be7",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Al Pacino Variation",
    fen: "r1bqk1nr/pppp1ppp/2nb4/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 e5 Nf3 Nc6 d4 Bd6",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Lolli Variation",
    fen: "r1bqkbnr/pppp1ppp/8/4p3/3nP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 d4 Nxd4",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Virviescas Sanchez Variation",
    fen: "r1b1kbnr/ppppqppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 e5 Nf3 Nc6 d4 Qe7",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Papakanellos Variation",
    fen: "r1b1kbnr/pppp1ppp/2n2q2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 e5 Nf3 Nc6 d4 Qf6",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Petrov's Defence-Modern Attack-Symmetrical Variation",
    fen: "rnbqkb1r/ppp2ppp/5n2/3pp3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nf6 d4 d5",
    eco: "C43",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Paulsen Attack-Marshall Variation",
    fen: "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 e6 d4 d5 Nc3 c5",
    eco: "C10",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Tarrasch Variation-Morozevich Variation",
    fen: "rnbqk1nr/ppp1bppp/4p3/3p4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq - 2 4",
    moves: "e4 e6 d4 d5 Nd2 Be7",
    eco: "C03",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Standard Line-Modern Pterodactyl Variation",
    fen: "rnbqk1nr/pp1pppbp/6p1/2p5/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 g6 d4 Bg7 Nc3 c5",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Improved Maroczy Variation",
    fen: "rnb1k1nr/pp1pppbp/1q4p1/2p5/2PPP3/5N2/PP3PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 g6 d4 Bg7 Nf3 c5 c4 Qb6",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Alekhine Defence-2 Pawns Attack-Bronstein Variation",
    fen: "rnbqkb1r/pppppppp/8/4P3/1nP5/8/PP1P1PPP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 Nf6 e5 Nd5 c4 Nb4",
    eco: "B02",
    difficulty: "Medium"
  },
  {
    name: "Alekhine Defence-Normal Variation-2 Pawns Attack-Main Line",
    fen: "rnbqkb1r/pppppppp/1n6/4P3/2P5/8/PP1P1PPP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 Nf6 e5 Nd5 c4 Nb6",
    eco: "B02",
    difficulty: "Medium"
  },
  {
    name: "Alekhine Defence-Normal Variation-2 Pawns Attack-The Squirrel",
    fen: "rnbqkb1r/pppppppp/8/4P3/2P2n2/8/PP1P1PPP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 Nf6 e5 Nd5 c4 Nf4",
    eco: "B02",
    difficulty: "Medium"
  },
  {
    name: "Dunst Opening-Reversed Nimzowitsch Variation-Hulsemann Gambit",
    fen: "rn1qkbnr/ppp2ppp/4b3/3pp2Q/8/2N1P3/PPPP1PPP/R1B1KBNR w KQkq - 2 4",
    moves: "Nc3 e5 e3 d5 Qh5 Be6",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Dunst Opening-Reversed Nimzowitsch Variation-Billockus-Johansen Gambit",
    fen: "rnbqk1nr/pppp1ppp/8/2b1p3/8/2N2N2/PPPPPPPP/R1BQKB1R w KQkq - 2 3",
    moves: "Nc3 e5 Nf3 Bc5",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Wade Defence-Chigorin Plan",
    fen: "1r1qkbnr/pppnpppp/3p4/8/2PP2b1/1Q3N2/PP2PPPP/RNB1KB1R w KQk - 3 5",
    moves: "Nf3 d6 d4 Bg4 c4 Nd7 Qb3 Rb8",
    eco: "A41",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Ross Gambit-The Walrus",
    fen: "r1bqkbnr/ppp2ppp/2p5/8/8/8/PPPPPPPP/RNBQKB1R w KQkq - 0 4",
    moves: "Nf3 e5 Nxe5 Nc6 Nxc6 dxc6",
    eco: "A04",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch-Larsen Attack-Indian Variation-Spike Variation",
    fen: "rnbqkb1r/pppppp1p/5np1/8/6P1/1P6/PBPPPP1P/RN1QKBNR b KQkq - 0 3",
    moves: "b3 Nf6 Bb2 g6 g4",
    eco: "A01",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Slav Defence-Winawer Countergambit-Anti-Winawer Gambit",
    fen: "rnbqkbnr/pp3ppp/2p5/3pp3/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 4",
    moves: "d4 d5 c4 c6 Nc3 e5 e4",
    eco: "D10",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Slav/Quiet Variation",
    fen: "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/4PN2/PP1N1PPP/R1BQKB1R b KQkq - 1 5",
    moves: "d4 d5 c4 e6 Nf3 Nf6 e3 c6 Nbd2",
    eco: "D30",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Grunfeld Reversed-Symmetrical Variation-Torre/Tartakower Attack",
    fen: "rnbqkb1r/ppp1pppp/5n2/3p2B1/3P4/5N2/PPP1PPPP/RN1QKB1R b KQkq - 3 3",
    moves: "d4 d5 Nf3 Nf6 Bg5",
    eco: "D03",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Trompowsky Attack-Classical Defence-Big Centre Variation",
    fen: "rnbqkb1r/pppp1ppp/4pn2/6B1/3PP3/8/PPP2PPP/RN1QKBNR b KQkq - 0 3",
    moves: "d4 Nf6 Bg5 e6 e4",
    eco: "A45",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Indian Defence-Trompowsky Attack-Edge Variation",
    fen: "rnbqkb1r/pppppppp/8/8/3Pn2B/8/PPP1PPPP/RN1QKBNR b KQkq - 4 3",
    moves: "d4 Nf6 Bg5 Ne4 Bh4",
    eco: "A45",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Indian Defence-Trompowsky Attack-Raptor Variation",
    fen: "rnbqkb1r/pppppppp/8/6B1/3Pn2P/8/PPP1PPP1/RN1QKBNR b KQkq - 0 3",
    moves: "d4 Nf6 Bg5 Ne4 h4",
    eco: "A45",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-East Indian Defence-Catalan Opening-Catalan Gambit",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/5NP1/PP2PP1P/RNBQKB1R b KQkq - 1 4",
    moves: "d4 Nf6 c4 e6 g3 d5 Nf3",
    eco: "E00/E01",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Grünfeld Defence-Spike/Gibbon Gambit",
    fen: "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP2P1/2N5/PP2PP1P/R1BQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 c4 g6 Nc3 d5 g4",
    eco: "D80",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Grünfeld Defence-Zaitsev Gambit",
    fen: "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP3P/2N5/PP2PPP1/R1BQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 c4 g6 Nc3 d5 h4",
    eco: "D80",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Torre Attack-Pseudo-Queen's Indian Defence-Torre Variation",
    fen: "rnbqkb1r/p1pppppp/1p3n2/6B1/3P4/5N2/PPP1PPPP/RN1QKB1R b KQkq - 1 3",
    moves: "d4 Nf6 Nf3 b6 Bg5",
    eco: "A47",
    difficulty: "Medium"
  },
  {
    name: "Van't Kruijs Opening-Keoni-Hiva Gambit Delayed",
    fen: "rnbqkb1r/ppp2ppp/5n2/3p4/5p2/P1N1PN2/1PPP2PP/R1BQKB1R b KQkq - 1 5",
    moves: "e3 d5 Nc3 Nf6 a3 e5 f4 exf4 Nf3",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-Old Sicilian Defence-Nimzowitsch-Rossolimo/Nyezhmetdinov-Rossolimo Attack",
    fen: "r1bqkbnr/pp1ppppp/2n5/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
    moves: "e4 c5 Nf3 Nc6 Bb5",
    eco: "B30",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Falkbeer Countergambit Accepted-Charousek Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/3P4/4pP2/3P4/PPP3PP/RNBQKBNR b KQkq - 0 4",
    moves: "e4 e5 f4 d5 exd5 e4 d3",
    eco: "C31",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Vienna Game-Anderssen Defence-Giraffe Attack",
    fen: "rnbqk1nr/pppp1ppp/8/2b1p3/4P1Q1/2N5/PPPP1PPP/R1B1KBNR b KQkq - 3 3",
    moves: "e4 e5 Nc3 Bc5 Qg4",
    eco: "C25",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Advance Variation-Frenkel Gambit",
    fen: "rnbqkbnr/pp3ppp/4p3/2ppP3/1P1P4/8/P1P2PPP/RNBQKBNR b KQkq - 0 4",
    moves: "e4 e6 d4 d5 e5 c5 b4",
    eco: "C02",
    difficulty: "Medium"
  },
  {
    name: "Benko Opening-Reversed Alekhine Defence-Reversed Brooklyn Defence-Brooklyn Benko Gambit",
    fen: "rnbqkb1r/pppp1ppp/5n2/8/1P2p3/6P1/P1PPPP1P/RNBQKBNR b KQkq - 0 4",
    moves: "g3 e5 Nf3 e4 Ng1 Nf6 b4",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Dunst Opening-Reversed Nimzowitsch Variation-Reversed Scandinavian Variation",
    fen: "r1bqkbnr/pppp1ppp/2n5/8/Q7/2N5/PPP1PPPP/R1B1KBNR b KQkq - 2 4",
    moves: "Nc3 e5 d4 exd4 Qxd4 Nc6 Qa4",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Caro-Kann Defensive System-New York Defensive System",
    fen: "rn1qkb1r/pp2pppp/2p2n2/3p1b2/2P5/1P3N2/PB1PPPPP/RN1QKB1R w KQkq - 3 5",
    moves: "c4 c6 Nf3 d5 b3 Nf6 Bb2 Bf5",
    eco: "A12",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Caro-Kann Defensive System-London Defensive System",
    fen: "rn1qkb1r/pp2pppp/2p2n2/3p1b2/2P5/1P3NP1/P2PPP1P/RNBQKB1R w KQkq - 1 5",
    moves: "c4 c6 Nf3 d5 b3 Nf6 g3 Bf5",
    eco: "A12",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Caro-Kann Defensive System-Torre Defensive System",
    fen: "rn1qkb1r/pp2pppp/2p2n2/3p4/2P3b1/1P3NP1/P2PPP1P/RNBQKB1R w KQkq - 1 5",
    moves: "c4 c6 Nf3 d5 b3 Nf6 g3 Bg4",
    eco: "A12",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Bremen Variation-Reversed Closed Sicilian-Amsterdam Variation",
    fen: "r1bqkb1r/ppp2ppp/2np1n2/4p3/2P5/1PN1P3/P2P1PPP/R1BQKBNR w KQkq - 0 5",
    moves: "c4 e5 Nc3 Nc6 e3 Nf6 b3 d6",
    eco: "A25",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Reversed Closed Sicilian-4 Knights System #2-Bradley Beach Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/8/2PPp3/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
    moves: "c4 e5 Nc3 Nc6 Nf3 Nf6 d4 e4",
    eco: "A28",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Old Benoni Defence-Zilbermints-Benoni Gambit-Tamarkin Countergambit",
    fen: "rnbqkbnr/pp1p1ppp/8/4p3/1P1p4/5N2/P1P1PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 c5 Nf3 cxd4 b4 e5",
    eco: "A56",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Austrian Defence-Gusev Countergambit",
    fen: "rnbqkb1r/pp2pppp/5n2/2pP4/3P4/8/PP2PPPP/RNBQKBNR w KQkq - 1 4",
    moves: "d4 d5 c4 c5 cxd5 Nf6",
    eco: "D02",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Saduleto Variation-Greco Variation",
    fen: "rnbqkbnr/p1p1pppp/8/1p6/2pPP3/8/PP3PPP/RNBQKBNR w KQkq - 0 4",
    moves: "d4 d5 c4 dxc4 e4 b5",
    eco: "D20",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Saduleto Variation-Rubinstein Defence",
    fen: "rnbqkbnr/pp2pppp/8/2p5/2pPP3/8/PP3PPP/RNBQKBNR w KQkq - 0 4",
    moves: "d4 d5 c4 dxc4 e4 c5",
    eco: "D20",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Saduleto Variation-McDonnel Defence",
    fen: "rnbqkbnr/ppp2ppp/8/4p3/2pPP3/8/PP3PPP/RNBQKBNR w KQkq - 0 4",
    moves: "d4 d5 c4 dxc4 e4 e5",
    eco: "D20",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Saduleto Variation-Schwartz Defence",
    fen: "rnbqkbnr/ppp1p1pp/8/5p2/2pPP3/8/PP3PPP/RNBQKBNR w KQkq - 0 4",
    moves: "d4 d5 c4 dxc4 e4 f5",
    eco: "D20",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Queen's Knight Variation-Janowski Variation",
    fen: "rnbqkbnr/1pp2ppp/p3p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4",
    moves: "d4 d5 c4 e6 Nc3 a6",
    eco: "D31",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Queen's Knight Variation-Alapin Variation",
    fen: "rnbqkbnr/p1p2ppp/1p2p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4",
    moves: "d4 d5 c4 e6 Nc3 b6",
    eco: "D31",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Queen's Knight Variation-Tarrasch Defence",
    fen: "rnbqkbnr/pp3ppp/4p3/2pp4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4",
    moves: "d4 d5 c4 e6 Nc3 c5",
    eco: "D32",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Queen's Knight Variation-Accelerated Semi-Slav/Old Semi-Slav Defence",
    fen: "rnbqkbnr/pp3ppp/2p1p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 4",
    moves: "d4 d5 c4 e6 Nc3 c6",
    eco: "D31",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Queen's Knight Variation-Normal Defence",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
    moves: "d4 d5 c4 e6 Nc3 Nf6",
    eco: "D35",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Tarrasch Defence-Pseudo-Tarrasch Variation",
    fen: "rnbqkbnr/pp3ppp/4p3/2pp4/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 d5 c4 e6 Nf3 c5",
    eco: "D30",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Chigorin Defence-Main Line",
    fen: "r2qkbnr/ppp1pppp/2n5/3p4/2PP2b1/5N2/PP2PPPP/RNBQKB1R w KQkq - 3 4",
    moves: "d4 d5 c4 Nc6 Nf3 Bg4",
    eco: "D07",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Marshall Defence-Tan Gambit",
    fen: "rnbqkb1r/pp2pppp/2p2n2/3P4/3P4/8/PP2PPPP/RNBQKBNR w KQkq - 0 4",
    moves: "d4 d5 c4 Nf6 cxd5 c6",
    eco: "D06",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Blackmar-Diemer Gambit-Lemberg Countergambit",
    fen: "rnbqkb1r/ppp2ppp/5n2/3pp3/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "d4 d5 Nc3 Nf6 e4 e5",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Rat Defence-Old Indian Defence-English Rat Defence-Lisbon Gambit",
    fen: "r1bqkbnr/ppp2ppp/2np4/4P3/2P5/8/PP2PPPP/RNBQKBNR w KQkq - 1 4",
    moves: "d4 d6 c4 e5 dxe5 Nc6",
    eco: "A41",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Horwitz Defence-Keres Defence-Poli Variation",
    fen: "rn1qkbnr/pbpp2pp/1p2p3/5p2/2PPP3/5P2/PP4PP/RNBQKBNR w KQkq - 0 5",
    moves: "d4 e6 c4 b6 e4 Bb7 f3 f5",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Indian Defence-Normal Variation-Benko Gambit",
    fen: "rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq - 0 4",
    moves: "d4 Nf6 c4 c5 d5 b5",
    eco: "A57",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Slav Indian Defence-Kudischewitsch Gambit",
    fen: "rnbqkb1r/p2ppppp/2p2n2/1p6/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 Nf6 c4 c6 Nf3 b5",
    eco: "A50",
    difficulty: "Medium"
  },
  {
    name: "East Indian Defence-Anti-Nimzo-Indian Variation-Blumenfeld Variation-Blumenfeld Countergambit",
    fen: "rnbqkb1r/p2p1ppp/4pn2/1ppP4/2P5/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 5",
    moves: "d4 Nf6 c4 e6 Nf3 c5 d5 b5",
    eco: "E10",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Alekhine Variation-Leko Gambit",
    fen: "rnbqkb1r/pppp1p1p/5np1/4p3/2PP4/5P2/PP2P1PP/RNBQKBNR w KQkq - 0 4",
    moves: "d4 Nf6 c4 g6 f3 e5",
    eco: "D70",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Grünfeld Defence-Schlechter Variation",
    fen: "rnbqkb1r/pp2pp1p/2p2np1/3p4/2PP4/2N1P3/PP3PPP/R1BQKBNR w KQkq - 0 5",
    moves: "d4 Nf6 c4 g6 Nc3 d5 e3 c6",
    eco: "D80",
    difficulty: "Medium"
  },
  {
    name: "King's Indian Defence-Grünfeld Defence-3 Knights Variation-Schlechter Variation",
    fen: "rnbqkb1r/pp2pp1p/2p2np1/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 c6",
    eco: "D90",
    difficulty: "Medium"
  },
  {
    name: "King's Indian Defence-King's Knight Variation-Non- or Delayed Fianchetto-Schlechter Variation",
    fen: "rnbqkb1r/pp2pp1p/2p2np1/3p4/2PP4/4PN2/PP3PPP/RNBQKB1R w KQkq - 0 5",
    moves: "d4 Nf6 c4 g6 Nf3 d5 e3 c6",
    eco: "D70/E60",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Pseudo-Queen's Indian Defence-Marienbad System",
    fen: "rn1qkb1r/pb1ppppp/1p3n2/2p5/3P4/5NP1/PPP1PPBP/RNBQK2R w KQkq - 0 5",
    moves: "d4 Nf6 Nf3 b6 g3 Bb7 Bg2 c5",
    eco: "A47",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Pseudo-King's Indian Defence-Colle System-Gruenfeld Formation",
    fen: "rnbqk2r/ppp1ppbp/5np1/3p4/3P4/3BPN2/PPP2PPP/RNBQK2R w KQkq - 0 5",
    moves: "d4 Nf6 Nf3 g6 e3 Bg7 Bd3 d5",
    eco: "A48",
    difficulty: "Medium"
  },
  {
    name: "St. George Defence-New St. George Variation-3 Pawn Attack-Sanky-Georg Gambit",
    fen: "rnbqkbnr/2pp1ppp/p3p3/1p6/2PPP3/8/PP3PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 a6 d4 e6 c4 b5",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Owen Defence-Hekili-Loa Gambit",
    fen: "r1bqkbnr/p2ppppp/1pn5/2P5/4P3/8/PPP2PPP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 b6 d4 c5 dxc5 Nc6",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Staunton-Cochrane Variation-Gloria Variation",
    fen: "r1bqkbnr/pp2ppp1/2np4/2p4p/2P1P3/2N3P1/PP1P1P1P/R1BQKBNR w KQkq - 0 5",
    moves: "e4 c5 c4 d6 Nc3 Nc6 g3 h5",
    eco: "B20",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit Declined-Push Variation",
    fen: "rnbqkbnr/pp1ppppp/8/8/4P3/2Pp4/PP3PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 c5 d4 cxd4 c3 d3",
    eco: "B21",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit Accepted",
    fen: "rnbqkbnr/pp1ppppp/8/8/4P3/2p5/PP3PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 c5 d4 cxd4 c3 dxc3",
    eco: "B21",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit Declined-Alapin Formation",
    fen: "rnbqkb1r/pp1ppppp/5n2/8/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 c5 d4 cxd4 c3 Nf6",
    eco: "B21",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit Declined-Wing Formation",
    fen: "rnb1kbnr/pp1ppppp/8/q7/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 c5 d4 cxd4 c3 Qa5",
    eco: "B21",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Closed Variation-Marshall Gambit",
    fen: "rnbqkbnr/pp3ppp/4p3/2pp4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 c5 Nc3 e6 d4 d5",
    eco: "B23",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-Kopec Variation-Kotov Gambit",
    fen: "rnbqkbnr/p3pppp/3p4/1pp5/4P3/5NP1/PPPP1P1P/RNBQKB1R w KQkq - 0 4",
    moves: "e4 c5 Nf3 d6 g3 b5",
    eco: "B50",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Countergambit-Blackburne-Kloosterboer Gambit-Kloosterboer Gambit",
    fen: "rnbqkbnr/pp3ppp/2P5/4p3/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 d5 exd5 c6 dxc6 e5",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "Pirc Defence-Lion Defence-Anti-Philidor Variation-Lion's Cave/Jansen Variation",
    fen: "r1bqkb1r/pppn1ppp/3p1n2/4p3/3PPP2/2N5/PPP3PP/R1BQKBNR w KQkq - 0 5",
    moves: "e4 d6 d4 Nf6 Nc3 Nbd7 f4 e5",
    eco: "B07",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Berlin Defence-Horwitz Gambit",
    fen: "rnbqkb1r/p1pp1ppp/5n2/1p2p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR w KQkq - 0 4",
    moves: "e4 e5 Bc4 Nf6 Nc3 b5",
    eco: "C24",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Danish Gambit-Svenonius Defence",
    fen: "rnbqkb1r/ppppnppp/8/8/3pP3/2P5/PP3PPP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 e5 d4 exd4 c3 Ne7",
    eco: "C21",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Falkbeer Countergambit Accepted-Miles Gambit",
    fen: "rnbqk1nr/ppp2ppp/8/2bPp3/5P2/8/PPPP2PP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 e5 f4 d5 exd5 Bc5",
    eco: "C31",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Falkbeer Countergambit Accepted-Modern Transfer",
    fen: "rnbqkbnr/ppp2ppp/8/3P4/5p2/8/PPPP2PP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 e5 f4 d5 exd5 exf4",
    eco: "C32",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Lopez-Gianutio Countergambit",
    fen: "rnbqkbnr/pppp2pp/8/5p2/2B1Pp2/8/PPPP2PP/RNBQK1NR w KQkq - 0 4",
    moves: "e4 e5 f4 exf4 Bc4 f5",
    eco: "C33",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Classical Defence",
    fen: "rnb1kbnr/pppp1ppp/8/8/2B1Pp1q/8/PPPP2PP/RNBQK1NR w KQkq - 2 4",
    moves: "e4 e5 f4 exf4 Bc4 Qh4+",
    eco: "C33",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Blachly Gambit",
    fen: "r1bqkbnr/pppp1p1p/2n5/6p1/2B1Pp2/5N2/PPPP2PP/RNBQK2R w KQkq - 2 5",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 Nc6",
    eco: "C37",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit-Panteldakis Countergambit-Schiller's Defence",
    fen: "rnbqk1nr/pppp2pp/8/2b1pP2/5P2/8/PPPP2PP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 e5 f4 f5 exf5 Bc5",
    eco: "C30",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Soller-Zilbermints Gambit",
    fen: "r1bqkbnr/pppp2pp/2n2p2/4P3/4P3/8/PPPP2PP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 e5 f4 f6 fxe5 Nc6",
    eco: "C30",
    difficulty: "Medium"
  },
  {
    name: "Vienna Game-Falkbeer Variation-Vienna Gambit-Main Line",
    fen: "rnbqkb1r/ppp2ppp/5n2/3pp3/4PP2/2N5/PPPP2PP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 e5 Nc3 Nf6 f4 d5",
    eco: "C29",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Philidor's Defence-Philidor Gambit",
    fen: "rn1qkbnr/pppb1ppp/3p4/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 e5 Nf3 d6 d4 Bd7",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Hanham Variation-Lion Variation",
    fen: "r1bqkb1r/pppn1ppp/3p1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 3 5",
    moves: "e4 e5 Nf3 d6 d4 Nd7 Nc3 Ngf6",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Jaenisch Variation-Improved Hanham Variation",
    fen: "r1bqkb1r/pppn1ppp/3p1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 3 5",
    moves: "e4 e5 Nf3 d6 d4 Nf6 Nc3 Nbd7",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Latvian Gambit-Fraser & Moller's Defence",
    fen: "r1bqkbnr/pppp2pp/2n5/4Np2/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 e5 Nf3 f5 Nxe5 Nc6",
    eco: "C40",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ruy Lopez-Rotary-Albany Gambit",
    fen: "r1bqkbnr/p1pp1ppp/1pn5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 b6",
    eco: "C60",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Berlin Defence-Double Ruy Lopez",
    fen: "r1bqk2r/pppp1ppp/2n2n2/1B2p3/1b2P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 Nc3 Bb4",
    eco: "C65",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Italian Game-Rousseau Gambit",
    fen: "r1bqkbnr/pppp2pp/2n5/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bc4 f5",
    eco: "C50",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Italian Game-Blackburne Shilling/Kostic Gambit",
    fen: "r1bqkbnr/pppp1ppp/8/4p3/2BnP3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nd4",
    eco: "C50",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ponziani Opening-Jaenisch Counterattack-Pirc Variation",
    fen: "r1bqkb1r/ppp2ppp/2np1n2/4p3/3PP3/2P2N2/PP3PPP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 c3 Nf6 d4 d6",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-4 Knights Game-Gunsberg Variation-Main Line",
    fen: "r1bqkb1r/ppp2ppp/2n2n2/3pp3/4P3/P1N2N2/1PPP1PPP/R1BQKB1R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 a3 d5",
    eco: "C46",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Petrov's Defence-Stafford Gambit",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 e5 Nf3 Nf6 Nxe5 Nc6",
    eco: "C42",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Tarrasch Variation-Guimard Defence-Main/Byrne Line",
    fen: "r1bqkb1r/ppp2ppp/2n1pn2/3p4/3PP3/5N2/PPPN1PPP/R1BQKB1R w KQkq - 4 5",
    moves: "e4 e6 d4 d5 Nd2 Nc6 Ngf3 Nf6",
    eco: "C04",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Bishop Attack-Bücker Gambit",
    fen: "rnbqk1nr/p1ppppbp/6p1/1p6/2BPP3/8/PPP2PPP/RNBQK1NR w KQkq - 0 4",
    moves: "e4 g6 d4 Bg7 Bc4 b5",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-3 Pawns Attack-Double Fianchetto",
    fen: "rn1qk1nr/pbppppbp/1p4p1/8/2PPPP2/8/PP4PP/RNBQKBNR w KQkq - 1 5",
    moves: "e4 g6 d4 Bg7 f4 b6 c4 Bb7",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Robatsch Defence-Standard Line-Lizard Defence-Mittenberger Gambit",
    fen: "rnbqk1nr/ppp1ppbp/6p1/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 g6 d4 Bg7 Nc3 d5",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch Defence-Scandinavian Variation-Bogoljubov Variation-Brandics Gambit",
    fen: "r1bqkbnr/1pp1pppp/p1n5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 Nc6 d4 d5 Nc3 a6",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch Defence-Scandinavian Variation-Bogoljubov Variation-Heinola-Deppe Gambit",
    fen: "r1bqkbnr/ppp2ppp/2n5/3pp3/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 Nc6 d4 d5 Nc3 e5",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch Defence-Scandinavian Variation-Bogoljubov Variation-Erben Gambit",
    fen: "r1bqkbnr/ppp1pp1p/2n3p1/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 Nc6 d4 d5 Nc3 g6",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Alekhine Defence-Normal Variation-O'Sullivan Gambit",
    fen: "rnbqkb1r/p1pppppp/8/1p1nP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 Nf6 e5 Nd5 d4 b5",
    eco: "B03",
    difficulty: "Medium"
  },
  {
    name: "Alekhine Defence-Normal Variation-Modern Variation-Fianchetto/Alburt Variation",
    fen: "rnbqkb1r/ppp1pp1p/3p2p1/3nP3/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 Nf6 e5 Nd5 d4 d6 Nf3 g6",
    eco: "B04",
    difficulty: "Medium"
  },
  {
    name: "Alekhine Defence-Normal Variation-Modern Variation-Schmid Variation",
    fen: "rnbqkb1r/ppp1pppp/1n1p4/4P3/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 2 5",
    moves: "e4 Nf6 e5 Nd5 d4 d6 Nf3 Nb6",
    eco: "B04",
    difficulty: "Medium"
  },
  {
    name: "Alekhine Defence-Normal Variation-Modern Variation-Larsen-Haakert Variation",
    fen: "r1bqkb1r/ppp1pppp/2np4/3nP3/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 2 5",
    moves: "e4 Nf6 e5 Nd5 d4 d6 Nf3 Nc6",
    eco: "B04",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Alekhine Defence-Brooklyn Defence-Zaire Variation",
    fen: "rnbqkbnr/pppppppp/8/3PP3/8/8/PPP2PPP/RNBQKBNR w KQkq - 1 5",
    moves: "e4 Nf6 e5 Ng8 d4 Nc6 d5 Nb8",
    eco: "B02",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Advance Variation-Polonaise Variation-Michel Gambit",
    fen: "rnbqkbnr/pp2pppp/8/2p5/1PPp4/5N2/P2PPPPP/RNBQKB1R w KQkq - 0 4",
    moves: "Nf3 d5 c4 d4 b4 c5",
    eco: "A09",
    difficulty: "Medium"
  },
  {
    name: "Anderssen's Opening-Shy Attack",
    fen: "r1bq1rk1/ppp2ppp/2nb1n2/3pp3/8/P2PP1PP/1PPN1PB1/R1BQK1NR b KQ - 0 7",
    moves: "a3 e5 g3 d5 Bg2 Nf6 d3 Nc6 Nd2 Bd6 e3 O-O h3",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Hedgehog System-Nimzo-English Opening-Zviagintsev-Krasenkov Attack",
    fen: "rnbqk2r/pppp1ppp/4pn2/8/1bP3P1/2N2N2/PP1PPP1P/R1BQKB1R b KQkq - 0 4",
    moves: "c4 Nf6 Nc3 e6 Nf3 Bb4 g4",
    eco: "A18",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Anglo-Indian Defence-Queen's Knight Variation-Anti-Anti-Grünfeld Variation",
    fen: "rnbqk2r/ppppppbp/5np1/8/2P1P3/2N2N2/PP1P1PPP/R1BQKB1R b KQkq - 0 4",
    moves: "c4 Nf6 Nc3 g6 Nf3 Bg7 e4",
    eco: "A17",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Keres Defence-Queen Attack",
    fen: "rn1qkbnr/ppp1pppp/8/3p1b2/2PP4/1Q6/PP2PPPP/RNB1KBNR b KQkq - 2 3",
    moves: "d4 d5 c4 Bf5 Qb3",
    eco: "D06",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Diemer-Rosenberg Attack",
    fen: "rnbqkbnr/ppp1pppp/8/8/3Pp3/4B3/PPP2PPP/RN1QKBNR b KQkq - 1 3",
    moves: "d4 d5 e4 dxe4 Be3",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Blackmar Gambit #1",
    fen: "rnbqkbnr/ppp1pppp/8/8/3P4/5N2/PPP3PP/RNBQKB1R b KQkq - 0 4",
    moves: "d4 d5 e4 dxe4 f3 exf3 Nxf3",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Richter-Veresov Attack-Classical Defence",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3p2B1/3P4/2N2N2/PPP1PPPP/R2QKB1R b KQkq - 1 4",
    moves: "d4 d5 Nc3 Nf6 Bg5 e6 Nf3",
    eco: "D01",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Richter-Veresov Attack-2 Knights System",
    fen: "r1bqkb1r/pppnpppp/5n2/3p2B1/3P4/2N2N2/PPP1PPPP/R2QKB1R b KQkq - 5 4",
    moves: "d4 d5 Nc3 Nf6 Bg5 Nbd7 Nf3",
    eco: "D01",
    difficulty: "Medium"
  },
  {
    name: "Grunfeld Reversed-Symmetrical Variation-Colle System-Zukertort Variation",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3p4/3P4/3BPN2/PPP2PPP/RNBQK2R b KQkq - 1 4",
    moves: "d4 d5 Nf3 Nf6 e3 e6 Bd3",
    eco: "D05",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Charlick Gambit Complex-Hartlaub-Charlick Gambit-Hartlaub Variation",
    fen: "rnbqkbnr/ppp2ppp/3p4/4P3/5B2/8/PPP1PPPP/RN1QKBNR b KQkq - 1 3",
    moves: "d4 e5 dxe5 d6 Bf4",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Horwitz Defence-Franco-Indian Defence-Transpositional Variation",
    fen: "rnbqk1nr/pppp1ppp/4p3/8/1bPP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 2 3",
    moves: "d4 e6 c4 Bb4+ Nc3",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "Dutch Defence-Normal Variation-Fianchetto Variation-Classical Variation",
    fen: "rnbqkb1r/pppp2pp/4pn2/5p2/2PP4/6P1/PP2PPBP/RNBQK1NR b KQkq - 1 4",
    moves: "d4 f5 c4 Nf6 g3 e6 Bg2",
    eco: "A90",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Staunton Gambit Accepted-American Attack",
    fen: "rnbqkbnr/ppppp1pp/8/8/3Pp3/8/PPPN1PPP/R1BQKBNR b KQkq - 1 3",
    moves: "d4 f5 e4 fxe4 Nd2",
    eco: "A82",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Raphael Variation-Tate Variation",
    fen: "rnbqkbnr/ppp1p1pp/8/3p4/3PP1p1/2N5/PPP2P1P/R1BQKBNR b KQkq - 0 4",
    moves: "d4 f5 Nc3 d5 g4 fxg4 e4",
    eco: "A80",
    difficulty: "Medium"
  },
  {
    name: "Modern Defence-Pterodactyl Defence-Queen Pterodactyl Variation-Quiet Variation",
    fen: "rnbqk1nr/pp1pppbp/6p1/2p5/2PP4/2N1P3/PP3PPP/R1BQKBNR b KQkq - 0 4",
    moves: "d4 g6 c4 Bg7 Nc3 c5 e3",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Modern Defence-Robatsch Variation-Averbakh System",
    fen: "rnbqk1nr/ppp1ppbp/3p2p1/8/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 4",
    moves: "d4 g6 c4 Bg7 Nc3 d6 e4",
    eco: "A42",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Old Indian Defence-Janowski Variation-Main Line",
    fen: "rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N2P2/PP2P1PP/R1BQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 c4 d6 Nc3 Bf5 f3",
    eco: "A53",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Old Indian Defence-Janowski Variation-Fianchetto Variation",
    fen: "rn1qkb1r/ppp1pppp/3p1n2/5b2/2PP4/2N3P1/PP2PP1P/R1BQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 c4 d6 Nc3 Bf5 g3",
    eco: "A53",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-East Indian Defence-Catalan Opening-Closed Variation",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR b KQkq - 1 4",
    moves: "d4 Nf6 c4 e6 g3 d5 Bg2",
    eco: "E01",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Sämisch Variation",
    fen: "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/P1N5/1P2PPPP/R1BQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 a3",
    eco: "E20",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Leningrad Variation",
    fen: "rnbqk2r/pppp1ppp/4pn2/6B1/1bPP4/2N5/PP2PPPP/R2QKBNR b KQkq - 3 4",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Bg5",
    eco: "E30",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Kmoch Variation",
    fen: "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N2P2/PP2P1PP/R1BQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 f3",
    eco: "E20",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-3 Knights Variation",
    fen: "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 3 4",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Nf3",
    eco: "E21",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Grünfeld Defence-Brinckmann/Sämisch Attack",
    fen: "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP1B2/2N5/PP2PPPP/R2QKBNR b KQkq - 1 4",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Bf4",
    eco: "D82",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Grünfeld Defence-Stockholm Variation",
    fen: "rnbqkb1r/ppp1pp1p/5np1/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR b KQkq - 1 4",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Bg5",
    eco: "D80",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Grünfeld Defence-Semi-Russian/Accelerated Variation",
    fen: "rnbqkb1r/ppp1pp1p/5np1/3p4/2PP4/1QN5/PP2PPPP/R1B1KBNR b KQkq - 1 4",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Qb3",
    eco: "D81",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-King's Knight Variation-Santassiere Variation",
    fen: "rnbqk2r/ppppppbp/5np1/8/1PPP4/5N2/P3PPPP/RNBQKB1R b KQkq - 0 4",
    moves: "d4 Nf6 c4 g6 Nf3 Bg7 b4",
    eco: "E60",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Wing Gambit-Abrahams Variation",
    fen: "rnbqkbnr/pp1ppppp/8/8/1p2P3/8/PBPP1PPP/RN1QKBNR b KQkq - 1 3",
    moves: "e4 c5 b4 cxb4 Bb2",
    eco: "B20",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-O'Kelly Variation-Normal System-Smith-Morra Line",
    fen: "rnbqkbnr/1p1ppppp/p7/8/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 c5 Nf3 a6 d4 cxd4 c3",
    eco: "B28",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Old Sicilian Defence-Open Variation-Morra Variation",
    fen: "r1bqkbnr/pp1ppppp/2n5/8/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 c3",
    eco: "B32",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Advance Variation-Prins Attack",
    fen: "rn1qkbnr/pp2pppp/2p5/3pPb2/1P1P4/8/P1P2PPP/RNBQKBNR b KQkq - 0 4",
    moves: "e4 c6 d4 d5 e5 Bf5 b4",
    eco: "B12",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Advance Variation-Bayonet Attack",
    fen: "rn1qkbnr/pp2pppp/2p5/3pPb2/3P2P1/8/PPP2P1P/RNBQKBNR b KQkq - 0 4",
    moves: "e4 c6 d4 d5 e5 Bf5 g4",
    eco: "B12",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Advance Variation-Bronstein Variation",
    fen: "rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/8/PPP1NPPP/RNBQKB1R b KQkq - 2 4",
    moves: "e4 c6 d4 d5 e5 Bf5 Ne2",
    eco: "B12",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Countergambit-Modern Variation-Nimzovich Variation",
    fen: "r1bqkb1r/ppp1pppp/2n2n2/3P4/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 2 4",
    moves: "e4 d5 exd5 Nf6 d4 Nc6 Nc3",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Pirc Defence-150 Attack",
    fen: "rnbqkb1r/pp2pp1p/2pp1np1/8/3PP3/2N1B3/PPPQ1PPP/R3KBNR b KQkq - 1 5",
    moves: "e4 d6 d4 Nf6 Nc3 g6 Be3 c6 Qd2",
    eco: "B07",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Berlin Defence-Spielmann Attack",
    fen: "rnbqk2r/pppp1ppp/5n2/2b1p3/2B1P3/2NP4/PPP2PPP/R1BQK1NR b KQkq - 2 4",
    moves: "e4 e5 Bc4 Nf6 d3 Bc5 Nc3",
    eco: "C26",
    difficulty: "Medium"
  },
  {
    name: "Vienna Game-Falkbeer Variation-Stanley Variation-Spielmann Variation",
    fen: "rnbqk2r/pppp1ppp/5n2/2b1p3/2B1P3/2NP4/PPP2PPP/R1BQK1NR b KQkq - 0 4",
    moves: "e4 e5 Nc3 Nf6 Bc4 Bc5 d3",
    eco: "C26",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Philidor's Defence-Steinitz Variation",
    fen: "rn1qkbnr/ppp2ppp/3pb3/4p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 0 4",
    moves: "e4 e5 Nf3 d6 Bc4 Be6 c3",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Philidor's Defence-Jaenisch Variation-Klein Variation",
    fen: "rnbqkb1r/ppp2ppp/3p1n2/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R b KQkq - 2 4",
    moves: "e4 e5 Nf3 d6 d4 Nf6 Bc4",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Jaenisch Variation-Nimzowitsch Variation",
    fen: "rnbqkb1r/ppp2ppp/3p1n2/4P3/4P3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 Nf3 d6 d4 Nf6 dxe5",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Latvian Countergambit Accepted-Main Line",
    fen: "rnb1kbnr/pppp2pp/5q2/4Np2/3PP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 Nf3 f5 Nxe5 Qf6 d4",
    eco: "C40",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Morphy Defence-Columbus Variation",
    fen: "r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4",
    eco: "C70",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Schliemann Defence-Schönemann Attack",
    fen: "r1bqkbnr/pppp2pp/2n5/1B2pp2/3PP3/5N2/PPP2PPP/RNBQK2R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 f5 d4",
    eco: "C63",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Schliemann Defence-Berger/Dyckhoff Variation",
    fen: "r1bqkbnr/pppp2pp/2n5/1B2pp2/4P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 1 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 f5 Nc3",
    eco: "C63",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Italian Game-Giuoco Piano-Classical Variation",
    fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3",
    eco: "C53",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Italian Game-2 Knights Defence-Open Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4",
    eco: "C55",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Italian Game-2 Knights Defence-Italian Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 5 4",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3",
    eco: "C55",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Italian Game-2 Knights Defence-Knight Attack",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p1N1/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 5 4",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5",
    eco: "C57",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ponziani Opening-Classical Variation",
    fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/1P2P3/2P2N2/P2P1PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 c3 Bc5 b4",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ponziani Opening-Spanish Variation",
    fen: "r1bqkbnr/ppp2ppp/2n5/1B1pp3/4P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 1 4",
    moves: "e4 e5 Nf3 Nc6 c3 d5 Bb5",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ponziani Opening-Jaenisch Counterattack-Potter Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/Q3P3/2P2N2/PP1P1PPP/RNB1KB1R b KQkq - 2 4",
    moves: "e4 e5 Nf3 Nc6 c3 Nf6 Qa4",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ponziani Opening-Jaenisch Counterattack-Wayte Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2P2N2/PPQP1PPP/RNB1KB1R b KQkq - 2 4",
    moves: "e4 e5 Nf3 Nc6 c3 Nf6 Qc2",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-4 Knights Game-Spanish Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/1B2p3/4P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 5 4",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5",
    eco: "C48",
    difficulty: "Medium"
  },
  {
    name: "4 Knights Game-Spanish Variation-Rubinstein Countergambit Accepted/Exchange Variation",
    fen: "r1bqkb1r/pppp1ppp/5n2/1B2p3/3NP3/2N5/PPPP1PPP/R1BQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Nxd4",
    eco: "C48",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-4 Knights Game-Italian Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 5 4",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bc4",
    eco: "C46",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-4 Knights Game-Van Der Wiel Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/4P3/2N2N2/PPPPBPPP/R1BQK2R b KQkq - 5 4",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Be2",
    eco: "C47",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Petrov's Defence-Paulsen Attack",
    fen: "rnbqkb1r/ppp2ppp/3p1n2/8/2N1P3/8/PPPP1PPP/RNBQKB1R b KQkq - 1 4",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nc4",
    eco: "C42",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Petrov's Defence-Karklins-Martinovsky Variation",
    fen: "rnbqkb1r/ppp2ppp/3p1n2/8/4P3/3N4/PPPP1PPP/RNBQKB1R b KQkq - 1 4",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nd3",
    eco: "C42",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Advance Variation-Nimzowitsch Attack",
    fen: "rnbqkbnr/pp3ppp/4p3/2ppP3/3P2Q1/8/PPP2PPP/RNB1KBNR b KQkq - 1 4",
    moves: "e4 e6 d4 d5 e5 c5 Qg4",
    eco: "C02",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Exchange Variation-Monte Carlo Variation",
    fen: "rnbqkbnr/ppp2ppp/8/3p4/2PP4/8/PP3PPP/RNBQKBNR b KQkq - 0 4",
    moves: "e4 e6 d4 d5 exd5 exd5 c4",
    eco: "C01",
    difficulty: "Medium"
  },
  {
    name: "Robatsch Defence-Standard Line-Modern Pterodactyl Variation-Eastern, Anhanguera Variation",
    fen: "rnbqk1nr/pp1pppbp/6p1/2p5/3PP3/2N1B3/PPP2PPP/R2QKBNR b KQkq - 1 4",
    moves: "e4 g6 d4 Bg7 Nc3 c5 Be3",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Robatsch Defence-Standard Line-Modern Pterodactyl Variation-Eastern, Benoni Variation",
    fen: "rnbqk1nr/pp1pppbp/6p1/2pP4/4P3/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 4",
    moves: "e4 g6 d4 Bg7 Nc3 c5 d5",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Robatsch Defence-Standard Line-Standard Defence-Pseudo-Austrian Attack",
    fen: "rnbqk1nr/ppp1ppbp/3p2p1/8/3PPP2/2N5/PPP3PP/R1BQKBNR b KQkq - 0 4",
    moves: "e4 g6 d4 Bg7 Nc3 d6 f4",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Robatsch Defence-Standard Line-Standard Defence-2 Knights Variation",
    fen: "rnbqk1nr/ppp1ppbp/3p2p1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 1 4",
    moves: "e4 g6 d4 Bg7 Nc3 d6 Nf3",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Small Centre Variation-Geller's System",
    fen: "rnbqk1nr/ppp1ppbp/3p2p1/8/3PP3/2P2N2/PP3PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 g6 d4 Bg7 Nf3 d6 c3",
    eco: "B07",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch Defence-Centre Variation-Scandinavian Variation-Hornung Gambit",
    fen: "r1bqkbnr/ppp1pppp/2n5/3p4/3PP3/4B3/PPP2PPP/RN1QKBNR b KQkq - 1 3",
    moves: "e4 Nc6 d4 d5 Be3",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "Alekhine Defence-2 Pawns Attack-Bronstein Variation-Main Line",
    fen: "rnbqkb1r/pppppppp/8/4P3/1nPP4/8/PP3PPP/RNBQKBNR b KQkq - 0 4",
    moves: "e4 Nf6 e5 Nd5 c4 Nb4 d4",
    eco: "B02",
    difficulty: "Medium"
  },
  {
    name: "Alekhine Defence-Normal Variation-2 Pawns Attack-Steiner Variation",
    fen: "rnbqkb1r/pppppppp/1n6/4P3/2P5/1P6/P2P1PPP/RNBQKBNR b KQkq - 0 4",
    moves: "e4 Nf6 e5 Nd5 c4 Nb6 b3",
    eco: "B02",
    difficulty: "Medium"
  },
  {
    name: "Alekhine Defence-Normal Variation-2 Pawns Attack-Lasker's Attack",
    fen: "rnbqkb1r/pppppppp/1n6/2P1P3/8/8/PP1P1PPP/RNBQKBNR b KQkq - 0 4",
    moves: "e4 Nf6 e5 Nd5 c4 Nb6 c5",
    eco: "B02",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Alekhine Defence-Normal Variation-Balogh Variation",
    fen: "rnbqkb1r/ppp1pppp/3p4/3nP3/2BP4/8/PPP2PPP/RNBQK1NR b KQkq - 1 4",
    moves: "e4 Nf6 e5 Nd5 d4 d6 Bc4",
    eco: "B03",
    difficulty: "Medium"
  },
  {
    name: "Dunst Opening-Jendrossek Gambit",
    fen: "rnbqkb1r/pp2p1pp/5n2/2p2p2/1P1p1P2/5N2/P1PPPNPP/R1BQKB1R b KQkq - 0 6",
    moves: "Nc3 d5 f4 d4 Ne4 f5 Nf2 Nf6 Nf3 c5 b4",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Réti Gambit-Advance Variation-Penguin Variation",
    fen: "rnbqkbnr/ppp1pppp/8/8/2Pp4/5N2/PP1PPPPP/RNBQKBR1 b Qkq - 1 3",
    moves: "Nf3 d5 c4 d4 Rg1",
    eco: "A09",
    difficulty: "Medium"
  },
  {
    name: "English Opening-King's Knight Variation-Scandinavian Defence-Exchange Variation",
    fen: "rnbqkb1r/ppp1pppp/8/3n4/8/5N2/PP1PPPPP/RNBQKB1R w KQkq - 0 4",
    moves: "c4 Nf6 Nf3 d5 cxd5 Nxd5",
    eco: "A15",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Symmetrical Variation-Torre Attack-Gruenfeld Variation",
    fen: "rnbqkb1r/ppp1pp1p/5np1/3p2B1/3P4/5N2/PPP1PPPP/RN1QKB1R w KQkq - 0 4",
    moves: "d4 d5 Nf3 Nf6 Bg5 g6",
    eco: "D03",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Symmetrical Variation-Torre Attack-Gossip Variation",
    fen: "rnbqkb1r/ppp1pppp/8/3p2B1/3Pn3/5N2/PPP1PPPP/RN1QKB1R w KQkq - 4 4",
    moves: "d4 d5 Nf3 Nf6 Bg5 Ne4",
    eco: "D03",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Fianchetto Attack-Semi-Leningrad Variation",
    fen: "rnbqkb1r/ppppp2p/5np1/5p2/3P4/6P1/PPP1PPBP/RNBQK1NR w KQkq - 0 4",
    moves: "d4 f5 g3 Nf6 Bg2 g6",
    eco: "A81",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Indian Defence-Trompowsky Attack-Borg Variation",
    fen: "rnbqkb1r/pppppp1p/8/6p1/3PnB2/8/PPP1PPPP/RN1QKBNR w KQkq - 0 4",
    moves: "d4 Nf6 Bg5 Ne4 Bf4 g5",
    eco: "A45",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Modern Benoni Defence-Czech Benoni Defence-King's Indian System",
    fen: "rnbqkb1r/pp3p1p/3p1np1/2pPp3/2P1P3/2N5/PP3PPP/R1BQKBNR w KQkq - 0 6",
    moves: "d4 Nf6 c4 c5 d5 e5 Nc3 d6 e4 g6",
    eco: "A56",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Rubinstein Line",
    fen: "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQ - 1 5",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O",
    eco: "E46",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Torre Attack-Classical Defence-Nimzowitsch Variation",
    fen: "rnbqkb1r/pppp1pp1/4pn1p/6B1/3P4/5N2/PPP1PPPP/RN1QKB1R w KQkq - 0 4",
    moves: "d4 Nf6 Nf3 e6 Bg5 h6",
    eco: "A46",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Alapin Variation-Barmen Defence",
    fen: "rnb1kbnr/pp2pppp/8/2pq4/8/2P5/PP1P1PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 c5 c3 d5 exd5 Qxd5",
    eco: "B22",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Old Sicilian Defence-Nimzowitsch-Rossolimo Attack-Fianchetto/Rossolimo Variation",
    fen: "r1bqkbnr/pp1ppp1p/2n3p1/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    moves: "e4 c5 Nf3 Nc6 Bb5 g6",
    eco: "B31",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-2 Knights Attack-Mindeno Variation",
    fen: "rn1qkbnr/pp2pppp/2p5/3p4/4P1b1/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 2 4",
    moves: "e4 c6 Nc3 d5 Nf3 Bg4",
    eco: "B11",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Countergambit-Modern Variation-Portuguese Variation",
    fen: "rn1qkb1r/ppp1pppp/5n2/3P4/3P2b1/8/PPP2PPP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 d5 exd5 Nf6 d4 Bg4",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Countergambit-Modern Variation-Marshall Variation",
    fen: "rnbqkb1r/ppp1pppp/8/3n4/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 d5 exd5 Nf6 d4 Nxd5",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Countergambit-Pytel-Wade/Gubinsky-Melts/Schiller Defence",
    fen: "rnb1kbnr/ppp1pppp/3q4/8/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 4",
    moves: "e4 d5 exd5 Qxd5 Nc3 Qd6",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Berlin Defence-Kitchener Folly",
    fen: "rnbq1rk1/ppppbppp/5n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQ - 3 5",
    moves: "e4 e5 Bc4 Nf6 d3 Be7 Nf3 O-O",
    eco: "C24",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Normal Variation",
    fen: "r1bqkbnr/pppp1ppp/2n5/8/3QP3/8/PPP2PPP/RNB1KBNR w KQkq - 1 4",
    moves: "e4 e5 d4 exd4 Qxd4 Nc6",
    eco: "C22",
    difficulty: "Medium"
  },
  {
    name: "Vienna Game-Falkbeer Variation-Stanley Variation-Modern Variation",
    fen: "rnbqkb1r/pppp1ppp/8/4p3/2B1n3/2N5/PPPP1PPP/R1BQK1NR w KQkq - 0 4",
    moves: "e4 e5 Nc3 Nf6 Bc4 Nxe4",
    eco: "C27",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Latvian Countergambit-Greco Variation",
    fen: "rnb1kbnr/ppppq1pp/8/4Np2/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 e5 Nf3 f5 Nxe5 Qe7",
    eco: "C40",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Berlin Defence-Improved Steinitz/Closed Berlin Defence",
    fen: "r1bqkb1r/ppp2ppp/2np1n2/1B2p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O d6",
    eco: "C66",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ruy Lopez-Frankfurt Variation",
    fen: "r1b1kbnr/pppp1ppp/2n2q2/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 Qf6",
    eco: "C60",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Petrov's Defence-Damiano Variation",
    fen: "rnbqkb1r/pppp1ppp/8/4N3/4n3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Nf6 Nxe5 Nxe4",
    eco: "C42",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Petrov's Defence-López Variation",
    fen: "rnb1kb1r/ppppqppp/5n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 e5 Nf3 Nf6 Nxe5 Qe7",
    eco: "C42",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Paulsen Attack-Winawer/Nimzowitsch Variation",
    fen: "rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 2 4",
    moves: "e4 e6 d4 d5 Nc3 Bb4",
    eco: "C15",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Paulsen Attack-Rubinstein Variation",
    fen: "rnbqkbnr/ppp2ppp/4p3/8/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 e6 d4 d5 Nc3 dxe4",
    eco: "C10",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-King's Indian Attack-Keres Variation",
    fen: "r2qkbnr/pppnpppp/8/3p4/6b1/5NP1/PPPPPPBP/RNBQK2R w KQkq - 3 4",
    moves: "Nf3 d5 g3 Bg4 Bg2 Nd7",
    eco: "A07",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Slav Defence-Modern Line-Bonet Gambit",
    fen: "rnbqkb1r/pp2pppp/2p2n2/3p2B1/2PP4/5N2/PP2PPPP/RN1QKB1R b KQkq - 3 4",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Bg5",
    eco: "D11",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Slav Defence-Modern Line-Quiet Variation",
    fen: "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/4PN2/PP3PPP/RNBQKB1R b KQkq - 0 4",
    moves: "d4 d5 c4 c6 Nf3 Nf6 e3",
    eco: "D11",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Slav Defence-Modern Line-Breyer Variation",
    fen: "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/5N2/PP1NPPPP/R1BQKB1R b KQkq - 3 4",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nbd2",
    eco: "D11",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Slav Defence-Modern Line-3 Knights Variation",
    fen: "rnbqkb1r/pp2pppp/2p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 3 4",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3",
    eco: "D15",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Albin Countergambit-Normal Line",
    fen: "rnbqkbnr/ppp2ppp/8/4P3/2Pp4/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 4",
    moves: "d4 d5 c4 e5 dxe5 d4 Nf3",
    eco: "D08",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Queen's Knight Variation-Accelerated Semi-Slav Defence-Marshall Gambit",
    fen: "rnbqkbnr/pp3ppp/2p1p3/3p4/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 4",
    moves: "d4 d5 c4 e6 Nc3 c6 e4",
    eco: "D31",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Queen's Knight Variation-Normal Defence-3 Knights Variation",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 3 4",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3",
    eco: "D37",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Symmetrical Variation-Colle System-Zukertort Variation",
    fen: "rnbqkb1r/pp3ppp/4pn2/2pp4/3P4/1P2PN2/P1PN1PPP/R1BQKB1R b KQkq - 0 5",
    moves: "d4 d5 Nf3 Nf6 e3 e6 Nbd2 c5 b3",
    eco: "D05",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Staunton Gambit Accepted-Blackmar's 2nd/Diemer Gambit",
    fen: "rnbqkb1r/ppppp1pp/5n2/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR b KQkq - 0 4",
    moves: "d4 f5 e4 fxe4 Nc3 Nf6 f3",
    eco: "A82",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Krejcik Gambit-Tate Gambit",
    fen: "rnbqkbnr/ppp1p1pp/8/3p4/3PP1p1/2N5/PPP2P1P/R1BQKBNR b KQkq - 1 4",
    moves: "d4 f5 g4 fxg4 e4 d5 Nc3",
    eco: "A80",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Benko Gambit Declined-Sosonko Variation",
    fen: "rnbqkb1r/p2ppppp/5n2/1ppP4/P1P5/8/1P2PPPP/RNBQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 c4 c5 d5 b5 a4",
    eco: "A57",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Benko Gambit Declined-Hjoerring Countergambit",
    fen: "rnbqkb1r/p2ppppp/5n2/1ppP4/2P1P3/8/PP3PPP/RNBQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 c4 c5 d5 b5 e4",
    eco: "A57",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Benko Gambit Declined-Pseudo-Saemisch Variation",
    fen: "rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/5P2/PP2P1PP/RNBQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 c4 c5 d5 b5 f3",
    eco: "A57",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Benko Gambit-Mutkin Countergambit",
    fen: "rnbqkb1r/p2ppppp/5n2/1ppP4/2P3P1/8/PP2PP1P/RNBQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 c4 c5 d5 b5 g4",
    eco: "A57",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Benko Gambit Declined-Quiet Line",
    fen: "rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/8/PP1NPPPP/R1BQKBNR b KQkq - 1 4",
    moves: "d4 Nf6 c4 c5 d5 b5 Nd2",
    eco: "A57",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Benko Gambit Declined-Main Line",
    fen: "rnbqkb1r/p2ppppp/5n2/1ppP4/2P5/5N2/PP2PPPP/RNBQKB1R b KQkq - 1 4",
    moves: "d4 Nf6 c4 c5 d5 b5 Nf3",
    eco: "A57",
    difficulty: "Medium"
  },
  {
    name: "Old Indian Defence-Ukrainian Variation-2 Knights Variation-Main/Normal Line",
    fen: "r1bqkb1r/pppn1ppp/3p1n2/4p3/2PPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq - 0 5",
    moves: "d4 Nf6 c4 d6 Nc3 e5 Nf3 Nbd7 e4",
    eco: "A55",
    difficulty: "Medium"
  },
  {
    name: "East Indian Defence-Anti-Nimzo-Indian Variation-Blumenfeld Countergambit-Rubinstein Variation",
    fen: "rnbqkb1r/p2p1ppp/4pn2/1ppP4/2P1P3/5N2/PP3PPP/RNBQKB1R b KQkq - 0 5",
    moves: "d4 Nf6 c4 e6 Nf3 c5 d5 b5 e4",
    eco: "E10",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Mexican Defence-Horsefly Gambit",
    fen: "r1bqkb1r/pppppppp/5n2/3Pn3/2P2P2/8/PP2P1PP/RNBQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 c4 Nc6 d5 Ne5 f4",
    eco: "A50",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Indian Defence-Bronstein Gambit Accepted-Maltese Falcon",
    fen: "rnbqkb1r/pppppppp/5n2/8/3PP3/5P2/PPP4P/RNBQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 g4 Nxg4 f3 Nf6 e4",
    eco: "A45",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Alapin Variation-Heidenfeld Variation",
    fen: "r1bqkb1r/pp1ppppp/2n5/2pnP3/8/N1P2N2/PP1P1PPP/R1BQKB1R b KQkq - 4 5",
    moves: "e4 c5 c3 Nf6 e5 Nd5 Nf3 Nc6 Na3",
    eco: "B22",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Smith-Morra Gambit Declined-Push Variation-Dubois Variation",
    fen: "rnbqkbnr/pp1ppppp/8/8/2P1P3/3p4/PP3PPP/RNBQKBNR b KQkq - 0 4",
    moves: "e4 c5 d4 cxd4 c3 d3 c4",
    eco: "B21",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Smith-Morra Gambit-Morphy Gambit-Andreaschek Gambit",
    fen: "rnbqkbnr/pp1p1ppp/8/4p3/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 c5 d4 cxd4 Nf3 e5 c3",
    eco: "B21",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Advance Variation-Short Variation",
    fen: "rn1qkbnr/pp3ppp/2p1p3/3pPb2/3P4/2P5/PP2BPPP/RNBQK1NR b KQkq - 1 5",
    moves: "e4 c6 d4 d5 e5 Bf5 c3 e6 Be2",
    eco: "B12",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Ulysses Gambit",
    fen: "rnbqkbnr/pp2pppp/2p5/6N1/3Pp3/8/PPP2PPP/RNBQKB1R b KQkq - 1 4",
    moves: "e4 c6 d4 d5 Nf3 dxe4 Ng5",
    eco: "B12",
    difficulty: "Medium"
  },
  {
    name: "King's Bishop Opening-Classical Defence-Wing Gambit-LaBourdonnais-Denker Gambit",
    fen: "rnbqk1nr/pppp1ppp/8/4p3/1bB1P3/2P5/P2P1PPP/RNBQK1NR b KQkq - 0 4",
    moves: "e4 e5 Bc4 Bc5 b4 Bxb4 c3",
    eco: "C23",
    difficulty: "Medium"
  },
  {
    name: "King's Bishop Opening-Classical Defence-Wing Gambit-MacDonnell/McDonnell Double Gambit",
    fen: "rnbqk1nr/pppp1ppp/8/4p3/1bB1PP2/8/P1PP2PP/RNBQK1NR b KQkq - 0 4",
    moves: "e4 e5 Bc4 Bc5 b4 Bxb4 f4",
    eco: "C23",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Fischer Defence-Schulder Gambit",
    fen: "rnbqkbnr/ppp2ppp/3p4/8/1P2Pp2/5N2/P1PP2PP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 f4 exf4 Nf3 d6 b4",
    eco: "C34",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Ghulam Kassim Gambit",
    fen: "rnbqkbnr/pppp1p1p/8/8/2BPPpp1/5N2/PPP3PP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 d4",
    eco: "C37",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Australian Gambit",
    fen: "rnbqkbnr/pppp1p1p/8/8/2B1PppP/5N2/PPPP2P1/RNBQK2R b KQkq h3 0 5",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 h4",
    eco: "C37",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-MacDonnell/McDonnell Gambit",
    fen: "rnbqkbnr/pppp1p1p/8/8/2B1Ppp1/2N2N2/PPPP2PP/R1BQK2R b KQkq - 1 5",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 Nc3",
    eco: "C37",
    difficulty: "Medium"
  },
  {
    name: "King's Knight's Gambit-Salvio Gambit",
    fen: "rnbqkbnr/pppp1p1p/8/4N3/2B1Ppp1/8/PPPP2PP/RNBQK2R b KQkq - 1 5",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 Ne5",
    eco: "C37",
    difficulty: "Medium"
  },
  {
    name: "Vienna Game-Max Lange Defence-Vienna Gambit-Steinitz Gambit",
    fen: "r1bqkbnr/pppp1ppp/2n5/8/3PPp2/2N5/PPP3PP/R1BQKBNR b KQkq - 0 4",
    moves: "e4 e5 Nc3 Nc6 f4 exf4 d4",
    eco: "C25",
    difficulty: "Medium"
  },
  {
    name: "Vienna Game-Vienna Gambit-Main Line-Steinitz Variation",
    fen: "rnbqkb1r/ppp2ppp/5n2/3pp3/4PP2/2NP4/PPP3PP/R1BQKBNR b KQkq - 0 4",
    moves: "e4 e5 Nc3 Nf6 f4 d5 d3",
    eco: "C29",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Latvian Countergambit-Clam Gambit",
    fen: "r1bqkbnr/pppp2pp/2n5/4pP2/8/3P1N2/PPP2PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 Nf3 f5 d3 Nc6 exf5",
    eco: "C40",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Cordel Defence-Spanish Wing Gambit",
    fen: "r1bqk1nr/pppp1ppp/2n5/1Bb1p3/1P2P3/5N2/P1PP1PPP/RNBQK2R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 Bc5 b4",
    eco: "C64",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Giuoco Piano-Evans Gambit",
    fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4",
    eco: "C51",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Italian Game-Giuoco Piano-Rosentreter Gambit",
    fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2BPP3/5N2/PPP2PPP/RNBQK2R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 d4",
    eco: "C50",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Italian Game-2 Knights Defence-De Riviere Gambit",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 c3",
    eco: "C55",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ponziani Opening-Ponziani Countergambit-Schmidt Attack",
    fen: "r1bqkbnr/ppp3pp/2np4/3Ppp2/4P3/2P2N2/PP3PPP/RNBQKB1R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 c3 f5 d4 d6 d5",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ponziani Opening-Jaenisch Counterattack-Neumann Gambit",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 2 4",
    moves: "e4 e5 Nf3 Nc6 c3 Nf6 Bc4",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Göring Gambit",
    fen: "r1bqkbnr/pppp1ppp/2n5/8/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 c3",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-4 Knights Game-Gunsberg Variation-Provincial Variation",
    fen: "r1bqkb1r/ppp2ppp/2np1n2/4p3/4P3/P1N2N1P/1PPP1PP1/R1BQKB1R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 a3 d6 h3",
    eco: "C46",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-4 Knights Game-Leipzig/Schultze-Mueller/Halloween Gambit",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4N3/4P3/2N5/PPPP1PPP/R1BQKB1R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Nxe5",
    eco: "C46",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Petrov's Defence-Moody Gambit",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/5N2/PPP1QPPP/RNB1KB1R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nf6 Qe2 Nc6 d4",
    eco: "C42",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Tarrasch Variation-Closed Variation-Pawn Centre Variation",
    fen: "rnbqkb1r/pppn1ppp/4p3/3pP3/3P1P2/8/PPPN2PP/R1BQKBNR b KQkq - 0 5",
    moves: "e4 e6 d4 d5 Nd2 Nf6 e5 Nfd7 f4",
    eco: "C05",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-French Defence-Knight Variation-Wing Gambit",
    fen: "rnbqkbnr/pp3ppp/4p3/2ppP3/1P6/5N2/P1PP1PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e6 Nf3 d5 e5 c5 b4",
    eco: "C00",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Alekhine Defence-Scandinavian Variation-Spielmann Gambit",
    fen: "rnbqkb1r/pppnpppp/4P3/3p4/8/2N5/PPPP1PPP/R1BQKBNR b KQkq - 0 4",
    moves: "e4 Nf6 Nc3 d5 e5 Nfd7 e6",
    eco: "B02",
    difficulty: "Medium"
  },
  {
    name: "Bird System-Wagner-Zwitersch Gambit-Swiss Gambit",
    fen: "rnbqkb1r/ppppp1pp/5n2/8/4pPP1/2N5/PPPP3P/R1BQKBNR b KQkq - 0 4",
    moves: "f4 f5 e4 fxe4 Nc3 Nf6 g4",
    eco: "A02",
    difficulty: "Medium"
  },
  {
    name: "Benko Opening-Paris Gambit",
    fen: "rn1qkbnr/ppp2ppp/8/3p4/5p2/6PB/PPPPP2P/RNBQ1RK1 b kq - 1 5",
    moves: "g3 e5 Nh3 d5 f4 Bxh3 Bxh3 exf4 O-O",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Réti Gambit-Advance Variation-Reversed Blumenfeld Gambit",
    fen: "rnbqkbnr/pp2pppp/8/2p5/1PPp4/4PN2/P2P1PPP/RNBQKB1R b KQkq - 0 4",
    moves: "Nf3 d5 c4 d4 e3 c5 b4",
    eco: "A09",
    difficulty: "Medium"
  },
  {
    name: "English Opening-2 Knights Variation-Fianchetto Variation-Ultra-Symmetrical Variation",
    fen: "r1bqk1nr/pp1pppbp/2n3p1/2p5/2P5/2N3P1/PP1PPPBP/R1BQK1NR w KQkq - 2 5",
    moves: "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7",
    eco: "A36",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Caro-Kann Defensive System-Capablanca's Variation",
    fen: "rn1qkb1r/pp2pppp/2p2n2/3p4/2P3b1/1P3N2/PB1PPPPP/RN1QKB1R w KQkq - 3 5",
    moves: "c4 c6 Nf3 d5 b3 Nf6 Bb2 Bg4",
    eco: "A12",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Caro-Kann Defensive System-Bled Variation",
    fen: "rnbqkb1r/pp2pp1p/2p2np1/3p4/2P5/1P3N2/PB1PPPPP/RN1QKB1R w KQkq - 0 5",
    moves: "c4 c6 Nf3 d5 b3 Nf6 Bb2 g6",
    eco: "A12",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Caro-Kann Defensive System-Irregular Variation",
    fen: "rnbqkb1r/pp2pp1p/2p2np1/3p4/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq - 0 5",
    moves: "c4 c6 Nf3 d5 g3 Nf6 Bg2 g6",
    eco: "A11",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Bremen Variation-Reverced Sicilian-Troeger Defence",
    fen: "r2qkbnr/ppp2ppp/2npb3/4p3/2P5/2N3P1/PP1PPPBP/R1BQK1NR w KQkq - 3 5",
    moves: "c4 e5 Nc3 d6 g3 Be6 Bg2 Nc6",
    eco: "A21",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Reversed Closed Sicilian-Carls Variation-Tröger Variation",
    fen: "r1bqk1nr/ppppbp1p/2n3p1/4p3/2P5/2N3P1/PP1PPPBP/R1BQK1NR w KQkq - 2 5",
    moves: "c4 e5 Nc3 Nc6 g3 g6 Bg2 Be7",
    eco: "A25",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Reversed Closed Sicilian-Carls Variation-Taimanov Variation",
    fen: "r1bqk1nr/pppp1pbp/2n3p1/4p3/2P5/2N3P1/PP1PPPBP/R1BQK1NR w KQkq - 2 5",
    moves: "c4 e5 Nc3 Nc6 g3 g6 Bg2 Bg7",
    eco: "A25",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Agincourt Defence-English Defence-Perrin Variation",
    fen: "r2qkbnr/pbpp1ppp/1pn1p3/8/2PPP3/3B4/PP3PPP/RNBQK1NR w KQkq - 3 5",
    moves: "c4 e6 d4 b6 e4 Bb7 Bd3 Nc6",
    eco: "A13",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Agincourt Variation-Neo-Catalan-Bogoljubov/Bogo-Catalan Defence",
    fen: "rnbqk2r/ppp2ppp/3bpn2/3p4/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq - 3 5",
    moves: "c4 e6 Nf3 d5 g3 Nf6 Bg2 Bd6",
    eco: "A13",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Agincourt Defence-Agincourt Variation-Neo-Catalan Declined",
    fen: "rnbqk2r/ppp1bppp/4pn2/3p4/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq - 3 5",
    moves: "c4 e6 Nf3 d5 g3 Nf6 Bg2 Be7",
    eco: "A13",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Agincourt Variation-Neo-Catalan-Semi-Slav Defence",
    fen: "rnbqkb1r/pp3ppp/2p1pn2/3p4/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq - 0 5",
    moves: "c4 e6 Nf3 d5 g3 Nf6 Bg2 c6",
    eco: "A13",
    difficulty: "Medium"
  },
  {
    name: "English Opening-King's Knight Variation-King's Indian Formation-Double Fianchetto Variation",
    fen: "rn1qkb1r/pbpppp1p/1p3np1/8/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq - 2 5",
    moves: "c4 Nf6 Nf3 g6 g3 b6 Bg2 Bb7",
    eco: "A15",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Saduleto Variation-Modern Defence",
    fen: "r1bqkbnr/ppp1pppp/2n5/8/2pPP3/8/PP3PPP/RNBQKBNR w KQkq - 1 4",
    moves: "d4 d5 c4 dxc4 e4 Nc6",
    eco: "D20",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Saduleto Variation-Alekhine System",
    fen: "rnbqkb1r/ppp1pppp/5n2/8/2pPP3/8/PP3PPP/RNBQKBNR w KQkq - 1 4",
    moves: "d4 d5 c4 dxc4 e4 Nf6",
    eco: "D20",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Normal Variation-Alekhine Defence",
    fen: "rnbqkbnr/1pp1pppp/p7/8/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 d5 c4 dxc4 Nf3 a6",
    eco: "D21",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Normal Variation-Ericson/Slav Gambit",
    fen: "rnbqkbnr/p1p1pppp/8/1p6/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 d5 c4 dxc4 Nf3 b5",
    eco: "D21",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Normal Variation-Gunsberg Defence",
    fen: "rnbqkbnr/pp2pppp/8/2p5/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 d5 c4 dxc4 Nf3 c5",
    eco: "D21",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Normal Variation-Rosenthal Variation",
    fen: "rnbqkbnr/ppp2ppp/4p3/8/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 d5 c4 dxc4 Nf3 e6",
    eco: "D21",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Normal Variation-Godes Variation",
    fen: "r1bqkbnr/pppnpppp/8/8/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 2 4",
    moves: "d4 d5 c4 dxc4 Nf3 Nd7",
    eco: "D21",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Queen's Knight Variation-Charousek/Petrosian Variation",
    fen: "rnbqk1nr/ppp1bppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4",
    moves: "d4 d5 c4 e6 Nc3 Be7",
    eco: "D31",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit Declined-Gedult Gambit-Grosshans Defence",
    fen: "rn1qkbnr/pppbpppp/8/8/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq - 2 4",
    moves: "d4 d5 e4 dxe4 Nc3 Bd7",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Vienna Variation",
    fen: "rn1qkb1r/ppp1pppp/5n2/5b2/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq - 1 5",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 Bf5",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Richter-Veresov Attack-2 Knights System-Gruenfeld Defence",
    fen: "r1bqkb1r/pppnpp1p/5np1/3p2B1/3P4/2N2N2/PPP1PPPP/R2QKB1R w KQkq - 0 5",
    moves: "d4 d5 Nc3 Nf6 Bg5 Nbd7 Nf3 g6",
    eco: "D01",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Grunfeld Reversed-Symmetrical Variation-Queen's Gambit Accepted Deferred",
    fen: "rnbqkb1r/ppp1pppp/5n2/8/2pP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 d5 Nf3 Nf6 c4 dxc4",
    eco: "D25",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Colle System-Anti-Colle Variation-Alekhine Variation",
    fen: "rn1qkb1r/ppp2ppp/4pn2/3p1b2/3P4/3BPN2/PPP2PPP/RNBQK2R w KQkq - 0 5",
    moves: "d4 d5 Nf3 Nf6 e3 Bf5 Bd3 e6",
    eco: "D04",
    difficulty: "Medium"
  },
  {
    name: "Rat Defence-Modern Defence-Averbakh System-Randspringer Variation",
    fen: "rnbqk1nr/ppp1p1bp/3p2p1/5p2/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq - 0 5",
    moves: "d4 d6 c4 g6 Nc3 Bg7 e4 f5",
    eco: "A42",
    difficulty: "Medium"
  },
  {
    name: "Rat Defence-Modern Defence-Averbakh System-Kotov Variation",
    fen: "r1bqk1nr/ppp1ppbp/2np2p1/8/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq - 1 5",
    moves: "d4 d6 c4 g6 Nc3 Bg7 e4 Nc6",
    eco: "A42",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Rat Defence-Old Indian Defence-Rossilimo Variation",
    fen: "rn1qk1nr/ppp1ppbp/3p2p1/8/2PPP1b1/5N2/PP3PPP/RNBQKB1R w KQkq - 1 5",
    moves: "d4 d6 c4 g6 Nf3 Bg7 e4 Bg4",
    eco: "A41",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Charlick Gambit Complex-Englund Variation-Soller Gambit Deferred",
    fen: "r1bqkbnr/pppp2pp/2n2p2/4P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 e5 dxe5 Nc6 Nf3 f6",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Charlick Gambit Complex-Englund Variation-Zilbermints Gambit II",
    fen: "r1bqkbnr/pppp1pp1/2n4p/4P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 4",
    moves: "d4 e5 dxe5 Nc6 Nf3 h6",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Charlick Gambit Complex-Englund Variation-Zilbermints Gambit",
    fen: "r1bqkb1r/ppppnppp/2n5/4P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq - 3 4",
    moves: "d4 e5 dxe5 Nc6 Nf3 Nge7",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Horwitz Defence-Keres Defence-Perrin Variation",
    fen: "r2qkbnr/pbpp1ppp/1pn1p3/8/2PPP3/3B4/PP3PPP/RNBQK1NR w KQkq - 3 5",
    moves: "d4 e6 c4 b6 e4 Bb7 Bd3 Nc6",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "Modern Defence-Robatsch Variation-Averbakh System-Randspringer Variation",
    fen: "rnbqk1nr/ppp1p1bp/3p2p1/5p2/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq - 0 5",
    moves: "d4 g6 c4 Bg7 Nc3 d6 e4 f5",
    eco: "A42",
    difficulty: "Medium"
  },
  {
    name: "Modern Defence-Robatsch Variation-Averbakh System-Kotov Variation",
    fen: "r1bqk1nr/ppp1ppbp/2np2p1/8/2PPP3/2N5/PP3PPP/R1BQKBNR w KQkq - 1 5",
    moves: "d4 g6 c4 Bg7 Nc3 d6 e4 Nc6",
    eco: "A42",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Budapest Gambit-Fajarowicz-Richter Variation",
    fen: "rnbqkb1r/pppp1ppp/8/4P3/2P1n3/8/PP2PPPP/RNBQKBNR w KQkq - 1 4",
    moves: "d4 Nf6 c4 e5 dxe5 Ne4",
    eco: "A51",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Budapest Gambit-Normal Variation",
    fen: "rnbqkb1r/pppp1ppp/8/4P3/2P3n1/8/PP2PPPP/RNBQKBNR w KQkq - 1 4",
    moves: "d4 Nf6 c4 e5 dxe5 Ng4",
    eco: "A52",
    difficulty: "Medium"
  },
  {
    name: "East Indian Defence-Catalan Opening-Closed Variation-Tarrasch Defence",
    fen: "rnbqkb1r/pp3ppp/4pn2/2pp4/2PP4/6P1/PP2PPBP/RNBQK1NR w KQkq - 0 5",
    moves: "d4 Nf6 c4 e6 g3 d5 Bg2 c5",
    eco: "E01",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Rubinstein Line-St. Petersburg Variation",
    fen: "rnbqk2r/p1pp1ppp/1p2pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQkq - 0 5",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 b6",
    eco: "E43",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Rubinstein Line (Hübner Variation)",
    fen: "rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQkq - 0 5",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 c5",
    eco: "E41",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Rubinstein Line-Hübner Variation",
    fen: "rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQkq - 0 5",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 c5",
    eco: "E41",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Rubinstein Line-Taimanov Variation",
    fen: "r1bqk2r/pppp1ppp/2n1pn2/8/1bPP4/2N1P3/PP3PPP/R1BQKBNR w KQkq - 1 5",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 Nc6",
    eco: "E40",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-3 Knights Variation-Duchamp Variation",
    fen: "rnbqk2r/p1pp1ppp/1p2pn2/8/1bPP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Nf3 b6",
    eco: "E21",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-3 Knights Variation-Ragozin Variation",
    fen: "rnbqk2r/ppp2ppp/4pn2/3p4/1bPP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Nf3 d5",
    eco: "E21",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Indian Defence-Fianchetto Variation-Nimzowitsch/Exaggerated Fianchetto Variation",
    fen: "rn1qkb1r/p1pp1ppp/bp2pn2/8/2PP4/5NP1/PP2PP1P/RNBQKB1R w KQkq - 1 5",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Ba6",
    eco: "E15",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Neo-Grünfeld-Counterthrust Variation",
    fen: "rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR w KQkq - 0 5",
    moves: "d4 Nf6 c4 g6 g3 Bg7 Bg2 d5",
    eco: "E60",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Kemeri Defence-Counterthrust Variation",
    fen: "rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/6P1/PP2PPBP/RNBQK1NR w KQkq - 2 5",
    moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7",
    eco: "D70/D71",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Pseudo-King's Indian Defence-Fianchetto Defence-Euwe Variation",
    fen: "rnbqk2r/pp1pppbp/5np1/2p3B1/3P4/5N2/PPPNPPPP/R2QKB1R w KQkq - 0 5",
    moves: "d4 Nf6 Nf3 g6 Bg5 Bg7 Nbd2 c5",
    eco: "A48",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Pseudo-King's Indian Defence-Colle System-King's Indian Variation",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/8/3P4/3BPN2/PPP2PPP/RNBQK2R w KQkq - 0 5",
    moves: "d4 Nf6 Nf3 g6 e3 Bg7 Bd3 d6",
    eco: "A48",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Wing Gambit-Marshall Variation-Carlsbad Variation",
    fen: "rnbqkbnr/pp1ppppp/8/8/4P3/p7/2PP1PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 c5 b4 cxb4 a3 bxa3",
    eco: "B20",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Alapin Variation-Smith-Morra Declined",
    fen: "rnbqkb1r/pp1ppppp/8/3nP3/3p4/2P5/PP3PPP/RNBQKBNR w KQkq - 0 5",
    moves: "e4 c5 c3 Nf6 e5 Nd5 d4 cxd4",
    eco: "B22",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Grand Prix Attack-Tal Defence-Tal Gambit",
    fen: "rnbqkb1r/pp2pppp/5n2/2pP4/5P2/8/PPPP2PP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 c5 f4 d5 exd5 Nf6",
    eco: "B21",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-King's Knight Variation-Brussels Gambit-Double-Dutch Gambit",
    fen: "rnbqkb1r/pp1pp1pp/7n/2p2P2/8/5N2/PPPP1PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 c5 Nf3 f5 exf5 Nh6",
    eco: "B28",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Nimzowitsch-Rubinstein Variation-Advance Variation-Exchange Variation",
    fen: "rnbqkb1r/pp1ppppp/8/2p1P3/8/2n2N2/PPPP1PPP/R1BQKB1R w KQkq - 0 5",
    moves: "e4 c5 Nf3 Nf6 e5 Nd5 Nc3 Nxc3",
    eco: "B29",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Countergambit-Modern Variation-Scandinavian Gambit/Panov Transfer",
    fen: "rnbqkb1r/pp2pppp/2p2n2/3P4/2P5/8/PP1P1PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 d5 exd5 Nf6 c4 c6",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Countergambit-Modern Variation-Icelandic-Palme Gambit",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3P4/2P5/8/PP1P1PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 d5 exd5 Nf6 c4 e6",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Pirc Defence-Classical Variation-2 Knights System",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 2 5",
    moves: "e4 d6 d4 Nf6 Nc3 g6 Nf3 Bg7",
    eco: "B08",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Pirc Defence-Harmonist Variation-Fuller Gambit",
    fen: "rnbqkb1r/ppp1pppp/5n2/3P4/5P2/8/PPPP2PP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 d6 f4 d5 exd5 Nf6",
    eco: "B07",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Berlin Defence-Blanel Gambit",
    fen: "rnbqkb1r/pppp1ppp/8/4p3/2B1n3/2N5/PPPP1PPP/R1BQK1NR w KQkq - 0 4",
    moves: "e4 e5 Bc4 Nf6 Nc3 Nxe4",
    eco: "C24",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Leonardis Opening-Weber Gambit",
    fen: "r1bqkbnr/pp3ppp/2n5/4p3/8/3P4/PPP2PPP/RNBQKBNR w KQkq - 0 5",
    moves: "e4 e5 d3 d5 exd5 c6 dxc6 Nxc6",
    eco: "C20",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Gambit-Maróczy Variation-Philidor Gambit",
    fen: "rn1qkbnr/pppb1ppp/3p4/4P3/4P3/8/PPP2PPP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 e5 d4 d6 dxe5 Bd7",
    eco: "C20",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Kieseritsky Variation",
    fen: "rnbqkbnr/p2p1ppp/8/1pp5/2BpP3/5N2/PPP2PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 d4 exd4 Nf3 c5 Bc4 b5",
    eco: "C21",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Classical Variation-Senechaud Countergambit",
    fen: "rnbqk1nr/pppp1p1p/8/2b1p1p1/4PP2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 f4 Bc5 Nf3 g5",
    eco: "C30",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Accepted-King's Knight's Gambit-Classical Knight Variation",
    fen: "rnbqkbnr/pppp1p1p/8/6p1/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e5 f4 exf4 Nf3 g5",
    eco: "C34/C37",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Traditional Variation",
    fen: "rnbqk1nr/pppp1pbp/8/6p1/2B1Pp2/5N2/PPPP2PP/RNBQK2R w KQkq - 2 5",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 Bg7",
    eco: "C38",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Bonsch-Osmolovsky Variation",
    fen: "rnbqkb1r/ppppnppp/8/8/4Pp2/5N2/PPPP2PP/RNBQKB1R w KQkq - 2 4",
    moves: "e4 e5 f4 exf4 Nf3 Ne7",
    eco: "C34",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Busch-Gass Gambit-Chiodini Gambit",
    fen: "r1bqk1nr/pppp1ppp/2n5/2b1N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 e5 Nf3 Bc5 Nxe5 Nc6",
    eco: "C40",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Elephant Countergambit-Maróczy Gambit",
    fen: "rnbqk1nr/ppp2ppp/3b4/3Pp3/8/5N2/PPPP1PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 e5 Nf3 d5 exd5 Bd6",
    eco: "C40",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Hanham Variation-Sharp Variation",
    fen: "r1bqkbnr/ppp2ppp/1n1p4/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R w KQkq - 3 5",
    moves: "e4 e5 Nf3 d6 d4 Nd7 Bc4 Nb6",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Latvian Countergambit-Mayet Attack-Strautins Gambit",
    fen: "rnbqkbnr/p1pp2pp/8/1p2pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    moves: "e4 e5 Nf3 f5 Bc4 b5",
    eco: "C40",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Caro Variation",
    fen: "r1bqkbnr/2pp1ppp/p1n5/1p2p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 b5",
    eco: "C70",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Alapin's Defence Deferred",
    fen: "r1bqk1nr/1ppp1ppp/p1n5/4p3/Bb2P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Bb4",
    eco: "C70",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Classical Defence Deferred",
    fen: "r1bqk1nr/1ppp1ppp/p1n5/2b1p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Bc5",
    eco: "C70",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Modern Steinitz Defence",
    fen: "r1bqkbnr/1pp2ppp/p1np4/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6",
    eco: "C71",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Schliemann Defence Deferred",
    fen: "r1bqkbnr/1ppp2pp/p1n5/4pp2/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 f5",
    eco: "C70",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Fianchetto/Barnes Defence Deferred",
    fen: "r1bqkbnr/1ppp1p1p/p1n3p1/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 g6",
    eco: "C70",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Bird's Defence Deferred",
    fen: "r1bqkbnr/1ppp1ppp/p7/4p3/B2nP3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nd4",
    eco: "C70",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Cozio Defence Deferred",
    fen: "r1bqkb1r/1pppnppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nge7",
    eco: "C70",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Cordel Defence-Central Defence-Charousek Variation",
    fen: "r1bqk1nr/pppp1ppp/1bn5/1B2p3/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 Bc5 c3 Bb6",
    eco: "C64",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Cordel Defence-Central Defence-Boden Defence",
    fen: "r1b1k1nr/ppppqppp/2n5/1Bb1p3/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 Bc5 c3 Qe7",
    eco: "C64",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Berlin Defence-Mortimer Variation",
    fen: "r1bqkb1r/ppppnppp/5n2/1B2p3/4P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 d3 Ne7",
    eco: "C65",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Cozio Defence-Paulsen Variation",
    fen: "r1bqkb1r/ppppnp1p/2n3p1/1B2p3/4P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nge7 Nc3 g6",
    eco: "C60",
    difficulty: "Medium"
  },
  {
    name: "Italian Game-Giuoco Piano-Giuoco Pianissimo-Normal Variation",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 d3 Nf6",
    eco: "C50",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Italian Game-Giuoco Piano-4 Knights Variation",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 Nc3 Nf6",
    eco: "C50",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-2 Knights Defence-Knight Attack-Wilkes Barre/Traxler Counterattack",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 6 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 Bc5",
    eco: "C57",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ponziani Opening-Steinitz Variation",
    fen: "r1bqkbnr/ppp3pp/2n2p2/3pp3/Q3P3/2P2N2/PP1P1PPP/RNB1KB1R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 c3 d5 Qa4 f6",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ponziani Opening-Leonhardt Variation",
    fen: "r1bqkb1r/ppp2ppp/2n2n2/3pp3/Q3P3/2P2N2/PP1P1PPP/RNB1KB1R w KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 c3 d5 Qa4 Nf6",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ponziani Opening-Worrall Variation",
    fen: "r1b1kbnr/ppp2ppp/2nq4/3pp3/Q3P3/2P2N2/PP1P1PPP/RNB1KB1R w KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 c3 d5 Qa4 Qd6",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ponziani Opening-Jaenisch Counterattack-Gunsberg Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/8/3pP3/2P2N2/PP3PPP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 c3 Nf6 d4 exd4",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Crown Variation",
    fen: "r1bqk1nr/pppp1ppp/2n5/4p3/1b1PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 4",
    moves: "e4 e5 Nf3 Nc6 d4 Bb4+",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Benima Defence",
    fen: "r1bqk1nr/ppppbppp/2n5/8/2BpP3/5N2/PPP2PPP/RNBQK2R w KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Bc4 Be7",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Dubois-Réti Defence",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/8/2BpP3/5N2/PPP2PPP/RNBQK2R w KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Bc4 Nf6",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-3 Knights Game-Schlechter Variation",
    fen: "r1bqk2r/pppp1ppp/2n2n2/3Np3/1b2P3/5N2/PPPP1PPP/R1BQKB1R w KQkq - 6 5",
    moves: "e4 e5 Nf3 Nc6 Nc3 Bb4 Nd5 Nf6",
    eco: "C46",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-4 Knights Game-Double Spanish/Brentano Variation/Double Ruy Lopez",
    fen: "r1bqk2r/pppp1ppp/2n2n2/1B2p3/1b2P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4",
    eco: "C49",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-4 Knights Game-Spanish Variation-Classical Defence",
    fen: "r1bqk2r/pppp1ppp/2n2n2/1Bb1p3/4P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5",
    eco: "C48",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-4 Knights Game-Spanish Variation-Rubinstein Countergambit",
    fen: "r1bqkb1r/pppp1ppp/5n2/1B2p3/3nP3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4",
    eco: "C48",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-4 Knights Game-Italian Variation-Symmetrical/Giuoco Piano Variation",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bc4 Bc5",
    eco: "C46",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-4 Knights Game-Scotch Variation Accepted",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/8/3pP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4",
    eco: "C47",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Gunderam Defence-Gunderam Gambit",
    fen: "rnb1kbnr/ppppq1pp/8/4pp2/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    moves: "e4 e5 Nf3 Qe7 Bc4 f5",
    eco: "C40",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-French Defence-Normal Variation-Franco-Hiva Gambit I Accepted",
    fen: "rnbqkb1r/pppp2pp/4pn2/5P2/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 e6 d4 f5 exf5 Nf6",
    eco: "C01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-French Defence-La Bourdonnais Variation-Reuter Gambit",
    fen: "rnbqkbnr/ppp2ppp/4p3/8/4pP2/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 4",
    moves: "e4 e6 f4 d5 Nf3 dxe4",
    eco: "C00",
    difficulty: "Medium"
  },
  {
    name: "Robatsch Defence-3 Pawns Attack-Pterodactyl Defence-Austrian, Pteronodon",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1p5/3PPP2/2P5/PP4PP/RNBQKBNR w KQkq - 1 5",
    moves: "e4 g6 d4 Bg7 f4 c5 c3 Qa5",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Robatsch Defence-Standard Defence-2 Knights Variation-Suttles Variation",
    fen: "rnbqk1nr/pp2ppbp/2pp2p1/8/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 5",
    moves: "e4 g6 d4 Bg7 Nc3 d6 Nf3 c6",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Small Centre Variation-Rossolimo Variation",
    fen: "rn1qk1nr/ppp1ppbp/3p2p1/8/2PPP1b1/5N2/PP3PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 g6 d4 Bg7 Nf3 d6 c4 Bg4",
    eco: "A41",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Pterodactyl Defence-Austrian, Grand Prix, Pterodactyl",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1p5/4PP2/2N2N2/PPPP2PP/R1BQKB1R w KQkq - 2 5",
    moves: "e4 g6 Nc3 Bg7 f4 c5 Nf3 Qa5",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch Defence-Centre Variation-Scandinavian Variation-Aachen Gambit",
    fen: "r1bqkbnr/ppp1pppp/8/3P4/1n1P4/8/PPP2PPP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 Nc6 d4 d5 exd5 Nb4",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch Defence-Centre Variation-Kennedy Variation-de Smet Gambit",
    fen: "r1bqkbnr/ppp2ppp/2np4/4P3/4P3/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 Nc6 d4 e5 dxe5 d6",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch Defence-Centre Variation-Kennedy Variation-Hammer Gambit",
    fen: "r1bqkbnr/pppp2pp/2n2p2/4P3/4P3/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 Nc6 d4 e5 dxe5 f6",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "Alekhine Defence-Normal Variation-Modern Variation-Main Line",
    fen: "rn1qkb1r/ppp1pppp/3p4/3nP3/3P2b1/5N2/PPP2PPP/RNBQKB1R w KQkq - 2 5",
    moves: "e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4",
    eco: "B05",
    difficulty: "Medium"
  },
  {
    name: "Alekhine Defence-Normal Variation-Modern Variation-Larsen Variation",
    fen: "rnbqkb1r/ppp1pppp/8/3np3/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 Nf6 e5 Nd5 d4 d6 Nf3 dxe5",
    eco: "B04",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Alekhine Defence-Scandinavian Variation-Geschev Gambit",
    fen: "rnbqkb1r/pp2pppp/2p2n2/3P4/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 4",
    moves: "e4 Nf6 Nc3 d5 exd5 c6",
    eco: "B02",
    difficulty: "Medium"
  },
  {
    name: "Grob Attack-Grob Gambit-Fritz Gambit-Romford Countergambit",
    fen: "rn1qkbnr/ppp1pppp/8/8/2Pp2b1/8/PP1PPPBP/RNBQK1NR w KQkq - 0 4",
    moves: "g4 d5 Bg2 Bxg4 c4 d4",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Réti Gambit-Anglo-Slav Variation-Bogoljubov Variation II",
    fen: "rn1qkbnr/pp2pppp/2p5/3p4/2P3b1/1P3N2/P2PPPPP/RNBQKB1R w KQkq - 1 4",
    moves: "Nf3 d5 c4 c6 b3 Bg4",
    eco: "A12",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch-Larsen Attack-Modern Variation-Paschmann Gambit",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/5P2/1P6/PBPPP1PP/RN1QKBNR b KQkq - 0 3",
    moves: "b3 e5 Bb2 Nc6 f4",
    eco: "A01",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Richter-Veresov Attack-Richter Variation",
    fen: "rn1qkb1r/ppp1pppp/5n2/3p1bB1/3P4/2N2P2/PPP1P1PP/R2QKBNR b KQkq - 0 4",
    moves: "d4 d5 Nc3 Nf6 Bg5 Bf5 f3",
    eco: "D01",
    difficulty: "Medium"
  },
  {
    name: "Dutch Defence-Fianchetto Attack-Leningrad Variation-Karlsbad Variation",
    fen: "rnbqk1nr/ppppp1bp/6p1/5p2/3P4/6PN/PPP1PPBP/RNBQK2R b KQkq - 3 4",
    moves: "d4 f5 g3 g6 Bg2 Bg7 Nh3",
    eco: "A81",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Fianchetto Attack-Blackburne Variation",
    fen: "rnbqkb1r/pppp2pp/4pn2/5p2/3P4/6PN/PPP1PPBP/RNBQK2R b KQkq - 1 4",
    moves: "d4 f5 g3 Nf6 Bg2 e6 Nh3",
    eco: "A81",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Spielmann Variation",
    fen: "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/1QN5/PP2PPPP/R1B1KBNR b KQkq - 3 4",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qb3",
    eco: "E22",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Classical Variation",
    fen: "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PPQ1PPPP/R1B1KBNR b KQkq - 3 4",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2",
    eco: "E32",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Mikenas Attack",
    fen: "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2NQ4/PP2PPPP/R1B1KBNR b KQkq - 3 4",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qd3",
    eco: "E20",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Kopec Variation-Canal-Sokolsky/Nimzowitsch-Rossolimo/Moscow Attack",
    fen: "rnbqkbnr/pp2pppp/3p4/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 3",
    moves: "e4 c5 Nf3 d6 Bb5+",
    eco: "B51",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Kopec Variation-Normal/Open Variation",
    fen: "rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4",
    eco: "B54",
    difficulty: "Medium"
  },
  {
    name: "Caro-Kann Defence-Accelerated Panov Attack-Anti-Anti-Caro-Kann Defence-Van Weersel Attack",
    fen: "rnbqkbnr/pp2pppp/8/3p4/4P3/1Q6/PP1P1PPP/RNB1KBNR b KQkq - 1 4",
    moves: "e4 c6 c4 d5 cxd5 cxd5 Qb3",
    eco: "B10",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Advance Variation-Van der Wiel Attack",
    fen: "rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 2 4",
    moves: "e4 c6 d4 d5 e5 Bf5 Nc3",
    eco: "B12",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Exchange Variation-Panov-Botvinnik Attack",
    fen: "rnbqkbnr/pp2pppp/8/3p4/2PP4/8/PP3PPP/RNBQKBNR b KQkq - 0 4",
    moves: "e4 c6 d4 d5 exd5 cxd5 c4",
    eco: "B13",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Exchange Variation-Bulla Attack",
    fen: "rnbqkbnr/pp2pppp/8/3p4/3P2P1/8/PPP2P1P/RNBQKBNR b KQkq - 0 4",
    moves: "e4 c6 d4 d5 exd5 cxd5 g4",
    eco: "B13",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Traditional Variation-Main Line",
    fen: "rnbqkbnr/pp2pppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR b KQkq - 0 4",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4",
    eco: "B15",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Countergambit-Modern Variation-Burn Variation",
    fen: "rnbqkb1r/ppp1pppp/5n2/1B1P4/8/8/PPPP1PPP/RNBQK1NR b KQkq - 2 3",
    moves: "e4 d5 exd5 Nf6 Bb5+",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Muzio/Wild Muzio Gambit",
    fen: "rnbqkbnr/pppp1p1p/8/8/2B1Ppp1/5N2/PPPP2PP/RNBQ1RK1 b kq - 1 5",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 O-O",
    eco: "C37",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Philidor's Defence-Blackburne Variation",
    fen: "rn1qkbnr/ppp2ppp/3p4/4P3/4P1b1/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 Nf3 d6 d4 Bg4 dxe5",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Exchange Variation-Main Line",
    fen: "rnbqkbnr/ppp2ppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 Nf3 d6 d4 exd4 Nxd4",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Latvian Countergambit-Foltys-Leonhardt Variation",
    fen: "rnb1kbnr/pppp2pp/5q2/5p2/2N1P3/8/PPPP1PPP/RNBQKB1R b KQkq - 2 4",
    moves: "e4 e5 Nf3 f5 Nxe5 Qf6 Nc4",
    eco: "C40",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Morphy Defence-Exchange Variation",
    fen: "r1bqkbnr/1ppp1ppp/p1B5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6",
    eco: "C68",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Schliemann Defence-Exchange Variation",
    fen: "r1bqkbnr/pppp2pp/2B5/4pp2/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 f5 Bxc6",
    eco: "C63",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Berlin Defence-Halloween Attack",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/1B2N3/4P3/8/PPPP1PPP/RNBQK2R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 Nxe5",
    eco: "C65",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Paulsen Attack-Winawer Variation-Fingerslip Variation",
    fen: "rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPPB1PPP/R2QKBNR b KQkq - 3 4",
    moves: "e4 e6 d4 d5 Nc3 Bb4 Bd2",
    eco: "C15",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Paulsen Attack-Winawer Variation-Advance Variation",
    fen: "rnbqk1nr/ppp2ppp/4p3/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 4",
    moves: "e4 e6 d4 d5 Nc3 Bb4 e5",
    eco: "C16",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Paulsen Attack-Svenonius Variation",
    fen: "r1bqkbnr/ppp2ppp/2n1p3/3P4/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 4",
    moves: "e4 e6 d4 d5 Nc3 Nc6 exd5",
    eco: "C10",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Paulsen Attack-Swiss Variation",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2NB4/PPP2PPP/R1BQK1NR b KQkq - 3 4",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bd3",
    eco: "C11",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Paulsen Attack-Henneberger Variation",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3p4/3PP3/2N1B3/PPP2PPP/R2QKBNR b KQkq - 3 4",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Be3",
    eco: "C11",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Paulsen Attack-Delayed Exchange/Svenonius Variation",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3P4/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 4",
    moves: "e4 e6 d4 d5 Nc3 Nf6 exd5",
    eco: "C11",
    difficulty: "Medium"
  },
  {
    name: "Robatsch Defence-Standard Line-Modern Pterodactyl Variation-Eastern, Rhamporhynchus Variation",
    fen: "rnbqk1nr/pp1pppbp/6p1/2P5/4P3/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 4",
    moves: "e4 g6 d4 Bg7 Nc3 c5 dxc5",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Sicilian Invitation-2 Knights Variation-Sicilian Variation",
    fen: "r1bqkbnr/pp1ppppp/2n5/8/3N4/2N5/PPP1PPPP/R1BQKB1R b KQkq - 0 4",
    moves: "Nf3 c5 Nc3 Nc6 d4 cxd4 Nxd4",
    eco: "A04",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-King's Indian Attack-Pirc Variation",
    fen: "r1bqkbnr/ppp2ppp/2n5/3pp3/8/3P1NP1/PPP1PPBP/RNBQK2R b KQkq - 0 4",
    moves: "Nf3 d5 g3 Nc6 Bg2 e5 d3",
    eco: "A07",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-King's Indian Attack-Grünfeld Variation",
    fen: "rnbqkb1r/pp2pppp/5n2/2pp4/3P4/5NP1/PPP1PPBP/RNBQK2R b KQkq - 0 4",
    moves: "Nf3 d5 g3 Nf6 Bg2 c5 d4",
    eco: "A07",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Anglo-Scandinavian Defence-Malvinas Variation",
    fen: "rnb1kbnr/ppp1pppp/8/q7/8/2N5/PP1PPPPP/R1BQKBNR w KQkq - 2 4",
    moves: "c4 d5 cxd5 Qxd5 Nc3 Qa5",
    eco: "A10",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Bremen Variation-2 Knights Variation-Bellón Gambit",
    fen: "rnbqkb1r/p1pp1ppp/5n2/1p4N1/2P1p3/2N5/PP1PPPPP/R1BQKB1R w KQkq - 0 5",
    moves: "c4 e5 Nc3 Nf6 Nf3 e4 Ng5 b5",
    eco: "A22",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Bremen Variation-2 Knights Variation-Erbenheimer Gambit",
    fen: "rnbqkb1r/pppp1ppp/8/6N1/2P1p1n1/2N5/PP1PPPPP/R1BQKB1R w KQkq - 2 5",
    moves: "c4 e5 Nc3 Nf6 Nf3 e4 Ng5 Ng4",
    eco: "A22",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Flohr-Mikenas-Carls Variation #2-Sicilian Variation-Nei Gambit",
    fen: "rnbqkbnr/pp1p1ppp/4p3/2p1P3/2P5/2N5/PP1P1PPP/R1BQKBNR w KQkq - 1 5",
    moves: "c4 Nf6 Nc3 e6 e4 c5 e5 Ng8",
    eco: "A19",
    difficulty: "Medium"
  },
  {
    name: "English Opening-King's Knight Variation-King's Indian Formation-King's Fianchetto Variation",
    fen: "rnbq1rk1/ppppppbp/5np1/8/2P5/5NP1/PP1PPPBP/RNBQK2R w KQ - 3 5",
    moves: "c4 Nf6 Nf3 g6 g3 Bg7 Bg2 O-O",
    eco: "A15",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Keres Defence-Pseudo-Slav Defence",
    fen: "rn1qkbnr/pp3ppp/2p1p3/3p1b2/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
    moves: "d4 d5 c4 Bf5 Nc3 e6 Nf3 c6",
    eco: "D06",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Modern Line-3 Knights Variation-Chameleon Variation",
    fen: "rnbqkb1r/1p2pppp/p1p2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 a6",
    eco: "D15",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Modern Line-3 Knights Variation-Schlechter Variation",
    fen: "rnbqkb1r/pp2pp1p/2p2np1/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 g6",
    eco: "D15",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Accepted-Saduleto Variation-Rubinstein Defence-Yefimov Gambit",
    fen: "rnbqkbnr/p3pppp/8/1ppP4/2p1P3/8/PP3PPP/RNBQKBNR w KQkq - 0 5",
    moves: "d4 d5 c4 dxc4 e4 c5 d5 b5",
    eco: "D20",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Albin Countergambit-Normal Line-Tartakower Defence",
    fen: "rnbqkbnr/pp3ppp/8/2p1P3/2Pp4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 5",
    moves: "d4 d5 c4 e5 dxe5 d4 Nf3 c5",
    eco: "D08",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Normal Defence-3 Knights Variation-Semi-Tarrasch Defence",
    fen: "rnbqkb1r/pp3ppp/4pn2/2pp4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c5",
    eco: "D40",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Normal Defence-3 Knights Variation-Semi-Slav Defence",
    fen: "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6",
    eco: "D43",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Normal Defence-3 Knights Variation-Barmen Variation",
    fen: "r1bqkb1r/pppn1ppp/4pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 4 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 Nbd7",
    eco: "D37",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Chigorin Defence-Modern Gambit",
    fen: "r1bqkb1r/ppp1pppp/2n2n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
    moves: "d4 d5 c4 Nc6 Nc3 Nf6 Nf3 dxc4",
    eco: "D07",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Alapin Variation-Sherzer Variation",
    fen: "r1bqkb1r/pp1p1ppp/2n1p3/2pnP3/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 2 6",
    moves: "e4 c5 c3 Nf6 e5 Nd5 d4 e6 Nf3 Nc6",
    eco: "B22",
    difficulty: "Medium"
  },
  {
    name: "Caro-Kann Defence-Accelerated Panov Attack-Anti-Anti-Caro-Kann Defence-Pseudo-Scandinavian Variation",
    fen: "rnb1kbnr/pp2pppp/2p5/3q4/2P5/8/PP1P1PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 c6 c4 d5 exd5 Qxd5",
    eco: "B10",
    difficulty: "Medium"
  },
  {
    name: "King's Gambit Declined-Queen's Knight Defence-Zilbermints Double Gambit I-Hobbs-Zilbermints Gambit",
    fen: "r1bqkbnr/pppp1p2/2n4p/4p1P1/4P3/5N2/PPPP2PP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 e5 f4 Nc6 Nf3 g5 fxg5 h6",
    eco: "C30",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Cordel Defence-Central Defence-Konikowski-Hardy Gambit",
    fen: "r1bqk1nr/ppp2ppp/2n5/1Bbpp3/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 Bc5 c3 d5",
    eco: "C64",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Cordel Defence-Central Defence-Cordel Gambit",
    fen: "r1bqk1nr/pppp2pp/2n5/1Bb1pp2/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 Bc5 c3 f5",
    eco: "C64",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Barnes Defence-Kevitz Gambit",
    fen: "r1bqkbnr/pppp3p/2n3p1/1B2pp2/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 g6 c3 f5",
    eco: "C60",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Berlin Defence-Beverwijk Variation",
    fen: "r1bqk2r/pppp1ppp/2n2n2/1Bb1p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 6 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Bc5",
    eco: "C65",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Berlin Defence-Fishing Pole Variation",
    fen: "r1bqkb1r/pppp1ppp/2n5/1B2p3/4P1n1/5N2/PPPP1PPP/RNBQ1RK1 w kq - 6 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Ng4",
    eco: "C65",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Giuoco Piano-Evans Gambit-Fontaine Countergambit",
    fen: "r1bqk1nr/p1pp1ppp/2n5/1pb1p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 b5",
    eco: "C51",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Giuoco Piano-Evans Gambit Declined",
    fen: "r1bqk1nr/pppp1ppp/1bn5/4p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bb6",
    eco: "C51",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Giuoco Piano-Evans Gambit-Evans/Hein Countergambit",
    fen: "r1bqk1nr/ppp2ppp/2n5/2bpp3/1PB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 d5",
    eco: "C51",
    difficulty: "Medium"
  },
  {
    name: "Italian Game-Giuoco Piano-Giuoco Pianissimo-Lucchini Gambit",
    fen: "r1bqk1nr/pppp2pp/2n5/2b1pp2/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 d3 f5",
    eco: "C50",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Italian Game-2 Knights Defence-Scotch Gambit Declined",
    fen: "r1bqk2r/pppp1ppp/2nb1n2/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R w KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 Bd6",
    eco: "C55",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Göring Gambit Declined",
    fen: "r1bqkbnr/ppp2ppp/2n5/3p4/3pP3/2P2N2/PP3PPP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 c3 d5",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Standard Line-Gurgenidze Defence",
    fen: "rnbqk1nr/pp2ppb1/2p3p1/3pP2p/3P1P2/2N5/PPP3PP/R1BQKBNR w KQkq - 0 6",
    moves: "e4 g6 d4 Bg7 Nc3 c6 f4 d5 e5 h5",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Norwegian Defence-Norwegian Gambit",
    fen: "rnbqkb1r/ppp1pp1p/3p2p1/4P2n/3P4/8/PPP1BPPP/RNBQK1NR w KQkq - 0 5",
    moves: "e4 g6 d4 Nf6 e5 Nh5 Be2 d6",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch Defence-Centre Variation-Scandinavian Variation-Exchange Variation",
    fen: "r1b1kbnr/ppp1pppp/2n5/3q4/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 Nc6 d4 d5 exd5 Qxd5",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "Grob Attack-Keene Defence-Main Line",
    fen: "rnbqk2r/pp2nppp/2pb4/3p4/2PPp1P1/2N4P/PP2PPB1/R1BQK1NR w KQkq - 3 7",
    moves: "g4 d5 h3 e5 Bg2 c6 d4 e4 c4 Bd6 Nc3 Ne7",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Fianchetto Variation-Ultra-Symmetrical Variation-Botvinnik System",
    fen: "r1bqk1nr/pp1pppbp/2n3p1/2p5/2P1P3/2N3P1/PP1P1PBP/R1BQK1NR b KQkq - 0 5",
    moves: "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 e4",
    eco: "A36",
    difficulty: "Medium"
  },
  {
    name: "English Opening-2 Knights Variation-Fianchetto Variation-Ultra-Symmetrical/2 Knights Line",
    fen: "r1bqk1nr/pp1pppbp/2n3p1/2p5/2P5/2N2NP1/PP1PPPBP/R1BQK2R b KQkq - 3 5",
    moves: "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 Nf3",
    eco: "A37",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Bremen Variation-Kahiko-Hula Gambit",
    fen: "rnbqkb1r/pppp1ppp/5n2/8/2P2p2/4PN2/PP1P2PP/RNBQKB1R b KQkq - 1 4",
    moves: "c4 e5 e3 Nf6 f4 exf4 Nf3",
    eco: "A20",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Bremen Variation-Double Whammy Variation-Vampire Gambit",
    fen: "rnbqkbnr/pppp1p1p/8/6p1/2P2p2/5NP1/PP1PP2P/RNBQKB1R b KQkq - 0 4",
    moves: "c4 e5 f4 exf4 Nf3 g5 g3",
    eco: "A20",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Carls Variation-Taimanov Variation-Closed System",
    fen: "r1bqk1nr/pppp1pbp/2n3p1/4p3/2P5/2NP2P1/PP2PPBP/R1BQK1NR b KQkq - 0 5",
    moves: "c4 e5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3",
    eco: "A26",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Carls-Bremen System-Fianchetto Line-Closed Variation",
    fen: "rnbqk2r/pppp1pbp/5np1/4p3/2P5/2NP2P1/PP2PPBP/R1BQK1NR b KQkq - 0 5",
    moves: "c4 e5 Nc3 Nf6 g3 g6 Bg2 Bg7 d3",
    eco: "A24",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Agincourt Defence-King's Knight Variation-Whimpey System",
    fen: "rnbqkb1r/pp3ppp/4pn2/2pp4/2P5/1P2PN2/PB1P1PPP/RN1QKB1R b KQkq - 0 5",
    moves: "c4 e6 Nf3 d5 b3 Nf6 Bb2 c5 e3",
    eco: "A13",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Anglo-Dutch Defence-Hickmann Gambit-Porcupine Variation",
    fen: "rnbqkb1r/ppppp1pp/5n2/8/2P1p1P1/2N5/PP1P1P1P/R1BQKBNR b KQkq - 0 4",
    moves: "c4 f5 e4 fxe4 Nc3 Nf6 g4",
    eco: "A10",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Hedgehog System-Queen's Indian Formation-Romanishin Variation",
    fen: "rn1qkb1r/pbpp1ppp/1p2pn2/8/2P1P3/2NB1N2/PP1P1PPP/R1BQK2R b KQkq - 2 5",
    moves: "c4 Nf6 Nc3 e6 Nf3 b6 e4 Bb7 Bd3",
    eco: "A17",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Slav Defence-Alekhine Attack",
    fen: "rnbqkbnr/pp2pppp/2p5/8/2pPP3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 4",
    moves: "d4 d5 c4 c6 Nc3 dxc4 e4",
    eco: "D10",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Slav Defence-Modern Line-Exchange Variation",
    fen: "rnbqkb1r/pp2pppp/2p2n2/3P4/3P4/5N2/PP2PPPP/RNBQKB1R b KQkq - 0 4",
    moves: "d4 d5 c4 c6 Nf3 Nf6 cxd5",
    eco: "D13",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Accepted-Normal Variation-Alekhine Defence-Borisenko-Furman Variation",
    fen: "rnbqkbnr/1pp1pppp/p7/8/2pPP3/5N2/PP3PPP/RNBQKB1R b KQkq - 0 4",
    moves: "d4 d5 c4 dxc4 Nf3 a6 e4",
    eco: "D21",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Normal Variation-Showalter Variation",
    fen: "rnbqkb1r/ppp1pppp/5n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 3 4",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 Nc3",
    eco: "D24",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Queen's Knight Variation-Normal Defence-Modern/Semi-Pillsbury Variation",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR b KQkq - 3 4",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5",
    eco: "D50",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Queen's Knight Variation-Normal Defence-Exchange Variation",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3P4/3P4/2N5/PP2PPPP/R1BQKBNR b KQkq - 0 4",
    moves: "d4 d5 c4 e6 Nc3 Nf6 cxd5",
    eco: "D35",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Chigorin Defence-Janowski Variation",
    fen: "r1bqkbnr/ppp1pppp/2n5/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 1 4",
    moves: "d4 d5 c4 Nc6 Nc3 dxc4 Nf3",
    eco: "D07",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Lemberger Countergambit-Rassmussen Attack",
    fen: "rnbqkbnr/ppp2ppp/8/4p3/3Pp3/2N5/PPP1NPPP/R1BQKB1R b KQkq - 1 4",
    moves: "d4 d5 e4 dxe4 Nc3 e5 Nge2",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Studier-Rasa Gambit",
    fen: "rnbqkb1r/ppp1pppp/5n2/8/3Pp3/2N1B3/PPP2PPP/R2QKBNR b KQkq - 3 4",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 Be3",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Grunfeld Reversed-Krause Gambit-Chandler Gambit",
    fen: "rnbqkbnr/pp2pppp/8/3p4/3p4/5NP1/PPP1PPBP/RNBQK2R b KQkq - 1 4",
    moves: "d4 d5 Nf3 c5 g3 cxd4 Bg2",
    eco: "D02",
    difficulty: "Medium"
  },
  {
    name: "Symmetrical Variation-Colle System-Zukertort Variation-Rubinstein/Colle-Zukertort Opening",
    fen: "rnbqkb1r/pp3ppp/4pn2/2pp4/3P4/1P1BPN2/P1P2PPP/RNBQK2R b KQkq - 0 5",
    moves: "d4 d5 Nf3 Nf6 e3 e6 Bd3 c5 b3",
    eco: "D05",
    difficulty: "Medium"
  },
  {
    name: "Grunfeld Reversed-Colle System-Zukertort Variation-Traditional Colle Variation",
    fen: "rnbqkb1r/pp3ppp/4pn2/2pp4/3P4/2PBPN2/PP3PPP/RNBQK2R b KQkq - 0 5",
    moves: "d4 d5 Nf3 Nf6 e3 e6 Bd3 c5 c3",
    eco: "D05",
    difficulty: "Medium"
  },
  {
    name: "Dutch Defence-Fianchetto Variation-Leningrad Variation-Main Variation",
    fen: "rnbqk2r/ppppp1bp/5np1/5p2/2PP4/5NP1/PP2PPBP/RNBQK2R b KQkq - 3 5",
    moves: "d4 f5 c4 Nf6 g3 g6 Bg2 Bg7 Nf3",
    eco: "A87",
    difficulty: "Medium"
  },
  {
    name: "Dutch Defence-Fianchetto Variation-Leningrad Variation-Carlsbad Variation",
    fen: "rnbqk2r/ppppp1bp/5np1/5p2/2PP4/6PN/PP2PPBP/RNBQK2R b KQkq - 3 5",
    moves: "d4 f5 c4 Nf6 g3 g6 Bg2 Bg7 Nh3",
    eco: "A86",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Staunton Gambit Accepted-Staunton's/General Line",
    fen: "rnbqkb1r/ppppp1pp/5n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR b KQkq - 3 4",
    moves: "d4 f5 e4 fxe4 Nc3 Nf6 Bg5",
    eco: "A83",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Staunton Gambit Accepted-Tartakower Variation",
    fen: "rnbqkb1r/ppppp1pp/5n2/8/3Pp1P1/2N5/PPP2P1P/R1BQKBNR b KQkq - 0 4",
    moves: "d4 f5 e4 fxe4 Nc3 Nf6 g4",
    eco: "A82",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Modern Defence-Averbakh Variation-Pseudo-Saemisch",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/4BP2/PP4PP/RN1QKBNR b KQkq - 0 5",
    moves: "d4 g6 c4 Bg7 e4 d6 Be3 Nf6 f3",
    eco: "A42",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Old Indian Defence-Janowski Variation-Grinberg Gambit",
    fen: "rn1qkb1r/ppp1pppp/3p1n2/5b2/2PPP3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 c4 d6 Nc3 Bf5 e4",
    eco: "A53",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Old Indian Defence-Ukrainian Variation-Dus-Khotimirsky Variation",
    fen: "r1bqkb1r/pppn1ppp/3p1n2/4p3/2PP4/2NBP3/PP3PPP/R1BQK1NR b KQkq - 2 5",
    moves: "d4 Nf6 c4 d6 Nc3 e5 e3 Nbd7 Bd3",
    eco: "A53",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Budapest Gambit-Normal Variation-Alekhine Variation",
    fen: "rnbqkb1r/pppp1ppp/8/4P3/2P1P1n1/8/PP3PPP/RNBQKBNR b KQkq - 0 4",
    moves: "d4 Nf6 c4 e5 dxe5 Ng4 e4",
    eco: "A52",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Budapest Gambit-Normal Variation-Adler Variation",
    fen: "rnbqkb1r/pppp1ppp/8/4P3/2P3n1/5N2/PP2PPPP/RNBQKB1R b KQkq - 2 4",
    moves: "d4 Nf6 c4 e5 dxe5 Ng4 Nf3",
    eco: "A52",
    difficulty: "Medium"
  },
  {
    name: "Nimzo-Indian Defence-Rubinstein Line-St. Petersburg Variation-Fischer Variation",
    fen: "rnbqk2r/p1pp1ppp/1p2pn2/8/1bPP4/2N1P3/PP2NPPP/R1BQKB1R b KQkq - 1 5",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 b6 Ne2",
    eco: "E44",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-3 Knights Variation-Korchnoi Variation",
    fen: "rnbqk2r/pp1p1ppp/4pn2/2pP4/1bP5/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 0 5",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Nf3 c5 d5",
    eco: "E21",
    difficulty: "Medium"
  },
  {
    name: "Queen's Indian Defence-Fianchetto Variation-Nimzowitsch Variation-Quiet Line",
    fen: "rn1qkb1r/p1pp1ppp/bp2pn2/8/2PP4/1P3NP1/P3PP1P/RNBQKB1R b KQkq - 0 5",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Ba6 b3",
    eco: "E15",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Indian Defence-Kasparov Variation-Kasparov-Petrosian Variation",
    fen: "rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/P1N2N2/1P2PPPP/R1BQKB1R b KQkq - 0 5",
    moves: "d4 Nf6 c4 e6 Nf3 b6 Nc3 Bb7 a3",
    eco: "E12",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Bogo-Indian Defence-Grünfeld Variation",
    fen: "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/5N2/PP1NPPPP/R1BQKB1R b KQkq - 3 4",
    moves: "d4 Nf6 c4 e6 Nf3 Bb4+ Nbd2",
    eco: "E11",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Bogo-Indian Defence-New England Variation",
    fen: "rnbqk2r/pppp1ppp/4pn2/8/1bPP4/8/PP1NPPPP/RNBQKB1R b KQkq - 3 4",
    moves: "d4 Nf6 c4 e6 Nf3 Bb4+ Nfd2",
    eco: "E11",
    difficulty: "Medium"
  },
  {
    name: "East Indian Defence-Anti-Nimzo-Indian Variation-Blumenfeld Countergambit-Dus-Chotimursky/Dus Chotmirsky Variation",
    fen: "rnbqkb1r/p2p1ppp/4pn2/1ppP2B1/2P5/5N2/PP2PPPP/RN1QKB1R b KQkq - 1 5",
    moves: "d4 Nf6 c4 e6 Nf3 c5 d5 b5 Bg5",
    eco: "E10",
    difficulty: "Medium"
  },
  {
    name: "King's Indian Defence-Kemeri Defence-Counterthrust Variation-Reshevsky Variation",
    fen: "rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/5NP1/PP2PPBP/RNBQK2R b KQkq - 3 5",
    moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3",
    eco: "D73",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Normal Variation-Standard Development",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP2BPPP/R1BQK1NR b KQkq - 1 5",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2",
    eco: "E73",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Normal Variation-Accelerated Averbakh System",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/6B1/2PPP3/2N5/PP3PPP/R2QKBNR b KQkq - 1 5",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Bg5",
    eco: "E70",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Normal Variation-Sämisch Variation",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP4PP/R1BQKBNR b KQkq - 0 5",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3",
    eco: "E80",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Normal Variation-Deferred Fianchetto Variation",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N3P1/PP3P1P/R1BQKBNR b KQkq - 0 5",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 g3",
    eco: "E72",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Normal Variation-Makogonov System",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N4P/PP3PP1/R1BQKBNR b KQkq - 0 5",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 h3",
    eco: "E71",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Normal Variation-Rare Defence",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq - 1 5",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3",
    eco: "E90",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Normal Variation-Kramer System",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/8/2PPP3/2N5/PP2NPPP/R1BQKB1R b KQkq - 1 5",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nge2",
    eco: "E70",
    difficulty: "Medium"
  },
  {
    name: "King's Indian Defence-Grünfeld Defence-3 Knights Variation-Petrosian System",
    fen: "rnbqk2r/ppp1ppbp/5np1/3p2B1/2PP4/2N2N2/PP2PPPP/R2QKB1R b KQkq - 3 5",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Bg5",
    eco: "D91",
    difficulty: "Medium"
  },
  {
    name: "King's Indian Defence-Grünfeld Defence-3 Knights Variation-Burille Variation",
    fen: "rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R b KQkq - 0 5",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 e3",
    eco: "D94",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Indian Defence-Omega Gambit-Arafat Gambit",
    fen: "rnbqkb1r/pppppppp/5n2/6B1/3P4/3B4/PPP2PPP/RN1QK1NR b KQkq - 3 4",
    moves: "d4 Nf6 e4 Nxe4 Bd3 Nf6 Bg5",
    eco: "A45",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Torre Attack-Classical Defence-Wagner Gambit",
    fen: "rnbqkb1r/pp1p1ppp/4pn2/2p3B1/3PP3/5N2/PPP2PPP/RN1QKB1R b KQkq - 0 4",
    moves: "d4 Nf6 Nf3 e6 Bg5 c5 e4",
    eco: "A46",
    difficulty: "Medium"
  },
  {
    name: "Van't Kruijs Opening-Keoni-Hiva Gambit-Ekolu Variation",
    fen: "rnbqkbnr/ppp2ppp/8/3p4/5p2/2N1PN2/PPPP2PP/R1BQKB1R b KQkq - 1 4",
    moves: "e3 e5 Nc3 d5 f4 exf4 Nf3",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Van't Kruijs Opening-Keoni-Hiva Gambit-Alua Variation",
    fen: "r1bqkbnr/pppp1ppp/2n5/8/5p2/2N1PN2/PPPP2PP/R1BQKB1R b KQkq - 1 4",
    moves: "e3 e5 Nc3 Nc6 f4 exf4 Nf3",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Van't Kruijs Opening-Keoni-Hiva Gambit-Akahi Variation",
    fen: "rnbqkb1r/pppp1ppp/5n2/8/5p2/2N1PN2/PPPP2PP/R1BQKB1R b KQkq - 1 4",
    moves: "e3 e5 Nc3 Nf6 f4 exf4 Nf3",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Paulsen Variation-Open Variation-Smith-Morra Gambit Deferred",
    fen: "rnbqkbnr/pp1p1ppp/4p3/8/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 c5 Nf3 e6 d4 cxd4 c3",
    eco: "B40",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Old Sicilian Defence-Nimzowitsch-Rossolimo Attack-San Francisco Gambit",
    fen: "r1bqkbnr/pp1ppppp/8/nBp5/1P2P3/5N2/P1PP1PPP/RNBQK2R b KQkq - 0 4",
    moves: "e4 c5 Nf3 Nc6 Bb5 Na5 b4",
    eco: "B31",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Traditional Variation-Rasa-Studier Gambit",
    fen: "rnbqkbnr/pp2pppp/2p5/8/3Pp3/2N2P2/PPP3PP/R1BQKBNR b KQkq - 0 4",
    moves: "e4 c6 d4 d5 Nc3 dxe4 f3",
    eco: "B15",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Scorpion-Horus Gambit",
    fen: "rnbqkbnr/pp2pppp/2p5/6B1/4p3/2NP4/PPP2PPP/R2QKBNR b KQkq - 1 4",
    moves: "e4 c6 Nc3 d5 d3 dxe4 Bg5",
    eco: "B10",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-2 Knights Attack-Hector Gambit",
    fen: "rnbqkbnr/pp2pppp/2p5/6N1/4p3/2N5/PPPP1PPP/R1BQKB1R b KQkq - 1 4",
    moves: "e4 c6 Nc3 d5 Nf3 dxe4 Ng5",
    eco: "B10",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Pirc Defence-Classical Variation-Chinese Variation",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/8/3PP1P1/2N5/PPP1BP1P/R1BQK1NR b KQkq - 0 5",
    moves: "e4 d6 d4 Nf6 Nc3 g6 Be2 Bg7 g4",
    eco: "B07",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Pirc Defence-Sveshnikov-Jansa Attack",
    fen: "rnbqkb1r/pp2pp1p/2pp1np1/8/3PP3/2N1B2P/PPP2PP1/R2QKBNR b KQkq - 0 5",
    moves: "e4 d6 d4 Nf6 Nc3 g6 Be3 c6 h3",
    eco: "B07",
    difficulty: "Medium"
  },
  {
    name: "Pirc Defence-Classical Variation-2 Knights System-Quiet System",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQK2R b KQkq - 3 5",
    moves: "e4 d6 d4 Nf6 Nc3 g6 Nf3 Bg7 Be2",
    eco: "B08",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Pirc Defence-2 Knights System-Schlechter Variation",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/8/3PP3/2N2N1P/PPP2PP1/R1BQKB1R b KQkq - 0 5",
    moves: "e4 d6 d4 Nf6 Nc3 g6 Nf3 Bg7 h3",
    eco: "B08",
    difficulty: "Medium"
  },
  {
    name: "King's Bishop Opening-Berlin Defence-Vienna Hybrid-Hromadka Variation",
    fen: "r1bqk2r/pppp1ppp/2n2n2/4p3/1bB1P3/2NP4/PPP1NPPP/R1BQK2R b KQkq - 4 5",
    moves: "e4 e5 Bc4 Nf6 d3 Nc6 Nc3 Bb4 Ne2",
    eco: "C28",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Berlin Defence-Warsaw Gambit",
    fen: "rnbqkb1r/pppp1ppp/5n2/8/2BpP3/2P5/PP3PPP/RNBQK1NR b KQkq - 0 4",
    moves: "e4 e5 Bc4 Nf6 d4 exd4 c3",
    eco: "C24",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Berlin Defence-Urusov Gambit",
    fen: "rnbqkb1r/pppp1ppp/5n2/8/2BpP3/5N2/PPP2PPP/RNBQK2R b KQkq - 1 4",
    moves: "e4 e5 Bc4 Nf6 d4 exd4 Nf3",
    eco: "C24",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Berlin Defence-Paschmann Gambit",
    fen: "rnbqkb1r/pppp1ppp/8/4p3/2B1n3/2N5/PPPP1PPP/RNBQK2R b KQkq - 1 4",
    moves: "e4 e5 Bc4 Nf6 Ne2 Nxe4 Nec3",
    eco: "C24",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Berlin Defence-Boden-Kieseritzky Gambit",
    fen: "rnbqkb1r/pppp1ppp/8/4p3/2B1n3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 1 4",
    moves: "e4 e5 Bc4 Nf6 Nf3 Nxe4 Nc3",
    eco: "C42",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Lanc-Arnold Gambit",
    fen: "rnbqk1nr/pppp1ppp/8/2b5/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 d4 exd4 Nf3 Bc5 c3",
    eco: "C21",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Classical Variation-Heath/Rotlewi Countergambit",
    fen: "rnbqk1nr/ppp2ppp/3p4/2b1p3/1P2PP2/5N2/P1PP2PP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 f4 Bc5 Nf3 d6 b4",
    eco: "C30",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Gianutio Countergambit-Alapin Variation",
    fen: "rnbqkbnr/pppp2pp/8/4Pp2/5p2/5N2/PPPP2PP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 f4 exf4 Nf3 f5 e5",
    eco: "C34",
    difficulty: "Medium"
  },
  {
    name: "King's Knight's Gambit-Traditional Variation-Philidor Gambit",
    fen: "rnbqk1nr/pppp1pbp/8/6p1/2B1Pp1P/5N2/PPPP2P1/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 Bg7 h4",
    eco: "C38",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Accepted-King's Knight's Gambit-Sorensen Variation",
    fen: "rnbqkbnr/pppp1p1p/8/4N1p1/4Pp2/8/PPPP2PP/RNBQKB1R b KQkq - 1 4",
    moves: "e4 e5 f4 exf4 Nf3 g5 Ne5",
    eco: "C37",
    difficulty: "Medium"
  },
  {
    name: "Vienna Game-Max Lange Defence-Vienna Gambit-Knight Variation",
    fen: "r1bqkbnr/pppp1ppp/2n5/8/4Pp2/2N2N2/PPPP2PP/R1BQKB1R b KQkq - 1 4",
    moves: "e4 e5 Nc3 Nc6 f4 exf4 Nf3",
    eco: "C25",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Exchange Variation-Bird Gambit",
    fen: "rnbqkbnr/ppp2ppp/3p4/8/3pP3/2P2N2/PP3PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 Nf3 d6 d4 exd4 c3",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Hanham Variation-Nimzovich Variation",
    fen: "r1bqkbnr/pp1n1ppp/2pp4/4p3/P1BPP3/5N2/1PP2PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 d6 d4 Nd7 Bc4 c6 a4",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Hanham Variation-Delmar Variation",
    fen: "r1bqkbnr/pp1n1ppp/2pp4/4p3/2BPP3/2P2N2/PP3PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 d6 d4 Nd7 Bc4 c6 c3",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Hanham Variation-Schlechter Variation",
    fen: "r1bqkbnr/pp1n1ppp/2pp4/4p3/2BPP3/2N2N2/PPP2PPP/R1BQK2R b KQkq - 1 5",
    moves: "e4 e5 Nf3 d6 d4 Nd7 Bc4 c6 Nc3",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Hanham Variation-Kmoch Variation",
    fen: "r1bqkbnr/pp1n1ppp/2pp4/4p1N1/2BPP3/8/PPP2PPP/RNBQK2R b KQkq - 1 5",
    moves: "e4 e5 Nf3 d6 d4 Nd7 Bc4 c6 Ng5",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Modern Steinitz Defence-Duras/Keres Variation",
    fen: "r1bqkbnr/1pp2ppp/p1np4/4p3/B1P1P3/5N2/PP1P1PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 c4",
    eco: "C71",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Modern Steinitz Defence-3 Knights Variation",
    fen: "r1bqkbnr/1pp2ppp/p1np4/4p3/B3P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 Nc3",
    eco: "C71",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Anderssen Variation",
    fen: "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 d3",
    eco: "C77",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Mackenzie Variation",
    fen: "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B2PP3/5N2/PPP2PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 d4",
    eco: "C77",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-4 Knights/Tarrasch Variation",
    fen: "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 3 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 Nc3",
    eco: "C77",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Old Steinitz Defence-Semi-Duras Variation",
    fen: "r2qkbnr/pppb1ppp/2np4/1B2p3/2PPP3/5N2/PP3PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 d6 d4 Bd7 c4",
    eco: "C62",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Schliemann Defence-Jaenisch Gambit Accepted",
    fen: "r1bqkbnr/pppp2pp/2n5/1B2pP2/8/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bb5 f5 exf5",
    eco: "C63",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Berlin Defence-Kaufmann Variation",
    fen: "r1bqk2r/pppp1ppp/2n2n2/1Bb1p3/4P3/3PBN2/PPP2PPP/RN1QK2R b KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 d3 Bc5 Be3",
    eco: "C65",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Berlin Defence-Duras Variation",
    fen: "r1bqkb1r/ppp2ppp/2np1n2/1B2p3/2P1P3/3P1N2/PP3PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 d3 d6 c4",
    eco: "C65",
    difficulty: "Medium"
  },
  {
    name: "Italian Game-Giuoco Piano-Classical Variation-Giuoco Pianissimo",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2PP1N2/PP3PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3",
    eco: "C53/C54",
    difficulty: "Medium"
  },
  {
    name: "Giuoco Piano-Giuoco Pianissimo-Normal Variation-Italian 4 Knights Variation",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 d3 Nf6 Nc3",
    eco: "C50",
    difficulty: "Medium"
  },
  {
    name: "Italian Game-Giuoco Piano-4 Knights Variation-Giuoco Pianissimo",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 Nc3 Nf6 d3",
    eco: "C50",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Inverted Hungarian Opening-Inverted Hanham Variation",
    fen: "r1bqkb1r/ppp2ppp/2n2n2/3pp3/4P3/3P1N2/PPPNBPPP/R1BQK2R b KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Be2 Nf6 d3 d5 Nbd2",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Relfsson/MacLopez Gambit",
    fen: "r1bqkbnr/pppp1ppp/2n5/1B6/3pP3/5N2/PPP2PPP/RNBQK2R b KQkq - 1 4",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Bb5",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-3 Knights Game-Steinitz Defence-Rosenthal Variation",
    fen: "r1bqkbnr/pppp1p1p/2n3p1/3N4/3pP3/5N2/PPP2PPP/R1BQKB1R b KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Nc3 g6 d4 exd4 Nd5",
    eco: "C46",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-4 Knights Game-Spanish Variation-Rosenthal Variation",
    fen: "r1bqkb1r/ppp2ppp/2np1n2/1B2p3/4P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 d6 d3",
    eco: "C48",
    difficulty: "Medium"
  },
  {
    name: "4 Knights Game-Italian Variation-Symmetrical Variation-Giuoco Pianissimo",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bc4 Bc5 d3",
    eco: "C46",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Italian Game-Irish/Chicago/Schulze-Muller Gambit",
    fen: "r1bqkbnr/pppp1ppp/8/4n3/3PP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Nxe5 Nxe5 d4",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Petrov's Defence-Cochrane Gambit",
    fen: "rnbqkb1r/ppp2Npp/3p1n2/8/4P3/8/PPPP1PPP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nxf7",
    eco: "C42",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-French Defence-Hanham Attack-Reversed Philidor Formation",
    fen: "r1bqkb1r/ppp2ppp/2n1pn2/3p4/4P3/3P1N2/PPPNBPPP/R1BQK2R b KQkq - 5 5",
    moves: "e4 e6 d3 d5 Nd2 Nf6 Ngf3 Nc6 Be2",
    eco: "C00",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Advance Variation-Paulsen Attack",
    fen: "r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R b KQkq - 2 5",
    moves: "e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3",
    eco: "C02",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Winawer Variation-Fingerslip Variation-Schwarz's Line",
    fen: "rnbqk2r/ppp1nppp/4p3/3p4/1b1PP3/8/PPPB1PPP/RN1QKBNR b KQkq - 5 5",
    moves: "e4 e6 d4 d5 Nc3 Bb4 Bd2 Ne7 Nb1",
    eco: "C15",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Winawer Variation-Advance Variation-Bogoljubov Variation",
    fen: "rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/2N5/PPPB1PPP/R2QKBNR b KQkq - 1 5",
    moves: "e4 e6 d4 d5 Nc3 Bb4 e5 c5 Bd2",
    eco: "C17",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Perseus Gambit-Carlson Gambit",
    fen: "rnbqkbnr/ppp2ppp/4p3/4N3/3Pp3/8/PPP2PPP/RNBQKB1R b KQkq - 1 4",
    moves: "e4 e6 d4 d5 Nf3 dxe4 Ne5",
    eco: "C01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Alekhine Defence-Normal Variation-Kmoch Variation",
    fen: "rnbqkb1r/pp1ppppp/1n6/2p1P3/8/1B1P4/PPP2PPP/RNBQK1NR b KQkq - 0 5",
    moves: "e4 Nf6 e5 Nd5 Bc4 Nb6 Bb3 c5 d3",
    eco: "B02",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Alekhine Defence-Normal Variation-Exchange Variation",
    fen: "rnbqkb1r/ppp1pppp/1n1P4/8/2PP4/8/PP3PPP/RNBQKBNR b KQkq - 0 5",
    moves: "e4 Nf6 e5 Nd5 d4 d6 c4 Nb6 exd6",
    eco: "B03",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Alekhine Defence-Normal Variation-4 Pawns Attack",
    fen: "rnbqkb1r/ppp1pppp/1n1p4/4P3/2PP1P2/8/PP4PP/RNBQKBNR b KQkq - 0 5",
    moves: "e4 Nf6 e5 Nd5 d4 d6 c4 Nb6 f4",
    eco: "B03",
    difficulty: "Medium"
  },
  {
    name: "Alekhine Defence-Normal Variation-Modern Variation-Alekhine Variation",
    fen: "rn1qkb1r/ppp1pppp/3p4/3nP3/2PP2b1/5N2/PP3PPP/RNBQKB1R b KQkq - 0 5",
    moves: "e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4 c4",
    eco: "B05",
    difficulty: "Medium"
  },
  {
    name: "Alekhine Defence-Normal Variation-Modern Variation-Panov Variation",
    fen: "rn1qkb1r/ppp1pppp/3p4/3nP3/3P2b1/5N1P/PPP2PP1/RNBQKB1R b KQkq - 0 5",
    moves: "e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4 h3",
    eco: "B05",
    difficulty: "Medium"
  },
  {
    name: "Bird System-Dutch Variation-Williams Gambit-Williams-Zilbermints Gambit",
    fen: "rnbqkb1r/ppp1pppp/5n2/8/4pP2/2N5/PPPPN1PP/R1BQKB1R b KQkq - 3 4",
    moves: "f4 d5 e4 dxe4 Nc3 Nf6 Nge2",
    eco: "A03",
    difficulty: "Medium"
  },
  {
    name: "Grob Attack-Grob Gambit Declined-Richter-Grob Gambit",
    fen: "rnbqkbnr/pp2pppp/2p5/8/2p3P1/1P6/P2PPPBP/RNBQK1NR b KQkq - 0 4",
    moves: "g4 d5 Bg2 c6 c4 dxc4 b3",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Grob Attack-Zilbermints Gambit-Zilbermints-Hartlaub Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/4p3/4p1P1/2NP4/PPP2P1P/R1BQKBNR b KQkq - 0 4",
    moves: "g4 d5 e4 dxe4 Nc3 e5 d3",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-Nimzowitsch-Larsen Attack-Paschmann Gambit",
    fen: "rnbqkbnr/pp2pppp/8/2p5/2p5/1P2PN2/P2P1PPP/RNBQKB1R b KQkq - 0 4",
    moves: "Nf3 d5 b3 c5 c4 dxc4 e3",
    eco: "A06",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-Nimzowitsch-Larsen Attack-Regina-Nu Gambit",
    fen: "rnbqkbnr/pp2pppp/8/2p5/2p5/1PN2N2/P2PPPPP/R1BQKB1R b KQkq - 1 4",
    moves: "Nf3 d5 b3 c5 c4 dxc4 Nc3",
    eco: "A06",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-Nimzowitsch-Larsen Attack-Norfolk Gambit 1",
    fen: "rnbqkb1r/pp2pppp/5n2/2pp4/4P3/1P3N2/PBPP1PPP/RN1QKB1R b KQkq - 0 4",
    moves: "Nf3 d5 b3 Nf6 Bb2 c5 e4",
    eco: "A01",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Réti Gambit-Anglo-Slav Variation-Bogoljubov Variation",
    fen: "rnbqkb1r/pp2pppp/2p2n2/3p4/2P5/1P3N2/PB1PPPPP/RN1QKB1R b KQkq - 2 4",
    moves: "Nf3 d5 c4 c6 b3 Nf6 Bb2",
    eco: "A12",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Symmetrical Variation-Normal Variation-3 Knights System",
    fen: "rnbqkb1r/pp2pppp/8/2pn4/8/2N2N2/PP1PPPPP/R1BQKB1R w KQkq - 0 5",
    moves: "c4 c5 Nc3 Nf6 Nf3 d5 cxd5 Nxd5",
    eco: "A34",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Symmetrical Variation-Anti-Benoni Formation-Spielmann Defence",
    fen: "rnbqkb1r/pp1p1ppp/4pn2/8/2PN4/8/PP2PPPP/RNBQKB1R w KQkq - 0 5",
    moves: "c4 c5 Nf3 Nf6 d4 cxd4 Nxd4 e6",
    eco: "A32",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Symmetrical Variation-Hedgehog System",
    fen: "rn1qk2r/pb1pbppp/1p2pn2/2p5/2P5/2N2NP1/PP1PPPBP/R1BQ1RK1 w kq - 2 7",
    moves: "c4 c5 Nf3 Nf6 g3 b6 Bg2 Bb7 O-O e6 Nc3 Be7",
    eco: "A30",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Agincourt Defence-Agincourt Variation-Neo-Catalan Accepted",
    fen: "rnbqkb1r/ppp2ppp/4pn2/8/2p5/5NP1/PP1PPPBP/RNBQK2R w KQkq - 0 5",
    moves: "c4 e6 Nf3 d5 g3 Nf6 Bg2 dxc4",
    eco: "A13",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-English Defence #2-Blumenfeld-Hiva Gambit",
    fen: "rnbqkbnr/p2p2pp/4p3/1PpP1p2/4P3/8/PP3PPP/RNBQKBNR w KQkq - 0 6",
    moves: "d4 b6 c4 c5 d5 e6 e4 b5 cxb5 f5",
    eco: "A50",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Blackmar-Diemer Gambit-Hübsch Variation",
    fen: "rnbqkb1r/ppp1pppp/8/3p4/3Pn3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 4",
    moves: "d4 d5 Nc3 Nf6 e4 Nxe4",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Charlick Gambit Complex-Englund Variation-Felbecker Gambit",
    fen: "r1bqk1nr/pppp1ppp/2n5/2b1P3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq - 3 4",
    moves: "d4 e5 dxe5 Nc6 Nf3 Bc5",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "Modern Defence-Pterodactyl Defence-Fianchetto Variation-Queen Benoni Pterodactyl Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1pP4/2P5/2N5/PP2PPPP/R1BQKBNR w KQkq - 1 5",
    moves: "d4 g6 c4 Bg7 Nc3 c5 d5 Qa5",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Modern Defence-Rhamprhynchus Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1P5/8/4PN2/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    moves: "d4 g6 Nf3 Bg7 e3 c5 dxc5 Qa5+",
    eco: "D05",
    difficulty: "Medium"
  },
  {
    name: "East Indian Defence-Catalan Opening-Closed Variation-Open Defence",
    fen: "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/6P1/PP2PPBP/RNBQK1NR w KQkq - 0 5",
    moves: "d4 Nf6 c4 e6 g3 d5 Bg2 dxc4",
    eco: "E02",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Classical Variation-Berlin Variation",
    fen: "rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/2N5/PPQ1PPPP/R1B1KBNR w KQkq - 0 5",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 c5",
    eco: "E38",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Classical Variation-Noa Variation",
    fen: "rnbqk2r/ppp2ppp/4pn2/3p4/1bPP4/2N5/PPQ1PPPP/R1B1KBNR w KQkq - 0 5",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 d5",
    eco: "E34",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Classical Variation-Zurich/Milner-Barry Variation",
    fen: "r1bqk2r/pppp1ppp/2n1pn2/8/1bPP4/2N5/PPQ1PPPP/R1B1KBNR w KQkq - 4 5",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 Nc6",
    eco: "E33",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Grünfeld Defence-Sämisch Attack-Landau Variation",
    fen: "rnbqk2r/ppp1ppbp/5np1/3p4/2PP1B2/2N5/PP2PPPP/R2QKBNR w KQkq - 2 5",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Bf4 Bg7",
    eco: "D82",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Grünfeld Defence-Exchange Variation",
    fen: "rnbqkb1r/ppp1pp1p/6p1/3n4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 5",
    moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5",
    eco: "D85",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-St. George Defence-San Jorge Variation",
    fen: "rn1qk1nr/1bp1ppbp/p2p2p1/1p6/3PP3/2PB1N2/PP3PPP/RNBQ1RK1 w kq - 1 7",
    moves: "e4 a6 d4 b5 Nf3 Bb7 Bd3 d6 O-O g6 c3 Bg7",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-O'Kelly Variation-Normal System-Taimanov Line",
    fen: "rnbqkbnr/1p1p1ppp/p7/4p3/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 c5 Nf3 a6 d4 cxd4 Nxd4 e5",
    eco: "B28",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-O'Kelly Variation-Normal System-Kan Line",
    fen: "rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 c5 Nf3 a6 d4 cxd4 Nxd4 e6",
    eco: "B28",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Kopec Variation-Canal-Sokolsky Attack-Main Line",
    fen: "rn1qkbnr/pp1bpppp/3p4/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 4",
    moves: "e4 c5 Nf3 d6 Bb5+ Bd7",
    eco: "B52",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Kopec Variation-Canal-Sokolsky Attack-Nimzovich Variation",
    fen: "r1bqkbnr/pp2pppp/2np4/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 4",
    moves: "e4 c5 Nf3 d6 Bb5+ Nc6",
    eco: "B51",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Kopec Variation-Normal Variation-Dragon Variation",
    fen: "rnbqkbnr/pp2pp1p/3p2p1/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 g6",
    eco: "B54",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Kopec Variation-Normal Variation-Benko/Main Variation",
    fen: "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6",
    eco: "B54",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Kopec Variation-Cortlever Variation Accepted",
    fen: "rnbqkb1r/pp2pppp/3p4/2P5/4n3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 c5 Nf3 d6 d4 Nf6 dxc5 Nxe4",
    eco: "B53",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Paulsen Variation-Open Variation-Kan Variation",
    fen: "rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6",
    eco: "B41",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Open Variation-Taimanov/Barnes Variation",
    fen: "r1bqkbnr/pp1p1ppp/2n1p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6",
    eco: "B44",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Paulsen Variation-Open Variation-Anderssen/Normal Counterattack",
    fen: "rnbqkb1r/pp1p1ppp/4pn2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nf6",
    eco: "B40",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Old Sicilian Defence-Nimzowitsch-Rossolimo Attack-Anderssen Variation",
    fen: "r1bqkbnr/pp1p1ppp/4p3/1Bp5/3nP3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 2 5",
    moves: "e4 c5 Nf3 Nc6 Bb5 e6 Nc3 Nd4",
    eco: "B30",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Old Sicilian Defence-Open Variation-Nimzowitsch/Nimzo-American Variation",
    fen: "r1bqkbnr/pp2pppp/2n5/3p4/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 d5",
    eco: "B32",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Old Sicilian Defence-Open Variation-Labourdonnais-Löwenthal Variation",
    fen: "r1bqkbnr/pp1p1ppp/2n5/4p3/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e5",
    eco: "B32",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Old Sicilian Defence-Open Variation-Accelerated Dragon",
    fen: "r1bqkbnr/pp1ppp1p/2n3p1/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6",
    eco: "B32",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Old Sicilian Defence-Open Variation-Pelikán/Normal Variation",
    fen: "r1bqkb1r/pp1ppppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6",
    eco: "B33",
    difficulty: "Medium"
  },
  {
    name: "Caro-Kann Defence-Traditional Variation-Main Line-Finnish Variation",
    fen: "rnbqkbnr/pp2ppp1/2p4p/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 0 5",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 h6",
    eco: "B16",
    difficulty: "Medium"
  },
  {
    name: "Caro-Kann Defence-Traditional Variation-Main Line-Steinitz/Karpov Variation",
    fen: "r1bqkbnr/pp1npppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 1 5",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7",
    eco: "B17",
    difficulty: "Medium"
  },
  {
    name: "Caro-Kann Defence-Traditional Variation-Main Line-Knight Variation",
    fen: "rnbqkb1r/pp2pppp/2p2n2/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 1 5",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nf6",
    eco: "B15",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-2 Knights Attack-Mindeno Variation-Retreat Line",
    fen: "rn1qkbnr/pp2pppp/2p5/3p3b/4P3/2N2N1P/PPPP1PP1/R1BQKB1R w KQkq - 1 5",
    moves: "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bh5",
    eco: "B11",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Countergambit-Blackburne-Kloosterboer Gambit-Blackburne Gambit",
    fen: "r1bqkbnr/pp2pppp/2n5/8/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 4",
    moves: "e4 d5 exd5 c6 dxc6 Nxc6",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "Centre Countergambit-Modern Variation-Marshall Variation-Kiel Variation",
    fen: "rnbqkb1r/ppp1pppp/8/8/1nPP4/8/PP3PPP/RNBQKBNR w KQkq - 1 5",
    moves: "e4 d5 exd5 Nf6 d4 Nxd5 c4 Nb4",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "Centre Countergambit-Modern Variation-Marshall Variation-Richter Variation",
    fen: "rnbqkb1r/ppp1pp1p/6p1/3n4/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 d5 exd5 Nf6 d4 Nxd5 Nf3 g6",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Countergambit-Mieses-Kotroc Gambit-Main Lines",
    fen: "rnb1kbnr/ppp1pppp/8/q7/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 4",
    moves: "e4 d5 exd5 Qxd5 Nc3 Qa5",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "Philidor's Defence-Exchange Variation-Main Line-Knight Chase Variation",
    fen: "rnbqkbnr/pp3ppp/3p4/2p5/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 e5 Nf3 d6 d4 exd4 Nxd4 c5",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Exchange Variation-Larsen Variation",
    fen: "rnbqkbnr/ppp2p1p/3p2p1/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 e5 Nf3 d6 d4 exd4 Nxd4 g6",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "Italian Game-Giuoco Piano-Classical Variation-Closed Variation",
    fen: "r1b1k1nr/ppppqppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Qe7",
    eco: "C53",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Italian Game-Hungarian Defence-Benima Variation",
    fen: "r1bqk1nr/ppppbppp/2n5/8/2BpP3/5N2/PPP2PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Be7 d4 exd4",
    eco: "C50",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-2 Knights Defence-Open Variation-Dubois Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/8/2BpP3/5N2/PPP2PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4",
    eco: "C55",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-2 Knights Defence-Knight Attack-Gruber/Normal Variation",
    fen: "r1bqkb1r/ppp2ppp/2n2n2/3pp1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5",
    eco: "C57",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ponziani Opening-Caro Variation",
    fen: "r2qkbnr/pppb1ppp/2n5/3pp3/Q3P3/2P2N2/PP1P1PPP/RNB1KB1R w KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 c3 d5 Qa4 Bd7",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Ponziani Opening-Bird Variation",
    fen: "r1bqkbnr/ppp2ppp/2n5/4p3/Q3p3/2P2N2/PP1P1PPP/RNB1KB1R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 c3 d5 Qa4 dxe4",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Benima's Defence",
    fen: "r1bqk1nr/ppppbppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Be7",
    eco: "C45",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Schmidt/Schmid Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6",
    eco: "C45",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Pulling Counterattack",
    fen: "r1b1kbnr/pppp1ppp/2n5/8/3NP2q/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Qh4",
    eco: "C45",
    difficulty: "Medium"
  },
  {
    name: "King's Knight's Opening-4 Knights Game-Italian Variation-Main Line",
    fen: "r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bc4 Nxe4",
    eco: "C46",
    difficulty: "Medium"
  },
  {
    name: "Petrov's Defence-Symmetrical Variation-Centre Variation-Murrey Variation",
    fen: "r1bqkb1r/pppp1ppp/2n5/4p3/3Pn3/3B1N2/PPP2PPP/RNBQK2R w KQkq - 2 5",
    moves: "e4 e5 Nf3 Nf6 d4 Nxe4 Bd3 Nc6",
    eco: "C43",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Exchange Variation-Svenonius Variation",
    fen: "rnbqkb1r/ppp2ppp/5n2/3p4/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 2 5",
    moves: "e4 e6 d4 d5 exd5 exd5 Nc3 Nf6",
    eco: "C01",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Winawer Variation-Advance Variation-Petrosian Variation",
    fen: "rnb1k1nr/pppq1ppp/4p3/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 1 5",
    moves: "e4 e6 d4 d5 Nc3 Bb4 e5 Qd7",
    eco: "C16",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Paulsen Attack-MacCutcheon Variation",
    fen: "rnbqk2r/ppp2ppp/4pn2/3p2B1/1b1PP3/2N5/PPP2PPP/R2QKBNR w KQkq - 4 5",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Bb4",
    eco: "C12",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Tarrasch Variation-Open System-Exchange Variation",
    fen: "rnbqkbnr/pp3ppp/8/2pp4/3P4/8/PPPN1PPP/R1BQKBNR w KQkq - 0 5",
    moves: "e4 e6 d4 d5 Nd2 c5 exd5 exd5",
    eco: "C08",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Semi-Averbakh Variation-Polish Variation",
    fen: "rnb1k1nr/pp1pppbp/1q4p1/2p5/2PPP3/5N2/PP3PPP/RNBQKB1R w KQkq - 2 5",
    moves: "e4 g6 d4 Bg7 c4 c5 Nf3 Qb6",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Dunworthy Variation",
    fen: "rnbqk1nr/pp2pp1p/2P3p1/8/2Pb4/8/PP3PPP/RNBQKBNR w KQkq - 0 6",
    moves: "e4 g6 d4 Bg7 c4 d5 exd5 c6 dxc6 Bxd4",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "Robatsch Defence-Modern Pterodactyl Variation-Eastern, Benoni Variation-Pterodactyl Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1pP4/4P3/2N5/PPP2PPP/R1BQKBNR w KQkq - 1 5",
    moves: "e4 g6 d4 Bg7 Nc3 c5 d5 Qa5",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Robatsch Defence-Standard Line-Modern Pterodactyl Variation-Pterodactyl Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 2 5",
    moves: "e4 g6 d4 Bg7 Nc3 c5 Nf3 Qa5",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Pterodactyl Defence-Western, Pterodactyl Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/2P2N2/PP3PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 g6 d4 Bg7 Nf3 c5 c3 Qa5",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch Defence-Centre Variation-Kennedy Variation-Bielefelder Gambit",
    fen: "r1bqk1nr/pppp1ppp/2n5/2b1P3/4P3/8/PPP2PPP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 Nc6 d4 e5 dxe5 Bc5",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch Defence-Centre Variation-Kennedy Variation-Riemann Defence",
    fen: "r1bqkbnr/pppp1ppp/2n5/8/4PP2/8/PPP3PP/RNBQKBNR w KQkq - 1 5",
    moves: "e4 Nc6 d4 e5 dxe5 Nxe5 f4 Nc6",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch Defence-Centre Variation-Kennedy Variation-Main Line",
    fen: "r1bqkbnr/pppp1ppp/6n1/8/4PP2/8/PPP3PP/RNBQKBNR w KQkq - 1 5",
    moves: "e4 Nc6 d4 e5 dxe5 Nxe5 f4 Ng6",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch Defence-Centre Variation-Kennedy Variation-Herford Gambit",
    fen: "r1b1kbnr/pppp1ppp/2n5/4P3/4P2q/8/PPP2PPP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 Nc6 d4 e5 dxe5 Qh4",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-Réti Gambit Accepted-Keres Variation",
    fen: "rn1qkbnr/ppp1pppp/4b3/8/2p5/4PN2/PP1P1PPP/RNBQKB1R w KQkq - 1 4",
    moves: "Nf3 d5 c4 dxc4 e3 Be6",
    eco: "A09",
    difficulty: "Medium"
  },
  {
    name: "Amar Opening-Paris Gambit-Amar Gambit",
    fen: "rn1qkbnr/ppp2ppp/8/3p4/5p2/6PB/PPPPP2P/RNBQK2R w KQkq - 0 5",
    moves: "Nh3 d5 g3 e5 f4 Bxh3 Bxh3 exf4",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Polish Opening-Orangutan-Hartlaub Gambit",
    fen: "rnbqkb1r/1p3ppp/2p1pn2/P2p4/4P3/P2P4/1BP2PPP/RN1QKBNR b KQkq - 0 6",
    moves: "b4 Nf6 Bb2 e6 a3 c6 d3 a5 bxa5 d5 e4",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Polish Opening-King's Indian Variation-Sokolsky Attack",
    fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/1PPP4/4PN2/PB3PPP/RN1QKB1R b KQ - 0 6",
    moves: "b4 Nf6 Bb2 g6 c4 Bg7 e3 d6 Nf3 O-O d4",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Closed System-Full Symmetry-Botvinnik System",
    fen: "r1bqk1nr/ppp2pbp/2np2p1/4p3/2P1P3/2NP2P1/PP3PBP/R1BQK1NR b KQkq - 0 6",
    moves: "c4 e5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6 e4",
    eco: "A26",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Agincourt Defence-English Defence-Hartlaub Gambit Declined",
    fen: "rn1qkbnr/pbpp2pp/1p2p3/3P1p2/2P1P3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 5",
    moves: "c4 e6 d4 b6 Nc3 Bb7 e4 f5 d5",
    eco: "A13",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Agincourt Defence-Agincourt Variation-Catalan Defence",
    fen: "rn1qkbnr/pbp2ppp/1p2p3/3p4/2P5/5NP1/PP1PPPBP/RNBQ1RK1 b kq - 3 5",
    moves: "c4 e6 Nf3 d5 g3 b6 Bg2 Bb7 O-O",
    eco: "A14",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-Chameleon Variation-Advance System",
    fen: "rnbqkb1r/1p2pppp/p1p2n2/2Pp4/3P4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 0 5",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 a6 c5",
    eco: "D15",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Albin Countergambit-Normal Line-Alapin/Modern Line",
    fen: "r1bqkbnr/ppp2ppp/2n5/4P3/2Pp4/5N2/PP1NPPPP/R1BQKB1R b KQkq - 3 5",
    moves: "d4 d5 c4 e5 dxe5 d4 Nf3 Nc6 Nbd2",
    eco: "D08",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Queen's Knight Variation-Accelerated Semi-Slav Defence-Portisch Gambit",
    fen: "rnbqkbnr/pp4pp/2p1p3/3p1p2/2PP2P1/2N1P3/PP3P1P/R1BQKBNR b KQkq - 0 5",
    moves: "d4 d5 c4 e6 Nc3 c6 e3 f5 g4",
    eco: "D31",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Accelerated Semi-Slav Defence-Marshall Gambit-Gunderam Gambit",
    fen: "rnbqkbnr/pp3ppp/2p1p3/8/2PPp3/2N2P2/PP4PP/R1BQKBNR b KQkq - 0 5",
    moves: "d4 d5 c4 e6 Nc3 c6 e4 dxe4 f3",
    eco: "D31",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-Semi-Slav Defence-Main Line",
    fen: "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R b KQkq - 0 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3",
    eco: "D45",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Anti-Noteboom Gambit",
    fen: "rnbqkbnr/pp3ppp/2p1p3/8/2pP4/2N2NP1/PP2PP1P/R1BQKB1R b KQkq - 0 5",
    moves: "d4 d5 c4 e6 Nf3 c6 Nc3 dxc4 g3",
    eco: "D31",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Richter-Veresov Attack-Veresov Variation",
    fen: "rn1qkb1r/ppp1pppp/5B2/3p1b2/3P4/2N5/PPP1PPPP/R2QKBNR b KQkq - 0 4",
    moves: "d4 d5 Nc3 Nf6 Bg5 Bf5 Bxf6",
    eco: "D01",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Grunfeld Reversed-Anti-Noteboom Gambit",
    fen: "rnbqkbnr/pp3ppp/2p1p3/8/2pP4/2N2NP1/PP2PP1P/R1BQKB1R b KQkq - 0 5",
    moves: "d4 d5 Nf3 c6 c4 e6 Nc3 dxc4 g3",
    eco: "D31",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Indian Defence-Trompowsky Attack-Poisoned Pawn Variation",
    fen: "rnb1kb1r/pp1ppppp/1q3n2/2pP2B1/8/2N5/PPP1PPPP/R2QKBNR b KQkq - 2 4",
    moves: "d4 Nf6 Bg5 c5 d5 Qb6 Nc3",
    eco: "A45",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Rubinstein Line-Bishop/Normal Attack",
    fen: "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2NBP3/PP3PPP/R1BQK1NR b KQ - 2 5",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3",
    eco: "E47",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Rubinstein Line-Landau Variation",
    fen: "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1PN2/PP3PPP/R1BQKB1R b KQ - 2 5",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3",
    eco: "E50",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Rubinstein Line-Reshevsky Variation",
    fen: "rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/2N1P3/PP2NPPP/R1BQKB1R b KQ - 2 5",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Ne2",
    eco: "E46",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-O'Kelly Variation-Normal System-Zagorovsky Line",
    fen: "rnbqkbnr/1p1ppppp/p7/8/3QP3/5N2/PPP2PPP/RNB1KB1R b KQkq - 0 4",
    moves: "e4 c5 Nf3 a6 d4 cxd4 Qxd4",
    eco: "B28",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Kopec Variation-Tartakower Variation-Chekhover Variation",
    fen: "rnbqkbnr/pp2pppp/3p4/8/3QP3/5N2/PPP2PPP/RNB1KB1R b KQkq - 0 4",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Qxd4",
    eco: "B53",
    difficulty: "Medium"
  },
  {
    name: "King's Knight's Gambit-Traditional Variation-Hanstein Gambit",
    fen: "rnbqk1nr/pppp1pbp/8/6p1/2B1Pp2/5N2/PPPP2PP/RNBQ1RK1 b kq - 3 5",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 Bg7 O-O",
    eco: "C38",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Rosentreter Gambit-Soerensen Gambit",
    fen: "rnbqkbnr/pppp1p1p/8/8/3PPpp1/2N2N2/PPP3PP/R1BQKB1R b KQkq - 1 5",
    moves: "e4 e5 f4 exf4 Nf3 g5 d4 g4 Nc3",
    eco: "C37",
    difficulty: "Medium"
  },
  {
    name: "Vienna Game-Stanley Variation-Modern Variation-Frankenstein-Dracula Variation",
    fen: "rnbqkb1r/pppp1ppp/8/4p2Q/2B1n3/2N5/PPPP1PPP/R1B1K1NR b KQkq - 1 4",
    moves: "e4 e5 Nc3 Nf6 Bc4 Nxe4 Qh5",
    eco: "C27",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Exchange Variation-Morphy Variation",
    fen: "rnbqkbnr/ppp2ppp/3p4/8/3QP3/5N2/PPP2PPP/RNB1KB1R b KQkq - 0 4",
    moves: "e4 e5 Nf3 d6 d4 exd4 Qxd4",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Hanham Variation-Krause Variation",
    fen: "r1bqkbnr/pp1n1ppp/2pp4/4p3/2BPP3/5N2/PPP2PPP/RNBQ1RK1 b kq - 1 5",
    moves: "e4 e5 Nf3 d6 d4 Nd7 Bc4 c6 O-O",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "Philidor's Defence-Hanham Variation-Lion Variation-Shirov Gambit",
    fen: "r1bqkb1r/pppn1ppp/3p1n2/4p3/3PP1P1/2N2N2/PPP2P1P/R1BQKB1R b KQkq - 0 5",
    moves: "e4 e5 Nf3 d6 d4 Nd7 Nc3 Ngf6 g4",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Cordel Defence-Zaitsev Variation",
    fen: "r1bqk1nr/pppp1ppp/8/1Bb1p3/1P1nP3/5N2/P1PP1PPP/RNBQ1RK1 b kq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 Bc5 O-O Nd4 b4",
    eco: "C64",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-2 Knights Defence-Koltanowski Variation",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2BPP3/5N2/PPP2PPP/RNBQ1RK1 b kq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 O-O Bc5 d4",
    eco: "C55",
    difficulty: "Medium"
  },
  {
    name: "4 Knights Game-Spanish Variation-Rubinstein Countergambit-Henneberger Variation",
    fen: "r1bqkb1r/pppp1ppp/5n2/1B2p3/3nP3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 7 5",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 O-O",
    eco: "C48",
    difficulty: "Medium"
  },
  {
    name: "Petrov's Defence-Modern Attack-Symmetrical Variation-Centre Variation",
    fen: "rnbqkb1r/pppp1ppp/8/4p3/3Pn3/3B1N2/PPP2PPP/RNBQK2R b KQkq - 1 4",
    moves: "e4 e5 Nf3 Nf6 d4 Nxe4 Bd3",
    eco: "C43",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Greco Defence-LaBourdonnais Gambit",
    fen: "rnb1kbnr/pppp1ppp/6q1/4p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 5 4",
    moves: "e4 e5 Nf3 Qf6 Bc4 Qg6 O-O",
    eco: "C40",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Paulsen Attack-Winawer Variation-Delayed Exchange Variation",
    fen: "rnbqk1nr/ppp2ppp/4p3/3P4/1b1P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 4",
    moves: "e4 e6 d4 d5 Nc3 Bb4 exd5",
    eco: "C15",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch Defence-Centre Variation-Kennedy Variation-Keres Attack",
    fen: "r1bqkbnr/pppp1ppp/8/4n3/4P3/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 4",
    moves: "e4 Nc6 d4 e5 dxe5 Nxe5 Nc3",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch Defence-Centre Variation-Kennedy Variation-Paulsen Attack",
    fen: "r1bqkbnr/pppp1ppp/8/4n3/4P3/5N2/PPP2PPP/RNBQKB1R b KQkq - 1 4",
    moves: "e4 Nc6 d4 e5 dxe5 Nxe5 Nf3",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "Polish Opening-Katalymov Gambit-Katalymov-Jepisjin Variation",
    fen: "rnb1kbnr/1p2pppp/1qpp4/p7/1PP5/P7/1B1PPPPP/RN1QKBNR w KQkq - 0 5",
    moves: "b4 c6 Bb2 Qb6 a3 a5 c4 d6",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Fianchetto Variation-Ultra-Symmetrical Variation-Botvinnik System Reversed",
    fen: "r1bqk1nr/pp1p1pbp/2n3p1/2p1p3/2P5/2N1P1P1/PP1P1PBP/R1BQK1NR w KQkq - 0 6",
    moves: "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 e3 e5",
    eco: "A36",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Fianchetto Variation-Ultra-Symmetrical Line-Botvinnik System Reversed/Russian Variation",
    fen: "r1bqk1nr/pp1p1pbp/2n3p1/2p1p3/2P5/2N2NP1/PP1PPPBP/R1BQK2R w KQkq - 0 6",
    moves: "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 Nf3 e5",
    eco: "A37",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Fianchetto Variation-Ultra-Symmetrical Line-Full Symmetry Line",
    fen: "r1bqk2r/pp1pppbp/2n2np1/2p5/2P5/2N2NP1/PP1PPPBP/R1BQK2R w KQkq - 4 6",
    moves: "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 Nf3 Nf6",
    eco: "A38",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Taimanov Variation-Closed System-Full Symmetry",
    fen: "r1bqk1nr/ppp2pbp/2np2p1/4p3/2P5/2NP2P1/PP2PPBP/R1BQK1NR w KQkq - 0 6",
    moves: "c4 e5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6",
    eco: "A26",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Anglo-Indian Defence-King's Knight Variation-Romanishin Gambit",
    fen: "rnbqkb1r/2pp1ppp/p3pn2/1p6/2P5/5NP1/PP1PPPBP/RNBQK2R w KQkq - 0 5",
    moves: "c4 Nf6 Nf3 e6 g3 a6 Bg2 b5",
    eco: "A13",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Keres Defence-Pseudo-Chigorin Variation",
    fen: "r2qkbnr/ppp2ppp/2n1p3/3p1b2/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 2 5",
    moves: "d4 d5 c4 Bf5 Nc3 e6 Nf3 Nc6",
    eco: "D06",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Modern Line-Quiet Variation-Schallopp/Delmar Defence",
    fen: "rn1qkb1r/pp2pppp/2p2n2/3p1b2/2PP4/4PN2/PP3PPP/RNBQKB1R w KQkq - 1 5",
    moves: "d4 d5 c4 c6 Nf3 Nf6 e3 Bf5",
    eco: "D12",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Modern Line-Quiet Variation-Pin Defence",
    fen: "rn1qkb1r/pp2pppp/2p2n2/3p4/2PP2b1/4PN2/PP3PPP/RNBQKB1R w KQkq - 1 5",
    moves: "d4 d5 c4 c6 Nf3 Nf6 e3 Bg4",
    eco: "D12",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Modern Line-3 Knights Variation-Süchting Variation",
    fen: "rnb1kb1r/pp2pppp/1qp2n2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 4 5",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 Qb6",
    eco: "D15",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Accepted-Normal Variation-Alekhine Defence-Haberditz Variation",
    fen: "rnbqkbnr/2p1pppp/p7/1p6/2pP4/4PN2/PP3PPP/RNBQKB1R w KQkq - 0 5",
    moves: "d4 d5 c4 dxc4 Nf3 a6 e3 b5",
    eco: "D22",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Normal Variation-Traditional System",
    fen: "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/4PN2/PP3PPP/RNBQKB1R w KQkq - 0 5",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6",
    eco: "D26",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Normal Variation-Smyslov Variation",
    fen: "rnbqkb1r/ppp1pp1p/5np1/8/2pP4/4PN2/PP3PPP/RNBQKB1R w KQkq - 0 5",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 g6",
    eco: "D25",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Queen's Knight Variation-Accelerated Semi-Slav Defence-Noteboom Variation",
    fen: "rnbqkbnr/pp3ppp/2p1p3/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
    moves: "d4 d5 c4 e6 Nc3 c6 Nf3 dxc4",
    eco: "D31",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Normal Defence-Modern Variation-Pillsbury Variation",
    fen: "rnbqk2r/ppp1bppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq - 4 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7",
    eco: "D53",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Normal Defence-Modern Variation-Been-Koomen Variation",
    fen: "rnbqkb1r/pp3ppp/4pn2/2pp2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq - 0 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 c5",
    eco: "D50",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Normal Defence-Modern Variation-Knight Defence",
    fen: "r1bqkb1r/pppn1ppp/4pn2/3p2B1/2PP4/2N5/PP2PPPP/R2QKBNR w KQkq - 4 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7",
    eco: "D51",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Normal Defence-3 Knights Variation-Ragozin Defence",
    fen: "rnbqk2r/ppp2ppp/4pn2/3p4/1bPP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 4 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 Bb4",
    eco: "D38",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Normal Defence-3 Knights Variation-Vienna Variation",
    fen: "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 dxc4",
    eco: "D44",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Traditional Variation-Capablanca-Duras Variation",
    fen: "rnbqkb1r/ppp2pp1/4pn1p/3p2B1/2PP4/5N2/PP2PPPP/RN1QKB1R w KQkq - 0 5",
    moves: "d4 d5 c4 e6 Nf3 Nf6 Bg5 h6",
    eco: "D30",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Ritter Defence",
    fen: "rnbqkb1r/p1p1pppp/1p3n2/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq - 0 6",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 b6",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Kaulich Defence",
    fen: "rnbqkb1r/pp2pppp/5n2/2p5/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq - 0 6",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 c5",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Ziegler Defence",
    fen: "rnbqkb1r/pp2pppp/2p2n2/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq - 0 6",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 c6",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Euwe Defence",
    fen: "rnbqkb1r/ppp2ppp/4pn2/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq - 0 6",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 e6",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Bogoljubov Defence",
    fen: "rnbqkb1r/ppp1pp1p/5np1/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq - 0 6",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 g6",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Rook Pawn Defence",
    fen: "rnbqkb1r/ppp1ppp1/5n2/7p/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq - 0 6",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 h5",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Schlutter Defence",
    fen: "r1bqkb1r/pppnpppp/5n2/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq - 1 6",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 Nbd7",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Pietrowsky Defence",
    fen: "r1bqkb1r/ppp1pppp/2n2n2/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq - 1 6",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 Nc6",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Rat Defence-Modern Defence-Averbakh System-Pterodactyl Defence",
    fen: "rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQkq - 2 6",
    moves: "d4 d6 c4 g6 Nc3 Bg7 e4 c5 Nf3 Qa5",
    eco: "A42",
    difficulty: "Medium"
  },
  {
    name: "Dutch Defence-Normal Variation-Fianchetto Variation-Dutch-Indian/Nimzo-Dutch/Bogo-Indian Variation",
    fen: "rnbqk2r/pppp2pp/4pn2/5p2/1bPP4/6P1/PP2PPBP/RNBQK1NR w KQkq - 2 5",
    moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Bb4+",
    eco: "A90",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Indian Defence-Normal Variation-Benko Gambit half Accepted",
    fen: "rnbqkb1r/3ppppp/p4n2/1PpP4/8/8/PP2PPPP/RNBQKBNR w KQkq - 0 5",
    moves: "d4 Nf6 c4 c5 d5 b5 cxb5 a6",
    eco: "A57",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Modern Benoni Defence (Knight's Tour Variation)",
    fen: "rnbqkb1r/pp3p1p/3p1np1/2pP4/8/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 7",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 Nf3 g6",
    eco: "A61",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Budapest Gambit-Fajarowicz Variation-Bonsdorf Variation",
    fen: "rnbqkb1r/p1pp1ppp/1p6/4P3/2P1n3/P7/1P2PPPP/RNBQKBNR w KQkq - 0 5",
    moves: "d4 Nf6 c4 e5 dxe5 Ne4 a3 b6",
    eco: "A51",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Budapest Gambit-Normal Variation-Balogh/Tartakower Gambit",
    fen: "rnbqkb1r/ppp2ppp/3p4/4P3/2P1P1n1/8/PP3PPP/RNBQKBNR w KQkq - 0 5",
    moves: "d4 Nf6 c4 e5 dxe5 Ng4 e4 d6",
    eco: "A52",
    difficulty: "Medium"
  },
  {
    name: "Nimzo-Indian Defence-St. Petersburg Variation-Fischer Variation-Bronstein/Byrne Variation",
    fen: "rn1qk2r/p1pp1ppp/bp2pn2/8/1bPP4/2N1P3/PP2NPPP/R1BQKB1R w KQkq - 2 6",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 b6 Ne2 Ba6",
    eco: "E45",
    difficulty: "Medium"
  },
  {
    name: "Nimzo-Indian Defence-3 Knights Variation-Korchnoi Variation-Euwe Variation",
    fen: "rnbqk2r/pp1p1ppp/4p3/2pP4/1bP1n3/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 1 6",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Nf3 c5 d5 Ne4",
    eco: "E21",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Indian Defence-Petrosian System-Farago Defence",
    fen: "rn1qkb1r/pbpp1ppp/1p2pn2/8/2PP4/P4N2/1PQ1PPPP/RNB1KB1R w KQkq - 3 6",
    moves: "d4 Nf6 c4 e6 Nf3 b6 a3 Ba6 Qc2 Bb7",
    eco: "E12",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Indian Defence-Fianchetto Traditional Variation-Traditional/Classical Variation",
    fen: "rn1qk2r/pbppbppp/1p2pn2/8/2PP4/5NP1/PP2PPBP/RNBQK2R w KQkq - 3 6",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7",
    eco: "E17",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Indian Defence-Fianchetto Traditional Variation-Sämisch Variation",
    fen: "rn1qkb1r/pb1p1ppp/1p2pn2/2p5/2PP4/5NP1/PP2PPBP/RNBQK2R w KQkq - 0 6",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 c5",
    eco: "E15",
    difficulty: "Medium"
  },
  {
    name: "Queen's Indian Defence-Kasparov Variation-Kasparov-Petrosian Variation-Marco Defence",
    fen: "rn1qk2r/pbppbppp/1p2pn2/8/2PP4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq - 1 6",
    moves: "d4 Nf6 c4 e6 Nf3 b6 Nc3 Bb7 a3 Be7",
    eco: "E12",
    difficulty: "Medium"
  },
  {
    name: "Queen's Indian Defence-Kasparov Variation-Kasparov-Petrosian Variation-Main Line",
    fen: "rn1qkb1r/pbp2ppp/1p2pn2/3p4/2PP4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq - 0 6",
    moves: "d4 Nf6 c4 e6 Nf3 b6 Nc3 Bb7 a3 d5",
    eco: "E12",
    difficulty: "Medium"
  },
  {
    name: "Queen's Indian Defence-Kasparov Variation-Kasparov-Petrosian Variation-Hedgehog Variation",
    fen: "rn1qkb1r/pbpp1p1p/1p2pnp1/8/2PP4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq - 0 6",
    moves: "d4 Nf6 c4 e6 Nf3 b6 Nc3 Bb7 a3 g6",
    eco: "E17",
    difficulty: "Medium"
  },
  {
    name: "Queen's Indian Defence-Kasparov Variation-Kasparov-Petrosian Variation-Andersson Variation",
    fen: "rn1qkb1r/pbpp1ppp/1p2p3/8/2PPn3/P1N2N2/1P2PPPP/R1BQKB1R w KQkq - 1 6",
    moves: "d4 Nf6 c4 e6 Nf3 b6 Nc3 Bb7 a3 Ne4",
    eco: "E12",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Bogo-Indian Defence-Wade-Smyslov Variation",
    fen: "rnbqk2r/1ppp1ppp/4pn2/p7/1bPP4/5N2/PP1BPPPP/RN1QKB1R w KQkq - 0 5",
    moves: "d4 Nf6 c4 e6 Nf3 Bb4+ Bd2 a5",
    eco: "E11",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Bogo-Indian Defence-Retreat Variation",
    fen: "rnbqk2r/ppppbppp/4pn2/8/2PP4/5N2/PP1BPPPP/RN1QKB1R w KQkq - 4 5",
    moves: "d4 Nf6 c4 e6 Nf3 Bb4+ Bd2 Be7",
    eco: "E11",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Bogo-Indian Defence-Vitolinsh Variation",
    fen: "rnbqk2r/pp1p1ppp/4pn2/2p5/1bPP4/5N2/PP1BPPPP/RN1QKB1R w KQkq - 0 5",
    moves: "d4 Nf6 c4 e6 Nf3 Bb4+ Bd2 c5",
    eco: "E11",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Bogo-Indian Defence-Haiti Variation",
    fen: "r1bqk2r/pppp1ppp/2n1pn2/8/1bPP4/5N2/PP1BPPPP/RN1QKB1R w KQkq - 4 5",
    moves: "d4 Nf6 c4 e6 Nf3 Bb4+ Bd2 Nc6",
    eco: "E11",
    difficulty: "Medium"
  },
  {
    name: "King's Indian Defence-Normal Variation-Sämisch Variation-Accelerated Byrne Variation",
    fen: "rnbqk2r/pp2ppbp/2pp1np1/8/2PPP3/2N2P2/PP4PP/R1BQKBNR w KQkq - 0 6",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 c6",
    eco: "E80",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-O'Kelly Variation-Venice System-Gambit Line",
    fen: "rnbqkb1r/1p2pppp/p4n2/2pP4/8/2P2N2/PP1P1PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 c5 Nf3 a6 c3 d5 exd5 Nf6",
    eco: "B28",
    difficulty: "Medium"
  },
  {
    name: "Caro-Kann Defence-Traditional Variation-Gurgenidze System-Robatsch Variation",
    fen: "rnbqk1nr/pp2ppb1/2p3p1/3pP2p/3P1P2/2N5/PPP3PP/R1BQKBNR w KQkq - 0 6",
    moves: "e4 c6 d4 d5 Nc3 g6 e5 Bg7 f4 h5",
    eco: "B15",
    difficulty: "Medium"
  },
  {
    name: "Centre Countergambit-Modern Variation-Richter Variation-Wing Gambit",
    fen: "rnbqkb1r/p1p1pp1p/5np1/1p1P4/2PP4/8/PP3PPP/RNBQKBNR w KQkq - 0 5",
    moves: "e4 d5 exd5 Nf6 d4 g6 c4 b5",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Pirc Defence-Austrian Attack-Dragon Formation",
    fen: "rnbqk2r/pp2ppbp/3p1np1/2p5/3PPP2/2N2N2/PPP3PP/R1BQKB1R w KQkq - 0 6",
    moves: "e4 d6 d4 Nf6 Nc3 g6 f4 Bg7 Nf3 c5",
    eco: "B09",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Classical Variation-Classical/Rubinstein Countergambit",
    fen: "rnbqk1nr/ppp3pp/3p4/2b1pp2/4PP2/2P2N2/PP1P2PP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 e5 f4 Bc5 Nf3 d6 c3 f5",
    eco: "C30",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Classical Variation-Hanham Variation",
    fen: "r1bqk1nr/pppn1ppp/3p4/2b1p3/4PP2/2N2N2/PPPP2PP/R1BQKB1R w KQkq - 2 5",
    moves: "e4 e5 f4 Bc5 Nf3 d6 Nc3 Nd7",
    eco: "C30",
    difficulty: "Medium"
  },
  {
    name: "King's Gambit Declined-Falkbeer Countergambit Accepted-Nimzowitsch-Marshall Countergambit-Pickler Gambit",
    fen: "rnbqk1nr/pp3ppp/2P5/2b1p3/5P2/8/PPPP2PP/RNBQKBNR w KQkq - 1 5",
    moves: "e4 e5 f4 d5 exd5 c6 dxc6 Bc5",
    eco: "C31",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Accepted-Lesser Bishop's Gambit-Weiss Defence",
    fen: "rnbqkbnr/ppp3pp/3p4/5P2/5p2/8/PPPPB1PP/RNBQK1NR w KQkq - 0 5",
    moves: "e4 e5 f4 exf4 Be2 f5 exf5 d6",
    eco: "C33",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Cunningham Gambit-Euwe/McCormick Defence",
    fen: "rnbqk2r/ppppbppp/5n2/8/2B1Pp2/5N2/PPPP2PP/RNBQK2R w KQkq - 4 5",
    moves: "e4 e5 f4 exf4 Nf3 Be7 Bc4 Nf6",
    eco: "C35",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Modern Defence-Abbazia/Modern Defence",
    fen: "rnbqkb1r/ppp2ppp/5n2/3P4/5p2/5N2/PPPP2PP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 e5 f4 exf4 Nf3 d5 exd5 Nf6",
    eco: "C36",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit-Panteldakis Countergambit-Greco Variation",
    fen: "rnb1kbnr/pppp2pp/8/4pP2/5P1q/8/PPPP2PP/RNBQKBNR w KQkq - 1 4",
    moves: "e4 e5 f4 f5 exf5 Qh4+",
    eco: "C30",
    difficulty: "Medium"
  },
  {
    name: "Vienna Game-Max Lange Defence-Vienna Gambit-Quelle Gambit",
    fen: "r1bqk1nr/ppp2ppp/2np4/2b1P3/4P3/2N5/PPPP2PP/R1BQKBNR w KQkq - 0 5",
    moves: "e4 e5 Nc3 Nc6 f4 Bc5 fxe5 d6",
    eco: "C25",
    difficulty: "Medium"
  },
  {
    name: "Vienna Game-Falkbeer Variation-Stanley Variation-Eifel Gambit",
    fen: "rnbqk2r/p1pp1ppp/5n2/1pb1p3/2B1P3/2N5/PPPPNPPP/R1BQK2R w KQkq - 0 5",
    moves: "e4 e5 Nc3 Nf6 Bc4 Bc5 Nge2 b5",
    eco: "C26",
    difficulty: "Medium"
  },
  {
    name: "Vienna Game-Falkbeer Variation-Paulsen-Mieses Variation-Erben Gambit",
    fen: "rnbqkb1r/pp3ppp/2p2n2/3Pp3/8/2N3P1/PPPP1P1P/R1BQKBNR w KQkq - 0 5",
    moves: "e4 e5 Nc3 Nf6 g3 d5 exd5 c6",
    eco: "C26",
    difficulty: "Medium"
  },
  {
    name: "Philidor's Defence-Jaenisch Variation-Improved Hanham Variation-Lion Variation",
    fen: "r1bqk2r/pppnbppp/3p1n2/4p3/2BPP3/2N2N2/PPP2PPP/R1BQK2R w KQkq - 5 6",
    moves: "e4 e5 Nf3 d6 d4 Nf6 Nc3 Nbd7 Bc4 Be7",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Jaenisch Variation-Improved Hanham Variation-Jansen Variation",
    fen: "r1bqkb1r/pppn1pp1/3p1n1p/4p3/2BPP3/2N2N2/PPP2PPP/R1BQK2R w KQkq - 0 6",
    moves: "e4 e5 Nf3 d6 d4 Nf6 Nc3 Nbd7 Bc4 h6",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Damiano Defence-Damiano Gambit-Chigorin Gambit",
    fen: "rnb1kbnr/ppp1q1pp/5p2/3p4/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 e5 Nf3 f6 Nxe5 Qe7 Nf3 d5",
    eco: "C40",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Caro Variation-Graz Variation",
    fen: "r1bqk1nr/2pp1ppp/p1n5/1pb1p3/4P3/1B3N2/PPPP1PPP/RNBQK2R w KQkq - 2 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 b5 Bb3 Bc5",
    eco: "C70",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Caro Variation-Taimanov/Chase/Wing/Accelerated Counterthrust/Norwegian Variation",
    fen: "r1bqkbnr/2pp1ppp/p7/np2p3/4P3/1B3N2/PPPP1PPP/RNBQK2R w KQkq - 2 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 b5 Bb3 Na5",
    eco: "C70",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Modern Steinitz Defence-Siesta Variation",
    fen: "r1bqkbnr/1pp3pp/p1np4/4pp2/B3P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 c3 f5",
    eco: "C74",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Brentano Gambit Deferred",
    fen: "r1bqkbnr/1ppp1p1p/p1n5/4p1p1/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 g5",
    eco: "C70",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Giuoco Piano-Evans Gambit Accepted",
    fen: "r1bqk1nr/pppp1ppp/2n5/4p3/1bB1P3/5N2/P1PP1PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4",
    eco: "C51",
    difficulty: "Medium"
  },
  {
    name: "Italian Game-Giuoco Piano-Classical Variation-Alexandre Gambit",
    fen: "r1bqk1nr/pppp2pp/2n5/2b1pp2/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 f5",
    eco: "C53",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-London Defence",
    fen: "r1bqk1nr/pppp1ppp/2n5/8/1bBpP3/5N2/PPP2PPP/RNBQK2R w KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bb4+",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Haxo Gambit",
    fen: "r1bqk1nr/pppp1ppp/2n5/2b5/2BpP3/5N2/PPP2PPP/RNBQK2R w KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bc5",
    eco: "C45",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Winawer Variation-Advance Variation-Retreat Variation",
    fen: "rnbqk1nr/pp3ppp/4p3/b1ppP3/3P4/P1N5/1PP2PPP/R1BQKBNR w KQkq - 1 6",
    moves: "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Ba5",
    eco: "C18",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Tarrasch Variation-Open System-Shaposhnikov Gambit",
    fen: "rnbqkb1r/pp3ppp/4pn2/2pP4/3P4/8/PPPN1PPP/R1BQKBNR w KQkq - 1 5",
    moves: "e4 e6 d4 d5 Nd2 c5 exd5 Nf6",
    eco: "C07",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Normal Variation-Classical Variation-Hoffmann Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/3p4/3PPp2/8/PPP1Q1PP/RNB1KBNR w KQkq - 0 5",
    moves: "e4 e6 d4 d5 Qe2 e5 f4 exf4",
    eco: "C01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Pterodactyl Defence-Central, Benoni, Pterodactyl Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1pP4/2P1P3/8/PP3PPP/RNBQKBNR w KQkq - 1 5",
    moves: "e4 g6 d4 Bg7 c4 c5 d5 Qa5+",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch Defence-Scandinavian Variation-Bogoljubov Variation-Nimzowitsch Gambit",
    fen: "r1bqkbnr/ppp1pppp/8/3Pn3/4p3/2N5/PPP2PPP/R1BQKBNR w KQkq - 1 5",
    moves: "e4 Nc6 d4 d5 Nc3 dxe4 d5 Ne5",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence-Centre Variation-Franco-Hiva Gambit 2",
    fen: "r1bqkb1r/pppp2pp/2n1pn2/5P2/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 1 5",
    moves: "e4 Nc6 d4 e6 Nc3 f5 exf5 Nf6",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence-Centre Variation-Franco-Hiva Gambit 1",
    fen: "r1bqkb1r/pppp2pp/2n1pn2/5P2/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 Nc6 d4 e6 Nf3 f5 exf5 Nf6",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "Alekhine Defence-Normal Variation-4 Pawns Attack-Fianchetto Variation",
    fen: "rnbqkb1r/ppp1pp1p/1n1p2p1/4P3/2PP1P2/8/PP4PP/RNBQKBNR w KQkq - 0 6",
    moves: "e4 Nf6 e5 Nd5 d4 d6 c4 Nb6 f4 g6",
    eco: "B03",
    difficulty: "Medium"
  },
  {
    name: "Alekhine Defence-Normal Variation-Modern Variation-Flohr Variation",
    fen: "rn1qkb1r/pp2pppp/2pp4/3nP3/3P2b1/5N2/PPP1BPPP/RNBQK2R w KQkq - 0 6",
    moves: "e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4 Be2 c6",
    eco: "B05",
    difficulty: "Medium"
  },
  {
    name: "Réti Gambit-Anglo-Slav Variation-Bogoljubov Variation-New York System",
    fen: "rn1qkb1r/pp2pppp/2p2n2/3p1b2/2P5/1P3N2/PB1PPPPP/RN1QKB1R w KQkq - 3 5",
    moves: "Nf3 d5 c4 c6 b3 Nf6 Bb2 Bf5",
    eco: "A12",
    difficulty: "Medium"
  },
  {
    name: "Réti Gambit-Anglo-Slav Variation-Bogoljubov Variation-Capablanca Variation",
    fen: "rn1qkb1r/pp2pppp/2p2n2/3p4/2P3b1/1P3N2/PB1PPPPP/RN1QKB1R w KQkq - 3 5",
    moves: "Nf3 d5 c4 c6 b3 Nf6 Bb2 Bg4",
    eco: "A12",
    difficulty: "Medium"
  },
  {
    name: "Réti Gambit-Anglo-Slav Variation-Bogoljubov Variation-Bled Variation",
    fen: "rnbqkb1r/pp2pp1p/2p2np1/3p4/2P5/1P3N2/PB1PPPPP/RN1QKB1R w KQkq - 0 5",
    moves: "Nf3 d5 c4 c6 b3 Nf6 Bb2 g6",
    eco: "A12",
    difficulty: "Medium"
  },
  {
    name: "Réti Gambit-Anglo-Slav Variation-Bogoljubov Variation III-London Defensive System",
    fen: "rn1qkb1r/pp2pppp/2p2n2/3p1b2/2P5/1P3NP1/P2PPP1P/RNBQKB1R w KQkq - 1 5",
    moves: "Nf3 d5 c4 c6 b3 Nf6 g3 Bf5",
    eco: "A12",
    difficulty: "Medium"
  },
  {
    name: "Réti Gambit-Anglo-Slav Variation-Bogoljubov Variation III-Torre System",
    fen: "rn1qkb1r/pp2pppp/2p2n2/3p4/2P3b1/1P3NP1/P2PPP1P/RNBQKB1R w KQkq - 1 5",
    moves: "Nf3 d5 c4 c6 b3 Nf6 g3 Bg4",
    eco: "A12",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-Queen Pawn Defence-King's Indian Attack-Yugoslav Variation",
    fen: "rn1qkb1r/pp2pppp/2p2n2/3p4/6b1/5NP1/PPPPPPBP/RNBQ1RK1 w kq - 2 5",
    moves: "Nf3 d5 g3 Nf6 Bg2 c6 O-O Bg4",
    eco: "A07",
    difficulty: "Medium"
  },
  {
    name: "Anderssen's Opening-Hippopotamus Attack",
    fen: "r1bq1rk1/ppp2ppp/2nb1n2/3pp3/8/PPPPPPP1/7P/RNBQKBNR b KQ - 0 7",
    moves: "a3 e5 b3 d5 c3 Nf6 d3 Nc6 e3 Bd6 f3 O-O g3",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Saragossa Opening-Cabbage Attack",
    fen: "r1bq1rk1/ppp2ppp/2nb1n2/3pp3/P7/1PP1P1P1/1B1P1P1P/RN1QKBNR b KQ - 0 7",
    moves: "c3 e5 a3 d5 b3 Nf6 Bb2 Nc6 a4 Bd6 g3 O-O e3",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Keres Defence-Queen Attack Deferred",
    fen: "rn1qkbnr/ppp2ppp/4p3/3p1b2/2PP4/1QN5/PP2PPPP/R1B1KBNR b KQkq - 1 4",
    moves: "d4 d5 c4 Bf5 Nc3 e6 Qb3",
    eco: "D06",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Accepted-Saduleto Variation-McDonnel Defence-Somov Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/4p3/2BPP3/8/PP3PPP/RNBQK1NR b KQkq - 0 4",
    moves: "d4 d5 c4 dxc4 e4 e5 Bxc4",
    eco: "D20",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Queen's Knight Variation-Normal Defence-Harrwitz Attack",
    fen: "rnbqkb1r/ppp2ppp/4pn2/3p4/2PP1B2/2N5/PP2PPPP/R2QKBNR b KQkq - 3 4",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bf4",
    eco: "D35",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Chigorin Defence-Main Line-Alekhine Variation",
    fen: "r2qkbnr/ppp1pppp/2n5/3p4/Q1PP2b1/5N2/PP2PPPP/RNB1KB1R b KQkq - 4 4",
    moves: "d4 d5 c4 Nc6 Nf3 Bg4 Qa4",
    eco: "D07",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Lemberger Countergambit-Diemer Attack",
    fen: "rnbqkbnr/ppp2ppp/8/4p3/3Pp3/2N1B3/PPP2PPP/R2QKBNR b KQkq - 1 4",
    moves: "d4 d5 e4 dxe4 Nc3 e5 Be3",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Lemberger Countergambit-Endgame Variation",
    fen: "rnbqkbnr/ppp2ppp/8/4P3/4p3/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 4",
    moves: "d4 d5 e4 dxe4 Nc3 e5 dxe5",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Lemberger Countergambit-Simple Variation",
    fen: "rnbqkbnr/ppp2ppp/8/4p3/3PN3/8/PPP2PPP/R1BQKBNR b KQkq - 0 4",
    moves: "d4 d5 e4 dxe4 Nc3 e5 Nxe4",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Lemberger Countergambit-Sneiders Attack",
    fen: "rnbqkbnr/ppp2ppp/8/4p2Q/3Pp3/2N5/PPP2PPP/R1B1KBNR b KQkq - 1 4",
    moves: "d4 d5 e4 dxe4 Nc3 e5 Qh5",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Ryder Gambit",
    fen: "rnbqkb1r/ppp1pppp/5n2/8/3P4/2N2Q2/PPP3PP/R1B1KBNR b KQkq - 0 5",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Qxf3",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Symmetrical Variation-Queen's Bishop Game-Poisoned Pawn Variation",
    fen: "rnb1kb1r/pp2pppp/1q3n2/2pp4/3P1B2/2N1PN2/PPP2PPP/R2QKB1R b KQkq - 2 5",
    moves: "d4 d5 Nf3 Nf6 Bf4 c5 e3 Qb6 Nc3",
    eco: "D02",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Charlick Gambit Complex-Englund Variation-Stockholm Variation",
    fen: "r1b1kbnr/ppppqppp/2n5/3QP3/8/5N2/PPP1PPPP/RNB1KB1R b KQkq - 4 4",
    moves: "d4 e5 dxe5 Nc6 Nf3 Qe7 Qd5",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "Dutch Defence-Fianchetto Variation-Classical Variation-Blackburne Attack",
    fen: "rnbqk2r/ppppb1pp/4pn2/5p2/2PP4/6PN/PP2PPBP/RNBQK2R b KQkq - 3 5",
    moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nh3",
    eco: "A91",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Benko Gambit Declined-Bishop Attack",
    fen: "rnbqkb1r/p2ppppp/5n2/1ppP2B1/2P5/8/PP2PPPP/RN1QKBNR b KQkq - 1 4",
    moves: "d4 Nf6 c4 c5 d5 b5 Bg5",
    eco: "A57",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Budapest Gambit-Fajarowicz Variation-Steiner Variation",
    fen: "rnbqkb1r/pppp1ppp/8/4P3/2P1n3/8/PPQ1PPPP/RNB1KBNR b KQkq - 2 4",
    moves: "d4 Nf6 c4 e5 dxe5 Ne4 Qc2",
    eco: "A51",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Budapest Gambit-Normal Variation-Rubinstein Variation",
    fen: "rnbqkb1r/pppp1ppp/8/4P3/2P2Bn1/8/PP2PPPP/RN1QKBNR b KQkq - 2 4",
    moves: "d4 Nf6 c4 e5 dxe5 Ng4 Bf4",
    eco: "A52",
    difficulty: "Medium"
  },
  {
    name: "East Indian Defence-Catalan Opening-Closed Variation-Open Defence (Classical Variation)",
    fen: "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQK2R b KQkq - 1 5",
    moves: "d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3",
    eco: "E04",
    difficulty: "Medium"
  },
  {
    name: "Queen's Indian Defence-Fianchetto Variation-Nimzowitsch Variation-Timman's Line",
    fen: "rn1qkb1r/p1pp1ppp/bp2pn2/8/2PP4/1Q3NP1/PP2PP1P/RNB1KB1R b KQkq - 2 5",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Ba6 Qb3",
    eco: "E15",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Normal Variation-4 Pawns Attack",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/8/2PPPP2/2N5/PP4PP/R1BQKBNR b KQkq - 0 5",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4",
    eco: "E76",
    difficulty: "Medium"
  },
  {
    name: "King's Indian Defence-Grünfeld Defence-Exchange Variation-Kemeri Variation",
    fen: "rnbqkb1r/ppp1pp1p/6p1/3n4/3P4/2N3P1/PP2PP1P/R1BQKBNR b KQkq - 0 5",
    moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 g3",
    eco: "D85",
    difficulty: "Medium"
  },
  {
    name: "King's Indian Defence-Grünfeld Defence-3 Knights Variation-Hungarian Attack",
    fen: "rnbqk2r/ppp1ppbp/5np1/3p4/2PP1B2/2N2N2/PP2PPPP/R2QKB1R b KQkq - 3 5",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Bf4",
    eco: "D92",
    difficulty: "Medium"
  },
  {
    name: "King's Indian Defence-Grünfeld Defence-3 Knights Variation-Exchange Variation",
    fen: "rnbqk2r/ppp1ppbp/5np1/3P4/3P4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 0 5",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 cxd5",
    eco: "D90",
    difficulty: "Medium"
  },
  {
    name: "King's Indian Defence-Grünfeld Defence-3 Knights Variation-Russian Variation",
    fen: "rnbqk2r/ppp1ppbp/5np1/3p4/2PP4/1QN2N2/PP2PPPP/R1B1KB1R b KQkq - 3 5",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3",
    eco: "D96",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit Accepted-Danish Variation",
    fen: "rnbqkbnr/pp1ppppp/8/8/4P3/2p2N2/PP3PPP/RNBQKB1R b KQkq - 1 4",
    moves: "e4 c5 d4 cxd4 c3 dxc3 Nf3",
    eco: "B21",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Sicilian Defence-Kronberger Variation-Nemeth Gambit",
    fen: "r1bqkbnr/pp1ppppp/2n5/8/2BpP3/N7/PPP2PPP/R1BQK1NR b KQkq - 1 4",
    moves: "e4 c5 Na3 Nc6 d4 cxd4 Bc4",
    eco: "B20",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-O'Kelly Variation-Normal System-Cortlever Gambit",
    fen: "rnbqkbnr/1p1ppppp/p7/8/2BpP3/5N2/PPP2PPP/RNBQK2R b KQkq - 1 4",
    moves: "e4 c5 Nf3 a6 d4 cxd4 Bc4",
    eco: "B28",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Normal Variation-Dragon Variation-Maróczy Variation",
    fen: "rnbqkbnr/pp2pp1p/3p2p1/8/2PNP3/8/PP3PPP/RNBQKB1R b KQkq - 0 5",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 g6 c4",
    eco: "B54",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Kopec Variation-Benko Variation-Prins/Moscow Variation",
    fen: "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/5P2/PPP3PP/RNBQKB1R b KQkq - 0 5",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 f3",
    eco: "B54",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Kopec Variation-Benko Variation-Sozin Variation",
    fen: "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 2 5",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3",
    eco: "B56",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Open Variation-Kan Variation-Maroczy Bind/Réti Variation",
    fen: "rnbqkbnr/1p1p1ppp/p3p3/8/2PNP3/8/PP3PPP/RNBQKB1R b KQkq - 0 5",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 c4",
    eco: "B41",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Open Variation-Kan Variation-Knight Variation",
    fen: "rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 1 5",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Nc3",
    eco: "B43",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Open Variation-Taimanov Variation-Szén/Anti-Taimanov Variation",
    fen: "r1bqkbnr/pp1p1ppp/2n1p3/1N6/4P3/8/PPP2PPP/RNBQKB1R b KQkq - 2 5",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nb5",
    eco: "B44",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Open Variation-Taimanov Variation-Normal Variation",
    fen: "r1bqkbnr/pp1p1ppp/2n1p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 2 5",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3",
    eco: "B45",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Open Variation-Accelerated Dragon-Maróczy Bind",
    fen: "r1bqkbnr/pp1ppp1p/2n3p1/8/2PNP3/8/PP3PPP/RNBQKB1R b KQkq - 0 5",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4",
    eco: "B36",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Open Variation-Accelerated Dragon-Modern/Simagin Variation",
    fen: "r1bqkbnr/pp1ppp1p/2n3p1/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 1 5",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 Nc3",
    eco: "B34",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Hillbilly Attack-Schaeffer Gambit",
    fen: "rnbqkbnr/pp2pppp/2p5/7Q/4p3/1B6/PPPP1PPP/RNB1K1NR b KQkq - 1 4",
    moves: "e4 c6 Bc4 d5 Bb3 dxe4 Qh5",
    eco: "B10",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Traditional Variation-Von Hennig Gambit",
    fen: "rnbqkbnr/pp2pppp/2p5/8/2BPp3/2N5/PPP2PPP/R1BQK1NR b KQkq - 1 4",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Bc4",
    eco: "B15",
    difficulty: "Medium"
  },
  {
    name: "Caro-Kann Defence-Main Line-Karpov Variation-Modern Variation",
    fen: "r1bqkbnr/pp1npppp/2p5/6N1/3P4/8/PPP2PPP/R1BQKBNR b KQkq - 2 5",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Ng5",
    eco: "B17",
    difficulty: "Medium"
  },
  {
    name: "Centre Countergambit-Modern Variation-Burn Variation-Bronstein Variation",
    fen: "rn1qkb1r/pppbpppp/5n2/3P4/8/8/PPPPBPPP/RNBQK1NR b KQkq - 4 4",
    moves: "e4 d5 exd5 Nf6 Bb5+ Bd7 Be2",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "Centre Countergambit-Mieses-Kotroc Gambit-Main Lines-Leonhardt/Kortc Gambit",
    fen: "rnb1kbnr/ppp1pppp/8/q7/1P6/2N5/P1PP1PPP/R1BQKBNR b KQkq - 0 4",
    moves: "e4 d5 exd5 Qxd5 Nc3 Qa5 b4",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Countergambit-Anderssen Counterattack-Göteborg System",
    fen: "rnb1kbnr/ppp2ppp/8/q3p3/3P4/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 1 5",
    moves: "e4 d5 exd5 Qxd5 Nc3 Qa5 d4 e5 Nf3",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Pirc Defence-Classical Variation-Bayonet/Mariotti Attack",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/8/3PP2P/2N5/PPP1BPP1/R1BQK1NR b KQkq - 0 5",
    moves: "e4 d6 d4 Nf6 Nc3 g6 Be2 Bg7 h4",
    eco: "B07",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Pirc Defence-Austrian Attack-Ljubojevic Variation",
    fen: "rnbqk2r/ppp1ppbp/3p1np1/8/2BPPP2/2N5/PPP3PP/R1BQK1NR b KQkq - 2 5",
    moves: "e4 d6 d4 Nf6 Nc3 g6 f4 Bg7 Bc4",
    eco: "B09",
    difficulty: "Medium"
  },
  {
    name: "King's Bishop Opening-Philidor Variation-Lewis Countergambit-Walker Variation",
    fen: "rnbqk2r/ppp2ppp/5n2/2bBp3/3PP3/2P5/PP3PPP/RNBQK1NR b KQkq - 0 5",
    moves: "e4 e5 Bc4 Bc5 c3 d5 Bxd5 Nf6 d4",
    eco: "C23",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Classical Defence-Petrov Variation",
    fen: "rnb1k1nr/ppp1qppp/3p4/2b1p3/2BPP3/2P2N2/PP3PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Bc4 Bc5 Nf3 d6 c3 Qe7 d4",
    eco: "C23",
    difficulty: "Medium"
  },
  {
    name: "King's Bishop Opening-Classical Defence-Lopez Variation-Lopez Gambit",
    fen: "rnbqk2r/pppp1ppp/5n2/2b1p3/2B1PP2/8/PPPPQ1PP/RNB1K1NR b KQkq - 0 4",
    moves: "e4 e5 Bc4 Bc5 Qe2 Nf6 f4",
    eco: "C23",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Classical Variation-Soldatenkov Variation",
    fen: "rnbqk1nr/ppp2ppp/3p4/2b1P3/4P3/5N2/PPPP2PP/RNBQKB1R b KQkq - 0 4",
    moves: "e4 e5 f4 Bc5 Nf3 d6 fxe5",
    eco: "C30",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Cozio Defence-Bogoljubov Variation",
    fen: "rnbqkb1r/pppp1ppp/5n2/8/2B1Pp2/2N5/PPPP2PP/R1BQK1NR b KQkq - 3 4",
    moves: "e4 e5 f4 exf4 Bc4 Nf6 Nc3",
    eco: "C33",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Norwalde Variation-Schubert Variation",
    fen: "rnb1kbnr/pppp1ppp/8/4p3/3PPq2/2N5/PPP3PP/R1BQKBNR b KQkq - 0 4",
    moves: "e4 e5 f4 Qf6 Nc3 Qxf4 d4",
    eco: "C30",
    difficulty: "Medium"
  },
  {
    name: "Vienna Game-Stanley Variation-Modern Variation-Boden-Kieseritsky Gambit",
    fen: "rnbqkb1r/pppp1ppp/8/4p3/2B1n3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 1 4",
    moves: "e4 e5 Nc3 Nf6 Bc4 Nxe4 Nf3",
    eco: "C27",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Exchange Variation-Morphy Gambit",
    fen: "rnbqkbnr/ppp2ppp/3p4/8/2BpP3/5N2/PPP2PPP/RNBQK2R b KQkq - 1 4",
    moves: "e4 e5 Nf3 d6 d4 exd4 Bc4",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "Philidor's Defence-Exchange Variation-Knight Chase Variation-Jessica Simpson Variation",
    fen: "rnbqkbnr/pp3ppp/3p4/2p2N2/4P3/8/PPP2PPP/RNBQKB1R b KQkq - 1 5",
    moves: "e4 e5 Nf3 d6 d4 exd4 Nxd4 c5 Nf5",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "Philidor's Defence-Jaenisch Variation-Nimzowitsch Variation-Sokolsky Variation",
    fen: "rnbqkb1r/ppp2ppp/3p4/4P3/4n3/5N2/PPPN1PPP/R1BQKB1R b KQkq - 1 5",
    moves: "e4 e5 Nf3 d6 d4 Nf6 dxe5 Nxe4 Nbd2",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Latvian Countergambit Accepted-Main Line-Bilguer Variation",
    fen: "rnb1kbnr/ppp3pp/3p1q2/5p2/2NPP3/8/PPP2PPP/RNBQKB1R b KQkq - 1 5",
    moves: "e4 e5 Nf3 f5 Nxe5 Qf6 d4 d6 Nc4",
    eco: "C40",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Treybal/Bayreuth Variation/Exchange Variation Deferred",
    fen: "r1bqkb1r/1ppp1ppp/p1B2n2/4p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 Bxc6",
    eco: "C77",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Cordel Defence-Zukertort Gambit",
    fen: "r1bqk2r/pppp1ppp/2n2n2/1Bb1p3/4P3/2P2N2/PP1P1PPP/RNBQ1RK1 b kq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 Bc5 O-O Nf6 c3",
    eco: "C64",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Italian Game-Giuoco Piano-Deutz Gambit",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2BPP3/5N2/PPP2PPP/RNBQ1RK1 b kq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 O-O Nf6 d4",
    eco: "C55",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Giuoco Piano-Classical Variation-Bird's Attack",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/1PB1P3/2P2N2/P2P1PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 b4",
    eco: "C53/C54",
    difficulty: "Medium"
  },
  {
    name: "Italian Game-Giuoco Piano-Classical Variation-Centre Attack",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2BPP3/2P2N2/PP3PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4",
    eco: "C53",
    difficulty: "Medium"
  },
  {
    name: "2 Knights Defence-Open Variation-Dubois Variation-Perreux Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/6N1/2BpP3/8/PPP2PPP/RNBQK2R b KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 Ng5",
    eco: "C55",
    difficulty: "Medium"
  },
  {
    name: "2 Knights Defence-Knight Attack-Wilkes Barre Counterattack-Knight Sac Line",
    fen: "r1bqk2r/pppp1Npp/2n2n2/2b1p3/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 Bc5 Nxf7",
    eco: "C57",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Scotch Game-Dubois-Réti Defence-Advance Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4P3/2Bp4/5N2/PPP2PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Bc4 Nf6 e5",
    eco: "C45",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-4 Knights Game-Spanish Variation-Ranken Variation",
    fen: "r1bqkb1r/1ppp1ppp/p1B2n2/4p3/4P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Bxc6",
    eco: "C48",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-4 Knights Game-Scotch Variation-Krause Variation",
    fen: "r1bqk2r/pppp1ppp/2n2n2/4N3/1b1PP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5",
    eco: "C47",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Petrov's Defence-Italian Gambit-Boden Variation",
    fen: "rnbqkb1r/pppp1ppp/8/4p3/2B1n3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 1 4",
    moves: "e4 e5 Nf3 Nf6 Bc4 Nxe4 Nc3",
    eco: "C42",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Petrov's Defence-Modern Attack-Urusov/Suchting Gambit",
    fen: "rnbqkb1r/pppp1ppp/5n2/8/2BpP3/5N2/PPP2PPP/RNBQK2R b KQkq - 1 4",
    moves: "e4 e5 Nf3 Nf6 d4 exd4 Bc4",
    eco: "C43",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Petrov's Defence-Kaufmann Attack",
    fen: "rnbqkb1r/ppp2ppp/3p4/8/2P1n3/5N2/PP1P1PPP/RNBQKB1R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 c4",
    eco: "C42",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Petrov's Defence-French Attack",
    fen: "rnbqkb1r/ppp2ppp/3p4/8/4n3/3P1N2/PPP2PPP/RNBQKB1R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d3",
    eco: "C42",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Petrov's Defence-Classical Attack",
    fen: "rnbqkb1r/ppp2ppp/3p4/8/3Pn3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4",
    eco: "C42",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Petrov's Defence-Nimzowitsch Attack",
    fen: "rnbqkb1r/ppp2ppp/3p4/8/4n3/2N2N2/PPPP1PPP/R1BQKB1R b KQkq - 1 5",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 Nc3",
    eco: "C42",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-French Defence-Steiner Variation-Orthoschnapp Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/3p4/4P3/1Q6/PP1P1PPP/RNB1KBNR b KQkq - 1 4",
    moves: "e4 e6 c4 d5 cxd5 exd5 Qb3",
    eco: "C00",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Paulsen Attack-Winawer Variation-Winckelmann-Riemer Gambit",
    fen: "rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/P1N5/1PP2PPP/R1BQKBNR b KQkq - 0 4",
    moves: "e4 e6 d4 d5 Nc3 Bb4 a3",
    eco: "C15",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Winawer Variation-Advance Variation-Russian/Moscow Variation",
    fen: "rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P2Q1/2N5/PPP2PPP/R1B1KBNR b KQkq - 1 5",
    moves: "e4 e6 d4 d5 Nc3 Bb4 e5 c5 Qg4",
    eco: "C17",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Paulsen Attack-Winawer Variation-Alekhine-Maróczy Gambit",
    fen: "rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP1NPPP/R1BQKB1R b KQkq - 3 4",
    moves: "e4 e6 d4 d5 Nc3 Bb4 Ne2",
    eco: "C15",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Paulsen Attack-MacCutcheon Variation-Advance Variation",
    fen: "rnbqk2r/ppp2ppp/4pn2/3pP1B1/1b1P4/2N5/PPP2PPP/R2QKBNR b KQkq - 0 5",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Bb4 e5",
    eco: "C12",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Paulsen Attack-Steinitz Variation-Gledhill Attack",
    fen: "rnbqkb1r/pppn1ppp/4p3/3pP3/3P2Q1/2N5/PPP2PPP/R1B1KBNR b KQkq - 2 5",
    moves: "e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 Qg4",
    eco: "C11",
    difficulty: "Medium"
  },
  {
    name: "Robatsch Defence-Modern Pterodactyl Variation-Pterodactyl Variation-Sicilian, Siroccopteryx Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1p5/2BPP3/2N2N2/PPP2PPP/R1BQK2R b KQkq - 3 5",
    moves: "e4 g6 d4 Bg7 Nc3 c5 Nf3 Qa5 Bc4",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Robatsch Defence-Modern Pterodactyl Variation-Pterodactyl Variation-Sicilian, Unpin Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/2N2N2/PPPB1PPP/R2QKB1R b KQkq - 3 5",
    moves: "e4 g6 d4 Bg7 Nc3 c5 Nf3 Qa5 Bd2",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Robatsch Defence-Modern Pterodactyl Variation-Pterodactyl Variation-Sicilian, Anhanguera Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/2N1BN2/PPP2PPP/R2QKB1R b KQkq - 3 5",
    moves: "e4 g6 d4 Bg7 Nc3 c5 Nf3 Qa5 Be3",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Robatsch Defence-Standard Line-Standard Defence-Anti-Modern Variation",
    fen: "rnbqk1nr/pp2ppbp/2pp2p1/8/2BPP3/2N5/PPP1QPPP/R1B1K1NR b KQkq - 1 5",
    moves: "e4 g6 d4 Bg7 Nc3 d6 Bc4 c6 Qe2",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence Declined-El Columpio Defence-El Columpio Gambit",
    fen: "r1bqkb1r/ppp1pppp/2npP2n/8/3P4/5N1P/PPP2PP1/RNBQKB1R b KQkq - 0 6",
    moves: "e4 Nc6 Nf3 Nf6 e5 Ng4 d4 d6 h3 Nh6 e6",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Alekhine Defence-Scandinavian Variation-Myers Gambit",
    fen: "rnbqkb1r/ppp1pppp/5n2/6B1/4p3/2NP4/PPP2PPP/R2QKBNR b KQkq - 1 4",
    moves: "e4 Nf6 Nc3 d5 d3 dxe4 Bg5",
    eco: "B02",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Levitsky Attack-Euwe Variation-Modern Line",
    fen: "rnb1kbnr/pp2ppp1/1qp4p/3p4/3P3B/5N2/PPP1PPPP/RN1QKB1R w KQkq - 2 5",
    moves: "d4 d5 Bg5 h6 Bh4 c6 Nf3 Qb6",
    eco: "D00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Queen's Knight Variation-Tarrasch Defence-Symmetrical Variation",
    fen: "r1bqkb1r/pp3ppp/2n1pn2/2pp4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq - 3 6",
    moves: "d4 d5 c4 e6 Nc3 c5 e3 Nf6 Nf3 Nc6",
    eco: "D32",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-Semi-Tarrasch Defence-Symmetrical Variation",
    fen: "r1bqkb1r/pp3ppp/2n1pn2/2pp4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq - 1 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c5 e3 Nc6",
    eco: "D40",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Semi-Slav Defence-Main Line-Accelerated Meran/Alekhine Variation",
    fen: "rnbqkb1r/1p3ppp/p1p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq - 0 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 a6",
    eco: "D45",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Semi-Slav Defence-Main Line-Normal Variation",
    fen: "r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2N1PN2/PP3PPP/R1BQKB1R w KQkq - 1 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7",
    eco: "D45",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Slav Variation-Spielmann Variation",
    fen: "rnbqkb1r/pp3p1p/2p1pnp1/3p4/2PP4/4PN2/PP1N1PPP/R1BQKB1R w KQkq - 0 6",
    moves: "d4 d5 c4 e6 Nf3 Nf6 e3 c6 Nbd2 g6",
    eco: "D30",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Chigorin Defence-Exchange Variation",
    fen: "r1b1kbnr/ppp1pppp/2n5/3q4/3P4/8/PP2PPPP/RNBQKBNR w KQkq - 0 4",
    moves: "d4 d5 c4 Nc6 cxd5 Qxd5",
    eco: "D07",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Rat Defence-Tartakower Defence-Chigorin Variation",
    fen: "1r1qkbnr/pppnpppp/3p4/8/2PP2b1/1Q3N2/PP2PPPP/RNB1KB1R w KQk - 3 5",
    moves: "d4 d6 Nf3 Bg4 c4 Nd7 Qb3 Rb8",
    eco: "A41",
    difficulty: "Medium"
  },
  {
    name: "Nimzo-Indian Defence-Rubinstein Line-Bishop Attack-Classical Defence",
    fen: "rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/2NBP3/PP3PPP/R1BQK1NR w KQ - 0 6",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3 d5",
    eco: "E48",
    difficulty: "Medium"
  },
  {
    name: "Nimzo-Indian Defence-Rubinstein Line-Landau Variation-Hübner Deferred Variation",
    fen: "rnbq1rk1/pp1p1ppp/4pn2/2p5/1bPP4/2N1PN2/PP3PPP/R1BQKB1R w KQ - 0 6",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 c5",
    eco: "E50",
    difficulty: "Medium"
  },
  {
    name: "Nimzo-Indian Defence-Rubinstein Line-Landau Variation-Ragozin Variation",
    fen: "rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/2N1PN2/PP3PPP/R1BQKB1R w KQ - 0 6",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5",
    eco: "E51",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Paulsen Variation-Open Variation-Paulsen-Basman Defence",
    fen: "rnbqk1nr/pp1p1ppp/4p3/2b5/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Bc5",
    eco: "B40",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Paulsen Variation-Open Variation-Kveinis Variation",
    fen: "rnb1kbnr/pp1p1ppp/1q2p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Qb6",
    eco: "B40",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Old Sicilian Defence-Open Variation-Godiva Variation",
    fen: "r1b1kbnr/pp1ppppp/1qn5/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Qb6",
    eco: "B32",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Old Sicilian Defence-Open Variation-Flohr Variation",
    fen: "r1b1kbnr/ppqppppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Qc7",
    eco: "B32",
    difficulty: "Medium"
  },
  {
    name: "Caro-Kann Defence-Advance Variation-Van der Wiel Attack-Dreyev Defence",
    fen: "rn2kbnr/pp2pppp/1qp5/3pPb2/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 3 5",
    moves: "e4 c6 d4 d5 e5 Bf5 Nc3 Qb6",
    eco: "B12",
    difficulty: "Medium"
  },
  {
    name: "Caro-Kann Defence-Traditional Variation-Main Line-Classical Variation",
    fen: "rn1qkbnr/pp2pppp/2p5/5b2/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 1 5",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5",
    eco: "B18",
    difficulty: "Medium"
  },
  {
    name: "Caro-Kann Defence-2 Knights Attack-Mindeno Variation-Exchange Line",
    fen: "rn1qkbnr/pp2pppp/2p5/3p4/4P3/2N2b1P/PPPP1PP1/R1BQKB1R w KQkq - 0 5",
    moves: "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3",
    eco: "B11",
    difficulty: "Medium"
  },
  {
    name: "Centre Countergambit-Modern Variation-Marshall Variation-Gipslis Variation",
    fen: "rn1qkb1r/ppp1pppp/8/3n4/3P2b1/5N2/PPP2PPP/RNBQKB1R w KQkq - 2 5",
    moves: "e4 d5 exd5 Nf6 d4 Nxd5 Nf3 Bg4",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Countergambit-Gubinsky-Melts Defence-Schiller-Pytel Variation",
    fen: "rnb1kbnr/pp2pppp/2pq4/8/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 5",
    moves: "e4 d5 exd5 Qxd5 Nc3 Qd6 d4 c6",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Countergambit-Mieses-Kotroc Gambit-Viñoles Variation",
    fen: "rnbqkbnr/ppp1pppp/8/8/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 4",
    moves: "e4 d5 exd5 Qxd5 Nc3 Qd8",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Vienna Game-Anderssen Defence-McDonnell Variation",
    fen: "rnbqk1nr/pppp1ppp/8/8/1b2Pp2/2N5/P1PP2PP/R1BQKBNR w KQkq - 0 5",
    moves: "e4 e5 Nc3 Bc5 b4 Bxb4 f4 exf4",
    eco: "C25",
    difficulty: "Medium"
  },
  {
    name: "Philidor's Defence-Harrwitz Variation-Blackburne Variation-Main Line",
    fen: "rn1qkbnr/ppp2ppp/3p4/4P3/4P3/5b2/PPP2PPP/RNBQKB1R w KQkq - 0 5",
    moves: "e4 e5 Nf3 d6 d4 Bg4 dxe5 Bxf3",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Latvian Countergambit-Mayet Attack-Corkscrew Countergambit",
    fen: "rnbqkb1r/pppp2pp/5n2/4N3/2B1p3/8/PPPP1PPP/RNBQK2R w KQkq - 1 5",
    moves: "e4 e5 Nf3 f5 Bc4 fxe4 Nxe5 Nf6",
    eco: "C40",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Archangelsk Variation",
    fen: "r1bqkb1r/2pp1ppp/p1n2n2/1p2p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O b5",
    eco: "C78",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Möller/Neo-Archangelsk Defence",
    fen: "r1bqk2r/1ppp1ppp/p1n2n2/2b1p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 4 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Bc5",
    eco: "C78",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Closed Defence",
    fen: "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 4 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7",
    eco: "C84",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Central Countergambit",
    fen: "r1bqkb1r/1pp2ppp/p1n2n2/3pp3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O d5",
    eco: "C79",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Steinitz Defence Deferred/Russian Defence",
    fen: "r1bqkb1r/1pp2ppp/p1np1n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O d6",
    eco: "C79",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Brix Variation",
    fen: "r1bqkb1r/1ppp1p1p/p1n2np1/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O g6",
    eco: "C79",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Exchange Variation-Lutikov Variation",
    fen: "r1bqkbnr/2pp1ppp/p1p5/4p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 bxc6",
    eco: "C68",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Berlin Defence-Improved Steinitz Defence-Chigorin Variation",
    fen: "r1bqkb1r/pppn1ppp/2np4/1B2p3/3PP3/5N2/PPP2PPP/RNBQ1RK1 w kq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O d6 d4 Nd7",
    eco: "C66",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Classical Variation",
    fen: "r1bqk1nr/pppp1ppp/2n5/2b5/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5",
    eco: "C45",
    difficulty: "Medium"
  },
  {
    name: "4 Knights Game-Symmetrical Variation-Giuoco Pianissimo-Main Line",
    fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQ - 1 6",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bc4 Bc5 d3 O-O",
    eco: "C46",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Paulsen Attack-Rubinstein Variation-Blackburne Defence",
    fen: "r1bqkbnr/pppn1ppp/4p3/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 1 5",
    moves: "e4 e6 d4 d5 Nc3 dxe4 Nxe4 Nd7",
    eco: "C10",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Paulsen Attack-Burn Variation",
    fen: "rnbqkb1r/ppp2ppp/4pn2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR w KQkq - 0 5",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 dxe4",
    eco: "C11",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Tarrasch Variation-Open System-Chistyakov Defence",
    fen: "rnb1kbnr/pp3ppp/4p3/2pq4/3P4/8/PPPN1PPP/R1BQKBNR w KQkq - 0 5",
    moves: "e4 e6 d4 d5 Nd2 c5 exd5 Qxd5",
    eco: "C07",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Bishop Attack-Monkey's Bum Variation",
    fen: "rnbqk1nr/pppp1p1p/4p1p1/8/2BbP3/5Q2/PPP2PPP/RNB1K1NR w KQkq - 0 5",
    moves: "e4 g6 Bc4 Bg7 Qf3 e6 d4 Bxd4",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Robatsch Defence-Modern Pterodactyl Variation-Eastern, Rhamporhynchus Variation-Pterodactyl Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1P5/4P3/2N5/PPP2PPP/R1BQKBNR w KQkq - 1 5",
    moves: "e4 g6 d4 Bg7 Nc3 c5 dxc5 Qa5",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Bird System-From Gambit-Lasker Variation",
    fen: "rnbqk1nr/ppp2p1p/3b4/6p1/8/5N2/PPPPP1PP/RNBQKB1R w KQkq - 0 5",
    moves: "f4 e5 fxe5 d6 exd6 Bxd6 Nf3 g5",
    eco: "A02",
    difficulty: "Medium"
  },
  {
    name: "Polish Opening-German Defence-Orangutan-Diemer Gambit",
    fen: "rnb1kbnr/ppp2ppp/3q4/4p3/1P2p3/P4P2/1BPP2PP/RN1QKBNR b KQkq - 0 5",
    moves: "b4 d5 Bb2 Qd6 a3 e5 e4 dxe4 f3",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Accepted-Normal Variation-Showalter Variation-Bogoljubov Defence",
    fen: "rnbqkb1r/1pp1pppp/p4n2/8/2pPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq - 0 5",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 Nc3 a6 e4",
    eco: "D24",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Albin Countergambit-Normal Line-Fianchetto Variation",
    fen: "r1bqkbnr/ppp2ppp/2n5/4P3/2Pp4/5NP1/PP2PP1P/RNBQKB1R b KQkq - 0 5",
    moves: "d4 d5 c4 e5 dxe5 d4 Nf3 Nc6 g3",
    eco: "D09",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Been-Koomen Variation-Semi-Tarrasch Defence",
    fen: "rnbqkb1r/pp3ppp/4pn2/2pp2B1/2PP4/2N2N2/PP2PPPP/R2QKB1R b KQkq - 1 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 c5 Nf3",
    eco: "D50",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-Semi-Tarrasch Defence-Pillsbury Variation",
    fen: "rnbqkb1r/pp3ppp/4pn2/2pp2B1/2PP4/2N2N2/PP2PPPP/R2QKB1R b KQkq - 1 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c5 Bg5",
    eco: "D40",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-Semi-Slav Defence-Anti-Meran System",
    fen: "rnbqkb1r/pp3ppp/2p1pn2/3p2B1/2PP4/2N2N2/PP2PPPP/R2QKB1R b KQkq - 1 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 Bg5",
    eco: "D43",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-Vienna Variation-Quiet Variation",
    fen: "rnbqkb1r/ppp2ppp/4pn2/8/2pP4/2N1PN2/PP3PPP/R1BQKB1R b KQkq - 0 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 dxc4 e3",
    eco: "D44",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-Barmen Variation-Exchange Variation Deferred",
    fen: "r1bqkb1r/pppn1ppp/4pn2/3P4/3P4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 0 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 Nbd7 cxd5",
    eco: "D37",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Benko Gambit half Accepted-Pawn Return Variation",
    fen: "rnbqkb1r/3ppppp/pP3n2/2pP4/8/8/PP2PPPP/RNBQKBNR b KQkq - 0 5",
    moves: "d4 Nf6 c4 c5 d5 b5 cxb5 a6 b6",
    eco: "A57",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Benko Gambit half Accepted-Modern Variation",
    fen: "rnbqkb1r/3ppppp/p4n2/1PpP4/8/4P3/PP3PPP/RNBQKBNR b KQkq - 0 5",
    moves: "d4 Nf6 c4 c5 d5 b5 cxb5 a6 e3",
    eco: "A57",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Benko Gambit half Accepted-Dlugy Variation",
    fen: "rnbqkb1r/3ppppp/p4n2/1PpP4/8/5P2/PP2P1PP/RNBQKBNR b KQkq - 0 5",
    moves: "d4 Nf6 c4 c5 d5 b5 cxb5 a6 f3",
    eco: "A57",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Normal Variation-Benko Gambit half Accepted-Zaitsev System",
    fen: "rnbqkb1r/3ppppp/p4n2/1PpP4/8/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 5",
    moves: "d4 Nf6 c4 c5 d5 b5 cxb5 a6 Nc3",
    eco: "A57",
    difficulty: "Medium"
  },
  {
    name: "Nimzo-Indian Defence-3 Knights Variation-Duchamp Variation-Modern Line",
    fen: "rn1qk2r/pbpp1ppp/1p2pn2/6B1/1bPP4/2N5/PP1NPPPP/R2QKB1R b KQkq - 3 6",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Nf3 b6 Bg5 Bb7 Nd2",
    eco: "E21",
    difficulty: "Medium"
  },
  {
    name: "Queen's Indian Defence-Fianchetto Traditional Variation-Traditional Variation-Anti-Queen's Indian System",
    fen: "rn1qk2r/pbppbppp/1p2pn2/8/2PP4/2N2NP1/PP2PPBP/R1BQK2R b KQkq - 4 6",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7 Nc3",
    eco: "E17",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Indian Defence-Bronstein Gambit Accepted-Stummer Gambit",
    fen: "rnbqkb1r/ppp1pppp/3p1n2/8/3PP3/2N5/PPP1BP1P/R1BQK1NR b KQkq - 3 5",
    moves: "d4 Nf6 g4 Nxg4 e4 d6 Be2 Nf6 Nc3",
    eco: "A45",
    difficulty: "Medium"
  },
  {
    name: "Indian Defence-Torre Attack-Classical Defence-Petrosian Gambit",
    fen: "rnbqkb1r/p2p1ppp/1p2pn2/2pP2B1/8/4PN2/PPP2PPP/RN1QKB1R b KQkq - 0 5",
    moves: "d4 Nf6 Nf3 e6 Bg5 c5 e3 b6 d5",
    eco: "A46",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Mieses Attack-Landau Gambit",
    fen: "rnbqkb1r/pp1npppp/2p1P3/3p4/3P4/3B4/PPP2PPP/RNBQK1NR b KQkq - 0 5",
    moves: "e4 c6 d4 d5 Bd3 Nf6 e5 Nfd7 e6",
    eco: "B12",
    difficulty: "Medium"
  },
  {
    name: "King's Bishop Opening-Berlin Defence-Walkerling Variation-Kreijcik Gambit",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/1PB1P3/5P2/P1PPN1PP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Bc4 Nf6 f3 Bc5 Ne2 Nc6 b4",
    eco: "C24",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Falkbeer Countergambit Accepted-Nimzowitsch/Anderssen Attack",
    fen: "rnbqkbnr/ppp2ppp/8/1B1P4/4pP2/8/PPPP2PP/RNBQK1NR b KQkq - 1 4",
    moves: "e4 e5 f4 d5 exd5 e4 Bb5+",
    eco: "C31",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Falkbeer Countergambit Accepted-Charousek Gambit Accepted",
    fen: "rnbqkb1r/ppp2ppp/5n2/3P4/4PP2/8/PPP3PP/RNBQKBNR b KQkq - 0 5",
    moves: "e4 e5 f4 d5 exd5 e4 d3 Nf6 dxe4",
    eco: "C32",
    difficulty: "Medium"
  },
  {
    name: "King's Gambit Declined-Falkbeer Countergambit Accepted-Charousek Gambit-Keres Variation",
    fen: "rnbqkb1r/ppp2ppp/5n2/3P4/4pP2/3P4/PPPN2PP/R1BQKBNR b KQkq - 2 5",
    moves: "e4 e5 f4 d5 exd5 e4 d3 Nf6 Nd2",
    eco: "C32",
    difficulty: "Medium"
  },
  {
    name: "King's Gambit Declined-Falkbeer Countergambit Accepted-Charousek Gambit-Réti/Old Line",
    fen: "rnbqkb1r/ppp2ppp/5n2/3P4/4pP2/3P4/PPP1Q1PP/RNB1KBNR b KQkq - 2 5",
    moves: "e4 e5 f4 d5 exd5 e4 d3 Nf6 Qe2",
    eco: "C32",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Lolli/Wild Muzio Gambit",
    fen: "rnbqkbnr/pppp1B1p/8/8/4Ppp1/5N2/PPPP2PP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 Bxf7+",
    eco: "C37",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Paris Attack-Kieseritzky Gambit",
    fen: "rnbqkbnr/pppp1p1p/8/4N3/4PppP/8/PPPP2P1/RNBQKB1R b KQkq - 1 5",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5",
    eco: "C39",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Paris Attack-Allgaier Gambit",
    fen: "rnbqkbnr/pppp1p1p/8/6N1/4PppP/8/PPPP2P1/RNBQKB1R b KQkq - 1 5",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ng5",
    eco: "C39",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Schallop Defence-Tashkent Attack",
    fen: "rnbqkb1r/pppp1ppp/8/4P2n/5pP1/5N2/PPPP3P/RNBQKB1R b KQkq g3 0 5",
    moves: "e4 e5 f4 exf4 Nf3 Nf6 e5 Nh5 g4",
    eco: "C34",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Vienna Game-Max Lange Defence-Meitner-Mieses Gambit",
    fen: "r1b1k1nr/pppp1ppp/2n2q2/2bNp3/2B1P1Q1/8/PPPP1PPP/R1B1K1NR b KQkq - 7 5",
    moves: "e4 e5 Nc3 Nc6 Bc4 Bc5 Qg4 Qf6 Nd5",
    eco: "C25",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Vienna Game-Max Lange Defence-Bronstein Gambit",
    fen: "r1bqkb1r/pppp1ppp/2n5/4p3/2B1nP2/2N2N2/PPPP2PP/R1BQK2R b KQkq - 1 5",
    moves: "e4 e5 Nc3 Nc6 Bc4 Nf6 f4 Nxe4 Nf3",
    eco: "C25",
    difficulty: "Medium"
  },
  {
    name: "Vienna Game-Vienna Gambit-Knight Variation-Pierce Gambit",
    fen: "r1bqkbnr/pppp1p1p/2n5/6p1/3PPp2/2N2N2/PPP3PP/R1BQKB1R b KQkq - 0 5",
    moves: "e4 e5 Nc3 Nc6 f4 exf4 Nf3 g5 d4",
    eco: "C25",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Jaenisch Variation-Locock Variation-Locock Gambit",
    fen: "rnbqkb1r/ppp2Np1/3p1n1p/4p3/3PP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 5",
    moves: "e4 e5 Nf3 d6 d4 Nf6 Ng5 h6 Nxf7",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Jaffe Gambit",
    fen: "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 c3",
    eco: "C77",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Anderssen Variation-Duras Variation",
    fen: "r1bqkb1r/1pp2ppp/p1np1n2/4p3/B1P1P3/3P1N2/PP3PPP/RNBQK2R b KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 d3 d6 c4",
    eco: "C77",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Berlin Defence-Nyholm Attack",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/1B6/3pP3/5N2/PPP2PPP/RNBQ1RK1 b kq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 d4 exd4 O-O",
    eco: "C65",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Giuoco Piano-Evans Gambit Declined-Cordel Variation",
    fen: "r1bqk1nr/pppp1ppp/1bn5/4p3/1PB1P3/5N2/PBPP1PPP/RN1QK2R b KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bb6 Bb2",
    eco: "C51",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Italian Game-Giuoco Piano-Jerome/Kentucky Gambit",
    fen: "r1bqk1nr/pppp1Bpp/2n5/2b1p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 4",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 Bxf7+",
    eco: "C51",
    difficulty: "Medium"
  },
  {
    name: "Giuoco Pianissimo-Normal Variation-Italian 4 Knights Variation-Canal Variation",
    fen: "r1bqk2r/ppp2ppp/2np1n2/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2QK2R b KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 d3 Nf6 Nc3 d6 Bg5",
    eco: "C50",
    difficulty: "Medium"
  },
  {
    name: "Giuoco Piano-4 Knights Variation-Giuoco Pianissimo-Canal Variation",
    fen: "r1bqk2r/ppp2ppp/2np1n2/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2QK2R b KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 Nc3 Nf6 d3 d6 Bg5",
    eco: "C50",
    difficulty: "Medium"
  },
  {
    name: "Italian Game-2 Knights Defence-Italian Variation-Boden Variation",
    fen: "r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Nc3 Nxe4 O-O",
    eco: "C55",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Inverted Hungarian Opening-Tayler Opening-Basman Gambit",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4P3/3p4/5N2/PPP1BPPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Be2 Nf6 d4 exd4 e5",
    eco: "C44",
    difficulty: "Medium"
  },
  {
    name: "4 Knights Game-Double Ruy Lopez-Blackburne's Attack",
    fen: "r1bq1rk1/pppp1ppp/2n2n2/1BbNp3/3PP3/5N2/PPP2PPP/R1BQ1RK1 b - - 0 7",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O Nd5 Bc5 d4",
    eco: "C49",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-4 Knights Game-Double Ruy Lopez-Fleissig's Attack",
    fen: "r1bqk2r/pppp1ppp/2n2n2/1BbNp3/4P3/2P2N2/PP1P1PPP/R1BQK2R b KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 Nd5 Bc5 c3",
    eco: "C49",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-4 Knights Game-Scotch Variation Accepted-Belgrade Gambit",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/3N4/3pP3/5N2/PPP2PPP/R1BQKB1R b KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nd5",
    eco: "C47",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Advance Variation-Main Line",
    fen: "r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/P1P2N2/1P3PPP/RNBQKB1R b KQkq - 0 6",
    moves: "e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 a3",
    eco: "C02",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Winawer Variation-Bogoljubov Variation-Icelandic Defence",
    fen: "rnbqk2r/pp2nppp/4p3/2ppP3/1b1P1P2/2N5/PPPB2PP/R2QKBNR b KQkq - 0 6",
    moves: "e4 e6 d4 d5 Nc3 Bb4 e5 c5 Bd2 Ne7 f4",
    eco: "C17",
    difficulty: "Medium"
  },
  {
    name: "French Defence-MacCutcheon Variation-Advance Variation-Dr. Olland/Dutch Variation",
    fen: "rnbqk2r/ppp2pp1/4pn1p/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 6",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Bb4 e5 h6 Bc1",
    eco: "C12",
    difficulty: "Medium"
  },
  {
    name: "French Defence-MacCutcheon Variation-Advance Variation-Lasker Variation",
    fen: "rnbqk2r/ppp2pp1/4pn1p/3pP3/1b1P4/2N5/PPPB1PPP/R2QKBNR b KQkq - 1 6",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Bb4 e5 h6 Bd2",
    eco: "C12",
    difficulty: "Medium"
  },
  {
    name: "French Defence-MacCutcheon Variation-Advance Variation-Janowski Variation",
    fen: "rnbqk2r/ppp2pp1/4pn1p/3pP3/1b1P4/2N1B3/PPP2PPP/R2QKBNR b KQkq - 1 6",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Bb4 e5 h6 Be3",
    eco: "C12",
    difficulty: "Medium"
  },
  {
    name: "French Defence-MacCutcheon Variation-Advance Variation-Bernstein Variation",
    fen: "rnbqk2r/ppp2pp1/4pn1p/3pP3/1b1P3B/2N5/PPP2PPP/R2QKBNR b KQkq - 1 6",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Bb4 e5 h6 Bh4",
    eco: "C12",
    difficulty: "Medium"
  },
  {
    name: "Nimzowitsch Defence-Scandinavian Variation-Bogoljubov Variation-Richter Gambit",
    fen: "rnbqkbnr/ppp1pppp/8/3P4/4p3/2N2P2/PPP3PP/R1BQKBNR b KQkq - 0 5",
    moves: "e4 Nc6 d4 d5 Nc3 dxe4 d5 Nb8 f3",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence Declined-El Columpio Defence-Pin Variation",
    fen: "r1bqkb1r/ppp1pppp/2np3n/1B2P3/3P4/5N1P/PPP2PP1/RNBQK2R b KQkq - 2 6",
    moves: "e4 Nc6 Nf3 Nf6 e5 Ng4 d4 d6 h3 Nh6 Bb5",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Nimzowitsch Defence Declined-El Columpio Defence-Exchange Variation",
    fen: "r1bqkb1r/ppp1pppp/2nP3n/8/3P4/5N1P/PPP2PP1/RNBQKB1R b KQkq - 0 6",
    moves: "e4 Nc6 Nf3 Nf6 e5 Ng4 d4 d6 h3 Nh6 exd6",
    eco: "B00",
    difficulty: "Medium"
  },
  {
    name: "Durkin's Attack-Celadon Variation",
    fen: "rnbqk1nr/pp3ppp/8/2ppp3/8/P2PP3/P1P2PPP/1RBQKBNR b Kkq - 1 5",
    moves: "Na3 e5 d3 Bxa3 bxa3 d5 e3 c5 Rb1",
    eco: "A00",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Symmetrical Variation-Anti-Benoni Formation-Spielmann Defence (Geller Variation)",
    fen: "r1bqkb1r/pp1p1ppp/2n1pn2/8/2PN4/2N5/PP2PPPP/R1BQKB1R w KQkq - 2 6",
    moves: "c4 c5 Nf3 Nf6 d4 cxd4 Nxd4 e6 Nc3 Nc6",
    eco: "A33",
    difficulty: "Medium"
  },
  {
    name: "English Opening-Anglo-Indian Defence-Anglo-Grünfeld Defence-Czech Defence",
    fen: "rnbqkb1r/ppp1pp1p/1n4p1/8/8/2N3P1/PP1PPPBP/R1BQK1NR w KQkq - 2 6",
    moves: "c4 Nf6 Nc3 d5 cxd5 Nxd5 g3 g6 Bg2 Nb6",
    eco: "A16",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Slav Defence Accepted-3 Knights Variation-2 Knights Attack",
    fen: "rnbqkb1r/pp2pppp/2p2n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4",
    eco: "D15",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Normal Variation-Flohr/Winawer Defece",
    fen: "rn1qkb1r/ppp1pppp/4bn2/8/2pP4/4PN2/PP3PPP/RNBQKB1R w KQkq - 1 5",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 Be6",
    eco: "D25",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Normal Variation-Janowski-Larsen Variation",
    fen: "rn1qkb1r/ppp1pppp/5n2/8/2pP2b1/4PN2/PP3PPP/RNBQKB1R w KQkq - 1 5",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 Bg4",
    eco: "D25",
    difficulty: "Medium"
  },
  {
    name: "Queen's Gambit Declined-Queen's Knight Variation-Tarrasch Defence-Von Hennig-Schara Gambit",
    fen: "rnbqkbnr/pp3ppp/4p3/3P4/3p4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 5",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 cxd4",
    eco: "D32",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Horwitz Defence-Keres Defence-Hartlaub Variation",
    fen: "rn1qkb1r/pbpp2pp/1p2pn2/5P2/2PP4/2N5/PP3PPP/R1BQKBNR w KQkq - 1 6",
    moves: "d4 e6 c4 b6 e4 Bb7 Nc3 f5 exf5 Nf6",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "Dutch Defence-Normal Variation-Fianchetto Variation-Hort-Antoshin/Hort-Anotshin System",
    fen: "rnb1kb1r/ppq1p1pp/2pp1n2/5p2/2PP4/2N3P1/PP2PPBP/R1BQK1NR w KQkq - 2 6",
    moves: "d4 f5 c4 Nf6 g3 d6 Bg2 c6 Nc3 Qc7",
    eco: "A86",
    difficulty: "Medium"
  },
  {
    name: "Dutch Defence-Staunton Gambit Accepted-Staunton's Line-Nimzowitsch Variation",
    fen: "rnbqkb1r/p1ppp1pp/1p3n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR w KQkq - 0 5",
    moves: "d4 f5 e4 fxe4 Nc3 Nf6 Bg5 b6",
    eco: "A83",
    difficulty: "Medium"
  },
  {
    name: "Dutch Defence-Staunton Gambit Accepted-Staunton's Line-Chigorin Variation",
    fen: "rnbqkb1r/pp1pp1pp/2p2n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR w KQkq - 0 5",
    moves: "d4 f5 e4 fxe4 Nc3 Nf6 Bg5 c6",
    eco: "A83",
    difficulty: "Medium"
  },
  {
    name: "Modern Defence-Robatsch Variation-Averbakh System-Pterodactyl Variation",
    fen: "rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQkq - 2 6",
    moves: "d4 g6 c4 Bg7 Nc3 d6 e4 c5 Nf3 Qa5",
    eco: "A42",
    difficulty: "Medium"
  },
  {
    name: "Modern Defence-Pterodactyl Defence-Fianchetto Variation-Queen Pterodactyl Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1p5/3P4/5NP1/PPP1PPBP/RNBQK2R w KQkq - 2 5",
    moves: "d4 g6 Nf3 Bg7 g3 c5 Bg2 Qa5+",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Kevitz-Mikenas Defence-Pozarek Gambit",
    fen: "r1bqkbnr/pppp1ppp/8/8/2n5/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 5",
    moves: "d4 Nc6 c4 e5 dxe5 Nxe5 Nc3 Nxc4",
    eco: "A40",
    difficulty: "Medium"
  },
  {
    name: "East Indian Defence-Closed Variation-Open Defence-Classical Line",
    fen: "rnbqk2r/ppp1bppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQK2R w KQkq - 2 6",
    moves: "d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Be7",
    eco: "E05",
    difficulty: "Medium"
  },
  {
    name: "Nimzo-Indian Defence-Classical Variation-Zurich Variation-Milner-Barry/Zurich Variation",
    fen: "r1bqk2r/ppp2ppp/2nppn2/8/1bPP4/2N2N2/PPQ1PPPP/R1B1KB1R w KQkq - 0 6",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 Nc6 Nf3 d6",
    eco: "E33",
    difficulty: "Medium"
  },
  {
    name: "Queen's Pawn-Bogo-Indian Defence-Nimzowitsch Variation",
    fen: "rnb1k2r/ppppqppp/4pn2/8/1bPP4/5N2/PP1BPPPP/RN1QKB1R w KQkq - 4 5",
    moves: "d4 Nf6 c4 e6 Nf3 Bb4+ Bd2 Qe7",
    eco: "E11",
    difficulty: "Medium"
  },
  {
    name: "King's Indian Defence-Standard Development-Averbakh System-Spanish Defence",
    fen: "rnbq1rk1/1pp1ppbp/p2p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ - 0 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5 a6",
    eco: "E73",
    difficulty: "Medium"
  },
  {
    name: "King's Indian Defence-Standard Development-Averbakh System-Benoni Defence",
    fen: "rnbq1rk1/pp2ppbp/3p1np1/2p3B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ - 0 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5 c5",
    eco: "E74",
    difficulty: "Medium"
  },
  {
    name: "King's Indian Defence-Standard Development-Averbakh System-Flexible Defence",
    fen: "rnbq1rk1/ppp1ppb1/3p1npp/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ - 0 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5 h6",
    eco: "E73",
    difficulty: "Medium"
  },
  {
    name: "King's Indian Defence-Standard Development-Averbakh System-Modern Defence",
    fen: "r1bq1rk1/ppp1ppbp/n2p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ - 4 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5 Na6",
    eco: "E73",
    difficulty: "Medium"
  },
  {
    name: "King's Indian Defence-Standard Development-Averbakh System-Geller Defence",
    fen: "r1bq1rk1/pppnppbp/3p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR w KQ - 4 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5 Nbd7",
    eco: "E73",
    difficulty: "Medium"
  },
  {
    name: "King's Indian Defence-Normal Variation-4 Pawns Attack-Modern Defence",
    fen: "r1bqk2r/ppp1ppbp/n2p1np1/8/2PPPP2/2N5/PP4PP/R1BQKBNR w KQkq - 1 6",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 Na6",
    eco: "E76",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-O'Kelly Variation-Maróczy Bind-Geller Line",
    fen: "r1bqkbnr/1p1p1ppp/p1n5/4p3/2PNP3/8/PP3PPP/RNBQKB1R w KQkq - 0 6",
    moves: "e4 c5 Nf3 a6 c4 Nc6 d4 cxd4 Nxd4 e5",
    eco: "B28",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Benko Variation-Sozin Variation-Najdorf Variation",
    fen: "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6",
    eco: "B90",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Benko Variation-Sozin Variation-Scheveningen Variation",
    fen: "rnbqkb1r/pp3ppp/3ppn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6",
    eco: "B80",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Benko Variation-Sozin Variation-Dragon Variation",
    fen: "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6",
    eco: "B70",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Benko Variation-Sozin Variation-Classical/2 Knights Variation",
    fen: "r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 3 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6",
    eco: "B56",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Kan Variation-Maroczy Bind-Hedgehog Variation",
    fen: "rnbqkbnr/1p1p1p1p/p3p1p1/8/2PNP3/8/PP3PPP/RNBQKB1R w KQkq - 0 6",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 c4 g6",
    eco: "B41",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Open Variation-Taimanov Variation-Russian Variation",
    fen: "r1bqkbnr/1p1p1ppp/p1n1p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 a6",
    eco: "B46",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Open Variation-Anderssen Counterattack-4 Knights Variation",
    fen: "r1bqkb1r/pp1p1ppp/2n1pn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 3 6",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6",
    eco: "B45",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Open Variation-Labourdonnais-Löwenthal Variation-Kalashnikov/Löwenthal Variation",
    fen: "r1bqkbnr/pp3ppp/2np4/1N2p3/4P3/8/PPP2PPP/RNBQKB1R w KQkq - 0 6",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 e5 Nb5 d6",
    eco: "B32",
    difficulty: "Medium"
  },
  {
    name: "Sicilian Defence-Open Variation-Pelikán Variation-Lasker Variation",
    fen: "r1bqkb1r/pp1p1ppp/2n2n2/4p3/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5",
    eco: "B33",
    difficulty: "Medium"
  },
  {
    name: "Caro-Kann Defence-Panov-Botvinnik Attack-Panov Attack-Fianchetto Defence",
    fen: "rnbqkb1r/pp2pp1p/5np1/3p4/2PP4/2N5/PP3PPP/R1BQKBNR w KQkq - 0 6",
    moves: "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 g6",
    eco: "B14",
    difficulty: "Medium"
  },
  {
    name: "Caro-Kann Defence-Panov-Botvinnik Attack-Panov Attack-Modern Defence",
    fen: "r1bqkb1r/pp2pppp/2n2n2/3p4/2PP4/2N5/PP3PPP/R1BQKBNR w KQkq - 3 6",
    moves: "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 Nc6",
    eco: "B13",
    difficulty: "Medium"
  },
  {
    name: "Caro-Kann Defence-Karpov Variation-Modern Variation-Ivanchuk Defence",
    fen: "r1bqkbnr/pp2pppp/2p2n2/6N1/3P4/8/PPP2PPP/R1BQKBNR w KQkq - 3 6",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Ng5 Ndf6",
    eco: "B17",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Centre Countergambit-Modern Variation-Kadas Gambit",
    fen: "rnbqkb1r/pp3ppp/2P2n2/4p3/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 5",
    moves: "e4 d5 exd5 Nf6 d4 c6 dxc6 e5",
    eco: "B01",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Pirc Defence-150 Attack-Inner Doll Defence",
    fen: "rn1qkb1r/pp2pp1p/2pp1np1/8/3PP1b1/2N1B3/PPPQ1PPP/R3KBNR w KQkq - 2 6",
    moves: "e4 d6 d4 Nf6 Nc3 g6 Be3 c6 Qd2 Bg4",
    eco: "B07",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Bledow Variation-Anderssen Variation",
    fen: "rnbqkbnr/pp3ppp/2p5/3B4/4Pp2/8/PPPP2PP/RNBQK1NR w KQkq - 0 5",
    moves: "e4 e5 f4 exf4 Bc4 d5 Bxd5 c6",
    eco: "C33",
    difficulty: "Medium"
  },
  {
    name: "King's Bishop's Gambit-Cozio Defence-Bogoljubov Variation-Jaenisch/Bogoljubov Defence",
    fen: "rnbqkb1r/pp1p1ppp/2p2n2/8/2B1Pp2/2N5/PPPP2PP/R1BQK1NR w KQkq - 0 5",
    moves: "e4 e5 f4 exf4 Bc4 Nf6 Nc3 c6",
    eco: "C33",
    difficulty: "Medium"
  },
  {
    name: "Vienna Game-Vienna Gambit-Knight Variation-Cunningham Defence",
    fen: "r1bqk1nr/ppppbppp/2n5/8/4Pp2/2N2N2/PPPP2PP/R1BQKB1R w KQkq - 2 5",
    moves: "e4 e5 Nc3 Nc6 f4 exf4 Nf3 Be7",
    eco: "C25",
    difficulty: "Medium"
  },
  {
    name: "Vienna Game-Modern Variation-Boden-Kieseritsky Gambit-Lichtenhein Defence",
    fen: "rnbqkb1r/ppp2ppp/8/3pp3/2B1n3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5",
    moves: "e4 e5 Nc3 Nf6 Bc4 Nxe4 Nf3 d5",
    eco: "C27",
    difficulty: "Medium"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Blackburne Variation-Alapin-Blackburne/Albin Gambit",
    fen: "r2qkbnr/pppn1ppp/3p4/4P3/4P1b1/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 e5 Nf3 d6 d4 Bg4 dxe5 Nd7",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "Philidor's Defence-Knight Chase Variation-Jessica Simpson Variation-Ashlee Simpson Variation",
    fen: "r1bqkbnr/pp3ppp/2np4/2p2N2/4P3/8/PPP2PPP/RNBQKB1R w KQkq - 2 6",
    moves: "e4 e5 Nf3 d6 d4 exd4 Nxd4 c5 Nf5 Nc6",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "Philidor's Defence-Knight Chase Variation-Jessica Simpson Variation-Main Line",
    fen: "rnbqkb1r/pp3ppp/3p1n2/2p2N2/4P3/8/PPP2PPP/RNBQKB1R w KQkq - 2 6",
    moves: "e4 e5 Nf3 d6 d4 exd4 Nxd4 c5 Nf5 Nf6",
    eco: "C41",
    difficulty: "Medium"
  },
  {
    name: "Ruy Lopez-Berlin Defence-Mortimer Variation-Mortimer Trap",
    fen: "r1bqkb1r/pp1pnppp/2p2n2/1B2N3/4P3/3P4/PPP2PPP/RNBQK2R w KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 d3 Ne7 Nxe5 c6",
    eco: "C65",
    difficulty: "Medium"
  },
  {
    name: "Giuoco Piano-Classical Variation-Closed Variation-Centre-Holding Variation",
    fen: "r1b1k1nr/ppppqppp/1bn5/4p3/2BPP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Qe7 d4 Bb6",
    eco: "C53",
    difficulty: "Medium"
  },
  {
    name: "Italian Game-2 Knights Defence-Knight Attack-Ponziani-Steinitz Gambit",
    fen: "r1bqkb1r/pppp1ppp/2n5/4p1N1/2B1n3/8/PPPP1PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 Nxe4",
    eco: "C57",
    difficulty: "Medium"
  },
  {
    name: "Scotch Game-Dubois-Réti Defence-Advance Variation-Kingside Variation",
    fen: "r1bqkb1r/pppp1ppp/2n5/4P3/2Bp2n1/5N2/PPP2PPP/RNBQK2R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Bc4 Nf6 e5 Ng4",
    eco: "C45",
    difficulty: "Medium"
  },
  {
    name: "Petrov's Defence-Italian Gambit-Boden Variation-Lichtenhein Variation",
    fen: "rnbqkb1r/ppp2ppp/8/3pp3/2B1n3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 Nf6 Bc4 Nxe4 Nc3 d5",
    eco: "C42",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Advance Variation-Paulsen Attack-Euwe Variation",
    fen: "r2qkbnr/pp1b1ppp/2n1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 3 6",
    moves: "e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Bd7",
    eco: "C02",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Advance Variation-Wade Variation",
    fen: "rn2kbnr/pp1b1ppp/1q2p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 3 6",
    moves: "e4 e6 d4 d5 e5 c5 c3 Qb6 Nf3 Bd7",
    eco: "C02",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Paulsen Attack-Tartakower Variation",
    fen: "rnbqk2r/ppp1bppp/4p3/3pP1B1/3Pn3/2N5/PPP2PPP/R2QKBNR w KQkq - 1 6",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Ne4",
    eco: "C13",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Classical Variation-Paulsen Attack-Vistaneckis/Nimzowitsch/Vistaneskis Variation",
    fen: "rnbqk1nr/ppp1bppp/4p3/3pP1B1/3P4/2N5/PPP2PPP/R2QKBNR w KQkq - 1 6",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Ng8",
    eco: "C13",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Open System-Exchange Variation-Advance Line",
    fen: "rnbqkbnr/pp3ppp/8/3p4/2pP4/5N2/PPPN1PPP/R1BQKB1R w KQkq - 0 6",
    moves: "e4 e6 d4 d5 Nd2 c5 exd5 exd5 Ngf3 c4",
    eco: "C08",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Open System-Exchange Variation-Main Line",
    fen: "r1bqkbnr/pp3ppp/2n5/2pp4/3P4/5N2/PPPN1PPP/R1BQKB1R w KQkq - 2 6",
    moves: "e4 e6 d4 d5 Nd2 c5 exd5 exd5 Ngf3 Nc6",
    eco: "C09",
    difficulty: "Medium"
  },
  {
    name: "French Defence-Tarrasch Variation-Guimard Defence-Thunderbunny Variation",
    fen: "r1bqkbnr/ppp2ppp/2n5/4p3/3PN3/2P5/PP3PPP/R1BQKBNR w KQkq - 0 6",
    moves: "e4 e6 d4 d5 Nd2 Nc6 c3 dxe4 Nxe4 e5",
    eco: "C03",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Pterodactyl Defence-Central, Benoni, Quetzalcoatlus Variation",
    fen: "rnb1k1nr/pp2ppbp/3p2p1/q1pP4/2P1P3/2N5/PP3PPP/R1BQKBNR w KQkq - 2 6",
    moves: "e4 g6 d4 Bg7 c4 c5 d5 d6 Nc3 Qa5",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Pterodactyl Defence-Central, Anhanguera Variation",
    fen: "rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/2N1B3/PP3PPP/R2QKBNR w KQkq - 2 6",
    moves: "e4 g6 d4 Bg7 c4 c5 Nc3 d6 Be3 Qa5",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Pterodactyl Defence-Central, Quetzalcoatlus Variation",
    fen: "rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQkq - 2 6",
    moves: "e4 g6 d4 Bg7 c4 c5 Nc3 d6 Nf3 Qa5",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Pterodactyl Defence-Central, Bogolubovia Variation",
    fen: "rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/2N5/PP2NPPP/R1BQKB1R w KQkq - 2 6",
    moves: "e4 g6 d4 Bg7 c4 c5 Nc3 d6 Nge2 Qa5",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Semi-Averbakh Variation-Pterodactyl Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1p5/2PPP3/5N2/PP3PPP/RNBQKB1R w KQkq - 2 5",
    moves: "e4 g6 d4 Bg7 c4 c5 Nf3 Qa5+",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-3 Pawns Attack-Austrian, Austriadactylus, Western",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1p5/3PPP2/5N2/PPP3PP/RNBQKB1R w KQkq - 2 5",
    moves: "e4 g6 d4 Bg7 f4 c5 Nf3 Qa5+",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Pterodactyl Defence-Fianchetto, Rhamporhynchus Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1P5/4P3/6P1/PPP2P1P/RNBQKBNR w KQkq - 1 5",
    moves: "e4 g6 d4 Bg7 g3 c5 dxc5 Qa5+",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Pterodactyl Defence-Fianchetto, King Pterodactyl Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/5NP1/PPP2P1P/RNBQKB1R w KQkq - 2 5",
    moves: "e4 g6 d4 Bg7 g3 c5 Nf3 Qa5+",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Robatsch Defence-Modern Pterodactyl Variation-Pterodactyl Variation-Sicilian, Quetzalcoatlus Variation",
    fen: "rnb1k1nr/pp2ppbp/3p2p1/q1p5/3PP3/2N2N2/PPP1BPPP/R1BQK2R w KQkq - 0 6",
    moves: "e4 g6 d4 Bg7 Nc3 c5 Nf3 Qa5 Be2 d6",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "King's Pawn-Robatsch Defence-Pterodactyl Defence-Western, Anhanguera Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1p5/3PP3/4BN2/PPP2PPP/RN1QKB1R w KQkq - 2 5",
    moves: "e4 g6 d4 Bg7 Nf3 c5 Be3 Qa5+",
    eco: "B06",
    difficulty: "Medium"
  },
  {
    name: "Alekhine Defence-Normal Variation-4 Pawns Attack-Trifunovic Variation",
    fen: "rn1qkb1r/ppp1pppp/1n1p4/4Pb2/2PP1P2/8/PP4PP/RNBQKBNR w KQkq - 1 6",
    moves: "e4 Nf6 e5 Nd5 d4 d6 c4 Nb6 f4 Bf5",
    eco: "B03",
    difficulty: "Medium"
  },
  {
    name: "Alekhine Defence-Modern Variation-Larsen Variation-Miles Line",
    fen: "rnbqkb1r/pp2pppp/2p5/3nN3/3P4/8/PPP2PPP/RNBQKB1R w KQkq - 0 6",
    moves: "e4 Nf6 e5 Nd5 d4 d6 Nf3 dxe5 Nxe5 c6",
    eco: "B04",
    difficulty: "Medium"
  },
  {
    name: "Réti Opening-King's Indian Attack-Barcza Defence-Wahls Defence",
    fen: "rnbq1rk1/ppp1ppbp/5np1/3p4/8/3P1NP1/PPP1PPBP/RNBQ1RK1 w - - 0 6",
    moves: "Nf3 Nf6 g3 g6 Bg2 Bg7 O-O O-O d3 d5",
    eco: "A05",
    difficulty: "Medium"
  },

  ...VERY_HARD_OPENINGS,
  ...ADDITIONAL_OPENINGS
];
