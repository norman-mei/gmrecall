
import React, { useState } from 'react';
import { X, Moon, Sun, Map, Volume2, VolumeX, Zap, BarChart3, Settings as SettingsIcon } from 'lucide-react';
import { GameSettings, PlayerStats, Difficulty, GameRecord } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  settings: GameSettings;
  updateSettings: (key: keyof GameSettings, value: any) => void;
  stats: PlayerStats;
  currentStreak: number;
  averageScore: number;
  averageGuessesPerGame: number;
  wrongGuesses: number;
  recentGames: GameRecord[];
  sessionStats: {
    openingsSeen: number;
    hintsUsed: number;
    livesLost: number;
  };

  animationDelay: number;
  onAnimationDelayChange: (delay: number) => void;
  onResetLayout: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  isDarkMode,
  toggleDarkMode,
  settings,
  updateSettings,
  stats,
  currentStreak,
  averageScore,
  averageGuessesPerGame,
  wrongGuesses,
  recentGames,
  sessionStats,
  animationDelay,
  onAnimationDelayChange,
  onResetLayout,
}) => {
  const [activeTab, setActiveTab] = useState<'settings' | 'stats'>('settings');

  if (!isOpen) return null;

  const calculateAccuracy = () => {
    if (stats.totalGuesses === 0) return '0.00';
    const percent = (stats.correctGuesses / stats.totalGuesses) * 100;
    return Math.min(100, percent).toFixed(2);
  };

  const formatDate = (ts: number) => {
    return new Date(ts).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  const difficultyColors: Record<Difficulty, string> = {
    Easy: 'text-green-700 bg-green-100 dark:bg-green-900/40 dark:text-green-300',
    Medium: 'text-yellow-700 bg-yellow-100 dark:bg-yellow-900/40 dark:text-yellow-300',
    Hard: 'text-orange-700 bg-orange-100 dark:bg-orange-900/40 dark:text-orange-300',
    'Very Hard': 'text-red-700 bg-red-100 dark:bg-red-900/40 dark:text-red-300',
  };

  const difficultyButtonStyles: Record<Difficulty, { active: string; inactive: string }> = {
    Easy: {
      active: 'border-green-500 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300',
      inactive: 'border-green-200 dark:border-green-900/40 text-green-700 dark:text-green-300 hover:border-green-300',
    },
    Medium: {
      active: 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
      inactive: 'border-yellow-200 dark:border-yellow-900/40 text-yellow-700 dark:text-yellow-300 hover:border-yellow-300',
    },
    Hard: {
      active: 'border-orange-500 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
      inactive: 'border-orange-200 dark:border-orange-900/40 text-orange-700 dark:text-orange-300 hover:border-orange-300',
    },
    'Very Hard': {
      active: 'border-red-500 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300',
      inactive: 'border-red-200 dark:border-red-900/40 text-red-700 dark:text-red-300 hover:border-red-300',
    },
  };

  const statCards = [
    { label: 'Games Played', value: stats.gamesPlayed, accent: 'text-gray-800 dark:text-white' },
    { label: 'Best Score', value: stats.bestScore, accent: 'text-blue-600 dark:text-blue-400' },
    { label: 'Current Streak', value: currentStreak, accent: 'text-amber-600 dark:text-amber-400' },
    { label: 'Accuracy', value: `${calculateAccuracy()}%`, accent: 'text-green-600 dark:text-green-400' },
    { label: 'Avg Score', value: averageScore.toFixed(1), accent: 'text-indigo-600 dark:text-indigo-400' },
    { label: 'Avg Guesses/Game', value: averageGuessesPerGame.toFixed(1), accent: 'text-teal-600 dark:text-teal-400' },
    { label: 'Correct Answers', value: stats.correctGuesses, accent: 'text-purple-600 dark:text-purple-400' },
    { label: 'Wrong Guesses', value: wrongGuesses, accent: 'text-rose-600 dark:text-rose-400' },
    { label: 'Total Guesses', value: stats.totalGuesses, accent: 'text-orange-600 dark:text-orange-400' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Blurred Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl transform transition-all scale-100 border border-gray-200 dark:border-zinc-700 overflow-hidden max-h-[85vh] flex flex-col">

        {/* Header with Tabs */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-zinc-700">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 ${activeTab === 'settings' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-700'}`}
            >
              <SettingsIcon size={16} /> Settings
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 ${activeTab === 'stats' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-700'}`}
            >
              <BarChart3 size={16} /> Stats
            </button>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors text-gray-500 dark:text-gray-400"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 custom-scrollbar flex-1">

          {/* SETTINGS TAB */}
          {activeTab === 'settings' && (
            <>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Difficulty</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['Easy', 'Medium', 'Hard', 'Very Hard'] as Difficulty[]).map((diff) => (
                    <button
                      key={diff}
                      onClick={() => updateSettings('difficulty', diff)}
                      className={`p-3 rounded-xl border-2 text-center transition-all font-semibold ${settings.difficulty === diff
                        ? `${difficultyButtonStyles[diff].active} shadow-sm`
                        : `${difficultyButtonStyles[diff].inactive} bg-white dark:bg-zinc-800`
                        }`}
                    >
                      {diff}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  {settings.difficulty === 'Easy' && "Common openings, slower playback."}
                  {settings.difficulty === 'Medium' && "More variety, normal speed."}
                  {settings.difficulty === 'Hard' && "Advanced set, fast playback."}
                  {settings.difficulty === 'Very Hard' && "Full catalogue plus deep variations, fastest playback."}
                </p>
              </div>

              <hr className="border-gray-100 dark:border-zinc-700" />

              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Appearance</h3>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                      {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Theme Mode</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{isDarkMode ? 'Dark' : 'Light'}</p>
                    </div>
                  </div>
                  <button
                    onClick={toggleDarkMode}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isDarkMode ? 'bg-blue-600' : 'bg-gray-300'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Gameplay</h3>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                      <Map size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Coordinates</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Show board notation (A-H, 1-8)</p>
                    </div>
                  </div>
                  <button
                    onClick={() => updateSettings('showCoordinates', !settings.showCoordinates)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.showCoordinates ? 'bg-green-600' : 'bg-gray-300'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.showCoordinates ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                      {settings.soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Sound Effects</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Play sounds on correct/incorrect</p>
                    </div>
                  </div>
                  <button
                    onClick={() => updateSettings('soundEnabled', !settings.soundEnabled)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.soundEnabled ? 'bg-purple-600' : 'bg-gray-300'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
                      <Zap size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Piece Animation</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Toggle movement animation between moves</p>
                    </div>
                  </div>
                  <button
                    onClick={() => updateSettings('animationEnabled', !settings.animationEnabled)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.animationEnabled ? 'bg-orange-500' : 'bg-gray-300'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.animationEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Piece Animation Speed</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {animationDelay} ms between moves
                      </p>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={150}
                    max={2000}
                    step={50}
                    value={animationDelay}
                    onChange={(e) => onAnimationDelayChange(Number(e.target.value))}
                    className="w-full accent-blue-600 mt-3"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>Faster</span>
                    <span>Slower</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-700">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Layout</h3>
                  <button
                    onClick={onResetLayout}
                    className="w-full py-2 px-4 bg-gray-100 dark:bg-zinc-700 hover:bg-gray-200 dark:hover:bg-zinc-600 text-gray-700 dark:text-gray-200 rounded-lg font-semibold transition-colors text-sm"
                  >
                    Reset Sidebar Sizes
                  </button>
                </div>
              </div>
            </>
          )}

          {/* STATS TAB */}
          {activeTab === 'stats' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {statCards.map((card) => (
                  <div key={card.label} className="bg-gray-50 dark:bg-zinc-700/50 p-4 rounded-xl border border-gray-100 dark:border-zinc-600 text-center">
                    <p className="text-xs text-gray-500 uppercase font-bold">{card.label}</p>
                    <p className={`text-2xl font-black ${card.accent}`}>{card.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-zinc-700/40 p-4 rounded-xl border border-gray-100 dark:border-zinc-600">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Session Totals</h4>
                    <span className="text-[10px] uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">Live</span>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center justify-between">
                      <span>Openings seen</span>
                      <span className="font-semibold">{sessionStats.openingsSeen}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Hints used</span>
                      <span className="font-semibold text-amber-600 dark:text-amber-400">{sessionStats.hintsUsed}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Lives lost</span>
                      <span className="font-semibold text-red-600 dark:text-red-400">{sessionStats.livesLost}</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-3">Includes the current round and in-progress opening.</p>
                </div>

                <div className="bg-gray-50 dark:bg-zinc-700/40 p-4 rounded-xl border border-gray-100 dark:border-zinc-600">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Recent Games</h4>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold">Last 3</span>
                  </div>
                  {recentGames.length === 0 ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400">Play a game to start building your history.</p>
                  ) : (
                    <div className="space-y-3">
                      {recentGames.map((game) => (
                        <div key={game.id} className="p-3 rounded-lg bg-white dark:bg-zinc-800/60 border border-gray-100 dark:border-zinc-700">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded ${difficultyColors[game.difficulty]}`}>
                              {game.difficulty}
                            </span>
                            <span className="text-[11px] text-gray-500 dark:text-gray-400">{formatDate(game.timestamp)}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-200">
                            <span className="font-semibold">Score: {game.score}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{game.openingsSolved.length} openings</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
