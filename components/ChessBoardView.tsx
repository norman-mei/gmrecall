
import Image from 'next/image';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Chess, Move } from 'chess.js';
import { ChessOpening } from '../types';

const FILE_LABELS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const RANK_LABELS = ['8', '7', '6', '5', '4', '3', '2', '1'];

interface ChessBoardViewProps {
  opening: ChessOpening;
  isDark: boolean;
  showCoords: boolean;
  animationEnabled: boolean;
  animationDelay: number;
  soundEnabled: boolean;
  children?: React.ReactNode;
  rightSidebarWidth: number;
  onRightSidebarWidthChange: (width: number) => void;
  sidebarWidth: number;
  onSidebarWidthChange: (width: number) => void;
}

type PieceState = {
  id: string;
  color: 'w' | 'b';
  type: string;
  square: string;
};

const ChessBoardView: React.FC<ChessBoardViewProps> = ({
  opening,
  isDark,
  showCoords,
  animationEnabled,
  animationDelay,
  soundEnabled,
  sidebarWidth,
  onSidebarWidthChange,
  children,
  rightSidebarWidth,
  onRightSidebarWidthChange,
}) => {
  const squareFromIndex = (rankIndex: number, fileIndex: number) =>
    `${FILE_LABELS[fileIndex]}${8 - rankIndex}`;

  const clonePieces = (map: Map<string, PieceState>): PieceState[] =>
    Array.from(map.values()).map((p) => ({ ...p }));

  const createInitialPieceMap = useCallback((game: Chess) => {
    const counters: Record<string, number> = {};
    const map = new Map<string, PieceState>();

    game.board().forEach((rank, rankIndex) => {
      rank.forEach((square, fileIndex) => {
        if (!square) return;
        const key = `${square.color}${square.type}`;
        counters[key] = (counters[key] || 0) + 1;
        const id = `${key}-${counters[key]}`;
        const squareStr = squareFromIndex(rankIndex, fileIndex);
        map.set(id, {
          id,
          color: square.color,
          type: square.type,
          square: squareStr,
        });
      });
    });

    return map;
  }, []);

  const applyMoveToPieceMap = useCallback(
    (pieceMap: Map<string, PieceState>, move: Move) => {
      const next = new Map(pieceMap);

      // Remove captured piece if present
      if (move.captured) {
        let capturedSquare = move.to;
        if (move.flags.includes('e')) {
          const file = move.to[0];
          const rankNum = Number(move.to[1]);
          const capRank = move.color === 'w' ? rankNum - 1 : rankNum + 1;
          capturedSquare = `${file}${capRank}` as any;
        }
        for (const [id, piece] of Array.from(next.entries())) {
          if (piece.square === capturedSquare) {
            next.delete(id);
            break;
          }
        }
      }

      // Move the piece
      let moverId: string | null = null;
      for (const [id, piece] of Array.from(next.entries())) {
        if (piece.square === move.from && piece.color === move.color) {
          moverId = id;
          break;
        }
      }

      if (moverId) {
        const mover = next.get(moverId);
        if (mover) {
          next.set(moverId, {
            ...mover,
            square: move.to,
            type: move.promotion ?? mover.type,
          });
        }
      }

      // Handle castling rook movement
      if (move.flags.includes('k') || move.flags.includes('q')) {
        const isWhite = move.color === 'w';
        const isKingSide = move.flags.includes('k');
        const rookFrom = isWhite
          ? isKingSide
            ? 'h1'
            : 'a1'
          : isKingSide
            ? 'h8'
            : 'a8';
        const rookTo = isWhite
          ? isKingSide
            ? 'f1'
            : 'd1'
          : isKingSide
            ? 'f8'
            : 'd8';

        for (const [id, piece] of Array.from(next.entries())) {
          if (piece.square === rookFrom && piece.type === 'r' && piece.color === move.color) {
            next.set(id, { ...piece, square: rookTo });
            break;
          }
        }
      }

      return next;
    },
    [],
  );

  const [fen, setFen] = useState(() => new Chess().fen());
  const [pieces, setPieces] = useState<PieceState[]>(() => {
    const game = new Chess();
    const map = createInitialPieceMap(game);
    return clonePieces(map);
  });
  const [activeMoveIndex, setActiveMoveIndex] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const rightSidebarRef = useRef<HTMLDivElement>(null);
  const playbackRef = useRef<number | null>(null);
  const moveAudioRef = useRef<HTMLAudioElement | null>(null);
  const captureAudioRef = useRef<HTMLAudioElement | null>(null);
  const castleAudioRef = useRef<HTMLAudioElement | null>(null);
  const checkAudioRef = useRef<HTMLAudioElement | null>(null);
  const boardSize = 'clamp(320px, 70vw, 640px)';
  const lightCoordColor = '#FFCE9E';
  const darkCoordColor = '#D18B47';
  const fileColor = (file: string) => (['a', 'c', 'e', 'g'].includes(file) ? lightCoordColor : darkCoordColor);
  const rankColor = (rank: string) => (['2', '4', '6', '8'].includes(rank) ? lightCoordColor : darkCoordColor);
  const lightSquare = '/images/lightsquare.svg';
  const darkSquare = '/images/darksquare.svg';

  const positionForSquare = (sq: string) => {
    const file = sq[0];
    const rank = Number(sq[1]);
    const fileIndex = FILE_LABELS.indexOf(file);
    const rankIndex = 8 - rank;
    return {
      left: `${(fileIndex / 8) * 100}%`,
      top: `${(rankIndex / 8) * 100}%`,
    };
  };

  const pieceAssets = useMemo(
    () => ({
      wp: { src: '/images/whitepawn.svg' },
      wn: { src: '/images/whiteknight.svg' },
      wb: { src: '/images/whitebishop.svg' },
      wr: { src: '/images/whiterook.svg' },
      wq: { src: '/images/whitequeen.svg' },
      wk: { src: '/images/whiteking.svg' },
      bp: { src: '/images/blackpawn.svg' },
      bn: { src: '/images/blackknight.svg' },
      bb: { src: '/images/blackbishop.svg' },
      br: { src: '/images/blackrook.svg' },
      bq: { src: '/images/blackqueen.svg' },
      bk: { src: '/images/blackking.svg' },
    }),
    [],
  );

  const moveList = useMemo(
    () => opening.moves.split(/\s+/).filter((m) => m.trim().length > 0),
    [opening.moves],
  );

  const moveStates = useMemo(() => {
    const game = new Chess();
    let pieceMap = createInitialPieceMap(game);
    const states: { fen: string; pieces: PieceState[] }[] = [
      { fen: game.fen(), pieces: clonePieces(pieceMap) },
    ];

    moveList.forEach((moveStr) => {
      try {
        const result = game.move(moveStr) as Move | null;
        if (result) {
          pieceMap = applyMoveToPieceMap(pieceMap, result);
          states.push({ fen: game.fen(), pieces: clonePieces(pieceMap) });
        }
      } catch (error) {
        console.warn('Chess logic error:', error);
      }
    });

    return states;
  }, [applyMoveToPieceMap, createInitialPieceMap, moveList]);

  const moveMeta = useMemo(() => {
    const game = new Chess();
    const getInCheck = () => {
      if (typeof game.inCheck === 'function') return game.inCheck();
      // Fallback for older chess.js versions
      // @ts-expect-error legacy method name
      if (typeof game.in_check === 'function') return game.in_check();
      return false;
    };
    return moveList.map((moveStr) => {
      const result = game.move(moveStr) as Move | null;
      return {
        isCapture: !!result?.captured,
        isCastle: result ? result.flags.includes('k') || result.flags.includes('q') : false,
        isCheck: result ? getInCheck() : false,
      };
    });
  }, [moveList]);

  useEffect(() => {
    const targetIndex = Math.min(
      moveStates.length - 1,
      Math.max(0, activeMoveIndex + 1),
    );
    const targetState = moveStates[targetIndex];
    setFen(targetState.fen);
    setPieces(targetState.pieces);
  }, [activeMoveIndex, moveStates]);

  const stopAutoPlayback = useCallback(() => {
    if (playbackRef.current !== null) {
      clearInterval(playbackRef.current);
      playbackRef.current = null;
    }
  }, []);

  useEffect(() => {
    setActiveMoveIndex(-1);
    stopAutoPlayback();

    if (!animationEnabled || moveList.length === 0) {
      setActiveMoveIndex(moveList.length - 1);
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveMoveIndex((prev) => {
        const next = prev + 1;
        if (next >= moveList.length) {
          stopAutoPlayback();
          return prev;
        }
        return next;
      });
    }, animationDelay);

    playbackRef.current = intervalId;

    return () => {
      stopAutoPlayback();
    };
  }, [animationDelay, animationEnabled, moveList.length, opening, stopAutoPlayback]);

  useEffect(() => {
    if (!scrollRef.current) return;
    const activeEl = scrollRef.current.querySelector('[data-active-move=\"true\"]') as HTMLElement | null;
    if (!activeEl) return;
    const container = scrollRef.current;
    const elTop = activeEl.offsetTop;
    const elBottom = elTop + activeEl.offsetHeight;
    if (elTop < container.scrollTop) {
      container.scrollTop = elTop - 8;
    } else if (elBottom > container.scrollTop + container.clientHeight) {
      container.scrollTop = elBottom - container.clientHeight + 8;
    }
  }, [activeMoveIndex, moveList.length]);

  const handleStep = useCallback(
    (direction: -1 | 1) => {
      stopAutoPlayback();
      setActiveMoveIndex((prev) => {
        const next = prev + direction;
        return Math.max(-1, Math.min(moveList.length - 1, next));
      });
    },
    [moveList.length, stopAutoPlayback],
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    moveAudioRef.current = new Audio('/sounds/move.mp3');
    captureAudioRef.current = new Audio('/sounds/capture.mp3');
    castleAudioRef.current = new Audio('/sounds/castle.mp3');
    checkAudioRef.current = new Audio('/sounds/check.mp3');
    return () => {
      moveAudioRef.current = null;
      captureAudioRef.current = null;
      castleAudioRef.current = null;
      checkAudioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!soundEnabled || activeMoveIndex < 0) return;
    const meta = moveMeta[activeMoveIndex];
    const audio = meta?.isCastle
      ? castleAudioRef.current
      : meta?.isCheck
        ? checkAudioRef.current
        : meta?.isCapture
          ? captureAudioRef.current
          : moveAudioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => null);
  }, [activeMoveIndex, moveMeta, soundEnabled]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }
      e.preventDefault();
      handleStep(e.key === 'ArrowLeft' ? -1 : 1);
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleStep]);

  const boardData = useMemo(() => {
    const chess = new Chess();
    chess.load(fen);
    return chess.board();
  }, [fen]);

  return (
    <div
      className="flex flex-col xl:flex-row items-start gap-0 bg-white/60 dark:bg-black/20 p-5 rounded-2xl backdrop-blur-sm shadow-md border border-gray-100 dark:border-white/5 overflow-hidden"
      style={{ '--board-size': boardSize } as React.CSSProperties}
    >
      {/* Chess Board */}
      <div
        className="w-full md:w-auto shrink-0"
        style={{ width: 'var(--board-size)' }}
      >
        <div
          className={`relative aspect-square shadow-2xl rounded-2xl overflow-hidden border-4 ${isDark ? 'border-gray-600' : 'border-gray-800'
            }`}
        >
          <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
            {boardData.map((rank, rankIndex) =>
              rank.map((square, fileIndex) => {
                const isLight = (rankIndex + fileIndex) % 2 === 0;
                return (
                  <div
                    key={`${rankIndex}-${fileIndex}`}
                    className="relative w-full h-full"
                    style={{
                      backgroundImage: `url(${isLight ? lightSquare : darkSquare})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {showCoords && rankIndex === 7 && (
                      <span
                        className="absolute bottom-1 left-1 text-[10px] font-black"
                        style={{ color: fileColor(FILE_LABELS[fileIndex]) }}
                      >
                        {FILE_LABELS[fileIndex]}
                      </span>
                    )}
                    {showCoords && fileIndex === 7 && (
                      <span
                        className="absolute top-1 right-1 text-[10px] font-black"
                        style={{ color: rankColor(RANK_LABELS[rankIndex]) }}
                      >
                        {RANK_LABELS[rankIndex]}
                      </span>
                    )}
                  </div>
                );
              }),
            )}
          </div>
          <div className="absolute inset-0 pointer-events-none">
            {pieces.map((piece) => {
              const pos = positionForSquare(piece.square);
              const asset = pieceAssets[`${piece.color}${piece.type}` as keyof typeof pieceAssets];
              if (!asset?.src) return null;
              return (
                <div
                  key={piece.id}
                  className="absolute"
                  style={{
                    left: pos.left,
                    top: pos.top,
                    width: '12.5%',
                    height: '12.5%',
                    transition: animationEnabled ? 'left 0.3s ease, top 0.3s ease' : 'none',
                  }}
                >
                  <Image
                    src={asset.src}
                    alt={`${piece.color}${piece.type}`}
                    fill
                    sizes="(max-width: 640px) 60px, 80px"
                    className="object-contain select-none pointer-events-none"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Move History Sidebar */}
      {/* Resize Handle between Board and Move Sidebar */}
      <div
        className="hidden xl:flex w-4 cursor-ew-resize items-center justify-center hover:bg-blue-500/10 transition-colors self-stretch shrink-0"
        onMouseDown={(e) => {
          e.preventDefault();
          const startX = e.clientX;
          const startWidth = sidebarWidth;

          const onMouseMove = (moveEvent: MouseEvent) => {
            const delta = moveEvent.clientX - startX;
            // Dragging right increases gap? No, we are resizing the sidebar width.
            // The handle is to the LEFT of the sidebar.
            // So dragging right moves the left edge of the sidebar to the right, DECREASING width.
            const newWidth = Math.max(220, Math.min(520, startWidth - delta));
            onSidebarWidthChange(newWidth);
          };

          const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.body.style.cursor = '';
          };

          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
          document.body.style.cursor = 'ew-resize';
        }}
      >
        <div className="w-1 h-12 bg-gray-300 dark:bg-zinc-600 rounded-full" />
      </div>

      <div
        ref={sidebarRef}
        className="w-full xl:w-auto bg-white dark:bg-zinc-800 rounded-2xl shadow-xl border border-gray-200 dark:border-zinc-700 flex flex-col overflow-hidden shrink-0 mt-6 xl:mt-0"
        style={{ height: 'var(--board-size)', width: `${sidebarWidth}px` }}
      >
        <div className="p-3 bg-gray-100 dark:bg-zinc-700/50 border-b border-gray-200 dark:border-zinc-700">
          <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-2">
            <span>♟</span> Moves
          </h3>
        </div>
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 custom-scrollbar no-scrollbar relative bg-gray-50 dark:bg-zinc-900/50">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {Array.from({ length: Math.ceil(moveList.length / 2) }).map((_, i) => {
                const whiteIndex = i * 2;
                const blackIndex = i * 2 + 1;
                const whiteMove = moveList[whiteIndex];
                const blackMove = moveList[blackIndex];
                const whiteActive = activeMoveIndex === whiteIndex;
                const blackActive = activeMoveIndex === blackIndex;

                const baseTd = 'py-1.5 px-2 font-medium text-gray-800 dark:text-gray-200 rounded-md transition-colors';
                const activeClass = 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';

                return (
                  <tr key={i} className="border-b border-gray-100 dark:border-zinc-700/30 last:border-0 hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="py-1.5 px-2 text-gray-400 font-mono text-xs w-8 select-none">{i + 1}.</td>
                    <td
                      data-active-move={whiteActive ? 'true' : undefined}
                      className={`${baseTd} ${whiteActive ? activeClass : ''}`}
                    >
                      {whiteMove || ''}
                    </td>
                    <td
                      data-active-move={blackActive ? 'true' : undefined}
                      className={`${baseTd} ${blackActive ? activeClass : ''}`}
                    >
                      {blackMove || ''}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {moveList.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs italic">
              Waiting for start...
            </div>
          )}
        </div>
        <div className="p-3 border-t border-gray-200 dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800/60 flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleStep(-1)}
            disabled={activeMoveIndex <= -1}
            className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            &lt; Prev
          </button>
          <div className="flex-1 text-center text-xs text-gray-500 dark:text-gray-400">
            {moveList.length === 0
              ? 'No moves'
              : activeMoveIndex >= 0
                ? `Move ${activeMoveIndex + 1} / ${moveList.length}`
                : 'Start position'}
          </div>
          <button
            type="button"
            onClick={() => handleStep(1)}
            disabled={activeMoveIndex >= moveList.length - 1}
            className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next &gt;
          </button>
        </div>
      </div>

      {/* Right Sidebar (Game Controls) */}
      {/* Resize Handle between Move Sidebar and Right Sidebar */}
      <div
        className="hidden xl:flex w-4 cursor-ew-resize items-center justify-center hover:bg-blue-500/10 transition-colors self-stretch shrink-0"
        onMouseDown={(e) => {
          e.preventDefault();
          const startX = e.clientX;
          const startWidth = rightSidebarWidth;

          const onMouseMove = (moveEvent: MouseEvent) => {
            const delta = moveEvent.clientX - startX;
            // Handle is to the LEFT of the Right Sidebar.
            // Dragging right moves the left edge to the right, DECREASING width.
            const newWidth = Math.max(280, Math.min(600, startWidth - delta));
            onRightSidebarWidthChange(newWidth);
          };

          const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.body.style.cursor = '';
          };

          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
          document.body.style.cursor = 'ew-resize';
        }}
      >
        <div className="w-1 h-12 bg-gray-300 dark:bg-zinc-600 rounded-full" />
      </div>

      <div
        ref={rightSidebarRef}
        className="w-full xl:w-auto shrink-0 mt-6 xl:mt-0"
        style={{ width: `${rightSidebarWidth}px` }}
      >
        {children}
      </div>
    </div>
  );
};

export default ChessBoardView;
