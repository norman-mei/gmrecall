import { ChessOpening } from '../types';

export const VERY_HARD_OPENINGS: ChessOpening[] = [
  {
    name: "English Opening-Carls Variation-Taimanov Variation-Hungarian Attack",
    fen: "r1bqk1nr/pppp1pbp/2n3p1/4p3/2P5/2N3P1/PP1PPPBP/1RBQK1NR b Kkq - 3 5",
    moves: "c4 e5 Nc3 Nc6 g3 g6 Bg2 Bg7 Rb1",
    eco: "A25",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Prianishenmo Gambit",
    fen: "rnbqkb1r/pp3ppp/5n2/2ppP3/2p5/2N2N2/PP3PPP/R1BQKB1R b KQkq - 0 7",
    moves: "d4 d5 c4 dxc4 Nc3 c5 d5 Nf6 Nf3 e6 e4 exd5 e5",
    eco: "D20",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Slav Defence-Anti-Meran System-Anti-Moscow Gambit",
    fen: "rnbqkb1r/pp3pp1/2p1pn1p/3p4/2PP3B/2N2N2/PP2PPPP/R2QKB1R b KQkq - 1 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 Bg5 h6 Bh4",
    eco: "D44",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Slav Defence-Normal Variation-Rubinstein/Anti-Meran System",
    fen: "r1bqkb1r/pp1n1ppp/2p1pn2/3pN3/2PP4/2N1P3/PP3PPP/R1BQKB1R b KQkq - 2 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Ne5",
    eco: "D45",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Blackmar-Diemer Gambit-Popiel Variation",
    fen: "rnbqkb1r/ppp1pppp/5n2/6B1/3Pp3/2N5/PPP2PPP/R2QKBNR b KQkq - 1 4",
    moves: "d4 d5 Nc3 Nf6 e4 dxe4 Bg5",
    eco: "D00",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-Landau Variation-Ragozin Variation-Saemisch Deferred Variation",
    fen: "rnbq1rk1/ppp2ppp/4pn2/3p4/1bPP4/P1N1PN2/1P3PPP/R1BQKB1R b KQ - 0 6",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5 a3",
    eco: "E51",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-3 Knights Variation-Romanishin Variation",
    fen: "rnbq1rk1/pp1p1ppp/4pn2/2p5/1bPP4/2N2NP1/PP2PPBP/R1BQK2R b KQ - 2 6",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Nf3 c5 g3 O-O Bg2",
    eco: "E21",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Fianchetto Variation-Nimzowitsch Variation-Nimzowitsch Attack",
    fen: "rn1qkb1r/p1pp1ppp/bp2pn2/8/Q1PP4/5NP1/PP2PP1P/RNB1KB1R b KQkq - 2 5",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Ba6 Qa4",
    eco: "E15",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Fianchetto Traditional Variation-Traditional Variation-Old Main/Classical Line",
    fen: "rn1qk2r/pbppbppp/1p2pn2/8/2PP4/5NP1/PP2PPBP/RNBQ1RK1 b kq - 4 6",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7 O-O",
    eco: "E17",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Normal Variation-Standard Development-Semi-Averbakh System",
    fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N1B3/PP2BPPP/R2QK1NR b KQ - 3 6",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Be3",
    eco: "E73",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Normal Variation-Standard Development-Averbakh System",
    fen: "rnbq1rk1/ppp1ppbp/3p1np1/6B1/2PPP3/2N5/PP2BPPP/R2QK1NR b KQ - 3 6",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5",
    eco: "E73",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Normal Variation-Sämisch Variation-Bobotsov-Korchnoi-Petrosian Variation",
    fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2P2/PP2N1PP/R1BQKB1R b KQ - 2 6",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Nge2",
    eco: "E81",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Normal Variation-Rare Defence (Orthodox/Classical Variation)",
    fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP2BPPP/R1BQK2R b KQ - 3 6",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2",
    eco: "E91",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Normal Variation-Rare Defence-Larsen Variation",
    fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N1BN2/PP3PPP/R2QKB1R b KQ - 3 6",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be3",
    eco: "E90",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Normal Variation-Rare Defence-Zinnowitz Variation",
    fen: "rnbq1rk1/ppp1ppbp/3p1np1/6B1/2PPP3/2N2N2/PP3PPP/R2QKB1R b KQ - 3 6",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Bg5",
    eco: "E90",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Grünfeld Defence-Exchange Variation-Nadanian Attack",
    fen: "rnbqkb1r/ppp1pp1p/6p1/3n4/N2P4/8/PP2PPPP/R1BQKBNR b KQkq - 1 5",
    moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 Na4",
    eco: "D85",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-3 Knights Variation-Burille Variation-Makogonov Variation",
    fen: "rnbq1rk1/ppp1ppbp/5np1/3p4/1PPP4/2N1PN2/P4PPP/R1BQKB1R b KQ - 0 6",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 e3 O-O b4",
    eco: "D94",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-3 Knights Variation-Burille Variation-Opocensky Variation",
    fen: "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP4/2N1PN2/PP1B1PPP/R2QKB1R b KQ - 2 6",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 e3 O-O Bd2",
    eco: "D94",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-3 Knights Variation-Burille Variation-Paris Variation",
    fen: "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R b KQ - 2 6",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 e3 O-O Bd3",
    eco: "D94",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Open Variation-Kan Variation-Modern Variation",
    fen: "rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/3B4/PPP2PPP/RNBQK2R b KQkq - 1 5",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3",
    eco: "B42",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Open Variation-Accelerated Dragon-Exchange Variation",
    fen: "r1bqkbnr/pp1ppp1p/2N3p1/8/4P3/8/PPP2PPP/RNBQKB1R b KQkq - 0 5",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 Nxc6",
    eco: "B34",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Exchange Variation-Panov-Botvinnik Attack-Gunderam Attack",
    fen: "rnbqkb1r/pp2pppp/5n2/2Pp4/3P4/8/PP3PPP/RNBQKBNR b KQkq - 0 5",
    moves: "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 c5",
    eco: "B13",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Exchange Variation-Panov-Botvinnik Attack-Panov Attack",
    fen: "rnbqkb1r/pp2pppp/5n2/3p4/2PP4/2N5/PP3PPP/R1BQKBNR b KQkq - 2 5",
    moves: "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3",
    eco: "B13",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Pirc Defence-Austrian Attack-Unzicker Attack",
    fen: "rnbq1rk1/ppp1ppbp/3p1np1/4P3/3P1P2/2N2N2/PPP3PP/R1BQKB1R b KQ - 0 6",
    moves: "e4 d6 d4 Nf6 Nc3 g6 f4 Bg7 Nf3 O-O e5",
    eco: "B09",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Normal Variation-Hall Variation",
    fen: "r1bqkbnr/pppp1ppp/2n5/8/2Q1P3/8/PPP2PPP/RNB1KBNR b KQkq - 2 4",
    moves: "e4 e5 d4 exd4 Qxd4 Nc6 Qc4",
    eco: "C22",
    difficulty: "Hard"
  },
  {
    name: "Philidor's Defence-Jaenisch Variation-Nimzowitsch Variation-Rellstab Variation",
    fen: "rnbqkb1r/ppp2ppp/3p4/3QP3/4n3/5N2/PPP2PPP/RNB1KB1R b KQkq - 1 5",
    moves: "e4 e5 Nf3 d6 d4 Nf6 dxe5 Nxe4 Qd5",
    eco: "C41",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Latvian Countergambit-Foltys-Leonhardt Variation-Foltys Variation",
    fen: "rnb1kbnr/pppp2pp/5q2/8/2N1p3/3P4/PPP2PPP/RNBQKB1R b KQkq - 0 5",
    moves: "e4 e5 Nf3 f5 Nxe5 Qf6 Nc4 fxe4 d3",
    eco: "C40",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Latvian Countergambit-Foltys-Leonhardt Variation-Leonhardt Variation",
    fen: "rnb1kbnr/pppp2pp/5q2/8/2N1p3/2N5/PPPP1PPP/R1BQKB1R b KQkq - 1 5",
    moves: "e4 e5 Nf3 f5 Nxe5 Qf6 Nc4 fxe4 Nc3",
    eco: "C40",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Martinez Variation",
    fen: "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/3P1N2/PPP2PPP/RNBQ1RK1 b kq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 d3",
    eco: "C84",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Wormald/Alapin Attack",
    fen: "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPPQPPP/RNB1K2R b KQkq - 3 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 Qe2",
    eco: "C77",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Exchange Variation-Lutikov Variation-Keres Variation",
    fen: "r1bqkbnr/2pp1ppp/p1p5/4p3/4P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 bxc6 Nc3",
    eco: "C68",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Exchange Variation-Keres Variation",
    fen: "r1bqkbnr/1pp2ppp/p1p5/4p3/4P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 Nc3",
    eco: "C68",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Old Steinitz Defence-Centre Gambit",
    fen: "r1bqkbnr/ppp2ppp/2np4/1B6/3pP3/5N2/PPP2PPP/RNBQ1RK1 b kq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 d6 d4 exd4 O-O",
    eco: "C62",
    difficulty: "Hard"
  },
  {
    name: "Italian Game-Giuoco Piano-Classical Variation-Albin Gambit",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQ1RK1 b kq - 2 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 O-O",
    eco: "C53",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Ponziani Opening-Spanish Variation-Staunton Variation",
    fen: "r1bqkbnr/ppp2ppp/2n5/1B2N3/4p3/2P5/PP1P1PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 c3 d5 Bb5 dxe4 Nxe5",
    eco: "C44",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Classical Variation-Golmayo Variation",
    fen: "r1bqk1nr/pppp1ppp/2n5/2b5/3NP3/4B3/PPP2PPP/RN1QKB1R b KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Classical Variation-Potter Variation",
    fen: "r1bqk1nr/pppp1ppp/2n5/2b5/4P3/1N6/PPP2PPP/RNBQKB1R b KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nb3",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Pulling Counterattack-Horwitz Attack",
    fen: "r1b1kbnr/pppp1ppp/2n5/1N6/4P2q/8/PPP2PPP/RNBQKB1R b KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Qh4 Nb5",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Pulling Counterattack-Steinitz Variation",
    fen: "r1b1kbnr/pppp1ppp/2n5/8/3NP2q/2N5/PPP2PPP/R1BQKB1R b KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Qh4 Nc3",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Pulling Counterattack-Fraser's Attack",
    fen: "r1b1kbnr/pppp1ppp/2n5/8/4P2q/5N2/PPP2PPP/RNBQKB1R b KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Qh4 Nf3",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Pulling Counterattack-Paulsen Variation",
    fen: "r1b1kbnr/pppp1ppp/2n5/5N2/4P2q/8/PPP2PPP/RNBQKB1R b KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Qh4 Nf5",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Petrov's Defence-Modern Attack-Steinitz Variation",
    fen: "rnbqkb1r/pppp1ppp/8/4P3/3pn3/5N2/PPP1QPPP/RNB1KB1R b KQkq - 2 5",
    moves: "e4 e5 Nf3 Nf6 d4 exd4 e5 Ne4 Qe2",
    eco: "C43",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Petrov's Defence-Modern Attack-Main Line/Centre Attack",
    fen: "rnbqkb1r/pppp1ppp/8/4P3/3Qn3/5N2/PPP2PPP/RNB1KB1R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nf6 d4 exd4 e5 Ne4 Qxd4",
    eco: "C43",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight Opening-Petrov's Defence-Millennium Attack",
    fen: "rnbqkb1r/ppp2ppp/3p4/8/4n3/3B1N2/PPPP1PPP/RNBQK2R b KQkq - 1 5",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 Bd3",
    eco: "C42",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight Opening-Petrov's Defence-Cozio/Lasker Attack",
    fen: "rnbqkb1r/ppp2ppp/3p4/8/4n3/5N2/PPPPQPPP/RNB1KB1R b KQkq - 1 5",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 Qe2",
    eco: "C42",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Paulsen Attack-MacCutcheon Variation-Exchange Variation",
    fen: "rnbqk2r/ppp2ppp/4pn2/3P2B1/1b1P4/2N5/PPP2PPP/R2QKBNR b KQkq - 0 5",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Bb4 exd5",
    eco: "C12",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Classical Variation-Paulsen Attack-Anderssen Attack",
    fen: "rnbqk2r/ppp1bppp/4pB2/3p4/3PP3/2N5/PPP2PPP/R2QKBNR b KQkq - 0 5",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 Bxf6",
    eco: "C13",
    difficulty: "Hard"
  },
  {
    name: "Robatsch Defence-Modern Pterodactyl Variation-Pterodactyl Variation-Sicilian, Rhamporhynchus Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1P5/4P3/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 0 5",
    moves: "e4 g6 d4 Bg7 Nc3 c5 Nf3 Qa5 dxc5",
    eco: "B06",
    difficulty: "Hard"
  },
  {
    name: "Nimzowitsch Defence-Scandinavian Variation-Exchange Variation-Marshall Gambit",
    fen: "r1b1kbnr/ppp1pppp/2n5/3q4/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 4",
    moves: "e4 Nc6 d4 d5 exd5 Qxd5 Nc3",
    eco: "B00",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Alekhine Defence-Krejcik Variation-Krejcik Gambit",
    fen: "rnbqkb1r/pppppBpp/8/8/4n3/8/PPPP1PPP/RNBQK1NR b KQkq - 0 3",
    moves: "e4 Nf6 Bc4 Nxe4 Bxf7+",
    eco: "B02",
    difficulty: "Hard"
  },
  {
    name: "Bird System-From Gambit-Lipke Variation",
    fen: "rnbqk2r/ppp2ppp/3b3n/8/3P4/5N2/PPP1P1PP/RNBQKB1R b KQkq - 0 5",
    moves: "f4 e5 fxe5 d6 exd6 Bxd6 Nf3 Nh6 d4",
    eco: "A02",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Caro-Kann Defensive System-London Defensive System-Réti Variation",
    fen: "r2qkb1r/pp1n1ppp/2p1pn2/3p1b2/2P5/1P3NP1/PB1PPPBP/RN1QK2R w KQkq - 2 7",
    moves: "c4 c6 Nf3 d5 b3 Nf6 g3 Bf5 Bg2 e6 Bb2 Nbd7",
    eco: "A12",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Carls Variation-Taimanov Variation-Bremen-Hort Variation",
    fen: "r2qk1nr/ppp2pbp/2npb1p1/4p3/2P5/2N1P1P1/PP1PNPBP/R1BQK2R w KQkq - 2 7",
    moves: "c4 e5 Nc3 Nc6 g3 g6 Bg2 Bg7 e3 d6 Nge2 Be6",
    eco: "A25",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Carls-Bremen System-Fianchetto Line-Hort Variation",
    fen: "rn1qk2r/ppp2pbp/3pbnp1/4p3/2P5/2N1P1P1/PP1PNPBP/R1BQK2R w KQkq - 2 7",
    moves: "c4 e5 Nc3 Nf6 g3 g6 Bg2 Bg7 e3 d6 Nge2 Be6",
    eco: "A24",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Agincourt Defence-English Defence-Poli Gambit",
    fen: "rn1qkb1r/pbpp2pp/1p2p2n/5P2/2PP4/5P2/PP4PP/RNBQKBNR w KQkq - 1 6",
    moves: "c4 e6 d4 b6 e4 Bb7 f3 f5 exf5 Nh6",
    eco: "A13",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Agincourt Defence-English Defence-Hartlaub Gambit Accepted",
    fen: "rn1qkb1r/pbpp2pp/1p2pn2/5P2/2PP4/2N5/PP3PPP/R1BQKBNR w KQkq - 1 6",
    moves: "c4 e6 d4 b6 Nc3 Bb7 e4 f5 exf5 Nf6",
    eco: "A13",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Accepted-Saduleto Variation-Rubinstein Defence-Linares Variation",
    fen: "rnbqkb1r/p3pppp/5n2/1ppP4/2p1P3/2N5/PP3PPP/R1BQKBNR w KQkq - 0 6",
    moves: "d4 d5 c4 dxc4 e4 c5 d5 Nf6 Nc3 b5",
    eco: "D20",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Albin Countergambit-Alapin Variation-Janowski Variation",
    fen: "r1bqkbnr/ppp3pp/2n2p2/4P3/2Pp4/5N2/PP1NPPPP/R1BQKB1R w KQkq - 0 6",
    moves: "d4 d5 c4 e5 dxe5 d4 Nf3 Nc6 Nbd2 f6",
    eco: "D08",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Pillsbury Variation-Lasker Defence",
    fen: "rnbqk2r/ppp1bppp/4p3/3p2B1/2PPn3/2N1P3/PP3PPP/R2QKBNR w KQkq - 1 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 Ne4",
    eco: "D53",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Knight Defence-The Manhattan Defence",
    fen: "r1bqk2r/pppn1ppp/4pn2/3p2B1/1bPP4/2N1P3/PP3PPP/R2QKBNR w KQkq - 1 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 e3 Bb4",
    eco: "D51",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Knight Defence-New York Variation",
    fen: "r1bqk2r/pppn1ppp/4pn2/3p2B1/1bPP4/2N2N2/PP2PPPP/R2QKB1R w KQkq - 6 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 Nf3 Bb4",
    eco: "D51",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-Ragozin Defence-Moscow Variation",
    fen: "rnbqk2r/ppp2pp1/4pn1p/3p2B1/1bPP4/2N2N2/PP2PPPP/R2QKB1R w KQkq - 0 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 Bb4 Bg5 h6",
    eco: "D38",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Traditional Variation-Vienna Variation",
    fen: "rnbqk2r/ppp2ppp/4pn2/3p2B1/1bPP4/5N2/PP2PPPP/RN1QKB1R w KQkq - 4 5",
    moves: "d4 d5 c4 e6 Nf3 Nf6 Bg5 Bb4+",
    eco: "D30",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Torre Attack-Gruenfeld Variation-Main Line",
    fen: "rnbq1rk1/ppp1ppbp/5np1/3p2B1/3P4/4PN2/PPPN1PPP/R2QKB1R w KQ - 3 6",
    moves: "d4 d5 Nf3 Nf6 Bg5 g6 e3 Bg7 Nbd2 O-O",
    eco: "D03",
    difficulty: "Hard"
  },
  {
    name: "Dutch Defence-Fianchetto Variation-Dutch-Indian Variation-Alekhine Variation",
    fen: "rnbqk2r/ppppb1pp/4pn2/5p2/2PP4/6P1/PP1BPPBP/RN1QK1NR w KQkq - 4 6",
    moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Bb4+ Bd2 Be7",
    eco: "A90",
    difficulty: "Hard"
  },
  {
    name: "Dutch Defence-Normal Variation-Queen's Knight Variation-Stonewall Variation",
    fen: "rnbqkb1r/pp4pp/2p1p3/3p1p2/2PPn3/2NBPN2/PP3PPP/R1BQK2R w KQkq - 2 7",
    moves: "d4 f5 c4 Nf6 Nc3 e6 Nf3 d5 e3 c6 Bd3 Ne4",
    eco: "A85",
    difficulty: "Hard"
  },
  {
    name: "Dutch Defence-Fianchetto Attack-Leningrad Variation-Basman System",
    fen: "rnbqk2r/pp1pp1bp/2p3pn/5p2/3P4/5NP1/PPP1PPBP/RNBQ1RK1 w kq - 2 6",
    moves: "d4 f5 g3 g6 Bg2 Bg7 Nf3 c6 O-O Nh6",
    eco: "A81",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Leningrad Variation-Main/Benoni Defence",
    fen: "rnbqk2r/pp3pp1/3ppn1p/2pP4/1bP4B/2N5/PP2PPPP/R2QKBNR w KQkq - 0 7",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Bg5 h6 Bh4 c5 d5 d6",
    eco: "E31",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-3 Knights Variation-Korchnoi Variation-Shocron Gambit",
    fen: "rnbqk2r/p2p1ppp/4pn2/1ppP4/1bP5/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 6",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Nf3 c5 d5 b5",
    eco: "E21",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Nimzowitsch Variation-Quiet Line-Check Variation",
    fen: "rn1qk2r/p1pp1ppp/bp2pn2/8/1bPP4/1P3NP1/P3PP1P/RNBQKB1R w KQkq - 1 6",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Ba6 b3 Bb4+",
    eco: "E15",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Queen's Indian Defence-Fianchetto Traditional Variation-Capablanca Variation",
    fen: "rn1qk2r/pbpp1ppp/1p2pn2/8/1bPP4/5NP1/PP2PPBP/RNBQK2R w KQkq - 3 6",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Bb4+",
    eco: "E16",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Queen's Indian Defence-Kasparov Variation-Main Line",
    fen: "rn1qk2r/pbpp1pp1/1p2pn1p/8/1bPP3B/2N2N2/PP2PPPP/R2QKB1R w KQkq - 2 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 Nc3 Bb7 Bg5 h6 Bh4 Bb4",
    eco: "E13",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Owen Defence-Matovinsky Gambit",
    fen: "rn1qkbnr/p1ppp2p/1p4p1/5P1Q/3P4/3B4/PPP2PbP/RNB1K1NR w KQkq - 0 6",
    moves: "e4 b6 d4 Bb7 Bd3 f5 exf5 Bxg2 Qh5+ g6",
    eco: "B00",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Traditional Variation-Fianchetto Variation-Botvinnik Defence I/Russian",
    fen: "r1bqk1nr/pp3pbp/2np2p1/2p1p3/4PP2/2NP2P1/PPP3BP/R1BQK1NR w KQkq - 0 7",
    moves: "e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6 f4 e5",
    eco: "B25",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Traditional Variation-Fianchetto Variation-Botvinnik Defence II",
    fen: "r1bqk1nr/pp3pbp/2np2p1/2p1p3/4P3/2NP2P1/PPP1NPBP/R1BQK2R w KQkq - 0 7",
    moves: "e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6 Nge2 e5",
    eco: "B25",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Traditional Variation-Anti-Sveshnikov Variation-Kharlov-Kramnik Line",
    fen: "r1bqk1nr/pp3ppp/2np4/2p1p1b1/2B1P3/2NP4/PPPN1PPP/R1BQK2R w KQkq - 3 7",
    moves: "e4 c5 Nc3 Nc6 Nf3 e5 Bc4 d6 d3 Be7 Nd2 Bg5",
    eco: "B30",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Accelerated Panov Attack-Anti-Anti-Caro-Kann Defence-Modern Variation",
    fen: "rnbqkb1r/pp2pppp/5n2/3P4/8/8/PP1P1PPP/RNBQKBNR w KQkq - 1 5",
    moves: "e4 c6 c4 d5 exd5 cxd5 cxd5 Nf6",
    eco: "B10",
    difficulty: "Hard"
  },
  {
    name: "Pirc Defence-2 Knights System-Quiet System-Parma Defence",
    fen: "rn1q1rk1/ppp1ppbp/3p1np1/8/3PP1b1/2N2N2/PPP1BPPP/R1BQ1RK1 w - - 6 7",
    moves: "e4 d6 d4 Nf6 Nc3 g6 Nf3 Bg7 Be2 O-O O-O Bg4",
    eco: "B08",
    difficulty: "Hard"
  },
  {
    name: "Pirc Defence-2 Knights System-Quiet System-Czech Defence",
    fen: "rnbq1rk1/pp2ppbp/2pp1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQ1RK1 w - - 0 7",
    moves: "e4 d6 d4 Nf6 Nc3 g6 Nf3 Bg7 Be2 O-O O-O c6",
    eco: "B08",
    difficulty: "Hard"
  },
  {
    name: "Pirc Defence-2 Knights System-Quiet System-Chigorin Line",
    fen: "r1bq1rk1/ppp1ppbp/2np1np1/8/3PP3/2N2N2/PPP1BPPP/R1BQ1RK1 w - - 6 7",
    moves: "e4 d6 d4 Nf6 Nc3 g6 Nf3 Bg7 Be2 O-O O-O Nc6",
    eco: "B08",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Paris Attack-Kieseritzky Gambit-Campbell/Ernest Morphy's/Campell Defence",
    fen: "rnbqkbnr/ppp2p1p/8/3pN3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq - 0 6",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 d5",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Paris Attack-Kieseritzky Gambit-Kolisch Defence",
    fen: "rnbqkbnr/ppp2p1p/3p4/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq - 0 6",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 d6",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Paris Attack-Kieseritzky Gambit-Stockwhip/Long Whip/Classical Defence",
    fen: "rnbqkbnr/pppp1p2/8/4N2p/4PppP/8/PPPP2P1/RNBQKB1R w KQkq - 0 6",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 h5",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Paris Attack-Kieseritzky Gambit-Neumann Defence",
    fen: "r1bqkbnr/pppp1p1p/2n5/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq - 2 6",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 Nc6",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Paris Attack-Kieseritzky Gambit-Berlin Defence",
    fen: "rnbqkb1r/pppp1p1p/5n2/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq - 2 6",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 Nf6",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Paris Attack-Allgaier Gambit-Schlechter Defence",
    fen: "rnbqkb1r/pppp1p1p/5n2/6N1/4PppP/8/PPPP2P1/RNBQKB1R w KQkq - 2 6",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ng5 Nf6",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "Vienna Game-Vienna Gambit-Steinitz Gambit-Main Line",
    fen: "r1b1kbnr/pppp1ppp/2n5/8/3PPp1q/2N5/PPP3PP/R1BQKBNR w KQkq - 1 5",
    moves: "e4 e5 Nc3 Nc6 f4 exf4 d4 Qh4+",
    eco: "C25",
    difficulty: "Hard"
  },
  {
    name: "Vienna Game-Max Lange Defence-Paulsen Variation-Mariotti Gambit",
    fen: "r1bqk1nr/pppp1pp1/2n5/2b1p3/4P2p/2N2NP1/PPPP1PBP/R1BQK2R w KQkq - 0 6",
    moves: "e4 e5 Nc3 Nc6 g3 Bc5 Bg2 h5 Nf3 h4",
    eco: "C25",
    difficulty: "Hard"
  },
  {
    name: "Vienna Game-Max Lange Defence-Paulsen Variation-Unnamed Gambit",
    fen: "r1bqk2r/ppp2ppp/2n2n2/2bpp3/4P3/2N3P1/PPPPNPBP/R1BQK2R w KQkq - 0 6",
    moves: "e4 e5 Nc3 Nc6 g3 Nf6 Bg2 Bc5 Nge2 d5",
    eco: "C25",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight Opening-Elephant Countergambit-Wasp Variation",
    fen: "rnb1kbnr/ppp2ppp/8/4N1q1/2B1p3/8/PPPP1PPP/RNBQK2R w KQkq - 2 5",
    moves: "e4 e5 Nf3 d5 Nxe5 dxe4 Bc4 Qg5",
    eco: "C40",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Morphy Variation-Boden's Defence",
    fen: "rn1qkbnr/pppb1ppp/3p4/8/3QP3/5N2/PPP2PPP/RNB1KB1R w KQkq - 1 5",
    moves: "e4 e5 Nf3 d6 d4 exd4 Qxd4 Bd7",
    eco: "C41",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Latvian Countergambit-Mayet Attack-Polerio-Svedenborg Variation",
    fen: "rnbqkbnr/ppp3pp/8/3pN3/2B1p3/8/PPPP1PPP/RNBQK2R w KQkq - 0 5",
    moves: "e4 e5 Nf3 f5 Bc4 fxe4 Nxe5 d5",
    eco: "C40",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Modern Steinitz Defence-Fianchetto/Bronstein Variation",
    fen: "r2qkbnr/1ppb1p1p/p1np2p1/4p3/B2PP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 c3 Bd7 d4 g6",
    eco: "C76",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Modern Steinitz Defence-Rubinstein Variation",
    fen: "r2qkb1r/1ppbnppp/p1np4/4p3/B2PP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 1 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 c3 Bd7 d4 Nge7",
    eco: "C75",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Columbus Variation-Open/Tarrasch Defence",
    fen: "r1bqkb1r/1ppp1ppp/p1n5/4p3/B3n3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4",
    eco: "C80",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Berlin Defence-Open Variation/Rio Gambit Accepted",
    fen: "r1bqkb1r/pppp1ppp/2n5/1B2p3/4n3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4",
    eco: "C67",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Giuoco Piano-Evans Gambit Accepted-Normal/Main Line",
    fen: "r1bqk1nr/pppp1ppp/2n5/b3p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5",
    eco: "C52",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Giuoco Piano-Evans Gambit Accepted-MacDonnell Defence",
    fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Bc5",
    eco: "C51",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Giuoco Piano-Evans Gambit Accepted-Mayet Defence",
    fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Bf8",
    eco: "C51",
    difficulty: "Hard"
  },
  {
    name: "Giuoco Piano-Giuoco Pianissimo-Lucchini Gambit-Dubois Variation",
    fen: "r1bqk1nr/pppp2pp/2n5/2b1p1N1/2B1Pp2/3P4/PPP2PPP/RNBQK2R w KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 d3 f5 Ng5 f4",
    eco: "C50",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Ponziani Opening-Jaenisch Counterattack-Fraser Defence/Vukovic Gambit",
    fen: "r1bqk2r/pppp1ppp/2n5/2bPp3/4n3/2P2N2/PP3PPP/RNBQKB1R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 c3 Nf6 d4 Nxe4 d5 Bc5",
    eco: "C44",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-4 Knights Game-Scotch Variation-Oxford Gambit",
    fen: "r1bqk2r/pppp1ppp/5n2/3Pp3/1b1nP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 d5 Nd4",
    eco: "C47",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Wayward Queen Attack-Mellon Gambit",
    fen: "r1bqkb1r/ppp4p/2n2ppn/3pp3/2B1P3/3P1Q2/PPP1NPPP/RNB1K2R w KQkq - 0 7",
    moves: "e4 e5 Qh5 Nc6 Bc4 Nh6 d3 g6 Qf3 f6 Ne2 d5",
    eco: "C20",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Advance Variation-Main Line-Lputian Variation",
    fen: "r1b1kb1r/pp3ppp/1qn1p2n/2ppP3/3P4/P1P2N2/1P3PPP/RNBQKB1R w KQkq - 1 7",
    moves: "e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 a3 Nh6",
    eco: "C02",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Rubinstein Variation-Frere/Becker/Maric Variation",
    fen: "rnb1kbnr/ppp2ppp/4p3/3q4/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 1 5",
    moves: "e4 e6 d4 d5 Nc3 dxe4 Nxe4 Qd5",
    eco: "C10",
    difficulty: "Hard"
  },
  {
    name: "French Defence-MacCutcheon Variation-Advance Variation-Tartakower Variation",
    fen: "rnbqk2r/pppn1pp1/4p2p/3pP3/1b1P4/2N5/PPPB1PPP/R2QKBNR w KQkq - 2 7",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Bb4 e5 h6 Bd2 Nfd7",
    eco: "C12",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Tarrasch Variation-Closed Variation-Botvinnik Variation",
    fen: "rnbqkb1r/p2n1ppp/1p2p3/2ppP3/3P4/2PB4/PP1N1PPP/R1BQK1NR w KQkq - 0 7",
    moves: "e4 e6 d4 d5 Nd2 Nf6 e5 Nfd7 Bd3 c5 c3 b6",
    eco: "C05",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Robatsch Defence-Masur Gambit",
    fen: "rnbq1rk1/ppppp2p/6pb/5P2/3P4/2N5/PPP2PPP/R2QKBNR w KQ - 1 6",
    moves: "e4 g6 d4 Nh6 Nc3 f5 Bxh6 Bxh6 exf5 O-O",
    eco: "B06",
    difficulty: "Hard"
  },
  {
    name: "Alekhine Defence-Normal Variation-4 Pawns Attack-Planinc/Cambridge Gambit",
    fen: "rnbqkb1r/ppp1pp1p/1n1p4/4P1p1/2PP1P2/8/PP4PP/RNBQKBNR w KQkq - 0 6",
    moves: "e4 Nf6 e5 Nd5 d4 d6 c4 Nb6 f4 g5",
    eco: "B03",
    difficulty: "Hard"
  },
  {
    name: "Réti Opening-King's Indian Attack-Double Fianchetto Variation-Pachmann System",
    fen: "rnbqk2r/ppp1npbp/6p1/3pp3/8/3P1NP1/PPP1PPBP/RNBQ1RK1 w kq - 1 6",
    moves: "Nf3 d5 g3 g6 Bg2 Bg7 O-O e5 d3 Ne7",
    eco: "A07",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-2 Knights Attack-Alapin Variation",
    fen: "rnbqkb1r/pp2pppp/2p2n2/8/P1pP4/2N2N2/1P2PPPP/R1BQKB1R b KQkq - 0 5",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4",
    eco: "D16",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-2 Knights Attack-Alekhine Variation",
    fen: "rnbqkb1r/pp2pppp/2p2n2/8/2pP4/2N1PN2/PP3PPP/R1BQKB1R b KQkq - 0 5",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 e3",
    eco: "D15",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-2 Knights Attack-Slav/Geller Gambit",
    fen: "rnbqkb1r/pp2pppp/2p2n2/8/2pPP3/2N2N2/PP3PPP/R1BQKB1R b KQkq - 0 5",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 e4",
    eco: "D15",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Normal Variation-Mannheim Variation",
    fen: "rnbqkb1r/ppp1pppp/5n2/8/Q1pP4/5N2/PP2PPPP/RNB1KB1R b KQkq - 3 4",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 Qa4+",
    eco: "D23",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Queen's Knight Variation-Charousek Variation-Miladinovic Gambit",
    fen: "rnbqk1nr/ppp1bppp/4p3/8/2PPp3/2N2P2/PP4PP/R1BQKBNR b KQkq - 0 5",
    moves: "d4 d5 c4 e6 Nc3 Be7 e4 dxe4 f3",
    eco: "D31",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Queen's Knight Variation-Tarrasch Defence-Marshall Gambit",
    fen: "rnbqkbnr/pp3ppp/8/2pp4/3PP3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 5",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 e4",
    eco: "D32",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Queen's Knight Variation-Tarrasch Defence-2 Knights Variation",
    fen: "rnbqkbnr/pp3ppp/8/2pp4/3P4/2N2N2/PP2PPPP/R1BQKB1R b KQkq - 1 5",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3",
    eco: "D32",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Accelerated Semi-Slav Defence-Noteboom Variation-Anti-Noteboom Variation",
    fen: "rnbqkbnr/pp3ppp/2p1p3/6B1/2pP4/2N2N2/PP2PPPP/R2QKB1R b KQkq - 1 5",
    moves: "d4 d5 c4 e6 Nc3 c6 Nf3 dxc4 Bg5",
    eco: "D31",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Pillsbury Variation-Heral Variation",
    fen: "rnbqk2r/ppp1bppp/4pB2/3p4/2PP4/2N5/PP2PPPP/R2QKBNR b KQkq - 0 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 Bxf6",
    eco: "D53",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Been-Koomen Variation-Semi-Tarrasch/Pseudo-Tarrasch Defence",
    fen: "rnbqkb1r/pp3ppp/4pn2/2pP2B1/3P4/2N5/PP2PPPP/R2QKBNR b KQkq - 0 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 c5 cxd5",
    eco: "D50",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Normal Defence-3 Knights Variation-Classical/Harrwitz Attack",
    fen: "rnbqk2r/ppp1bppp/4pn2/3p4/2PP1B2/2N2N2/PP2PPPP/R2QKB1R b KQkq - 5 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 Be7 Bf4",
    eco: "D37",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Zeller Defence-Soller Attack",
    fen: "rn1qkb1r/ppp1pppp/5n2/5b2/2BPp3/2N2P2/PPP3PP/R1BQK1NR b KQkq - 2 5",
    moves: "d4 d5 e4 dxe4 Nc3 Bf5 f3 Nf6 Bc4",
    eco: "D00",
    difficulty: "Hard"
  },
  {
    name: "Dutch Defence-Staunton Gambit Accepted-Staunton's Line-Lasker Variation",
    fen: "rnbqkb1r/ppppp2p/5np1/6B1/3Pp3/2N2P2/PPP3PP/R2QKBNR b KQkq - 0 5",
    moves: "d4 f5 e4 fxe4 Nc3 Nf6 Bg5 g6 f3",
    eco: "A83",
    difficulty: "Hard"
  },
  {
    name: "Dutch Defence-Staunton Gambit Accepted-Staunton's Line-Alekhine Variation",
    fen: "rnbqkb1r/ppppp2p/5np1/6B1/3Pp2P/2N5/PPP2PP1/R2QKBNR b KQkq - 0 5",
    moves: "d4 f5 e4 fxe4 Nc3 Nf6 Bg5 g6 h4",
    eco: "A83",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Indian Defence-Normal Variation-Benko Gambit Fully Accepted",
    fen: "rnbqkb1r/3ppppp/P4n2/2pP4/8/8/PP2PPPP/RNBQKBNR b KQkq - 0 5",
    moves: "d4 Nf6 c4 c5 d5 b5 cxb5 a6 bxa6",
    eco: "A58",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-Modern Variation-Benoni Defence-King Pawn Lines",
    fen: "rnbqkb1r/pp3ppp/3p1n2/2pP4/4P3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 6",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4",
    eco: "A65",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-Classical Variation-Zurich Variation-Milner-Barry Variation-Old Zurich Variation",
    fen: "r1bqk2r/ppp2ppp/2nppn2/8/1bPP4/P1N2N2/1PQ1PPPP/R1B1KB1R b KQkq - 0 6",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 Nc6 Nf3 d6 a3",
    eco: "E33",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Counterthrust Variation-Reshevsky Variation-Classical/Alekhine Variation",
    fen: "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1 b - - 5 6",
    moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O O-O",
    eco: "D77",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Indian Defence-Malich Gambit",
    fen: "rnbqkb1r/pp2pp1p/5p2/2pP4/4p3/2N5/PPP2PPP/R2QKBNR b KQkq - 0 6",
    moves: "d4 Nf6 Nc3 d5 Bg5 c5 Bxf6 gxf6 e4 dxe4 d5",
    eco: "D00",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Sicilian Defence-Alapin Variation-Stoltz Attack",
    fen: "r1bqkb1r/pp1ppppp/1nn5/2p1P3/8/1BP2N2/PP1P1PPP/RNBQK2R b KQkq - 6 6",
    moves: "e4 c5 c3 Nf6 e5 Nd5 Nf3 Nc6 Bc4 Nb6 Bb3",
    eco: "B22",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Traditional Variation-Grand Prix Attack-Schofman Variation",
    fen: "r1bqk1nr/pp1p1pbp/2n1p1p1/2p2P2/2B1P3/2N2N2/PPPP2PP/R1BQK2R b KQkq - 0 6",
    moves: "e4 c5 Nc3 Nc6 f4 g6 Nf3 Bg7 Bc4 e6 f5",
    eco: "B23",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Benko Variation-Prins Variation-Rauzer Variation",
    fen: "rnbqkb1r/pp3ppp/3p1n2/4p3/4P3/1N3P2/PPP3PP/RNBQKB1R b KQkq - 1 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 f3 e5 Nb3",
    eco: "B55",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Najdorf Variation-Amsterdam Variation",
    fen: "rnbqkb1r/1p2pppp/p2p1n2/8/3NPP2/2N5/PPP3PP/R1BQKB1R b KQkq - 0 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 f4",
    eco: "B93",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Najdorf Variation-Zagreb/Fianchetto Variation",
    fen: "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N3P1/PPP2P1P/R1BQKB1R b KQkq - 0 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 g3",
    eco: "B91",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Scheveningen Variation-Fianchetto Variation",
    fen: "rnbqkb1r/pp3ppp/3ppn2/8/3NP3/2N3P1/PPP2P1P/R1BQKB1R b KQkq - 0 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 g3",
    eco: "B80",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Dragon Variation-Levenfish Variation",
    fen: "rnbqkb1r/pp2pp1p/3p1np1/8/3NPP2/2N5/PPP3PP/R1BQKB1R b KQkq - 0 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 f4",
    eco: "B71",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Dragon Variation-Fianchetto Variation",
    fen: "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N3P1/PPP2P1P/R1BQKB1R b KQkq - 0 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 g3",
    eco: "B70",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Classical Variation-Fianchetto Variation",
    fen: "r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N3P1/PPP2P1P/R1BQKB1R b KQkq - 0 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 g3",
    eco: "B58",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Classical Variation-Spielmann Variation",
    fen: "r1bqkb1r/pp2pppp/2np1n2/8/4P3/2N5/PPP1NPPP/R1BQKB1R b KQkq - 4 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Nde2",
    eco: "B56",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Pelikán Variation-Lasker Variation-Schlechter Variation",
    fen: "r1bqkb1r/pp1p1ppp/2n2n2/4p3/4P3/1NN5/PPP2PPP/R1BQKB1R b KQkq - 1 6",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Nb3",
    eco: "B33",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Pelikán Variation-Lasker Variation-Retreat Variation",
    fen: "r1bqkb1r/pp1p1ppp/2n2n2/4p3/4P3/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 1 6",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Nf3",
    eco: "B33",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Traditional Variation-Knight Variation-Alien Gambit",
    fen: "rnbqkb1r/pp2pppp/2p2n2/6N1/3P4/8/PPP2PPP/R1BQKBNR b KQkq - 2 5",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nf6 Ng5",
    eco: "B15",
    difficulty: "Hard"
  },
  {
    name: "King's Bishop Opening-Classical Defence-Lopez Variation-López Gambit",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1PP2/2P5/PP1PQ1PP/RNB1K1NR b KQkq - 0 5",
    moves: "e4 e5 Bc4 Bc5 Qe2 Nc6 c3 Nf6 f4",
    eco: "C23",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Halasz-McDonnell Gambit-Crocodile Variation",
    fen: "r1bqk1nr/pppp1ppp/2n5/2b5/3pPP2/2P2N2/PP4PP/RNBQKB1R b KQkq - 0 5",
    moves: "e4 e5 d4 exd4 f4 Bc5 Nf3 Nc6 c3",
    eco: "C21",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Lanc-Arnold Gambit-Schippler Gambit",
    fen: "rnbqk1nr/pppp1ppp/8/2b5/2B1P3/2p2N2/PP3PPP/RNBQK2R b KQkq - 1 5",
    moves: "e4 e5 d4 exd4 Nf3 Bc5 c3 dxc3 Bc4",
    eco: "C21",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Falkbeer Countergambit Accepted-Rubinstein Variation",
    fen: "rnbqkb1r/ppp2ppp/5n2/3P4/4pP2/2N5/PPPPQ1PP/R1B1KBNR b KQkq - 3 5",
    moves: "e4 e5 f4 d5 exd5 e4 Nc3 Nf6 Qe2",
    eco: "C31",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Fischer Defence-Spanish Variation",
    fen: "rnbqkb1r/ppp2ppp/3p1n2/8/3PPp2/3B1N2/PPP3PP/RNBQK2R b KQkq - 2 5",
    moves: "e4 e5 f4 exf4 Nf3 d6 d4 Nf6 Bd3",
    eco: "C34",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Traditional Variation-Hanstein Variation",
    fen: "rnbqk1nr/pppp1pbp/8/6p1/2BPPp2/5N2/PPP3PP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 Bg7 d4",
    eco: "C38",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Rosentreter Gambit-Rosentreter-Testa Gambit",
    fen: "rnbqkbnr/pppp1p1p/8/8/3PPBp1/5N2/PPP3PP/RN1QKB1R b KQkq - 0 5",
    moves: "e4 e5 f4 exf4 Nf3 g5 d4 g4 Bxf4",
    eco: "C37",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Schallopp Defence-Keres Variation",
    fen: "rnbqkb1r/pppp1ppp/8/4P2n/5p2/5N2/PPPPQ1PP/RNB1KB1R b KQkq - 2 5",
    moves: "e4 e5 f4 exf4 Nf3 Nf6 e5 Nh5 Qe2",
    eco: "C34",
    difficulty: "Hard"
  },
  {
    name: "Vienna Game-Vienna Gambit-Main Line-Modern Variation",
    fen: "rnbqkb1r/ppp2ppp/8/3pP3/4n3/2NP4/PPP3PP/R1BQKBNR b KQkq - 0 5",
    moves: "e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 d3",
    eco: "C29",
    difficulty: "Hard"
  },
  {
    name: "Philidor's Defence-Jessica Simpson Variation-Ashlee Simpson Variation-Main Line",
    fen: "r1bqkbnr/pp3ppp/2np4/2p5/4P3/4N3/PPP2PPP/RNBQKB1R b KQkq - 3 6",
    moves: "e4 e5 Nf3 d6 d4 exd4 Nxd4 c5 Nf5 Nc6 Ne3",
    eco: "C41",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Philidor Countergambit-del Rio Attack",
    fen: "rnbqkbnr/ppp3pp/4P3/3p2N1/4p3/8/PPP2PPP/RNBQKB1R b KQkq - 0 6",
    moves: "e4 e5 Nf3 d6 d4 f5 dxe5 fxe4 Ng5 d5 e6",
    eco: "C41",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Schliemann Defence Deferred-Jaenisch Gambit Deferred",
    fen: "r1bqkbnr/1ppp2pp/p1n5/4pP2/B7/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 f5 exf5",
    eco: "C70",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Exchange Variation-Normal Variation",
    fen: "r1bqkbnr/1pp2ppp/p1p5/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 O-O",
    eco: "C69",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Old Steinitz Defence-Nimzowitsch Attack",
    fen: "r2qkb1r/pppb1ppp/2Bp1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQK2R b KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 d6 d4 Bd7 Nc3 Nf6 Bxc6",
    eco: "C62",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Schliemann Defence-Berger Variation-Lasker Variation",
    fen: "r1bqkb1r/pppp2pp/2n2n2/1B3P2/4p2N/2N5/PPPP1PPP/R1BQK2R b KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 f5 Nc3 Nf6 exf5 e4 Nh4",
    eco: "C63",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Berlin Defence-Anderssen Variation",
    fen: "r1bqkb1r/ppp2ppp/2Bp1n2/4p3/4P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 d3 d6 Bxc6+",
    eco: "C65",
    difficulty: "Hard"
  },
  {
    name: "Giuoco Piano-Closed Variation-Centre-Holding Variation-Mestel Variation",
    fen: "r1b1k1nr/ppppqppp/1bn5/4p1B1/2BPP3/2P2N2/PP3PPP/RN1QK2R b KQkq - 2 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Qe7 d4 Bb6 Bg5",
    eco: "C53",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Knight Attack-Wilkes Barre Counterattack-Bishop Sac Line",
    fen: "r1bqk2r/pppp1Bpp/2n2n2/2b1p1N1/4P3/8/PPPP1PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 Bc5 Bxf7+",
    eco: "C57",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Haxo Gambit-Saratt Variation",
    fen: "r1bqk1nr/pppp1ppp/2n5/2b3N1/2BpP3/8/PPP2PPP/RNBQK2R b KQkq - 3 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bc5 Ng5",
    eco: "C44",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Göring Gambit-Double Pawn Sacrifice",
    fen: "r1bqkbnr/pppp1ppp/2n5/8/2B1P3/2p2N2/PP3PPP/RNBQK2R b KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 c3 dxc3 Bc4",
    eco: "C44",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Schmidt Variation-Alekhine Gambit",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/4P3/3N4/8/PPP2PPP/RNBQKB1R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 e5",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Petrov's Defence-Modern Attack-Tal Gambit",
    fen: "rnbqkb1r/pppp1ppp/8/1B2P3/3pn3/5N2/PPP2PPP/RNBQK2R b KQkq - 2 5",
    moves: "e4 e5 Nf3 Nf6 d4 exd4 e5 Ne4 Bb5",
    eco: "C43",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Advance Variation-Nimzowitsch System-Ruisdonk Gambit",
    fen: "rnbqkbnr/pp3ppp/4p3/3pP3/3p4/3B1N2/PPP2PPP/RNBQK2R b KQkq - 1 5",
    moves: "e4 e6 d4 d5 e5 c5 Nf3 cxd4 Bd3",
    eco: "C02",
    difficulty: "Hard"
  },
  {
    name: "French Defence-MacCutcheon Variation-Advance Variation-Chigorin Variation",
    fen: "rnbqk2r/ppp2pp1/4pP1p/3p2B1/1b1P4/2N5/PPP2PPP/R2QKBNR b KQkq - 0 6",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Bb4 e5 h6 exf6",
    eco: "C12",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Paulsen Attack-MacCutcheon Variation-Wolf Gambit",
    fen: "rnbqk2r/ppp2ppp/4pn2/3p2B1/1b1PP3/2N5/PPP1NPPP/R2QKB1R b KQkq - 5 5",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Bb4 Ne2",
    eco: "C12",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Classical Variation-Paulsen Attack-Albin-Alekhine-Chatard Attack",
    fen: "rnbqk2r/pppnbppp/4p3/3pP1B1/3P3P/2N5/PPP2PP1/R2QKBNR b KQkq - 0 6",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 h4",
    eco: "C13",
    difficulty: "Hard"
  },
  {
    name: "Robatsch Defence-Modern Pterodactyl Variation-Pterodactyl Variation-Sicilian, Benoni Gambit",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1pP4/4P3/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 0 5",
    moves: "e4 g6 d4 Bg7 Nc3 c5 Nf3 Qa5 d5",
    eco: "B06",
    difficulty: "Hard"
  },
  {
    name: "Alekhine Defence-2 Pawns Attack-Lasker's Attack-Mikenas Variation",
    fen: "rnbqkb1r/pppp1ppp/4p3/2PnP3/2B5/2N5/PP1P1PPP/R1BQK1NR b KQkq - 1 6",
    moves: "e4 Nf6 e5 Nd5 c4 Nb6 c5 Nd5 Bc4 e6 Nc3",
    eco: "B02",
    difficulty: "Hard"
  },
  {
    name: "Alekhine Defence-Modern Variation-Alekhine Variation-Vitolins Attack",
    fen: "rn1qkb1r/ppp1pppp/1n1p4/3PP3/2P3b1/5N2/PP3PPP/RNBQKB1R b KQkq - 0 6",
    moves: "e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4 c4 Nb6 d5",
    eco: "B05",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Normal Variation-Fianchetto Variation-Rubinstein System",
    fen: "rnbqkb1r/ppn1pppp/8/2p5/8/2N3P1/PP1PPPBP/R1BQK1NR w KQkq - 2 6",
    moves: "c4 c5 Nc3 Nf6 g3 d5 cxd5 Nxd5 Bg2 Nc7",
    eco: "A34",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Carls Variation-Hungarian Attack-Taimanov Variation",
    fen: "r1bqk2r/pppp1pbp/2n3pn/4p3/2P5/2N3P1/PP1PPPBP/1RBQK1NR w Kkq - 4 6",
    moves: "c4 e5 Nc3 Nc6 g3 g6 Bg2 Bg7 Rb1 Nh6",
    eco: "A25",
    difficulty: "Hard"
  },
  {
    name: "English Opening-4 Knights System #2-Quiet Line #3-Romanishin Variation",
    fen: "r1bqk2r/pppp1ppp/2n2n2/4p3/2P5/2b1PN2/PPQP1PPP/R1B1KB1R w KQkq - 0 6",
    moves: "c4 e5 Nc3 Nc6 Nf3 Nf6 e3 Bb4 Qc2 Bxc3",
    eco: "A28",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Agincourt Variation-Neo-Catalan-Bogolubov Variation",
    fen: "rnbq1rk1/1pp1bppp/4pn2/p2p4/2P5/1P3NP1/PB1PPPBP/RN1QK2R w KQ - 0 7",
    moves: "c4 e6 Nf3 d5 g3 Nf6 Bg2 Be7 b3 O-O Bb2 a5",
    eco: "A14",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Agincourt Defence-Agincourt Variation-Tarrasch Defence",
    fen: "r1bqk2r/pp2bppp/2n1pn2/2pp4/2P5/1P3NP1/P2PPPBP/RNBQ1RK1 w kq - 3 7",
    moves: "c4 e6 Nf3 d5 g3 Nf6 Bg2 c5 b3 Nc6 O-O Be7",
    eco: "A13",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Queen's Knight Variation-Anglo-Grünfeld Defence-Rubinstein Variation",
    fen: "rnbqkb1r/ppn1pppp/8/2p5/8/2N3P1/PP1PPPBP/R1BQK1NR w KQkq - 2 6",
    moves: "c4 Nf6 Nc3 d5 cxd5 Nxd5 g3 c5 Bg2 Nc7",
    eco: "A16",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Anglo-Indian Defence-Anglo-Grünfeld Defence-Smyslov Defence",
    fen: "rnbqkb1r/ppp1pp1p/6p1/8/8/2n3P1/PP1PPPBP/R1BQK1NR w KQkq - 0 6",
    moves: "c4 Nf6 Nc3 d5 cxd5 Nxd5 g3 g6 Bg2 Nxc3",
    eco: "A16",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Slav Defence-Main Line-Stonewall Defence",
    fen: "rnbqkb1r/pp4pp/2p1p3/3p1p2/2PPn3/2NBPN2/PP3PPP/R1BQK2R w KQkq - 0 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Ne4 Bd3 f5",
    eco: "D45",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Tartakower Variation",
    fen: "rn1qkb1r/ppp1pppp/5n2/5b2/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq - 1 6",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 Bf5",
    eco: "D00",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Teichmann Variation",
    fen: "rn1qkb1r/ppp1pppp/5n2/8/3P2b1/2N2N2/PPP3PP/R1BQKB1R w KQkq - 1 6",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 Bg4",
    eco: "D00",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Blackmar-Diemer Gambit-Vienna Variation",
    fen: "rn1qkb1r/ppp1pppp/5n2/5b2/3Pp3/2N2P2/PPP3PP/R1BQKBNR w KQkq - 1 5",
    moves: "d4 d5 Nc3 Nf6 e4 dxe4 f3 Bf5",
    eco: "D00",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Symmetrical Variation-Torre Attack-Breyer Variation",
    fen: "rnb1kb1r/pp3ppp/1q2pn2/2pp2B1/3P4/2P1PN2/PP3PPP/RN1QKB1R w KQkq - 1 6",
    moves: "d4 d5 Nf3 Nf6 Bg5 e6 e3 c5 c3 Qb6",
    eco: "D03",
    difficulty: "Hard"
  },
  {
    name: "Dutch Defence-Classical Variation-Stonewall Variation-Modern Variation",
    fen: "rnbqk2r/pp4pp/2pbpn2/3p1p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w kq - 2 7",
    moves: "d4 f5 c4 e6 Nf3 Nf6 g3 c6 Bg2 d5 O-O Bd6",
    eco: "A90",
    difficulty: "Hard"
  },
  {
    name: "Dutch Defence-Fianchetto Variation-Classical Variation-Modern Stonewall Variation",
    fen: "rnbqk2r/pp4pp/2pbpn2/3p1p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w kq - 2 7",
    moves: "d4 f5 c4 Nf6 g3 e6 Bg2 d5 Nf3 c6 O-O Bd6",
    eco: "A97",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Modern Defence-Robatsch Variation-Dunworthy Variation",
    fen: "rnbqk1nr/pp2pp1p/2P3p1/8/2Pb4/8/PP3PPP/RNBQKBNR w KQkq - 0 6",
    moves: "d4 g6 c4 Bg7 e4 d5 exd5 c6 dxc6 Bxd4",
    eco: "A40",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Modern Defence-Pterodactyl Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q7/3P1B2/5N2/PP2PPPP/RN1QKB1R w KQkq - 1 6",
    moves: "d4 g6 Nf3 Bg7 Bf4 c5 c3 cxd4 cxd4 Qa5+",
    eco: "D02",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Modern Defence-Siroccopteryx Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q7/3N4/3BP3/PPP2PPP/RNBQK2R w KQkq - 1 6",
    moves: "d4 g6 Nf3 Bg7 e3 c5 Bd3 cxd4 Nxd4 Qa5+",
    eco: "D05",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-Modern Variation-Benoni Defence-Snake Variation",
    fen: "rnbqk2r/pp1p1ppp/3b1n2/2pP4/8/2N5/PP2PPPP/R1BQKBNR w KQkq - 1 6",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 Bd6",
    eco: "A60",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-Landau Variation-Ragozin Variation-Main/Schlechter Defence",
    fen: "rnbq1rk1/p1p2ppp/1p2pn2/3p4/1bPP4/2NBPN2/PP3PPP/R1BQK2R w KQ - 0 7",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5 Bd3 b6",
    eco: "E52",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-Landau Variation-Ragozin Variation-Main/Except Gligoric/Bernstein System",
    fen: "rnbq1rk1/pp3ppp/4pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQK2R w KQ - 0 7",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5 Bd3 c5",
    eco: "E53",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-Rubinstein Line-Reshevsky Variation-Simagin Variation",
    fen: "rnbq1rk1/ppp2ppp/3bpn2/3p4/2PP4/P1N1P3/1P2NPPP/R1BQKB1R w KQ - 1 7",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Ne2 d5 a3 Bd6",
    eco: "E46",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Kemeri Defence-Counterthrust Variation-Exchange Variation",
    fen: "rnbqk2r/ppp1ppbp/6p1/3n4/3P4/6P1/PP2PPBP/RNBQK1NR w KQkq - 0 6",
    moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 cxd5 Nxd5",
    eco: "D71",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Normal Variation-Sämisch Variation-Double Fianchetto Variation",
    fen: "rnbq1rk1/p1p1ppbp/1p1p1np1/8/2PPP3/2N1BP2/PP4PP/R2QKBNR w KQ - 0 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 b6",
    eco: "E82",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Normal Variation-Sämisch Variation-Orthodox Variation",
    fen: "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N1BP2/PP4PP/R2QKBNR w KQ - 0 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5",
    eco: "E85",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Normal Variation-Sämisch Variation-Yates Defence",
    fen: "r1bq1rk1/ppp1ppbp/2np1np1/8/2PPP3/2N1BP2/PP4PP/R2QKBNR w KQ - 3 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 Nc6",
    eco: "E83",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Normal Variation-Deferred Fianchetto Variation-Panno Variation",
    fen: "r1bq1rk1/ppp1ppbp/2np1np1/8/2PPP3/2N3P1/PP3PBP/R1BQK1NR w KQ - 3 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 g3 O-O Bg2 Nc6",
    eco: "E72",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Normal Variation-Rare Defence-Classical Variation",
    fen: "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQK2R w KQ - 0 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5",
    eco: "E92",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Normal Variation-Rare Defence-Kazakh Variation",
    fen: "r1bq1rk1/ppp1ppbp/n2p1np1/8/2PPP3/2N2N2/PP2BPPP/R1BQK2R w KQ - 4 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 Na6",
    eco: "E91",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Delayed Fianchetto Variation-Yugoslav System",
    fen: "rnbq1rk1/pp2ppbp/3p1np1/2p5/2PP4/2N2NP1/PP2PPBP/R1BQK2R w KQ - 0 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 c5",
    eco: "E64",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Delayed Fianchetto Variation-Debrecen Defence",
    fen: "r1bq1rk1/pppnppbp/3p1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQK2R w KQ - 3 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 Nbd7",
    eco: "E67",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Delayed Fianchetto Variation-Karlsbad Variation",
    fen: "r1bq1rk1/ppp1ppbp/2np1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQK2R w KQ - 3 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 Nc6",
    eco: "E62",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Burille Variation-Paris Variation-Schlechter Variation Deferred",
    fen: "rnbq1rk1/pp2ppbp/2p2np1/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R w KQ - 0 7",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 e3 O-O Bd3 c6",
    eco: "D94",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-St. George Defence-New St. George Variation-Traditional Line",
    fen: "rn1qkb1r/1b1p1ppp/p3pn2/1pp5/3PP3/2PB1N2/PP3PPP/RNBQ1RK1 w kq - 3 7",
    moves: "e4 a6 d4 e6 Nf3 b5 Bd3 c5 c3 Bb7 O-O Nf6",
    eco: "B00",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Benko Variation-Sozin Variation-Kupreichik Variation",
    fen: "rn1qkb1r/pp1bpppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 3 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Bd7",
    eco: "B56",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Kan Variation-Modern Variation-Polugaevsky Variation",
    fen: "rnbqk1nr/1p1p1ppp/p3p3/2b5/3NP3/3B4/PPP2PPP/RNBQK2R w KQkq - 2 6",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3 Bc5",
    eco: "B42",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Kan Variation-Modern Variation-Swiss Cheese Variation",
    fen: "rnbqkbnr/1p1p1p1p/p3p1p1/8/3NP3/3B4/PPP2PPP/RNBQK2R w KQkq - 0 6",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3 g6",
    eco: "B42",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Kan Variation-Knight Variation-Wing Attack",
    fen: "rnbqkbnr/3p1ppp/p3p3/1p6/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Nc3 b5",
    eco: "B43",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Taimanov Variation-Normal Variation-Bastrikov Variation",
    fen: "r1b1kbnr/ppqp1ppp/2n1p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 3 6",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Qc7",
    eco: "B47",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Open Variation-Anderssen Counterattack-Pin Variation",
    fen: "rnbqk2r/pp1p1ppp/4pn2/8/1b1NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 3 6",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nf6 Nc3 Bb4",
    eco: "B40",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Open Variation-Anderssen Counterattack-Gaw-Paw Variation",
    fen: "rnb1kb1r/pp1p1ppp/1q2pn2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 3 6",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nf6 Nc3 Qb6",
    eco: "B40",
    difficulty: "Hard"
  },
  {
    name: "Centre Countergambit-Mieses-Kotroc Gambit-Main Lines-Mieses Variation",
    fen: "rnb1kb1r/ppp1pppp/5n2/q7/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 1 5",
    moves: "e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6",
    eco: "B01",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Centre Countergambit-Pytel-Wade Variation-Bronstein Variation",
    fen: "rnb1kb1r/1pp1pppp/p2q1n2/8/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 6",
    moves: "e4 d5 exd5 Qxd5 Nc3 Qd6 d4 Nf6 Nf3 a6",
    eco: "B01",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Bledow Variation-Morphy/Bledow Countergambit",
    fen: "rnbqkb1r/ppp2ppp/5n2/3B4/4Pp2/8/PPPP2PP/RNBQK1NR w KQkq - 1 5",
    moves: "e4 e5 f4 exf4 Bc4 d5 Bxd5 Nf6",
    eco: "C33",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Muzio Gambit-Brentano Defence",
    fen: "rnbqkbnr/ppp2p1p/8/3p4/2B1Ppp1/5N2/PPPP2PP/RNBQ1RK1 w kq - 0 6",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 O-O d5",
    eco: "C37",
    difficulty: "Hard"
  },
  {
    name: "Vienna Game-Stanley Variation-Modern Variation-Monster Declined",
    fen: "rnbqk2r/ppppbppp/3n4/4p2Q/8/1BN5/PPPP1PPP/R1B1K1NR w KQkq - 4 6",
    moves: "e4 e5 Nc3 Nf6 Bc4 Nxe4 Qh5 Nd6 Bb3 Be7",
    eco: "C27",
    difficulty: "Hard"
  },
  {
    name: "Philidor's Defence-Hanham Variation-Lion Variation-Lion's Claw II",
    fen: "r1bqk2r/pppnbpp1/3p1n1p/4p3/2BPP3/2N2N2/PPP2PPP/R1BQ1RK1 w kq - 0 7",
    moves: "e4 e5 Nf3 d6 d4 Nd7 Nc3 Ngf6 Bc4 Be7 O-O h6",
    eco: "C41",
    difficulty: "Hard"
  },
  {
    name: "Philidor's Defence-Hanham Variation-Lion Variation-Lion's Claw I",
    fen: "r1bqk2r/pp1nbppp/2pp1n2/4p3/3PP3/2N2N2/PPP1BPPP/R1BQ1RK1 w kq - 0 7",
    moves: "e4 e5 Nf3 d6 d4 Nd7 Nc3 Ngf6 Be2 Be7 O-O c6",
    eco: "C41",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Archangelsk Variation-Counterthrust/Planinc Variation",
    fen: "r2qkb1r/1bpp1ppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQ1RK1 w kq - 2 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O b5 Bb3 Bb7",
    eco: "C78",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Exchange Variation-Alapin Variation",
    fen: "r2qkbnr/1pp2ppp/p1p5/4p3/3PP1b1/5N2/PPP2PPP/RNBQK2R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 d4 Bg4",
    eco: "C68",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Schliemann Defence-Berger Variation-Kostic Defence",
    fen: "r1bqk1nr/ppppb1pp/2n5/1B2p3/4N3/5N2/PPPP1PPP/R1BQK2R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 f5 Nc3 fxe4 Nxe4 Be7",
    eco: "C63",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Schliemann Defence-Berger Variation-Tartakower Variation",
    fen: "r1bqkb1r/pppp2pp/2n2n2/1B2p3/4N3/5N2/PPPP1PPP/R1BQK2R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 f5 Nc3 fxe4 Nxe4 Nf6",
    eco: "C63",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Berlin Defence-Improved Steinitz Defence-Hedgehog Variation",
    fen: "r2qk2r/pppbbppp/2np1n2/1B2p3/3PP3/2N2N2/PPP2PPP/R1BQ1RK1 w kq - 3 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O d6 d4 Bd7 Nc3 Be7",
    eco: "C66",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Knight Attack-Gruber Variation-Ulvestad Variation",
    fen: "r1bqkb1r/p1p2ppp/2n2n2/1p1Pp1N1/2B5/8/PPPP1PPP/RNBQK2R w KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 b5",
    eco: "C57",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Knight Attack-Gruber Variation-Polerio Defence",
    fen: "r1bqkb1r/ppp2ppp/5n2/n2Pp1N1/2B5/8/PPPP1PPP/RNBQK2R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5",
    eco: "C58",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Knight Attack-Gruber Variation-Fritz Variation",
    fen: "r1bqkb1r/ppp2ppp/5n2/3Pp1N1/2Bn4/8/PPPP1PPP/RNBQK2R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nd4",
    eco: "C57",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Malaniuk Variation",
    fen: "r1bqk1nr/pppp1ppp/2n5/8/1b1NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bb4+",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "Scotch Game-Classical Variation-Golmayo Variation-Loyd Variation",
    fen: "r1bqk1nr/pppp1ppp/1bn5/8/3NP3/4B3/PPP2PPP/RN1QKB1R w KQkq - 3 6",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Bb6",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "4 Knights Game-Scotch Variation-Krause Variation-Leonhardt Defence",
    fen: "r1b1k2r/ppppqppp/2n2n2/4N3/1b1PP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 d4 Bb4 Nxe5 Qe7",
    eco: "C47",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-4 Knights Game-Scotch Variation Accepted-Schmid Defence",
    fen: "r1bqkb1r/pppp1ppp/2n5/8/3Nn3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Nxe4",
    eco: "C47",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Petrov's Defence-Classical Attack-Closed Variation",
    fen: "rnbqkb1r/ppp2ppp/3p1n2/8/3P4/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 Nf6",
    eco: "C42",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Petrov's Defence-Damiano Variation-Kholmov Gambit",
    fen: "rnb1kb1r/ppppqppp/8/4N3/4n3/8/PPPPQPPP/RNB1KB1R w KQkq - 2 5",
    moves: "e4 e5 Nf3 Nf6 Nxe5 Nxe4 Qe2 Qe7",
    eco: "C42",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Classical Variation-Exchange Variation-Canal Variation",
    fen: "rnbqk2r/ppp1nppp/8/3p4/1b1P4/2NB4/PPP2PPP/R1BQK1NR w KQkq - 4 6",
    moves: "e4 e6 d4 d5 exd5 exd5 Nc3 Bb4 Bd3 Ne7",
    eco: "C01",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Exchange Variation-Svenonius Variation-Bogolyubov Variation",
    fen: "r1bqkb1r/ppp2ppp/2n2n2/3p2B1/3P4/2N5/PPP2PPP/R2QKBNR w KQkq - 4 6",
    moves: "e4 e6 d4 d5 exd5 exd5 Nc3 Nf6 Bg5 Nc6",
    eco: "C01",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Rubinstein Variation-Ellis Gambit",
    fen: "rnbqkbnr/ppp2ppp/8/4p3/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 0 5",
    moves: "e4 e6 d4 d5 Nc3 dxe4 Nxe4 e5",
    eco: "C10",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Robatsch Defence-Pterodactyl Defence, Western, Siroccopteryx Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q7/2BNP3/8/PPP2PPP/RNBQK2R w KQkq - 1 6",
    moves: "e4 g6 d4 Bg7 Nf3 c5 Bc4 cxd4 Nxd4 Qa5+",
    eco: "B06",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Robatsch Defence-Pterodactl Defence-Western, Pterodactyl Variation",
    fen: "rnb1k1nr/pp1pppbp/6p1/q1P5/4P3/5N2/PPP2PPP/RNBQKB1R w KQkq - 1 5",
    moves: "e4 g6 d4 Bg7 Nf3 c5 dxc5 Qa5+",
    eco: "B06",
    difficulty: "Hard"
  },
  {
    name: "Polish Opening-Queenside Defence-Rooks Swap Line",
    fen: "1nbqkb1r/1ppp1ppp/4pn2/1P6/8/8/2PPPPPP/BN1QKBNR b Kk - 0 6",
    moves: "b4 Nf6 Bb2 e6 b5 a6 a4 axb5 axb5 Rxa1 Bxa1",
    eco: "A00",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Ultra-Symmetrical Line-Full Symmetry Line-Double Fianchetto Line",
    fen: "r1bq1rk1/pp1pppbp/2n2np1/2p5/2P5/1PN2NP1/P2PPPBP/R1BQ1RK1 b - - 0 7",
    moves: "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 Nf3 Nf6 O-O O-O b3",
    eco: "A38",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Ultra-Symmetrical Line-Full Symmetry Line-Duchamp Line",
    fen: "r1bq1rk1/pp1pppbp/2n2np1/2p5/2P5/2NP1NP1/PP2PPBP/R1BQ1RK1 b - - 0 7",
    moves: "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 Nf3 Nf6 O-O O-O d3",
    eco: "A38",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Ultra-Symmetrical Line-Full Symmetry Line-Mecking Line",
    fen: "r1bq1rk1/pp1pppbp/2n2np1/2p5/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b - - 0 7",
    moves: "c4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 Nf3 Nf6 O-O O-O d4",
    eco: "A39",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-2 Knights Attack-Slav Gambit-Tolush-Geller Gambit",
    fen: "rnbqkb1r/p3pppp/2p2n2/1p2P3/2pP4/2N2N2/PP3PPP/R1BQKB1R b KQkq - 0 6",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 e4 b5 e5",
    eco: "D15",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Pillsbury Variation-Alekhine Variation",
    fen: "rnbqk2r/pp2bppp/2p1pn2/3p2B1/2PPP3/2N2N2/PP3PPP/R2QKB1R b KQkq - 0 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 Nf3 c6 e4",
    eco: "D53",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Knight Defence-Capablanca Anti-Cambridge Springs Variation",
    fen: "r1bqkb1r/pp1n1ppp/2p1pn2/3p2B1/2PP4/P1N1P3/1P3PPP/R2QKBNR b KQkq - 0 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 e3 c6 a3",
    eco: "D51",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Knight Defence-Alekhine Variation",
    fen: "r1bqkb1r/pp1n1ppp/2p1pn2/3p2B1/2PPP3/2N2N2/PP3PPP/R2QKB1R b KQkq - 0 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 Nf3 c6 e4",
    eco: "D51",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Slav Defence Accepted-Anti-Meran System-Botvinnik System",
    fen: "rnbqkb1r/pp3ppp/2p1pn2/6B1/2pPP3/2N2N2/PP3PPP/R2QKB1R b KQkq - 0 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 Bg5 dxc4 e4",
    eco: "D44",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Slav Defence-Normal Variation-Exchange Variation",
    fen: "r1bqkb1r/pp1n1ppp/2p1pn2/3P4/3P4/2N1PN2/PP3PPP/R1BQKB1R b KQkq - 0 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 cxd5",
    eco: "D45",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Slav Defence-Normal Variation-Stoltz Variation",
    fen: "r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/2N1PN2/PPQ2PPP/R1B1KB1R b KQkq - 2 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Qc2",
    eco: "D45",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Traditional Variation-Capablanca Variation",
    fen: "r1bqkb1r/pp1n1ppp/2p1pn2/3p2B1/2PP4/4PN2/PP1N1PPP/R2QKB1R b KQkq - 1 6",
    moves: "d4 d5 c4 e6 Nf3 Nf6 Bg5 Nbd7 e3 c6 Nbd2",
    eco: "D30",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Slav Variation-Breyer Variation",
    fen: "r1bqkb1r/pp1n1ppp/2p1pn2/3p4/2PP4/3BPN2/PP1N1PPP/R1BQK2R b KQkq - 3 6",
    moves: "d4 d5 c4 e6 Nf3 Nf6 e3 c6 Nbd2 Nbd7 Bd3",
    eco: "D30",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Traditional Variation-Anti-Queen's Indian System-Opocensky Variation",
    fen: "rn1qk2r/pbppbppp/1p2p3/8/2PPn3/2N2NP1/PP1BPPBP/R2QK2R b KQkq - 6 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7 Nc3 Ne4 Bd2",
    eco: "E17",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Normal Variation-Sämisch Variation-Steiner Attack",
    fen: "rnbq1rk1/ppp1ppbp/3p1np1/6B1/2PPP3/2N2P2/PP4PP/R2QKBNR b KQ - 2 6",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Bg5",
    eco: "E81",
    difficulty: "Hard"
  },
  {
    name: "Grünfeld Defence-3 Knights Variation-Burille Variation-Closed Variation",
    fen: "rnbq1rk1/ppp1ppbp/5np1/3P4/3P4/2N1PN2/PP3PPP/R1BQKB1R b KQ - 0 6",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 e3 O-O cxd5",
    eco: "D94",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-3 Knights Variation-Burille Variation-Vienna Variation",
    fen: "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP4/1QN1PN2/PP3PPP/R1B1KB1R b KQ - 2 6",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 e3 O-O Qb3",
    eco: "D95",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-Torre Attack-Barry Attack-Gruenfeld Variation",
    fen: "rnbq1rk1/ppp1ppbp/5np1/3p4/3P1B2/2N1PN2/PPP1BPPP/R2QK2R b KQ - 2 6",
    moves: "d4 Nf6 Nf3 g6 Nc3 d5 Bf4 Bg7 e3 O-O Be2",
    eco: "D02",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Traditional Variation-Fianchetto Variation-Smyslov Variation",
    fen: "r1bqk1nr/pp1p1pbp/4p1p1/2p5/3nP3/3PB1P1/PPP1NPBP/R2QK1NR b KQkq - 3 7",
    moves: "e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 e6 Be3 Nd4 Nce2",
    eco: "B24",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Pirc Defence-Austrian Attack-Weiss Variation",
    fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/3PPP2/2NB1N2/PPP3PP/R1BQK2R b KQ - 4 6",
    moves: "e4 d6 d4 Nf6 Nc3 g6 f4 Bg7 Nf3 O-O Bd3",
    eco: "B09",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Pirc Defence-Austrian Attack-Kurajica Variation",
    fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/3PPP2/2N1BN2/PPP3PP/R2QKB1R b KQ - 4 6",
    moves: "e4 d6 d4 Nf6 Nc3 g6 f4 Bg7 Nf3 O-O Be3",
    eco: "B09",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Normal Variation-Paulsen Attack",
    fen: "r1bqkbnr/pppp1ppp/2n5/8/4P3/4Q3/PPP2PPP/RNB1KBNR b KQkq - 2 4",
    moves: "e4 e5 d4 exd4 Qxd4 Nc6 Qe3",
    eco: "C22",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Cunningham Gambit-Bertin Gambit",
    fen: "rnbqk1nr/pppp1ppp/8/8/2B1Pp1b/5NP1/PPPP3P/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 f4 exf4 Nf3 Be7 Bc4 Bh4+ g3",
    eco: "C35",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Kieseritzky Gambit-Berlin Defence-Rubinstein Variation",
    fen: "rnbqkb1r/pppp1p1p/5n2/4N3/3PPppP/8/PPP3P1/RNBQKB1R b KQkq - 0 6",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 Nf6 d4",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "Vienna Game-Vienna Gambit-Knight Variation-Hamppe-Allgaier Gambit",
    fen: "r1bqkbnr/pppp1p1p/2n5/6N1/4PppP/2N5/PPPP2P1/R1BQKB1R b KQkq - 1 6",
    moves: "e4 e5 Nc3 Nc6 f4 exf4 Nf3 g5 h4 g4 Ng5",
    eco: "C25",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Exchange Variation-Paulsen Attack",
    fen: "rnbqkbnr/ppp2ppp/8/3P4/3N4/8/PPP2PPP/RNBQKB1R b KQkq - 0 5",
    moves: "e4 e5 Nf3 d6 d4 exd4 Nxd4 d5 exd5",
    eco: "C41",
    difficulty: "Hard"
  },
  {
    name: "Philidor's Defence-Hanham Variation-Krause Variation-Steiner Variation",
    fen: "r1bqk1nr/pp1nbppp/2pp4/4P3/2B1P3/5N2/PPP2PPP/RNBQ1RK1 b kq - 0 6",
    moves: "e4 e5 Nf3 d6 d4 Nd7 Bc4 c6 O-O Be7 dxe5",
    eco: "C41",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Exchange Variation Doubly Deferred/DERLD/Steenwijker Variation",
    fen: "r1bqk2r/1pppbppp/p1B2n2/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Bxc6",
    eco: "C85",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Centre Attack",
    fen: "r1bqk2r/1pppbppp/p1n2n2/4p3/B2PP3/5N2/PPP2PPP/RNBQ1RK1 b kq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 d4",
    eco: "C84",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Morphy/Knight Attack",
    fen: "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 5 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Nc3",
    eco: "C84",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Open Defence-Knorre Variation",
    fen: "r1bqkb1r/1ppp1ppp/p1n5/4p3/B3n3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 Nc3",
    eco: "C80",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Spanish Countergambit-Harding Countergambit-Fricke Gambit",
    fen: "r1b1kbnr/ppp2ppp/2n5/1B1pN1q1/4P3/8/PPPP1PPP/RNBQ1RK1 b kq - 2 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 d5 Nxe5 Qg5 O-O",
    eco: "C60",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Giuoco Piano-Evans Gambit Declined-Showalter Variation",
    fen: "r1bqk1nr/1ppp1ppp/pbn5/4p3/PPB1P3/2N2N2/2PP1PPP/R1BQK2R b KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bb6 a4 a6 Nc3",
    eco: "C51",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Open Variation-Dubois Variation-Scotch Gambit",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/8/2BpP3/5N2/PPP2PPP/RNBQ1RK1 b kq - 1 5",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O",
    eco: "C55",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Pulling Counterattack-Braune Variation",
    fen: "r1b1kbnr/pppp1ppp/2n5/8/3NP2q/4B3/PPP2PPP/RN1QKB1R b KQkq - 2 5",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Qh4 Be3",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "Alekhine Defence-Modern Variation-Alekhine Variation-Alekhine Gambit",
    fen: "rn1qkb1r/ppp1pppp/1n1p4/4P3/2PP2b1/5N2/PP2BPPP/RNBQK2R b KQkq - 2 6",
    moves: "e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4 c4 Nb6 Be2",
    eco: "B05",
    difficulty: "Hard"
  },
  {
    name: "Alekhine Defence-Modern Variation-Fianchetto Variation-Keres Variation",
    fen: "rnbqk2r/ppp1ppbp/1n1p2p1/4P3/P2P4/1B3N2/1PP2PPP/RNBQK2R b KQkq - 0 7",
    moves: "e4 Nf6 e5 Nd5 d4 d6 Nf3 g6 Bc4 Nb6 Bb3 Bg7 a4",
    eco: "B04",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-2 Knights Attack-Alapin Variation-Soultanbeieff/Soultanbéiev Variation",
    fen: "rnbqkb1r/pp3ppp/2p1pn2/8/P1pP4/2N2N2/1P2PPPP/R1BQKB1R w KQkq - 0 6",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 e6",
    eco: "D16",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-2 Knights Attack-Alapin Variation-Smyslov Variation",
    fen: "r1bqkb1r/pp2pppp/n1p2n2/8/P1pP4/2N2N2/1P2PPPP/R1BQKB1R w KQkq - 1 6",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Na6",
    eco: "D16",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Albin Countergambit-Alapin Variation-Balogh Variation",
    fen: "r1b1kbnr/ppp1qppp/2n5/4P3/2Pp4/5N2/PP1NPPPP/R1BQKB1R w KQkq - 4 6",
    moves: "d4 d5 c4 e5 dxe5 d4 Nf3 Nc6 Nbd2 Qe7",
    eco: "D08",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Noteboom Variation-Anti-Noteboom Variation-Belyavsky Line",
    fen: "rnbqkbnr/pp4pp/2p1pp2/6B1/2pP4/2N2N2/PP2PPPP/R2QKB1R w KQkq - 0 6",
    moves: "d4 d5 c4 e6 Nc3 c6 Nf3 dxc4 Bg5 f6",
    eco: "D31",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-Ragozin Defence-Vienna Variation",
    fen: "rnbqk2r/ppp2ppp/4pn2/6B1/1bpP4/2N2N2/PP2PPPP/R2QKB1R w KQkq - 0 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 Bb4 Bg5 dxc4",
    eco: "D39",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-Semi-Slav Defence Accepted-Anti-Meran System",
    fen: "rnbqkb1r/pp3ppp/2p1pn2/6B1/2pP4/2N2N2/PP2PPPP/R2QKB1R w KQkq - 0 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 Bg5 dxc4",
    eco: "D44",
    difficulty: "Hard"
  },
  {
    name: "Dutch Defence-Fianchetto Variation-Classical Variation-Stonewall Variation",
    fen: "rnbq1rk1/ppp1b1pp/4pn2/3p1p2/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w - - 0 7",
    moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O O-O d5",
    eco: "A92",
    difficulty: "Hard"
  },
  {
    name: "Dutch Defence-Fianchetto Variation-Classical Variation-Alekhine Variation",
    fen: "rnbq1rk1/ppppb1pp/4p3/5p2/2PPn3/5NP1/PP2PPBP/RNBQ1RK1 w - - 6 7",
    moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O O-O Ne4",
    eco: "A92",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Kevitz-Mikenas Defence-Full Metal Jacket",
    fen: "r1b1kbnr/pppp1ppp/8/3pP3/4P2q/8/PPP3PP/RNBQKBNR w KQkq - 1 6",
    moves: "d4 Nc6 d5 Ne5 e4 e6 f4 exd5 fxe5 Qh4+",
    eco: "A40",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-Budapest Gambit-Alekhine Variation-Abonyi Variation",
    fen: "rnbqkb1r/pppp1ppp/2n5/8/2P1PP2/8/PP4PP/RNBQKBNR w KQkq - 1 6",
    moves: "d4 Nf6 c4 e5 dxe5 Ng4 e4 Nxe5 f4 Nec6",
    eco: "A52",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Bogo-Indian Defence-Exchange Variation",
    fen: "rnbqk2r/pppp1ppp/4pn2/8/2PP4/5N2/PP1bPPPP/RN1QKB1R w KQkq - 0 5",
    moves: "d4 Nf6 c4 e6 Nf3 Bb4+ Bd2 Bxd2+",
    eco: "E11",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Reshevsky Variation-Classical Variation-Original/Bogolubov Defence",
    fen: "rnbq1rk1/pp2ppbp/2p2np1/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w - - 0 7",
    moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O O-O c6",
    eco: "D78",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Reshevsky Variation-Classical Variation-Polgar Variation",
    fen: "r1bq1rk1/ppp1ppbp/2n2np1/3p4/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w - - 6 7",
    moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O O-O Nc6",
    eco: "D78",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-King's Knight Variation-Pterodactyl Variation",
    fen: "rnb1k2r/pp1pppbp/5np1/q1p5/2PP4/5NP1/PP2PPBP/RNBQK2R w KQkq - 2 6",
    moves: "d4 Nf6 c4 g6 Nf3 Bg7 g3 c5 Bg2 Qa5+",
    eco: "E64",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-King's Knight Variation-Yugoslav System",
    fen: "rnbq1rk1/pp2ppbp/3p1np1/2p5/2PP4/5NP1/PP2PPBP/RNBQ1RK1 w - - 0 7",
    moves: "d4 Nf6 c4 g6 Nf3 Bg7 g3 d6 Bg2 O-O O-O c5",
    eco: "E64",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit Accepted-Kan Formation",
    fen: "rnbqkbnr/1p1p1ppp/p3p3/8/4P3/2N2N2/PP3PPP/R1BQKB1R w KQkq - 0 6",
    moves: "e4 c5 d4 cxd4 c3 dxc3 Nxc3 e6 Nf3 a6",
    eco: "B21",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit Accepted-Fianchetto Defence",
    fen: "r1bqkbnr/pp1ppp1p/2n3p1/8/4P3/2N2N2/PP3PPP/R1BQKB1R w KQkq - 0 6",
    moves: "e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 g6",
    eco: "B21",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Levenfish Variation-Flohr/Main Variation",
    fen: "r1bqkb1r/pp1npp1p/3p1np1/8/3NPP2/2N5/PPP3PP/R1BQKB1R w KQkq - 1 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 f4 Nbd7",
    eco: "B71",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Taimanov Variation-Szén Variation-Dely-Kasparov Gambit",
    fen: "r1bqkbnr/pp3ppp/2npp3/1N6/4P3/8/PPP2PPP/RNBQKB1R w KQkq - 0 6",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nb5 d6",
    eco: "B44",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Nimzowitsch-Rubinstein Variation-Advance Variation-Rubinstein/Main Countergambit",
    fen: "r1bqkb1r/pp1p1ppp/2n5/2ppP3/3P4/5N2/PPP2PPP/R1BQKB1R w KQkq - 1 7",
    moves: "e4 c5 Nf3 Nf6 e5 Nd5 Nc3 e6 Nxd5 exd5 d4 Nc6",
    eco: "B29",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Classical Defence-Bryan Countergambit",
    fen: "rnb1kbnr/p1pp1ppp/8/1p6/2B1Pp1q/8/PPPP2PP/RNBQ1KNR w kq - 0 5",
    moves: "e4 e5 f4 exf4 Bc4 Qh4+ Kf1 b5",
    eco: "C33",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Rosentreter Gambit-Becker Variation",
    fen: "rnbqk1nr/pppp1pb1/7p/6p1/3PPp1P/5N2/PPP3P1/RNBQKB1R w KQkq - 1 6",
    moves: "e4 e5 f4 exf4 Nf3 g5 d4 h6 h4 Bg7",
    eco: "C37",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Paris Attack-Kieseritzky Gambit-Polerio Defence",
    fen: "rnbqk1nr/ppppbp1p/8/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq - 2 6",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 Be7",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Paris Attack-Kieseritzky Gambit-Paulsen Defence",
    fen: "rnbqk1nr/pppp1pbp/8/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq - 2 6",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 Bg7",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Paris Attack-Kieseritzky Gambit-Salvio (Rosenthal) Defence",
    fen: "rnb1kbnr/ppppqp1p/8/4N3/4PppP/8/PPPP2P1/RNBQKB1R w KQkq - 2 6",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 Qe7",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Gambit-Panteldakis Countergambit-Shirazi Line",
    fen: "rnbq1bnr/ppppk1pp/8/5P1Q/5p2/8/PPPP2PP/RNB1KBNR w KQ - 2 5",
    moves: "e4 e5 f4 f5 exf5 exf4 Qh5+ Ke7",
    eco: "C30",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Exchange Variation-Normal Variation-King's Bishop/Classical Variation",
    fen: "r1bqk1nr/1pp2ppp/p1pb4/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 2 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 O-O Bd6",
    eco: "C68/C69",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Exchange Variation-Normal Variation-Gligoric Variation",
    fen: "r1bqkbnr/1pp3pp/p1p2p2/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 O-O f6",
    eco: "C69",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Alapin's Defence-Alapin Gambit",
    fen: "r1bqk1nr/ppp2ppp/2p5/b3p3/4P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 Bb4 c3 Ba5 Bxc6 dxc6",
    eco: "C60",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Cordel Defence-Central Defence-Benelux Variation",
    fen: "r1bq1rk1/pppp1ppp/1bn2n2/1B2p3/3PP3/2P2N2/PP3PPP/RNBQ1RK1 w - - 1 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 Bc5 c3 Nf6 O-O O-O d4 Bb6",
    eco: "C64",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Bird Defence-Paulsen Variation",
    fen: "r1bqkb1r/ppppnppp/8/1B6/3pP3/8/PPPP1PPP/RNBQ1RK1 w kq - 2 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nd4 Nxd4 exd4 O-O Ne7",
    eco: "C61",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Berlin Defence-Beverwijk Variation-Benelux Variation",
    fen: "r1bq1rk1/pppp1ppp/1bn2n2/1B2p3/3PP3/2P2N2/PP3PPP/RNBQ1RK1 w - - 1 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Bc5 c3 O-O d4 Bb6",
    eco: "C65",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Giuoco Piano-Evans Gambit Accepted-Stone-Ware Variation",
    fen: "r1bqk1nr/pppp1ppp/2nb4/4p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Bd6",
    eco: "C51",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Giuoco Piano-Evans Gambit Accepted-Anderssen Variation",
    fen: "r1bqk1nr/ppppbppp/2n5/4p3/2B1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Be7",
    eco: "C51",
    difficulty: "Hard"
  },
  {
    name: "Italian Game-Hungarian Defence-Benima Variation-Tartakower Variation",
    fen: "r1bqk2r/ppppbppp/2n5/4P3/2Bpn3/2P2N2/PP3PPP/RNBQK2R w KQkq - 1 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Be7 d4 exd4 c3 Nf6 e5 Ne4",
    eco: "C50",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-4 Knights Game-Double Ruy Lopez-Symmetrical Variation",
    fen: "r1bq1rk1/ppp2ppp/2np1n2/1B2p3/1b2P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 7",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6",
    eco: "C49",
    difficulty: "Hard"
  },
  {
    name: "4 Knights Game-Giuoco Pianissimo-Main Line-Centre Prophylaxis Variation",
    fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 7",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bc4 Bc5 d3 O-O O-O d6",
    eco: "C46",
    difficulty: "Hard"
  },
  {
    name: "4 Knights Game-Giuoco Pianissimo-Main Line-Kingside Prophylaxis Variation",
    fen: "r1bq1rk1/pppp1pp1/2n2n1p/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 7",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bc4 Bc5 d3 O-O O-O h6",
    eco: "C46",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-4 Knights Game-Leipzig Gambit-Plasma Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/8/3PP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Nxe5 Nxe5 d4 Nc6",
    eco: "C46",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Winawer Variation-Retreat Variation-Armenian Line",
    fen: "rnbqk1nr/pp3ppp/4p3/b2pP3/1P1p4/P1N5/2P2PPP/R1BQKBNR w KQkq - 0 7",
    moves: "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Ba5 b4 cxd4",
    eco: "C18",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Albin-Alekhine-Chatard Attack-Maróczy Variation",
    fen: "rnbqk2r/1ppnbppp/p3p3/3pP1B1/3P3P/2N5/PPP2PP1/R2QKBNR w KQkq - 0 7",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 h4 a6",
    eco: "C13",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Albin-Alekhine-Chatard Attack-Breyer Variation",
    fen: "rnbqk2r/pp1nbppp/4p3/2ppP1B1/3P3P/2N5/PPP2PP1/R2QKBNR w KQkq - 0 7",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 h4 c5",
    eco: "C13",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Albin-Alekhine-Chatard Attack-Teichmann Variation",
    fen: "rnbqk2r/pppnb1pp/4pp2/3pP1B1/3P3P/2N5/PPP2PP1/R2QKBNR w KQkq - 0 7",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 h4 f6",
    eco: "C13",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Vistaneckis Variation-Frankfurt Variation",
    fen: "rnbqk1nr/p1p1bppp/1p2p3/3pP3/3P4/2N1B3/PPP2PPP/R2QKBNR w KQkq - 0 7",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Ng8 Be3 b6",
    eco: "C13",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Robatsch Defence-Semi-Averbakh Variation-Pterodactyl Variation Declined",
    fen: "rnb1k1nr/pp2ppbp/3p2p1/q1p5/2PPP3/5N2/PP2BPPP/RNBQK2R w KQkq - 2 6",
    moves: "e4 g6 d4 Bg7 c4 c5 Nf3 d6 Be2 Qa5+",
    eco: "B06",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Normal Defence-Exchange Variation-Positional Line",
    fen: "rnbqkb1r/ppp2ppp/5n2/3p2B1/3P4/2N5/PP2PPPP/R2QKBNR b KQkq - 1 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5",
    eco: "D35",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Dutch Defence-Staunton Gambit Accepted-Blackmar Gambit #2",
    fen: "rnbqkb1r/ppppp1pp/5n2/8/3P4/3B1N2/PPP3PP/RNBQK2R b KQkq - 2 5",
    moves: "d4 f5 e4 fxe4 f3 exf3 Nxf3 Nf6 Bd3",
    eco: "A82",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Averbakh System-Benoni Defence-Advance Variation",
    fen: "rnbq1rk1/pp2ppbp/3p1np1/2pP2B1/2P1P3/2N5/PP2BPPP/R2QK1NR b KQ - 0 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5 c5 d5",
    eco: "E75",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Sämisch Variation-Orthodox Variation-Closed Variation",
    fen: "rnbq1rk1/ppp2pbp/3p1np1/3Pp3/2P1P3/2N1BP2/PP4PP/R2QKBNR b KQ - 0 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5",
    eco: "E87",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Normal Variation-Deferred Fianchetto Variation-Pomar System",
    fen: "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N3P1/PP2NPBP/R1BQK2R b KQ - 1 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 g3 O-O Bg2 e5 Nge2",
    eco: "E72",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Rare Defence-Classical Variation-Gligoric-Taimanov System",
    fen: "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N1BN2/PP2BPPP/R2QK2R b KQ - 1 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 Be3",
    eco: "E92",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Rare Defence-Classical Variation-Petrosian System",
    fen: "rnbq1rk1/ppp2pbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQK2R b KQ - 0 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5",
    eco: "E92",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Grünfeld Defence-Lutikov Variation-Murey Attack",
    fen: "rnbqkb1r/pp2pp1p/6p1/2pn4/N2P4/5P2/PP2P1PP/R1BQKBNR b KQkq - 1 6",
    moves: "d4 Nf6 c4 g6 Nc3 d5 f3 c5 cxd5 Nxd5 Na4",
    eco: "D80",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Grünfeld Defence-3 Knights Variation-Flohr Attack",
    fen: "rnbqk2r/ppp1ppbp/5np1/3p4/Q1PP4/2N2N2/PP2PPPP/R1B1KB1R b KQkq - 3 5",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qa4+",
    eco: "D90",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit-Coles Sicilian Gambit",
    fen: "r1bqkb1r/pp1ppppp/2n2n2/8/2B1P3/8/PPP2PPP/RNBQK1NR b KQkq - 4 5",
    moves: "e4 c5 d4 cxd4 Qxd4 Nc6 Qd1 Nf6 Bc4",
    eco: "B21",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Najdorf Variation-Opocensky Variation",
    fen: "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP1BPPP/R1BQK2R b KQkq - 1 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be2",
    eco: "B92",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Najdorf Variation-Adams Attack",
    fen: "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N4P/PPP2PP1/R1BQKB1R b KQkq - 0 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 h3",
    eco: "B90",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Scheveningen Variation-Classical Variation",
    fen: "rnbqkb1r/pp3ppp/3ppn2/8/3NP3/2N5/PPP1BPPP/R1BQK2R b KQkq - 1 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Be2",
    eco: "B83",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Scheveningen Variation-Matanovic Attack",
    fen: "rnbqkb1r/pp3ppp/3ppn2/8/3NPP2/2N5/PPP3PP/R1BQKB1R b KQkq - 0 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 f4",
    eco: "B82",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Scheveningen Variation-Keres Attack",
    fen: "rnbqkb1r/pp3ppp/3ppn2/8/3NP1P1/2N5/PPP2P1P/R1BQKB1R b KQkq - 0 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 g4",
    eco: "B81",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Dragon Variation-Classical Variation",
    fen: "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N5/PPP1BPPP/R1BQK2R b KQkq - 1 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be2",
    eco: "B72",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Benko Variation-Sozin Variation-Classical Variation",
    fen: "r1bqkb1r/pp2pppp/2np1n2/8/2BNP3/2N5/PPP2PPP/R1BQK2R b KQkq - 4 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bc4",
    eco: "B57",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Classical Variation-Yates Variation",
    fen: "r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2NB4/PPP2PPP/R1BQK2R b KQkq - 4 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bd3",
    eco: "B56",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Classical Variation-Richter-Rauzer Variation",
    fen: "r1bqkb1r/pp2pppp/2np1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R b KQkq - 4 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bg5",
    eco: "B60",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Knight Variation-Wing Attack-Fianchetto Variation",
    fen: "rnbqkbnr/3p1ppp/p3p3/1p6/3NP3/2N3P1/PPP2P1P/R1BQKB1R b KQkq - 0 6",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Nc3 b5 g3",
    eco: "B43",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Anderssen Counterattack-Pin Variation-Koch Variation",
    fen: "rnbqk2r/pp1p1ppp/4pn2/4P3/1b1N4/2N5/PPP2PPP/R1BQKB1R b KQkq - 0 6",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nf6 Nc3 Bb4 e5",
    eco: "B40",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Anderssen Counterattack-4 Knights Variation-Exchange Variation",
    fen: "r1bqkb1r/pp1p1ppp/2N1pn2/8/4P3/2N5/PPP2PPP/R1BQKB1R b KQkq - 0 6",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Nxc6",
    eco: "B45",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Open Variation-Pelikán Variation-Classical Variation",
    fen: "r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N5/PPP1BPPP/R1BQK2R b KQkq - 1 6",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Be2",
    eco: "B58",
    difficulty: "Hard"
  },
  {
    name: "Old Sicilian Defence-Open Variation-Pelikán Variation-Richter Variation",
    fen: "r1bqkb1r/pp2pppp/2np1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R b KQkq - 1 6",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Bg5",
    eco: "B60",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Pelikán Variation-Lasker Variation-Exchange Variation",
    fen: "r1bqkb1r/pp1p1ppp/2N2n2/4p3/4P3/2N5/PPP2PPP/R1BQKB1R b KQkq - 0 6",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Nxc6",
    eco: "B33",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Exchange Variation-Rubinstein Variation",
    fen: "r1bqkb1r/pp2pppp/2n2n2/3p4/3P1B2/2PB4/PP3PPP/RN1QK1NR b KQkq - 2 6",
    moves: "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6 Bf4",
    eco: "B13",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Main Line-Classical Variation-Flohr Variation",
    fen: "rn1qkbnr/pp2pppp/2p3b1/8/3P4/6NN/PPP2PPP/R1BQKB1R b KQkq - 4 6",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 Nh3",
    eco: "B18",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Main Line-Karpov Variation-Kasparov Attack",
    fen: "r1bqkb1r/pp1npppp/2p2n2/8/3P4/5NN1/PPP2PPP/R1BQKB1R b KQkq - 4 6",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Nf3 Ngf6 Ng3",
    eco: "B17",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Traditional Variation-Knight Variation-Alekhine Gambit",
    fen: "rnbqkb1r/pp2pppp/2p2n2/8/3PN3/3B4/PPP2PPP/R1BQK1NR b KQkq - 2 5",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nf6 Bd3",
    eco: "B15",
    difficulty: "Hard"
  },
  {
    name: "King's Bishop's Gambit-Cozio Defence-Bogoljubov Variation-Paulsen Attack",
    fen: "rnbqk2r/pppp1ppp/5n2/4P3/1bB2p2/2N5/PPPP2PP/R1BQK1NR b KQkq - 0 5",
    moves: "e4 e5 f4 exf4 Bc4 Nf6 Nc3 Bb4 e5",
    eco: "C33",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Norwalde Variation-Buecker Gambit",
    fen: "rnb1k1nr/pppp1ppp/8/4p3/1bB1Pq2/2N2N2/PPPP2PP/R1BQK2R b KQkq - 3 5",
    moves: "e4 e5 f4 Qf6 Nf3 Qxf4 Nc3 Bb4 Bc4",
    eco: "C30",
    difficulty: "Hard"
  },
  {
    name: "Vienna Game-Vienna Gambit-Main Line-Paulsen Attack",
    fen: "rnbqkb1r/ppp2ppp/8/3pP3/4n3/2N2Q2/PPPP2PP/R1B1KBNR b KQkq - 1 5",
    moves: "e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Qf3",
    eco: "C29",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-López Countergambit-Jaenisch Variation",
    fen: "rnbqkb1r/ppp3pN/3p3n/5p2/2BpP3/8/PPP2PPP/RNBQK2R b KQkq - 0 6",
    moves: "e4 e5 Nf3 d6 Bc4 f5 d4 exd4 Ng5 Nh6 Nxh7",
    eco: "C41",
    difficulty: "Hard"
  },
  {
    name: "Philidor's Defence-Exchange Variation-Knight Chase Variation-Main Line",
    fen: "rnbqkbnr/pp3ppp/3p4/1Bp5/3NP3/8/PPP2PPP/RNBQK2R b KQkq - 1 5",
    moves: "e4 e5 Nf3 d6 d4 exd4 Nxd4 c5 Bb5+",
    eco: "C41",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Exchange Variation-Keres Variation-Romanovsky Variation",
    fen: "r1bqkbnr/1pp3pp/p1p2p2/4p3/4P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 Nc3 f6 d3",
    eco: "C68",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Spanish Countergambit-Harding Gambit",
    fen: "r1b1kbnr/ppp2ppp/2N5/1B1p2q1/4P3/8/PPPP1PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Bb5 d5 Nxe5 Qg5 Nxc6",
    eco: "C60",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Improved Steinitz Defence-Hedgehog Variation-Closed Bernstein Variation",
    fen: "r2qk2r/pppbbppp/2np1n2/1B2p1B1/3PP3/2N2N2/PPP2PPP/R2Q1RK1 b kq - 4 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O d6 d4 Bd7 Nc3 Be7 Bg5",
    eco: "C66",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Knight Attack-Polerio Defence-Kieseritsky/Kieseritzky Variation",
    fen: "r1bqkb1r/ppp2ppp/5n2/n2Pp1N1/2B5/3P4/PPP2PPP/RNBQK2R b KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 d3",
    eco: "C58",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-4 Knights Game-Double Ruy Lopez-Nimzowitsch/Paulsen Variation",
    fen: "r1bq1rk1/pppp1ppp/2B2n2/4p3/1b2P3/2N2N2/PPPP1PPP/R1BQ1RK1 b - - 0 6",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O Bxc6",
    eco: "C49",
    difficulty: "Hard"
  },
  {
    name: "4 Knights Game-Spanish Variation-Rubinstein Countergambit-Bogoljubov Variation",
    fen: "r1b1kb1r/ppppqppp/5n2/1B2N3/3nPP2/2N5/PPPP2PP/R1BQK2R b KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Nxe5 Qe7 f4",
    eco: "C48",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Normal Variation-St. George Variation-St. George Gambit",
    fen: "rnbqkbnr/2pp1ppp/4p3/1B6/3PP3/8/PP3PPP/RNBQK1NR b KQkq - 0 5",
    moves: "e4 e6 d4 a6 c4 b5 cxb5 axb5 Bxb5",
    eco: "C01",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Advance Variation-Nimzowitsch Attack-Nimzowitsch Gambit",
    fen: "rnbqkbnr/pp3ppp/4p3/3pP3/3p2Q1/5N2/PPP2PPP/RNB1KB1R b KQkq - 1 5",
    moves: "e4 e6 d4 d5 e5 c5 Qg4 cxd4 Nf3",
    eco: "C02",
    difficulty: "Hard"
  },
  {
    name: "Barnes Opening-Transvestite Opening",
    fen: "r1bq1rk1/pp1pbppp/2n1p3/2pn4/8/2P2P2/PP1PP1PP/RNBKQBNR b - - 8 8",
    moves: "f3 c5 Kf2 Nc6 Ke3 e6 c3 Be7 Kd3 Nf6 Kc2 O-O Qe1 Nd5 Kd1",
    eco: "A00",
    difficulty: "Hard"
  },
  {
    name: "Réti Opening-Symmetrical Variation-Nimzo-Larsen Variation-Double Fianchetto Attack",
    fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/8/1P3NP1/PBPPPPBP/RN1Q1RK1 b - - 1 6",
    moves: "Nf3 Nf6 b3 g6 Bb2 Bg7 g3 O-O Bg2 d6 O-O",
    eco: "A49",
    difficulty: "Hard"
  },
  {
    name: "Réti Opening-King's Indian Attack-Barcza Defence-Fianchetto Variation",
    fen: "rnbq1rk1/ppp1ppbp/3p1np1/8/8/1P3NP1/PBPPPPBP/RN1Q1RK1 b - - 1 6",
    moves: "Nf3 Nf6 g3 g6 b3 Bg7 Bb2 O-O Bg2 d6 O-O",
    eco: "A05",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Albin Countergambit-Lasker Trap",
    fen: "rnbqk1nr/ppp2ppp/8/4P3/1bP5/4p3/PP1B1PPP/RN1QKBNR w KQkq - 0 6",
    moves: "d4 d5 c4 e5 dxe5 d4 e3 Bb4+ Bd2 dxe3",
    eco: "D08",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Knight Defence-The Manhattan Defence-Westphalian Variation",
    fen: "r1bqk2r/pp1n1ppp/4pn2/2pp2B1/1bPP4/2N1PN2/PP3PPP/R2QKB1R w KQkq - 0 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 e3 Bb4 Nf3 c5",
    eco: "D51",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Slav Defence-Normal Variation-Romih Variation",
    fen: "r1bqk2r/pp1n1ppp/2p1pn2/3p4/1bPP4/2NBPN2/PP3PPP/R1BQK2R w KQkq - 3 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Bd3 Bb4",
    eco: "D46",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Slav Defence-Normal Variation-Chigorin Defence",
    fen: "r1bqk2r/pp1n1ppp/2pbpn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R w KQkq - 3 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Bd3 Bd6",
    eco: "D46",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Slav Defence-Normal Variation-Bogoljubov Variation",
    fen: "r1bqk2r/pp1nbppp/2p1pn2/3p4/2PP4/2NBPN2/PP3PPP/R1BQK2R w KQkq - 3 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Bd3 Be7",
    eco: "D46",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Slav Variation-Breyer Variation-Semmering Variation",
    fen: "r1bqkb1r/pp1n1ppp/4pn2/2pp4/2PP4/3BPN2/PP1N1PPP/R1BQK2R w KQkq - 0 7",
    moves: "d4 d5 c4 e6 Nf3 Nf6 e3 c6 Nbd2 Nbd7 Bd3 c5",
    eco: "D30",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Slav Variation-Stonewall Variation",
    fen: "rnbqkb1r/pp4pp/2p1p3/3p1p2/2PPn3/3BPN2/PP1N1PPP/R1BQK2R w KQkq - 0 7",
    moves: "d4 d5 c4 e6 Nf3 Nf6 e3 c6 Nbd2 Ne4 Bd3 f5",
    eco: "D30",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-Trompowsky Attack-Raptor Variation-Hergert Gambit",
    fen: "rnbqkb1r/pppp1ppp/8/4p1P1/3P4/8/PPP1PPP1/RN1QKBNR w KQkq - 0 5",
    moves: "d4 Nf6 Bg5 Ne4 h4 Nxg5 hxg5 e5",
    eco: "A45",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Leningrad Variation-Averbakh Gambit",
    fen: "rnbqk2r/p2p1pp1/4pn1p/1ppP4/1bP4B/2N5/PP2PPPP/R2QKBNR w KQkq - 0 7",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Bg5 h6 Bh4 c5 d5 b5",
    eco: "E30",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-Classical Variation-Noa Variation-Modern Line",
    fen: "rnb1k2r/ppp2ppp/4pn2/3q4/1b1P4/2N5/PPQ1PPPP/R1B1KBNR w KQkq - 0 6",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 d5 cxd5 Qxd5",
    eco: "E35",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Quiet Line-Check Variation-Intermezzo Line",
    fen: "rn1qk2r/p1ppbppp/bp2pn2/8/2PP4/1P3NP1/P2BPP1P/RN1QKB1R w KQkq - 3 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Ba6 b3 Bb4+ Bd2 Be7",
    eco: "E15",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Fianchetto Traditional Variation-Capablanca Variation-Yates Variation",
    fen: "rn1qk2r/1bpp1ppp/1p2pn2/p7/1bPP4/5NP1/PP1BPPBP/RN1QK2R w KQkq - 0 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Bb4+ Bd2 a5",
    eco: "E16",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Fianchetto Traditional Variation-Capablanca Variation-Riumin Variation",
    fen: "rn1qk2r/pbppbppp/1p2pn2/8/2PP4/5NP1/PP1BPPBP/RN1QK2R w KQkq - 5 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Bb4+ Bd2 Be7",
    eco: "E16",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Brinckmann Attack-Landau Variation-Grünfeld Gambit",
    fen: "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP1B2/2N1P3/PP3PPP/R2QKBNR w KQ - 1 6",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Bf4 Bg7 e3 O-O",
    eco: "D83",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Burille Variation-Vienna Variation-Botvinnik Variation",
    fen: "rnbq1rk1/ppp2pbp/4pnp1/3p4/2PP4/1QN1PN2/PP3PPP/R1B1KB1R w KQ - 0 7",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 e3 O-O Qb3 e6",
    eco: "D95",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Alapin Variation-Barmen Defence-Modern Line",
    fen: "rn2kb1r/pp2pppp/5n2/2pq4/3P2b1/2P2N2/PP3PPP/RNBQKB1R w KQkq - 3 6",
    moves: "e4 c5 c3 d5 exd5 Qxd5 d4 Nf6 Nf3 Bg4",
    eco: "B22",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Fianchetto Variation-Botvinnik Defence I-Edge Variation",
    fen: "r1bqk2r/pp2npbp/2np2p1/2p1p3/4PP2/2NP2PN/PPP3BP/R1BQK2R w KQkq - 2 8",
    moves: "e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6 f4 e5 Nh3 Nge7",
    eco: "B25",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Tartakower Variation-Chekhover Variation-Zaitsev Defence",
    fen: "r1b1kbnr/pp1qpppp/2np4/1B6/3QP3/5N2/PPP2PPP/RNB1K2R w KQkq - 3 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Qxd4 Nc6 Bb5 Qd7",
    eco: "B53",
    difficulty: "Hard"
  },
  {
    name: "Centre Countergambit-Anderssen Counterattack-Goteborg System-Collijn Variation",
    fen: "rn2kbnr/ppp2ppp/8/q3p3/3P2b1/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 2 6",
    moves: "e4 d5 exd5 Qxd5 Nc3 Qa5 d4 e5 Nf3 Bg4",
    eco: "B01",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Centre Countergambit-Mieses Variation-Classical Variation",
    fen: "rn2kb1r/ppp1pppp/5n2/q4b2/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 3 6",
    moves: "e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6 Nf3 Bf5",
    eco: "B01",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Centre Countergambit-Mieses Variation-Lasker Variation",
    fen: "rn2kb1r/ppp1pppp/5n2/q7/3P2b1/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 3 6",
    moves: "e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6 Nf3 Bg4",
    eco: "B01",
    difficulty: "Hard"
  },
  {
    name: "Centre Gambit Accepted-Normal Variation-Paulsen Attack-L'Hermet Variation",
    fen: "r1bqkbnr/pppp2pp/2n5/5p2/4P3/4Q3/PPP2PPP/RNB1KBNR w KQkq - 0 5",
    moves: "e4 e5 d4 exd4 Qxd4 Nc6 Qe3 f5",
    eco: "C22",
    difficulty: "Hard"
  },
  {
    name: "Centre Gambit Accepted-Normal Variation-Paulsen Attack-Berger Variation",
    fen: "r1bqkb1r/pppp1ppp/2n2n2/8/4P3/4Q3/PPP2PPP/RNB1KBNR w KQkq - 3 5",
    moves: "e4 e5 d4 exd4 Qxd4 Nc6 Qe3 Nf6",
    eco: "C22",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Classical Variation-Blackburne Variation",
    fen: "r2qk2r/ppp2ppp/2np1n2/2b1p3/2B1PPb1/2NP1N2/PPP3PP/R1BQK2R w KQkq - 1 7",
    moves: "e4 e5 f4 Bc5 Nf3 d6 Nc3 Nf6 Bc4 Nc6 d3 Bg4",
    eco: "C30",
    difficulty: "Hard"
  },
  {
    name: "King's Gambit Declined-Falkbeer Countergambit Accepted-Charousek Gambit-Morphy Gambit",
    fen: "rnbqk2r/ppp2ppp/5n2/3P4/1b3P2/2NPp3/PPPB2PP/R2QKBNR w KQkq - 0 7",
    moves: "e4 e5 f4 d5 exd5 e4 d3 Nf6 Nc3 Bb4 Bd2 e3",
    eco: "C31",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Muzio Gambit-Kling and Horwitz Counterattack",
    fen: "rnb1kbnr/ppppqp1p/8/8/2B1Ppp1/5N2/PPPP2PP/RNBQ1RK1 w kq - 2 6",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 O-O Qe7",
    eco: "C37",
    difficulty: "Hard"
  },
  {
    name: "Vienna Game-Knight Variation-Hamppe-Allgaier Gambit-Alapin Variation",
    fen: "r1bqkbnr/ppp2p1p/2np4/6N1/4PppP/2N5/PPPP2P1/R1BQKB1R w KQkq - 0 7",
    moves: "e4 e5 Nc3 Nc6 f4 exf4 Nf3 g5 h4 g4 Ng5 d6",
    eco: "C25",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Averbakh Variation",
    fen: "r1bqk2r/1pp1bppp/p1np1n2/4p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 w kq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 d6",
    eco: "C87",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Berlin Defence-Improved Steinitz Defence-Closed Wolf Variation",
    fen: "r2qkb1r/pppb1ppp/2np1n2/1B6/3pP3/2N2N2/PPP2PPP/R1BQ1RK1 w kq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O d6 d4 Bd7 Nc3 exd4",
    eco: "C66",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Berlin Defence-Rio Gambit Accepted-Rosenthal Variation",
    fen: "r1bqkb1r/1ppp1ppp/p1n5/1B2p3/3Pn3/5N2/PPP2PPP/RNBQ1RK1 w kq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 a6",
    eco: "C67",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Berlin Defence-Rio Gambit Accepted-Rio de Janeiro Variation",
    fen: "r1bqk2r/ppppbppp/2n5/1B2p3/3Pn3/5N2/PPP2PPP/RNBQ1RK1 w kq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Be7",
    eco: "C67",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Berlin Defence-Rio Gambit Accepted-l'Hermet Variation",
    fen: "r1bqkb1r/pppp1ppp/2nn4/1B2p3/3P4/5N2/PPP2PPP/RNBQ1RK1 w kq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6",
    eco: "C67",
    difficulty: "Hard"
  },
  {
    name: "Giuoco Piano-Evans Gambit Accepted-Main Line-Leonhardt Countergambit",
    fen: "r1bqk1nr/p1pp1ppp/2n5/bp2p3/2BPP3/2P2N2/P4PPP/RNBQK2R w KQkq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 b5",
    eco: "C52",
    difficulty: "Hard"
  },
  {
    name: "Giuoco Piano-Evans Gambit Accepted-Main Line-Bronstein/Alapin Defence",
    fen: "r1bqk1nr/ppp2ppp/2np4/b3p3/2BPP3/2P2N2/P4PPP/RNBQK2R w KQkq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 d6",
    eco: "C52",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Dubois Variation-Scotch Gambit-De Riviere Defence",
    fen: "r1bqk2r/ppppbppp/2n2n2/8/2BpP3/5N2/PPP2PPP/RNBQ1RK1 w kq - 2 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Be7",
    eco: "C55",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Dubois Variation-Scotch Gambit-Janowski Defence",
    fen: "r1bqkb1r/ppp2ppp/2np1n2/8/2BpP3/5N2/PPP2PPP/RNBQ1RK1 w kq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O d6",
    eco: "C55",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Knight Attack-Gruber Variation-Fegatello Attack",
    fen: "r1bqkb1r/ppp2ppp/2n5/3np1N1/2B5/8/PPPP1PPP/RNBQK2R w KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5",
    eco: "C57",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Spanish Variation-Staunton Variation-Sozin Variation",
    fen: "r1b1kbnr/ppp2ppp/2n5/1B2N1q1/4p3/2P5/PP1P1PPP/RNBQK2R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 c3 d5 Bb5 dxe4 Nxe5 Qg5",
    eco: "C44",
    difficulty: "Hard"
  },
  {
    name: "Scotch Game-Pulling Counterattack-Steinitz Variation-Modern Defence",
    fen: "r1b1k1nr/pppp1ppp/2n5/8/1b1NP2q/2N5/PPP2PPP/R1BQKB1R w KQkq - 3 6",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Qh4 Nc3 Bb4",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Rubinstein Variation-Fort Knox Variation",
    fen: "rn1qkbnr/ppp2ppp/2b1p3/8/3PN3/5N2/PPP2PPP/R1BQKB1R w KQkq - 3 6",
    moves: "e4 e6 d4 d5 Nc3 dxe4 Nxe4 Bd7 Nf3 Bc6",
    eco: "C10",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Rubinstein Variation-Capablanca Variation",
    fen: "rn1qkb1r/pppb1ppp/4pn2/8/3PN3/5N2/PPP2PPP/R1BQKB1R w KQkq - 3 6",
    moves: "e4 e6 d4 d5 Nc3 dxe4 Nxe4 Bd7 Nf3 Nf6",
    eco: "C10",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Albin-Alekhine-Chatard Attack-Spielmann Variation",
    fen: "rnbq1rk1/pppnbppp/4p3/3pP1B1/3P3P/2N5/PPP2PP1/R2QKBNR w KQ - 1 7",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 h4 O-O",
    eco: "C13",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Alapin Variation-Czech Defence-Dutch/Classical System",
    fen: "rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP4/2N1PN2/1P3PPP/R1BQKB1R b KQkq - 0 6",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 e3",
    eco: "D18",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Tarrasch Defence-2 Knights Variation-Schlechter-Rubinstein System",
    fen: "r1bqkbnr/pp3ppp/2n5/2pp4/3P4/2N2NP1/PP2PP1P/R1BQKB1R b KQkq - 0 6",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3",
    eco: "D33",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Knight Defence-Exchange Variation",
    fen: "r1bqkb1r/pp1n1ppp/2p1pn2/3P2B1/3P4/2N1P3/PP3PPP/R2QKBNR b KQkq - 0 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 e3 c6 cxd5",
    eco: "D51",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-Ragozin Defence-Alekhine Variation",
    fen: "rnbqk2r/ppp2ppp/4pn2/3p4/QbPP4/2N2N2/PP2PPPP/R1B1KB1R b KQkq - 5 5",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 Bb4 Qa4+",
    eco: "D38",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-Semi-Tarrasch Defence-Exchange Variation",
    fen: "rnbqkb1r/pp3ppp/4p3/2pn4/3PP3/2N2N2/PP3PPP/R1BQKB1R b KQkq - 0 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c5 cxd5 Nxd5 e4",
    eco: "D41",
    difficulty: "Hard"
  },
  {
    name: "Colle System-Zukertort Variation-Rubinstein Opening-Semi-Slav Defence",
    fen: "r1bq1rk1/pppn1ppp/3bpn2/3p4/3P4/1P1BPN2/PBP2PPP/RN1Q1RK1 b - - 2 7",
    moves: "d4 d5 Nf3 Nf6 e3 e6 Bd3 Nbd7 O-O Bd6 b3 O-O Bb2",
    eco: "D05",
    difficulty: "Hard"
  },
  {
    name: "Dutch Defence-Classical Variation-Stonewall Variation-Botvinnik Variation",
    fen: "rnbq1rk1/ppp1b1pp/4pn2/3p1p2/2PP4/1P3NP1/P3PPBP/RNBQ1RK1 b - - 0 7",
    moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O O-O d5 b3",
    eco: "A93",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-Trompowsky Attack-Edge Variation-Hergert Gambit #1",
    fen: "rn1qkb1r/ppp1pppp/5n2/3p1b2/3PP2B/2N2P2/PPP3PP/R2QKBNR b KQkq - 0 6",
    moves: "d4 Nf6 Bg5 Ne4 Bh4 d5 f3 Nf6 Nc3 Bf5 e4",
    eco: "A45",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-Benoni Defence-King Pawn Lines-Pawn Storm Variation",
    fen: "rnbqkb1r/pp3p1p/3p1np1/2pP4/4PP2/2N5/PP4PP/R1BQKBNR b KQkq - 0 7",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4 g6 f4",
    eco: "A66",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-Benoni Defence-King Pawn Lines-Classical Variation",
    fen: "rnbqkb1r/pp3p1p/3p1np1/2pP4/4P3/2N2N2/PP3PPP/R1BQKB1R b KQkq - 1 7",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4 g6 Nf3",
    eco: "A70",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-Normal Variation-Modern Benoni Defence-Fianchetto Variation",
    fen: "rnbqkb1r/pp3p1p/3p1np1/2pP4/8/2N2NP1/PP2PP1P/R1BQKB1R b KQkq - 0 7",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 Nf3 g6 g3",
    eco: "A61",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-Normal Variation-Modern Benoni Defence-Nimzowitsch/Knight's Tour/Nimzovich Variation",
    fen: "rnbqkb1r/pp3p1p/3p1np1/2pP4/8/2N5/PP1NPPPP/R1BQKB1R b KQkq - 1 7",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 Nf3 g6 Nd2",
    eco: "A61",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-Rubinstein Line-Taimanov Variation-Ragozin Defence",
    fen: "r1bq1rk1/ppp2ppp/2n1pn2/3p4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 b - - 1 7",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 Nc6 Nf3 O-O Bd3 d5 O-O",
    eco: "E46",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Traditional Variation-Old Main Line-Euwe Variation",
    fen: "rn1q1rk1/pbppbppp/1p2pn2/8/2PP4/1P3NP1/P3PPBP/RNBQ1RK1 b - - 0 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7 O-O O-O b3",
    eco: "E17",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Fianchetto Traditional Variation-Traditional Variation-Old Main Line",
    fen: "rn1q1rk1/pbppbppp/1p2pn2/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 b - - 6 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7 O-O O-O Nc3",
    eco: "E18",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Fianchetto Traditional Variation-Sämisch Variation-Buerger Variation",
    fen: "rn1qkb1r/pb1p1ppp/1p3n2/2pp2N1/2P5/6P1/PP2PPBP/RNBQK2R b KQkq - 1 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 c5 d5 exd5 Ng5",
    eco: "E15",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Fianchetto Traditional Variation-Sämisch Variation-Rubinstein Variation",
    fen: "rn1qkb1r/pb1p1ppp/1p3n2/2pp4/2P4N/6P1/PP2PPBP/RNBQK2R b KQkq - 1 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 c5 d5 exd5 Nh4",
    eco: "E16",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Rare Defence-Classical Variation-Orthodox/Modern Variation",
    fen: "rnbq1rk1/ppp2pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 b - - 1 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O",
    eco: "E94",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Najdorf Variation-Dekker Gambit",
    fen: "rnbqkb1r/1p2pppp/p2p1n2/8/3NP1P1/2N5/PPP2P1P/R1BQKB1R b KQkq - 0 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 g4",
    eco: "B90",
    difficulty: "Hard"
  },
  {
    name: "Old Sicilian Defence-Nimzowitsch-Rossolimo Attack-Fianchetto Variation-Totsky Attack",
    fen: "r1bqk2r/pp1pppbp/2n2np1/1Bp5/Q3P3/2P2N2/PP1P1PPP/RNB2RK1 b kq - 2 6",
    moves: "e4 c5 Nf3 Nc6 Bb5 g6 O-O Bg7 c3 Nf6 Qa4",
    eco: "B31",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Nimzowitsch-Rossolimo Attack-Fianchetto Variation-Gurgenidze Variation",
    fen: "r1bqk1nr/pp1p1pbp/2n3p1/1Bp1p3/1P2P3/5N2/P1PP1PPP/RNBQR1K1 b kq - 0 6",
    moves: "e4 c5 Nf3 Nc6 Bb5 g6 O-O Bg7 Re1 e5 b4",
    eco: "B31",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Advance Variation-Van der Wiel Attack-Bishop Hnt",
    fen: "rn1qkbnr/pp3ppp/4p1b1/2ppP3/3P2PP/2N5/PPP1NP2/R1BQKB1R b KQkq - 0 7",
    moves: "e4 c6 d4 d5 e5 Bf5 Nc3 e6 g4 Bg6 Nge2 c5 h4",
    eco: "B12",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Traditional Variation-Hanstein Variation-Mayet Gambit",
    fen: "rnbqk1nr/ppp2pbp/3p4/6p1/2BPPp2/2P2N2/PP4PP/RNBQK2R b KQkq - 0 6",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 Bg7 d4 d6 c3",
    eco: "C38",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Paris Attack-Kieseritzky Gambit-Cotter Gambit",
    fen: "rnbqkbnr/pppp1N2/7p/8/4PppP/8/PPPP2P1/RNBQKB1R b KQkq - 0 6",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 h6 Nxf7",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "Vienna Game-Falkbeer Variation-Paulsen-Mieses Variation-Polluck Gambit",
    fen: "r1bqk2r/ppp2ppp/2n2n2/2bPp3/8/2N3P1/PPPPNPBP/R1BQK2R b KQkq - 0 6",
    moves: "e4 e5 Nc3 Nf6 g3 Bc5 Bg2 Nc6 Nge2 d5 exd5",
    eco: "C26",
    difficulty: "Hard"
  },
  {
    name: "Philidor's Defence-Improved Hanham Variation-Lion Variation-Bishop Sac Variation",
    fen: "r1bqk2r/pppnbBpp/3p1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQK2R b KQkq - 0 6",
    moves: "e4 e5 Nf3 d6 d4 Nf6 Nc3 Nbd7 Bc4 Be7 Bxf7+",
    eco: "C41",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Worrall Attack",
    fen: "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPPQPPP/RNB2RK1 b kq - 5 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Qe2",
    eco: "C86",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Open Defence-Tartakower Variation",
    fen: "r1bqkb1r/1ppp1ppp/p1n5/4p3/B3n3/5N2/PPPPQPPP/RNB2RK1 b kq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 Qe2",
    eco: "C80",
    difficulty: "Hard"
  },
  {
    name: "Giuoco Piano-Closed Variation-Centre-Holding Variation-Eisinger Variation",
    fen: "rnb1k1nr/ppppqppp/1b1P4/4p3/2B1P3/2P2N2/PP3PPP/RNBQK2R b KQkq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Qe7 d4 Bb6 d5 Nb8 d6",
    eco: "C53",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Gruber Variation-Polerio Defence-Bishop Check/Blackburne Line",
    fen: "r1bqkb1r/ppp2ppp/5n2/nB1Pp1N1/8/8/PPPP1PPP/RNBQK2R b KQkq - 2 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+",
    eco: "C58",
    difficulty: "Hard"
  },
  {
    name: "4 Knights Game-Double Ruy Lopez-Symmetrical Variation-Maroczy System",
    fen: "r1bq1rk1/ppp2ppp/2np1n2/1B2p3/1b2P3/3P1N2/PPP1NPPP/R1BQ1RK1 b - - 1 7",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Ne2",
    eco: "C49",
    difficulty: "Hard"
  },
  {
    name: "4 Knights Game-Giuoco Pianissimo-Centre Prophylaxis Variation-Main Line",
    fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2Q1RK1 b - - 1 7",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bc4 Bc5 d3 O-O O-O d6 Bg5",
    eco: "C46",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Steinitz Variation-Boleslavsky Variation",
    fen: "r1bqkb1r/pp1n1ppp/2n1p3/2ppP3/3P1P2/2N1BN2/PPP3PP/R2QKB1R b KQkq - 3 7",
    moves: "e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 f4 c5 Nf3 Nc6 Be3",
    eco: "C11",
    difficulty: "Hard"
  },
  {
    name: "Alekhine Defence-Lasker's Attack-Hunt Variation-Lasker Simul Gambit",
    fen: "rnbqkb1r/pppp1ppp/4p3/2PnP3/2B5/2N5/PP1P1PPP/R1BQK1NR b KQkq - 1 6",
    moves: "e4 Nf6 e5 Nd5 c4 Nb6 c5 Nd5 Nc3 e6 Bc4",
    eco: "B02",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Anti-Benoni Formation-Spielmann Defence-Geller Variation",
    fen: "r1b1kb1r/pp1p1ppp/1qn1pn2/8/2PN4/2N3P1/PP2PP1P/R1BQKB1R w KQkq - 1 7",
    moves: "c4 c5 Nf3 Nf6 d4 cxd4 Nxd4 e6 Nc3 Nc6 g3 Qb6",
    eco: "A33",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Reversed Closed Sicilian-4 Knights System #2-Nenarokov Variation",
    fen: "r1bqk2r/pppp1pp1/2n2n1p/6B1/1bPN4/2N5/PP2PPPP/R2QKB1R w KQkq - 0 7",
    moves: "c4 e5 Nc3 Nc6 Nf3 Nf6 d4 exd4 Nxd4 Bb4 Bg5 h6",
    eco: "A28",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Anglo-Indian Defence-Anglo-Grünfeld Defence-Korchnoi Variation",
    fen: "rnbqk2r/ppp2pbp/6p1/3np3/8/2N2NP1/PP1PPPBP/R1BQK2R w KQkq - 0 7",
    moves: "c4 Nf6 Nc3 d5 cxd5 Nxd5 Nf3 g6 g3 Bg7 Bg2 e5",
    eco: "A16",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-2 Knights Attack-Alapin Variation-Czech Defence",
    fen: "rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP4/2N2N2/1P2PPPP/R1BQKB1R w KQkq - 1 6",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5",
    eco: "D17",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-2 Knights Attack-Alapin Variation-Steiner Variation",
    fen: "rn1qkb1r/pp2pppp/2p2n2/8/P1pP2b1/2N2N2/1P2PPPP/R1BQKB1R w KQkq - 1 6",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bg4",
    eco: "D16",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Accepted-Normal Variation-Traditional System-Classical Defence",
    fen: "rnbqkb1r/pp3ppp/4pn2/2p5/2BP4/4PN2/PP3PPP/RNBQK2R w KQkq - 0 6",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5",
    eco: "D26",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Pillsbury Variation-Neo-Orthodox Variation",
    fen: "rnbq1rk1/ppp1bpp1/4pn1p/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQ - 0 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6",
    eco: "D55",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Pillsbury Variation-Orthodox Defence",
    fen: "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQ - 3 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7",
    eco: "D60",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Been-Koomen Variation-Semi-Tarrasch Defence-Canal/Venice Variation",
    fen: "rnb1kb1r/pp3ppp/1q2pn2/2pP2B1/3P4/2N5/PP2PPPP/R2QKBNR w KQkq - 1 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 c5 cxd5 Qb6",
    eco: "D50",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Blackmar-Diemer Gambit-Euwe Defence",
    fen: "rnbqkb1r/ppp2ppp/4pn2/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq - 0 6",
    moves: "d4 d5 Nc3 Nf6 e4 dxe4 f3 exf3 Nxf3 e6",
    eco: "D00",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Modern Defence-Robatsch Variation-Beefeater Defence",
    fen: "rnbqk1nr/pp1pp2p/6p1/2pP1p2/2P5/2P5/P3PPPP/R1BQKBNR w KQkq - 0 6",
    moves: "d4 g6 c4 Bg7 Nc3 c5 d5 Bxc3+ bxc3 f5",
    eco: "A40",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-Normal Variation-Modern Benoni Defence-Kurz Variation",
    fen: "rnbqk2r/pp2bppp/3p1n2/2pP4/8/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 2 7",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 Nf3 Be7",
    eco: "A60",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Spielmann Variation-Romanovsky Gambit",
    fen: "r1bqk2r/pp1p1ppp/2n1pn2/2P5/1bP5/1QN5/PP2PPPP/R1B1KBNR w KQkq - 1 6",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qb3 c5 dxc5 Nc6",
    eco: "E23",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Kasparov-Petrosian Variation-Main Line-Classical Variation",
    fen: "rn1qkb1r/pbp2ppp/1p3n2/3p4/3P4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq - 0 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 Nc3 Bb7 a3 d5 cxd5 exd5",
    eco: "E12",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Kasparov-Petrosian Variation-Main Line-Modern Variation",
    fen: "rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N2N2/1P2PPPP/R1BQKB1R w KQkq - 0 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 Nc3 Bb7 a3 d5 cxd5 Nxd5",
    eco: "E12",
    difficulty: "Hard"
  },
  {
    name: "East Indian Defence-Blumenfeld Countergambit-Dus-Chotimursky Variation-Spielmann Variation",
    fen: "rnbqkb1r/p2p1pp1/5n1p/1ppP2B1/8/5N2/PP2PPPP/RN1QKB1R w KQkq - 0 7",
    moves: "d4 Nf6 c4 e6 Nf3 c5 d5 b5 Bg5 exd5 cxd5 h6",
    eco: "E10",
    difficulty: "Hard"
  },
  {
    name: "East Indian Defence-Anti-Nimzo-Indian Variation-Blumenfeld Countergambit Accepted",
    fen: "rnbqkb1r/p5pp/4pn2/1Ppp4/8/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 7",
    moves: "d4 Nf6 c4 e6 Nf3 c5 d5 b5 dxe6 fxe6 cxb5 d5",
    eco: "E10",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Exchange Variation-Main Line-Botvinnik Variation",
    fen: "rnbqk2r/ppp1ppbp/1n4p1/8/3PP3/6P1/PP3PBP/RNBQK1NR w KQkq - 1 7",
    moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 cxd5 Nxd5 e4 Nb6",
    eco: "D71/D72",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Reshevsky Variation-Classical Variation-Modern Defence",
    fen: "rnbq1rk1/ppp1ppbp/5np1/8/2pP4/5NP1/PP2PPBP/RNBQ1RK1 w - - 0 7",
    moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O O-O dxc4",
    eco: "D78",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Benoni Defence-Advance Variation-Main Line",
    fen: "rnbq1rk1/pp3pbp/3ppnp1/2pP2B1/2P1P3/2N5/PP2BPPP/R2QK1NR w KQ - 0 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5 c5 d5 e6",
    eco: "E75",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Averbakh System-Modern Defence-Burgess Line",
    fen: "r1bq1rk1/pp2ppbp/n1pp1np1/6B1/2PPP3/2N5/PP1QBPPP/R3K1NR w KQ - 0 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5 Na6 Qd2 c6",
    eco: "E73",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Normal Variation-Sämisch Variation-Byrne Defence",
    fen: "rnbq1rk1/1p2ppbp/p1pp1np1/8/2PPP3/2NBBP2/PP4PP/R2QK1NR w KQ - 0 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 c6 Bd3 a6",
    eco: "E81",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Sämisch Variation-Yates Defence-Panno Formation",
    fen: "r1bq1rk1/1pp1ppbp/p1np1np1/8/2PPP3/2N1BP2/PP2N1PP/R2QKB1R w KQ - 0 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 Nc6 Nge2 a6",
    eco: "E83",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Classical Variation-Petrosian System-Stein Defence",
    fen: "rnbq1rk1/1pp2pbp/3p1np1/p2Pp3/2P1P3/2N2N2/PP2BPPP/R1BQK2R w KQ - 0 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5 a5",
    eco: "E92",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Classical Variation-Petrosian System-Main/Normal Line",
    fen: "r1bq1rk1/pppn1pbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQK2R w KQ - 1 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5 Nbd7",
    eco: "E93",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Scheveningen Variation-Classical Variation-Paulsen Variation",
    fen: "rnbqkb1r/1p3ppp/p2ppn2/8/3NP3/2N5/PPP1BPPP/R1BQK2R w KQkq - 0 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Be2 a6",
    eco: "B84",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Benko Variation-Sozin Variation-Modern Scheveningen Variation",
    fen: "r1bqkb1r/pp3ppp/2nppn2/8/3NP3/2N5/PPP1BPPP/R1BQK2R w KQkq - 2 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Be2 Nc6",
    eco: "B83",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Classical Variation-Boleslavsky Variation",
    fen: "r1bqkb1r/pp3ppp/2np1n2/4p3/3NP3/2N5/PPP1BPPP/R1BQK2R w KQkq - 0 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Be2 e5",
    eco: "B58",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Classical Variation-Richter-Rauzer Variation-Larsen/Modern Variation",
    fen: "r2qkb1r/pp1bpppp/2np1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq - 5 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bg5 Bd7",
    eco: "B60",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Classical Variation-Richter-Rauzer Variation-Bondarevsky/Dragon Variation",
    fen: "r1bqkb1r/pp2pp1p/2np1np1/6B1/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq - 0 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bg5 g6",
    eco: "B60",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Taimanov Variation-Russian Variation-Normal Variation",
    fen: "r1bqkb1r/1p1pnppp/p1n1p3/8/3NP3/2N5/PPP1BPPP/R1BQK2R w KQkq - 2 7",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 a6 Be2 Nge7",
    eco: "B46",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Taimanov Variation-Normal Variation-Paulsen Variation",
    fen: "r1bqk2r/pp1p1ppp/2n1pn2/1N6/1b2P3/2N5/PPP2PPP/R1BQKB1R w KQkq - 5 7",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Nf6 Ndb5 Bb4",
    eco: "B45",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Anderssen Counterattack-Pin Variation-Jaffe Variation",
    fen: "rnbqk2r/pp1p1ppp/5n2/4p3/1b1NP3/2NB4/PPP2PPP/R1BQK2R w KQkq - 0 7",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nf6 Nc3 Bb4 Bd3 e5",
    eco: "B40",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Anderssen Counterattack-4 Knights Variation-Cobra Variation",
    fen: "r1bqk2r/pp1p1ppp/2n1pn2/1Nb5/4P3/2N5/PPP2PPP/R1BQKB1R w KQkq - 5 7",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Ndb5 Bc5",
    eco: "B45",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Pelikán Variation-Classical Variation-Boleslavsky Variation",
    fen: "r1bqkb1r/pp3ppp/2np1n2/4p3/3NP3/2N5/PPP1BPPP/R1BQK2R w KQkq - 0 7",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Be2 e5",
    eco: "B58",
    difficulty: "Hard"
  },
  {
    name: "Old Sicilian Defence-Pelikán Variation-Richter Variation-Larsen Variation",
    fen: "r2qkb1r/pp1bpppp/2np1n2/6B1/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq - 2 7",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Bg5 Bd7",
    eco: "B60",
    difficulty: "Hard"
  },
  {
    name: "Old Sicilian Defence-Pelikán Variation-Richter Variation-Bondarevsky Variation",
    fen: "r1bqkb1r/pp2pp1p/2np1np1/6B1/3NP3/2N5/PPP2PPP/R2QKB1R w KQkq - 0 7",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Bg5 g6",
    eco: "B60",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Modern Defence-Botvinnik Variation-Normal/Carlsbad Line",
    fen: "r1bqkb1r/pp3ppp/2n1pn2/3p2B1/2PP4/2N5/PP3PPP/R2QKBNR w KQkq - 0 7",
    moves: "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 Nc6 Bg5 e6",
    eco: "B13",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Panov Attack-Modern Defence-Mieses Line",
    fen: "r2qkb1r/pp2pppp/2n2n2/3p4/2PP2b1/2N2N2/PP3PPP/R1BQKB1R w KQkq - 5 7",
    moves: "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 Nc6 Nf3 Bg4",
    eco: "B13",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Danish Gambit Accepted-Schlechter Defence",
    fen: "rnbqkbnr/ppp2ppp/8/3p4/2B1P3/8/PB3PPP/RN1QK1NR w KQkq - 0 6",
    moves: "e4 e5 d4 exd4 c3 dxc3 Bc4 cxb2 Bxb2 d5",
    eco: "C21",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Classical Defence-Greco Variation",
    fen: "rnb1k1nr/pppp1ppp/8/2b5/2B1Pp1q/8/PPPP2PP/RNBQ1KNR w kq - 4 5",
    moves: "e4 e5 f4 exf4 Bc4 Qh4+ Kf1 Bc5",
    eco: "C33",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Classical Defence-Cozio Variation",
    fen: "rnb1kbnr/ppp2ppp/3p4/8/2B1Pp1q/8/PPPP2PP/RNBQ1KNR w kq - 0 5",
    moves: "e4 e5 f4 exf4 Bc4 Qh4+ Kf1 d6",
    eco: "C33",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Classical Defence-Lopez Variation",
    fen: "rnb1kbnr/pppp1p1p/8/6p1/2B1Pp1q/8/PPPP2PP/RNBQ1KNR w kq - 0 5",
    moves: "e4 e5 f4 exf4 Bc4 Qh4+ Kf1 g5",
    eco: "C33",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Classical Defence-Boden Defence",
    fen: "r1b1kbnr/pppp1ppp/2n5/8/2B1Pp1q/8/PPPP2PP/RNBQ1KNR w kq - 4 5",
    moves: "e4 e5 f4 exf4 Bc4 Qh4+ Kf1 Nc6",
    eco: "C33",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Classical Defence-Jaenisch Variation",
    fen: "rnb1kbnr/pppp1ppp/5q2/8/2B1Pp2/8/PPPP2PP/RNBQ1KNR w kq - 4 5",
    moves: "e4 e5 f4 exf4 Bc4 Qh4+ Kf1 Qf6",
    eco: "C33",
    difficulty: "Hard"
  },
  {
    name: "Vienna Game-Vienna Gambit-Steinitz Variation-Blackburne Variation",
    fen: "rnbqk2r/ppp2ppp/8/3pP3/1b2n3/2NP4/PPP3PP/R1BQKBNR w KQkq - 0 6",
    moves: "e4 e5 Nc3 Nf6 f4 d5 d3 Bb4 fxe5 Nxe4",
    eco: "C29",
    difficulty: "Hard"
  },
  {
    name: "Vienna Game-Vienna Gambit-Main Line-Breyer Variation",
    fen: "rnbqk2r/ppp1bppp/8/3pP3/4n3/2N2N2/PPPP2PP/R1BQKB1R w KQkq - 2 6",
    moves: "e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Nf3 Be7",
    eco: "C29",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Latvian Countergambit Accepted-Bilguer Variation-Modern Variation",
    fen: "rnb1kbnr/ppp3pp/3p2q1/8/2NPp3/2N5/PPP2PPP/R1BQKB1R w KQkq - 2 7",
    moves: "e4 e5 Nf3 f5 Nxe5 Qf6 d4 d6 Nc4 fxe4 Nc3 Qg6",
    eco: "C40",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Exchange Variation-Normal Variation-Bronstein Variation",
    fen: "r1b1kbnr/1pp2ppp/p1pq4/4p3/4P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 2 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 O-O Qd6",
    eco: "C68/C69",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Old Steinitz Defence-Lipschütz Variation",
    fen: "r1bqkbnr/p1p3pp/2pp1p2/4p3/3PP3/5N2/PPP2PPP/RNBQK2R w KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 d6 Bxc6+ bxc6 d4 f6",
    eco: "C62",
    difficulty: "Hard"
  },
  {
    name: "Italian Game-Giuoco Piano-Classical Variation-De LaBourdonnais Variation",
    fen: "r1bqk1nr/ppp2ppp/1bnp4/8/2BPP3/5N2/PP3PPP/RNBQK2R w KQkq - 1 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 d6 d4 exd4 cxd4 Bb6",
    eco: "C53",
    difficulty: "Hard"
  },
  {
    name: "Giuoco Piano-Classical Variation-Centre Attack-Greco Gambit",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4",
    eco: "C54",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Italian Game-2 Knights Defence-Steinitz Variation",
    fen: "r1bqk2r/ppp2p2/2np1n1p/2b1p1p1/2B1P2B/3P1N2/PPP2PPP/RN1Q1RK1 w kq - 0 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 O-O Bc5 d3 d6 Bg5 h6 Bh4 g5",
    eco: "C55",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Knight Attack-Gruber Variation-Kloss Gambit",
    fen: "r1bqkb1r/ppp2ppp/5n2/3Pp1N1/1nB5/8/PPPP1PPP/RNBQK2R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nb4",
    eco: "C57",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Haxo Gambit-Cochrane-Anderssen/Paulsen/Suhle Counterattack",
    fen: "r2qk1nr/ppp2ppp/2np4/2b5/2BpP1b1/2P2N2/PP3PPP/RNBQ1RK1 w kq - 1 7",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bc5 O-O d6 c3 Bg4",
    eco: "C44",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Göring Gambit-Main Line",
    fen: "r1bqk1nr/pppp1ppp/2n5/8/1b2P3/2N2N2/PP3PPP/R1BQKB1R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 c3 dxc3 Nxc3 Bb4",
    eco: "C44",
    difficulty: "Hard"
  },
  {
    name: "Scotch Game-Classical Variation-Potter Variation-Romanishin Variation",
    fen: "r1bqk1nr/pppp1ppp/2n5/8/1b2P3/1N6/PPP2PPP/RNBQKB1R w KQkq - 3 6",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nb3 Bb4+",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Schmidt Variation-Schmid Gambit",
    fen: "r1bqkb1r/pppp1ppp/2n5/8/3Nn3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nc3 Nxe4",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "4 Knights Game-Spanish Variation-Classical Defence-Marshall Variation",
    fen: "r1bq1rk1/pppp1ppp/5n2/1Bb1N3/3nP3/2N5/PPPP1PPP/R1BQ1RK1 w - - 1 7",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nd4",
    eco: "C48",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Van Hooydoon Gambit",
    fen: "r1bqk2r/pppp1ppp/5n2/2b5/3nP3/5N2/PP2QPPP/RNB1KB1R w KQkq - 0 7",
    moves: "e4 e5 Qe2 Nc6 c3 Nf6 Nf3 Bc5 d4 exd4 cxd4 Nxd4",
    eco: "C20",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Robatsch Defence-Semi-Averbakh Variation-Pterodactyl Variation Accepted",
    fen: "rnb1k1nr/pp2ppbp/3p2p1/q1P5/2P1P3/5N2/PP3PPP/RNBQKB1R w KQkq - 1 6",
    moves: "e4 g6 d4 Bg7 c4 c5 Nf3 d6 dxc5 Qa5+",
    eco: "B06",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Slav Defence-Shabalov-Shirov Gambit",
    fen: "r1bqk2r/pp1n1ppp/2pbpn2/3p4/2PP2P1/2N1PN2/PPQ2P1P/R1B1KB1R b KQkq - 0 7",
    moves: "d4 d5 c4 c6 Nc3 Nf6 Nf3 e6 e3 Nbd7 Qc2 Bd6 g4",
    eco: "D45",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Quiet Variation-Delmar Defence-Breyer Variation",
    fen: "rn1qk2r/pp3ppp/2pbpn2/2Pp1b2/3P4/4PN2/PP1NBPPP/R1BQK2R b KQkq - 0 7",
    moves: "d4 d5 c4 c6 Nf3 Nf6 e3 Bf5 Nbd2 e6 Be2 Bd6 c5",
    eco: "D12",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Pillsbury Variation-Anti-Neo-Orthodox Variation",
    fen: "rnbq1rk1/ppp1bppp/4pn2/3p2B1/2PP4/2N1P3/PP3PPP/2RQKBNR b K - 2 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Rc1",
    eco: "D54",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Tarrasch Defence-Pseudo-Tarrasch Variation-Bishop Attack",
    fen: "rnbqkbnr/pp3ppp/8/2pp2B1/3P4/5N2/PP2PPPP/RN1QKB1R b KQkq - 1 5",
    moves: "d4 d5 c4 e6 Nf3 c5 cxd5 exd5 Bg5",
    eco: "D30",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Queen's Indian Defence-Fianchetto Traditional Variation-Fine Variation",
    fen: "rnq1kb1r/pb1p1ppp/1p2pn2/2pP4/2P5/5NP1/PP2PPBP/RNBQ1RK1 b kq - 0 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Qc8 O-O c5 d5",
    eco: "E15",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Averbakh System-Benoni Defence-Exchange Variation",
    fen: "rnbq1rk1/pp2ppbp/3p1np1/2P3B1/2P1P3/2N5/PP2BPPP/R2QK1NR b KQ - 0 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Be2 O-O Bg5 c5 dxc5",
    eco: "E74",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Normal Variation-4 Pawns Attack-Fluid Attack",
    fen: "rnbq1rk1/pp2ppbp/3p1np1/2p5/2PPPP2/2N2N2/PP2B1PP/R1BQK2R b KQ - 1 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Be2 c5 Nf3",
    eco: "E78",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Normal Variation-4 Pawns Attack-Dynamic Attack",
    fen: "rnbq1rk1/pp2ppbp/3p1np1/2pP4/2P1PP2/2N2N2/PP4PP/R1BQKB1R b KQ - 0 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Nf3 c5 d5",
    eco: "E76",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Rare Defence-Classical Variation-Andersson/Exchange Variation",
    fen: "rnbq1rk1/ppp2pbp/3p1np1/4P3/2P1P3/2N2N2/PP2BPPP/R1BQK2R b KQ - 0 7",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 dxe5",
    eco: "E92",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Landau Variation-Grünfeld Gambit-Capablanca Variation",
    fen: "rnbq1rk1/ppp1ppbp/5np1/3p4/2PP1B2/2N1P3/PP3PPP/2RQKBNR b K - 2 6",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Bf4 Bg7 e3 O-O Rc1",
    eco: "D83",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Pseudo-Queen's Indian Defence-Marienbad System-Berg Variation",
    fen: "rn1qkb1r/pb1ppppp/1p3n2/8/2PQ4/5NP1/PP2PPBP/RNB1K2R b KQkq - 0 6",
    moves: "d4 Nf6 Nf3 b6 g3 Bb7 Bg2 c5 c4 cxd4 Qxd4",
    eco: "A47",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Wing Gambit-Marshall Variation-Marienbad Variation",
    fen: "rnb1kbnr/pp2pppp/8/3q4/1p6/P7/1BPP1PPP/RN1QKBNR b KQkq - 1 5",
    moves: "e4 c5 b4 cxb4 a3 d5 exd5 Qxd5 Bb2",
    eco: "B20",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Najdorf Variation-Lipnitzky/Lipnitsky Attack",
    fen: "rnbqkb1r/1p2pppp/p2p1n2/8/2BNP3/2N5/PPP2PPP/R1BQK2R b KQkq - 1 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bc4",
    eco: "B90",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Najdorf Variation-Byrne/English Attack",
    fen: "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq - 1 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3",
    eco: "B90",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Najdorf Variation-Freak Attack",
    fen: "rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKBR1 b Qkq - 1 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Rg1",
    eco: "B90",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Scheveningen Variation-Sozin Attack",
    fen: "rnbqkb1r/pp3ppp/3ppn2/8/2BNP3/2N5/PPP2PPP/R1BQK2R b KQkq - 1 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Bc4",
    eco: "B86",
    difficulty: "Hard"
  },
  {
    name: "Old Sicilian Defence-Nimzowitsch-Rossolimo Attack-Fianchetto Variation-Gufeld Gambit",
    fen: "r1bqk1nr/pp1p1pbp/2n3p1/1Bp1p3/3PP3/2P2N2/PP3PPP/RNBQ1RK1 b kq - 0 6",
    moves: "e4 c5 Nf3 Nc6 Bb5 g6 O-O Bg7 c3 e5 d4",
    eco: "B31",
    difficulty: "Hard"
  },
  {
    name: "Old Sicilian Defence-Nimzowitsch-Rossolimo Attack-Fianchetto Variation-Lutikov Gambit",
    fen: "r1bqk2r/pp1pppbp/2n2np1/1Bp5/3PP3/2P2N2/PP3PPP/RNBQ1RK1 b kq - 0 6",
    moves: "e4 c5 Nf3 Nc6 Bb5 g6 O-O Bg7 c3 Nf6 d4",
    eco: "B31",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Panov Attack-Modern Defence-Botvinnik Variation",
    fen: "r1bqkb1r/pp2pppp/2n2n2/3p2B1/2PP4/2N5/PP3PPP/R2QKBNR b KQkq - 4 6",
    moves: "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 Nc6 Bg5",
    eco: "B13",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Main Line-Classical Variation-Maróczy Attack",
    fen: "rn1qkbnr/pp2pppp/2p3b1/8/3P1P2/6N1/PPP3PP/R1BQKBNR b KQkq - 0 6",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 f4",
    eco: "B18",
    difficulty: "Hard"
  },
  {
    name: "Pirc Defence-Austrian Attack-Unzicker Attack-Bronstein Variation",
    fen: "rnbq1rk1/pppnppbp/3p2p1/4P3/3P1P1P/2N2N2/PPP3P1/R1BQKB1R b KQ - 0 7",
    moves: "e4 d6 d4 Nf6 Nc3 g6 f4 Bg7 Nf3 O-O e5 Nfd7 h4",
    eco: "B09",
    difficulty: "Hard"
  },
  {
    name: "King's Bishop Opening-Berlin Defence-Urusov Gambit-Keidansky Gambit",
    fen: "rnbqkb1r/pppp1ppp/8/8/2BQn3/5N2/PPP2PPP/RNB1K2R b KQkq - 0 5",
    moves: "e4 e5 Bc4 Nf6 d4 exd4 Nf3 Nxe4 Qxd4",
    eco: "C24",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Danish Gambit-Alekhine Variation",
    fen: "rnbqk1nr/pppp1ppp/8/8/1bB1P3/2N5/PP3PPP/R1BQK1NR b KQkq - 2 5",
    moves: "e4 e5 d4 exd4 c3 dxc3 Nxc3 Bb4 Bc4",
    eco: "C21",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Rosentreter Gambit-Soerensen Gambit-Bird Gambit",
    fen: "rnb1kbnr/pppp1p1p/8/4N3/3PPppq/6P1/PPP4P/RNBQKB1R b KQkq - 0 6",
    moves: "e4 e5 f4 exf4 Nf3 g5 d4 g4 Ne5 Qh4+ g3",
    eco: "C37",
    difficulty: "Hard"
  },
  {
    name: "Vienna Game-Vienna Gambit-Knight Variation-Hamppe-Muzio Gambit",
    fen: "r1bqkbnr/pppp1p1p/2n5/8/2B1Ppp1/2N2N2/PPPP2PP/R1BQ1RK1 b kq - 1 6",
    moves: "e4 e5 Nc3 Nc6 f4 exf4 Nf3 g5 Bc4 g4 O-O",
    eco: "C25",
    difficulty: "Hard"
  },
  {
    name: "Vienna Game-Paulsen Attack-Bardeleben Variation-Heyde Variation",
    fen: "rnbqkb1r/ppp3pp/8/3pPp2/3Pn3/2N2Q2/PPP3PP/R1B1KBNR b KQkq - 0 6",
    moves: "e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Qf3 f5 d4",
    eco: "C29",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Latvian Countergambit Accepted-Bilguer Variation-Nimzowitsch Attack",
    fen: "rnb1kbnr/ppp3pp/3p1q2/8/3Pp3/4N3/PPP2PPP/RNBQKB1R b KQkq - 1 6",
    moves: "e4 e5 Nf3 f5 Nxe5 Qf6 d4 d6 Nc4 fxe4 Ne3",
    eco: "C40",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Archangelsk Variation-Wing Attack",
    fen: "r1bqk2r/2ppbppp/p1n2n2/1p2p3/P3P3/1B3N2/1PPP1PPP/RNBQ1RK1 b kq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O b5 Bb3 Be7 a4",
    eco: "C78",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Open Defence-Richter Variation",
    fen: "r1bqkb1r/2pp1ppp/p1n5/1p1Pp3/B3n3/5N2/PPP2PPP/RNBQ1RK1 b kq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 d5",
    eco: "C80",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Cordel Defence-Zukertort Gambit-Modern Main Line",
    fen: "r1bq1rk1/pppp1ppp/1bn2n2/1B2p1B1/3PP3/2P2N2/PP3PPP/RN1Q1RK1 b - - 2 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 Bc5 O-O Nf6 c3 O-O d4 Bb6 Bg5",
    eco: "C64",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Improved Steinitz Defence-Hedgehog Variation-Showalter Variation",
    fen: "r2qk2r/pppbbppp/2Bp1n2/4p3/3PP3/2N2N2/PPP2PPP/R1BQ1RK1 b kq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O d6 d4 Bd7 Nc3 Be7 Bxc6",
    eco: "C66",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Berlin Defence-Rio Gambit Accepted-Showalter Variation",
    fen: "r1bqkb1r/pppp1ppp/2nn4/4p3/B2P4/5N2/PPP2PPP/RNBQ1RK1 b kq - 2 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Ba4",
    eco: "C67",
    difficulty: "Hard"
  },
  {
    name: "Giuoco Piano-Evans Gambit Accepted-Main Line-Slow Variation",
    fen: "r1bqk1nr/pppp1ppp/2n5/b3p3/2B1P3/2P2N2/P2P1PPP/RNBQ1RK1 b kq - 2 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 O-O",
    eco: "C52",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Scotch Gambit-Max Lange Attack-Walbrodt-Baird Gambit",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/2P2N2/PP3PPP/RNBQ1RK1 b kq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Bc5 c3",
    eco: "C55",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Scotch Gambit-Double Gambit Accepted-Nakhmanson Gambit",
    fen: "r1bqkb1r/pppp1ppp/2n5/8/2Bpn3/2N2N2/PPP2PPP/R1BQ1RK1 b kq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Nxe4 Nc3",
    eco: "C56",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Gruber Variation-Fegatello Attack-Lolli Attack",
    fen: "r1bqkb1r/ppp2ppp/2n5/3np1N1/2BP4/8/PPP2PPP/RNBQK2R b KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5 d4",
    eco: "C57",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Schmidt Variation-Mieses Variation",
    fen: "r1bqkb1r/p1pp1ppp/2p2n2/4P3/8/8/PPP2PPP/RNBQKB1R b KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nxc6 bxc6 e5",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Schmidt Variation-Tartakower Variation",
    fen: "r1bqkb1r/p1pp1ppp/2p2n2/8/4P3/8/PPPN1PPP/R1BQKB1R b KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nxc6 bxc6 Nd2",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Lolli Variation-Napoleon Gambit",
    fen: "r1bqkbnr/pppp1ppp/8/8/2BpP3/8/PPP2PPP/RNBQK2R b KQkq - 1 5",
    moves: "e4 e5 Nf3 Nc6 d4 Nxd4 Nxd4 exd4 Bc4",
    eco: "C44",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Lolli Variation-Cochrane Variation",
    fen: "r1bqkbnr/pp1p1Npp/2p1n3/8/2B1P3/8/PPP2PPP/RNBQK2R b KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 d4 Nxd4 Nxe5 Ne6 Bc4 c6 Nxf7",
    eco: "C44",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Petrov's Defence-Cochrane Gambit-Centre Variation",
    fen: "rnbq1b1r/ppp2kpp/3p1n2/8/3PP3/8/PPP2PPP/RNBQKB1R b KQ - 0 5",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nxf7 Kxf7 d4",
    eco: "C42",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Czech Defence-Dutch System-Lasker Variation",
    fen: "r2qkb1r/pp2pppp/n1p2n2/5b2/P1pP4/2N1PN2/1P3PPP/R1BQKB1R w KQkq - 1 7",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 e3 Na6",
    eco: "D18",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-2 Knights Variation-Schlechter-Rubinstein System-Folkestone/Swedish Variation",
    fen: "r1bqkbnr/pp3ppp/2n5/3p4/2pP4/2N2NP1/PP2PP1P/R1BQKB1R w KQkq - 0 7",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 c4",
    eco: "D33",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-2 Knights Variation-Schlechter-Rubinstein System-Prague Variation",
    fen: "r1bqkb1r/pp3ppp/2n2n2/2pp4/3P4/2N2NP1/PP2PP1P/R1BQKB1R w KQkq - 1 7",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 Nf6",
    eco: "D33",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Accelerated Semi-Slav Defence-Noteboom Variation-Abrahams Variation",
    fen: "rnbqk1nr/p4ppp/2p1p3/1p6/PbpP4/2N1PN2/1P3PPP/R1BQKB1R w KQkq - 0 7",
    moves: "d4 d5 c4 e6 Nc3 c6 Nf3 dxc4 a4 Bb4 e3 b5",
    eco: "D31",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Knight Defence-Cambridge Springs Defence",
    fen: "r1b1kb1r/pp1n1ppp/2p1pn2/q2p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQkq - 2 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 e3 c6 Nf3 Qa5",
    eco: "D52",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Knight Defence-Cambridge Springs Variation",
    fen: "r1b1kb1r/pp1n1ppp/2p1pn2/q2p2B1/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQkq - 1 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 Nf3 c6 e3 Qa5",
    eco: "D52",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Knight Defence-Alekhine Gambit",
    fen: "r1bqkb1r/pppn1pp1/4pn1p/8/2pP3B/2N2N2/PP2PPPP/R2QKB1R w KQkq - 0 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 Nf3 h6 Bh4 dxc4",
    eco: "D51",
    difficulty: "Hard"
  },
  {
    name: "Colle System-Zukertort Variation-Rubinstein Opening-Bogoljubov Defence",
    fen: "r1bq1rk1/pp3ppp/2nbpn2/2pp4/3P4/1P1BPN2/PBP2PPP/RN1Q1RK1 w - - 5 8",
    moves: "d4 d5 Nf3 Nf6 e3 e6 Bd3 c5 b3 Nc6 Bb2 Bd6 O-O O-O",
    eco: "D05",
    difficulty: "Hard"
  },
  {
    name: "Colle System-Zukertort Variation-Rubinstein Opening-Classical Defence",
    fen: "r1bq1rk1/pp2bppp/2n1pn2/2pp4/3P4/1P1BPN2/PBP2PPP/RN1Q1RK1 w - - 5 8",
    moves: "d4 d5 Nf3 Nf6 e3 e6 Bd3 c5 b3 Nc6 Bb2 Be7 O-O O-O",
    eco: "D05",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Horwitz Defence-Benoni Defence-Franco-Sicilian Hybrid",
    fen: "rnbqk2r/pp2npbp/3p2p1/2pP4/4P3/2N2N2/PP3PPP/R1BQKB1R w KQkq - 3 8",
    moves: "d4 e6 c4 c5 d5 exd5 cxd5 d6 Nc3 g6 e4 Bg7 Nf3 Ne7",
    eco: "A40",
    difficulty: "Hard"
  },
  {
    name: "Dutch Defence-Fianchetto Variation-Classical Variation-Buenos Aires Variation",
    fen: "rnbq1rk1/1pp1b1pp/3ppn2/p4p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 0 8",
    moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O O-O d6 Nc3 a5",
    eco: "A96",
    difficulty: "Hard"
  },
  {
    name: "Dutch Defence-Fianchetto Variation-Classical Variation-Huisl Variation",
    fen: "rnbq1rk1/ppp1b1pp/3pp3/5p2/2PPn3/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 2 8",
    moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O O-O d6 Nc3 Ne4",
    eco: "A96",
    difficulty: "Hard"
  },
  {
    name: "Dutch Defence-Leningrad Variation-Main Variation-Warsaw Variation",
    fen: "rnbq1rk1/pp2p1bp/2pp1np1/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 0 8",
    moves: "d4 f5 c4 Nf6 g3 g6 Bg2 Bg7 Nf3 O-O O-O d6 Nc3 c6",
    eco: "A88",
    difficulty: "Hard"
  },
  {
    name: "Dutch Defence-Leningrad Variation-Main Variation-Matulovic Variation",
    fen: "r1bq1rk1/ppp1p1bp/2np1np1/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 2 8",
    moves: "d4 f5 c4 Nf6 g3 g6 Bg2 Bg7 Nf3 O-O O-O d6 Nc3 Nc6",
    eco: "A89",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-Ragozin Variation-Except Gligoric System-Keres Variation",
    fen: "rnbq1rk1/p4ppp/1p2pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 8",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5 Bd3 c5 O-O b6",
    eco: "E53",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-Ragozin Variation-Except Gligoric System-Bernstein Defence",
    fen: "r1bq1rk1/pp3ppp/2n1pn2/2pp4/1bPP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 2 8",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5 Bd3 c5 O-O Nc6",
    eco: "E56",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-Classical Variation-Berlin Variation-Pirc/Lisitsyn-Bondarevsky Gambit",
    fen: "rnbq1rk1/pp1p1ppp/4pn2/2P5/1bP5/2N5/PPQ1PPPP/R1B1KBNR w KQ - 1 6",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 c5 dxc5 O-O",
    eco: "E39",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Quiet Line-Check Variation-Modern Line",
    fen: "rn2k2r/p1ppqppp/bp2pn2/8/1bPP4/1P3NP1/P2BPP1P/RN1QKB1R w KQkq - 3 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Ba6 b3 Bb4+ Bd2 Qe7",
    eco: "E15",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Traditional Variation-Old Main Line-Nimowitsch Line",
    fen: "rn1q1rk1/pbp1bppp/1p2pn2/3p4/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 0 8",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7 O-O O-O Nc3 d5",
    eco: "E18",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Traditional Variation-Old Main Line-Tiviakov Defence",
    fen: "r2q1rk1/pbppbppp/np2pn2/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 7 8",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7 O-O O-O Nc3 Na6",
    eco: "E18",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Queen's Indian Defence-Kasparov Variation-Botvinnik Attack",
    fen: "rn1qkb1r/pbpp1p2/1p2p2p/6pn/2PP4/2N2NB1/PP2PPPP/R2QKB1R w KQkq - 2 8",
    moves: "d4 Nf6 c4 e6 Nf3 b6 Nc3 Bb7 Bg5 h6 Bh4 g5 Bg3 Nh5",
    eco: "E12",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Classical Variation-Orthodox Variation-Ukranian Defence",
    fen: "rnbq1rk1/1pp2pbp/3p1np1/p3p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w - - 0 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O a5",
    eco: "E94",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Classical Variation-Orthodox Variation-Donner Defence",
    fen: "rnbq1rk1/pp3pbp/2pp1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w - - 0 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O c6",
    eco: "E94",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Classical Variation-Orthodox Variation-Glek Defence",
    fen: "r1bq1rk1/ppp2pbp/n2p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w - - 2 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Na6",
    eco: "E94",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Classical Variation-Orthodox Variation-Positional Defence",
    fen: "r1bq1rk1/pppn1pbp/3p1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w - - 2 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nbd7",
    eco: "E94",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Delayed Fianchetto Variation-Larsen System",
    fen: "rn1q1rk1/pp2ppbp/2pp1np1/5b2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 2 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 c6 O-O Bf5",
    eco: "E62",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Delayed Fianchetto Variation-Debrecen Defence-Classical Fianchetto Variation",
    fen: "r1bq1rk1/pppn1pbp/3p1np1/4p3/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 0 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 Nbd7 O-O e5",
    eco: "E67",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Delayed Fianchetto Variation-Karlsbad Variation-Panno Variation",
    fen: "r1bq1rk1/1pp1ppbp/p1np1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 0 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 Nc6 O-O a6",
    eco: "E63",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Delayed Fianchetto Variation-Karlsbad Variation-Lesser Simagin/Spassky Variation",
    fen: "r2q1rk1/ppp1ppbp/2np1np1/5b2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 5 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 Nc6 O-O Bf5",
    eco: "E62",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Delayed Fianchetto Variation-Karlsbad Variation-Simagin Variation",
    fen: "r2q1rk1/ppp1ppbp/2np1np1/8/2PP2b1/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 5 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 Nc6 O-O Bg4",
    eco: "E62",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Delayed Fianchetto Variation-Karlsbad Variation-Uhlmann-Szabó System",
    fen: "r1bq1rk1/ppp2pbp/2np1np1/4p3/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 0 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 Nc6 O-O e5",
    eco: "E62",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Paris Variation-Schlechter Variation Deferred-Flohr Defence",
    fen: "rn1q1rk1/pp2ppbp/2p2np1/3p1b2/2PP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 2 8",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 e3 O-O Bd3 c6 O-O Bf5",
    eco: "D94",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Paris Variation-Schlechter Variation Deferred-Smyslov Defence",
    fen: "rn1q1rk1/pp2ppbp/2p2np1/3p4/2PP2b1/2NBPN2/PP3PPP/R1BQ1RK1 w - - 2 8",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 e3 O-O Bd3 c6 O-O Bg4",
    eco: "D94",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-King's Knight Variation-Panno Variation",
    fen: "r1bq1rk1/ppp1ppbp/3p1np1/n2P4/2P5/5NP1/PP2PPBP/RNBQ1RK1 w - - 1 8",
    moves: "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O Nc6 d5 Na5",
    eco: "E60",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-King's Knight Variation-Hungarian Variation",
    fen: "r1bq1rk1/1ppnppbp/p2p1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 0 8",
    moves: "d4 Nf6 c4 g6 Nf3 Bg7 g3 d6 Bg2 O-O O-O Nbd7 Nc3 a6",
    eco: "E64",
    difficulty: "Hard"
  },
  {
    name: "Centre Countergambit-Modern Variation-Portuguese Variation-Portuguese Gambit",
    fen: "r2qkb1r/pppnpppp/5n2/1B1P1b2/3P4/5P2/PPP3PP/RNBQK1NR w KQkq - 3 6",
    moves: "e4 d5 exd5 Nf6 d4 Bg4 f3 Bf5 Bb5+ Nbd7",
    eco: "B01",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Traditional Variation-Philidor Gambit-Greco Gambit",
    fen: "rnbqk1nr/ppp2pb1/3p3p/6p1/2BPPp1P/5N2/PPP3P1/RNBQK2R w KQkq - 0 7",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 Bg7 h4 h6 d4 d6",
    eco: "C38",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Salvio Gambit-Cochrane Gambit",
    fen: "rnb1kbnr/pppp1p1p/8/4N3/2B1P1pq/5p2/PPPP2PP/RNBQ1K1R w kq - 0 7",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 Ne5 Qh4+ Kf1 f3",
    eco: "C37",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Salvio Gambit-Herzfeld/Viennese Gambit",
    fen: "r1b1kbnr/pppp1p1p/2n5/4N3/2B1Pppq/8/PPPP2PP/RNBQ1K1R w kq - 4 7",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 Ne5 Qh4+ Kf1 Nc6",
    eco: "C37",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Salvio Gambit-Silbershmidt Defence",
    fen: "rnb1kb1r/pppp1p1p/7n/4N3/2B1Pppq/8/PPPP2PP/RNBQ1K1R w kq - 4 7",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 Ne5 Qh4+ Kf1 Nh6",
    eco: "C37",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Kieseritzky Gambit-Berlin Defence-Rivière Variation",
    fen: "rnbqkb1r/ppp2p1p/5n2/3p4/4PpNP/8/PPPP2P1/RNBQKB1R w KQkq - 0 7",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 Nf6 Nxg4 d5",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "Vienna Gambit-Steinitz Gambit-Main Line-Fraser-Minckwitz Defence",
    fen: "r1b1kbnr/p1pp1ppp/1pn5/8/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR w kq - 0 6",
    moves: "e4 e5 Nc3 Nc6 f4 exf4 d4 Qh4+ Ke2 b6",
    eco: "C25",
    difficulty: "Hard"
  },
  {
    name: "Vienna Gambit-Steinitz Gambit-Main Line-Zukertort Defence",
    fen: "r1b1kbnr/ppp2ppp/2n5/3p4/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR w kq - 0 6",
    moves: "e4 e5 Nc3 Nc6 f4 exf4 d4 Qh4+ Ke2 d5",
    eco: "C25",
    difficulty: "Hard"
  },
  {
    name: "Vienna Gambit-Steinitz Gambit-Main Line-Paulsen Defence",
    fen: "r1b1kbnr/ppp2ppp/2np4/8/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR w kq - 0 6",
    moves: "e4 e5 Nc3 Nc6 f4 exf4 d4 Qh4+ Ke2 d6",
    eco: "C25",
    difficulty: "Hard"
  },
  {
    name: "Vienna Gambit-Steinitz Gambit-Main Line-Soerensen Defence",
    fen: "r1b1kbnr/pppp1p1p/2n5/6p1/3PPp1q/2N5/PPP1K1PP/R1BQ1BNR w kq - 0 6",
    moves: "e4 e5 Nc3 Nc6 f4 exf4 d4 Qh4+ Ke2 g5",
    eco: "C25",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Open Defence-Riga Variation",
    fen: "r1bqkb1r/1ppp1ppp/p1n5/8/B2pn3/5N2/PPP2PPP/RNBQ1RK1 w kq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 exd4",
    eco: "C80",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Giuoco Piano-Evans Gambit Declined-Lange Variation",
    fen: "r1bqk2r/pppp1ppp/1b5n/nP2N3/2B1P3/8/P1PP1PPP/RNBQK2R w KQkq - 1 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bb6 b5 Na5 Nxe5 Nh6",
    eco: "C51",
    difficulty: "Hard"
  },
  {
    name: "Giuoco Piano-Evans Gambit Accepted-Main Line-Pierce Defence",
    fen: "r1bqk1nr/pppp1ppp/2n5/b7/2BpP3/2P2N2/P4PPP/RNBQK2R w KQkq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 exd4",
    eco: "C52",
    difficulty: "Hard"
  },
  {
    name: "Giuoco Piano-Evans Gambit Accepted-Main Line-Laroche Variation",
    fen: "r1bqk2r/pppp1ppp/2n2n2/b3p3/2BPP3/2P2N2/P4PPP/RNBQK2R w KQkq - 1 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 Nf6",
    eco: "C52",
    difficulty: "Hard"
  },
  {
    name: "Giuoco Piano-Evans Gambit Accepted-Anderssen Variation-Cordel Variation",
    fen: "r1bqk1nr/ppppbppp/8/n3p3/2BPP3/2P2N2/P4PPP/RNBQK2R w KQkq - 1 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Be7 d4 Na5",
    eco: "C51",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Scotch Gambit-Dubois Variation-Max Lange Attack",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/5N2/PPP2PPP/RNBQ1RK1 w kq - 2 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Bc5",
    eco: "C55",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Dubois Variation-Scotch Gambit-Double Gambit Accepted/Anti-Lange Variation",
    fen: "r1bqkb1r/pppp1ppp/2n5/8/2Bpn3/5N2/PPP2PPP/RNBQ1RK1 w kq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Nxe4",
    eco: "C56",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Classical Variation-Intermezzo Variation",
    fen: "r1b1k1nr/pppp1ppp/2N2q2/2b5/4P3/8/PPP2PPP/RNBQKB1R w KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nxc6 Qf6",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "4 Knights Game-Double Ruy Lopez-Symmetrical Variation-Tarrasch Variation",
    fen: "r2q1rk1/ppp2ppp/2npbn2/1B2p1B1/1b2P3/2NP1N2/PPP2PPP/R2Q1RK1 w - - 2 8",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Be6",
    eco: "C49",
    difficulty: "Hard"
  },
  {
    name: "4 Knights Game-Double Ruy Lopez-Symmetrical Variation-Pillsbury Variation",
    fen: "r1bq1rk1/ppp1nppp/3p1n2/1B2p1B1/1b2P3/2NP1N2/PPP2PPP/R2Q1RK1 w - - 2 8",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Ne7",
    eco: "C49",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Quiet Variation-Schallopp Defence-Exchange Variation",
    fen: "rn1qkb1r/pp2pppp/5n2/3p1b2/3P4/2N1PN2/PP3PPP/R1BQKB1R b KQkq - 1 6",
    moves: "d4 d5 c4 c6 Nf3 Nf6 e3 Bf5 cxd5 cxd5 Nc3",
    eco: "D12",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Alapin Variation-Czech Defence-Krause Attack",
    fen: "rn1qkb1r/pp2pppp/2p2n2/4Nb2/P1pP4/2N5/1P2PPPP/R1BQKB1R b KQkq - 2 6",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 Ne5",
    eco: "D17",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Alapin Variation-Czech Defence-Bled Attack",
    fen: "rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP3N/2N5/1P2PPPP/R1BQKB1R b KQkq - 2 6",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 Nh4",
    eco: "D17",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Accepted-Normal Variation-Alekhine Defence-Alatortsev Variation",
    fen: "rn1qkbnr/1pp2ppp/p3p3/3P4/2B3b1/4PN2/PP3PPP/RNBQK2R b KQkq - 0 6",
    moves: "d4 d5 c4 dxc4 Nf3 a6 e3 Bg4 Bxc4 e6 d5",
    eco: "D22",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Pillsbury Variation-Neo-Orthodox Variation-Main Line",
    fen: "rnbq1rk1/ppp1bpp1/4pn1p/3p4/2PP3B/2N1PN2/PP3PPP/R2QKB1R b KQ - 1 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bh4",
    eco: "D56",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Pillsbury Variation-Orthodox Defence-Botvinnik Variation",
    fen: "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2NBPN2/PP3PPP/R2QK2R b KQ - 4 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Bd3",
    eco: "D60",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Normal Defence-Exchange Variation-Sämisch Variation",
    fen: "r1bqkb1r/pppn1ppp/5n2/3p4/3P1B2/2N2N2/PP2PPPP/R2QKB1R b KQkq - 3 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Nf3 Nbd7 Bf4",
    eco: "D35",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Harrwitz Attack-2 Knights Defence-Blockade Line",
    fen: "r1bq1rk1/pppnbppp/4pn2/2Pp4/3P1B2/2N1PN2/PP3PPP/R2QKB1R b KQ - 0 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 Be7 Bf4 O-O e3 Nbd7 c5",
    eco: "D37",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-Normal Variation-Modern Benoni Defence-Penrose Variation",
    fen: "rnbqkb1r/pp3p1p/3p1np1/2pP4/8/2N2N2/PP1BPPPP/R2QKB1R b KQkq - 1 7",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 Nf3 g6 Bd2",
    eco: "A61",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-Normal Variation-Modern Benoni Defence-Uhlmann Variation",
    fen: "rnbqkb1r/pp3p1p/3p1np1/2pP2B1/8/2N2N2/PP2PPPP/R2QKB1R b KQkq - 1 7",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 Nf3 g6 Bg5",
    eco: "A61",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Traditional Variation-Old Main Line-Kramnik Variation",
    fen: "rn1q1rk1/pbppbppp/1p2pn2/8/2PP4/5NP1/PP2PPBP/RNBQR1K1 b - - 6 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7 O-O O-O Re1",
    eco: "E17",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Classical Variation-Original Defence-Kashdan Variation",
    fen: "rnbq1rk1/pp2ppbp/2p2np1/3P4/3P4/5NP1/PP2PPBP/RNBQ1RK1 b - - 0 7",
    moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O O-O c6 cxd5",
    eco: "D78/D79",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Orthodox Variation-Closed Variation-Main Line",
    fen: "rnbq1rk1/pp3pbp/2pp1np1/3Pp3/2P1P3/2N1BP2/PP2N1PP/R2QKB1R b KQ - 1 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5 c6 Nge2",
    eco: "E89",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Scheveningen Variation-Vitolins Variation",
    fen: "rnbqkb1r/pp3ppp/3ppn2/1B6/3NP3/2N5/PPP2PPP/R1BQK2R b KQkq - 1 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Bb5+",
    eco: "B80",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Classical Variation-Richter-Rauzer Variation-Margate/Alekhine/Vitolins Variation",
    fen: "r1bqkb1r/pp3ppp/2nppn2/1B4B1/3NP3/2N5/PPP2PPP/R2QK2R b KQkq - 1 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bg5 e6 Bb5",
    eco: "B62",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Classical Variation-Richter-Rauzer Variation-Podebrady Variation",
    fen: "r1bqkb1r/pp3ppp/2nppn2/6B1/4P3/1NN5/PPP2PPP/R2QKB1R b KQkq - 1 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bg5 e6 Nb3",
    eco: "B62",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Open Variation-Accelerated Dragon-Modern Variation",
    fen: "r1bqk2r/pp1pppbp/2n2np1/8/2BNP3/2N1B3/PPP2PPP/R2QK2R b KQkq - 5 7",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 Nc3 Bg7 Be3 Nf6 Bc4",
    eco: "B35",
    difficulty: "Hard"
  },
  {
    name: "Old Sicilian Defence-Pelikán Variation-Richter Variation-Margate Variation",
    fen: "r1bqkb1r/pp3ppp/2nppn2/1B4B1/3NP3/2N5/PPP2PPP/R2QK2R b KQkq - 1 7",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Bg5 e6 Bb5",
    eco: "B62",
    difficulty: "Hard"
  },
  {
    name: "Old Sicilian Defence-Pelikán Variation-Richter Variation-Podebrady Variation",
    fen: "r1bqkb1r/pp3ppp/2nppn2/6B1/4P3/1NN5/PPP2PPP/R2QKB1R b KQkq - 1 7",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Bg5 e6 Nb3",
    eco: "B62",
    difficulty: "Hard"
  },
  {
    name: "King's Bishop's Gambit-Classical Defence-Cozio Variation-Lesser Cozio Variation",
    fen: "rnb1kbnr/ppp2ppp/3p4/8/2B1Pp1q/5Q2/PPPP2PP/RNB2KNR b kq - 1 5",
    moves: "e4 e5 f4 exf4 Bc4 Qh4+ Kf1 d6 Qf3",
    eco: "C33",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Ghulam Kassim Gambit-Kotov Gambit",
    fen: "rnbqkbnr/pppp1p1p/8/8/2BPPB2/5p2/PPP3PP/RN1QK2R b KQkq - 0 6",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 d4 gxf3 Bxf4",
    eco: "C37",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Gambit-Panteldakis Countergambit-Symmetrical Variation",
    fen: "rnbqk1nr/ppp3pp/3b4/3p1P2/3P1p2/3B1N2/PPP3PP/RNBQK2R b KQkq - 2 6",
    moves: "e4 e5 f4 f5 exf5 exf4 Nf3 d5 d4 Bd6 Bd3",
    eco: "C30",
    difficulty: "Hard"
  },
  {
    name: "Vienna Game-Stanley Variation-Modern Variation-Adams' Gambit",
    fen: "r1bqkb1r/pppp1ppp/2nn4/4p2Q/3P4/1BN5/PPP2PPP/R1B1K1NR b KQkq - 0 6",
    moves: "e4 e5 Nc3 Nf6 Bc4 Nxe4 Qh5 Nd6 Bb3 Nc6 d4",
    eco: "C27",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Modern Steinitz Defence-Richter Variation",
    fen: "r1bqkbnr/2p2ppp/p1pp4/4p3/3PP3/5N2/PPP2PPP/RNBQK2R b KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 Bxc6+ bxc6 d4",
    eco: "C73",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Ruy Lopez-Bird Defence-Berger Variation",
    fen: "r1bqkb1r/pp1p1ppp/2p2n2/6B1/2BpP3/3P4/PPP2PPP/RN1QK2R b KQkq - 3 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nd4 Nxd4 exd4 d3 c6 Bc4 Nf6 Bg5",
    eco: "C61",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-4 Knights Game-Italian Variation-Noa Gambit",
    fen: "r1bqkb1r/pppp1Bpp/2n5/4p3/4n3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 0 5",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bc4 Nxe4 Bxf7+",
    eco: "C47",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Advance Variation-Paulsen Attack-Milner-Barry Gambit",
    fen: "r1b1kbnr/pp3ppp/1qn1p3/2ppP3/3P4/2PB1N2/PP3PPP/RNBQK2R b KQkq - 4 6",
    moves: "e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 Bd3",
    eco: "C02",
    difficulty: "Hard"
  },
  {
    name: "Alekhine Defence-Normal Variation-2 Pawns Attack-Karpov Variation",
    fen: "rnbqkb1r/pp2pp1p/1n1p2p1/8/2PP4/5N1P/PP3PP1/RNBQKB1R b KQkq - 1 7",
    moves: "e4 Nf6 e5 Nd5 c4 Nb6 d4 d6 exd6 cxd6 h3 g6 Nf3",
    eco: "B02",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Accepted-Traditional System-Classical Defence-Main Line",
    fen: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1 w kq - 0 7",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5 O-O a6",
    eco: "D27",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-Harrwitz Attack-Fianchetto Defence",
    fen: "rnbq1rk1/p1p1bppp/1p2pn2/3p4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R w KQ - 0 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 Be7 Bf4 O-O e3 b6",
    eco: "D37",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-Harrwitz Attack-Orthodox Defence",
    fen: "rnbq1rk1/pp2bppp/2p1pn2/3p4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R w KQ - 0 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 Be7 Bf4 O-O e3 c6",
    eco: "D37",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-Harrwitz Attack-2 Knights Defence",
    fen: "r1bq1rk1/pppnbppp/4pn2/3p4/2PP1B2/2N1PN2/PP3PPP/R2QKB1R w KQ - 1 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 Be7 Bf4 O-O e3 Nbd7",
    eco: "D37",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Blackmar-Diemer Gambit-O'Kelly Variation",
    fen: "rnbqkb1r/pp2pppp/2p2n2/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq - 0 6",
    moves: "d4 d5 Nc3 Nf6 e4 dxe4 f3 exf3 Nxf3 c6",
    eco: "D00",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Blackmar-Diemer Gambit-Bogolubov Variation",
    fen: "rnbqkb1r/ppp1pp1p/5np1/8/3P4/2N2N2/PPP3PP/R1BQKB1R w KQkq - 0 6",
    moves: "d4 d5 Nc3 Nf6 e4 dxe4 f3 exf3 Nxf3 g6",
    eco: "D00",
    difficulty: "Hard"
  },
  {
    name: "Modern Defence-Pterodactyl Defence-Fianchetto Variation-Queen Pteronodon Variation",
    fen: "rnb1k1nr/pp1ppp1p/6p1/q1pP4/2P5/2P5/P3PPPP/R1BQKBNR w KQkq - 1 6",
    moves: "d4 g6 c4 Bg7 Nc3 c5 d5 Bxc3+ bxc3 Qa5",
    eco: "A40",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-Rubinstein Line-Hübner Variation-Panov Attack (Main Line)",
    fen: "rnbqk2r/pp3ppp/4pn2/3p4/1bPP4/2N2N2/PP3PPP/R1BQKB1R w KQkq - 0 7",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 c5 Nf3 cxd4 exd4 d5",
    eco: "E54",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-Classical Variation-Berlin Variation-Steiner Variation",
    fen: "rnbqk2r/pp1p1ppp/4pn2/2P5/2P5/2b5/PPQ1PPPP/R1B1KBNR w KQkq - 0 6",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 c5 dxc5 Bxc3+",
    eco: "E39",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Sämisch Variation-Yates Defence-Ruban Variation",
    fen: "1rbq1rk1/ppp1ppbp/2np1np1/8/2PPP3/2N1BP2/PP2N1PP/R2QKB1R w KQ - 5 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 Nc6 Nge2 Rb8",
    eco: "E83",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Grünfeld Defence-Stockholm Variation-Lundin Variation",
    fen: "rnbqkb1r/pp2pp1p/6p1/2p3B1/2PPp3/8/PP1QPPPP/R3KBNR w KQkq - 0 7",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Bg5 Ne4 Nxe4 dxe4 Qd2 c5",
    eco: "D80",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Najdorf Variation-Byrne Attack-Anti-English Variation",
    fen: "rnbqkb1r/1p2pppp/p2p4/8/3NP1n1/2N1B3/PPP2PPP/R2QKB1R w KQkq - 2 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 Ng4",
    eco: "B90",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Scheveningen Variation-Sozin Attack-Leonhardt Variation",
    fen: "r1bqkb1r/pp3ppp/2nppn2/8/2BNP3/2N5/PPP2PPP/R1BQK2R w KQkq - 2 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Bc4 Nc6",
    eco: "B88",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Classical Variation-Anti-Sozin Variation",
    fen: "r1b1kb1r/pp2pppp/1qnp1n2/8/2BNP3/2N5/PPP2PPP/R1BQK2R w KQkq - 5 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bc4 Qb6",
    eco: "B57",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Panov-Botvinnik Attack-Panov Attack-Carlsbad Variation",
    fen: "r1bqkb1r/pp3ppp/2n1pn2/3p2B1/2PP4/2N5/PP3PPP/R2QKBNR w KQkq - 2 7",
    moves: "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Bg5 Nc6",
    eco: "B14",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Modern Defence-Botvinnik Variation-Czerniak Line",
    fen: "r1b1kb1r/pp2pppp/2n2n2/q2p2B1/2PP4/2N5/PP3PPP/R2QKBNR w KQkq - 5 7",
    moves: "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 Nc6 Bg5 Qa5",
    eco: "B13",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Modern Defence-Botvinnik Variation-Reifir-Spielmann Line",
    fen: "r1b1kb1r/pp2pppp/1qn2n2/3p2B1/2PP4/2N5/PP3PPP/R2QKBNR w KQkq - 5 7",
    moves: "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 Nc6 Bg5 Qb6",
    eco: "B13",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Traditional Variation-Knight Variation-Tartakower/Nimzowitsch Variation",
    fen: "rnbqkb1r/pp3ppp/2p2p2/8/3P4/8/PPP2PPP/R1BQKBNR w KQkq - 0 6",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nf6 Nxf6+ exf6",
    eco: "B15",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Traditional Variation-Knight Variation-Bronstein-Larsen/Nimzovich Variation",
    fen: "rnbqkb1r/pp2pp1p/2p2p2/8/3P4/8/PPP2PPP/R1BQKBNR w KQkq - 0 6",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nf6 Nxf6+ gxf6",
    eco: "B16",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Danish Gambit Accepted-Classical Defence",
    fen: "rnbqkb1r/pppp1ppp/5n2/8/2B1P3/8/PB3PPP/RN1QK1NR w KQkq - 1 6",
    moves: "e4 e5 d4 exd4 c3 dxc3 Bc4 cxb2 Bxb2 Nf6",
    eco: "C21",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Danish Gambit Accepted-Collijn/Chigorin Defence",
    fen: "rnb1kbnr/ppppqppp/8/8/2B1P3/8/PB3PPP/RN1QK1NR w KQkq - 1 6",
    moves: "e4 e5 d4 exd4 c3 dxc3 Bc4 cxb2 Bxb2 Qe7",
    eco: "C21",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Classical Defence-First Jaenisch Variation",
    fen: "rnb1kb1r/pppp1ppp/5n2/8/2B1Pp1q/8/PPPP2PP/RNBQ1KNR w kq - 4 5",
    moves: "e4 e5 f4 exf4 Bc4 Qh4+ Kf1 Nf6",
    eco: "C33",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Middleton Countergambit",
    fen: "rn1qkbnr/ppp2p2/3p4/6p1/2B1Ppp1/5N2/PPPP2P1/RNBQ1RK1 w kq - 0 8",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 d6 O-O Bg4 h3 h5 hxg4 hxg4",
    eco: "C37",
    difficulty: "Hard"
  },
  {
    name: "Vienna Gambit-Main Line-Paulsen Attack-Bardeleben Variation",
    fen: "rnbqkb1r/ppp3pp/8/3pPp2/4n3/2N2Q2/PPPP2PP/R1B1KBNR w KQkq f6 0 6",
    moves: "e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Qf3 f5",
    eco: "C29",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Worrall Attack-Solid/Delayed Castling Line",
    fen: "r1bqk2r/2p1bppp/p1np1n2/1p2p3/4P3/1B3N2/PPPPQPPP/RNB2RK1 w kq - 0 8",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Qe2 b5 Bb3 d6",
    eco: "C86",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Trajkovic Counterattack",
    fen: "r2qk2r/1bppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w kq - 2 8",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 Bb7",
    eco: "C88",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Scotch Gambit-Max Lange Attack-Steinitz/Spielmann Defence",
    fen: "r1bqk2r/pppp1ppp/2n5/2b1P3/2Bp2n1/5N2/PPP2PPP/RNBQ1RK1 w kq - 1 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Bc5 e5 Ng4",
    eco: "C56",
    difficulty: "Hard"
  },
  {
    name: "Scotch Game-Classical Variation-Golmayo Variation-Millennium Variation",
    fen: "r1b1k1nr/pppp1ppp/2n3q1/2b5/3NP3/2P1B3/PP3PPP/RN1QKB1R w KQkq - 1 7",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Qf6 c3 Qg6",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "4 Knights Game-Spanish Variation-Classical Defence-Marshall Gambit",
    fen: "r1bq1rk1/pppp1ppp/5n2/2b1N3/B2nP3/2N5/PPPP1PPP/R1BQK2R w KQ - 3 7",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 Nxe5 Nd4 Ba4 O-O",
    eco: "C48",
    difficulty: "Hard"
  },
  {
    name: "Petrov's Defence-Modern Attack-Steinitz Variation-Bardeleben Variation",
    fen: "r1bqkb1r/pppp1ppp/2n5/2n1P3/3N4/8/PPP1QPPP/RNB1KB1R w KQkq - 1 7",
    moves: "e4 e5 Nf3 Nf6 d4 exd4 e5 Ne4 Qe2 Nc5 Nxd4 Nc6",
    eco: "C43",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Petrov's Defence-Classical Attack-Marshall Variation",
    fen: "rnbqk2r/ppp2ppp/3b4/3p4/3Pn3/3B1N2/PPP2PPP/RNBQK2R w KQkq - 2 7",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Bd6",
    eco: "C42",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Petrov's Defence-Classical Attack-Mason-Showalter Variation",
    fen: "r1bqkb1r/ppp2ppp/2n5/3p4/3Pn3/3B1N2/PPP2PPP/RNBQK2R w KQkq - 2 7",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Nc6",
    eco: "C42",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Winawer Variation-Fingerslip Variation-Kunin Double Gambit",
    fen: "rnb1k1nr/ppp2ppp/4p3/8/1b1qp1Q1/2N5/PPPB1PPP/R3KBNR w KQkq - 0 6",
    moves: "e4 e6 d4 d5 Nc3 Bb4 Bd2 dxe4 Qg4 Qxd4",
    eco: "C15",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Winawer Variation-Advance Variation-Maroczy-Wallis Variation",
    fen: "rnbqk1nr/pp3ppp/4p3/3pP3/1P6/2p5/1PP2PPP/R1BQKBNR w KQkq - 0 7",
    moves: "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 cxd4 axb4 dxc3",
    eco: "C18",
    difficulty: "Hard"
  },
  {
    name: "Robatsch Defence-Modern Pterodactyl Variation-Eastern, Benoni Variation-Pteronodon Variation",
    fen: "rnb1k1nr/pp1ppp1p/6p1/q1pP4/4P3/2P5/P1P2PPP/R1BQKBNR w KQkq - 1 6",
    moves: "e4 g6 d4 Bg7 Nc3 c5 d5 Bxc3+ bxc3 Qa5",
    eco: "B06",
    difficulty: "Hard"
  },
  {
    name: "English Opening-4 Knights System #2-Quiet Line #3-Stean Variation",
    fen: "r1bqr1k1/pppp1ppp/2n2n2/3NpQ2/1bP5/4PN2/PP1P1PPP/R1B1KB1R b KQ - 6 7",
    moves: "c4 e5 Nc3 Nc6 Nf3 Nf6 e3 Bb4 Qc2 O-O Nd5 Re8 Qf5",
    eco: "A28",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Czech Defence-Krause Attack-Fazekas Gambit",
    fen: "r2qkb1r/pp2pppp/n1p2n2/4Nb2/P1pPP3/2N5/1P3PPP/R1BQKB1R b KQkq - 0 7",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 Ne5 Na6 e4",
    eco: "D17",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Accepted-Normal Variation-Gunsberg Defence-Prianishenmo Gambit",
    fen: "rnbqkb1r/pp3ppp/5n2/2ppP3/2p5/2N2N2/PP3PPP/R1BQKB1R b KQkq - 0 7",
    moves: "d4 d5 c4 dxc4 Nf3 c5 d5 Nf6 Nc3 e6 e4 exd5 e5",
    eco: "D24",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Schlechter-Rubinstein System-Folkestone Variation-Rey Ardid/Central Break Variation",
    fen: "r1bqkbnr/pp3ppp/2n5/3p4/2pPP3/2N2NP1/PP3P1P/R1BQKB1R b KQkq - 0 7",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 c4 e4",
    eco: "D33",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Accelerated Semi-Slav Defence-Marshall Gambit-Main Line",
    fen: "rnbqk1nr/pp3ppp/2p1p3/8/1bPPN3/8/PP1B1PPP/R2QKBNR b KQkq - 2 6",
    moves: "d4 d5 c4 e6 Nc3 c6 e4 dxe4 Nxe4 Bb4+ Bd2",
    eco: "D31",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Pillsbury Variation-Miles Variation-Dzhindzhi Attack",
    fen: "rnbq1rk1/ppp1bppp/4pn2/3p2B1/2PP4/2N2N2/PPQ1PPPP/R3KB1R b KQ - 7 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 Nf3 O-O Qc2",
    eco: "D53",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Normal Variation-Stoltz Variation-Centre Variation",
    fen: "r1bqk2r/pp1n1ppp/2pbpn2/3p4/2PPP3/2N2N2/PPQ2PPP/R1B1KB1R b KQkq - 0 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Qc2 Bd6 e4",
    eco: "D45",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Blackmar-Diemer Gambit-Ryder Variation",
    fen: "rnbqkb1r/ppp1pppp/5n2/8/3P4/2N2Q2/PPP3PP/R1B1KBNR b KQkq - 0 5",
    moves: "d4 d5 Nc3 Nf6 e4 dxe4 f3 exf3 Qxf3",
    eco: "D00",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-Benko Gambit half Accepted-Zaitsev System-Nescafé Frappe Attack",
    fen: "rnbqkb1r/3ppppp/5n2/1NpP4/1p2P3/8/PP3PPP/R1BQKBNR b KQkq - 1 7",
    moves: "d4 Nf6 c4 c5 d5 b5 cxb5 a6 Nc3 axb5 e4 b4 Nb5",
    eco: "A57",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Orthodox Variation-Positional Defence-Closed Line",
    fen: "r1bq1rk1/pppn1pbp/3p1np1/3Pp3/2P1P3/2N2N2/PP2BPPP/R1BQ1RK1 b - - 0 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nbd7 d5",
    eco: "E94",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Delayed Fianchetto Variation-Yugoslav System-Panno-Yugoslav/Advance Line",
    fen: "r1bq1rk1/pp2ppbp/2np1np1/2pP4/2P5/2N2NP1/PP2PPBP/R1BQ1RK1 b - - 0 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 c5 O-O Nc6 d5",
    eco: "E66",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Kieseritzky Gambit-Campbell Defence-Brentano Defence",
    fen: "rnbqkb1r/ppp2p1p/5n2/3pN3/3PPBpP/8/PPP3P1/RN1QKB1R b KQkq - 0 7",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 d5 d4 Nf6 Bxf4",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Latvian Countergambit Accepted-Bilguer Variation-Bronstein Attack",
    fen: "rnb1kbnr/ppp3pp/3p1q2/8/2NPp3/8/PPP1BPPP/RNBQK2R b KQkq - 1 6",
    moves: "e4 e5 Nf3 f5 Nxe5 Qf6 d4 d6 Nc4 fxe4 Be2",
    eco: "C40",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Caro Variation-Taimanov Variation-Nightingale Gambit",
    fen: "r1bqkbnr/2pp1Bpp/p7/np2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 b5 Bb3 Na5 Bxf7+",
    eco: "C70",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Modern Steinitz Defence-Siesta Variation-Kopayev Variation",
    fen: "r2qkbnr/1pp3pp/p1np4/4pb2/B7/2P2N2/PP1P1PPP/RNBQ1RK1 b kq - 1 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 c3 f5 exf5 Bxf5 O-O",
    eco: "C74",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Berlin Defence-Rio Gambit Accepted-Minckwitz Variation",
    fen: "r1bqk2r/ppppbppp/2n5/1B2P3/4n3/5N2/PPP2PPP/RNBQ1RK1 b kq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Be7 dxe5",
    eco: "C67",
    difficulty: "Hard"
  },
  {
    name: "Evans Gambit Accepted-Main Line-Bronstein Defence-Sokolsky Variation",
    fen: "r1bqk1nr/ppp2ppp/2np4/b3p1B1/2BPP3/2P2N2/P4PPP/RN1QK2R b KQkq - 1 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 d6 Bg5",
    eco: "C52",
    difficulty: "Hard"
  },
  {
    name: "Giuoco Piano-Classical Variation-Centre Attack-Mason Gambit",
    fen: "r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/2P2N2/PP3PPP/RNBQ1RK1 b kq - 1 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 O-O",
    eco: "C53/C54",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Max Lange Attack-Steinitz Defence-Krause Variation",
    fen: "r1bqk2r/pppp1ppp/2n5/2b1P3/2Bp2n1/2P2N2/PP3PPP/RNBQ1RK1 b kq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Bc5 e5 Ng4 c3",
    eco: "C55",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Wilkes Barre Counterattack-Bishop Sac Line-Trencianske-Teplice Gambit",
    fen: "r1bq3r/ppppkBpp/2n2n2/2b1p1N1/3PP3/8/PPP2PPP/RNBQK2R b KQ - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 Bc5 Bxf7+ Ke7 d4",
    eco: "C57",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Gruber Variation-Fegatello Attack-Fried Liver Attack",
    fen: "r1bqkb1r/ppp2Npp/2n5/3np3/2B5/8/PPPP1PPP/RNBQK2R b KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5 Nxf7",
    eco: "C57",
    difficulty: "Hard"
  },
  {
    name: "Scotch Game-Classical Variation-Golmayo Variation-Blumenfeld Attack",
    fen: "r1b1k1nr/pppp1ppp/2n2q2/1Nb5/4P3/4B3/PPP2PPP/RN1QKB1R b KQkq - 4 6",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Qf6 Nb5",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Winawer Variation-Kondratiyev Variation",
    fen: "rnb1k1nr/pp3ppp/4p3/2pq4/1b1P4/2NB4/PPPB1PPP/R2QK1NR b KQkq - 1 6",
    moves: "e4 e6 d4 d5 Nc3 Bb4 Bd3 c5 exd5 Qxd5 Bd2",
    eco: "C15",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Winawer Variation-Delayed Exchange Variation-Canal Attack",
    fen: "rnbqk2r/ppp1nppp/8/3p3Q/1b1P4/2NB4/PPP2PPP/R1B1K1NR b KQkq - 3 6",
    moves: "e4 e6 d4 d5 Nc3 Bb4 exd5 exd5 Bd3 Ne7 Qh5",
    eco: "C15",
    difficulty: "Hard"
  },
  {
    name: "Réti Gambit-Anglo-Slav Variation-Bogoljubov Variation-Stonewall Line",
    fen: "rnbq1rk1/pp2bppp/2p1pn2/3p4/2P5/1P3NP1/PB1PPPBP/RN1Q1RK1 b - - 4 7",
    moves: "Nf3 d5 c4 c6 b3 Nf6 Bb2 e6 g3 Be7 Bg2 O-O O-O",
    eco: "A12",
    difficulty: "Hard"
  },
  {
    name: "Polish Opening-Tartakower Gambit-Polish Gambit-Brinckmann Variation",
    fen: "r1b1k1nr/ppppq2p/2n2pp1/4pP2/1bB1P3/8/PBPP2PP/RN1QK1NR w KQkq - 0 7",
    moves: "b4 e5 Bb2 f6 e4 Bxb4 Bc4 Nc6 f4 Qe7 f5 g6",
    eco: "A00",
    difficulty: "Hard"
  },
  {
    name: "Saragossa Opening-Chicken Pizza Opening",
    fen: "r2q1rk1/1bppbppp/ppn1pn2/8/3PP3/2PB1P2/PP4PP/RNBKQ1NR w - - 0 10",
    moves: "c3 Nf6 Qa4 e6 f3 Bc5 Qh4 Be7 Kd1 Nc6 Qe1 b6 e4 Bb7 d4 O-O Bd3 a6",
    eco: "A00",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Line-Exchange Variation-Symmetrical Line",
    fen: "r2qkb1r/pp2pppp/2n2n2/3p1b2/3P1B2/2N2N2/PP2PPPP/R2QKB1R w KQkq - 4 7",
    moves: "d4 d5 c4 c6 Nf3 Nf6 cxd5 cxd5 Nc3 Nc6 Bf4 Bf5",
    eco: "D14",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Czech Defence-Krause Attack-Wiesbaden Variation",
    fen: "rn1qkb1r/pp3ppp/2p1pn2/4Nb2/P1pP4/2N5/1P2PPPP/R1BQKB1R w KQkq - 0 7",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 Ne5 e6",
    eco: "D17",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Queen's Knight Variation-Tarrasch Defence-Tarrasch Gambit",
    fen: "rnbqkbnr/p4ppp/8/1pP5/N2p4/8/PP2PPPP/R1BQKBNR w KQkq b6 0 7",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 dxc5 d4 Na4 b5",
    eco: "D32",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Neo-Orthodox Variation-Main Line-Tartakower/Makogonov-Bondarevsky System",
    fen: "rnbq1rk1/p1p1bpp1/1p2pn1p/3p4/2PP3B/2N1PN2/PP3PPP/R2QKB1R w KQ - 0 8",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bh4 b6",
    eco: "D58",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Neo-Orthodox Variation-Main Line-Lasker Defence",
    fen: "rnbq1rk1/ppp1bpp1/4p2p/3p4/2PPn2B/2N1PN2/PP3PPP/R2QKB1R w KQ - 2 8",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bh4 Ne4",
    eco: "D56",
    difficulty: "Hard"
  },
  {
    name: "Dutch Defence-Fianchetto Variation-Classical Variation-Ilyin-Genevsky Variation",
    fen: "rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 2 8",
    moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O O-O d6 Nc3 Qe8",
    eco: "A97",
    difficulty: "Hard"
  },
  {
    name: "East Indian Defence-Closed Variation-Open Defence-Modern Sharp Variation",
    fen: "r1bqk2r/ppp2ppp/2n1pn2/8/QbpP4/5NP1/PP2PPBP/RNB1K2R w KQkq - 4 7",
    moves: "d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Nf3 Nc6 Qa4 Bb4+",
    eco: "E04",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Sämisch Variation-O'Kelly Variation",
    fen: "rnbqk2r/p2p1ppp/1p2pn2/2p5/2PP4/P1P1P3/5PPP/R1BQKBNR w KQkq - 0 7",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 c5 e3 b6",
    eco: "E26",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-Ragozin Variation-Except Gligoric System-Gligoric System",
    fen: "rnbq1rk1/pp3ppp/4pn2/2p5/1bpP4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 0 8",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5 Bd3 c5 O-O dxc4",
    eco: "E54",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Classical Variation-Orthodox Variation-Aronin-Taimanov/Yugoslav/Mar Del Plata Attack",
    fen: "r1bq1rk1/ppp2pbp/2np1np1/4p3/2PPP3/2N2N2/PP2BPPP/R1BQ1RK1 w - - 2 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6",
    eco: "E97",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Delayed Fianchetto Variation-Kavalek/Bronstein Defence",
    fen: "rnb2rk1/pp2ppbp/2pp1np1/q7/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 2 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 c6 O-O Qa5",
    eco: "E62",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Delayed Fianchetto Variation-Benjamin Defence",
    fen: "rnb2rk1/pp2ppbp/1qpp1np1/8/2PP4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 2 8",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 c6 O-O Qb6",
    eco: "E62",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit Accepted-Taimanov Formation",
    fen: "rnbqkb1r/1p1pnppp/p3p3/8/2B1P3/2N2N2/PP3PPP/R1BQK2R w KQkq - 2 7",
    moves: "e4 c5 d4 cxd4 c3 dxc3 Nxc3 e6 Bc4 a6 Nf3 Ne7",
    eco: "B21",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit Accepted-Scheveningen Formation",
    fen: "r1bqkbnr/pp3ppp/2npp3/8/2B1P3/2N2N2/PP3PPP/R1BQK2R w KQkq - 0 7",
    moves: "e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 d6 Bc4 e6",
    eco: "B21",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit Accepted-Paulsen Formation",
    fen: "r1bqkbnr/1p1p1ppp/p1n1p3/8/2B1P3/2N2N2/PP3PPP/R1BQK2R w KQkq - 0 7",
    moves: "e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 e6 Bc4 a6",
    eco: "B21",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit Accepted-Pin Defence",
    fen: "r1bqk1nr/pp1p1ppp/2n1p3/8/1bB1P3/2N2N2/PP3PPP/R1BQK2R w KQkq - 2 7",
    moves: "e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 e6 Bc4 Bb4",
    eco: "B21",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit Accepted-Morphy Defence",
    fen: "r1bqk1nr/pp1p1ppp/2n1p3/2b5/2B1P3/2N2N2/PP3PPP/R1BQK2R w KQkq - 2 7",
    moves: "e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 e6 Bc4 Bc5",
    eco: "B21",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Kopec Variation-Normal Variation-Modern Dragon Variation",
    fen: "r1bqk2r/pp2ppbp/2np1np1/8/2BNP3/2N1B3/PPP2PPP/R2QK2R w KQkq - 6 8",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 g6 Nc3 Bg7 Be3 Nf6 Bc4 Nc6",
    eco: "B54",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Najdorf Variation-Polugayevsky Variation",
    fen: "rnbqkb1r/5ppp/p2ppn2/1p4B1/3NPP2/2N5/PPP3PP/R2QKB1R w KQkq - 0 8",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 e6 f4 b5",
    eco: "B96",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Najdorf Variation-Neo-Classical Defence",
    fen: "r1bqkb1r/1p3ppp/p1nppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R w KQkq - 1 8",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 e6 f4 Nc6",
    eco: "B96",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Open Variation-Maroczy Bind-Bronstein Variation",
    fen: "r1bqk2r/1p1p1ppp/p1n1pn2/8/1bPNP3/2NB4/PP3PPP/R1BQK2R w KQkq - 5 8",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 c4 Nf6 Nc3 Bb4 Bd3 Nc6",
    eco: "B41",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Accelerated Dragon-Maróczy Bind-Breyer Variation",
    fen: "r1bqk2r/pp1pppbp/2n3p1/8/2PNP1n1/2N1B3/PP3PPP/R2QKB1R w KQkq - 5 8",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4 Bg7 Be3 Nf6 Nc3 Ng4",
    eco: "B39",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Accelerated Dragon-Maróczy Bind-Simagin Variation",
    fen: "r1bqk2r/pp2ppbp/2np2pn/8/2P1P3/8/PPN1BPPP/RNBQK2R w KQkq - 2 8",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4 Bg7 Nc2 d6 Be2 Nh6",
    eco: "B37",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Danish Gambit Accepted-Copenhagen Defence",
    fen: "rnbqk1nr/pppp1ppp/8/8/1bB1P3/8/PB3PPP/RN1QK1NR w KQkq - 1 6",
    moves: "e4 e5 d4 exd4 c3 dxc3 Bc4 cxb2 Bxb2 Bb4+",
    eco: "C21",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Latvian Countergambit-Mayet Attack-Poisoned Pawn Variation",
    fen: "rnb1kbnr/pppp2pp/8/4N3/2BPp3/8/PPP2PqP/RNBQK2R w KQkq - 0 6",
    moves: "e4 e5 Nf3 f5 Bc4 fxe4 Nxe5 Qg5 d4 Qxg2",
    eco: "C40",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Modern Steinitz Defence-Richter Variation-Alapin Variation",
    fen: "r1bqkbnr/2p3pp/p1pp1p2/4p3/3PP3/5N2/PPP2PPP/RNBQK2R w KQkq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 Bxc6+ bxc6 d4 f6",
    eco: "C73",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Worrall Attack-Sharp/Caslting Line",
    fen: "r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPPQPPP/RNB2RK1 w - - 2 8",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Qe2 b5 Bb3 O-O",
    eco: "C86",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Improved Steinitz Defence-Hedgehog Variation-Tarrasch Trap",
    fen: "r2q1rk1/pppbbppp/2np1n2/1B2p3/3PP3/2N2N2/PPP2PPP/R1BQR1K1 w - - 5 8",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O d6 d4 Bd7 Nc3 Be7 Re1 O-O",
    eco: "C66",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Giuoco Piano-Evans Gambit Declined-Hirschbach Variation",
    fen: "r1b1k1nr/pppp1ppp/1b6/nP2N1q1/2B1P3/8/P1PP1PPP/RNBQK2R w KQkq - 1 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bb6 b5 Na5 Nxe5 Qg5",
    eco: "C51",
    difficulty: "Hard"
  },
  {
    name: "Giuoco Piano-Evans Gambit Accepted-Main Line-Lasker Defence",
    fen: "r1bqk1nr/ppp2ppp/1bnp4/4p3/2BPP3/2P2N2/P4PPP/RNBQ1RK1 w kq - 1 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 O-O d6 d4 Bb6",
    eco: "C52",
    difficulty: "Hard"
  },
  {
    name: "Giuoco Piano-Evans Gambit Accepted-Main Line-Pierce Variation",
    fen: "r1bqk1nr/pppp1ppp/8/b3p3/2BnP3/2P2N2/P4PPP/RNBQK2R w KQkq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 Nxd4",
    eco: "C52",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-4 Knights Game-Double Ruy Lopez-Alatortsev Variation",
    fen: "r1b2rk1/ppp1qppp/2n2n2/1B1pp3/1b2P3/3P1N2/PPP1NPPP/R1BQ1RK1 w - - 0 8",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 Qe7 Ne2 d5",
    eco: "C49",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-4 Knights Game-Double Ruy Lopez-Gunsberg Counterattack",
    fen: "r1bq1rk1/pppp1ppp/2n5/1B1P4/1b2p3/5N2/PPPP1PPP/R1BQ1RK1 w - - 0 8",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O Nd5 Nxd5 exd5 e4",
    eco: "C49",
    difficulty: "Hard"
  },
  {
    name: "4 Knights Game-Scotch Variation Accepted-Belgrade Gambit-Modern Defence",
    fen: "r1bqkb1r/pppp2pp/2n5/3N1p2/3pn3/5N2/PPP1QPPP/R1B1KB1R w KQkq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nd5 Nxe4 Qe2 f5",
    eco: "C47",
    difficulty: "Hard"
  },
  {
    name: "Robatsch Defence-2 Knights Variation-Suttles Variation-Tal Gambit",
    fen: "rnb1k1nr/pp2ppbp/2pp2p1/6B1/3PP3/2N2N2/PqPQ1PPP/R3KB1R w KQkq - 0 7",
    moves: "e4 g6 d4 Bg7 Nc3 d6 Nf3 c6 Bg5 Qb6 Qd2 Qxb2",
    eco: "B06",
    difficulty: "Hard"
  },
  {
    name: "Réti Opening-King's Indian Attack-Sicilian Variation-French Variation",
    fen: "r1bq1rk1/pp2bppp/2n1pn2/2pp4/4P3/3P1NP1/PPPN1PBP/R1BQ1RK1 w - - 1 8",
    moves: "Nf3 d5 g3 c5 Bg2 Nc6 O-O e6 d3 Nf6 Nbd2 Be7 e4 O-O",
    eco: "A08",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Old Variation-Billinger Gambit",
    fen: "rnb1kbnr/ppp1qppp/8/8/2Bp4/PQ2P3/1P3PPP/RNB1K1NR b KQkq - 0 6",
    moves: "d4 d5 c4 dxc4 e3 e5 Bxc4 exd4 Qb3 Qe7 a3",
    eco: "D20",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Accepted-Classical Defence-Main Line-Geller/Russian Gambit",
    fen: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BPP3/5N2/PP3PPP/RNBQ1RK1 b kq - 0 7",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5 O-O a6 e4",
    eco: "D27",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Accepted-Traditional System-Classical Defence-Primitive Furman Variation",
    fen: "rnbqkb1r/pp3ppp/4pn2/2p5/2BP4/4PN2/PP2QPPP/RNB1K2R b KQkq - 1 6",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5 Qe2",
    eco: "D26",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Pillsbury Variation-Neo-Orthodox Variation-Anti-Tartakower Variation",
    fen: "rnbq1rk1/ppp1bpp1/4pB1p/3p4/2PP4/2N1PN2/PP3PPP/R2QKB1R b KQ - 0 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bxf6",
    eco: "D55",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Pillsbury Variation-Orthodox Defence-Exchange Variation",
    fen: "r1bq1rk1/pppnbppp/4pn2/3P2B1/3P4/2N1PN2/PP3PPP/R2QKB1R b KQ - 0 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 cxd5",
    eco: "D60",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Pillsbury Variation-Orthodox Defence-Rauzer Variation",
    fen: "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/1QN1PN2/PP3PPP/R3KB1R b KQ - 4 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Qb3",
    eco: "D60",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Pillsbury Variation-Orthodox Defence-Rubinstein Variation",
    fen: "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PPQ2PPP/R3KB1R b KQ - 4 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Qc2",
    eco: "D61",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Pillsbury Variation-Orthodox Defence-Main Line",
    fen: "r1bq1rk1/pppnbppp/4pn2/3p2B1/2PP4/2N1PN2/PP3PPP/2RQKB1R b K - 4 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1",
    eco: "D63",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Been-Koomen Variation-Semi-Tarrasch Defence-Primitive Pillsbury Variation",
    fen: "rnbqkb1r/pp3ppp/4pn2/3p2B1/2PQ4/2N2N2/PP2PPPP/R3KB1R b KQkq - 0 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 c5 Nf3 cxd4 Qxd4",
    eco: "D50",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Exchange Variation-Positional Line-Reshevsky Variation",
    fen: "rnbqkb1r/pp3ppp/2p2n2/3p2B1/3P4/2N5/PPQ1PPPP/R3KBNR b KQkq - 1 6",
    moves: "d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 c6 Qc2",
    eco: "D36",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Kasparov-Petrosian Variation-Modern Variation-Romanishin Attack",
    fen: "rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N2N2/1P1BPPPP/R2QKB1R b KQkq - 1 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 Nc3 Bb7 a3 d5 cxd5 Nxd5 Bd2",
    eco: "E12",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Kasparov-Petrosian Variation-Modern Variation-Petrosian Attack",
    fen: "rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N1PN2/1P3PPP/R1BQKB1R b KQkq - 0 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 Nc3 Bb7 a3 d5 cxd5 Nxd5 e3",
    eco: "E12",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Counterthrust Variation-Reshevsky Variation-Delayed Exchange/Margate Variation",
    fen: "rnbq1rk1/ppp1ppbp/6p1/3n4/3P4/5NP1/PP2PPBP/RNBQ1RK1 b - - 1 7",
    moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O cxd5 Nxd5 O-O",
    eco: "D74",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Benko Variation-Prins Variation-Venice Attack",
    fen: "rnbqkb1r/pp3ppp/3p1n2/1B2p3/3NP3/5P2/PPP3PP/RNBQK2R b KQkq - 1 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 f3 e5 Bb5+",
    eco: "B55",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Benko Variation-Sozin Variation-Venice Attack",
    fen: "rnbqkb1r/pp3ppp/3p1n2/1B2p3/3NP3/2N5/PPP2PPP/R1BQK2R b KQkq - 1 6",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Bb5+",
    eco: "B56",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Attack-Leonhardt Variation-Bronstein Variation",
    fen: "r1bqkb1r/pp3ppp/2nppn2/8/2BNP3/P1N5/1PP2PPP/R1BQK2R b KQkq - 0 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Bc4 Nc6 a3",
    eco: "B88",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Attack-Leonhardt Variation-Fischer Variation",
    fen: "r1bqkb1r/pp3ppp/2nppn2/8/3NP3/1BN5/PPP2PPP/R1BQK2R b KQkq - 3 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Bc4 Nc6 Bb3",
    eco: "B88",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Attack-Leonhardt Variation-Main Line",
    fen: "r1bqkb1r/pp3ppp/2nppn2/8/2BNP3/2N1B3/PPP2PPP/R2QK2R b KQkq - 3 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Bc4 Nc6 Be3",
    eco: "B89",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Scheveningen Variation-English Attack",
    fen: "rnbqkb1r/1p3ppp/p2ppn2/8/3NP3/2N1BP2/PPP3PP/R2QKB1R b KQkq - 0 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Be3 a6 f3",
    eco: "B80",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Scheveningen Variation-Delayed Keres Attack",
    fen: "rnbqkb1r/1p3ppp/p2ppn2/8/3NP1P1/2N1B3/PPP2P1P/R2QKB1R b KQkq - 0 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Be3 a6 g4",
    eco: "B81",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Dragon Variation-Classical Attack",
    fen: "rnbqk2r/pp2ppbp/3p1np1/8/3NP3/2N1B3/PPP1BPPP/R2QK2R b KQkq - 3 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 Be2",
    eco: "B72",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Dragon Variation-Yugoslav Attack",
    fen: "rnbqk2r/pp2ppbp/3p1np1/8/3NP3/2N1BP2/PPP3PP/R2QKB1R b KQkq - 0 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3",
    eco: "B75",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Classical Variation-Boleslavsky Variation-Louma Variation",
    fen: "r1bqkb1r/pp3ppp/2Np1n2/4p3/4P3/2N5/PPP1BPPP/R1BQK2R b KQkq - 0 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Be2 e5 Nxc6",
    eco: "B58",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Classical Variation-Richter-Rauzer Variation-Larsen Variation",
    fen: "r2qkb1r/pp1bpppp/2np1n2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R b KQkq - 6 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bg5 Bd7 Qd2",
    eco: "B61",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Classical Variation-Richter-Rauzer Variation-Keres Variation",
    fen: "r1bqkb1r/pp3ppp/2nppn2/6B1/3NP3/2NQ4/PPP2PPP/R3KB1R b KQkq - 1 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bg5 e6 Qd3",
    eco: "B62",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Pelikán Variation-Boleslavsky Variation-Louma Variation",
    fen: "r1bqkb1r/pp3ppp/2Np1n2/4p3/4P3/2N5/PPP1BPPP/R1BQK2R b KQkq - 0 7",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Be2 e5 Nxc6",
    eco: "B58",
    difficulty: "Hard"
  },
  {
    name: "Old Sicilian Defence-Pelikán Variation-Richter Variation-Exchange Variation",
    fen: "r1bqkb1r/pp3ppp/2Nppn2/6B1/4P3/2N5/PPP2PPP/R2QKB1R b KQkq - 0 7",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Bg5 e6 Nxc6",
    eco: "B62",
    difficulty: "Hard"
  },
  {
    name: "Old Sicilian Defence-Pelikán Variation-Richter Variation-Rauzer Variation",
    fen: "r1bqkb1r/pp3ppp/2nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R b KQkq - 1 7",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Bg5 e6 Qd2",
    eco: "B63",
    difficulty: "Hard"
  },
  {
    name: "Old Sicilian Defence-Pelikán Variation-Richter Variation-Keres Variation",
    fen: "r1bqkb1r/pp3ppp/2nppn2/6B1/3NP3/2NQ4/PPP2PPP/R3KB1R b KQkq - 1 7",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Bg5 e6 Qd3",
    eco: "B62",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Tartakower Variation-Maroczy Gambit",
    fen: "rnbqkbnr/pp3ppp/2p5/8/2BpP3/5N2/PPP3PP/RNBQK2R b KQkq - 1 6",
    moves: "e4 c6 d4 d5 f3 dxe4 fxe4 e5 Nf3 exd4 Bc4",
    eco: "B12",
    difficulty: "Hard"
  },
  {
    name: "Centre Countergambit-Mieses Variation-Classical Variation-Grünfeld Variation",
    fen: "rn2kb1r/pp2pppp/2p2n2/q3Nb2/3P2P1/2N5/PPP2P1P/R1BQKB1R b KQkq - 0 7",
    moves: "e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6 Nf3 Bf5 Ne5 c6 g4",
    eco: "B01",
    difficulty: "Hard"
  },
  {
    name: "King's Bishop's Gambit-Classical Defence-Lopez Variation-Cozio's Attack",
    fen: "rnb1kbnr/pppp1p1p/8/6p1/2B1Pp1q/5Q2/PPPP2PP/RNB2KNR b kq - 1 5",
    moves: "e4 e5 f4 exf4 Bc4 Qh4+ Kf1 g5 Qf3",
    eco: "C33",
    difficulty: "Hard"
  },
  {
    name: "Vienna Game-Modern Variation-Monster Declined-Alekhine Variation",
    fen: "r1bqk2r/ppppbppp/2nn4/4N2Q/8/1BN5/PPPP1PPP/R1B1K2R b KQkq - 0 7",
    moves: "e4 e5 Nc3 Nf6 Bc4 Nxe4 Qh5 Nd6 Bb3 Be7 Nf3 Nc6 Nxe5",
    eco: "C27",
    difficulty: "Hard"
  },
  {
    name: "Vienna Game-Vienna Gambit-Main Line-Spielmann Variation",
    fen: "rnbqk2r/ppp2ppp/8/3pP3/1b2n3/2N2N2/PPPPQ1PP/R1B1KB1R b KQkq - 3 6",
    moves: "e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Nf3 Bb4 Qe2",
    eco: "C29",
    difficulty: "Hard"
  },
  {
    name: "Vienna Game-Vienna Gambit-Main Line-Kaufmann Variation",
    fen: "rn1qkb1r/ppp2ppp/8/3pP3/4n1b1/2N2N2/PPPPQ1PP/R1B1KB1R b KQkq - 3 6",
    moves: "e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Nf3 Bg4 Qe2",
    eco: "C29",
    difficulty: "Hard"
  },
  {
    name: "Philidor's Defence-Philidor Countergambit-Del Rio Attack-Berger Variation",
    fen: "rnbqk1nr/ppp3pp/4P3/2bp2N1/4p3/2N5/PPP2PPP/R1BQKB1R b KQkq - 2 7",
    moves: "e4 e5 Nf3 d6 d4 f5 dxe5 fxe4 Ng5 d5 e6 Bc5 Nc3",
    eco: "C41",
    difficulty: "Hard"
  },
  {
    name: "Philidor's Defence-Improved Hanham Variation-Lion Variation-Lärobok Variation",
    fen: "r1bq1rk1/pppnbBpp/3p1n2/4p1N1/3PP3/2N5/PPP2PPP/R1BQK2R b KQ - 0 7",
    moves: "e4 e5 Nf3 d6 d4 Nf6 Nc3 Nbd7 Bc4 Be7 Ng5 O-O Bxf7+",
    eco: "C41",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Giuoco Piano-Evans Gambit Accepted-Tartakower Variation",
    fen: "r2qk1nr/pppb1ppp/2np4/4p3/1bBPP3/5N2/PBP2PPP/RN1Q1RK1 b kq - 2 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 O-O d6 d4 Bd7 Bb2",
    eco: "C51",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Spanish Variation-Staunton Variation-Nikitin Gambit",
    fen: "r1b1kbnr/ppp2ppp/2n5/1B1qN3/Q3p3/2P5/PP1P1PPP/RNB1K2R b KQkq - 2 6",
    moves: "e4 e5 Nf3 Nc6 c3 d5 Bb5 dxe4 Nxe5 Qd5 Qa4",
    eco: "C44",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-London Defence-Cochrane's Attack",
    fen: "r1bqk1nr/pppp1ppp/2n5/8/1bB1P3/2P2N2/P4PPP/RNBQK2R b KQkq - 0 6",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bb4+ c3 dxc3 bxc3",
    eco: "C44",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Haxo Gambit-Saratt Variation-Count Vitzthum's Attack",
    fen: "r1bqk2r/pppp1ppp/2n4n/2b3NQ/2BpP3/8/PPP2PPP/RNB1K2R b KQkq - 5 6",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bc5 Ng5 Nh6 Qh5",
    eco: "C44",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Petrov's Defence-Cochrane Gambit-Bishop Check Line",
    fen: "rnbq1b1r/ppp2kpp/3p1n2/8/2B1P3/8/PPPP1PPP/RNBQK2R b KQ - 1 5",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nxf7 Kxf7 Bc4+",
    eco: "C42",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Winawer Variation-Maroczy-Wallis Variation-Rauzer Variation",
    fen: "rnbqk1nr/pp3ppp/4p3/3pP3/1P6/2p2N2/1PP2PPP/R1BQKB1R b KQkq - 1 7",
    moves: "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 cxd4 axb4 dxc3 Nf3",
    eco: "C17",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Anderssen Attack-Richter Attack",
    fen: "rnbqk2r/ppp1bppp/4p3/3pP3/3P2Q1/2N5/PPP2PPP/R3KBNR b KQkq - 2 7",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 Bxf6 Bxf6 e5 Be7 Qg4",
    eco: "C13",
    difficulty: "Hard"
  },
  {
    name: "Alekhine Defence-Normal Variation-2 Pawns Attack-Alekhine Variation",
    fen: "rn1qkb1r/ppp1pppp/1n6/4N3/2PP2b1/8/PP2BPPP/RNBQK2R b KQkq - 0 7",
    moves: "e4 Nf6 e5 Nd5 c4 Nb6 d4 d6 Nf3 Bg4 Be2 dxe5 Nxe5",
    eco: "B02",
    difficulty: "Hard"
  },
  {
    name: "Alekhine Defence-Normal Variation-4 Pawns Attack-Main Line",
    fen: "r1bqkb1r/ppp1pppp/1nn5/4P3/2PP4/4B3/PP4PP/RN1QKBNR b KQkq - 2 7",
    moves: "e4 Nf6 e5 Nd5 d4 d6 c4 Nb6 f4 dxe5 fxe5 Nc6 Be3",
    eco: "B03",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Normal Variation-3 Knights System-Keres Variation",
    fen: "r1bqk2r/pp2bppp/2n1p3/2pn4/8/2N2NP1/PP1PPPBP/R1BQ1RK1 w kq - 2 8",
    moves: "c4 c5 Nc3 Nf6 Nf3 d5 cxd5 Nxd5 g3 Nc6 Bg2 e6 O-O Be7",
    eco: "A34",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Carls-Bremen System-Closed Variation-Prickly Pawn Pass System",
    fen: "rnbq1rk1/1p3pbp/p1pp1np1/4p3/2P1P3/2NP2P1/PP2NPBP/R1BQ1RK1 w - - 0 9",
    moves: "c4 e5 Nc3 Nf6 g3 g6 Bg2 Bg7 d3 d6 e4 O-O Nge2 c6 O-O a6",
    eco: "A26",
    difficulty: "Hard"
  },
  {
    name: "English Opening-Agincourt Variation-Neo-Catalan Declined-Keres Defence",
    fen: "r1bqk2r/pp2bppp/2n1p3/2pn4/8/2N2NP1/PP1PPPBP/R1BQ1RK1 w kq - 2 8",
    moves: "c4 e6 Nf3 d5 g3 Nf6 Bg2 Be7 O-O c5 cxd5 Nxd5 Nc3 Nc6",
    eco: "A14",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Alapin Variation-Steiner Variation-Abraham Variation",
    fen: "rn1qkb1r/4pppp/2p2n2/pp6/P1pP2b1/2N1PN2/1P1B1PPP/R2QKB1R w KQkq - 0 8",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bg4 e3 b5 Bd2 a5",
    eco: "D16",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Accepted-Traditional System-Classical Defence-Development Variation",
    fen: "r1bqkb1r/pp3ppp/2n1pn2/2p5/2BP4/4PN2/PP3PPP/RNBQ1RK1 w kq - 2 7",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5 O-O Nc6",
    eco: "D26",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Chigorin Attack-Blackmar-Diemer Gambit-Teichmann Variation",
    fen: "rn1qkb1r/ppp1pppp/5n2/8/3P2b1/2N2N2/PPP3PP/R1BQKB1R w KQkq - 1 6",
    moves: "d4 d5 Nc3 Nf6 e4 dxe4 f3 exf3 Nxf3 Bg4",
    eco: "D00",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Classical Variation-Paulsen Variation-Najdorf Variation",
    fen: "r1bqkb1r/1p1n1ppp/p2ppn2/8/3NP3/2N5/PPP1BPPP/R1BQ1RK1 w kq - 2 8",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Be2 a6 O-O Nbd7",
    eco: "B84",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Kan Variation-Modern Variation-Gipslis Variation",
    fen: "rnbqkb1r/1p3p1p/p2ppnp1/8/2PNP3/3B4/PP3PPP/RNBQ1RK1 w kq - 0 8",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3 Nf6 O-O d6 c4 g6",
    eco: "B42",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Kieseritzky Gambit-Berlin Defence-Anderssen Defence",
    fen: "rnbqk2r/ppp2p1p/3b1n2/3PN3/2B2ppP/8/PPPP2P1/RNBQK2R w KQkq - 1 8",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 Nf6 Bc4 d5 exd5 Bd6",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Kieseritzky Gambit-Berlin Defence-Paulsen Defence Deferred",
    fen: "rnbqk2r/ppp2pbp/5n2/3PN3/2B2ppP/8/PPPP2P1/RNBQK2R w KQkq - 1 8",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 Nf6 Bc4 d5 exd5 Bg7",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "Philidor's Defence-Hanham Variation-Kmoch Variation-Berger Variation",
    fen: "r1bq1rk1/pp1nbppp/2p4n/3pp1N1/2BPPP2/2P5/PP4PP/RNBQ1RK1 w - - 0 9",
    moves: "e4 e5 Nf3 d6 d4 Nd7 Bc4 c6 Ng5 Nh6 f4 Be7 O-O O-O c3 d5",
    eco: "C41",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Open Defence-Skipworth Gambit",
    fen: "r1bqkb1r/1pp2ppp/p1n5/3pp3/B3n3/5N2/PPPP1PPP/RNBQR1K1 w kq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 Re1 d5",
    eco: "C80",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Exchange Variation-Normal Variation-Alapin Gambit",
    fen: "r2qkbnr/1pp2pp1/p1p5/4p2p/4P1b1/5N1P/PPPP1PP1/RNBQ1RK1 w kq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 O-O Bg4 h3 h5",
    eco: "C68/C69",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Berlin Defence-Rio Gambit Accepted-Trifunovic Variation",
    fen: "r1bqk2r/ppp1bppp/2n5/1B1pp3/3Pn3/5N2/PPP1QPPP/RNB2RK1 w kq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Be7 Qe2 d5",
    eco: "C67",
    difficulty: "Hard"
  },
  {
    name: "Evans Gambit Accepted-Main Line-Slow Variation-Steinitz Variation",
    fen: "r1b1k1nr/pppp1ppp/2n2q2/b3p3/2B1P3/2P2N2/P2P1PPP/RNBQ1RK1 w kq - 3 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 O-O Qf6",
    eco: "C52",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Open System-Chistyakov Defence-Eliskases Variation",
    fen: "rnbqkbnr/pp3ppp/4p3/8/2Bp4/5N2/PPPN1PPP/R1BQK2R w KQkq - 2 7",
    moves: "e4 e6 d4 d5 Nd2 c5 exd5 Qxd5 Ngf3 cxd4 Bc4 Qd8",
    eco: "C07",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Closed Variation-Pawn Centre Variation-Leningrad Variation",
    fen: "r1bqkb1r/pp3ppp/1nn1p3/3pP3/3P1P2/5N2/PP4PP/R1BQKBNR w KQkq - 1 9",
    moves: "e4 e6 d4 d5 Nd2 Nf6 e5 Nfd7 f4 c5 c3 Nc6 Ndf3 cxd4 cxd4 Nb6",
    eco: "C05",
    difficulty: "Hard"
  },
  {
    name: "Robatsch Defence-Modern Pterodactyl Variation-Eastern, Rhamporhynchus Variation-Pteronodon Variation",
    fen: "rnb1k1nr/pp1ppp1p/6p1/q1P5/4P3/2P5/P1P2PPP/R1BQKBNR w KQkq - 1 6",
    moves: "e4 g6 d4 Bg7 Nc3 c5 dxc5 Bxc3+ bxc3 Qa5",
    eco: "B06",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Accelerated Semi-Slav Defence-Marshall Gambit-Forgotten Variation",
    fen: "rnbqk1nr/pp3ppp/2p1p3/8/1bPP4/2N5/PP3PPP/R1BQKBNR b KQkq - 2 6",
    moves: "d4 d5 c4 e6 Nc3 c6 e4 dxe4 Nxe4 Bb4+ Nc3",
    eco: "D31",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Knight Defence-Cambridge Springs Defence-Capablanca Variation",
    fen: "r1b1kb1r/pp1n1ppp/2p1pB2/q2p4/2PP4/2N1PN2/PP3PPP/R2QKB1R b KQkq - 0 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 e3 c6 Nf3 Qa5 Bxf6",
    eco: "D52",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Knight Defence-Rochlin Variation",
    fen: "r1b1kb1r/pp1n1ppp/2p1pn2/q2p4/2PP4/2N2N2/PP1BPPPP/2RQKB1R b Kkq - 3 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 Nf3 c6 Rc1 Qa5 Bd2",
    eco: "D51",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Tarrasch Defence-Pillsbury Variation-Main Line",
    fen: "r1bqkb1r/pp3ppp/2n1p3/2pn4/3P4/2NBPN2/PP3PPP/R1BQK2R b KQkq - 2 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c5 cxd5 Nxd5 e3 Nc6 Bd3",
    eco: "D42",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Slav Defence-Normal Variation-Semi-Meran Variation",
    fen: "r1bqkb1r/pp1n1ppp/2p1pn2/8/2BP4/2N1PN2/PP3PPP/R1BQK2R b KQkq - 0 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Bd3 dxc4 Bxc4",
    eco: "D47",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Normal Variation-Stoltz Variation-Shabalov Attack",
    fen: "r1bqk2r/pp1n1ppp/2pbpn2/3p4/2PP2P1/2N1PN2/PPQ2P1P/R1B1KB1R b KQkq - 0 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Qc2 Bd6 g4",
    eco: "D45",
    difficulty: "Hard"
  },
  {
    name: "Dutch Defence-Classical Variation-Ilyin-Genevsky Variation-Modern Main Line",
    fen: "rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/1PN2NP1/P3PPBP/R1BQ1RK1 b - - 0 8",
    moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O O-O d6 Nc3 Qe8 b3",
    eco: "A99",
    difficulty: "Hard"
  },
  {
    name: "Dutch Defence-Classical Variation-Ilyin-Genevsky Variation-Alatortsev-Lisitsyn Line",
    fen: "rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/2N2NP1/PPQ1PPBP/R1B2RK1 b - - 3 8",
    moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O O-O d6 Nc3 Qe8 Qc2",
    eco: "A98",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-King Pawn Lines-Pawn Storm Variation-Mikenas Variation",
    fen: "rnbqk2r/pp3pbp/3p1np1/2pPP3/5P2/2N5/PP4PP/R1BQKBNR b KQkq - 0 8",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4 g6 f4 Bg7 e5",
    eco: "A66",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-King Pawn Lines-Classical Variation-Traditional Variation",
    fen: "rnbqk2r/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQK2R b KQkq - 3 8",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4 g6 Nf3 Bg7 Be2",
    eco: "A72",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-King Pawn Lines-Classical Variation-New York Variation",
    fen: "rnbqk2r/pp3pbp/3p1np1/2pP4/4P3/2N2N1P/PP3PP1/R1BQKB1R b KQkq - 0 8",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4 g6 Nf3 Bg7 h3",
    eco: "A70",
    difficulty: "Hard"
  },
  {
    name: "East Indian Defence-Catalan Opening-Closed Variation-Botvinnik Variation",
    fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2NQ1NP1/PP2PPBP/R1B2RK1 b - - 1 8",
    moves: "d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O Nbd7 Nc3 c6 Qd3",
    eco: "E07",
    difficulty: "Hard"
  },
  {
    name: "East Indian Defence-Catalan Opening-Closed Variation-Main Line",
    fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/5NP1/PPQNPPBP/R1B2RK1 b - - 1 8",
    moves: "d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O Nbd7 Qc2 c6 Nbd2",
    eco: "E09",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-Rubinstein Line-Hübner Variation-Sherbakov Attack",
    fen: "rnbq1rk1/pp1p1ppp/4pn2/2P5/1b1P4/2N5/PP2NPPP/R1BQKB1R b KQ - 0 7",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 c5 Ne2 cxd4 exd4 O-O c5",
    eco: "E42",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Kasparov-Petrosian Variation-Modern Variation-Polovodin Gambit",
    fen: "rn1qkb1r/pbp2ppp/1p2p3/3n4/3PP3/P1N2N2/1P3PPP/R1BQKB1R b KQkq - 0 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 Nc3 Bb7 a3 d5 cxd5 Nxd5 e4",
    eco: "E12",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-King's Knight Variation-Double Fianchetto Attack",
    fen: "r1bq1rk1/pppn1pbp/3p1np1/4p3/2PP4/1PN2NP1/P3PPBP/R1BQ1RK1 b - - 0 8",
    moves: "d4 Nf6 c4 g6 Nf3 Bg7 g3 d6 Bg2 O-O O-O Nbd7 Nc3 e5 b3",
    eco: "E64",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Classical Variation-Nottingham Variation",
    fen: "r1bqk2r/pp2ppbp/2np1np1/8/4P3/1NN1B3/PPP1BPPP/R2QK2R b KQkq - 5 8",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be2 Bg7 Be3 Nc6 Nb3",
    eco: "B72",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Caro-Kann Defence-Breyer Variation-Stein Attack",
    fen: "rnbq1rk1/pp2npbp/2p3p1/3pp3/1P2P3/3P1NP1/P1PN1PBP/R1BQ1RK1 b - - 0 8",
    moves: "e4 c6 d3 d5 Nd2 g6 g3 Bg7 Bg2 e5 Ngf3 Ne7 O-O O-O b4",
    eco: "B10",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Main Line-Classical Variation-Spassky Variation",
    fen: "r2qkbnr/pp1nppp1/2p3bp/7P/3P4/5NN1/PPP2PP1/R1BQKB1R b KQkq - 0 8",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5",
    eco: "B19",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Philidor Gambit-Greco Gambit-Schultz Variation",
    fen: "rnbqk1nr/ppp2pb1/3p3p/6p1/2BPPp1P/3Q1N2/PPP3P1/RNB1K2R b KQkq - 1 7",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 Bg7 h4 h6 d4 d6 Qd3",
    eco: "C38",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Kieseritzky Gambit-Salvio Defence-Cozio Variation",
    fen: "rnb1kbnr/ppppq2p/8/4Np2/2BPPppP/8/PPP3P1/RNBQK2R b KQkq - 1 7",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 Qe7 d4 f5 Bc4",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Anti-Marshall Variation",
    fen: "r1bq1rk1/2ppbppp/p1n2n2/1p2p3/P3P3/1B3N2/1PPP1PPP/RNBQR1K1 b - - 0 8",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O a4",
    eco: "C88",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Open Defence-Friess Attack",
    fen: "r1bqkb1r/2pp1ppp/p1n5/1p2N3/B2Pn3/8/PPP2PPP/RNBQ1RK1 b kq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Nxe5",
    eco: "C80",
    difficulty: "Hard"
  },
  {
    name: "Evans Gambit Accepted-Main Line-Bronstein Defence-Tartakower Attack",
    fen: "r1bqk1nr/ppp2ppp/2np4/b3p3/2BPP3/1QP2N2/P4PPP/RNB1K2R b KQkq - 1 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 d6 Qb3",
    eco: "C52",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Gruber Variation-Ulvestad Variation-Kurkin Gambit",
    fen: "r1bqkb1r/p1p2Np1/2n2n1p/1p1Pp3/8/8/PPPP1PPP/RNBQKB1R b KQkq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 b5 Bf1 h6 Nxf7",
    eco: "C57",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Gruber Variation-Fritz Variation-Gruber Variation",
    fen: "r1bqkb1r/p1p2ppp/8/1p1np3/3nN3/2P5/PP1P1PPP/RNBQKB1R b KQkq - 1 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nd4 c3 b5 Bf1 Nxd5 Ne4",
    eco: "C57",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight Opening-Scotch Game-Ghulam Kassim Variation",
    fen: "r1bqkbnr/ppp2ppp/3p4/8/3QP3/3B4/PPP2PPP/RNB1K2R b KQkq - 1 6",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nxd4 Qxd4 d6 Bd3",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Lolli Variation-Delayed Cochrane Variation",
    fen: "r1bqkb1r/pp1p1Npp/2p1nn2/8/2B1P3/8/PPP2PPP/RNBQ1RK1 b kq - 0 7",
    moves: "e4 e5 Nf3 Nc6 d4 Nxd4 Nxe5 Ne6 Bc4 c6 O-O Nf6 Nxf7",
    eco: "C44",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Winawer Variation-Advance Variation-Smyslov Variation",
    fen: "rnbqk2r/pp2nppp/4p3/2ppP3/P2P4/2P5/2P2PPP/R1BQKBNR b KQkq - 0 7",
    moves: "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3 Ne7 a4",
    eco: "C19",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Winawer Variation-Advance Variation-Positional Main Line",
    fen: "rnbqk2r/pp2nppp/4p3/2ppP3/3P4/P1P2N2/2P2PPP/R1BQKB1R b KQkq - 2 7",
    moves: "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3 Ne7 Nf3",
    eco: "C19",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Winawer Variation-Alekhine-Maróczy Gambit-Alekhine Variation",
    fen: "r1bqk1nr/ppp1bppp/2n1p3/8/3PN1P1/P7/1PP1NP1P/R1BQKB1R b KQkq - 0 7",
    moves: "e4 e6 d4 d5 Nc3 Bb4 Ne2 dxe4 a3 Be7 Nxe4 Nc6 g4",
    eco: "C15",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Tarrasch Variation-Closed Variation-Main Line",
    fen: "r1bqkb1r/pp1n1ppp/2n1p3/3pP3/3P4/3B4/PP1NNPPP/R1BQK2R b KQkq - 0 8",
    moves: "e4 e6 d4 d5 Nd2 Nf6 e5 Nfd7 Bd3 c5 c3 Nc6 Ne2 cxd4 cxd4",
    eco: "C06",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Austrian Defence-Gusev Countergambit-Haberditz Variation",
    fen: "rnb1kb1r/pp2pppp/8/q1PP4/4n3/8/PP3PPP/RNBQKBNR w KQkq - 1 6",
    moves: "d4 d5 c4 c5 cxd5 Nf6 e4 Nxe4 dxc5 Qa5+",
    eco: "D02",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Orthodox Defence-Main Line-Swiss/Henneberger/Hennegerger Variation",
    fen: "r1bq1rk1/1ppnbppp/p3pn2/3p2B1/2PP4/2N1PN2/PP3PPP/2RQKB1R w K - 0 8",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 a6",
    eco: "D63",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Orthodox Defence-Main Line-Classical Variation",
    fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2N1PN2/PP3PPP/2RQKB1R w K - 0 8",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 c6",
    eco: "D63",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-Classical Variation-Noa Variation-Botvinnik Variation",
    fen: "r1bqk2r/ppp2ppp/2n1pn2/3p4/2PP4/P1Q5/1P2PPPP/R1B1KBNR w KQkq - 1 7",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 d5 a3 Bxc3+ Qxc3 Nc6",
    eco: "E36",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-Classical Variation-Noa Variation-Main Line",
    fen: "rnbqk2r/ppp2ppp/4p3/3p4/2PPn3/P1Q5/1P2PPPP/R1B1KBNR w KQkq - 1 7",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 d5 a3 Bxc3+ Qxc3 Ne4",
    eco: "E36/E37",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Original Defence-Kashdan Variation-Ultra-Delayed Exchange Line",
    fen: "rnbq1rk1/pp2ppbp/5np1/3p4/3P4/5NP1/PP2PPBP/RNBQ1RK1 w - - 0 8",
    moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O O-O c6 cxd5 cxd5",
    eco: "D79",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Kopec Variation-Delayed Alapin Variation-Basman-Palatnik Gambit",
    fen: "r1bqkb1r/pp2pppp/2np4/8/3Pn3/5N2/PP2BPPP/RNBQK2R w KQkq - 0 7",
    moves: "e4 c5 Nf3 d6 c3 Nf6 Be2 Nc6 d4 cxd4 cxd4 Nxe4",
    eco: "B50",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Benko Variation-Sozin Variation-Najdorf Variation-Poisoned Pawn Variation",
    fen: "rnb1kb1r/1p3ppp/pq1ppn2/6B1/3NPP2/2N5/PPP3PP/R2QKB1R w KQkq - 1 8",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 e6 f4 Qb6",
    eco: "B97",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Scheveningen Variation-Sozin Attack-Flank Variation",
    fen: "rnbqkb1r/5ppp/p2ppn2/1p6/3NP3/1BN5/PPP2PPP/R1BQK2R w KQkq - 0 8",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Bc4 a6 Bb3 b5",
    eco: "B87",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Yugoslav Attack-Belezky Line",
    fen: "r1bqk2r/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPP3PP/R2QKB1R w KQkq - 1 8",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 Nc6",
    eco: "B76",
    difficulty: "Hard"
  },
  {
    name: "Old Sicilian Defence-Richter Variation-Rauzer Variation-Modern Variation",
    fen: "r1bqkb1r/1p3ppp/p1nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R w KQkq - 0 8",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Bg5 e6 Qd2 a6",
    eco: "B66",
    difficulty: "Hard"
  },
  {
    name: "Old Sicilian Defence-Richter Variation-Rauzer Variation-Classical Variation",
    fen: "r1bqk2r/pp2bppp/2nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R w KQkq - 2 8",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Bg5 e6 Qd2 Be7",
    eco: "B63",
    difficulty: "Hard"
  },
  {
    name: "Old Sicilian Defence-Richter Variation-Rauzer Variation-Botvinnik Variation",
    fen: "r1bqkb1r/pp3pp1/2nppn1p/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R w KQkq - 0 8",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Bg5 e6 Qd2 h6",
    eco: "B63",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Panov Attack-Fianchetto Defence-Fianchetto Gambit",
    fen: "rnbqk2r/pp2ppbp/5np1/3P4/3P4/2N5/PP3PPP/R1BQKBNR w KQkq - 1 7",
    moves: "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 g6 cxd5 Bg7",
    eco: "B14",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Modern Defence-Botvinnik Variation-Herzog Defence",
    fen: "r1bqkb1r/pp2pppp/5n2/n2P2B1/2p5/2N5/PP3PPP/R2QKBNR w KQkq - 1 8",
    moves: "e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 Nc6 Bg5 dxc4 d5 Na5",
    eco: "B13",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Main Line-Karpov Variation-Smyslov Variation",
    fen: "r1bqkb1r/pp3ppp/1np1pn2/6N1/2BP4/8/PPP1QPPP/R1B1K1NR w KQkq - 2 8",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Bc4 Ngf6 Ng5 e6 Qe2 Nb6",
    eco: "B17",
    difficulty: "Hard"
  },
  {
    name: "Centre Countergambit-Gubinsky-Melts Defence-Schiller-Pytel Variation-Modern Variation",
    fen: "rn2kb1r/pp2pppp/2p2n2/5b2/1qBP1B2/2N5/PPP1NPPP/R2QK2R w KQkq - 6 8",
    moves: "e4 d5 exd5 Qxd5 Nc3 Qd6 d4 c6 Bc4 Nf6 Nge2 Bf5 Bf4 Qb4",
    eco: "B01",
    difficulty: "Hard"
  },
  {
    name: "Centre Gambit Accepted-Danish Gambit Declined-Soerensen Defence-Schlechter Attack",
    fen: "rnbqk2r/ppp2ppp/5n2/3P4/1b1P4/8/PP3PPP/RNBQKBNR w KQkq - 1 6",
    moves: "e4 e5 d4 exd4 c3 d5 exd5 Nf6 cxd4 Bb4+",
    eco: "C21",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Bledow Variation-Borén-Svenonius Variation",
    fen: "rnb1k1nr/ppp2ppp/3b4/3B4/4Pp1q/8/PPPP2PP/RNBQ1KNR w kq - 3 6",
    moves: "e4 e5 f4 exf4 Bc4 d5 Bxd5 Qh4+ Kf1 Bd6",
    eco: "C33",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight Opening-Latvian Countergambit-Corkscrew Gambit",
    fen: "rnb1kb1N/ppp1q1pp/5n2/3p4/2B1p3/8/PPPP1PPP/RNBQK2R w KQq - 0 7",
    moves: "e4 e5 Nf3 f5 Nxe5 Nf6 Bc4 fxe4 Nf7 Qe7 Nxh8 d5",
    eco: "C40",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Cozio Defence-Tartakower Gambit",
    fen: "r1bq1rk1/ppp1npbp/2n3p1/1B1p4/3NP3/2N1B3/PPPQ1PPP/R3K2R w KQ - 0 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nge7 d4 exd4 Nxd4 g6 Nc3 Bg7 Be3 O-O Qd2 d5",
    eco: "C60",
    difficulty: "Hard"
  },
  {
    name: "Giuoco Piano-Evans Gambit Accepted-Main Line-Sanders-Alapin Variation",
    fen: "r2qk1nr/pppb1ppp/2np4/b3p3/2BPP3/2P2N2/P4PPP/RNBQ1RK1 w kq - 1 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 O-O d6 d4 Bd7",
    eco: "C52",
    difficulty: "Hard"
  },
  {
    name: "Giuoco Piano-Evans Gambit Accepted-Main Line-Alapin-Steinitz Variation",
    fen: "r2qk1nr/ppp2ppp/2np4/b3p3/2BPP1b1/2P2N2/P4PPP/RNBQ1RK1 w kq - 1 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 O-O d6 d4 Bg4",
    eco: "C52",
    difficulty: "Hard"
  },
  {
    name: "Evans Gambit Accepted-Main Line-Pierce Defence-Johner Defence",
    fen: "r1bqk1nr/p1pp1ppp/2n5/bp6/2BpP3/2P2N2/P4PPP/RNBQ1RK1 w kq - 0 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 exd4 O-O b5",
    eco: "C52",
    difficulty: "Hard"
  },
  {
    name: "Evans Gambit Accepted-Main Line-Pierce Defence-Dufresne Defence",
    fen: "r1bqk1nr/pppp1ppp/2n5/b7/2B1P3/2Pp1N2/P4PPP/RNBQ1RK1 w kq - 0 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 exd4 O-O d3",
    eco: "C52",
    difficulty: "Hard"
  },
  {
    name: "Evans Gambit Accepted-Main Line-Pierce Defence-Anderssen Defence",
    fen: "r1bqk2r/pppp1ppp/2n2n2/b7/2BpP3/2P2N2/P4PPP/RNBQ1RK1 w kq - 2 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 exd4 O-O Nf6",
    eco: "C52",
    difficulty: "Hard"
  },
  {
    name: "Evans Gambit Accepted-Main Line-Pierce Defence-Mieses Defence",
    fen: "r1bqk2r/ppppnppp/2n5/b7/2BpP3/2P2N2/P4PPP/RNBQ1RK1 w kq - 2 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 exd4 O-O Nge7",
    eco: "C52",
    difficulty: "Hard"
  },
  {
    name: "2 Knights Defence-Fegatello Attack-Lolli Attack-Pincus Variation",
    fen: "r1bqk2r/ppp2ppp/2n5/3np1N1/1bBP4/8/PPP2PPP/RNBQK2R w KQkq - 1 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5 d4 Bb4+",
    eco: "C57",
    difficulty: "Hard"
  },
  {
    name: "Scotch Game-Göring Gambit-Main Line-Bardeleben Variation",
    fen: "r1bqk2r/pppp1ppp/2n2n2/8/1bB1P3/2N2N2/PP3PPP/R1BQK2R w KQkq - 3 7",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 c3 dxc3 Nxc3 Bb4 Bc4 Nf6",
    eco: "C44",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-4 Knights Game-Double Ruy Lopez-Svenonius Variation",
    fen: "r1bq1rk1/ppp2ppp/2n2n2/1B1pp3/4P3/2PP1N2/P1P2PPP/R1BQ1RK1 w - - 0 8",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 Bxc3 bxc3 d5",
    eco: "C49",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Winawer Variation-Advance Variation-Classical Variation",
    fen: "rnb1k1nr/ppq2ppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR w KQkq - 1 7",
    moves: "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3 Qc7",
    eco: "C18",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Winawer Variation-Alekhine-Maroczy Gambit Accepted/Alekhine Gambit",
    fen: "rnbqk1nr/ppp2ppp/4p3/8/3Pp3/P1b5/1PP1NPPP/R1BQKB1R w KQkq - 0 6",
    moves: "e4 e6 d4 d5 Nc3 Bb4 Ne2 dxe4 a3 Bxc3+",
    eco: "C15",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Robatsch Defence-Pterodactyl Defence-Central, Benoni, Beefeater Pterodactyl Variation",
    fen: "rnb1k1nr/pp2pp1p/3p2p1/q1pP4/2P1P3/2P5/P4PPP/R1BQKBNR w KQkq - 1 7",
    moves: "e4 g6 d4 Bg7 c4 c5 d5 d6 Nc3 Bxc3+ bxc3 Qa5",
    eco: "B06",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Old Variation-Korchnoi Gambit",
    fen: "rnb1kbnr/ppp1qppp/8/8/2Bp4/1Q2P3/PP3PPP/RNB2KNR b kq - 3 6",
    moves: "d4 d5 c4 dxc4 e3 e5 Bxc4 exd4 Qb3 Qe7 Kf1",
    eco: "D20",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Old Variation-Novikov Gambit",
    fen: "rnb1kbnr/ppp1qppp/8/8/2Bp4/1Q2P3/PP1N1PPP/R1B1K1NR b KQkq - 3 6",
    moves: "d4 d5 c4 dxc4 e3 e5 Bxc4 exd4 Qb3 Qe7 Nd2",
    eco: "D20",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Queen's Gambit Accepted-Old Variation-Christensen Gambit",
    fen: "rnb1kbnr/ppp1qppp/8/8/2Bp4/1Q2PN2/PP3PPP/RNB1K2R b KQkq - 3 6",
    moves: "d4 d5 c4 dxc4 e3 e5 Bxc4 exd4 Qb3 Qe7 Nf3",
    eco: "D20",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Accepted-Classical Defence-Main Line-Rubinstein Variation",
    fen: "rnbqkb1r/1p3ppp/p3pn2/2p5/P1BP4/4PN2/1P3PPP/RNBQ1RK1 b kq - 0 7",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5 O-O a6 a4",
    eco: "D27",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Accepted-Classical Defence-Main Line-Alekhine System",
    fen: "rnbqkb1r/1p3ppp/p3pn2/2p5/2BP4/4PN2/PP2QPPP/RNB2RK1 b kq - 1 7",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5 O-O a6 Qe2",
    eco: "D28",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Knight Defence-Cambridge Springs Defence-Bogoljubov Variation",
    fen: "r1b1k2r/pp1n1ppp/2p1pn2/q2p2B1/1bPP4/2N1P3/PPQN1PPP/R3KB1R b KQkq - 5 8",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 e3 c6 Nf3 Qa5 Nd2 Bb4 Qc2",
    eco: "D52",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-Bishop Attack-Classical Defence-Botvinnik System",
    fen: "rnbq1rk1/ppp2ppp/4pn2/3p4/2PP4/P1PBP3/5PPP/R1BQK1NR b KQ - 0 7",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3 d5 a3 Bxc3+ bxc3",
    eco: "E49",
    difficulty: "Hard"
  },
  {
    name: "Queen's Indian Defence-Kasparov-Petrosian Variation-Modern Variation-Kasparov Attack",
    fen: "rn1qkb1r/pbp2ppp/1p2p3/3n4/3P4/P1N2N2/1PQ1PPPP/R1B1KB1R b KQkq - 1 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 Nc3 Bb7 a3 d5 cxd5 Nxd5 Qc2",
    eco: "E12",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Debrecen Defence-Classical Fianchetto Variation-Classical Main Line",
    fen: "r1bq1rk1/pp1n1pbp/2pp1np1/4p3/2PPP3/2N2NPP/PP3PB1/R1BQ1RK1 b - - 0 9",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 Nbd7 O-O e5 e4 c6 h3",
    eco: "E69",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Grünfeld Defence-Exchange Variation-Classical Variation",
    fen: "rnbqk2r/ppp1ppbp/6p1/8/2BPP3/2P5/P4PPP/R1BQK1NR b KQkq - 2 7",
    moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 Bc4",
    eco: "D86",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Grünfeld Defence-Modern Exchange Variation",
    fen: "rnbqk2r/ppp1ppbp/6p1/8/3PP3/2P2N2/P4PPP/R1BQKB1R b KQkq - 2 7",
    moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 Nf3",
    eco: "D85",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Canal-Sokolsky Attack-Main Line-Sokolsky Variation",
    fen: "rn2kbnr/pp1qpppp/3p4/2p5/2P1P3/5N2/PP1P1PPP/RNBQK2R b KQkq - 0 5",
    moves: "e4 c5 Nf3 d6 Bb5+ Bd7 Bxd7+ Qxd7 c4",
    eco: "B52",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Canal-Sokolsky Attack-Nimzovich Variation-Dorfman Gambit",
    fen: "r2qkbnr/pp1bpp1p/2np2p1/1Bp1P3/8/5N2/PPPPQPPP/RNB2RK1 b kq - 0 6",
    moves: "e4 c5 Nf3 d6 Bb5+ Nc6 O-O Bd7 Qe2 g6 e5",
    eco: "B52",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Classical Variation-Richter-Rauzer Variation-Richter/Exchange Attack",
    fen: "r1bqkb1r/pp3ppp/2Nppn2/6B1/4P3/2N5/PPP2PPP/R2QKB1R b KQkq - 0 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bg5 e6 Nxc6",
    eco: "B62",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Classical Variation-Richter-Rauzer Variation-Rauzer/Traditional Attack",
    fen: "r1bqkb1r/pp3ppp/2nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R b KQkq - 1 7",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bg5 e6 Qd2",
    eco: "B63",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Knight Variation-Wing Attack-Spraggett Attack",
    fen: "rnb1kbnr/3p1ppp/pq2p3/1p6/4P3/2NB1N2/PPP2PPP/R1BQK2R b KQkq - 3 7",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Nc3 b5 Bd3 Qb6 Nf3",
    eco: "B43",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Taimanov Variation-Normal Variation-Barnes Gambit",
    fen: "r1bqk2r/pp1p1ppp/2n1pn2/8/1b1NP3/2N5/PPP1BPPP/R1BQ1RK1 b kq - 6 7",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Nf6 Be2 Bb4 O-O",
    eco: "B45",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Normal Variation-Bastrikov Variation-English Attack",
    fen: "r1b1kbnr/1pqp1ppp/p1n1p3/8/3NP3/2N1BP2/PPP3PP/R2QKB1R b KQkq - 0 7",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Qc7 Be3 a6 f3",
    eco: "B49",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Knight Variation-Tartakower Variation-Forgács Variation",
    fen: "rnbqkb1r/pp3ppp/2p2p2/8/2BP4/8/PPP2PPP/R1BQK1NR b KQkq - 1 6",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nf6 Nxf6+ exf6 Bc4",
    eco: "B15",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Centre Countergambit-Anderssen Counterattack-Orthodox Attack",
    fen: "r1b1k1nr/ppp2ppp/2n5/q3P3/1b6/2N2N2/PPPB1PPP/R2QKB1R b KQkq - 4 7",
    moves: "e4 d5 exd5 Qxd5 Nc3 Qa5 d4 e5 dxe5 Bb4 Bd2 Nc6 Nf3",
    eco: "B01",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Centre Attack-North Spanish Variation",
    fen: "r1bqk2r/1pppbppp/p1n5/4P3/B2pn3/2P2N2/PP3PPP/RNBQ1RK1 b kq - 0 8",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 d4 exd4 e5 Ne4 c3",
    eco: "C84",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Rosen Attack",
    fen: "r1bqk2r/2p1bppp/p1np1n2/1p2p3/3PP3/1B3N2/PPP2PPP/RNBQR1K1 b kq - 0 8",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 d4",
    eco: "C88",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Tarrasch Variation-Berger Variation",
    fen: "r1bqk2r/1ppp1ppp/p2b1n2/4n3/B2PP3/2N5/PPP2PPP/R1BQ1RK1 b kq - 2 8",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 Nc3 Bc5 Nxe5 Nxe5 d4 Bd6 O-O",
    eco: "C77",
    difficulty: "Hard"
  },
  {
    name: "Scotch Game-Classical Variation-Golmayo Variation-Paulsen Attack",
    fen: "r1b1k2r/ppppnppp/2n2q2/1Bb5/3NP3/2P1B3/PP3PPP/RN1QK2R b KQkq - 2 7",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Qf6 c3 Nge7 Bb5",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "Scotch Game-Classical Variation-Golmayo Variation-Fleissig's Attack/Meitner Variation",
    fen: "r1b1k2r/ppppnppp/2n2q2/2b5/4P3/2P1B3/PPN2PPP/RN1QKB1R b KQkq - 2 7",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Qf6 c3 Nge7 Nc2",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "Scotch Game-Classical Variation-Golmayo Variation-Blackburne Attack",
    fen: "r1b1k2r/ppppnppp/2n2q2/2b5/3NP3/2P1B3/PP1Q1PPP/RN2KB1R b KQkq - 2 7",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Qf6 c3 Nge7 Qd2",
    eco: "C45",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Winawer Variation-Fingerslip Variation-Main Line",
    fen: "rnbqk1r1/ppp2p1p/4pn1Q/8/1b1Pp3/2N5/PPPB1PPP/R3KBNR b KQq - 2 7",
    moves: "e4 e6 d4 d5 Nc3 Bb4 Bd2 dxe4 Qg4 Nf6 Qxg7 Rg8 Qh6",
    eco: "C15",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Classical Variation-Paulsen Attack-Tarrasch Variation",
    fen: "rnb1k2r/pppnqppp/4p3/3pP3/3P4/2NB4/PPP2PPP/R2QK1NR b KQkq - 1 7",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 Bxe7 Qxe7 Bd3",
    eco: "C14",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Classical Variation-Paulsen Attack-Steinitz Variation",
    fen: "rnb1k2r/pppnqppp/4p3/3pP3/3P1P2/2N5/PPP3PP/R2QKBNR b KQkq - 0 7",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 Bxe7 Qxe7 f4",
    eco: "C14",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Classical Variation-Paulsen Attack-Alapin Variation",
    fen: "rnb1k2r/pppnqppp/4p3/1N1pP3/3P4/8/PPP2PPP/R2QKBNR b KQkq - 1 7",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 Bxe7 Qxe7 Nb5",
    eco: "C14",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Classical Variation-Paulsen Attack-Pollock Variation",
    fen: "rnb1k2r/pppnqppp/4p3/3pP3/3P2Q1/2N5/PPP2PPP/R3KBNR b KQkq - 1 7",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 Bxe7 Qxe7 Qg4",
    eco: "C14",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Steinitz Variation-Bradford Attack",
    fen: "rnbqk2r/pp1n1ppp/4p3/2bpP3/5PQ1/2N5/PPP3PP/R1B1KBNR b KQkq - 1 7",
    moves: "e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 f4 c5 dxc5 Bxc5 Qg4",
    eco: "C11",
    difficulty: "Hard"
  },
  {
    name: "Robatsch Defence-Modern Pterodactyl Variation-Eastern, Rhamporhynchus Variation-Sicilian, Pteronodon Variation",
    fen: "rnb1k1nr/pp1ppp1p/6p1/q1P5/4P3/2P2N2/P1P2PPP/R1BQKB1R b KQkq - 2 6",
    moves: "e4 g6 d4 Bg7 Nc3 c5 dxc5 Bxc3+ bxc3 Qa5 Nf3",
    eco: "B06",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Schallopp Defence-Exchange Variation-Amsterdam Variation",
    fen: "rn1qkb1r/pp1n1ppp/4p3/3pNb2/3P4/2N1P3/PP3PPP/R1BQKB1R w KQkq - 2 8",
    moves: "d4 d5 c4 c6 Nf3 Nf6 e3 Bf5 cxd5 cxd5 Nc3 e6 Ne5 Nfd7",
    eco: "D12",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Accepted-Traditional System-Classical Defence-Steinitz/Exchange Variation",
    fen: "rnbqkb1r/pp3ppp/4pn2/8/2Bp4/4PN2/PP3PPP/RNBQ1RK1 w kq - 0 7",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5 O-O cxd4",
    eco: "D26",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Tarrasch Defence-2 Knights Variation-Gruenfeld Gambit",
    fen: "r1bqkbnr/p4ppp/2n5/1pP5/N2p4/5N2/PP2PPPP/R1BQKB1R w KQkq b6 0 8",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 dxc5 d4 Na4 b5",
    eco: "D32",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Schlechter-Rubinstein System-Prague Variation-Main Line",
    fen: "r1bqk2r/pp2bppp/2n2n2/2pp4/3P4/2N2NP1/PP2PPBP/R1BQK2R w KQkq - 3 8",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 Nf6 Bg2 Be7",
    eco: "D34",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Schlechter-Rubinstein System-Prague Variation-Wagner Variation",
    fen: "r2qkb1r/pp3ppp/2n2n2/2pp4/3P2b1/2N2NP1/PP2PPBP/R1BQK2R w KQkq - 3 8",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 Nf6 Bg2 Bg4",
    eco: "D33",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Queen's Knight Variation-Accelerated Semi-Slav Defence-Noteboom Variation-Junge Variation",
    fen: "rnb1k1nr/p4ppp/1qp1p3/1p6/PbpP4/2N1PN2/1P1B1PPP/R2QKB1R w KQkq - 2 8",
    moves: "d4 d5 c4 e6 Nc3 c6 Nf3 dxc4 a4 Bb4 e3 b5 Bd2 Qb6",
    eco: "D31",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Queen's Knight Variation-Accelerated Semi-Slav Defence-Noteboom Variation-Koomen Variation",
    fen: "rnb1k1nr/p3qppp/2p1p3/1p6/PbpP4/2N1PN2/1P1B1PPP/R2QKB1R w KQkq - 2 8",
    moves: "d4 d5 c4 e6 Nc3 c6 Nf3 dxc4 a4 Bb4 e3 b5 Bd2 Qe7",
    eco: "D31",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Knight Defence-Cambridge Springs Defence-Rubinstein Variation",
    fen: "r1b1kb1r/pp1n1ppp/2p1pn2/q5B1/2pP4/2N1P3/PP1N1PPP/R2QKB1R w KQkq - 0 8",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 e3 c6 Nf3 Qa5 Nd2 dxc4",
    eco: "D52",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Normal Variation-Semi-Meran Variation-Meran Variation",
    fen: "r1bqkb1r/p2n1ppp/2p1pn2/1p6/2BP4/2N1PN2/PP3PPP/R1BQK2R w KQkq - 0 8",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Bd3 dxc4 Bxc4 b5",
    eco: "D47",
    difficulty: "Hard"
  },
  {
    name: "East Indian Defence-Closed Variation-Main Line-Rabinovich Variation",
    fen: "r1bq1rk1/p2nbppp/2p1pn2/1p1p4/2PP4/5NP1/PPQNPPBP/R1B2RK1 w - - 0 9",
    moves: "d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O Nbd7 Qc2 c6 Nbd2 b5",
    eco: "E09",
    difficulty: "Hard"
  },
  {
    name: "Nimzo-Indian Defence-Rubinstein Line-Hübner Variation-Main Line",
    fen: "r1bqk2r/pp3ppp/2nppn2/2p5/2PP4/2PBPN2/P4PPP/R1BQK2R w KQkq - 0 8",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 c5 Bd3 Nc6 Nf3 Bxc3+ bxc3 d6",
    eco: "E41",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Classical Variation-Keres Defence",
    fen: "rnbq1rk1/p1pp1ppp/1p2pn2/8/2PP4/P1Q5/1P2PPPP/R1B1KBNR w KQ - 0 7",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 O-O a3 Bxc3+ Qxc3 b6",
    eco: "E32",
    difficulty: "Hard"
  },
  {
    name: "King's Indian Defence-Brinckmann Attack-Landau Variation-Grünfeld Gambit Accepted",
    fen: "rnbq1rk1/ppp1ppbp/6p1/3n4/3P1B2/2N1P3/PP3PPP/R2QKBNR w KQ - 0 7",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Bf4 Bg7 e3 O-O cxd5 Nxd5",
    eco: "D84",
    difficulty: "Hard"
  },
  {
    name: "Grünfeld Defence-3 Knights Variation-Russian Variation-Alekhine/Hungarian Variation",
    fen: "rnbq1rk1/1pp1ppbp/p4np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R w KQ - 0 8",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 dxc4 Qxc4 O-O e4 a6",
    eco: "D97",
    difficulty: "Hard"
  },
  {
    name: "Grünfeld Defence-3 Knights Variation-Russian Variation-Levenfish Variation",
    fen: "rnbq1rk1/p1p1ppbp/1p3np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R w KQ - 0 8",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 dxc4 Qxc4 O-O e4 b6",
    eco: "D97",
    difficulty: "Hard"
  },
  {
    name: "Grünfeld Defence-3 Knights Variation-Russian Variation-Smyslov Variation",
    fen: "rn1q1rk1/ppp1ppbp/5np1/8/2QPP1b1/2N2N2/PP3PPP/R1B1KB1R w KQ - 1 8",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 dxc4 Qxc4 O-O e4 Bg4",
    eco: "D98",
    difficulty: "Hard"
  },
  {
    name: "Grünfeld Defence-3 Knights Variation-Russian Variation-Szabó/Boleslavsky Variation",
    fen: "rnbq1rk1/pp2ppbp/2p2np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R w KQ - 0 8",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 dxc4 Qxc4 O-O e4 c6",
    eco: "D97",
    difficulty: "Hard"
  },
  {
    name: "Grünfeld Defence-3 Knights Variation-Russian Variation-Prins Variation",
    fen: "r1bq1rk1/ppp1ppbp/n4np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R w KQ - 1 8",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 dxc4 Qxc4 O-O e4 Na6",
    eco: "D97",
    difficulty: "Hard"
  },
  {
    name: "Grünfeld Defence-3 Knights Variation-Russian Variation-Byrne/Simagin Variation",
    fen: "r1bq1rk1/ppp1ppbp/2n2np1/8/2QPP3/2N2N2/PP3PPP/R1B1KB1R w KQ - 1 8",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 dxc4 Qxc4 O-O e4 Nc6",
    eco: "D97",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Alapin Variation-Barmen Defence-Central Exchange Variation",
    fen: "r3kbnr/pp2pppp/2n5/3q4/3P2b1/5N2/PP3PPP/RNBQKB1R w KQkq - 3 7",
    moves: "e4 c5 c3 d5 exd5 Qxd5 d4 cxd4 cxd4 Nc6 Nf3 Bg4",
    eco: "B22",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Alapin Variation-Stoltz Attack-Ivanchuk Line",
    fen: "r1b1kb1r/ppqppp1p/1nn5/4P1p1/2p5/2P2N2/PPBPQPPP/RNB1K2R w KQkq - 0 9",
    moves: "e4 c5 c3 Nf6 e5 Nd5 Nf3 Nc6 Bc4 Nb6 Bb3 c4 Bc2 Qc7 Qe2 g5",
    eco: "B22",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Pelikán Variation-Lasker Variation-Chelyabinsk Variation",
    fen: "r1bqkb1r/5ppp/p1np1n2/1p2p1B1/4P3/N1N5/PPP2PPP/R2QKB1R w KQkq - 0 9",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Bg5 a6 Na3 b5",
    eco: "B33",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Pelikán Variation-Lasker Variation-Bird Variation",
    fen: "r2qkb1r/1p3ppp/p1npbn2/4p1B1/4P3/N1N5/PPP2PPP/R2QKB1R w KQkq - 2 9",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Bg5 a6 Na3 Be6",
    eco: "B33",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Muzio Gambit-Holloway Defence",
    fen: "r1bqkbnr/pppp1p1p/2n5/8/2B1Pp2/5Q2/PPPP2PP/RNB2RK1 w kq - 1 7",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 O-O gxf3 Qxf3 Nc6",
    eco: "C37",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Muzio Gambit Accepted-From Defence",
    fen: "rnb1kbnr/ppppqp1p/8/8/2B1Pp2/5Q2/PPPP2PP/RNB2RK1 w kq - 1 7",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 O-O gxf3 Qxf3 Qe7",
    eco: "C37",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Muzio Gambit-Sarratt Defence",
    fen: "rnb1kbnr/pppp1p1p/5q2/8/2B1Pp2/5Q2/PPPP2PP/RNB2RK1 w kq - 1 7",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 O-O gxf3 Qxf3 Qf6",
    eco: "C37",
    difficulty: "Hard"
  },
  {
    name: "King's Gambit Accepted-King's Knight's Gambit-Salvio Gambit-Santa Maria Defence",
    fen: "rnb1kb1r/pppp1p1p/5n2/4N3/2B1Pppq/8/PPPP2PP/RNBQ1K1R w kq - 4 7",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 Ne5 Qh4+ Kf1 Nf6",
    eco: "C37",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Marshall Counterattack",
    fen: "r1bq1rk1/2p1bppp/p1n2n2/1p1pp3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 0 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d5",
    eco: "C89",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Wormald Attack-Grünfeld Variation",
    fen: "r2qk2r/2p1bppp/p1np1n2/1p2p3/3PP1b1/1BP2N2/PP2QPPP/RNB1K2R w KQkq - 1 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 Qe2 b5 Bb3 Be7 c3 d6 d4 Bg4",
    eco: "C77",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Wormald Attack-Gruenfeld Variation",
    fen: "r2qk2r/2p1bppp/p1np1n2/1p2p3/3PP1b1/1BP2N2/PP2QPPP/RNB1K2R w KQkq - 1 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 Qe2 b5 Bb3 Be7 d4 d6 c3 Bg4",
    eco: "C77",
    difficulty: "Hard"
  },
  {
    name: "King's Knight Opening-2 Knights Defence-Koltanowski Variation-Giuoco Piano",
    fen: "r1bqk2r/ppp2ppp/3p1n2/4p1B1/2BnP3/8/PPP2PPP/RN1Q1RK1 w kq - 0 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 O-O Bc5 d4 Bxd4 Nxd4 Nxd4 Bg5 d6",
    eco: "C55",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Burn Variation-Morozevich Line",
    fen: "rnbqk2r/ppp1bp1p/4pp2/8/3PN3/8/PPP2PPP/R2QKBNR w KQkq - 0 7",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 dxe4 Nxe4 Be7 Bxf6 gxf6",
    eco: "C11",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Closed Variation-Main Line-Leningrad/Russian Variation",
    fen: "r1bqkb1r/pp3ppp/1nn1p3/3pP3/3P4/3B4/PP1NNPPP/R1BQK2R w KQkq - 1 9",
    moves: "e4 e6 d4 d5 Nd2 Nf6 e5 Nfd7 Bd3 c5 c3 Nc6 Ne2 cxd4 cxd4 Nb6",
    eco: "C06",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-Borg Defence-Madladn G Slag",
    fen: "rnbqkb2/ppp1pp1p/5n2/8/3Pr3/5N1Q/PPP2PPP/RNB1KB1R w KQq - 7 9",
    moves: "e4 g5 d4 g4 Qxg4 d5 Qf3 dxe4 Qxe4 Nf6 Qh4 Rg8 Nf3 Rg4 Qh3 Re4+",
    eco: "B00",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Orthodox Defence-Main Line-Classical Variation (Capablanca Variation)",
    fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2NBPN2/PP3PPP/2RQK2R b K - 1 8",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 c6 Bd3",
    eco: "D66",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Slav Defence-Anti-Meran System-Hastings Variation",
    fen: "rnb1kb1r/pp3pp1/2p1pq1p/3p4/2PP4/1QN2N2/PP2PPPP/R3KB1R b KQkq - 1 7",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 Bg5 h6 Bxf6 Qxf6 Qb3",
    eco: "D43",
    difficulty: "Hard"
  },
  {
    name: "Queen's Gambit Declined-Traditional Variation-Capablanca-Duras Variation-Hastings Variation",
    fen: "rnb1kb1r/pp3pp1/2p1pq1p/3p4/2PP4/1QN2N2/PP2PPPP/R3KB1R b KQkq - 1 7",
    moves: "d4 d5 c4 e6 Nf3 Nf6 Bg5 h6 Bxf6 Qxf6 Nc3 c6 Qb3",
    eco: "D30",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Bogoljubov Defence-Mad Dog Attack",
    fen: "rnbqk2r/ppp1ppbp/5np1/8/2BP3P/2N2N2/PPP3P1/R1BQK2R b KQkq - 0 7",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 g6 Bc4 Bg7 h4",
    eco: "D00",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Bogoljubov Defence-Nimzowitsch Attack",
    fen: "rnbqk2r/ppp1ppbp/5np1/4N3/2BP4/2N5/PPP3PP/R1BQK2R b KQkq - 3 7",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 g6 Bc4 Bg7 Ne5",
    eco: "D00",
    difficulty: "Hard"
  },
  {
    name: "Dutch Defence-Classical Variation-Ilyin-Genevsky Variation-Winter Variation",
    fen: "rnb1qrk1/ppp1b1pp/3ppn2/5p2/2PP4/2N2NP1/PP2PPBP/R1BQR1K1 b - - 3 8",
    moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O O-O d6 Nc3 Qe8 Re1",
    eco: "A97",
    difficulty: "Hard"
  },
  {
    name: "Queen's Pawn-Indian Defence-Normal Variation-Benko Gambit Fully Accepted-Yugoslav Variation",
    fen: "rn1qkb1r/4pppp/b2p1n2/2pP4/4P3/2N5/PP3PPP/R1BQKBNR b KQkq - 0 7",
    moves: "d4 Nf6 c4 c5 d5 b5 cxb5 a6 bxa6 Bxa6 Nc3 d6 e4",
    eco: "A59",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-Normal Variation-Benko Gambit Fully Accepted-Central Storming Variation",
    fen: "rn1qkb1r/3ppp1p/b4np1/2pP4/5P2/2N5/PP2P1PP/R1BQKBNR b KQkq - 0 7",
    moves: "d4 Nf6 c4 c5 d5 b5 cxb5 a6 bxa6 g6 Nc3 Bxa6 f4",
    eco: "A58",
    difficulty: "Hard"
  },
  {
    name: "Indian Defence-King Pawn Lines-Classical Variation-Averbakh-Grivas Attack",
    fen: "rnbqk2r/pp3pbp/3p1np1/2pP2B1/4P3/2N2N2/PP3PPP/R2QKB1R b KQkq - 3 8",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4 g6 Nf3 Bg7 Bg5",
    eco: "A71",
    difficulty: "Hard"
  },
  {
    name: "East Indian Defence-Catalan Opening-Open Defence-Alekhine Variation",
    fen: "r1bqkb1r/1ppn1ppp/p3pn2/8/3P4/6P1/PPQ1PPBP/RNB1K1NR b KQkq - 1 7",
    moves: "d4 Nf6 c4 e6 g3 d5 Bg2 dxc4 Qa4+ Nbd7 Qxc4 a6 Qc2",
    eco: "E03",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Classical Attack-Nottingham Variation",
    fen: "r1bqk2r/pp2ppbp/2np1np1/8/4P3/1NN1B3/PPP1BPPP/R2QK2R b KQkq - 5 8",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 Be2 Nc6 Nb3",
    eco: "B72",
    difficulty: "Hard"
  },
  {
    name: "Sicilian Defence-Normal Variation-Paulsen Variation-American Attack",
    fen: "r1bqk2r/pp1p1ppp/2nNpn2/8/1b2P3/2N5/PPP2PPP/R1BQKB1R b KQkq - 6 7",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Nf6 Ndb5 Bb4 Nd6+",
    eco: "B45",
    difficulty: "Hard"
  },
  {
    name: "Caro-Kann Defence-Karpov Variation-Smyslov Variation-Main Line",
    fen: "r1bqkb1r/pp3ppp/1np1pn2/6N1/3P4/1B6/PPP1QPPP/R1B1K1NR b KQkq - 3 8",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Bc4 Ngf6 Ng5 e6 Qe2 Nb6 Bb3",
    eco: "B17",
    difficulty: "Hard"
  },
  {
    name: "King's Gambit Declined-Classical Variation-Classical Countergambit-Réti Variation",
    fen: "rnbqk1nr/ppp3pp/8/2b2p2/2BpP3/2P2N2/PP4PP/RNBQK2R b KQkq - 1 7",
    moves: "e4 e5 f4 Bc5 Nf3 d6 c3 f5 fxe5 dxe5 d4 exd4 Bc4",
    eco: "C30",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Bledow Variation-Gifford Variation",
    fen: "rnb1kbnr/ppp2p1p/8/3B2p1/4Pp1q/6P1/PPPP3P/RNBQ1KNR b kq - 0 6",
    moves: "e4 e5 f4 exf4 Bc4 d5 Bxd5 Qh4+ Kf1 g5 g3",
    eco: "C33",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Classical Defence-Chigorin's Attack",
    fen: "rnb1kbnr/ppp2p1p/8/3B2p1/4Pp1q/6P1/PPPP3P/RNBQ1KNR b kq - 0 6",
    moves: "e4 e5 f4 exf4 Bc4 Qh4+ Kf1 d5 Bxd5 g5 g3",
    eco: "C33",
    difficulty: "Hard"
  },
  {
    name: "King's Knight's Gambit-Berlin Defence-Anderssen Defence-Rice Gambit",
    fen: "rnbqk2r/ppp2p1p/3b1n2/3PN3/2B2ppP/8/PPPP2P1/RNBQ1RK1 b kq - 2 8",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 Nf6 Bc4 d5 exd5 Bd6 O-O",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Paris Attack-Allgaier-Thorold Gambit",
    fen: "rnbq1bnr/pppp1k2/7p/8/3PPppP/8/PPP3P1/RNBQKB1R b KQ - 0 7",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ng5 h6 Nxf7 Kxf7 d4",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Paris Attack-Allgaier Gambit-Blackburne Gambit",
    fen: "rnbq1bnr/pppp1k2/7p/8/4PppP/2N5/PPPP2P1/R1BQKB1R b KQ - 1 7",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ng5 h6 Nxf7 Kxf7 Nc3",
    eco: "C39",
    difficulty: "Hard"
  },
  {
    name: "Philidor's Defence-Improved Hanham Variation-Lion Variation-Delayed Bishop Sac Variation",
    fen: "r1bqk2r/pppnbBpp/5n2/4p3/4P3/2N2N2/PPP2PPP/R1BQK2R b KQkq - 0 7",
    moves: "e4 e5 Nf3 d6 d4 Nf6 Nc3 Nbd7 Bc4 Be7 dxe5 dxe5 Bxf7+",
    eco: "C41",
    difficulty: "Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Open Defence-Harksen Gambit",
    fen: "r1bqkb1r/2p2ppp/p1n5/1p1pp3/2PPn3/1B3N2/PP3PPP/RNBQ1RK1 b kq - 0 8",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 c4",
    eco: "C80",
    difficulty: "Hard"
  },
  {
    name: "Italian Game-Giuoco Piano-Classical Variation-Miss in baulk Variation",
    fen: "r1bqk1nr/ppp2ppp/2np4/8/1bBPP3/5N2/PP3PPP/RNBQ1K1R b kq - 2 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 d6 d4 exd4 cxd4 Bb4+ Kf1",
    eco: "C53",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Winawer Variation-Advance Variation-Poisoned Pawn Variation",
    fen: "rnbqk2r/pp2nppp/4p3/2ppP3/3P2Q1/P1P5/2P2PPP/R1B1KBNR b KQkq - 2 7",
    moves: "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3 Ne7 Qg4",
    eco: "C19",
    difficulty: "Hard"
  },
  {
    name: "French Defence-Rubinstein Variation-Blackburne Defence-Capablanca Line",
    fen: "r1bqkb1r/ppp2ppp/4pn2/4N3/3P4/8/PPP2PPP/R1BQKB1R b KQkq - 1 7",
    moves: "e4 e6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Nf3 Ngf6 Nxf6+ Nxf6 Ne5",
    eco: "C10",
    difficulty: "Hard"
  },
  {
    name: "Alekhine Defence-Lasker's Attack-Hunt Variation-Matsukevich Gambit",
    fen: "rnbqkb1r/ppp1pppp/3p4/2P1P1B1/8/2P5/PP3PPP/R2QKBNR b KQkq - 1 7",
    moves: "e4 Nf6 e5 Nd5 c4 Nb6 c5 Nd5 Nc3 Nxc3 dxc3 d6 Bg5",
    eco: "B02",
    difficulty: "Hard"
  },
  {
    name: "Amar Opening-Paris Gambit-Amar Gambit-Gent Gambit",
    fen: "rn1qkbnr/ppp2ppp/8/3p4/8/6PB/PPPPP3/RNBQ1RK1 b kq - 0 6",
    moves: "Nh3 d5 g3 e5 f4 Bxh3 Bxh3 exf4 O-O fxg3 hxg3",
    eco: "A00",
    difficulty: "Hard"
  }
];
