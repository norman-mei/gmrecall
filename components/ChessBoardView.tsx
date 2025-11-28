
import Image from 'next/image';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Chess, Move } from 'chess.js';
import { ChessOpening } from '../types';

const FILE_LABELS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const RANK_LABELS = ['8', '7', '6', '5', '4', '3', '2', '1'];

import { readLocalNumber, persistLocalNumber } from '@/utils/helpers';

interface ChessBoardViewProps {
  opening: ChessOpening;
  isDark: boolean;
  showCoords: boolean;
  animationEnabled: boolean;
  animationDelay: number;
  children?: React.ReactNode;
  rightSidebarWidth: number;
  onRightSidebarWidthChange: (width: number) => void;
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
  sidebarWidth,
  onSidebarWidthChange,
  children,
  rightSidebarWidth,
  onRightSidebarWidthChange,
}) => {
  const [fen, setFen] = useState(() => new Chess().fen());
  const [history, setHistory] = useState<string[]>([]);
  const [pieces, setPieces] = useState<PieceState[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const rightSidebarRef = useRef<HTMLDivElement>(null);
  const boardSize = 'clamp(320px, 70vw, 640px)';
  const lightCoordColor = '#FFCE9E';
  const darkCoordColor = '#D18B47';
  const fileColor = (file: string) => (['a', 'c', 'e', 'g'].includes(file) ? lightCoordColor : darkCoordColor);
  const rankColor = (rank: string) => (['2', '4', '6', '8'].includes(rank) ? lightCoordColor : darkCoordColor);
  const lightSquare = '/images/lightsquare.svg';
  const darkSquare = '/images/darksquare.svg';

  const squareFromIndex = (rankIndex: number, fileIndex: number) =>
    `${FILE_LABELS[fileIndex]}${8 - rankIndex}`;

  const buildPieceState = useCallback((game: Chess): PieceState[] => {
    const board = game.board();
    const list: PieceState[] = [];
    board.forEach((rank, rankIndex) => {
      rank.forEach((square, fileIndex) => {
        if (!square) return;
        list.push({
          id: `${square.color}${square.type}-${squareFromIndex(rankIndex, fileIndex)}`,
          color: square.color,
          type: square.type,
          square: squareFromIndex(rankIndex, fileIndex),
        });
      });
    });
    return list;
  }, []);

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

  // Auto-scroll to bottom of move list
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const game = new Chess();
    setFen(game.fen());
    setHistory([]);
    setPieces(buildPieceState(game));

    const moves = opening.moves.split(/\s+/).filter((m) => m.trim().length > 0);

    const delay = animationDelay;

    let cancelled = false;
    let timeoutId: number | undefined;

    const playMove = (index: number) => {
      if (cancelled || index >= moves.length) return;
      try {
        const moveStr = moves[index];
        const result = game.move(moveStr) as Move | null;
        if (!result) {
          console.warn(`Illegal move: ${moveStr}`);
          return;
        }

        setPieces((prev) => {
          let next = [...prev];

          // Remove captured piece if any
          if (result.captured) {
            let capturedSquare = result.to;
            if (result.flags.includes('e')) {
              const file = result.to[0];
              const rankNum = Number(result.to[1]);
              const capRank = result.color === 'w' ? rankNum - 1 : rankNum + 1;
              capturedSquare = `${file}${capRank}` as any; // Cast to any or Square if imported, but any is safer for now to avoid import issues
            }
            next = next.filter((p) => p.square !== capturedSquare);
          }

          // Move the piece
          const moverIndex = next.findIndex((p) => p.square === result.from && p.color === result.color);
          if (moverIndex >= 0) {
            const mover = next[moverIndex];
            next[moverIndex] = {
              ...mover,
              square: result.to,
              type: result.promotion ?? mover.type,
            };
          } else {
            // Fallback to rebuilding from game state if mismatch
            return buildPieceState(game);
          }

          return next;
        });

        setFen(game.fen());
        setHistory([...game.history()]);
      } catch (error) {
        console.error('Chess logic error:', error);
        return;
      }
      timeoutId = window.setTimeout(() => playMove(index + 1), delay);
    };

    timeoutId = window.setTimeout(() => playMove(0), delay);

    return () => {
      cancelled = true;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [opening, animationDelay, buildPieceState]);

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
              {Array.from({ length: Math.ceil(history.length / 2) }).map((_, i) => (
                <tr key={i} className="border-b border-gray-100 dark:border-zinc-700/30 last:border-0 hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors">
                  <td className="py-1.5 px-2 text-gray-400 font-mono text-xs w-8 select-none">{i + 1}.</td>
                  <td className="py-1.5 px-2 font-medium text-gray-800 dark:text-gray-200">{history[i * 2]}</td>
                  <td className="py-1.5 px-2 font-medium text-gray-800 dark:text-gray-200">{history[i * 2 + 1] || ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {history.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs italic">
              Waiting for start...
            </div>
          )}
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
