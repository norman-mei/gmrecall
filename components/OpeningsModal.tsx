import { useState, useMemo, useEffect } from 'react';
import { Book, XCircle, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Chess } from 'chess.js';
import Image from 'next/image';
import { OPENINGS } from '@/data/openings';
import { Difficulty } from '@/types';

// Types for props
interface OpeningsModalProps {
    isOpen: boolean;
    onClose: () => void;
    solvedOpenings: Set<string>; // Pass just the set of solved names for faster lookups
}

type SortOption = 'name-asc' | 'name-desc' | 'difficulty' | 'status';

export default function OpeningsModal({ isOpen, onClose, solvedOpenings }: OpeningsModalProps) {
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [sort, setSort] = useState<SortOption>('status');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInput, setPageInput] = useState('1');
    const itemsPerPage = 24;

    useEffect(() => {
        // Initialize sort from local storage on client side
        if (typeof window !== 'undefined') {
            const savedSort = window.localStorage.getItem('openings-sort') as SortOption | null;
            if (savedSort) {
                setSort(savedSort);
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('openings-sort', sort);
        }
    }, [sort]);

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
            setCurrentPage(1); // Reset to first page on search
        }, 300);
        return () => clearTimeout(timer);
    }, [search]);

    // Prevent background scrolling when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const filteredAndSortedOpenings = useMemo(() => {
        const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
        const searchNorm = normalize(debouncedSearch);

        // Filter
        let result = OPENINGS.filter((op) => {
            if (!searchNorm) return true;
            const nameNorm = normalize(op.name);

            // If solved, we can search by moves too
            if (solvedOpenings.has(op.name)) {
                const movesNorm = normalize(op.moves);
                return nameNorm.includes(searchNorm) || movesNorm.includes(searchNorm);
            }

            // Only search name if not solved (or maybe we shouldn't search at all if hidden? 
            // The original code allowed searching distinct names even if hidden, but mapped them to '???' in display. 
            // Let's allow searching by name but render '???' if unsolved to not leak info visually, 
            // although if you search ' Sicilian' and it shows up, you know it's there. 
            // The original logic checked `nameNorm.includes(searchNorm)` regardless.)
            return nameNorm.includes(searchNorm);
        });

        // Sort
        const difficultyOrder: Record<string, number> = { Easy: 1, Medium: 2, Hard: 3, 'Very Hard': 4 };

        result.sort((a, b) => {
            const aSolved = solvedOpenings.has(a.name);
            const bSolved = solvedOpenings.has(b.name);

            // For display name sorting: if unsolved, do we sort by real name or '???' ?
            // Original code sorted by `displayName` which was '???' if unsolved.
            // This groups all unsolved together. Let's replicate that to be safe/consistent.
            const aDisplay = aSolved ? a.name : '???';
            const bDisplay = bSolved ? b.name : '???';

            switch (sort) {
                case 'name-asc':
                    return aDisplay.localeCompare(bDisplay);
                case 'name-desc':
                    return bDisplay.localeCompare(aDisplay);
                case 'difficulty':
                    // Sort by difficulty rank, then name
                    const diffDiff = (difficultyOrder[a.difficulty] || 0) - (difficultyOrder[b.difficulty] || 0);
                    return diffDiff !== 0 ? diffDiff : aDisplay.localeCompare(bDisplay);
                case 'status':
                    // Solved first
                    if (aSolved === bSolved) return aDisplay.localeCompare(bDisplay);
                    return aSolved ? -1 : 1;
                default:
                    return 0;
            }
        });

        return result;
    }, [debouncedSearch, sort, solvedOpenings]);

    // Pagination
    const totalPages = Math.ceil(filteredAndSortedOpenings.length / itemsPerPage);
    const currentItems = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return filteredAndSortedOpenings.slice(start, start + itemsPerPage).map(op => ({
            ...op,
            isSolved: solvedOpenings.has(op.name)
        }));
    }, [filteredAndSortedOpenings, currentPage, itemsPerPage, solvedOpenings]);

    // Sync input with current page
    useEffect(() => {
        setPageInput(String(currentPage));
    }, [currentPage]);

    const handlePageInputCommit = () => {
        let p = parseInt(pageInput);
        if (isNaN(p)) p = 1;
        p = Math.max(1, Math.min(totalPages, p));
        setCurrentPage(p);
        setPageInput(String(p));
    };

    // Helper to generate board (only for visible items)
    const getBoardState = (fen?: string, moves?: string) => {
        // If no FEN, try to generate from moves. 
        // WARNING: This is still expensive if we do it for many items.
        // But now we only do it for 24 items max.
        if (fen) return fen;
        if (!moves) return null;
        try {
            const chess = new Chess();
            // Simple move parsing
            const moveList = moves.split(/\s+/).filter(Boolean);
            for (const m of moveList) {
                try { chess.move(m); } catch (e) { break; }
            }
            return chess.fen();
        } catch {
            return null;
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="w-full max-w-5xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-700 max-h-[90vh] flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-zinc-800 shrink-0 bg-white dark:bg-zinc-900 z-10">
                    <div>
                        <h3 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                            <Book size={20} /> Openings
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            {filteredAndSortedOpenings.length} openings found
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-600 dark:text-gray-300 transition-colors"
                    >
                        <XCircle size={22} />
                    </button>
                </div>

                {/* Controls */}
                <div className="px-6 py-3 border-b border-gray-100 dark:border-zinc-800/50 bg-gray-50/50 dark:bg-zinc-900/50 flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Search openings..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    </div>
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value as SortOption)}
                        className="px-3 py-2 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
                    >
                        <option value="name-asc">Name (A-Z)</option>
                        <option value="name-desc">Name (Z-A)</option>
                        <option value="difficulty">Difficulty</option>
                        <option value="status">Solved first</option>
                    </select>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 custom-scrollbar min-h-0">
                    {filteredAndSortedOpenings.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-40 text-gray-500 dark:text-gray-400 italic">
                            <p>No openings match your search.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {currentItems.map((entry) => {
                                const effectiveFen = entry.fen || getBoardState(undefined, entry.moves);
                                return (
                                    <OpeningCard
                                        key={entry.name}
                                        name={entry.name}
                                        moves={entry.moves}
                                        difficulty={entry.difficulty}
                                        isSolved={entry.isSolved}
                                        fen={effectiveFen}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="px-6 py-3 border-t border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 flex items-center justify-center gap-2 shrink-0">
                        <button
                            onClick={() => setCurrentPage(1)}
                            disabled={currentPage === 1}
                            className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed text-gray-600 dark:text-gray-400"
                            title="First Page"
                        >
                            <ChevronsLeft size={18} />
                        </button>
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed text-gray-600 dark:text-gray-400"
                            title="Previous Page"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <div className="flex items-center gap-2 mx-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Page</span>
                            <input
                                type="text"
                                inputMode="numeric"
                                value={pageInput}
                                onChange={(e) => setPageInput(e.target.value)}
                                onBlur={handlePageInputCommit}
                                onKeyDown={(e) => e.key === 'Enter' && handlePageInputCommit()}
                                className="w-12 text-center px-1 py-0.5 rounded border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">of {totalPages}</span>
                        </div>

                        <button
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed text-gray-600 dark:text-gray-400"
                            title="Next Page"
                        >
                            <ChevronRight size={18} />
                        </button>
                        <button
                            onClick={() => setCurrentPage(totalPages)}
                            disabled={currentPage === totalPages}
                            className="p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed text-gray-600 dark:text-gray-400"
                            title="Last Page"
                        >
                            <ChevronsRight size={18} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

// Sub-component for individual cards (cleaner)
function OpeningCard({ name, moves, difficulty, isSolved, fen }: {
    name: string;
    moves: string;
    difficulty: string;
    isSolved: boolean;
    fen: string | null;
}) {
    const difficultyColors: Record<Difficulty, string> = {
        Easy: 'text-green-600 dark:text-green-400',
        Medium: 'text-yellow-600 dark:text-yellow-400',
        Hard: 'text-red-600 dark:text-red-400',
        'Very Hard': 'text-red-700 dark:text-red-500',
        Adaptive: 'text-teal-700 dark:text-teal-400',
    };

    const difficultyColorClass = difficultyColors[difficulty as Difficulty] || 'text-gray-500';

    return (
        <div className="p-4 rounded-xl border border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800/60 shadow-sm flex flex-col gap-3 transition-transform hover:scale-[1.01]">
            <div className="flex items-center justify-between">
                <span
                    className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded ${isSolved
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-gray-100 text-gray-600 dark:bg-zinc-800 dark:text-gray-400'
                        }`}
                >
                    {isSolved ? 'Solved' : 'Hidden'}
                </span>
                <span className="text-[11px] text-gray-500 dark:text-gray-400 font-mono truncate max-w-[120px]">
                    {isSolved ? moves : '???'}
                </span>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span className="font-medium truncate max-w-[150px]" title={isSolved ? name : '???'}>
                    {isSolved ? name : '???'}
                </span>
                <span className={`font-semibold shrink-0 ${difficultyColorClass}`}>{difficulty}</span>
            </div>
            <MiniBoard fen={fen} blurred={!isSolved} />
        </div>
    );
}

// Extracted MiniBoard
function MiniBoard({ fen, blurred }: { fen: string | null; blurred: boolean }) {
    if (!fen) {
        return (
            <div className="relative w-full aspect-square rounded-lg bg-gray-100 dark:bg-zinc-800 border border-dashed border-gray-300 dark:border-zinc-700 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
                No board
            </div>
        );
    }

    // We need to render the board. Since we are in a sub-component, we can just use chess.js logic here if needed
    // But we want to avoid re-instantiating Chess if possible. 
    // However, for 24 items, instantiating Chess 24 times is okay.
    // Better: Parse FEN manually to avoid chess.js overhead for simple rendering?
    // No, chess.js `.board()` is robust.

    let boardState;
    try {
        const c = new Chess(fen);
        boardState = c.board();
    } catch {
        return <div className="aspect-square bg-red-100 text-red-500 text-xs flex items-center justify-center">Error</div>;
    }

    const pieceAssets: Record<string, string> = {
        wp: '/images/whitepawn.svg', wn: '/images/whiteknight.svg', wb: '/images/whitebishop.svg',
        wr: '/images/whiterook.svg', wq: '/images/whitequeen.svg', wk: '/images/whiteking.svg',
        bp: '/images/blackpawn.svg', bn: '/images/blackknight.svg', bb: '/images/blackbishop.svg',
        br: '/images/blackrook.svg', bq: '/images/blackqueen.svg', bk: '/images/blackking.svg',
    };

    return (
        <div className="relative w-full aspect-square shadow-sm group">
            <div className="grid grid-cols-8 grid-rows-8 w-full h-full rounded-lg overflow-hidden border border-gray-400/50 dark:border-zinc-600">
                {boardState.flatMap((rank, rankIndex) =>
                    rank.map((square, fileIndex) => {
                        const isLight = (rankIndex + fileIndex) % 2 === 0;
                        const squareBg = isLight ? '/images/lightsquare.svg' : '/images/darksquare.svg';
                        return (
                            <div
                                key={`${rankIndex}-${fileIndex}`}
                                className="relative w-full h-full"
                                style={{
                                    backgroundImage: `url(${squareBg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                {square && (
                                    <div className="absolute inset-[10%] w-[80%] h-[80%] pointer-events-none">
                                        <Image
                                            src={pieceAssets[`${square.color}${square.type}`]}
                                            alt={`${square.color}${square.type}`}
                                            fill
                                            sizes="40px"
                                            className="object-contain"
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    }),
                )}
            </div>
            {blurred && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg rounded-lg z-10 transition-opacity duration-300 group-hover:opacity-0">
                    <span className="text-white font-black text-4xl tracking-widest drop-shadow-md">???</span>
                </div>
            )}
        </div>
    );
}
