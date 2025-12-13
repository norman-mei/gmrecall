import { ChessOpening } from '../types';

export const ADDITIONAL_OPENINGS: ChessOpening[] = [
  {
    name: "Queen's Pawn-Queen's Gambit Declined-Keres Defence-Argentinian Gambit",
    fen: "r2qkbnr/pp2pppp/2n5/8/Q2P4/8/PP2PPPP/RbB1KBNR w KQkq - 0 6",
    moves: "d4 d5 c4 Bf5 cxd5 Bxb1 Qa4+ c6 dxc6 Nxc6",
    eco: "D31",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Accepted-Classical Defence-Alekhine System-Except Main Line",
    fen: "rnbqkb1r/5ppp/p3pn2/1pp5/2BP4/4PN2/PP2QPPP/RNB2RK1 w kq - 0 8",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5 O-O a6 Qe2 b5",
    eco: "D28",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Pillsbury Variation-Uhlmann Variation",
    fen: "rnbq1rk1/ppp1bpp1/4pn1p/8/2pP3B/2N2N2/PP2PPPP/2RQKB1R w K - 0 8",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 Nf3 h6 Bh4 O-O Rc1 dxc4",
    eco: "D53",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Sämisch Variation-Main Line",
    fen: "r1bq1rk1/pp1p1ppp/2n1pn2/2p5/2PP4/P1PBP3/5PPP/R1BQK1NR w KQ - 2 8",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 O-O e3 c5 Bd3 Nc6",
    eco: "E29",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Sämisch Variation-Yates Defence-Panno-Ruban Formation",
    fen: "1rbq1rk1/1pp1ppbp/p1np1np1/8/2PPP3/2N1BP2/PP1QN1PP/R3KB1R w KQ - 2 9",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 Nc6 Nge2 a6 Qd2 Rb8",
    eco: "E84",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Grünfeld Gambit-Capablanca Variation-Botvinnik Variation",
    fen: "rn1q1rk1/pp2ppbp/4bnp1/2Pp4/2P2B2/2N1P3/PP3PPP/2RQKBNR w K - 1 8",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Bf4 Bg7 e3 O-O Rc1 c5 dxc5 Be6",
    eco: "D83",
    difficulty: "Very Hard"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit Accepted-Chicago Defence",
    fen: "rnbqkb1r/1p3ppp/p2ppn2/8/2B1P3/2N2N2/PP3PPP/R1BQ1RK1 w kq - 0 8",
    moves: "e4 c5 d4 cxd4 c3 dxc3 Nxc3 d6 Bc4 e6 Nf3 Nf6 O-O a6",
    eco: "B21",
    difficulty: "Very Hard"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit Accepted-Classical Formation",
    fen: "r1bqkb1r/1p2pppp/p1np1n2/8/2B1P3/2N2N2/PP3PPP/R1BQ1RK1 w kq - 2 8",
    moves: "e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 d6 Bc4 a6 O-O Nf6",
    eco: "B21",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Najdorf Variation-Opovcensky Variation-Modern Line",
    fen: "rn1qk2r/1p2bppp/p2pbn2/4p3/4P3/1NN5/PPP1BPPP/R1BQ1RK1 w kq - 4 9",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be2 e5 Nb3 Be7 O-O Be6",
    eco: "B92",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Classical Variation-Richter-Rauzer Variation-Rauzer Attack",
    fen: "r1bqkb1r/1p3ppp/p1nppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R w KQkq - 0 8",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bg5 e6 Qd2 a6",
    eco: "B66",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Richter-Rauzer Variation-Rauzer Attack-Ivanov Variation",
    fen: "r1b1kb1r/pp3ppp/1qnppn2/6B1/3NP3/2N5/PPPQ1PPP/R3KB1R w KQkq - 2 8",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bg5 e6 Qd2 Qb6",
    eco: "B63",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Szén Variation-Dely-Kasparov Gambit-Gary/Dely Gambit",
    fen: "r1bqkb1r/1p3ppp/p1n1pn2/3p4/2P1P3/N1N5/PP3PPP/R1BQKB1R w KQkq - 0 9",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nb5 d6 c4 Nf6 N1c3 a6 Na3 d5",
    eco: "B44",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Accelerated Dragon-Maróczy Bind-Gurgenidze Variation",
    fen: "r1bqkb1r/pp2pp1p/3p1np1/8/2PQP3/2N5/PP3PPP/R1B1KB1R w KQkq - 0 8",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 c4 Nf6 Nc3 Nxd4 Qxd4 d6",
    eco: "B36",
    difficulty: "Very Hard"
  },
  {
    name: "Centre Gambit Accepted-Normal Variation-Paulsen Attack-Charousek Variation",
    fen: "r1bqk1nr/ppppbppp/2n5/8/4P3/2P1Q3/PP3PPP/RNB1KBNR w KQkq - 1 6",
    moves: "e4 e5 d4 exd4 Qxd4 Nc6 Qe3 Bb4+ c3 Be7",
    eco: "C22",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Steinitz Defence Deferred-Lipnitsky Variation",
    fen: "r2qkb1r/2p2ppp/p1pp1n2/4p3/3PP1b1/5N2/PPP2PPP/RNBQ1RK1 w kq - 1 8",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O d6 Bxc6+ bxc6 d4 Bg4",
    eco: "C79",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Open Defence-Schlechter Defence",
    fen: "r1bqkb1r/2p2ppp/p7/1p1pp3/P2nn3/1B3N2/1PP2PPP/RNBQ1RK1 w kq - 0 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 a4 Nxd4",
    eco: "C80",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Open Defence-Main Line",
    fen: "r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1B3N2/PPP2PPP/RNBQ1RK1 w kq - 1 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6",
    eco: "C80",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Open Defence-Zukertort Variation",
    fen: "r1bqkb1r/2p1nppp/p7/1p1pP3/4n3/1B3N2/PPP2PPP/RNBQ1RK1 w kq - 1 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Ne7",
    eco: "C80",
    difficulty: "Very Hard"
  },
  {
    name: "Evans Gambit Accepted-Main Line-Pierce Defence-Waller Attack (transposed)",
    fen: "r1bqk1nr/ppp2ppp/2np4/b7/2BpP3/2P2N2/P4PPP/RNBQ1RK1 w kq - 0 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 exd4 O-O d6",
    eco: "C52",
    difficulty: "Very Hard"
  },
  {
    name: "Evans Gambit Accepted-Main Line-Pierce Defence-Compromised Defence",
    fen: "r1bqk1nr/pppp1ppp/2n5/b7/2B1P3/2p2N2/P4PPP/RNBQ1RK1 w kq - 0 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 exd4 O-O dxc3",
    eco: "C52",
    difficulty: "Very Hard"
  },
  {
    name: "Scotch Game-Golmayo Variation-Paulsen Attack-Gunsberg Defence",
    fen: "r1bnk2r/ppppnppp/5q2/1Bb5/3NP3/2P1B3/PP3PPP/RN1QK2R w KQkq - 3 8",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Qf6 c3 Nge7 Bb5 Nd8",
    eco: "C45",
    difficulty: "Very Hard"
  },
  {
    name: "Petrov's Defence-Symmetrical Variation-Centre Variation-Trifunovic Variation",
    fen: "rnbq1rk1/ppp2ppp/8/3pb3/2PPn3/3B4/PP3PPP/RNBQ1RK1 w - - 0 8",
    moves: "e4 e5 Nf3 Nf6 d4 Nxe4 Bd3 d5 Nxe5 Bd6 O-O O-O c4 Bxe5",
    eco: "C43",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-Petrov's Defence-Classical Attack-Mason Variation",
    fen: "rnbq1rk1/ppp1bppp/8/3p4/3Pn3/3B1N2/PPP2PPP/RNBQ1RK1 w - - 4 8",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Be7 O-O O-O",
    eco: "C42",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Krause Attack-Wiesbaden Variation-Sharp Line",
    fen: "rn1qk2r/pp3ppp/2p1pn2/4Nb2/PbpPP3/2N2P2/1P4PP/R1BQKB1R b KQkq - 0 8",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 Ne5 e6 f3 Bb4 e4",
    eco: "D17",
    difficulty: "Very Hard"
  },
  {
    name: "Dutch Defence-Classical Variation-Stonewall Variation-Chekhover Variation",
    fen: "rnb1qrk1/pp2b1pp/2p1pn2/3p1pB1/2PP4/2N2NP1/PPQ1PPBP/R4RK1 b - - 3 9",
    moves: "d4 f5 c4 Nf6 g3 e6 Bg2 Be7 Nf3 O-O O-O d5 Nc3 c6 Qc2 Qe8 Bg5",
    eco: "A95",
    difficulty: "Very Hard"
  },
  {
    name: "Indian Defence-King Pawn Lines-Pawn Storm Variation-Taimanov Variation",
    fen: "rnbqk2r/pp3pbp/3p1np1/1BpP4/4PP2/2N5/PP4PP/R1BQK1NR b KQkq - 2 8",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4 g6 f4 Bg7 Bb5+",
    eco: "A67",
    difficulty: "Very Hard"
  },
  {
    name: "Nimzo-Indian Defence-Except Gligoric System-Bernstein Defence-Exchange Line",
    fen: "r1bq1rk1/pp3ppp/2n1pn2/2pp4/2PP4/P1PBPN2/5PPP/R1BQ1RK1 b - - 0 9",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5 Bd3 c5 O-O Nc6 a3 Bxc3 bxc3",
    eco: "E58",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Indian Defence-Traditional Variation-Old Main Line-Taimanov Gambit",
    fen: "rn1q1rk1/pbppbppp/1p3n2/3p4/2PN4/6P1/PP2PPBP/RNBQ1RK1 b - - 1 8",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7 O-O O-O d5 exd5 Nd4",
    eco: "E17",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Indian Defence-Traditional Variation-Old Main Line-Polugayevsky Gambit",
    fen: "rn1q1rk1/pbppbppp/1p3n2/3p4/2P4N/6P1/PP2PPBP/RNBQ1RK1 b - - 1 8",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7 O-O O-O d5 exd5 Nh4",
    eco: "E17",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Orthodox Variation-Aronin-Taimanov Attack-Bayonet/Taimanov Attack",
    fen: "r1bq1rk1/ppp1npbp/3p1np1/3Pp3/1PP1P3/2N2N2/P3BPPP/R1BQ1RK1 b - - 0 9",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 b4",
    eco: "E97",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Orthodox Variation-Aronin-Taimanov Attack-Korchnoi Attack",
    fen: "r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N2N2/PP1BBPPP/R2Q1RK1 b - - 2 9",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Bd2",
    eco: "E97",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Orthodox Variation-Aronin-Taimanov Attack-Modern System",
    fen: "r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N5/PP1NBPPP/R1BQ1RK1 b - - 2 9",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Nd2",
    eco: "E97",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Classical Variation-Orthodox Variation-Aronin-Taimanov Attack",
    fen: "r1bq1rk1/ppp1npbp/3p1np1/3Pp3/2P1P3/2N5/PP2BPPP/R1BQNRK1 b - - 2 9",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1",
    eco: "E98",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Burille Variation-Vienna Variation-Pachman Variation",
    fen: "r1bq1rk1/pppnppbp/5np1/6N1/2BP4/1QN1P3/PP3PPP/R1B1K2R b KQ - 2 8",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 e3 O-O Qb3 dxc4 Bxc4 Nbd7 Ng5",
    eco: "D95",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Modern Scheveningen Variation-Maróczy Variation",
    fen: "r1bqk2r/pp2bppp/2nppn2/8/3NP3/2N5/PPP1BPPP/R1BQ1R1K b kq - 5 8",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Be2 Nc6 O-O Be7 Kh1",
    eco: "B83",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Muzio Gambit-Sarratt Defence-Bello Gambit",
    fen: "rnb1kbnr/pppp1p1p/5q2/8/2B1Pp2/2N2Q2/PPPP2PP/R1B2RK1 b kq - 2 7",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 O-O gxf3 Qxf3 Qf6 Nc3",
    eco: "C37",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Kieseritzky Gambit-Stockwhip Defence-Jaenisch Variation",
    fen: "rnbqk1n1/pppp1p1r/7b/4N2p/2BPPppP/2N5/PPP3P1/R1BQK2R b KQq - 2 8",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 h5 Bc4 Rh7 d4 Bh6 Nc3",
    eco: "C39",
    difficulty: "Very Hard"
  },
  {
    name: "King's Pawn-King's Gambit-Panteldakis Countergambit-Pawn Sac Line",
    fen: "rnb1kbnr/ppppq2p/6P1/7Q/5p2/8/PPPP2PP/RNBK1BNR b kq - 2 6",
    moves: "e4 e5 f4 f5 exf5 exf4 Qh5+ g6 fxg6 Qe7+ Kd1",
    eco: "C30",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-Latvian Countergambit Accepted-Bilguer Variation-Bronstein Gambit",
    fen: "rnb1kbnr/ppp4p/3p1qp1/8/2NPp3/8/PPP1QPPP/RNB1KB1R b KQkq - 1 7",
    moves: "e4 e5 Nf3 f5 Nxe5 Qf6 d4 d6 Nc4 fxe4 Qh5+ g6 Qe2",
    eco: "C40",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Suetin Variation",
    fen: "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/PBP2N2/1P1P1PPP/RNBQR1K1 b - - 0 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 a3",
    eco: "C90",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Lutikov Variation",
    fen: "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/2P2N2/PPBP1PPP/RNBQR1K1 b - - 1 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 Bc2",
    eco: "C90",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Pilnik Variation",
    fen: "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BPP1N2/PP3PPP/RNBQR1K1 b - - 0 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 d3",
    eco: "C90",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Yates Variation",
    fen: "r1bq1rk1/2p1bppp/p1np1n2/1p2p3/3PP3/1BP2N2/PP3PPP/RNBQR1K1 b - - 0 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 d4",
    eco: "C91",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-Riga Variation-Riga-Berger Variation",
    fen: "r1bqkb1r/1pp2ppp/p1n5/3p2B1/B2pn3/5N2/PPP2PPP/RN1QR1K1 b kq - 1 8",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 exd4 Re1 d5 Bg5",
    eco: "C80",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Classical Variation-Giuoco Pianissimo-Main Line",
    fen: "r1bq1rk1/bpp2ppp/p1np1n2/4p3/4P3/1BPP1N1P/PP3PP1/RNBQR1K1 b - - 1 9",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 a6 Bb3 Ba7 h3 O-O O-O d6 Re1",
    eco: "C53",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Centre Attack-Greco Gambit-Greco's Attack",
    fen: "r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/2N2N2/PP3PPP/R1BQK2R b KQkq - 2 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+ Nc3",
    eco: "C54",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Scotch Gambit-Double Gambit Accepted-Canal Variation",
    fen: "r1bqkb1r/ppp2ppp/2n5/3p4/2Bpn3/2N2N2/PPP2PPP/R1BQR1K1 b kq - 1 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Nxe4 Re1 d5 Nc3",
    eco: "C56",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-4 Knights Game-Scotch Variation Accepted-Paulsen Variation",
    fen: "r1bqk2r/p1pp1ppp/2p2n2/8/1b1QP3/2N5/PPP2PPP/R1B1KB1R b KQkq - 1 7",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Qd4",
    eco: "C47",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-Petrov's Defence-Classical Attack-Jaenisch Variation",
    fen: "r1bqk2r/ppp1bppp/2n5/3p4/2PPn3/3B1N2/PP3PPP/RNBQ1RK1 b kq - 0 8",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Be7 O-O Nc6 c4",
    eco: "C42",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Knight Defence-Cambridge Springs Defence-Yugoslav Variation",
    fen: "r1b1kb1r/pp1n1ppp/2p1p3/q2n2B1/3P4/2N1PN2/PP3PPP/R2QKB1R w KQkq - 0 8",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 e3 c6 Nf3 Qa5 cxd5 Nxd5",
    eco: "D52",
    difficulty: "Very Hard"
  },
  {
    name: "Nimzo-Indian Defence-Except Gligoric System-Gligoric System-Russian Variation",
    fen: "rn1q1rk1/pp1b1ppp/4pn2/2p5/1bBP4/2N1PN2/PP3PPP/R1BQ1RK1 w - - 1 9",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5 Bd3 c5 O-O dxc4 Bxc4 Bd7",
    eco: "E54",
    difficulty: "Very Hard"
  },
  {
    name: "Nimzo-Indian Defence-Except Gligoric System-Gligoric System-Bronstein Variation",
    fen: "r1bq1rk1/pp1n1ppp/4pn2/2p5/1bBP4/2N1PN2/PP3PPP/R1BQ1RK1 w - - 1 9",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5 Bd3 c5 O-O dxc4 Bxc4 Nbd7",
    eco: "E55",
    difficulty: "Very Hard"
  },
  {
    name: "Nimzo-Indian Defence-Spielmann Variation-Romanovsky Gambit-San Remo/Stahlberg Variation",
    fen: "r1bqk2r/pp1p1ppp/2n1p3/2n5/1bP5/1QN2N2/PP1BPPPP/R3KB1R w KQkq - 0 8",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qb3 c5 dxc5 Nc6 Nf3 Ne4 Bd2 Nxc5",
    eco: "E23",
    difficulty: "Very Hard"
  },
  {
    name: "Nimzo-Indian Defence-Spielmann Variation-Romanovsky Gambit-Karlsbad/Carlsbad Variation",
    fen: "r1bqk2r/pp1p1ppp/2n1p3/2P5/1bP5/1QN2N2/PP1nPPPP/R3KB1R w KQkq - 0 8",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qb3 c5 dxc5 Nc6 Nf3 Ne4 Bd2 Nxd2",
    eco: "E23",
    difficulty: "Very Hard"
  },
  {
    name: "Nimzo-Indian Defence-Noa Variation-Modern Line-Belyavsky Gambit",
    fen: "rnb1k2r/ppp2ppp/5n2/4pq2/1b1P4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 8",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 d5 cxd5 Qxd5 Nf3 Qf5 Qd1 e5",
    eco: "E35",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Delayed Fianchetto Variation-Yugoslav System-Exchange Line",
    fen: "r1bq1rk1/pp2ppbp/2n2np1/2p5/2P5/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 0 9",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 c5 O-O Nc6 dxc5 dxc5",
    eco: "E66",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-3 Knights Variation-Burille Variation-Reversed Tarrasch Variation",
    fen: "r1bq1rk1/pp2ppbp/2n2np1/3p4/2PP4/2N2N2/PP2BPPP/R1BQ1RK1 w - - 3 9",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 e3 c5 Be2 cxd4 exd4 Nc6 O-O O-O",
    eco: "D94",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Najdorf Variation-Opovcensky Variation-Traditional Line",
    fen: "rnbq1rk1/1p2bppp/p2p1n2/4p3/4P3/1NN5/PPP1BPPP/R1BQ1RK1 w - - 4 9",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be2 e5 Nb3 Be7 O-O O-O",
    eco: "B92",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Najdorf Variation-Traditional Line",
    fen: "rnb1k2r/1pq1bppp/p2ppn2/6B1/3NPP2/2N2Q2/PPP3PP/R3KB1R w KQkq - 3 9",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 e6 f4 Be7 Qf3 Qc7",
    eco: "B98",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Classical Attack-Zollner Gambit",
    fen: "r1bqk2r/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPP1BPPP/R2QK2R w KQkq - 4 8",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 Be2 Nc6",
    eco: "B73",
    difficulty: "Very Hard"
  },
  {
    name: "Pirc Defence-Anti-Philidor Variation-Lion's Cave Variation-Lion's Claw Gambit",
    fen: "r1bqkb1r/pp1n1ppp/2p2n2/3p4/2BQPP2/2N2N2/PPP3PP/R1B1K2R w KQkq - 0 8",
    moves: "e4 d6 d4 Nf6 Nc3 Nbd7 f4 e5 Nf3 exd4 Qxd4 c6 Bc4 d5",
    eco: "B07",
    difficulty: "Very Hard"
  },
  {
    name: "King's Bishop Opening-Classical Defence-Philidor Variation-Pratt Variation",
    fen: "rnbq1rk1/ppp2ppp/5P2/2b4Q/2pp4/2P5/PP3PPP/RNB1K1NR w KQ - 2 8",
    moves: "e4 e5 Bc4 Bc5 c3 Nf6 d4 exd4 e5 d5 exf6 dxc4 Qh5 O-O",
    eco: "C23",
    difficulty: "Very Hard"
  },
  {
    name: "King's Gambit Declined-Falkbeer Countergambit Accepted-Charousek Gambit Accepted-Main Line",
    fen: "rn1qk2r/ppp2ppp/8/2bP1b2/4nP2/5N2/PPP1Q1PP/RNB1KB1R w KQkq - 4 8",
    moves: "e4 e5 f4 d5 exd5 e4 d3 Nf6 dxe4 Nxe4 Nf3 Bc5 Qe2 Bf5",
    eco: "C32",
    difficulty: "Very Hard"
  },
  {
    name: "King's Bishop's Gambit-Classical Defence-Lopez Variation-McDonnell Defence",
    fen: "rnb1k2r/ppppnpbp/8/6p1/2BPPp1q/2N5/PPP3PP/R1BQ1KNR w kq - 1 7",
    moves: "e4 e5 f4 exf4 Bc4 Qh4+ Kf1 g5 Nc3 Bg7 d4 Ne7",
    eco: "C33",
    difficulty: "Very Hard"
  },
  {
    name: "Philidor's Defence-Improved Hanham Variation-Lion Variation-Sozin Variation",
    fen: "r1bq1rk1/pp1nbppp/2pp1n2/8/P1BpP3/2N2N2/1PP1QPPP/R1B2RK1 w - - 0 9",
    moves: "e4 e5 Nf3 d6 d4 Nf6 Nc3 Nbd7 Bc4 Be7 O-O O-O Qe2 c6 a4 exd4",
    eco: "C41",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Chigorin Variation",
    fen: "r1bqk2r/4bppp/p2p1n2/npp1p3/4P3/2P2N2/PPBP1PPP/RNBQR1K1 w kq - 0 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 Na5 Bc2 c5",
    eco: "C88/C90",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-Main Line-Classical Defence",
    fen: "r2qk2r/2p1bppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP3PPP/RNBQ1RK1 w kq - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 c3 Be7",
    eco: "C83",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Morphy Defence-Exchange Variation-Alekhine Variation",
    fen: "r1b1kbnr/1pp2ppp/p1p5/8/3qP3/5N2/PPP2PPP/RNB1K2R w KQkq - 0 7",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 d4 exd4 Qxd4 Qxd4",
    eco: "C68",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-Ponziani Countergambit-Schmidt Attack-Cordel Variation",
    fen: "rnbqk2r/ppp1b1pp/3p1n2/3Pp3/4N3/2PB4/PP3PPP/RNBQK2R w KQkq - 3 9",
    moves: "e4 e5 Nf3 Nc6 c3 f5 d4 d6 d5 fxe4 Ng5 Nb8 Nxe4 Nf6 Bd3 Be7",
    eco: "C44",
    difficulty: "Very Hard"
  },
  {
    name: "French Defence-Winawer Variation-Alekhine-Maroczy Gambit Accepted-Kan Variation",
    fen: "r1bqk1nr/ppp2ppp/2n1p3/8/3Pp3/P1N5/1PP2PPP/R1BQKB1R w KQkq - 1 7",
    moves: "e4 e6 d4 d5 Nc3 Bb4 Ne2 dxe4 a3 Bxc3+ Nxc3 Nc6",
    eco: "C15",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Alapin Variation-Czech Defence-Dutch System",
    fen: "rn1qk2r/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P3PPP/R1BQ1RK1 b kq - 2 8",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 e3 e6 Bxc4 Bb4 O-O",
    eco: "D19",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Orthodox Defence-Rubinstein Variation-Flohr Line",
    fen: "r1bq1rk1/pp1nbppp/4pn2/2pP2B1/3P4/2N1PN2/PPQ2PPP/R3KB1R b KQ - 0 8",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Qc2 c5 cxd5",
    eco: "D62",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Orthodox Defence-Swiss Variation-Karlsbad/Carlsbad Variation",
    fen: "r1bq1rk1/1ppnbppp/p3pn2/3P2B1/3P4/2N1PN2/PP3PPP/2RQKB1R b K - 0 8",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 a6 cxd5",
    eco: "D63",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Anti-Meran System-Botvinnik System-Anti-Meran Gambit",
    fen: "rnbqkb1r/p4p2/2p1pn1p/1p2P1N1/2pP3B/2N5/PP3PPP/R2QKB1R b KQkq - 0 9",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 Bg5 dxc4 e4 b5 e5 h6 Bh4 g5 Nxg5",
    eco: "D44",
    difficulty: "Very Hard"
  },
  {
    name: "Indian Defence-Trompowsky Attack-Edge Variation-Hergert Gambit #2",
    fen: "rnb1kb1r/pp2pppp/2p5/q2p4/3PP2B/2P5/PP1Q1PPP/R3KBNR b KQkq - 0 7",
    moves: "d4 Nf6 Bg5 Ne4 Bh4 c6 Nd2 Qa5 c3 Nxd2 Qxd2 d5 e4",
    eco: "A45",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Indian Defence-Kasparov-Petrosian Variation-Modern Variation-Rashkovsky Attack",
    fen: "rn1qkb1r/pbp2ppp/1p2p3/3n4/Q2P4/P1N2N2/1P2PPPP/R1B1KB1R b KQkq - 1 7",
    moves: "d4 Nf6 c4 e6 Nf3 b6 Nc3 Bb7 a3 d5 cxd5 Nxd5 Qa4+",
    eco: "E12",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Counterthrust Variation-Reshevsky Variation-Delayed Exchange Variation",
    fen: "rnbq1rk1/pp2ppbp/6p1/2Pn4/8/5NP1/PP2PPBP/RNBQ1RK1 b - - 0 8",
    moves: "d4 Nf6 c4 g6 g3 d5 Bg2 Bg7 Nf3 O-O cxd5 Nxd5 O-O c5 dxc5",
    eco: "D75",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Petrosian System-Main Line-Keres Defence",
    fen: "r1bq1rk1/pppn1pb1/3p3p/3Pp1pn/2P1P2P/2N2NB1/PP2BPP1/R2QK2R b KQ - 0 11",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 d5 Nbd7 Bg5 h6 Bh4 g5 Bg3 Nh5 h4",
    eco: "E93",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Grünfeld Defence-Modern Exchange Variation-Kramnik's Line",
    fen: "rnbqk2r/pp2ppbp/6p1/2p5/3PP3/2P2N1P/P4PP1/R1BQKB1R b KQkq - 0 8",
    moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 Nf3 c5 h3",
    eco: "D85",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Wing Gambit-Marshall Variation-Nanu Gambit",
    fen: "rnb1kbnr/pp3ppp/4q3/4p3/1pP5/P2B1N2/3P1PPP/RNBQK2R b KQkq - 2 7",
    moves: "e4 c5 b4 cxb4 a3 d5 exd5 Qxd5 Nf3 e5 c4 Qe6 Bd3",
    eco: "B20",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Leonhardt Variation-Main Line-Velimirovic Attack",
    fen: "r1bqk2r/pp2bppp/2nppn2/8/2BNP3/2N1B3/PPP1QPPP/R3K2R b KQkq - 5 8",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Bc4 Nc6 Be3 Be7 Qe2",
    eco: "B89",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Scheveningen Variation-Matanovic Attack-Tal Variation",
    fen: "r1bqk2r/pp2bppp/2nppn2/8/3NPP2/2N1BQ2/PPP3PP/R3KB1R b KQkq - 4 8",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 f4 Nc6 Be3 Be7 Qf3",
    eco: "B82",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Classical Attack-Amsterdam Variation",
    fen: "r1bqk2r/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPPQBPPP/R3K2R b KQkq - 5 8",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 Be2 Nc6 Qd2",
    eco: "B72",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Classical Variation-Magnus Smith Trap",
    fen: "r1bqkb1r/p3pp1p/2pp1np1/4P3/2B5/2N5/PPP2PPP/R1BQK2R b KQkq - 0 8",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bc4 g6 Nxc6 bxc6 e5",
    eco: "B57",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Knight Variation-Wing Attack-Christiansen's Dream",
    fen: "rnb1k1nr/3p1ppp/pq2p3/1pb5/3NP1Q1/2NBB3/PPP2PPP/R3K2R b KQkq - 5 8",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Nc3 b5 Bd3 Qb6 Be3 Bc5 Qg4",
    eco: "B43",
    difficulty: "Very Hard"
  },
  {
    name: "King's Pawn-King's Gambit Declined-Classical Variation-Marshall/Euwe Attack",
    fen: "rn1qk1nr/ppp2ppp/8/2b1p3/Q3P1b1/2P2N2/PP1P2PP/RNB1KB1R b KQkq - 1 6",
    moves: "e4 e5 f4 Bc5 Nf3 d6 c3 Bg4 fxe5 dxe5 Qa4+",
    eco: "C30",
    difficulty: "Very Hard"
  },
  {
    name: "King's Bishop's Gambit-Classical Defence-Lopez Variation-McDonnell Attack",
    fen: "rnb1k1nr/pppp1pbp/8/6p1/2B1Pp1q/2N3P1/PPPP3P/R1BQ1KNR b kq - 0 6",
    moves: "e4 e5 f4 exf4 Bc4 Qh4+ Kf1 g5 Nc3 Bg7 g3",
    eco: "C33",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-Main Line-Bernstein Variation",
    fen: "r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1B3N2/PPPN1PPP/R1BQ1RK1 b kq - 2 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 Nbd2",
    eco: "C80",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Closed Variation-Centre-Holding Variation-Tarrasch Variation",
    fen: "r1b1k2r/1pp1qppp/pbnp1n2/4p3/P1BPP3/2P2N1P/1P3PP1/RNBQR1K1 b kq - 0 9",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Qe7 d4 Bb6 O-O Nf6 a4 a6 Re1 d6 h3",
    eco: "C53",
    difficulty: "Very Hard"
  },
  {
    name: "King's Pawn-4 Knights Game-Double Ruy Lopez-Janowski Variation",
    fen: "r1bq1rk1/ppp2ppp/2np1n2/1B2p3/4P3/2PP1N2/P1P2PPP/R1BQR1K1 b - - 1 8",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 Bxc3 bxc3 d6 Re1",
    eco: "C49",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-3 Knights Variation-Harrwitz Attack-Main Line",
    fen: "rnbq1rk1/pp3ppp/4pn2/2bp4/2P2B2/2N1PN2/PP3PPP/R2QKB1R w KQ - 0 8",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 Be7 Bf4 O-O e3 c5 dxc5 Bxc5",
    eco: "D37",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Meran Variation-Meran Variation-Neo-Meran/Lundin Variation",
    fen: "r1bqkb1r/p2n1ppp/2p1pn2/8/1p1P4/2NBPN2/PP3PPP/R1BQK2R w KQkq - 0 9",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Bd3 dxc4 Bxc4 b5 Bd3 b4",
    eco: "D47",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Meran Variation-Meran Variation-Wade Variation",
    fen: "r2qkb1r/pb1n1ppp/2p1pn2/1p6/3P4/2NBPN2/PP3PPP/R1BQK2R w KQkq - 2 9",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Bd3 dxc4 Bxc4 b5 Bd3 Bb7",
    eco: "D47",
    difficulty: "Very Hard"
  },
  {
    name: "Indian Defence-King Pawn Lines-Pawn Storm Variation-4 Pawns Attack",
    fen: "rnbq1rk1/pp3pbp/3p1np1/2pP4/4PP2/2N2N2/PP4PP/R1BQKB1R w KQ - 3 9",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4 g6 f4 Bg7 Nf3 O-O",
    eco: "A68",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Classical Variation-Vitolinsh-Adorjan Gambit",
    fen: "rnbq1rk1/p1pp1ppp/4pn2/1p6/2PP4/P1Q5/1P2PPPP/R1B1KBNR w KQ - 0 7",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 O-O a3 Bxc3+ Qxc3 b5",
    eco: "E32",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Orthodox Variation-Positional Defence-Main Line",
    fen: "r1bq1rk1/1p1n1pbp/2pp1np1/p3p3/2PPP3/2N2N2/PP3PPP/R1BQRBK1 w - - 0 10",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nbd7 Re1 c6 Bf1 a5",
    eco: "E96",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Grünfeld Gambit-Capablanca Variation-Reshevsky Gambit",
    fen: "rnb2rk1/pp2ppbp/5np1/q1Pp4/2P2B2/2N1P3/PP3PPP/2RQKBNR w K - 1 8",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Bf4 Bg7 e3 O-O Rc1 c5 dxc5 Qa5",
    eco: "D83",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Classical Variation-Dragon Transfer",
    fen: "r1bqkb1r/pp2pp1p/3p1np1/8/3QP3/2N5/PPP1BPPP/R1B1K2R w KQkq - 0 8",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Be2 Nxd4 Qxd4 g6",
    eco: "B58",
    difficulty: "Very Hard"
  },
  {
    name: "Caro-Kann Defence-Main Line-Karpov Variation-Tiviakov-Fischer Attack",
    fen: "r1bqkb1r/pp2pppp/2p2n2/8/2BP4/8/PPP2PPP/R1BQK1NR w KQkq - 0 7",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Bc4 Ngf6 Nxf6+ Nxf6",
    eco: "B17",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Muzio Gambit-Sarratt Defence-Fraser's Counterattack",
    fen: "rnb1kbnr/pppp1p1p/8/4Pq2/2B2p2/5Q2/PPPP2PP/RNB2RK1 w kq - 1 8",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 O-O gxf3 Qxf3 Qf6 e5 Qf5",
    eco: "C37",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Salvio Gambit-Silbershmidt Defence-Anderssen's Counterattack",
    fen: "rnb1kb1r/ppp2p1p/3p3n/4N3/2BPPppq/8/PPP3PP/RNBQ1K1R w kq - 0 8",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 Ne5 Qh4+ Kf1 Nh6 d4 d6",
    eco: "C37",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Salvio Gambit-Silbershmidt Defence-Silberschmidt Gambit",
    fen: "rnb1kb1r/pppp1p1p/7n/4N3/2BPP1pq/5p2/PPP3PP/RNBQ1K1R w kq - 0 8",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 Ne5 Qh4+ Kf1 Nh6 d4 f3",
    eco: "C37",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Yates Variation-Bogoljubov Variation",
    fen: "r2q1rk1/2p1bppp/p1np1n2/1p2p3/3PP1b1/1BP2N2/PP3PPP/RNBQR1K1 w - - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 d4 Bg4",
    eco: "C91",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Keres Defence",
    fen: "r1bq1rk1/2p1bppp/2np1n2/pp2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 0 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 h3 a5",
    eco: "C92",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Flohr-Zaitsev/Lenzerheide System",
    fen: "r2q1rk1/1bp1bppp/p1np1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 h3 Bb7",
    eco: "C92",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Kholmov Variation",
    fen: "r2q1rk1/2p1bppp/p1npbn2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 h3 Be6",
    eco: "C92",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Smyslov Defence",
    fen: "r1bq1rk1/2p1bpp1/p1np1n1p/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 0 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 h3 h6",
    eco: "C93",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Breyer Defence",
    fen: "rnbq1rk1/2p1bppp/p2p1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 h3 Nb8",
    eco: "C94",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Ragozin-Petrosian/Keres Variation",
    fen: "r1bq1rk1/2pnbppp/p1np4/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 h3 Nd7",
    eco: "C92",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Zaitsev System",
    fen: "r1bqr1k1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 h3 Re8",
    eco: "C92",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Yates Variation-Bogolubov Variation",
    fen: "r2q1rk1/2p1bppp/p1np1n2/1p2p3/3PP1b1/1BP2N2/PP3PPP/RNBQR1K1 w - - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O d4 Bg4",
    eco: "C88/C91",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Keres Variation",
    fen: "r1bq1rk1/2p1bppp/2np1n2/pp2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 0 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 a5",
    eco: "C88/C92",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Lenzerheide Variation",
    fen: "r2q1rk1/1bp1bppp/p1np1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Bb7",
    eco: "C88/C92",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Smyslov Variation",
    fen: "r1bq1rk1/2p1bpp1/p1np1n1p/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 0 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 h6",
    eco: "C88/C93",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Berger Variation",
    fen: "r1bq1rk1/2p1bppp/p2p1n2/np2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Na5",
    eco: "C88/C96",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Breyer Variation",
    fen: "rnbq1rk1/2p1bppp/p2p1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Nb8",
    eco: "C88/C94",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Ragozin Variation",
    fen: "r1bq1rk1/2pnbppp/p1np4/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Nd7",
    eco: "C88/C92",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Averbakh Variation-Kecskemet Variation",
    fen: "r2qbrk1/1pp1bppp/p1np1n2/4p3/B2PP3/2P2N2/PP1N1PPP/R1BQR1K1 w - - 3 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 d6 c3 O-O d4 Bd7 Nbd2 Be8",
    eco: "C87",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Averbakh Variation-Kecskemét Variation",
    fen: "r2qbrk1/1pp1bppp/p1np1n2/4p3/B2PP3/2P2N2/PP1N1PPP/R1BQR1K1 w - - 3 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 d6 c3 Bd7 d4 O-O Nbd2 Be8",
    eco: "C87",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Steinitz Defence Deferred-Rubinstein Variation",
    fen: "r1bqkb1r/2p2ppp/p1pp4/4p3/3Pn3/5N2/PPP2PPP/RNBQ1RK1 w kq - 0 8",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O d6 Bxc6+ bxc6 d4 Nxe4",
    eco: "C79",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Polerio Defence-Bishop Check Line-Suhle Defence",
    fen: "r1bqkb1r/p4pp1/2p2n1p/n3p1N1/8/8/PPPPBPPP/RNBQK2R w KQkq - 0 9",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6 bxc6 Be2 h6",
    eco: "C59",
    difficulty: "Very Hard"
  },
  {
    name: "French Defence-MacCutcheon Variation-Exchange Variation-Bogolyubov Variation",
    fen: "rnb1k2r/ppp2p1p/4pp2/q7/1b1P4/2N5/PPPQ1PPP/R3KBNR w KQkq - 2 8",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Bb4 exd5 Qxd5 Bxf6 gxf6 Qd2 Qa5",
    eco: "C12",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Quiet Variation-Schallopp Defence-Landau Variation",
    fen: "rnq1kb1r/pp3ppp/4pn2/3p1b2/3P4/NQ2PN2/PP1B1PPP/R3KB1R b KQkq - 1 8",
    moves: "d4 d5 c4 c6 Nf3 Nf6 e3 Bf5 cxd5 cxd5 Qb3 Qc8 Bd2 e6 Na3",
    eco: "D12",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Been-Koomen Variation-Semi-Tarrasch Defence-Krause Variation",
    fen: "rnbqkb1r/1p3ppp/p4n2/1N1pp1B1/Q1P5/2N5/PP2PPPP/R3KB1R b KQkq - 1 8",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 c5 Nf3 cxd4 Nxd4 e5 Ndb5 a6 Qa4",
    eco: "D50",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Cambridge Springs Defence-Bogoljubov Variation-Argentine Variation",
    fen: "r1b2rk1/pp1n1ppp/2p1pn2/q2p4/1bPP3B/2N1P3/PPQN1PPP/R3KB1R b KQ - 7 9",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Nbd7 e3 c6 Nf3 Qa5 Nd2 Bb4 Qc2 O-O Bh4",
    eco: "D52",
    difficulty: "Very Hard"
  },
  {
    name: "Indian Defence-Normal Variation-Benko Gambit Fully Accepted-Fianchetto Variation",
    fen: "rn1qkb1r/4pp1p/b2p1np1/2pP4/8/2N2NP1/PP2PP1P/R1BQKB1R b KQkq - 0 8",
    moves: "d4 Nf6 c4 c5 d5 b5 cxb5 a6 bxa6 Bxa6 Nc3 d6 Nf3 g6 g3",
    eco: "A58",
    difficulty: "Very Hard"
  },
  {
    name: "Indian Defence-Classical Variation-Traditional Variation-Main Line",
    fen: "rnbq1rk1/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQ1RK1 b - - 5 9",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4 g6 Nf3 Bg7 Be2 O-O O-O",
    eco: "A73",
    difficulty: "Very Hard"
  },
  {
    name: "East Indian Defence-Catalan Opening-Closed Variation-Zagoryansky Variation",
    fen: "r1bq1rk1/p2nbppp/1pp1pn2/3p4/P1PP4/5NP1/1PQ1PPBP/RNBR2K1 b - - 0 9",
    moves: "d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O Nbd7 Qc2 c6 Rd1 b6 a4",
    eco: "E08",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Pawn-Queen's Indian Defence-Spassky System-Averbakh Variation",
    fen: "rn1q1rk1/pb1pbppp/1p2pn2/8/2PN4/1P1BP3/PB3PPP/RN1Q1RK1 b - - 0 9",
    moves: "d4 Nf6 c4 e6 Nf3 b6 e3 Bb7 Bd3 c5 O-O Be7 b3 O-O Bb2 cxd4 Nxd4",
    eco: "E14",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Classical Variation-Normal Line",
    fen: "r1bq1rk1/pp2ppbp/2np1np1/8/4P3/1NN1B3/PPP1BPPP/R2Q1RK1 b - - 7 9",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be2 Bg7 Be3 Nc6 O-O O-O Nb3",
    eco: "B74",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Normal Variation-Bastrikov Variation-Ponomariov Gambit",
    fen: "rqb1kbnr/1p1p1ppp/pBn1p3/1N6/4P3/2N5/PPP2PPP/R2QKB1R b KQkq - 1 8",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Qc7 Ndb5 Qb8 Be3 a6 Bb6",
    eco: "B48",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Modern Defence-Abbazia Defence-Botvinnik Line",
    fen: "rnbqkb1r/p4ppp/2p2n2/8/2B2p2/5N2/PPPP2PP/RNBQK2R b KQkq - 1 7",
    moves: "e4 e5 f4 exf4 Nf3 d5 exd5 Nf6 Bb5+ c6 dxc6 bxc6 Bc4",
    eco: "C36",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Campbell Defence-Brentano Defence-Caro Variation",
    fen: "rnbqkb1r/ppp2p1p/8/3pN3/3PnBpP/8/PPPN2P1/R2QKB1R b KQkq - 1 8",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 d5 d4 Nf6 Bxf4 Nxe4 Nd2",
    eco: "C39",
    difficulty: "Very Hard"
  },
  {
    name: "Vienna Game-Vienna Gambit-Knight Variation-Hamppe-Allgaier-Thorold Gambit",
    fen: "r1bq1bnr/pppp1k2/2n4p/8/3PPppP/2N5/PPP3P1/R1BQKB1R b KQ - 0 8",
    moves: "e4 e5 Nc3 Nc6 f4 exf4 Nf3 g5 h4 g4 Ng5 h6 Nxf7 Kxf7 d4",
    eco: "C25",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Evans Gambit Accepted-Main Line-Richardson Attack",
    fen: "r1bq1rk1/pppp1ppp/2n2n2/b3N3/2BPP3/2P5/P4PPP/RNBQ1RK1 b - - 0 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 O-O Nf6 d4 O-O Nxe5",
    eco: "C52",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-Petrov's Defence-Classical Attack-Lasker Variation",
    fen: "r1bqk2r/ppp1bppp/2n5/3p4/3Pn3/3B1N2/PPP2PPP/RNBQR1K1 b kq - 5 8",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Be7 O-O Nc6 Re1",
    eco: "C42",
    difficulty: "Very Hard"
  },
  {
    name: "Alekhine Defence-Normal Variation-4 Pawns Attack-Fahrni Variation",
    fen: "rn1qk2r/ppp2ppp/1n2p3/4Pb2/1bPP4/2NB1N2/PP4PP/R1BQK2R b KQkq - 3 9",
    moves: "e4 Nf6 e5 Nd5 d4 d6 c4 Nb6 f4 dxe5 fxe5 Bf5 Nc3 e6 Nf3 Bb4 Bd3",
    eco: "B03",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Neo-Orthodox Variation-Makogonov-Bondarevsky System-Exchange Variation",
    fen: "rnbq1rk1/p1p1bpp1/1p3n1p/3p4/3P3B/2N1PN2/PP3PPP/R2QKB1R w KQ - 0 9",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bh4 b6 cxd5 exd5",
    eco: "D58",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Neo-Orthodox Variation-Makogonov-Bondarevsky System-Makogonov Exchange Variation",
    fen: "rnbq1rk1/p1p1bpp1/1p2p2p/3n4/3P3B/2N1PN2/PP3PPP/R2QKB1R w KQ - 0 9",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bh4 b6 cxd5 Nxd5",
    eco: "D59",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Anti-Meran System-Anti-Meran Gambit-Alatortsev System",
    fen: "rnbqkb1r/p4p2/2p1p2p/1p1nP1N1/2pP3B/2N5/PP3PPP/R2QKB1R w KQkq - 1 10",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 Bg5 dxc4 e4 b5 e5 h6 Bh4 g5 Nxg5 Nd5",
    eco: "D44",
    difficulty: "Very Hard"
  },
  {
    name: "Nimzo-Indian Defence-Except Gligoric System-Gligoric System-Smyslov Variation",
    fen: "rnb2rk1/pp2qppp/4pn2/2p5/1bBP4/2N1PN2/PP3PPP/R1BQ1RK1 w - - 1 9",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5 Bd3 c5 O-O dxc4 Bxc4 Qe7",
    eco: "E54",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Wing Gambit-Marshall Variation-Romanian Defence",
    fen: "r1b1kbnr/pp3ppp/2n1q3/4p3/1pP5/P4N2/1B1P1PPP/RN1QKB1R w KQkq - 1 8",
    moves: "e4 c5 b4 cxb4 a3 d5 exd5 Qxd5 Nf3 e5 Bb2 Nc6 c4 Qe6",
    eco: "B20",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Smith-Morra Gambit Accepted-Paulsen Formation-Morphy Defence Deferred",
    fen: "r1bqk1nr/3p1ppp/p1n1p3/1pb5/4P3/1BN2N2/PP3PPP/R1BQ1RK1 w kq - 2 9",
    moves: "e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 e6 Bc4 a6 O-O b5 Bb3 Bc5",
    eco: "B21",
    difficulty: "Very Hard"
  },
  {
    name: "King's Pawn-Centre Gambit Accepted-Danish Gambit-Rosentreter Variation",
    fen: "rnb1kbnr/pppp1ppp/6q1/8/3P4/5B2/PP3P1P/RNBQK1NR w KQkq - 2 7",
    moves: "e4 e5 d4 exd4 c3 Qe7 cxd4 Qxe4+ Be2 Qxg2 Bf3 Qg6",
    eco: "C21",
    difficulty: "Very Hard"
  },
  {
    name: "King's Pawn-King's Bishop's Gambit-Lopez-Gianutio Countergambit-Hein Variation",
    fen: "rnbk1bnr/pppp2pp/8/8/2B1pp1q/2N5/PPPPQ1PP/R1BK2NR w - - 2 7",
    moves: "e4 e5 f4 exf4 Bc4 f5 Qe2 Qh4+ Kd1 fxe4 Nc3 Kd8",
    eco: "C33",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-Main Line-Italian Variation",
    fen: "r2qk2r/2p2ppp/p1n1b3/1pbpP3/4n3/1BP2N2/PP3PPP/RNBQ1RK1 w kq - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 c3 Bc5",
    eco: "C82",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-Main Line-Berlin Variation",
    fen: "r2qkb1r/2p2ppp/p1n1b3/1pnpP3/8/1BP2N2/PP3PPP/RNBQ1RK1 w kq - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 c3 Nc5",
    eco: "C82",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-Evans Gambit Accepted-MacDonnell Defence-Normal Position",
    fen: "r1bqk1nr/ppp2ppp/1bnp4/8/2BPP3/5N2/P4PPP/RNBQ1RK1 w kq - 1 9",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Bc5 O-O d6 d4 exd4 cxd4 Bb6",
    eco: "C51",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Evans Gambit Accepted-MacDonnell Defence-Normal/Main Line",
    fen: "r1bqk1nr/ppp2ppp/1bnp4/8/2BPP3/5N2/P4PPP/RNBQ1RK1 w kq - 1 9",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Bc5 d4 exd4 O-O d6 cxd4 Bb6",
    eco: "C51",
    difficulty: "Very Hard"
  },
  {
    name: "4 Knights Game-Double Ruy Lopez-Symmetrical Variation-Metger Unpin",
    fen: "r1b2rk1/ppp1qppp/2np1n2/1B2p1B1/4P3/2PP1N2/P1P2PPP/R2Q1RK1 w - - 1 9",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Bxc3 bxc3 Qe7",
    eco: "C49",
    difficulty: "Very Hard"
  },
  {
    name: "Petrov's Defence-Classical Attack-Marshall Variation-Tarrasch Variation",
    fen: "rn1q1rk1/ppp2ppp/3b4/3p4/2PPn1b1/3B1N2/PP3PPP/RNBQ1RK1 w - - 1 9",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Bd6 O-O O-O c4 Bg4",
    eco: "C42",
    difficulty: "Very Hard"
  },
  {
    name: "Petrov's Defence-Classical Attack-Marshall Variation-Staunton Variation",
    fen: "rnbq1rk1/pp3ppp/2pb4/3p4/2PPn3/3B1N2/PP3PPP/RNBQ1RK1 w - - 0 9",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Bd6 O-O O-O c4 c6",
    eco: "C42",
    difficulty: "Very Hard"
  },
  {
    name: "French Defence-Winawer Variation-Alekhine Gambit-Alatortsev Variation",
    fen: "r1bq1rk1/ppp1bppp/2n1pn2/8/3PN3/P5N1/1PP1BPPP/R1BQK2R w KQ - 5 9",
    moves: "e4 e6 d4 d5 Nc3 Bb4 Ne2 dxe4 a3 Be7 Nxe4 Nf6 N2g3 O-O Be2 Nc6",
    eco: "C15",
    difficulty: "Very Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Albin-Alekhine-Chatard Attack-Albin-Chatard Gambit",
    fen: "rnb1k2r/pppn1ppp/4p3/3pP1q1/3P4/2N5/PPP2PP1/R2QKBNR w KQkq - 0 8",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 h4 Bxg5 hxg5 Qxg5",
    eco: "C13",
    difficulty: "Very Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Burn Variation-Main Line",
    fen: "rnbq1rk1/ppp2ppp/4pb2/8/3PN3/5N2/PPP2PPP/R2QKB1R w KQ - 2 8",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 dxe4 Nxe4 Be7 Bxf6 Bxf6 Nf3 O-O",
    eco: "C11",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Orthodox Defence-Classical Variation-Rubinstein Attack",
    fen: "r1bq1rk1/pp1nbppp/2p1pn2/3p2B1/2PP4/2N1PN2/PPQ2PPP/2R1KB1R b K - 1 8",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 c6 Qc2",
    eco: "D64",
    difficulty: "Very Hard"
  },
  {
    name: "Nimzo-Indian Defence-Berlin Variation-Pirc Gambit-Macieja System",
    fen: "rnbq1rk1/p2p1ppp/1p2pn2/2b5/2P2B2/P1N2N2/1PQ1PPPP/R3KB1R b KQ - 1 8",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 c5 dxc5 O-O a3 Bxc5 Nf3 b6 Bf4",
    eco: "E39",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-4 Pawns Attack-Fluid Attack-Exchange Variation",
    fen: "r1bq1rk1/pp2ppbp/2np1np1/8/2PNPP2/2N1B3/PP2B1PP/R2QK2R b KQ - 2 9",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Be2 c5 Nf3 cxd4 Nxd4 Nc6 Be3",
    eco: "E79",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Aronin-Taimanov Attack-Bayonet Attack-Yepishin's Line",
    fen: "r1bq1rk1/ppp1npbp/3p2p1/3Pp2n/1PP1P3/2N2N2/P1Q1BPPP/R1B2RK1 b - - 2 10",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 b4 Nh5 Qc2",
    eco: "E97",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Aronin-Taimanov Attack-Bayonet Attack-Sokolov's Line",
    fen: "r1bq1rk1/ppp1npbp/3p2p1/3Pp2n/1PP1P3/2N2N2/P3BPPP/R1BQR1K1 b - - 2 10",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 b4 Nh5 Re1",
    eco: "E97",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Orthodox Variation-Aronin-Taimanov Attack-Neo-Classical Line",
    fen: "r1bq1rk1/pppnnpbp/3p2p1/3Pp3/2P1P3/2N1B3/PP2BPPP/R2QNRK1 b - - 4 10",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7 Be3",
    eco: "E99",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Karlsbad Variation-Panno Variation-Korchnoi Line",
    fen: "1rbq1rk1/2p1ppbp/p1np1np1/1p6/2PP4/2N1B1PP/PP1NPPB1/R2Q1RK1 b - - 1 10",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 Nc6 O-O a6 h3 Rb8 Be3 b5 Nd2",
    eco: "E63",
    difficulty: "Very Hard"
  },
  {
    name: "Grünfeld Defence-Russian Variation-Smyslov Variation-Main Line",
    fen: "rn1q1rk1/pppnppbp/6p1/8/3PP1b1/1QN1BN2/PP3PPP/R3KB1R b KQ - 4 9",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 dxc4 Qxc4 O-O e4 Bg4 Be3 Nfd7 Qb3",
    eco: "D99",
    difficulty: "Very Hard"
  },
  {
    name: "Philidor's Defence-Lion Variation-Larobok Variation-Forcing Line",
    fen: "r1bq2k1/pppnbrpp/3pNn2/4p3/3PP3/2N5/PPP2PPP/R1BQK2R b KQ - 1 8",
    moves: "e4 e5 Nf3 d6 d4 Nf6 Nc3 Nbd7 Bc4 Be7 Ng5 O-O Bxf7+ Rxf7 Ne6",
    eco: "C41",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Modern Steinitz Defence-Noah's Ark Trap",
    fen: "r1bqkbnr/2p2ppp/p2p4/1p6/3QP3/1B6/PPP2PPP/RNB1K2R b KQkq - 0 8",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 d4 b5 Bb3 exd4 Nxd4 Nxd4 Qxd4",
    eco: "C71",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Breyer Defence-Quiet Variation",
    fen: "rnbq1rk1/2p1bppp/p2p1n2/1p2p3/4P3/1BPP1N1P/PP3PP1/RNBQR1K1 b - - 0 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 h3 Nb8 d3",
    eco: "C94",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Breyer Variation-Quiet Variation",
    fen: "rnbq1rk1/2p1bppp/p2p1n2/1p2p3/4P3/1BPP1N1P/PP3PP1/RNBQR1K1 b - - 0 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Nb8 d3",
    eco: "C88/C94",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-Main Line-Howell Attack",
    fen: "r2qkb1r/2p2ppp/p1n1b3/1p1pP3/4n3/1B3N2/PPP1QPPP/RNB2RK1 b kq - 2 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 Qe2",
    eco: "C81",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Evans Gambit Accepted-Main Line-Waller Attack",
    fen: "r1bqk1nr/ppp2ppp/2np4/b7/2BpP3/1QP2N2/P4PPP/RNB2RK1 b kq - 1 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 O-O d6 d4 exd4 Qb3",
    eco: "C52",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-2 Knights Defence-Koltanowski Variation-Rosentreter Variation",
    fen: "r1bqk2r/pppp1p2/5n1p/4p1p1/2BnPP1B/8/PPP3PP/RN1Q1RK1 b kq - 0 9",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 O-O Bc5 d4 Bxd4 Nxd4 Nxd4 Bg5 h6 Bh4 g5 f4",
    eco: "C55",
    difficulty: "Very Hard"
  },
  {
    name: "Petrov's Defence-Classical Attack-Jaenisch Variation-Main Line",
    fen: "r1bqk2r/ppp1bppp/8/3p4/1nPPn3/5N2/PP2BPPP/RNBQ1RK1 b kq - 2 9",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Be7 O-O Nc6 c4 Nb4 Be2",
    eco: "C42",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Exchange Variation-Symmetrical Line-Trifunovic Variation",
    fen: "r2qk2r/pp3ppp/2n1pn2/3p1b2/1b1P1B2/1QN1PN2/PP3PPP/R3KB1R w KQkq - 2 9",
    moves: "d4 d5 c4 c6 Nf3 Nf6 cxd5 cxd5 Nc3 Nc6 Bf4 Bf5 e3 e6 Qb3 Bb4",
    eco: "D14",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Prague Variation-Main Line-Classical Variation",
    fen: "r1bq1rk1/pp2bppp/2n2n2/2pp4/3P4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 5 9",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 Nf6 Bg2 Be7 O-O O-O",
    eco: "D34",
    difficulty: "Very Hard"
  },
  {
    name: "Nimzo-Indian Defence-3 Knights Variation-Romanishin Variation-English Hybrid",
    fen: "rnbq1rk1/pp3ppp/4p3/3n4/1b1N4/2N3P1/PP2PPBP/R1BQK2R w KQ - 0 9",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Nf3 c5 g3 O-O Bg2 cxd4 Nxd4 d5 cxd5 Nxd5",
    eco: "E21",
    difficulty: "Very Hard"
  },
  {
    name: "Nimzo-Indian Defence-Noa Variation-Main Line-San Remo Variation",
    fen: "r1bqk2r/ppp2ppp/2n5/3pp3/2PPn3/P3P3/1PQ2PPP/R1B1KBNR w KQkq - 0 9",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qc2 d5 a3 Bxc3+ Qxc3 Ne4 Qc2 Nc6 e3 e5",
    eco: "E37",
    difficulty: "Very Hard"
  },
  {
    name: "Grünfeld Defence-Exchange Variation-Classical Variation-Simagin's Lesser Variation",
    fen: "rnbq1rk1/p1p1ppbp/1p4p1/8/2BPP3/2P5/P3NPPP/R1BQK2R w KQ - 0 9",
    moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 Bc4 O-O Ne2 b6",
    eco: "D86",
    difficulty: "Very Hard"
  },
  {
    name: "Grünfeld Defence-Exchange Variation-Classical Variation-Spassky Variation",
    fen: "rnbq1rk1/pp2ppbp/6p1/2p5/2BPP3/2P5/P3NPPP/R1BQK2R w KQ - 0 9",
    moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 Bc4 O-O Ne2 c5",
    eco: "D87",
    difficulty: "Very Hard"
  },
  {
    name: "Grünfeld Defence-Exchange Variation-Classical Variation-Simagin's Improved Variation",
    fen: "r1bq1rk1/ppp1ppbp/2n3p1/8/2BPP3/2P5/P3NPPP/R1BQK2R w KQ - 5 9",
    moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 Bc4 O-O Ne2 Nc6",
    eco: "D86",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Najdorf Variation-Argentine Variation",
    fen: "rnbqk2r/1p2bp2/p2ppn1p/6p1/3NPP1B/2N2Q2/PPP3PP/R3KB1R w KQkq - 0 10",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 e6 f4 Be7 Qf3 h6 Bh4 g5",
    eco: "B98",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defencen-Sozin Variation-Najdorf Variation-Browne Variation",
    fen: "rnb1k2r/1pq1bpp1/p2ppn1p/8/3NPP1B/2N2Q2/PPP3PP/R3KB1R w KQkq - 2 10",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 e6 f4 Be7 Qf3 h6 Bh4 Qc7",
    eco: "B98",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Classical Variation-Normal Line-Alekhine Line",
    fen: "r1bq1rk1/1p2ppbp/2np1np1/p7/4P3/1NN1B3/PPP1BPPP/R2Q1RK1 w - - 0 10",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be2 Bg7 Be3 Nc6 O-O O-O Nb3 a5",
    eco: "B74",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Richter-Rauzer Variation-Rauzer Attack-Neo-Modern Variation",
    fen: "r2qkb1r/1p1b1ppp/p1nppn2/6B1/3NP3/2N5/PPPQ1PPP/2KR1B1R w kq - 2 9",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bg5 e6 Qd2 a6 O-O-O Bd7",
    eco: "B67",
    difficulty: "Very Hard"
  },
  {
    name: "King's Bishop Opening-Berlin Defence-Urusov Gambit-Panov Variation",
    fen: "rnb1k2r/ppp1qppp/5n2/3P4/1bBp4/2P2N2/PP3PPP/RNBQK2R w KQkq - 1 7",
    moves: "e4 e5 Bc4 Nf6 d4 exd4 Nf3 d5 exd5 Bb4+ c3 Qe7+",
    eco: "C24",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Abbazia Defence-Botvinnik Line-Main Line",
    fen: "rnbqkb1r/p4ppp/2p5/3n4/2B2p2/5N2/PPPP2PP/RNBQK2R w KQkq - 2 8",
    moves: "e4 e5 f4 exf4 Nf3 d5 exd5 Nf6 Bb5+ c6 dxc6 bxc6 Bc4 Nd5",
    eco: "C36",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Marshall Counterattack-Herman Steiner Variation",
    fen: "r1bq1rk1/2p1bppp/p1n2n2/1p1P4/4p3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 0 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d5 exd5 e4",
    eco: "C89",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Zaitsev Variation",
    fen: "r1b2rk1/2pqbppp/p1np1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Qd7",
    eco: "C88/C92",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Schliemann Defence-Berger Variation-Möhring Variation",
    fen: "r1b1kbnr/ppp3pp/2N5/1B1q4/4p3/8/PPPP1PPP/R1BQK2R w KQkq - 1 8",
    moves: "e4 e5 Nf3 Nc6 Bb5 f5 Nc3 fxe4 Nxe4 d5 Nxe5 dxe4 Nxc6 Qd5",
    eco: "C63",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Schliemann Defence-Berger Variation-Classical Variation",
    fen: "r1b1kbnr/ppp3pp/2N5/1B4q1/4p3/8/PPPP1PPP/R1BQK2R w KQkq - 1 8",
    moves: "e4 e5 Nf3 Nc6 Bb5 f5 Nc3 fxe4 Nxe4 d5 Nxe5 dxe4 Nxc6 Qg5",
    eco: "C63",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Rio Gambit Accepted-l'Hermet Variation-Westerinen Line",
    fen: "r1bqkb1r/ppp2ppp/2p5/4P3/4n3/5N2/PPP2PPP/RNBQ1RK1 w kq - 1 8",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Ne4",
    eco: "C67",
    difficulty: "Very Hard"
  },
  {
    name: "4 Knights Game-Spanish Variation-Classical Defence-Bardeleben Variation",
    fen: "r1bq1rk1/pppp1ppp/2n2n2/1B2P3/1b1P1P2/2N5/PPP3PP/R1BQ1RK1 w - - 1 10",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bc5 O-O O-O Nxe5 Nxe5 d4 Bd6 f4 Nc6 e5 Bb4",
    eco: "C48",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-4 Knights Game-Leipzig Gambit-Oltimer Variation",
    fen: "r1bqk1nr/pppp2pp/6n1/4Pp2/1bBP4/2N2Q2/PPP2PPP/R1B1K2R w KQkq f6 0 9",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Nxe5 Nxe5 d4 Ng6 e5 Ng8 Bc4 Bb4 Qf3 f5",
    eco: "C46",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Indian Defence-Traditional Variation-Old Main Line-Main Line",
    fen: "rn1q1rk1/pbppbppp/1p2p3/8/2PP4/2Q2NP1/PP2PPBP/R1B2RK1 b - - 0 9",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Be7 O-O O-O Nc3 Ne4 Qc2 Nxc3 Qxc3",
    eco: "E19",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Normal Variation-4 Pawns Attack-Florentine Gambit",
    fen: "rnbq1rk1/pp3pbp/3p1np1/2ppP3/2P2P2/2N2N2/PP2B1PP/R1BQK2R b KQ - 0 9",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Be2 c5 d5 e6 Nf3 exd5 e5",
    eco: "E77",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Aronin-Taimanov Attack-Traditional Line-Benko Attack",
    fen: "r1bq1rk1/pppnn1bp/3p2p1/3Ppp2/2P1P1P1/2N2P2/PP2B2P/R1BQNRK1 b - - 0 11",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7 f3 f5 g4",
    eco: "E99",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Classical Variation-Alekhine Variation",
    fen: "r1bq1rk1/pp2ppbp/2np1np1/8/4P3/1NN5/PPP1BPPP/R1BQ1R1K b - - 7 9",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be2 Bg7 O-O O-O Nb3 Nc6 Kh1",
    eco: "B70",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Classical Variation-Battery Variation",
    fen: "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPPQBPPP/R4RK1 b - - 7 9",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be2 Bg7 Be3 Nc6 O-O O-O Qd2",
    eco: "B73",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Amsterdam Variation-Grigoriev Variation",
    fen: "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPPQBPPP/2KR3R b - - 7 9",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 Be2 Nc6 Qd2 O-O O-O-O",
    eco: "B72",
    difficulty: "Very Hard"
  },
  {
    name: "King's Gambit Declined-Falkbeer Countergambit Accepted-Charousek Gambit Accepted-Charousek Variation",
    fen: "rnb1kb1r/ppp3pp/8/3q1p2/4nPP1/8/PPPNQ2P/R1B1KBNR b KQkq - 0 8",
    moves: "e4 e5 f4 d5 exd5 e4 d3 Nf6 dxe4 Nxe4 Qe2 Qxd5 Nd2 f5 g4",
    eco: "C32",
    difficulty: "Very Hard"
  },
  {
    name: "King's Bishop's Gambit-Classical Defence-Lopez Variation-Grimm Attack",
    fen: "rnb1k1nr/ppp2pbp/3p4/4P1p1/2BP1p1q/2N5/PPP3PP/R1BQ1KNR b kq - 0 7",
    moves: "e4 e5 f4 exf4 Bc4 Qh4+ Kf1 g5 Nc3 Bg7 d4 d6 e5",
    eco: "C33",
    difficulty: "Very Hard"
  },
  {
    name: "King's Bishop's Gambit-Lopez Variation-McDonnell Defence-MacDonnell Attack",
    fen: "rnb1k2r/ppppnpbp/8/6p1/2BPPp1q/2N3P1/PPP4P/R1BQ1KNR b kq - 0 7",
    moves: "e4 e5 f4 exf4 Bc4 Qh4+ Kf1 g5 Nc3 Bg7 d4 Ne7 g3",
    eco: "C33",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Paris Attack-Allgaier Gambit-Walker Attack",
    fen: "rnbq1bnr/pppp1k2/7p/8/2B1PppP/8/PPPP2P1/RNBQK2R b KQ - 1 7",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ng5 h6 Nxf7 Kxf7 Bc4+",
    eco: "C39",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-Italian Variation-St. Petersburg Variation",
    fen: "r2qk2r/2p2ppp/p1n1b3/1pbpP3/4n3/1BP2N2/PP1N1PPP/R1BQ1RK1 b kq - 2 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 c3 Bc5 Nbd2",
    eco: "C82",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-Classical Defence-St. Petersburg Variation",
    fen: "r2qk2r/2p1bppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP1N1PPP/R1BQ1RK1 b kq - 2 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 c3 Be7 Nbd2",
    eco: "C83",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Centre Attack-Greco Gambit-Cracow Variation",
    fen: "r1bqk2r/pppp1ppp/2n2n2/8/1bBPP3/5N2/PP3PPP/RNBQ1K1R b kq - 2 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+ Kf1",
    eco: "C54",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Wilkes Barre Counterattack-Knight Sac Line-King March Line",
    fen: "r1bqk2r/pppp1Npp/2n5/4p3/2B1n3/4K3/PPPP2PP/RNBQ3R b kq - 1 7",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 Bc5 Nxf7 Bxf2+ Kxf2 Nxe4+ Ke3",
    eco: "C57",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Polerio Defence-Bishop Check Line-Bogoljubov Variation",
    fen: "r1bqkb1r/p4ppp/2p2n2/nB2p1N1/8/5Q2/PPPP1PPP/RNB1K2R b KQkq - 1 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6 bxc6 Qf3",
    eco: "C58",
    difficulty: "Very Hard"
  },
  {
    name: "French Defence-MacCutcheon Variation-Lasker Variation-Duras Variation",
    fen: "rnbq1k1r/ppp2pp1/4p2p/3pP3/3Pn1Q1/2P5/P1P2PPP/R1B1KBNR b KQ - 4 9",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Bb4 e5 h6 Bd2 Bxc3 bxc3 Ne4 Qg4 Kf8 Bc1",
    eco: "C12",
    difficulty: "Very Hard"
  },
  {
    name: "Alekhine Defence-Lasker's Attack-Mikenas Variation-Mikenas Gambit",
    fen: "rnbqkb1r/ppp2ppp/3p4/2PBP3/8/8/PP1P1PPP/R1BQK1NR b KQkq - 0 8",
    moves: "e4 Nf6 e5 Nd5 c4 Nb6 c5 Nd5 Bc4 e6 Nc3 d6 Nxd5 exd5 Bxd5",
    eco: "B02",
    difficulty: "Very Hard"
  },
  {
    name: "Alekhine Defence-Normal Variation-4 Pawns Attack-Ilyin-Genevsky Variation",
    fen: "r2qkb1r/ppp1p1pp/1nn1p3/2P5/3P2b1/5N2/PP4PP/RNBQKB1R b KQkq - 0 9",
    moves: "e4 Nf6 e5 Nd5 d4 d6 c4 Nb6 f4 dxe5 fxe5 Nc6 Nf3 Bg4 e6 fxe6 c5",
    eco: "B03",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Tarrasch Defence-Von Hennig-Schara Gambit-von Hennig Gambit",
    fen: "r2qkbnr/pp3ppp/2n1b3/3Q4/8/2N5/PP2PPPP/R1B1KBNR w KQkq - 1 8",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 cxd4 Qxd4 Nc6 Qd1 exd5 Qxd5 Be6",
    eco: "D32",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Neo-Orthodox Variation-Lasker Defence-Main Line",
    fen: "rnb2rk1/ppp1qpp1/4p2p/3p4/2PPn3/2N1PN2/PP3PPP/R2QKB1R w KQ - 0 9",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bh4 Ne4 Bxe7 Qxe7",
    eco: "D57",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Classical Variation-Rubinstein Attack-Karlsbad/Carlsbad Variation",
    fen: "r1bq1rk1/1p1nbppp/p1p1pn2/3p2B1/2PP4/2N1PN2/PPQ2PPP/2R1KB1R w K - 0 9",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 c6 Qc2 a6",
    eco: "D64",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Classical Variation-Rubinstein Attack-Wolf Variation",
    fen: "r1bq1rk1/pp1nbppp/2p1p3/3p2B1/2PPn3/2N1PN2/PPQ2PPP/2R1KB1R w K - 2 9",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 c6 Qc2 Ne4",
    eco: "D64",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Meran Variation-Meran Variation-Pirc Variation",
    fen: "r1bqkb1r/3n1ppp/p1p1pn2/8/1p1PP3/2NB1N2/PP3PPP/R1BQK2R w KQkq - 0 10",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Bd3 dxc4 Bxc4 b5 Bd3 a6 e4 b4",
    eco: "D48",
    difficulty: "Very Hard"
  },
  {
    name: "East Indian Defence-Catalan Opening-Main Line-Sokolsky/Traditional Variation",
    fen: "r2q1rk1/3nbppp/bpp1pn2/p2p4/2PP4/1P3NP1/PBQNPPBP/R4RK1 w - - 2 11",
    moves: "d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O Nbd7 Qc2 c6 Nbd2 b6 b3 a5 Bb2 Ba6",
    eco: "E09",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Orthodox Variation-Aronin-Taimanov Attack-Main/Traditional Line",
    fen: "r1bq1rk1/pppnn1bp/3p2p1/3Ppp2/2P1P3/2N2P2/PP2B1PP/R1BQNRK1 w - - 0 11",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7 f3 f5",
    eco: "E99",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Karlsbad Variation-Panno Variation-Blockade Line",
    fen: "r1bq1rk1/1p3pbp/p2p1np1/n1pPp3/2P5/2N3P1/PPQNPPBP/R1B2RK1 w - e6 0 11",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 Nc6 O-O a6 d5 Na5 Nd2 c5 Qc2 e5",
    eco: "E63",
    difficulty: "Very Hard"
  },
  {
    name: "Grünfeld Defence-Smyslov Variation-Main Line-Yugoslav Variation",
    fen: "rn1q1rk1/pp1nppbp/6p1/2p5/3PP1b1/1QN1BN2/PP3PPP/R3KB1R w KQ - 0 10",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 dxc4 Qxc4 O-O e4 Bg4 Be3 Nfd7 Qb3 c5",
    eco: "D99",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Smith-Morra Gambit Accepted-Paulsen Formation-Larsen Defence",
    fen: "r1b1k1nr/1pqp1ppp/p1nbp3/8/2B1P3/2N2N2/PP2QPPP/R1B2RK1 w kq - 4 9",
    moves: "e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 e6 Bc4 a6 O-O Qc7 Qe2 Bd6",
    eco: "B21",
    difficulty: "Very Hard"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit Accepted-Sozin Formation",
    fen: "r1bqkbnr/5ppp/p1npp3/1p6/2B1P3/2N2N2/PP2QPPP/R1B2RK1 w kq - 0 9",
    moves: "e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 e6 Bc4 d6 O-O a6 Qe2 b5",
    eco: "B21",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Najdorf Variation-Traditional Line-Main Line",
    fen: "r1b1k2r/1pqnbppp/p2ppn2/6B1/3NPP2/2N2Q2/PPP3PP/2KR1B1R w kq - 5 10",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 e6 f4 Be7 Qf3 Qc7 O-O-O Nbd7",
    eco: "B99",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Centre Attack-North Spanish Variation-Basque Gambit",
    fen: "r1bqk2r/1pppbppp/p1n5/4P3/B3n3/2p2N2/PP3PPP/RNBQ1RK1 w kq - 0 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 d4 exd4 e5 Ne4 c3 dxc3",
    eco: "C84",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Breyer Defence-Borisenko Variation/Zaitsev Hybrid",
    fen: "r1bq1rk1/2pnbppp/p2p1n2/1p2p3/3PP3/1BP2N1P/PP3PP1/RNBQR1K1 w - - 1 11",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 h3 Nb8 d4 Nbd7",
    eco: "C95",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Breyer Variation-Borisenko Variation",
    fen: "r1bq1rk1/2pnbppp/p2p1n2/1p2p3/3PP3/1BP2N1P/PP3PP1/RNBQR1K1 w - - 1 11",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Nb8 d4 Nbd7",
    eco: "C88/C95",
    difficulty: "Very Hard"
  },
  {
    name: "4 Knights Game-Double Ruy Lopez-Pillsbury Variation-Blake Variation",
    fen: "r1b2rk1/pp2nppp/2pq1n2/3pp1B1/1b2P2N/1BNP4/PPP2PPP/R2Q1RK1 w - - 2 11",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Ne7 Nh4 c6 Bc4 d5 Bb3 Qd6",
    eco: "C49",
    difficulty: "Very Hard"
  },
  {
    name: "4 Knights Game-Scotch Variation Accepted-Paulsen Variation-Berger Variation",
    fen: "r1b1k2r/p1ppqppp/5n2/2p5/1b1QP3/2N2P2/PPP3PP/R1B1KB1R w KQkq - 0 9",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Qd4 Qe7 f3 c5",
    eco: "C47",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Czech Defence-Dutch System-Main Line",
    fen: "rn1q1rk1/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P2QPPP/R1B2RK1 b - - 4 9",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 e3 e6 Bxc4 Bb4 O-O O-O Qe2",
    eco: "D19",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Prague Variation-Classical Variation-Carlsbad Variation",
    fen: "r1bq1rk1/pp2bppp/2n2n2/2pp2B1/3P4/2N2NP1/PP2PPBP/R2Q1RK1 b - - 6 9",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 Nf6 Bg2 Be7 O-O O-O Bg5",
    eco: "D34",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Ryder Gambit-Halosar Trap",
    fen: "rn2kb1r/ppp1pppp/5n2/1N6/1q4b1/4BQ2/PPP3PP/2KR1BNR b kq - 5 8",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Qxf3 Qxd4 Be3 Qb4 O-O-O Bg4 Nb5",
    eco: "D00",
    difficulty: "Very Hard"
  },
  {
    name: "Indian Defence-Classical Variation-Traditional Variation-Full Line",
    fen: "rnbq1rk1/1p3pbp/p2p1np1/2pP4/P3P3/2N2N2/1P2BPPP/R1BQ1RK1 b - - 0 10",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4 g6 Nf3 Bg7 Be2 O-O O-O a6 a4",
    eco: "A74",
    difficulty: "Very Hard"
  },
  {
    name: "Indian Defence-Main Line-Czerniak Defence-Tal Line",
    fen: "rnbqr1k1/pp3pbp/3p1np1/2pP4/4P3/2N5/PP1NBPPP/R1BQ1RK1 b - - 7 10",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4 g6 Nf3 Bg7 Be2 O-O O-O Re8 Nd2",
    eco: "A77",
    difficulty: "Very Hard"
  },
  {
    name: "Nimzo-Indian Defence-Romanovsky Gambit-San Remo Variation-Ståhlberg Variation",
    fen: "r1bqk2r/pp1p2pp/2n1p3/2n2p2/1bP5/2N2NP1/PPQBPP1P/R3KB1R b KQkq - 0 9",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 Qb3 c5 dxc5 Nc6 Nf3 Ne4 Bd2 Nxc5 Qc2 f5 g3",
    eco: "E23",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Alapin Variation-Barmen Defence-Milner-Barry Attack",
    fen: "r1b1k1nr/pp3ppp/2n5/3qp3/1b1P4/2N2N2/PP2BPPP/R1BQK2R b KQkq - 3 8",
    moves: "e4 c5 c3 d5 exd5 Qxd5 d4 cxd4 cxd4 Nc6 Nf3 e5 Nc3 Bb4 Be2",
    eco: "B22",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Modern Scheveningen Variation-Main Line",
    fen: "r2q1rk1/pp1bbppp/2nppn2/8/4PP2/1NN1B3/PPP1B1PP/R2Q1RK1 b - - 2 10",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Be2 Nc6 O-O Be7 Be3 O-O f4 Bd7 Nb3",
    eco: "B83",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Scheveningen Variation-Delayed Keres Attack-Perenyi Gambit",
    fen: "rnbqkb1r/1p3p1p/p2p1np1/4pNP1/4P3/2N1B3/PPP2P1P/R2QKB1R b KQkq - 0 9",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Be3 a6 g4 e5 Nf5 g6 g5",
    eco: "B81",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Yugoslav Attack-Main Line",
    fen: "r1bq1rk1/pp2ppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/R3K2R b KQ - 4 9",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2 Nc6 Bc4",
    eco: "B77",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Yugoslav Attack-Panov Variation",
    fen: "r1bq1rk1/pp2ppbp/2np1np1/8/3NP1P1/2N1BP2/PPPQ3P/R3KB1R b KQ - 0 9",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2 Nc6 g4",
    eco: "B76",
    difficulty: "Very Hard"
  },
  {
    name: "Caro-Kann Defence-Mindeno Variation-Exchange Line-Boleslavsky Variation",
    fen: "rn2kbnr/pp3ppp/2p1p3/8/3qN3/3B1Q1P/PPP2PP1/R1B1K2R b KQkq - 1 8",
    moves: "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3 e6 d4 dxe4 Nxe4 Qxd4 Bd3",
    eco: "B11",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Yates Variation-Bogoljubov Variation-Short Attack",
    fen: "r2q1rk1/2p1bppp/p1np1n2/1p2p3/P2PP1b1/1BP2N2/1P3PPP/RNBQR1K1 b - - 0 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 d4 Bg4 a4",
    eco: "C91",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Evans Gambit Accepted-MacDonnell Defence-Harding Variation",
    fen: "r1bqk1nr/pppp1ppp/2n5/8/1bBPP3/5N2/P2B1PPP/RN1QK2R b KQkq - 2 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Bc5 d4 exd4 cxd4 Bb4+ Bd2",
    eco: "C51",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Giuoco Pianissimo-Canal Variation-Normal Variation",
    fen: "r1bqk2r/ppp1npp1/3p3p/2bNp3/2BPP3/2P2N2/PP3PPP/R2QK2R b KQkq - 0 10",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 Nc3 Nf6 d3 d6 Bg5 h6 Bxf6 Qxf6 Nd5 Qd8 c3 Ne7 d4",
    eco: "C50",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Bishop Check Line-Suhle Defence-Steinitz Variation",
    fen: "r1bqkb1r/p4pp1/2p2n1p/n3p3/8/7N/PPPPBPPP/RNBQK2R b KQkq - 1 9",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6 bxc6 Be2 h6 Nh3",
    eco: "C59",
    difficulty: "Very Hard"
  },
  {
    name: "Petrov's Defence-Classical Attack-Jaenisch Variation-Browne Attack",
    fen: "r1bqk2r/ppp1bppp/8/3P4/1n1Pn3/3B1N2/PP3PPP/RNBQ1RK1 b kq - 0 9",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Be7 O-O Nc6 c4 Nb4 cxd5",
    eco: "C42",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-Petrov's Defence-Classical Attack-Lasker Variation-Chigorin Variation",
    fen: "r2qk2r/ppp1bppp/2n5/3p4/2PPn1b1/3B1N2/PP3PPP/RNBQR1K1 b kq - 0 9",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Be7 O-O Nc6 Re1 Bg4 c4",
    eco: "C42",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Czech Defence-Krause Attack-Carlsbad Variation",
    fen: "r3kb1r/ppqn1ppp/2p2n2/4pb2/P1NP4/2N3P1/1P2PP1P/R1BQKB1R w KQkq - 0 9",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 Ne5 Nbd7 Nxc4 Qc7 g3 e5",
    eco: "D17",
    difficulty: "Very Hard"
  },
  {
    name: "Indian Defence-Traditional Variation-Main Line-Czerniak Defence",
    fen: "rnbqr1k1/pp3pbp/3p1np1/2pP4/4P3/2N2N2/PP2BPPP/R1BQ1RK1 w - - 6 10",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4 g6 Nf3 Bg7 Be2 O-O O-O Re8",
    eco: "A76",
    difficulty: "Very Hard"
  },
  {
    name: "Nimzo-Indian Defence-Sämisch Variation-Main Line-Capablanca Variation",
    fen: "r1bqnrk1/p2p1ppp/1pn1p3/2p5/2PPP3/P1PB4/4NPPP/R1BQK2R w KQ - 1 10",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 O-O e3 c5 Bd3 Nc6 Ne2 b6 e4 Ne8",
    eco: "E29",
    difficulty: "Very Hard"
  },
  {
    name: "Grünfeld Defence-Exchange Variation-Classical Variation-Larsen Variation",
    fen: "rnb2rk1/pppqppbp/6p1/8/2BPP3/2P5/P3NPPP/R1BQK2R w KQ - 5 9",
    moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 Bc4 O-O Ne2 Qd7",
    eco: "D86",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Classical Attack-Alekhine Variation",
    fen: "r1bq1rk1/1p2ppbp/2np1np1/p7/4P3/1NN1B3/PPP1BPPP/R2Q1RK1 w - - 0 10",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 Be2 Nc6 O-O O-O Nb3 a5",
    eco: "B74",
    difficulty: "Very Hard"
  },
  {
    name: "Old Sicilian Defence-Rauzer Variation-Classical Variation-Geller Variation",
    fen: "r1bq1rk1/pp2bppp/2np1n2/4p1B1/3NPP2/2N5/PPPQ2PP/2KR1B1R w - - 0 10",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Bg5 e6 Qd2 Be7 O-O-O O-O f4 e5",
    eco: "B64",
    difficulty: "Very Hard"
  },
  {
    name: "King's Gambit Declined-Classical Variation-Blackburne Variation-Svenonius Variation",
    fen: "r2qk2r/ppp2ppp/2np1n2/2b5/2B1Pp2/2NP1Q1P/PPP3P1/R1B1K2R w KQkq - 0 9",
    moves: "e4 e5 f4 Bc5 Nf3 d6 Nc3 Nf6 Bc4 Nc6 d3 Bg4 h3 Bxf3 Qxf3 exf4",
    eco: "C30",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-Latvian Countergambit-Mayet Attack-Behting Variation",
    fen: "rnb1kb1N/ppp3pp/5n2/3p4/2B1p3/8/PPPP1PqP/RNBQKR2 w Qq - 1 8",
    moves: "e4 e5 Nf3 f5 Bc4 fxe4 Nxe5 Qg5 Nf7 Qxg2 Rf1 d5 Nxh8 Nf6",
    eco: "C40",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Polerio Defence-Kieseritsky Variation-Maróczy Variation",
    fen: "r1bqk2r/ppp1bpp1/5n1p/3P4/2P1p3/5N2/PPP1QPPP/RNB1K2R w KQkq - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 d3 h6 Nf3 e4 Qe2 Nxc4 dxc4 Be7",
    eco: "C58",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Modern Variation-Pillsbury Variation-Pillsbury Attack",
    fen: "rn1q1rk1/pbp1bppp/1p3n2/3pN1B1/3P4/2NBP3/PP3PPP/R2QK2R b KQ - 1 9",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 b6 Bd3 Bb7 cxd5 exd5 Ne5",
    eco: "D55",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Neo-Orthodox Variation-Lasker Defence-Teichmann Variation",
    fen: "rnb2rk1/ppp1qpp1/4p2p/3p4/2PPn3/2N1PN2/PPQ2PPP/R3KB1R b KQ - 1 9",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bh4 Ne4 Bxe7 Qxe7 Qc2",
    eco: "D56",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Orthodox Defence-Main Line-Capablanca Variation",
    fen: "r1bq1rk1/p1pnbppp/1p3n2/1B1p2B1/3P4/2N1PN2/PP3PPP/2RQK2R b K - 1 9",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 b6 cxd5 exd5 Bb5",
    eco: "D63",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Orthodox Defence-Main Line-Pillsbury Attack",
    fen: "r1bq1rk1/p1pnbppp/1p3n2/3p2B1/3P4/2NBPN2/PP3PPP/2RQK2R b K - 1 9",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 b6 cxd5 exd5 Bd3",
    eco: "D63",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Rubinstein Attack-Karlsbad Variation-Grünfeld Variation",
    fen: "r1bq1rk1/1p1nbppp/p1p1pn2/3p2B1/2PP4/P1N1PN2/1PQ2PPP/2R1KB1R b K - 0 9",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 c6 Qc2 a6 a3",
    eco: "D64",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Meran Variation-Meran Variation-Reynolds' Variation",
    fen: "r1bqkb1r/3n1ppp/p3pn2/1ppP4/4P3/2NB1N2/PP3PPP/R1BQK2R b KQkq - 0 10",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Bd3 dxc4 Bxc4 b5 Bd3 a6 e4 c5 d5",
    eco: "D48",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Meran Variation-Meran Variation-Classical/Old Main Line",
    fen: "r1bqkb1r/3n1ppp/p3pn2/1pp1P3/3P4/2NB1N2/PP3PPP/R1BQK2R b KQkq - 0 10",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Bd3 dxc4 Bxc4 b5 Bd3 a6 e4 c5 e5",
    eco: "D48",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Bogoljubov Defence-Kloss Attack",
    fen: "rnbq1rk1/ppp1ppbp/5np1/8/2BP4/2N2N2/PPP3PP/R1BQ1R1K b - - 5 8",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 g6 Bc4 Bg7 O-O O-O Kh1",
    eco: "D00",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Bogoljubov Defence-Studier Attack",
    fen: "rnbq1rk1/ppp1ppbp/5np1/8/2BP4/2N2N2/PPP3PP/R1B1QRK1 b - - 5 8",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 g6 Bc4 Bg7 O-O O-O Qe1",
    eco: "D00",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Pawn-Blackmar-Diemer Gambit-Bogolubov Variation-Studier Variation",
    fen: "rnbq1rk1/ppp1ppbp/5np1/8/2BP4/2N2N2/PPP3PP/R1B1QRK1 b - - 5 8",
    moves: "d4 d5 Nc3 Nf6 e4 dxe4 f3 exf3 Nxf3 g6 Bc4 Bg7 O-O O-O Qe1",
    eco: "D00",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Sämisch Variation-Keres Variation",
    fen: "rnbqk2r/pp3ppp/4p3/2Pn4/8/P1P2P2/4P1PP/R1BQKBNR b KQkq - 0 8",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 c5 f3 d5 cxd5 Nxd5 dxc5",
    eco: "E25",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Pawn-King's Indian Defence-Normal Variation-6 Pawns Attack",
    fen: "r1bq1rk1/pp4bp/2nppnp1/2p5/2P1PPPP/2N5/PP2B3/R1BQK1NR b KQ - 0 10",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f4 O-O Be2 c5 d5 e6 dxe6 fxe6 g4 Nc6 h4",
    eco: "E77",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Canal-Sokolsky Attack-Main Line-Bronstein/Haag Gambit",
    fen: "r3kb1r/pp1qpppp/2np1n2/2p5/3PP3/2P2N2/PP3PPP/RNBQ1RK1 b kq - 0 7",
    moves: "e4 c5 Nf3 d6 Bb5+ Bd7 Bxd7+ Qxd7 O-O Nc6 c3 Nf6 d4",
    eco: "B52",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Classical Attack-Richter Variation",
    fen: "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1B3/PPPQBPPP/R4RK1 b - - 7 9",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 Be2 Nc6 O-O O-O Qd2",
    eco: "B73",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Yugoslav Attack-Rauser/Rauzer/Modern Line",
    fen: "r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/2KR1B1R b - - 4 9",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2 Nc6 O-O-O",
    eco: "B76",
    difficulty: "Very Hard"
  },
  {
    name: "King's Bishop's Gambit-Lopez Variation-McDonnell Attack-Fraser Variation",
    fen: "rnb1k1nr/pppp1pbp/8/6p1/2B1P2q/2N2Qp1/PPPP3P/R1B2KNR b kq - 1 7",
    moves: "e4 e5 f4 exf4 Bc4 Qh4+ Kf1 g5 Nc3 Bg7 g3 fxg3 Qf3",
    eco: "C33",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Cunningham Gambit-Bertin Gambit-3 Pawns Gambit",
    fen: "rnbqk1nr/pppp1ppp/8/8/2B1P2b/5N2/PPPP3p/RNBQ1R1K b kq - 1 7",
    moves: "e4 e5 f4 exf4 Nf3 Be7 Bc4 Bh4+ g3 fxg3 O-O gxh2+ Kh1",
    eco: "C35",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Borisenko Variation-Simagin Variation",
    fen: "r1bq1rk1/2pnbppp/p2p1n2/1p2p3/3PP2N/1BP4P/PP3PP1/RNBQR1K1 b - - 2 11",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 h3 Nb8 d4 Nbd7 Nh4",
    eco: "C95",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Breyer Variation-Borisenko Variation-Simagin Variation",
    fen: "r1bq1rk1/2pnbppp/p2p1n2/1p2p3/3PP2N/1BP4P/PP3PP1/RNBQR1K1 b - - 2 11",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Nb8 d4 Nbd7 Nh4",
    eco: "C88/C95",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-Main Line-Bernstein Variation-Luther Line",
    fen: "r2qk2r/2p2ppp/p1n1b3/1pbpP3/4n3/1B3N2/PPPN1PPP/R1B1QRK1 b kq - 4 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 Nbd2 Bc5 Qe1",
    eco: "C80",
    difficulty: "Very Hard"
  },
  {
    name: "Evans Gambit Accepted-MacDonnell Defence-Main Line-Morphy Attack",
    fen: "r1bqk1nr/ppp2ppp/1bnp4/8/2BPP3/2N2N2/P4PPP/R1BQ1RK1 b kq - 2 9",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Bc5 d4 exd4 O-O d6 cxd4 Bb6 Nc3",
    eco: "C51",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Classical Variation-Carlsbad Variation-Endgame Variation",
    fen: "r2q1rk1/pp2bppp/2n1bn2/2pp2B1/3P4/2N2NP1/PP2PPBP/R2Q1RK1 w - - 7 10",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 Nf6 Bg2 Be7 O-O O-O Bg5 Be6",
    eco: "D34",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Classical Variation-Carlsbad Variation-Advance Variation",
    fen: "r1bq1rk1/pp2bppp/2n2n2/3p2B1/2pP4/2N2NP1/PP2PPBP/R2Q1RK1 w - - 0 10",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 Nf6 Bg2 Be7 O-O O-O Bg5 c4",
    eco: "D34",
    difficulty: "Very Hard"
  },
  {
    name: "Indian Defence-Pawn Storm Variation-4 Pawns Attack-Main Line",
    fen: "rnbqr1k1/pp3pbp/3p1np1/2pP4/4PP2/2N2N2/PP2B1PP/R1BQK2R w KQ - 5 10",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4 g6 f4 Bg7 Nf3 O-O Be2 Re8",
    eco: "A69",
    difficulty: "Very Hard"
  },
  {
    name: "Indian Defence-Traditional Variation-Full Line-Argentine Counterattack",
    fen: "rn1q1rk1/1p3pbp/p2p1np1/2pP4/P3P1b1/2N2N2/1P2BPPP/R1BQ1RK1 w - - 1 11",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 e4 g6 Nf3 Bg7 Be2 O-O O-O a6 a4 Bg4",
    eco: "A75",
    difficulty: "Very Hard"
  },
  {
    name: "Indian Defence-Modern Benoni Defence-Fianchetto Variation-Hastings Defence",
    fen: "r1bq1rk1/1p1n1pbp/p2p1np1/2pP4/P7/2N2NP1/1P2PPBP/R1BQ1RK1 w - - 1 11",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 Nf3 g6 g3 Bg7 Bg2 O-O O-O a6 a4 Nbd7",
    eco: "A63",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Pawn-Nimzo-Indian Defence-Sämisch Variation-Botvinnik Variation",
    fen: "rnbq1rk1/pp3ppp/4p3/2pn4/3P4/P1P1PP2/6PP/R1BQKBNR w KQ - 0 9",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 c5 f3 d5 e3 O-O cxd5 Nxd5",
    eco: "E24",
    difficulty: "Very Hard"
  },
  {
    name: "Grünfeld Defence-Exchange Variation-Classical Variation-Simagin's Variation",
    fen: "rn1q1rk1/p1p1ppbp/bp4p1/8/2BPP2P/2P5/P3NPP1/R1BQK2R w KQ - 1 10",
    moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 Bc4 O-O Ne2 b6 h4 Ba6",
    eco: "D86",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Leonhardt Variation-Main Line-Sherbakov Variation",
    fen: "r1bq1rk1/p3bppp/1p1ppn2/n7/3NPP2/1BN1B3/PPP3PP/R2Q1RK1 w - - 0 11",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Bc4 Nc6 Be3 Be7 Bb3 O-O O-O Na5 f4 b6",
    eco: "B89",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Classical Variation-Normal Line-Maroczy Line",
    fen: "r2q1rk1/pp2ppbp/3pbnp1/n7/4PP2/1NN1B3/PPP1B1PP/R2Q1RK1 w - - 1 11",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be2 Bg7 Be3 Nc6 O-O O-O Nb3 Be6 f4 Na5",
    eco: "B74",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Yugoslav Attack-Main Line-Byrne Variation",
    fen: "r1bq1rk1/1p2ppbp/2np1np1/p7/2BNP3/2N1BP2/PPPQ2PP/R3K2R w KQ - 0 10",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2 Nc6 Bc4 a5",
    eco: "B77",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Yugoslav Attack-Main Line-Sosonko Variation",
    fen: "r1bq1rk1/pp1nppbp/2np2p1/8/2BNP3/2N1BP2/PPPQ2PP/R3K2R w KQ - 5 10",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2 Nc6 Bc4 Nd7",
    eco: "B77",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Yugoslav Attack-Panov Variation-Veresov Variation",
    fen: "r1bq1rk1/pp2ppbp/2n2np1/3p4/3NP1P1/2N1BP2/PPPQ3P/R3KB1R w KQ - 0 10",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2 Nc6 g4 d5",
    eco: "B76",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Taimanov Variation-Szén Variation-Hedgehog/Modern Line",
    fen: "r1bq1rk1/4bppp/ppnppn2/8/2P1P3/N1N5/PP2BPPP/R1BQ1RK1 w - - 0 11",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nb5 d6 c4 Nf6 N1c3 a6 Na3 Be7 Be2 O-O O-O b6",
    eco: "B44",
    difficulty: "Very Hard"
  },
  {
    name: "King's Gambit Declined-Charousek Gambit Accepted-Main Line-Tarrasch Variation",
    fen: "rn1q1rk1/ppp2ppp/8/2bP1b2/4nPP1/5N2/PPP1Q2P/RNB1KB1R w KQ - 1 9",
    moves: "e4 e5 f4 d5 exd5 e4 d3 Nf6 dxe4 Nxe4 Nf3 Bc5 Qe2 Bf5 g4 O-O",
    eco: "C32",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Berlin Defence-Anderssen Defence-Anderssen-Cordel Gambit",
    fen: "rnbqk2r/ppp2p1p/3b4/3PN3/2BP1npP/8/PPP3P1/RN1QK2R w KQkq - 0 10",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 Nf6 Bc4 d5 exd5 Bd6 d4 Nh5 Bxf4 Nxf4",
    eco: "C39",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Centre Attack-Greco Gambit-Anderssen Variation",
    fen: "r1bqk2r/ppp2ppp/2n5/1B1pP3/1b1Pn3/5N2/PP3PPP/RNBQK2R w KQkq - 1 9",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 e5 d5 Bb5 Ne4 cxd4 Bb4+",
    eco: "C54",
    difficulty: "Very Hard"
  },
  {
    name: "4 Knights Game-Spanish Variation-Rubinstein Countergambit-Maróczy Variation",
    fen: "r1bq1rk1/ppp2ppp/1b1p1n2/4p3/N3P3/3P1B2/PPP2PPP/R1BQ1RK1 w - - 2 10",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Nd4 Be2 Nxf3+ Bxf3 Bc5 O-O O-O d3 d6 Na4 Bb6",
    eco: "C48",
    difficulty: "Very Hard"
  },
  {
    name: "Petrov's Defence-Classical Attack-Lasker Variation-Berger Variation",
    fen: "r2qk2r/ppp1b1pp/2n5/3p1p2/3Pn1b1/2PB1N2/PP3PPP/RNBQR1K1 w kq - 0 10",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Be7 O-O Nc6 Re1 Bg4 c3 f5",
    eco: "C42",
    difficulty: "Very Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Steinitz Variation-Brodsky-Jones Variation",
    fen: "r1bq1rk1/pp1n2pp/2n1pp2/2bpP3/5PQ1/P1N2N2/1PP3PP/R1B1KB1R w KQ - 0 10",
    moves: "e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 f4 c5 dxc5 Nc6 a3 Bxc5 Qg4 O-O Nf3 f6",
    eco: "C11",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Keres Defence-Argentinian Gambit-Argentine Variation",
    fen: "r2qkbnr/pp2pppp/2n5/8/Q2P4/8/PP2PPPP/1RB1KBNR b Kkq - 0 6",
    moves: "d4 d5 c4 Bf5 cxd5 Bxb1 Qa4+ c6 dxc6 Nxc6 Rxb1",
    eco: "D31",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Von Popiel Gambit-Zilbermints Variation",
    fen: "rn1qk2r/ppp2ppp/5pb1/1Q6/1b1Pp1P1/2N5/PPP2P1P/R3KBNR b KQkq - 4 8",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 Bg5 Bf5 Bxf6 exf6 g4 Bg6 Qe2 Bb4 Qb5+",
    eco: "D00",
    difficulty: "Very Hard"
  },
  {
    name: "Vienna Gambit-Main Line-Modern Variation-Würzburger Variation",
    fen: "rnb1kb1r/ppp2ppp/8/3NP2q/8/3P1Nn1/PPP4P/R1BQKB1R b KQkq - 0 8",
    moves: "e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 d3 Qh4+ g3 Nxg3 Nf3 Qh5 Nxd5",
    eco: "C29",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Exchange Variation-Berger Variation",
    fen: "r2q1rk1/pp2bppp/2npbn2/2p3B1/4P3/2N2N2/PPP1BPPP/R2QR1K1 b - - 5 10",
    moves: "e4 e5 Nf3 d6 d4 exd4 Nxd4 Nf6 Nc3 Be7 Be2 O-O O-O c5 Nf3 Nc6 Bg5 Be6 Re1",
    eco: "C41",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-Philidor's Defence-Jaenisch Variation-Berger Variation",
    fen: "r2q1rk1/pp2bppp/2npbn2/2p3B1/4P3/2N2N2/PPP1BPPP/R2QR1K1 b - - 5 10",
    moves: "e4 e5 Nf3 d6 d4 Nf6 Nc3 exd4 Nxd4 Be7 Be2 O-O O-O c5 Nf3 Nc6 Bg5 Be6 Re1",
    eco: "C41",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Chigorin Variation-Balla Variation",
    fen: "r1b1k2r/2q1bppp/p2p1n2/npp1p3/P2PP3/2P2N2/1PB2PPP/RNBQR1K1 b kq - 0 11",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 Na5 Bc2 c5 d4 Qc7 a4",
    eco: "C88",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-Classical Defence-Alekhine Variation",
    fen: "r2qk2r/2p1bppp/p1n1b3/3pP3/Pp1Nn3/1BP5/1P3PPP/RNBQ1RK1 b kq - 1 11",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 c3 Be7 a4 b4 Nd4",
    eco: "C83",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Evans Gambit Declined-Hirschbach Variation-Vásquez Variation",
    fen: "r1b3nr/ppppkBpp/1b6/nP2N1qQ/4P3/8/P1PP1PPP/RNB1K2R b KQ - 2 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bb6 b5 Na5 Nxe5 Qg5 Bxf7+ Ke7 Qh5",
    eco: "C51",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Evans Gambit Accepted-MacDonnell Defence-Jaenisch Variation",
    fen: "r1bqk1nr/pppp1ppp/2n5/8/1bBPP3/5N2/P4PPP/RNBQ1K1R b kq - 2 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Bc5 d4 exd4 cxd4 Bb4+ Kf1",
    eco: "C51",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Bishop Check Line-Bogoljubov Variation-Paoli Variation",
    fen: "r1b1kb1r/p1q2ppp/2p2n2/n3p1N1/8/3B1Q2/PPPP1PPP/RNB1K2R b KQkq - 3 9",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6 bxc6 Qf3 Qc7 Bd3",
    eco: "C58",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Polerio Defence-Kieseritsky Variation-Yankovich Variation",
    fen: "r1bqk2r/ppp2pp1/5n1p/2bP4/2P1p3/8/PPPNQPPP/RNB1K2R b KQkq - 2 10",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 d3 h6 Nf3 e4 Qe2 Nxc4 dxc4 Bc5 Nfd2",
    eco: "C58",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-Ponziani Opening-Caro Variation-Tartakower Variation",
    fen: "r2qk1nr/pppb2pp/3b4/3Ppp2/2B5/2PP1Q2/PP3PPP/RNB1K2R b KQkq - 0 9",
    moves: "e4 e5 Nf3 Nc6 c3 d5 Qa4 Bd7 exd5 Nd4 Qd1 Nxf3+ Qxf3 f5 Bc4 Bd6 d3",
    eco: "C44",
    difficulty: "Very Hard"
  },
  {
    name: "4 Knights Game-Double Ruy Lopez-Symmetrical Variation-Alapin Attack",
    fen: "r2q1rk1/ppp2ppp/3p1n2/1n1Np1B1/4P1b1/3P1N2/PPP2PPP/R2Q1RK1 b - - 1 10",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Bg4 Nd5 Nd4 Nxb4 Nxb5 Nd5",
    eco: "C49",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Orthodox Defence-Classical Variation-Fianchetto Variation",
    fen: "r1bq1rk1/p2nbppp/2p1pn2/1p4B1/2BP4/2N1PN2/PP3PPP/2RQK2R w K - 0 10",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 c6 Bd3 dxc4 Bxc4 b5",
    eco: "D66",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Orthodox Defence-Classical Variation-Capablanca Freeing Manoevre",
    fen: "r1bq1rk1/pp1nbppp/2p1p3/3n2B1/2BP4/2N1PN2/PP3PPP/2RQK2R w K - 1 10",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 c6 Bd3 dxc4 Bxc4 Nd5",
    eco: "D67",
    difficulty: "Very Hard"
  },
  {
    name: "Nimzo-Indian Defence-Sämisch Variation-Keres Variation-Romanovsky Variation",
    fen: "rnbqk2r/pp4pp/4p3/2Pn1p2/8/P1P2P2/4P1PP/R1BQKBNR w KQkq - 0 9",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 a3 Bxc3+ bxc3 c5 f3 d5 cxd5 Nxd5 dxc5 f5",
    eco: "E25",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Najdorf Variation-Poisoned Pawn Variation Accepted",
    fen: "rnb1kb1r/1p3ppp/p2ppn2/6B1/3NPP2/q1N5/P1PQ2PP/1R2KB1R w Kkq - 2 10",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 e6 f4 Qb6 Qd2 Qxb2 Rb1 Qa3",
    eco: "B97",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Richter-Rauzer Variation-Rauzer Attack-Geller Variation",
    fen: "r1bq1rk1/pp2bppp/2np1n2/4p1B1/3NPP2/2N5/PPPQ2PP/2KR1B1R w - - 0 10",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bg5 e6 Qd2 Be7 O-O-O O-O f4 e5",
    eco: "B64",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Hyperaccelerated Fianchetto-Hyperaccelerated Pterodactyl Variation-Exchange Variation",
    fen: "rnb1k1nr/pp1ppp1p/6p1/2P5/4P3/2q2N2/P1P2PPP/R1BQKB1R w KQkq - 0 7",
    moves: "e4 c5 Nf3 g6 d4 Bg7 dxc5 Qa5+ Nc3 Bxc3+ bxc3 Qxc3+",
    eco: "A42",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Borisenko Defence",
    fen: "r1bq1rk1/4bppp/p1np1n2/1pp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w - - 1 12",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 h3 Na5 Bc2 c5 d4 Nc6",
    eco: "C96",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Berger Variation-Borisenko Variation",
    fen: "r1bq1rk1/4bppp/p1np1n2/1pp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w - - 1 12",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Na5 Bc2 c5 d4 Nc6",
    eco: "C88/C96",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Berger Variation-Keres Variation",
    fen: "r1bq1rk1/3nbppp/p2p4/npp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w - - 1 12",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Na5 Bc2 c5 d4 Nd7",
    eco: "C88/C96",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Bishop Check Line-Bogoljubov Variation-Blackburne/Paoli Variation",
    fen: "r1bqkb1r/p4ppp/5n2/np2p1N1/8/5Q2/PPPP1PPP/RNB1K2R w KQkq - 0 9",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6 bxc6 Qf3 cxb5",
    eco: "C58",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Bishop Check Line-Bogoljubov Variation-Colman Variation",
    fen: "1rbqkb1r/p4ppp/2p2n2/nB2p1N1/8/5Q2/PPPP1PPP/RNB1K2R w KQk - 2 9",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6 bxc6 Qf3 Rb8",
    eco: "C58",
    difficulty: "Very Hard"
  },
  {
    name: "Petrov's Defence-Lasker Variation-Krause Variation-Maróczy Variation",
    fen: "r2qk2r/ppp3pp/2n5/3p1p2/2PPn1bb/3B1N2/PP3PPP/RNBQR1K1 w kq - 1 11",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Be7 O-O Nc6 Re1 Bg4 c3 f5 c4 Bh4",
    eco: "C42",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Neo-Orthodox Variation-Lasker Defence-Modern Variation",
    fen: "rnb2rk1/ppp1qpp1/4p2p/3p4/2PPn3/2N1PN2/PP3PPP/2RQKB1R b K - 1 9",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bh4 Ne4 Bxe7 Qxe7 Rc1",
    eco: "D56",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Orthodox Defence-Main Line-Duras Variation",
    fen: "r1bq1rk1/p1pnbppp/1p3n2/3p2B1/Q2P4/2N1PN2/PP3PPP/2R1KB1R b K - 1 9",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 b6 cxd5 exd5 Qa4",
    eco: "D63",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Rubinstein Attack-Karlsbad Variation-Main Line",
    fen: "r1bq1rk1/1p1nbppp/p1p1pn2/3P2B1/3P4/2N1PN2/PPQ2PPP/2R1KB1R b K - 0 9",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 c6 Qc2 a6 cxd5",
    eco: "D65",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Anti-Meran System-Botvinnik System-Ekström Variation",
    fen: "rnbqkb1r/p4p2/2p1pP1p/1p2N3/2pP3p/2N5/PP3PPP/R2QKB1R b KQkq - 1 10",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 Bg5 dxc4 e4 b5 e5 h6 Bh4 g5 exf6 gxh4 Ne5",
    eco: "D44",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Chigorin Defence-Exchange Variation-Costa's Line",
    fen: "r1b1k1nr/ppp2ppp/2n5/3q4/3p4/2B1P3/PP2NPPP/R2QKB1R b KQkq - 1 8",
    moves: "d4 d5 c4 Nc6 cxd5 Qxd5 e3 e5 Nc3 Bb4 Bd2 Bxc3 Bxc3 exd4 Ne2",
    eco: "D07",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Pawn-Blackmar Diemer Gambit-Euwe Defence-Zilbermints Gambit",
    fen: "r1bqk2r/ppp1bppp/4pn2/6B1/3n4/2NB1N2/PPP3PP/R2Q1R1K b kq - 1 9",
    moves: "d4 d5 e4 dxe4 Nc3 Nf6 f3 exf3 Nxf3 e6 Bg5 Be7 Bd3 Nc6 O-O Nxd4 Kh1",
    eco: "D00",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Classical Variation-Paulsen Variation-Maroczy System",
    fen: "r1b1k2r/1pq1bppp/p1nppn2/8/P2NPP2/2N5/1PP1B1PP/R1BQ1R1K b kq - 0 10",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Be2 a6 O-O Qc7 f4 Nc6 Kh1 Be7 a4",
    eco: "B85",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Spielmann Variation-Bernard Defence",
    fen: "r2q1rk1/pp2ppbp/3pbnp1/n4P2/4P3/1NN1B3/PPP1B1PP/R2Q1RK1 b - - 0 11",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 Be2 Nc6 O-O O-O Nb3 Be6 f4 Na5 f5",
    eco: "B74",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-Schlechter Defence-Schlechter-Berger Variation",
    fen: "r1bqkb1r/2p2ppp/p7/1p1p4/P2pn3/1BN5/1PP2PPP/R1BQ1RK1 b kq - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 a4 Nxd4 Nxd4 exd4 Nc3",
    eco: "C80",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-Italian Variation-Motzko Attack II",
    fen: "r2qk2r/2p2ppp/p1n1b3/1pbpP3/4n3/1BPQ1N2/PP3PPP/RNB2RK1 b kq - 2 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 c3 Bc5 Qd3",
    eco: "C82",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-Howell Attack-Adam Variation",
    fen: "r2qk2r/2p1bppp/p1n1b3/1p1pP3/2P1n3/1B3N2/PP2QPPP/RNB2RK1 b kq - 0 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 Qe2 Be7 c4",
    eco: "C81",
    difficulty: "Very Hard"
  },
  {
    name: "Petrov's Defence-Classical Attack-Lasker Variation-Krause Variation",
    fen: "r2qk2r/ppp1b1pp/2n5/3p1p2/2PPn1b1/3B1N2/PP3PPP/RNBQR1K1 b kq - 0 10",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Be7 O-O Nc6 Re1 Bg4 c3 f5 c4",
    eco: "C42",
    difficulty: "Very Hard"
  },
  {
    name: "French Defence-MacCutcheon-Chigorin Variation-Grigoriev Variation",
    fen: "rnbqk1r1/ppp2pP1/4p3/3p4/1b1P2Qp/2N5/PPP2PP1/R3KBNR b KQq - 1 9",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Bb4 e5 h6 exf6 hxg5 fxg7 Rg8 h4 gxh4 Qg4",
    eco: "C12",
    difficulty: "Very Hard"
  },
  {
    name: "Alekhine Defence-Normal Variation-Exchange Variation-Karpov Variation",
    fen: "r2q1rk1/pp2ppbp/1nnp2p1/5b2/2PP1B2/2N2N1P/PP2BPP1/R2Q1RK1 b - - 4 11",
    moves: "e4 Nf6 e5 Nd5 d4 d6 c4 Nb6 exd6 cxd6 Nf3 g6 Be2 Bg7 O-O O-O h3 Nc6 Nc3 Bf5 Bf4",
    eco: "B03",
    difficulty: "Very Hard"
  },
  {
    name: "Alekhine Defence-Modern Variation-Fianchetto Variation-Karpov Variation",
    fen: "r2q1rk1/pp2ppbp/1nnp2p1/5b2/2PP1B2/2N2N1P/PP2BPP1/R2Q1RK1 b - - 8 11",
    moves: "e4 Nf6 e5 Nd5 d4 d6 Nf3 g6 c4 Nb6 exd6 cxd6 h3 Bg7 Be2 O-O Nc3 Nc6 O-O Bf5 Bf4",
    eco: "B04",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Albin Countergambit-Alapin Variation-Krénosz Variation",
    fen: "r3k1nr/ppp1qppp/2n5/4P3/1bPp4/5N1P/PP1BPPP1/R2QKB1R w KQkq - 3 9",
    moves: "d4 d5 c4 e5 dxe5 d4 Nf3 Nc6 Nbd2 Bg4 h3 Bxf3 Nxf3 Bb4+ Bd2 Qe7",
    eco: "D08",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Prague Variation-Classical Variation-Classical Tarrasch Gambit",
    fen: "r1bq1rk1/pp2bppp/2n2n2/2P5/3p4/2N2NP1/PP2PPBP/R1BQ1RK1 w - - 0 10",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 Nf6 Bg2 Be7 O-O O-O dxc5 d4",
    eco: "D34",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Classical Variation-Paulsen Variation-Main Line",
    fen: "r1b2rk1/1pq1bppp/p1nppn2/8/3NPP2/2N1B3/PPP1B1PP/R3QRK1 w - - 5 11",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 e6 Be2 a6 O-O Qc7 f4 Nc6 Be3 Be7 Qe1 O-O",
    eco: "B85",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Classical Variation-Normal Line-Tartakower Line",
    fen: "r1q2rk1/pp2ppbp/2npbnp1/8/4PP2/1NN1B3/PPP1B1PP/R2Q1RK1 w - - 1 11",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be2 Bg7 Be3 Nc6 O-O O-O Nb3 Be6 f4 Qc8",
    eco: "B74",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Pelikán Variation-Chelyabinsk Variation-Novosibirsk Variation",
    fen: "r1bqk2r/5pbp/p1np1p2/1p1Np3/4P3/N7/PPP2PPP/R2QKB1R w KQkq - 2 11",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Bg5 a6 Na3 b5 Bxf6 gxf6 Nd5 Bg7",
    eco: "B33",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Pelikán Variation-Chelyabinsk Variation-Sveshnikov Variation",
    fen: "r1bqkb1r/5p1p/p1np4/1p1Npp2/4P3/N7/PPP2PPP/R2QKB1R w KQkq - 0 11",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Bg5 a6 Na3 b5 Bxf6 gxf6 Nd5 f5",
    eco: "B33",
    difficulty: "Very Hard"
  },
  {
    name: "Vienna Game-Knight Variation-Hamppe-Muzio Gambit-Dubois Variation",
    fen: "r1b1kbnr/pppp1p1p/5q2/4n3/2B1PQ2/2N5/PPPP2PP/R1B2RK1 w kq - 1 9",
    moves: "e4 e5 Nc3 Nc6 f4 exf4 Nf3 g5 Bc4 g4 O-O gxf3 Qxf3 Ne5 Qxf4 Qf6",
    eco: "C25",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Zaitsev System-Smyslov-Breyer-Zaitsev Hybrid",
    fen: "r2qrbk1/1bp2pp1/p1np1n1p/1p2p3/3PP3/PBP2N1P/1P1N1PP1/R1BQR1K1 w - - 0 13",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 h3 Re8 d4 Bb7 Nbd2 Bf8 a3 h6",
    eco: "C93",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Berlin Defence-Rio Gambit Accepted-Cordel Variation",
    fen: "r1bqk2r/p1ppbppp/2p5/4Pn2/8/5N2/PPP1QPPP/RNB2RK1 w kq - 1 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Be7 Qe2 Nd6 Bxc6 bxc6 dxe5 Nf5",
    eco: "C67",
    difficulty: "Very Hard"
  },
  {
    name: "Petrov's Defence-Marshall Variation-Staunton Variation-Chinese Gambit",
    fen: "rn1q1rk1/pp3ppp/2pb4/3p4/2PPn1b1/3B1N2/PP3PPP/RNBQR1K1 w - - 2 10",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Bd6 O-O O-O c4 c6 Re1 Bg4",
    eco: "C42",
    difficulty: "Very Hard"
  },
  {
    name: "Alekhine Defence-Normal Variation-4 Pawns Attack-Korchnoi Variation",
    fen: "rn1q1rk1/ppp1b1pp/1n2pp2/4Pb2/2PP4/2N2N2/PP2B1PP/R1BQ1RK1 w - - 0 11",
    moves: "e4 Nf6 e5 Nd5 d4 d6 c4 Nb6 f4 dxe5 fxe5 Bf5 Nc3 e6 Nf3 Be7 Be2 O-O O-O f6",
    eco: "B03",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Classical Variation-Capablanca Freeing Manoevre-Janowski Variation",
    fen: "r1bq1rk1/pp1nbppp/2p1p3/3n2B1/2BP3P/2N1PN2/PP3PP1/2RQK2R b K - 0 10",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 c6 Bd3 dxc4 Bxc4 Nd5 h4",
    eco: "D67",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Najdorf Variation-Polugayevsky Variation-Simagin Line",
    fen: "rnb1kb1r/2q2ppp/p3pn2/1p2P1B1/3N4/2N5/PPP1Q1PP/R3KB1R b KQkq - 2 10",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 e6 f4 b5 e5 dxe5 fxe5 Qc7 Qe2",
    eco: "B96",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Normal Variation-Bastrikov Variation-Bronstein Variation",
    fen: "r3kbnr/1b1p1ppp/p1q1p3/1p6/3QP3/P1N1B3/1PP1BPPP/R3K2R b KQkq - 2 10",
    moves: "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Qc7 Be3 a6 Be2 b5 Nxc6 Qxc6 a3 Bb7 Qd4",
    eco: "B49",
    difficulty: "Very Hard"
  },
  {
    name: "Caro-Kann Defence-Classical Variation-Spassky Variation-Seirawan Variation",
    fen: "r2qkbnr/pp1nppp1/2p4p/7P/3P4/3Q1NN1/PPP2PP1/R1B1K2R b KQkq - 0 10",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3 Bxd3 Qxd3",
    eco: "B19",
    difficulty: "Very Hard"
  },
  {
    name: "Caro-Kann Defence-Main Line-Karpov Variation-Modern Main Line",
    fen: "r1bqk2r/pp1n1pp1/2pbp2p/8/3PQ3/3B1N2/PPP2PPP/R1B1K2R b KQkq - 0 10",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Ng5 Ngf6 Bd3 e6 N1f3 Bd6 Qe2 h6 Ne4 Nxe4 Qxe4",
    eco: "B17",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Kieseritzky Gambit-Campbell Defence-Kaplanek Variation",
    fen: "rnb1k2r/ppp2p1p/5n2/3qN3/1b1P1ppP/2N5/PPP2KP1/R1BQ1B1R b kq - 3 9",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 d5 d4 Nf6 exd5 Qxd5 Nc3 Bb4 Kf2",
    eco: "C39",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Smyslov Variation-Smyslov-Breyer Variation",
    fen: "r1bqrbk1/2p2pp1/p1np1n1p/1p2p3/3PP3/PBP2N1P/1P1N1PP1/R1BQR1K1 b - - 0 12",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 h6 d4 Re8 Nbd2 Bf8 a3",
    eco: "C88/C93",
    difficulty: "Very Hard"
  },
  {
    name: "Evans Gambit Accepted-MacDonnell Defence-Main Line-Ulvestad Variation",
    fen: "r1bqk1nr/ppp2ppp/1b1p4/n2P4/2B1P3/5N2/PB3PPP/RN1Q1RK1 b kq - 2 10",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Bc5 d4 exd4 O-O d6 cxd4 Bb6 d5 Na5 Bb2",
    eco: "C51",
    difficulty: "Very Hard"
  },
  {
    name: "Evans Gambit Accepted-Main Line-Morphy Attack-Göring Attack",
    fen: "r1bqk1nr/ppp2ppp/1b1p4/n5B1/2BPP3/2N2N2/P4PPP/R2Q1RK1 b kq - 4 10",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Bc5 d4 exd4 O-O d6 cxd4 Bb6 Nc3 Na5 Bg5",
    eco: "C51",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Scotch Gambit-Double Gambit Accepted-Anderssen Attack",
    fen: "r1b1kb1r/ppp2ppp/2n5/3q4/3pn3/2N2N2/PPP2PPP/R1BQR1K1 b kq - 1 8",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Nxe4 Re1 d5 Bxd5 Qxd5 Nc3",
    eco: "C56",
    difficulty: "Very Hard"
  },
  {
    name: "English Opening-Symmetrical Variation-Hedgehog System-Flexible Formation",
    fen: "r2qk2r/1b1nbppp/pp1ppn2/8/2PQ4/1PN2NP1/P3PPBP/R1BR2K1 w kq - 1 11",
    moves: "c4 c5 Nf3 Nf6 g3 b6 Bg2 Bb7 O-O e6 Nc3 Be7 d4 cxd4 Qxd4 d6 Rd1 a6 b3 Nbd7",
    eco: "A30",
    difficulty: "Very Hard"
  },
  {
    name: "East Indian Defence-Catalan Opening-Closed Variation-Spassky Gambit",
    fen: "r2q1rk1/pb1nbppp/2p1pn2/1p1p4/2PP4/1PN2NP1/P1Q1PPBP/R1BR2K1 w - - 0 11",
    moves: "d4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O O-O Nbd7 Qc2 c6 b3 b6 Rd1 Bb7 Nc3 b5",
    eco: "E08",
    difficulty: "Very Hard"
  },
  {
    name: "Nimzo-Indian Defence-Classical Defence-Botvinnik System-Keres Variation",
    fen: "rnbq1rk1/p4ppp/1p3n2/2pp4/3P4/P1PBP3/4NPPP/R1BQK2R w KQ - 0 10",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3 d5 a3 Bxc3+ bxc3 c5 cxd5 exd5 Ne2 b6",
    eco: "E49",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Smith-Morra Gambit Accepted-Scheveningen Formation-Chicago Defence",
    fen: "2bqkbnr/r4ppp/p1npp3/1p6/4P3/1BN2N2/PP2QPPP/R1B2RK1 w k - 2 10",
    moves: "e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 d6 Bc4 e6 O-O a6 Qe2 b5 Bb3 Ra7",
    eco: "B21",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Chigorin Defence",
    fen: "r1b2rk1/2q1bppp/p2p1n2/npp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w - - 1 12",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 h3 Na5 Bc2 c5 d4 Qc7",
    eco: "C97",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Closed Defence-Rossolimo Defence",
    fen: "r1b2rk1/2q1bppp/p1pp1n2/np2p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w - - 1 12",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 h3 Na5 Bc2 c6 d4 Qc7",
    eco: "C96",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Berger Variation-Chigorin Defence",
    fen: "r1b2rk1/2q1bppp/p2p1n2/npp1p3/3PP3/2P2N1P/PPB2PP1/RNBQR1K1 w - - 1 12",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Na5 Bc2 c5 d4 Qc7",
    eco: "C88/C97",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-Motzko Attack-Nenarokov Variation",
    fen: "r2qk2r/2p1nppp/p3b3/1pbpP3/4n3/1BPQ1N2/PP3PPP/RNB2RK1 w kq - 3 11",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 c3 Bc5 Qd3 Ne7",
    eco: "C82",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Fegatello Attack-Fried Liver Attack-Polerio Defence",
    fen: "r1bq1b1r/ppp1n1pp/4k3/3np3/2B5/2N2Q2/PPPP1PPP/R1B1K2R w KQ - 4 9",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5 Nxf7 Kxf7 Qf3+ Ke6 Nc3 Ne7",
    eco: "C57",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Dutch System-Main Line-Sämisch Variation",
    fen: "rn1q1rk1/pp3ppp/2p1p3/5b2/PbBPn1P1/2N1PN2/1P2QP1P/R1B2RK1 b - - 0 10",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 e3 e6 Bxc4 Bb4 O-O O-O Qe2 Ne4 g4",
    eco: "D19",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Harrwitz Attack-Main Line-New Main Line",
    fen: "r1b2rk1/pp3ppp/2n1pn2/q1bp4/2P2B2/P1N1PN2/1PQ2PPP/2KR1B1R b - - 2 10",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 Be7 Bf4 O-O e3 c5 dxc5 Bxc5 Qc2 Nc6 a3 Qa5 O-O-O",
    eco: "D37",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Tarrasch Defence-Symmetrical Variation-Levenfish Variation",
    fen: "r1b2rk1/pp2qppp/2n1pn2/2bp4/2P1P3/2NB1N2/PP2QPPP/R1B2RK1 b - - 0 10",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c5 e3 Nc6 Bd3 Bd6 O-O O-O Qe2 Qe7 dxc5 Bxc5 e4",
    eco: "D40",
    difficulty: "Very Hard"
  },
  {
    name: "Grünfeld Defence-Russian Variation-Smyslov Variation-Keres Variation",
    fen: "r2q1rk1/ppp1ppbp/1nn3p1/8/3PP1b1/2NQBN2/PP2BPPP/2KR3R b - - 8 11",
    moves: "d4 Nf6 c4 g6 Nc3 d5 Nf3 Bg7 Qb3 dxc4 Qxc4 O-O e4 Bg4 Be3 Nfd7 Be2 Nb6 Qd3 Nc6 O-O-O",
    eco: "D98",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Muzio Gambit-Sarratt Defence-Double Muzio Gambit",
    fen: "rnb1kbnr/pppp1B1p/8/4q3/5p2/5Q2/PPPP2PP/RNB2RK1 b kq - 0 8",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 O-O gxf3 Qxf3 Qf6 e5 Qxe5 Bxf7+",
    eco: "C37",
    difficulty: "Very Hard"
  },
  {
    name: "Vienna Game-Knight Variation-Pierce Gambit-Rushmere Attack",
    fen: "r2qkbnr/ppp2p1p/2P5/8/2BP1pb1/2N2p2/PPP3PP/R1BQ1RK1 b kq - 0 9",
    moves: "e4 e5 Nc3 Nc6 f4 exf4 Nf3 g5 d4 g4 Bc4 gxf3 O-O d5 exd5 Bg4 dxc6",
    eco: "C25",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Classical Defence-St. Petersburg Variation-Malkin Variation",
    fen: "r2q1rk1/2p1bppp/p1n1b3/1p1pP3/4n3/1BP2N2/PP1NQPPP/R1B2RK1 b - - 4 11",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 c3 Be7 Nbd2 O-O Qe2",
    eco: "C83",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-Bernstein Variation-Karpov Gambit",
    fen: "r2qkb1r/2p2ppp/p1n1b3/1pn1P1N1/3p4/1BP5/PP1N1PPP/R1BQ1RK1 b kq - 1 11",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 Nbd2 Nc5 c3 d4 Ng5",
    eco: "C80",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Berlin Defence-Rio Gambit Accepted-Pillsbury/Fianchetto Variation",
    fen: "r1bqk2r/pnppbppp/2p5/4P3/8/1P3N2/P1P1QPPP/RNB2RK1 b kq - 0 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Be7 Qe2 Nd6 Bxc6 bxc6 dxe5 Nb7 b3",
    eco: "C67",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Berlin Defence-Rio Gambit Accepted-Zukertort Variation",
    fen: "r1bqk2r/pnppbppp/2p5/4P3/2P5/5N2/PP2QPPP/RNB2RK1 b kq - 0 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Be7 Qe2 Nd6 Bxc6 bxc6 dxe5 Nb7 c4",
    eco: "C67",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Berlin Defence-Rio Gambit Accepted-Winawer Attack",
    fen: "r1bqk2r/pnppbppp/2p5/4P3/3N4/8/PPP1QPPP/RNB2RK1 b kq - 2 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Be7 Qe2 Nd6 Bxc6 bxc6 dxe5 Nb7 Nd4",
    eco: "C67",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Marshall Gambit-Main Line-Slav Gambit",
    fen: "rnb1k1nr/pp3ppp/2p1p3/8/1BP1q3/8/PP3PPP/R2QKBNR w KQkq - 0 8",
    moves: "d4 d5 c4 e6 Nc3 c6 e4 dxe4 Nxe4 Bb4+ Bd2 Qxd4 Bxb4 Qxe4+",
    eco: "D31",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Meran Variation-Wade Variation-Larsen Variation",
    fen: "r2qkb1r/pb1n1ppp/4p3/2pnP3/Np1P4/3B1N2/PP3PPP/R1BQK2R w KQkq - 1 12",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Bd3 dxc4 Bxc4 b5 Bd3 Bb7 e4 b4 Na4 c5 e5 Nd5",
    eco: "D47",
    difficulty: "Very Hard"
  },
  {
    name: "Nimzo-Indian Defence-Except Gligoric System-Gligoric System-Olafsson Variation",
    fen: "rnq2rk1/pb3ppp/1p2pn2/2p5/1bBP4/2N1PN2/PP2QPPP/R1BR2K1 w - - 4 11",
    moves: "d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Nf3 d5 Bd3 c5 O-O dxc4 Bxc4 b6 Qe2 Bb7 Rd1 Qc8",
    eco: "E54",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Classical Attack-Réti-Tartakower Variation",
    fen: "r1q2rk1/pp2ppbp/2npbnp1/8/4PP2/1NN1B3/PPP1B1PP/R2Q1RK1 w - - 1 11",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 Be2 Nc6 O-O O-O Nb3 Be6 f4 Qc8",
    eco: "B74",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Yugoslav Attack-Main Line-Old Line",
    fen: "2rq1rk1/pp1bppbp/2np1np1/8/2BNP3/2N1BP2/PPPQ2PP/2KR3R w - - 7 11",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2 Nc6 Bc4 Bd7 O-O-O Rc8",
    eco: "B78",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Borisenko Variation-Gligoric Variation",
    fen: "r2q1rk1/1b1nbppp/p2p1n2/1pp1p3/3PP3/2P2N1P/PPBN1PP1/R1BQR1K1 w - - 0 13",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 h3 Nb8 d4 Nbd7 Nbd2 Bb7 Bc2 c5",
    eco: "C95",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Breyer Variation-Borisenko Variation-Gligoric Variation",
    fen: "r2q1rk1/1b1nbppp/p2p1n2/1pp1p3/3PP3/2P2N1P/PPBN1PP1/R1BQR1K1 w - - 0 13",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Nb8 d4 Nbd7 Nbd2 Bb7 Bc2 c5",
    eco: "C88/C95",
    difficulty: "Very Hard"
  },
  {
    name: "Evans Gambit Accepted-Main Line-Ulvestad Variation-Paulsen Variation",
    fen: "r1bqk2r/ppp1nppp/1b1p4/n2P4/2B1P3/5N2/PB3PPP/RN1Q1RK1 w kq - 3 11",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Bc5 d4 exd4 O-O d6 cxd4 Bb6 d5 Na5 Bb2 Ne7",
    eco: "C51",
    difficulty: "Very Hard"
  },
  {
    name: "4 Knights Game-Double Ruy Lopez-Symmetrical Variation-Alapin Defence",
    fen: "r1bq1rk1/ppp2p2/2np3p/1B2p1N1/4n2B/2PP4/P1P2PPP/R2Q1RK1 w - - 0 11",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Bxc3 bxc3 h6 Bh4 g5 Nxg5 Nxe4",
    eco: "C49",
    difficulty: "Very Hard"
  },
  {
    name: "4 Knights Game-Double Ruy Lopez-Metger Unpin-Capablanca Variation",
    fen: "r2n1rk1/ppp1qppp/3p1n2/1B2p1B1/3PP1b1/2P2N2/P1P2PPP/R2QR1K1 w - - 1 11",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Bxc3 bxc3 Qe7 Re1 Nd8 d4 Bg4",
    eco: "C49",
    difficulty: "Very Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Steinitz Variation-Stahlberg Variation",
    fen: "r1b2rk1/pp1nqppp/2n1p3/3pP3/2pP1P2/2N2N2/PPPQ2PP/2KR1B1R w - - 0 11",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 Bxe7 Qxe7 f4 O-O Nf3 c5 Qd2 Nc6 O-O-O c4",
    eco: "C14",
    difficulty: "Very Hard"
  },
  {
    name: "French Defence-Paulsen Attack-Rubinstein Variation-Ståhlberg Variation",
    fen: "r1b2rk1/pp1nqppp/2n1p3/3pP3/2pP1P2/2N2N2/PPPQ2PP/2KR1B1R w - - 0 11",
    moves: "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 Bxe7 Qxe7 Qd2 O-O f4 c5 Nf3 Nc6 O-O-O c4",
    eco: "C14",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Harrwitz Attack-Main Line-Old Main Line",
    fen: "r1b2rk1/pp3ppp/2n1pn2/q1bp4/2P2B2/P1N1PN2/1PQ2PPP/3RKB1R b K - 2 10",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 Be7 Bf4 O-O e3 c5 dxc5 Bxc5 Qc2 Nc6 a3 Qa5 Rd1",
    eco: "D37",
    difficulty: "Very Hard"
  },
  {
    name: "Old Sicilian Defence-Open Variation-Pelikán Variation-Rauzer Variation-Classical Variation",
    fen: "r1bq1rk1/pp2bppp/3ppn2/6B1/3QPP2/2N5/PPP3PP/2KR1B1R b - - 0 10",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Bg5 e6 Qd2 Be7 O-O-O O-O f4 Nxd4 Qxd4",
    eco: "B65",
    difficulty: "Very Hard"
  },
  {
    name: "King's Pawn-King's Bishop Opening-Philidor Counterattack-Lisitsyn/Lisitsin Variation",
    fen: "r2qkbnr/pp3ppp/8/3pn3/8/8/PPP1NPPP/RNBQK2R b KQkq - 1 8",
    moves: "e4 e5 Bc4 c6 d4 d5 exd5 cxd5 Bb5+ Bd7 Bxd7+ Nxd7 dxe5 Nxe5 Ne2",
    eco: "C23",
    difficulty: "Very Hard"
  },
  {
    name: "Centre Gambit Accepted-Paulsen Attack-Berger Variation-Kupreichik Variation",
    fen: "r1bqr1k1/ppp2ppp/2np1n2/8/1bB1P3/2N1Q2N/PPPB1PPP/2KR3R b - - 1 9",
    moves: "e4 e5 d4 exd4 Qxd4 Nc6 Qe3 Nf6 Nc3 Bb4 Bd2 O-O O-O-O Re8 Bc4 d6 Nh3",
    eco: "C22",
    difficulty: "Very Hard"
  },
  {
    name: "Vienna Gambit-Steinitz Gambit-Fraser-Minckwitz Defence-Bauer Variation",
    fen: "r2k1bnr/p1pp1p1p/bpn5/1N4pq/P2PPpP1/5N2/1PP4P/R1BQKB1R b - g3 0 10",
    moves: "e4 e5 Nc3 Nc6 f4 exf4 d4 Qh4+ Ke2 b6 Nb5 Ba6 a4 g5 Nf3 Qh5 Ke1 Kd8 g4",
    eco: "C25",
    difficulty: "Very Hard"
  },
  {
    name: "Evans Gambit Accepted-MacDonnell Defence-Normal Position-Fraser Attack",
    fen: "r2qk1nr/ppp2ppp/1bnp4/8/Q1BPP1b1/2N2N2/P4PPP/R1B2RK1 b kq - 4 10",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Bc5 O-O d6 d4 exd4 cxd4 Bb6 Nc3 Bg4 Qa4",
    eco: "C51",
    difficulty: "Very Hard"
  },
  {
    name: "Evans Gambit Accepted-Main Line-Morphy Attack-Fraser Attack",
    fen: "r2qk1nr/ppp2ppp/1bnp4/8/Q1BPP1b1/2N2N2/P4PPP/R1B2RK1 b kq - 4 10",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Bc5 d4 exd4 O-O d6 cxd4 Bb6 Nc3 Bg4 Qa4",
    eco: "C51",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Greco Gambit-Greco's Attack-Möller-Therkatz Attack",
    fen: "r1bqk2r/pppp1ppp/2n5/3P4/2B1n3/2b2N2/PP3PPP/R1BQ1RK1 b kq - 0 9",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+ Nc3 Nxe4 O-O Bxc3 d5",
    eco: "C54",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Classical Variation-Centre Attack-Ghulam Kassim Variation",
    fen: "r1bqk2r/pppp1ppp/2n5/2bBP3/8/2p2NK1/PP4PP/RNBQ3R b kq - 1 9",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 e5 Ne4 Bd5 Nxf2 Kxf2 dxc3+ Kg3",
    eco: "C53",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Carlsbad Variation-Endgame Variation-Stoltz Variation",
    fen: "r2q1rk1/p3bppp/1pn1bn2/2pp2B1/3P4/2N2NP1/PP2PPBP/2RQ1RK1 w - - 0 11",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 Nf6 Bg2 Be7 O-O O-O Bg5 Be6 Rc1 b6",
    eco: "D34",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Carlsbad Variation-Endgame Variation-Bogoljubov Variation",
    fen: "r2q1rk1/pp2bppp/2n1bn2/3p2B1/2pP4/2N2NP1/PP2PPBP/2RQ1RK1 w - - 0 11",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 Nf6 Bg2 Be7 O-O O-O Bg5 Be6 Rc1 c4",
    eco: "D34",
    difficulty: "Very Hard"
  },
  {
    name: "Indian Defence-Fianchetto Variation-Hastings Defence-Main Line",
    fen: "r1bqr1k1/1p1n1pbp/p2p1np1/2pP4/P7/2N3P1/1P1NPPBP/R1BQ1RK1 w - - 1 12",
    moves: "d4 Nf6 c4 c5 d5 e6 Nc3 exd5 cxd5 d6 Nf3 g6 g3 Bg7 Bg2 O-O O-O Nbd7 Nd2 a6 a4 Re8",
    eco: "A64",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Debrecen Defence-Classical Fianchetto Variation-Long Variation",
    fen: "r1bqr1k1/1pp2pbp/3p1np1/p1n5/2PNP3/2N3PP/PP3PB1/R1BQR1K1 w - - 0 12",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 Nbd7 O-O e5 e4 Re8 h3 exd4 Nxd4 Nc5 Re1 a5",
    eco: "E68",
    difficulty: "Very Hard"
  },
  {
    name: "King's Pawn-Sicilian Defence-Smith-Morra Gambit Accepted-Chicago Variation",
    fen: "2bqkbnr/r4ppp/p1npp3/1p6/4P3/1BN2N2/PP2QPPP/R1B2RK1 w k - 2 10",
    moves: "e4 c5 d4 cxd4 c3 dxc3 Nxc3 Nc6 Nf3 d6 Bc4 e6 O-O a6 Qe2 b5 Bb3 Ra7",
    eco: "B21",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Paris Attack-Allgaier Gambit-Horny Defence",
    fen: "rnbq3r/pppp1k2/3b1n1p/8/4PQ1P/8/PPPP2P1/RNB1KB1R w KQ - 1 9",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ng5 h6 Nxf7 Kxf7 Qxg4 Nf6 Qxf4 Bd6",
    eco: "C39",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Centre Attack-Bronstein-Nezmetdinov Variation",
    fen: "r2qk2r/2p1bppp/p1np1n2/1p6/3pP3/1BP2Q1P/PP3PP1/RNB2RK1 w kq - 0 11",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 d4 b5 Bb3 d6 c3 Bg4 h3 Bxf3 Qxf3 exd4",
    eco: "C84",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-St. Petersburg Variation-Dilworth Variation",
    fen: "r2q1rk1/2p2ppp/p1n1b3/1pbpP3/8/2P2N2/PPBN1nPP/R1BQ1RK1 w - - 0 12",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 c3 Bc5 Nbd2 O-O Bc2 Nxf2",
    eco: "C82",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Greco Gambit-Greco's Attack-Greco Variation",
    fen: "r1bqk2r/pppp1ppp/2n5/8/1bBP4/2n2N2/PP3PPP/R1BQ1RK1 w kq - 0 9",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+ Nc3 Nxe4 O-O Nxc3",
    eco: "C54",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Bishop Check Line-Suhle Defence-Göring Variation",
    fen: "r1b1kb1r/p1q2pp1/2p2n1p/n3N3/4p3/8/PPPPBPPP/RNBQK2R w KQkq - 2 11",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6 bxc6 Be2 h6 Nf3 e4 Ne5 Qc7",
    eco: "C59",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Prague Variation-Classical Variation-Réti Variation",
    fen: "r1bq1rk1/pp3ppp/2n2n2/2bp4/N7/5NP1/PP2PPBP/R1BQ1RK1 b - - 1 10",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 Nf6 Bg2 Be7 O-O O-O dxc5 Bxc5 Na4",
    eco: "D34",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Exchange Variation-Positional Line-Chameleon Variation",
    fen: "r1bqrnk1/ppp1bppp/5n2/3p2B1/3P4/2NBP3/PPQ1NPPP/2KR3R b - - 8 10",
    moves: "d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 Be7 e3 O-O Bd3 Nbd7 Qc2 Re8 Nge2 Nf8 O-O-O",
    eco: "D35",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Najdorf Variation-Argentine Variation-Göteborg Variation",
    fen: "rnbqk2r/1p1nbp2/p2pN2p/6P1/4P2B/2N2Q2/PPP3PP/R3KB1R b KQkq - 0 11",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 e6 f4 Be7 Qf3 h6 Bh4 g5 fxg5 Nfd7 Nxe6",
    eco: "B98",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Chelyabinsk Variation-Sveshnikov Variation-Peresypkin's Sacrifice",
    fen: "r1bqkb1r/5p1p/p1np4/1B1Npp2/4P3/N7/PPP2PPP/R2QK2R b KQkq - 0 11",
    moves: "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Bg5 a6 Na3 b5 Bxf6 gxf6 Nd5 f5 Bxb5",
    eco: "B33",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Philidor Gambit-Greco Gambit-Calabrese Gambit",
    fen: "rnbqk1nb/pp3p2/2pp4/4N1p1/2BPPp2/2N5/PPP3P1/R1BQK3 b Qq - 1 10",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 Bg7 h4 h6 d4 d6 hxg5 hxg5 Rxh8 Bxh8 Nc3 c6 Ne5",
    eco: "C38",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Philidor Gambit-Greco Gambit-Calabrais Gambit",
    fen: "rnbqk1nb/pp3p2/2pp4/4N1p1/2BPPp2/2N5/PPP3P1/R1BQK3 b Qq - 1 10",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 Bg7 h4 h6 d4 d6 Nc3 c6 hxg5 hxg5 Rxh8 Bxh8 Ne5",
    eco: "C38",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Evans Gambit Declined-Hirschbach Variation-Hicken Variation",
    fen: "r1bk2nr/pppp1Qpp/1b6/nP2q3/2B1P3/8/PBPP1PPP/RN2K2R b KQ - 2 9",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bb6 b5 Na5 Nxe5 Qg5 Qf3 Qxe5 Qxf7+ Kd8 Bb2",
    eco: "C51",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Accepted-Alekhine System-Except Main Line-Smyslov Variation",
    fen: "r2qk2r/1b1n1ppp/p2bpn2/1pp5/3P4/1BN1PN2/PP2QPPP/R1BR2K1 w kq - 6 11",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5 O-O a6 Qe2 b5 Bb3 Bb7 Rd1 Nbd7 Nc3 Bd6",
    eco: "D29",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Columbus Variation-Archangelsk Variation-Rabinovich Variation",
    fen: "r1bq1k1r/2p2ppp/p4n2/1pbPR1N1/3n4/1B6/PPPP1PPP/RNBQ2K1 w - - 1 11",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O b5 Bb3 d6 Ng5 d5 exd5 Nd4 Re1 Bc5 Rxe5+ Kf8",
    eco: "C78",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Berger Variation-Rossolimo Variation-Rauzer Variation",
    fen: "r1b2rk1/2q1bppp/p1np1n2/1pp1p3/3PP3/2P2N1P/PPBN1PP1/R1BQR1K1 w - - 3 13",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Na5 Bc2 c5 d4 Qc7 Nbd2 Nc6",
    eco: "C88/C98",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Scotch Gambit-Max Lange Attack-Loman Defence",
    fen: "r2qk2r/ppp2p1p/2n1bPp1/2b3N1/2pp4/8/PPP2PPP/RNBQR1K1 w kq - 0 10",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Bc5 e5 d5 exf6 dxc4 Re1+ Be6 Ng5 g6",
    eco: "C55",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Open Variation-Dubois Variation-Keidanz Variation",
    fen: "r1b1k2r/ppp2ppp/2N5/1B1pP3/4n2q/8/PPP2bPP/RNBQ1K1R w kq - 2 10",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 e5 d5 Bb5 Ne4 Nxd4 Bc5 Nxc6 Bxf2+ Kf1 Qh4",
    eco: "C55",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-London Defence-Hanneken Variation",
    fen: "r1bq1rk1/pppp1ppp/5n2/4n1N1/1bB5/8/PB3PPP/RN1Q1RK1 w - - 0 10",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bb4+ c3 dxc3 O-O cxb2 Bxb2 Nf6 Ng5 O-O e5 Nxe5",
    eco: "C44",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Accepted-Classical Defence-Alekhine System-Furman Variation",
    fen: "r1bqk2r/5ppp/p1n1pn2/1pb1P3/2B5/5N2/PP2QPPP/RNB2RK1 b kq - 0 10",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5 O-O a6 Qe2 Nc6 dxc5 Bxc5 e4 b5 e5",
    eco: "D28",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Accepted-Classical Defence-Primitive Furman Variation-Furman Variation",
    fen: "r1bqk2r/5ppp/p1n1pn2/1pb1P3/2B5/5N2/PP2QPPP/RNB2RK1 b kq - 0 10",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5 Qe2 a6 dxc5 Bxc5 O-O Nc6 e4 b5 e5",
    eco: "D26",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Anti-Meran System-Anti-Meran Gambit-Lilienthal Variation",
    fen: "r1bqkb1r/p2n1p2/2p1pn2/1p2P1B1/2pP4/2N3P1/PP3P1P/R2QKB1R b KQkq - 0 11",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 Bg5 dxc4 e4 b5 e5 h6 Bh4 g5 Nxg5 hxg5 Bxg5 Nbd7 g3",
    eco: "D44",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Meran Variation-Old Main Line-Blumenfeld Variation",
    fen: "r1bqkb1r/3n1ppp/p3pn2/1N2P3/3p4/3B1N2/PP3PPP/R1BQK2R b KQkq - 0 11",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Bd3 dxc4 Bxc4 b5 Bd3 a6 e4 c5 e5 cxd4 Nxb5",
    eco: "D49",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Canal-Sokolsky Attack-Nimzovich Variation-Moscow Gambit",
    fen: "r2qkb1r/1p2pppp/p2p1n2/2p3B1/3Pb3/2P2N2/PP3PPP/RN1QR1K1 b kq - 1 9",
    moves: "e4 c5 Nf3 d6 Bb5+ Nc6 O-O Bd7 c3 a6 Bxc6 Bxc6 Re1 Nf6 d4 Bxe4 Bg5",
    eco: "B51",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Classical Attack-Spielmann Variation",
    fen: "r2q1rk1/pp2ppbp/3p1np1/n4P2/2b1P3/1NNBB3/PPP3PP/R2Q1RK1 b - - 2 12",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 Be2 Nc6 O-O O-O Nb3 Be6 f4 Na5 f5 Bc4 Bd3",
    eco: "B74",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Rauzer Attack-Neo-Modern Variation-Nyezhmetdinov Attack",
    fen: "r2qk2r/3bbppp/p1nppB2/1p6/4PP2/2N2N2/PPPQ2PP/2KR1B1R b kq - 0 11",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bg5 e6 Qd2 a6 O-O-O Bd7 f4 Be7 Nf3 b5 Bxf6",
    eco: "B69",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Sarratt Defence-Bello Gambit-Baldwin Gambit",
    fen: "rnb1kbnr/pppp1p1p/8/3N4/2q1Pp2/5Q2/PPPP2PP/R1B2R1K b kq - 1 9",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 O-O gxf3 Qxf3 Qf6 Nc3 Qd4+ Kh1 Qxc4 Nd5",
    eco: "C37",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Steinitz Defence Deferred-Rubinstein Variation-Boleslavsky Variation",
    fen: "r1bqkb1r/2p3pp/p1p5/3pPp2/4n3/2N2N2/PPP2PPP/R1BQR1K1 b kq - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O d6 Bxc6+ bxc6 d4 Nxe4 Re1 f5 dxe5 d5 Nc3",
    eco: "C79",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Yugoslav Attack-Main Line-Czerniak Variation",
    fen: "r2q1rk1/pp2ppbp/3pbnp1/8/2BBP3/2N2P2/PPPQ2PP/R3K2R w KQ - 1 11",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2 Nc6 Bc4 Nxd4 Bxd4 Be6",
    eco: "B77",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Richter-Rauzer Variation-Rauzer Attack-Kantscher Line",
    fen: "r1bqk2r/4bppp/p2ppn2/1p4B1/3QPP2/2N5/PPP3PP/2KR1B1R w kq - 0 11",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Bg5 e6 Qd2 Be7 O-O-O Nxd4 Qxd4 a6 f4 b5",
    eco: "B66",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Rosen Attack-Noah's Ark Trap",
    fen: "r1bqk2r/4bppp/p2p1n2/1pp5/3QP3/1B6/PPP2PPP/RNB1R1K1 w kq - 0 11",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 d4 Nxd4 Nxd4 exd4 Qxd4 c5",
    eco: "C88/C90",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-Classical Defence-Breslau Variation",
    fen: "r2q1rk1/2p1bppp/p3b3/1p1pn3/3Nn3/1BP5/PP3PPP/RNBQR1K1 w - - 0 12",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 c3 Be7 Re1 O-O Nd4 Nxe5",
    eco: "C83",
    difficulty: "Very Hard"
  },
  {
    name: "French Defence-Open System-Chistyakov Defence-Modern Line",
    fen: "r1b1kb1r/1p3ppp/p2qpn2/8/2BN4/8/PPP2PPP/R1BQ1RK1 w kq - 0 11",
    moves: "e4 e6 d4 d5 Nd2 c5 exd5 Qxd5 Ngf3 cxd4 Bc4 Qd6 O-O Nf6 Nb3 Nc6 Nbxd4 Nxd4 Nxd4 a6",
    eco: "C07",
    difficulty: "Very Hard"
  },
  {
    name: "Alekhine Defence-4 Pawns Attack-Main Line-Tartakower Variation",
    fen: "2kr3r/pppqbppp/1nn1p3/4Pb2/2PP4/2N1BN2/PP2B1PP/R2Q1RK1 w - - 6 12",
    moves: "e4 Nf6 e5 Nd5 d4 d6 c4 Nb6 f4 dxe5 fxe5 Nc6 Be3 Bf5 Nc3 e6 Nf3 Qd7 Be2 O-O-O O-O Be7",
    eco: "B03",
    difficulty: "Very Hard"
  },
  {
    name: "Dunst Opening-Sandomierz Defence-Father Matthew Variant",
    fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQK3 w Qkq - 10 17",
    moves: "Nc3 Nf6 Nb1 Nh5 Nc3 Ng3 Nb1 Nxh1 Nc3 Ng3 Nb1 Nxf1 Nc3 Ng3 Nb1 Nh5 Nc3 Nf4 Nb1 Nh3 Nc3 Nxg1 Nb1 Nh3 Nc3 Nf4 Nb1 Nh5 Nc3 Nf6 Nb1 Ng8",
    eco: "A00",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Stoltz Variation-Centre Variation-Mikhalchishin Line",
    fen: "r1bqk2r/pp1n1ppp/2pb4/4P3/2P1Q3/5N2/PP3PPP/R1B1KB1R b KQkq - 0 10",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Qc2 Bd6 e4 dxe4 Nxe4 Nxe4 Qxe4 e5 dxe5",
    eco: "D45",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Indian Defence-Fianchetto Traditional Variation-Capablanca Variation-Monticeli Trap",
    fen: "rn1q1rk1/pbpp1ppp/1p2p3/6N1/2PP4/2n3P1/PPQ1PPBP/R3K2R b KQ - 1 10",
    moves: "d4 Nf6 c4 e6 Nf3 b6 g3 Bb7 Bg2 Bb4+ Bd2 Bxd2+ Qxd2 O-O Nc3 Ne4 Qc2 Nxc3 Ng5",
    eco: "E16",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Pawn-Bogo-Indian Defence-Exchange Variation-Monticelli Trap",
    fen: "rn1q1rk1/pbpp1ppp/1p2p3/6N1/2PP4/2n3P1/PPQ1PPBP/R3K2R b KQ - 1 10",
    moves: "d4 Nf6 c4 e6 Nf3 Bb4+ Bd2 Bxd2+ Qxd2 b6 g3 Bb7 Bg2 O-O Nc3 Ne4 Qc2 Nxc3 Ng5",
    eco: "E11",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Kopec Variation-Delayed Alapin Variation-Basman-Palatnik Double Gambit",
    fen: "r1b1kb1r/pp2pppp/2np4/q2P4/8/2P2N2/P3BPPP/R1BQK2R b KQkq - 0 9",
    moves: "e4 c5 Nf3 d6 c3 Nf6 Be2 Nc6 d4 cxd4 cxd4 Nxe4 d5 Qa5+ Nc3 Nxc3 bxc3",
    eco: "B50",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Sozin Variation-Najdorf Variation-Ivkov Variation",
    fen: "r3kb1r/1b3ppp/p2ppn2/qpn1P1B1/3N4/1BN5/PPPQ1PPP/2KRR3 b kq - 0 12",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 Nbd7 Bc4 Qa5 Qd2 e6 O-O-O b5 Bb3 Bb7 Rhe1 Nc5 e5",
    eco: "B94",
    difficulty: "Very Hard"
  },
  {
    name: "King's Bishop Opening-Wing Gambit-MacDonnell Double Gambit-4 Pawns' Gambit",
    fen: "rnbqk1nr/pppp1ppp/8/8/2BPP2b/5N2/P1P4p/RNBQ1R1K b kq - 1 9",
    moves: "e4 e5 Bc4 Bc5 b4 Bxb4 f4 exf4 Nf3 Be7 d4 Bh4+ g3 fxg3 O-O gxh2+ Kh1",
    eco: "C23",
    difficulty: "Very Hard"
  },
  {
    name: "Evans Gambit Accepted-Morphy Attack-Göring Attack-Steinitz Variation",
    fen: "r1bqk1nr/ppp3pp/1b1p1p2/n7/2BPP3/2N1BN2/P4PPP/R2Q1RK1 b kq - 1 11",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Bc5 d4 exd4 O-O d6 cxd4 Bb6 Nc3 Na5 Bg5 f6 Be3",
    eco: "C51",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-2 Knights Defence-Koltanowski Variation-Holzhausen Attack",
    fen: "r1b1k2r/ppp1qppp/5n2/4p1B1/2BnP3/2N5/PPP3PP/R2Q1RK1 b kq - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 O-O Bc5 d4 Bxd4 Nxd4 Nxd4 Bg5 d6 f4 Qe7 fxe5 dxe5 Nc3",
    eco: "C55",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Meran Variation-Blumenfeld Variation-Rabinovich Variation",
    fen: "r1bqkb1r/3n1ppp/p3p3/1N2P3/3p2n1/3B1N2/PP3PPP/R1BQK2R w KQkq - 1 12",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Bd3 dxc4 Bxc4 b5 Bd3 a6 e4 c5 e5 cxd4 Nxb5 Ng4",
    eco: "D49",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Chigorin Variation-Leonhardt Variation",
    fen: "rnb1k2r/2q1bp1p/p2p1n2/1ppPp1p1/4P3/2P2N1P/PPBN1PP1/R1BQR1K1 w kq - 0 14",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 Na5 Bc2 c5 d4 Qc7 h3 Nc6 d5 Nb8 Nbd2 g5",
    eco: "C88",
    difficulty: "Very Hard"
  },
  {
    name: "4 Knights Game-Scotch Variation Accepted-Paulsen Variation-Tarrasch Variation",
    fen: "r2q1rk1/p1p2ppp/4bn2/3p2B1/1b6/2NB4/PPP2PPP/R2Q1RK1 w - - 4 11",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5 exd5 cxd5 O-O O-O Bg5 Be6",
    eco: "C47",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Anti-Meran System-Anti-Meran Gambit-Szabó Variation",
    fen: "r1bqkb1r/p2n1p2/2p1pn2/1p2P1B1/2pP4/2N2Q2/PP3PPP/R3KB1R b KQkq - 2 11",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 Bg5 dxc4 e4 b5 e5 h6 Bh4 g5 Nxg5 hxg5 Bxg5 Nbd7 Qf3",
    eco: "D44",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Allgaier Gambit-Walker Attack-Urusov Attack",
    fen: "rnbq1bnr/ppp3k1/7p/3B4/3PPppP/8/PPP3P1/RNBQK2R b KQ - 0 9",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ng5 h6 Nxf7 Kxf7 Bc4+ d5 Bxd5+ Kg7 d4",
    eco: "C39",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Scotch Gambit-Max Lange Attack Accepted-Schlechter Variation",
    fen: "r2qk2r/ppp2pPp/2n1b3/2b5/2pp4/5N2/PPP2PPP/RNBQR1K1 b kq - 0 9",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Bc5 e5 d5 exf6 dxc4 Re1+ Be6 fxg7",
    eco: "C56",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Classical Variation-Carlsbad Variation-Petursson Variation",
    fen: "r1bqr1k1/pp2bppp/2n2n2/3p2B1/3N4/2N3P1/PP2PPBP/R2Q1RK1 w - - 1 11",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 Nf6 Bg2 Be7 O-O O-O Bg5 cxd4 Nxd4 Re8",
    eco: "D34",
    difficulty: "Very Hard"
  },
  {
    name: "Petrov's Defence-Marshall Variation-Tarrasch Variation-Marshall Trap",
    fen: "rn1q1rk1/ppp3pp/8/3P1p2/3Pn1b1/3B1N2/PP3PPb/RNBQR1K1 w - - 0 11",
    moves: "e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Bd6 O-O O-O c4 Bg4 cxd5 f5 Re1 Bxh2+",
    eco: "C42",
    difficulty: "Very Hard"
  },
  {
    name: "Grünfeld Defence-Classical Variation-Spassky Variation-Main Line",
    fen: "r1bq1rk1/pp2ppbp/2n3p1/8/2BPP3/4B3/P3NPPP/R2Q1RK1 b - - 0 11",
    moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 Bc4 O-O Ne2 c5 O-O Nc6 Be3 cxd4 cxd4",
    eco: "D88",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Muzio Gambit-Sarratt Defence-Paulsen Defence",
    fen: "r1b1k2r/ppppnp1p/2n4b/4q3/2B2p2/2NP1Q2/PPPB2PP/4RRK1 b kq - 6 11",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 O-O gxf3 Qxf3 Qf6 e5 Qxe5 d3 Bh6 Nc3 Ne7 Bd2 Nbc6 Rae1",
    eco: "C37",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Chigorin Defence-Panov System",
    fen: "r1b2rk1/2q1bppp/p2p1n2/np2p3/3PP3/5N1P/PPBN1PP1/R1BQR1K1 b - - 0 13",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 h3 Na5 Bc2 c5 d4 Qc7 Nbd2 cxd4 cxd4",
    eco: "C99",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Chigorin Defence-Rauzer Attack",
    fen: "r1b2rk1/2q1bppp/p1np1n2/1pP1p3/4P3/2P2N1P/PPBN1PP1/R1BQR1K1 b - - 0 13",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 h3 Na5 Bc2 c5 d4 Qc7 Nbd2 Nc6 dxc5",
    eco: "C98",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Berlin Defence-Rio Gambit Accepted-Pillsbury Variation",
    fen: "r1bq1rk1/pnppbppp/2p5/4P3/8/2N2N2/PPP1QPPP/R1B1R1K1 b - - 4 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Be7 Qe2 Nd6 Bxc6 bxc6 dxe5 Nb7 Nc3 O-O Re1",
    eco: "C67",
    difficulty: "Very Hard"
  },
  {
    name: "Evans Gambit Accepted-Pierce Defence-Compromised Defence-Paulsen/Main Variation",
    fen: "r1b1k2r/ppppnppp/2n3q1/b3P3/2B5/BQN2N2/P4PPP/R4RK1 b kq - 2 11",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 exd4 O-O dxc3 Qb3 Qf6 e5 Qg6 Nxc3 Nge7 Ba3",
    eco: "C52",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Bishop Check Line-Suhle Defence-Knorre Variation",
    fen: "r1b1k2r/p1q2pp1/2pb1n1p/n3N3/3Pp3/8/PPPBBPPP/RN1QK2R b KQkq - 2 12",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6 bxc6 Be2 h6 Nf3 e4 Ne5 Bd6 d4 Qc7 Bd2",
    eco: "C59",
    difficulty: "Very Hard"
  },
  {
    name: "French Defence-Winawer Variation-Poisoned Pawn Variation-Konstantinopolsky/Main Variation",
    fen: "rnb1k1r1/ppq1np1Q/4p3/3pP3/3p4/P1P5/2P1NPPP/R1B1KB1R b KQq - 1 10",
    moves: "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3 Ne7 Qg4 Qc7 Qxg7 Rg8 Qxh7 cxd4 Ne2",
    eco: "C19",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Classical Variation-Carlsbad Variation-Spassky Variation",
    fen: "r2q1rk1/pp2bpp1/2n2n1p/3p4/3N2b1/2N1B1P1/PP2PPBP/R2Q1RK1 w - - 2 12",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 Nf6 Bg2 Be7 O-O O-O Bg5 cxd4 Nxd4 h6 Be3 Bg4",
    eco: "D34",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Meran Variation-Blumenfeld Variation-Sozin Variation II",
    fen: "r1bqkb1r/5ppp/p3pn2/1N2n3/3p4/3B1N2/PP3PPP/R1BQK2R w KQkq - 0 12",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Bd3 dxc4 Bxc4 b5 Bd3 a6 e4 c5 e5 cxd4 Nxb5 Nxe5",
    eco: "D49",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Grünfeld Defence-Modern Exchange Variation-Pawn Grab Line",
    fen: "r1bq1rk1/pp2pp1p/2n3p1/2pP4/4P3/2b2N2/P3BPPP/1RBQK2R w K - 0 11",
    moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 Nf3 c5 Rb1 O-O Be2 Nc6 d5 Bxc3+",
    eco: "D85",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Chigorin Defence-Yugoslav System",
    fen: "r3r1k1/2qbbp1p/p2p1np1/npp1p3/3PP3/2P1NN1P/PPB2PP1/R1BQR1K1 w - - 0 15",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d6 h3 Na5 Bc2 c5 d4 Qc7 Nbd2 Bd7 Nf1 Rfe8 Ne3 g6",
    eco: "C97",
    difficulty: "Very Hard"
  },
  {
    name: "Dunst Opening-Sandomierski Gambit",
    fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQK3 w Qkq - 10 17",
    moves: "Nc3 Nf6 Nb1 Ng4 Nc3 Ne3 Nb1 Nxf1 Nc3 Ng3 Nb1 Nxh1 Nc3 Ng3 Nb1 Ne4 Nc3 Ng5 Nb1 Nh3 Nc3 Nxg1 Nb1 Nh3 Nc3 Ng5 Nb1 Ne4 Nc3 Nf6 Nb1 Ng8",
    eco: "A00",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Neo-Orthodox Variation-Anti-Tartakower Variation-Petrosian Variation",
    fen: "r1bq1rk1/pp1n1pp1/2p1pb1p/8/2BP4/2N1PN2/PP3PPP/2RQ1RK1 b - - 0 11",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bxf6 Bxf6 Rc1 c6 Bd3 Nd7 O-O dxc4 Bxc4",
    eco: "D55",
    difficulty: "Very Hard"
  },
  {
    name: "King's Gambit Declined-Falkbeer Countergambit Accepted-Charousek Gambit Accepted-Alapin Variation",
    fen: "rnb1k2r/ppp2ppp/8/3q4/4nP2/8/PPPNQbPP/RNBK1B1R b kq - 1 9",
    moves: "e4 e5 f4 d5 exd5 e4 d3 Nf6 dxe4 Nxe4 Nf3 Bc5 Qe2 Bf2+ Kd1 Qxd5+ Nfd2",
    eco: "C32",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Greco's Attack-Greco Variation-Aitken Variation",
    fen: "r1bqk2r/pppp1ppp/2n5/8/2BP4/B1b2N2/P4PPP/R2Q1RK1 b kq - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+ Nc3 Nxe4 O-O Nxc3 bxc3 Bxc3 Ba3",
    eco: "C54",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Tarrasch Defence-Exchange Variation-San Sebastian Variation",
    fen: "rnb1k2r/pp3ppp/4p3/q7/1b1PP3/5N2/P2B1PPP/R2QKB1R w KQkq - 3 10",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c5 cxd5 Nxd5 e4 Nxc3 bxc3 cxd4 cxd4 Bb4+ Bd2 Qa5",
    eco: "D41",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Barmen Defence-Central Exchange Variation-Endgame Variation",
    fen: "r3kbnr/pp2pppp/8/8/3n4/2N2P2/PP3P1P/R1B1KB1R w KQkq - 0 10",
    moves: "e4 c5 c3 d5 exd5 Qxd5 d4 cxd4 cxd4 Nc6 Nf3 Bg4 Nc3 Bxf3 gxf3 Qxd4 Qxd4 Nxd4",
    eco: "B22",
    difficulty: "Very Hard"
  },
  {
    name: "Caro-Kann Defence-Spassky Variation-Seirawan Variation-Lobron System",
    fen: "r2qk2r/pp1nbpp1/2p1pn1p/7P/3P4/3Q1NN1/PPPB1PP1/2KR3R w kq - 4 13",
    moves: "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3 Bxd3 Qxd3 e6 Bd2 Ngf6 O-O-O Be7",
    eco: "B19",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Marshall Counterattack-Modern Variation",
    fen: "r1bq1rk1/4bppp/p1p5/1p1nR3/8/1BP5/PP1P1PPP/RNBQ2K1 w - - 0 12",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d5 exd5 Nxd5 Nxe5 Nxe5 Rxe5 c6",
    eco: "C89",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Marshall Counterattack-Original Marshall Attack",
    fen: "r1bq1rk1/2p1bppp/p4n2/1p2R3/8/1BP5/PP1P1PPP/RNBQ2K1 w - - 1 12",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d5 exd5 Nxd5 Nxe5 Nxe5 Rxe5 Nf6",
    eco: "C89",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Berger Variation-Russian Variation",
    fen: "r2q1rk1/1b2bppp/p1np1n2/1p2p3/3PP3/5N1P/PPBN1PP1/R1BQR1K1 w - - 1 14",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Na5 Bc2 c5 d4 Bb7 Nbd2 cxd4 cxd4 Nc6",
    eco: "C88/C96",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Rio Gambit Accepted-l'Hermet Variation-Berlin Wall Defence",
    fen: "r1bk1b1r/ppp2ppp/2p5/4Pn2/8/5N2/PPP2PPP/RNB2RK1 w - - 0 9",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5 Qxd8+ Kxd8",
    eco: "C67",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-l'Hermet Variation-Berlin Wall Defence-J. Rogers Line",
    fen: "r2k1b1r/pppb1ppp/2p5/4Pn2/8/2N2N2/PPP2PPP/R1B2RK1 w - - 2 10",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5 Qxd8+ Kxd8 Nc3 Bd7",
    eco: "C67",
    difficulty: "Very Hard"
  },
  {
    name: "4 Knights Game-Spanish Variation-Ranken Variation-Spielmann Variation",
    fen: "r3kb1r/1pp2ppp/p1p1b3/3q4/3PN3/8/PPP2PPP/R1BQR1K1 w kq - 1 11",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 Bb5 a6 Bxc6 dxc6 Nxe5 Nxe4 Nxe4 Qd4 O-O Qxe5 Re1 Be6 d4 Qd5",
    eco: "C48",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Classical Variation-Capablanca Freeing Manoevre-Alekhine Variation",
    fen: "r1b2rk1/pp1nqppp/2p1p3/3n4/2BPN3/4PN2/PP3PPP/2RQK2R b K - 1 11",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 c6 Bd3 dxc4 Bxc4 Nd5 Bxe7 Qxe7 Ne4",
    eco: "D67",
    difficulty: "Very Hard"
  },
  {
    name: "Indian Defence-Benko Gambit Fully Accepted-Yugoslav Variation-King Walk/Main Variation",
    fen: "rn1q1rk1/4ppbp/3p1np1/2pP4/4P3/2N2NP1/PP3PKP/R1BQ3R b - - 4 11",
    moves: "d4 Nf6 c4 c5 d5 b5 cxb5 a6 bxa6 Bxa6 Nc3 d6 e4 Bxf1 Kxf1 g6 g3 Bg7 Kg2 O-O Nf3",
    eco: "A59",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Berger Variation-Chigorin Defence-Panov System",
    fen: "r1b2rk1/2q1bppp/p2p1n2/np2p3/3PP3/5N1P/PPBN1PP1/R1BQR1K1 b - - 0 13",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Na5 Bc2 c5 d4 Qc7 Nbd2 cxd4 cxd4",
    eco: "C88/C99",
    difficulty: "Very Hard"
  },
  {
    name: "Evans Gambit Accepted-Bronstein Defence-Tartakower Attack-Levenfish Variation",
    fen: "r1b1k1nr/pppq1ppp/1b6/n3N3/2B1P3/BQP5/P4PPP/RN3RK1 b kq - 0 11",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 d6 Qb3 Qd7 dxe5 dxe5 O-O Bb6 Ba3 Na5 Nxe5",
    eco: "C52",
    difficulty: "Very Hard"
  },
  {
    name: "Evans Gambit Accepted-Pierce Defence-Compromised Defence-Potter Variation",
    fen: "r1b1k2r/ppppnppp/2n3q1/b3P3/2B5/1QN2N2/P4PPP/R1BR2K1 b kq - 2 11",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 exd4 O-O dxc3 Qb3 Qf6 e5 Qg6 Nxc3 Nge7 Rd1",
    eco: "C52",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Greco Gambit-Greco's Attack-Steinitz Variation",
    fen: "r1bqk2r/ppp2ppp/2n5/3p4/2BPn3/B1P2N2/P4PPP/R2Q1RK1 b kq - 1 10",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+ Nc3 Nxe4 O-O Bxc3 bxc3 d5 Ba3",
    eco: "C54",
    difficulty: "Very Hard"
  },
  {
    name: "French Defence-Winawer Variation-Poisoned Pawn Variation-Euwe-Gligoric/Paoli Variation",
    fen: "rnb1k1r1/ppq1np1Q/4p3/3pP3/3p4/P1P5/2P2PPP/R1BK1BNR b q - 1 10",
    moves: "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3 Ne7 Qg4 Qc7 Qxg7 Rg8 Qxh7 cxd4 Kd1",
    eco: "C19",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Krause Attack-Carlsbad Variation-Morozevich Variation",
    fen: "r3kb1r/ppqn1p1p/2p5/4nbp1/P1N2B2/2N3P1/1P2PPBP/R2QK2R w KQkq - 0 12",
    moves: "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 Ne5 Nbd7 Nxc4 Qc7 g3 e5 dxe5 Nxe5 Bf4 Nfd7 Bg2 g5",
    eco: "D17",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Yugoslav Attack-Main Line-Soltis Variation",
    fen: "r1r3k1/pp1bppb1/2np1np1/q6p/3NP2P/1BN1BP2/PPPQ2P1/2KR3R w - - 0 13",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2 Nc6 Bc4 Bd7 O-O-O Qa5 Bb3 Rfc8 h4 h5",
    eco: "B79",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Berger Variation-Chigorin Defence-Yugoslav System",
    fen: "r3r1k1/2qbbp1p/p2p1np1/npp1p3/3PP3/2P1NN1P/PPB2PP1/R1BQR1K1 w - - 0 15",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Na5 Bc2 c5 d4 Qc7 Nbd2 Bd7 Nf1 Rfe8 Ne3 g6",
    eco: "C88/C97",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Marshall Counterattack-Modern Variation-Main Line",
    fen: "r1bq1rk1/4bppp/p1p5/1p1nR3/3P4/1BP5/PP3PPP/RNBQ2K1 b - - 0 12",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d5 exd5 Nxd5 Nxe5 Nxe5 Rxe5 c6 d4",
    eco: "C89",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Rio Gambit Accepted-Pillsbury Variation-Alapin Variation",
    fen: "r1bqr1k1/pnppbppp/2p5/4P3/2Q5/2N2N2/PPP2PPP/R1B1R1K1 b - - 6 11",
    moves: "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Be7 Qe2 Nd6 Bxc6 bxc6 dxe5 Nb7 Nc3 O-O Re1 Re8 Qc4",
    eco: "C67",
    difficulty: "Very Hard"
  },
  {
    name: "Scotch Game-Pulling Counterattack-Horwitz Attack-Blackburne Variation",
    fen: "r1bk2nr/pppp1ppp/2n5/1N6/4q3/8/PPPQBPPP/RN3RK1 b - - 0 9",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Qh4 Nb5 Bb4+ Bd2 Qxe4+ Be2 Kd8 O-O Bxd2 Qxd2",
    eco: "C45",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Karlsbad Variation-Panno Variation-Donner Line",
    fen: "1rbq1rk1/4pp1p/p2p1npb/n1pP4/2P5/2N3P1/PBQNPPBP/R4RK1 w - - 1 14",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 Nf3 d6 g3 O-O Bg2 Nc6 O-O a6 d5 Na5 Nd2 c5 Qc2 Rb8 b3 b5 Bb2 bxc4 bxc4 Bh6",
    eco: "E63",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Max Lange Attack-Marshall Variation-Rubinstein Variation",
    fen: "r3kb1r/ppp2ppp/2n1bP2/5qN1/2ppN3/8/PPP2PPP/R1BQR1K1 w kq - 8 12",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Bc5 e5 d5 exf6 dxc4 Re1+ Be6 Ng5 Qd5 Nc3 Qf5 Nce4 Bf8",
    eco: "C55",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Wade Variation-Larsen Variation-Kaidanov Gambit",
    fen: "r2qkb1r/pb1n1ppp/4p3/3nP3/Np1N4/3B4/PP3PPP/R1BQ1RK1 b kq - 0 13",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Bd3 dxc4 Bxc4 b5 Bd3 Bb7 e4 b4 Na4 c5 e5 Nd5 O-O cxd4 Nxd4",
    eco: "D47",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Orthodox Variation-Aronin-Taimanov Attack-Kozul Gambit",
    fen: "r1bq1rk1/pppn2bp/3p2n1/2PPp1p1/4Pp2/2N2P2/PP2BBPP/2RQNRK1 b - - 0 14",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7 Ne1 Nd7 Be3 f5 f3 f4 Bf2 g5 Rc1 Ng6 c5",
    eco: "E99",
    difficulty: "Very Hard"
  },
  {
    name: "Grünfeld Defence-Classical Variation-Spassky Variation-Seville Variation",
    fen: "r2q1rk1/pp2pBbp/6p1/n1p5/3PP1b1/2P1BP2/P3N1PP/R2Q1RK1 b - - 0 12",
    moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 Bc4 O-O Ne2 c5 O-O Nc6 Be3 Bg4 f3 Na5 Bxf7+",
    eco: "D87",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Double Gambit Accepted-Anderssen Attack-Main Line",
    fen: "r3kb1r/ppp2ppp/2n1b3/3q2B1/3pN3/5N2/PPP2PPP/R2QR1K1 b kq - 4 11",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Nxe4 Re1 d5 Bxd5 Qxd5 Nc3 Qa5 Nxe4 Be6 Bd2 Qd5 Bg5",
    eco: "C56",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Greco's Attack-Greco Variation-Bernstein Variation",
    fen: "r1bqk2r/ppp2ppp/2n5/3p4/2BP4/1Qb2N2/P4PPP/R1B2RK1 w kq - 0 11",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+ Nc3 Nxe4 O-O Nxc3 bxc3 Bxc3 Qb3 d5",
    eco: "C54",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Fegatello Attack-Fried Liver Attack-Leonhardt Variation",
    fen: "r1bq1b1r/ppn3pp/2p1k3/3np3/2BPQ3/P1N5/1PP2PPP/R1B1K2R w KQ - 1 12",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Nxd5 Nxf7 Kxf7 Qf3+ Ke6 Nc3 Nb4 Qe4 c6 a3 Na6 d4 Nc7",
    eco: "C57",
    difficulty: "Very Hard"
  },
  {
    name: "Scotch Game-Pulling Counterattack-Horwitz Attack-Rosenthal Variation",
    fen: "r1bk2nr/pppp1ppp/2n3q1/1N6/8/8/PPPNBPPP/R2Q1RK1 w - - 1 10",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Qh4 Nb5 Bb4+ Bd2 Qxe4+ Be2 Kd8 O-O Bxd2 Nxd2 Qg6",
    eco: "C45",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Orthodox Variation-Closed Variation-Bronstein Defence",
    fen: "rnb2rk1/ppp2pbp/3p2p1/3Pp3/2P1P2Q/2N1nP2/PP2K2P/R5NR b - - 1 12",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5 Nh5 Qd2 Qh4+ g3 Nxg3 Qf2 Nxf1 Qxh4 Nxe3 Ke2",
    eco: "E87",
    difficulty: "Very Hard"
  },
  {
    name: "Vienna Gambit-Steinitz Gambit-Zukertort Defence-Chigorin Variation",
    fen: "r1b1kbnr/ppp2ppp/2n5/3P4/3P3q/2N3P1/PPP2K2/R1BQ1BNR b kq - 0 9",
    moves: "e4 e5 Nc3 Nc6 f4 exf4 d4 Qh4+ Ke2 d5 exd5 Qe7+ Kf2 Qh4+ g3 fxg3+ hxg3",
    eco: "C25",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Greco's Attack-Möller-Therkatz Attack-Moeller-Bayonet Attack",
    fen: "r1bqk2r/ppp1nppp/3p1b2/3P4/2B1R1P1/5N2/PP3P1P/R1BQ2K1 b kq - 0 12",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+ Nc3 Nxe4 O-O Bxc3 d5 Bf6 Re1 Ne7 Rxe4 d6 g4",
    eco: "C54",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Scotch Gambit-Max Lange Attack-Marshall/Long Variation",
    fen: "r3k2r/ppp2ppp/2n1bP2/2b2qN1/2ppN3/8/PPP2PPP/R1BQR1K1 b kq - 7 11",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Bc5 e5 d5 exf6 dxc4 Re1+ Be6 Ng5 Qd5 Nc3 Qf5 Nce4",
    eco: "C55",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Göring Gambit-Sea-cadet Mate",
    fen: "r2q1bnr/ppp1kBpp/3p4/3NN3/4P3/8/PP3PPP/R1Bb1RK1 b - - 2 10",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 c3 dxc3 Nxc3 d6 Bc4 Bg4 O-O Ne5 Nxe5 Bxd1 Bxf7+ Ke7 Nd5#",
    eco: "C44",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Classical Variation-Carlsbad Variation-Chandler Variation",
    fen: "r2qr1k1/pp2bpp1/2n1bn1p/3p4/3N4/2N1B1P1/PP2PPBP/2RQ1RK1 w - - 4 13",
    moves: "d4 d5 c4 e6 Nc3 c5 cxd5 exd5 Nf3 Nc6 g3 Nf6 Bg2 Be7 O-O O-O Bg5 cxd4 Nxd4 h6 Be3 Re8 Rc1 Be6",
    eco: "D34",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Lasker Defence-Main Line-Bernstein Variation",
    fen: "rnb2rk1/ppp2pp1/3q3p/3p4/3P4/1QP1PN2/P4PPP/R3KB1R w KQ - 2 12",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bh4 Ne4 Bxe7 Qxe7 cxd5 Nxc3 bxc3 exd5 Qb3 Qd6",
    eco: "D57",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Paris Attack-Allgaier-Thorold Gambit-Cook Variation",
    fen: "rnbq1bnr/ppp3k1/7p/4B3/2BPp1pP/8/PPP3P1/RN1QK2R b KQ - 3 10",
    moves: "e4 e5 f4 exf4 Nf3 g5 h4 g4 Ng5 h6 Nxf7 Kxf7 d4 d5 Bxf4 dxe4 Bc4+ Kg7 Be5+",
    eco: "C39",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-Classical Defence-Tarrasch Trap",
    fen: "r4rk1/2pqb1pp/p1n1p3/1p1pP3/4R3/1BP5/PP3PPP/RNBQ2K1 b - - 0 13",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 c3 Be7 Re1 O-O Nd4 Qd7 Nxe6 fxe6 Rxe4",
    eco: "C83",
    difficulty: "Very Hard"
  },
  {
    name: "Scotch Game-Pulling Counterattack-Horwitz Attack-MacDonell Variation",
    fen: "r1bk2nr/pppp1ppp/2n5/1N6/P4q2/8/1PPNBPPP/R2Q1RK1 b - - 0 10",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Qh4 Nb5 Bb4+ Bd2 Qxe4+ Be2 Kd8 O-O Bxd2 Nxd2 Qf4 a4",
    eco: "C45",
    difficulty: "Very Hard"
  },
  {
    name: "Scotch Game-Pulling Counterattack-Horwitz Attack-Vienna Variation",
    fen: "r1bk2nr/pppp1ppp/2n5/1N6/2P2q2/8/PP1NBPPP/R2Q1RK1 b - - 0 10",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Qh4 Nb5 Bb4+ Bd2 Qxe4+ Be2 Kd8 O-O Bxd2 Nxd2 Qf4 c4",
    eco: "C45",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Marshall Gambit-Slav Gambit-Tolush Variation",
    fen: "rnb1k1nr/pp3ppp/4p3/2B5/2P5/8/PP2BPqP/R2QK1NR w KQkq - 0 10",
    moves: "d4 d5 c4 e6 Nc3 c6 e4 dxe4 Nxe4 Bb4+ Bd2 Qxd4 Bxb4 Qxe4+ Be2 c5 Bxc5 Qxg2",
    eco: "D31",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Pawn-Queen's Indian Defence-Petrosian System-Murey Variation",
    fen: "2rqk2r/pb3ppp/1pnbp3/8/3PP3/P4N2/1BQ2PPP/3RKB1R w Kk - 3 13",
    moves: "d4 Nf6 c4 e6 Nf3 b6 a3 Bb7 Nc3 d5 cxd5 Nxd5 Qc2 c5 e4 Nxc3 bxc3 Nc6 Bb2 cxd4 cxd4 Rc8 Rd1 Bd6",
    eco: "E12",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Open Defence-Howell Attack-Ekström Variation",
    fen: "r4rk1/2pqbppp/p1n1b3/3pP3/2B1n3/5N2/PP2QPPP/RNBR2K1 w - - 1 13",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 Qe2 Be7 Rd1 O-O c4 bxc4 Bxc4 Qd7",
    eco: "C81",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Haxo Gambit-Saratt Variation-Cochrane-Schumoff Defence",
    fen: "r1bq3r/ppp2k1p/2n3p1/2Qp4/3pP3/8/PPP2PPP/RNB1K2R w KQ - 0 10",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bc5 Ng5 Nh6 Nxf7 Nxf7 Bxf7+ Kxf7 Qh5+ g6 Qxc5 d5",
    eco: "C44",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight Opening-Scotch Game-Haxo Gambit-Saratt Variation-Cochrane-Schumov Defence",
    fen: "r1bq3r/ppp2k1p/2np2p1/2Q5/3pP3/8/PPP2PPP/RNB1K2R w KQ - 0 10",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Bc4 Bc5 Ng5 Nh6 Nxf7 Nxf7 Bxf7+ Kxf7 Qh5+ g6 Qxc5 d6",
    eco: "C44",
    difficulty: "Very Hard"
  },
  {
    name: "4 Knights Game-Scotch Variation Accepted-Paulsen Variation-Löwenborg Variation",
    fen: "r1bq1rk1/p3bppp/2p2n2/3p2B1/8/2NB1Q2/PPP2PPP/4RRK1 b - - 3 12",
    moves: "e4 e5 Nf3 Nc6 Nc3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5 exd5 cxd5 O-O O-O Bg5 c6 Qf3 Be7 Rae1",
    eco: "C47",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Makogonov-Bondarevsky System-Makogonov Exchange Variation-Tartakower Variation",
    fen: "rn3rk1/p1p1qpp1/1p2b2p/3p4/3P4/4PN2/PP3PPP/2RQKB1R w K - 2 12",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bh4 b6 cxd5 Nxd5 Bxe7 Qxe7 Nxd5 exd5 Rc1 Be6",
    eco: "D59",
    difficulty: "Very Hard"
  },
  {
    name: "King's Indian Defence-Normal Variation-Sämisch Variation-Bronstein Variation",
    fen: "r1b1k2r/ppp2pbp/n2p2p1/3Pp3/2n1P2Q/2N2P2/PP3K1P/R5NR w kq - 0 13",
    moves: "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 e5 d5 Nh5 Be3 Na6 Qd2 Qh4+ g3 Nxg3 Qf2 Nxf1 Qxh4 Nxe3 Kf2 Nxc4",
    eco: "E80",
    difficulty: "Very Hard"
  },
  {
    name: "Grünfeld Defence-Spassky Variation-Main Line-Alekhine Variation",
    fen: "r2q1rk1/pp2ppbp/6p1/n7/2BPP1b1/4BP2/P3N1PP/2RQ1RK1 b - - 2 13",
    moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 Bc4 O-O Ne2 c5 O-O Nc6 Be3 cxd4 cxd4 Bg4 f3 Na5 Rc1",
    eco: "D88",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Closed Defence-Chigorin Variation-Alekhine Gambit",
    fen: "r4rk1/2q1bppp/p2p1n2/npp1p3/3PP3/2P1NQ2/PPB2PPP/R1B1R1K1 b - - 0 14",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 Na5 Bc2 c5 d4 Qc7 Nbd2 O-O Nf1 Bg4 Ne3 Bxf3 Qxf3",
    eco: "C90",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Lasker Defence-Main Line-Mar del Plata Gambit",
    fen: "rn1r2k1/ppp1qpp1/4b2p/3p4/2PP4/1Q2PN2/P4PPP/R3KB1R w KQ - 1 13",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bh4 Ne4 Bxe7 Qxe7 cxd5 Nxc3 bxc3 exd5 Qb3 Rd8 c4 Be6",
    eco: "D57",
    difficulty: "Very Hard"
  },
  {
    name: "Grünfeld Defence-Spassky Variation-Main Line-Sokolsky Variation",
    fen: "r2q1rk1/pp2ppbp/4b1p1/n2P4/4P3/3BBP2/P3N1PP/R2Q1RK1 b - - 0 14",
    moves: "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7 Bc4 O-O Ne2 c5 O-O Nc6 Be3 cxd4 cxd4 Bg4 f3 Na5 Bd3 Be6 d5",
    eco: "D89",
    difficulty: "Very Hard"
  },
  {
    name: "King's Pawn-King's Knight's Gambit-Lolli Gambit-Young Variation",
    fen: "rnb2bnr/pppp1k1p/5q2/8/4Pp2/2N1BQ2/PPP3PP/R4RK1 b - - 3 10",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 Bxf7+ Kxf7 O-O gxf3 Qxf3 Qf6 d4 Qxd4+ Be3 Qf6 Nc3",
    eco: "C37",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Accepted-Alekhine System-Except Main Line-Flohr Variation",
    fen: "r3kb1r/1bq2ppp/p3pn2/1p1P4/2p5/2N1PN2/PPQ2PPP/R1BR2K1 w kq - 1 14",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5 O-O a6 Qe2 b5 Bb3 Nc6 Rd1 c4 Bc2 Nb4 Nc3 Nxc2 Qxc2 Bb7 d5 Qc7",
    eco: "D28",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Accepted-Classical Defence-Alekhine System-Flohr Variation",
    fen: "r3kb1r/1bq2ppp/p3pn2/1p1P4/2p5/2N1PN2/PPQ2PPP/R1BR2K1 w kq - 1 14",
    moves: "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5 O-O a6 Qe2 Nc6 Rd1 b5 Bb3 c4 Bc2 Nb4 Nc3 Nxc2 Qxc2 Bb7 d5 Qc7",
    eco: "D28",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Scotch Gambit-Max Lange Attack-Berger Variation",
    fen: "r3k2r/ppp2ppp/1bn1bPq1/6N1/2ppN1P1/8/PPP2P1P/R1BQR1K1 w kq - 3 13",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Bc5 e5 d5 exf6 dxc4 Re1+ Be6 Ng5 Qd5 Nc3 Qf5 g4 Qg6 Nce4 Bb6",
    eco: "C55",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Blumenfeld Variation-Sozin Variation II-Sozin Variation I",
    fen: "r1bqkb1r/5ppp/4pn2/1p2N3/3p4/3B4/PP3PPP/R1BQ1RK1 b kq - 1 13",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Bd3 dxc4 Bxc4 b5 Bd3 a6 e4 c5 e5 cxd4 Nxb5 Nxe5 Nxe5 axb5 O-O",
    eco: "D49",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Lasker Defence-Teichmann Variation-Russian Variation",
    fen: "r4rk1/pp1bqpp1/2n1pn1p/2p5/2BP4/2N1PN2/PPQ2PPP/R2R2K1 w - - 4 14",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bh4 Ne4 Bxe7 Qxe7 Qc2 Nf6 Bd3 dxc4 Bxc4 c5 O-O Nc6 Rfd1 Bd7",
    eco: "D56",
    difficulty: "Very Hard"
  },
  {
    name: "King's Knight's Gambit-Muzio Gambit-Sarratt Defence-Young Gambit",
    fen: "rnb2bnr/pppp1k1p/5q2/8/4P3/2N1pQ2/PPP3PP/R4RK1 w - - 0 11",
    moves: "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 O-O gxf3 Qxf3 Qf6 Bxf7+ Kxf7 d4 Qxd4+ Be3 Qf6 Nc3 fxe3",
    eco: "C37",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Blumenfeld Variation-Sozin Variation II-Ståhlberg Variation",
    fen: "r1bqkb1r/5ppp/4pn2/1p2N3/3p4/3B1Q2/PP3PPP/R1B1K2R b KQkq - 1 13",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Bd3 dxc4 Bxc4 b5 Bd3 a6 e4 c5 e5 cxd4 Nxb5 Nxe5 Nxe5 axb5 Qf3",
    eco: "D49",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Normal Line-Maroczy Line-Stockholm Attack",
    fen: "r4rk1/pp2ppbp/3p1np1/q4P2/4P1P1/2N1B3/PPP1Q2P/R4RK1 b - - 0 14",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be2 Bg7 Be3 Nc6 O-O O-O Nb3 Be6 f4 Na5 f5 Bc4 Nxa5 Bxe2 Qxe2 Qxa5 g4",
    eco: "B74",
    difficulty: "Very Hard"
  },
  {
    name: "Evans Gambit Accepted-Main Line-Morphy Attack-Fraser-Mortimer Attack",
    fen: "r2q1knr/pppb1Bpp/1b1p4/n7/3PP3/2N2N2/P1Q2PPP/R1B2RK1 b - - 2 13",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Bc5 d4 exd4 O-O d6 cxd4 Bb6 Nc3 Bg4 Qa4 Bd7 Qb3 Na5 Bxf7+ Kf8 Qc2",
    eco: "C51",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Orthodox Defence-Capablanca Freeing Manoevre-Classical Variation",
    fen: "r1b2rk1/pp1nqppp/2p5/4p3/2BP4/2R1PN2/PP3PPP/3Q1RK1 w - - 0 13",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 c6 Bd3 dxc4 Bxc4 Nd5 Bxe7 Qxe7 O-O Nxc3 Rxc3 e5",
    eco: "D68",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Modern Variation-Main Line-Modern Main Line",
    fen: "r1b2rk1/5ppp/p1pb4/1p1n4/3P4/1BP3Pq/PP3P1P/RNBQR1K1 w - - 1 15",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d5 exd5 Nxd5 Nxe5 Nxe5 Rxe5 c6 d4 Bd6 Re1 Qh4 g3 Qh3",
    eco: "C89",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Capablanca Freeing Manoevre-Classical Variation-Maróczy Variation",
    fen: "r1b2rk1/pp1nqppp/2p5/4p3/2BP4/2R1PN2/PP3PPP/1Q3RK1 b - - 1 13",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 c6 Bd3 dxc4 Bxc4 Nd5 Bxe7 Qxe7 O-O Nxc3 Rxc3 e5 Qb1",
    eco: "D68",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Capablanca Freeing Manoevre-Classical Variation-Vidmar Variation",
    fen: "r1b2rk1/pp1nqppp/2p5/4p3/2BP4/2R1PN2/PPQ2PPP/5RK1 b - - 1 13",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 c6 Bd3 dxc4 Bxc4 Nd5 Bxe7 Qxe7 O-O Nxc3 Rxc3 e5 Qc2",
    eco: "D68",
    difficulty: "Very Hard"
  },
  {
    name: "Sicilian Defence-Dragon Variation-Classical Attack-Stockholm Attack",
    fen: "r4rk1/pp2ppbp/3p1np1/q4P2/4P1P1/2N1B3/PPP1Q2P/R4RK1 b - - 0 14",
    moves: "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 Be2 Nc6 O-O O-O Nb3 Be6 f4 Na5 f5 Bc4 Nxa5 Bxe2 Qxe2 Qxa5 g4",
    eco: "B74",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Marshall Counterattack-Modern Variation-Kevitz Variation",
    fen: "r1bq1rk1/5ppp/p2b4/1p1p4/3P4/2P1R3/PP3PPP/RNBQ2K1 b - - 2 14",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d5 exd5 Nxd5 Nxe5 Nxe5 Rxe5 c6 Bxd5 cxd5 d4 Bd6 Re3",
    eco: "C89",
    difficulty: "Very Hard"
  },
  {
    name: "Scotch Game-Pulling Counterattack-Horwitz Attack-Berger Variation",
    fen: "N1bk3r/pp1p1ppp/2n2n2/8/1b6/P4B1q/1PPN1P1P/R1BQK2R b KQ - 0 11",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Qh4 Nb5 Bb4+ Nd2 Qxe4+ Be2 Qxg2 Bf3 Qh3 Nxc7+ Kd8 Nxa8 Nf6 a3",
    eco: "C45",
    difficulty: "Very Hard"
  },
  {
    name: "Scotch Game-Golmayo Variation-Blackburne Attack-Gottschall Variation",
    fen: "1rb2rk1/pp3ppp/5q2/3P4/1n6/2P1Q3/PP3PPP/RN2KB1R w KQ - 1 13",
    moves: "e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Qf6 c3 Nge7 Qd2 d5 Nb5 Bxe3 Qxe3 O-O Nxc7 Rb8 Nxd5 Nxd5 exd5 Nb4",
    eco: "C45",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Semi-Tarrasch Defence-Exchange Variation-Kmoch Variation",
    fen: "rnbq1rk1/pp3ppp/4p3/1B6/3PP3/5N2/P2Q1PPP/R3K2R b KQ - 2 11",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c5 cxd5 Nxd5 e4 Nxc3 bxc3 cxd4 cxd4 Bb4+ Bd2 Bxd2+ Qxd2 O-O Bb5",
    eco: "D41",
    difficulty: "Very Hard"
  },
  {
    name: "Evans Gambit Accepted-Morphy Attack-Fraser-Mortimer Attack-Mortimer-Evans Gambit",
    fen: "r2q2nr/pppb1kpp/1b1p4/n7/3PP3/2N2N2/P1Q2PPP/R1B2RK1 w - - 0 14",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Bc5 d4 exd4 O-O d6 cxd4 Bb6 Nc3 Bg4 Qa4 Bd7 Qb3 Na5 Bxf7+ Kf8 Qc2 Kxf7",
    eco: "C51",
    difficulty: "Very Hard"
  },
  {
    name: "Vienna Gambit-Modern Variation-Würzburger Variation-Würzburger Trap",
    fen: "rn2kb1r/ppp2ppp/8/4P2N/8/1P1P2P1/P1b5/R1B1KB1R b KQkq - 0 12",
    moves: "e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 d3 Qh4+ g3 Nxg3 Nf3 Qh5 Nxd5 Bg4 Nf4 Bxf3 Nxh5 Bxd1 hxg3 Bxc2 b3",
    eco: "C29",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Evans Gambit Declined-Lange Variation-Pavlov Variation",
    fen: "r1b3r1/ppp2k1p/1b6/nP2B1q1/3PP3/8/P1PN1PPP/R2QK2R b KQ - 2 12",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bb6 b5 Na5 Nxe5 Nh6 d4 d6 Bxh6 dxe5 Bxg7 Rg8 Bxf7+ Kxf7 Bxe5 Qg5 Nd2",
    eco: "C51",
    difficulty: "Very Hard"
  },
  {
    name: "2 Knights Defence-Double Gambit Accepted-Anderssen Attack-Yurdansky Attack",
    fen: "r4b1r/ppp1kp2/2n1bN1p/q5p1/1P1p3B/5N2/P1P2PPP/R2QR1K1 b - - 0 13",
    moves: "e4 e5 Nf3 Nc6 Bc4 Nf6 d4 exd4 O-O Nxe4 Re1 d5 Bxd5 Qxd5 Nc3 Qa5 Nxe4 Be6 Bg5 h6 Bh4 g5 Nf6+ Ke7 b4",
    eco: "C56",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Sozin Variation II-Sozin Variation I-Rellstab Attack",
    fen: "r3kb1r/5ppp/b3pn2/1p1qN3/3p4/3B4/PP2QPPP/R1B2RK1 w kq - 4 15",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Nf3 c6 e3 Nbd7 Bd3 dxc4 Bxc4 b5 Bd3 a6 e4 c5 e5 cxd4 Nxb5 Nxe5 Nxe5 axb5 O-O Qd5 Qe2 Ba6",
    eco: "D49",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Greco's Attack-Möller-Therkatz Attack-Therkatz-Herzog Variation",
    fen: "r1bq1rk1/ppp1nppN/3p4/3P4/2B1R3/8/PP3PPP/R2Q2K1 b - - 0 14",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+ Nc3 Nxe4 O-O Bxc3 d5 Bf6 Re1 Ne7 Rxe4 d6 Bg5 Bxg5 Nxg5 O-O Nxh7",
    eco: "C54",
    difficulty: "Very Hard"
  },
  {
    name: "Giuoco Piano-Centre Attack-Greco Gambit-Krause Variation",
    fen: "r1bq3r/ppp3pp/5k2/3pN3/1n1Pn3/1Q3P2/PP4PP/RN2K2R b KQ - 0 12",
    moves: "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+ Bd2 Nxe4 Bxb4 Nxb4 Bxf7+ Kxf7 Qb3+ d5 Ne5+ Kf6 f3",
    eco: "C54",
    difficulty: "Very Hard"
  },
  {
    name: "Ruy Lopez-Modern Variation-Modern Main Line-Spassky Variation",
    fen: "5rk1/5ppp/p1pbr3/1p1n3q/P2P2b1/1BPQB1P1/1P1N1P1P/R3R1K1 w - - 1 19",
    moves: "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d5 exd5 Nxd5 Nxe5 Nxe5 Rxe5 c6 d4 Bd6 Re1 Qh4 g3 Qh3 Be3 Bg4 Qd3 Rae8 Nd2 Re6 a4 Qh5",
    eco: "C89",
    difficulty: "Very Hard"
  },
  {
    name: "Queen's Gambit Declined-Capablanca Freeing Manoevre-Classical Variation-Rubinstein Variation",
    fen: "r1b2rk1/pp3ppp/2p5/4q3/2B2P2/2R1P3/PP4PP/3Q1RK1 b - - 0 15",
    moves: "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 Nbd7 Rc1 c6 Bd3 dxc4 Bxc4 Nd5 Bxe7 Qxe7 O-O Nxc3 Rxc3 e5 dxe5 Nxe5 Nxe5 Qxe5 f4",
    eco: "D69",
    difficulty: "Very Hard"
  }
];
