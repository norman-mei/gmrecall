# GM Recall - Chess Opening Memory Game

**GM Recall** is an interactive web application designed to help chess players memorize and recognize chess openings. Watch the moves play out on the board and guess the opening name before time runs out!

## Features

- **Interactive Gameplay**: Watch animated move sequences and type your guess.
- **Multiple Difficulties**:
  - **Adaptive (default)**: Dynamically adjusts to you—solve more to see harder lines, struggle and it eases up.
  - **Easy**: Common openings (e.g., Ruy Lopez, Sicilian Defense).
  - **Medium**: Intermediate variations.
  - **Hard**: Complex and less common lines.
  - **Very Hard**: Deep theory and obscure gambits.
- **Progress Tracking**:
  - **Score & Lives**: Maintain your streak and manage your lives.
  - **Session History**: Review openings played in the current session.
  - **Past Games**: Track your performance over time.
- **Helpful Tools**:
  - **Hints**: Get a letter-by-letter reveal of the opening name.
  - **Skip**: Pass on openings you don't know.
  - **Show Solution**: Give up and see the answer.
- **Customizable Experience**:
  - **Dark Mode**: Toggle between light and dark themes.
  - **Layout**: Resizable sidebars for a personalized workspace.
  - **Settings**: Adjust animation speed, coordinates, and sound.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Chess Logic**: [chess.js](https://github.com/jhlywa/chess.js)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (Node Package Manager)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/gmrecall.git
    cd gmrecall
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

4.  **Build for production:**
    ```bash
    npm run build
    npm start
    ```

## Project Structure

```
gmrecall/
├── app/                # Next.js App Router pages and layouts
│   ├── page.tsx        # Main game interface
│   └── layout.tsx      # Root layout
├── components/         # Reusable UI components
│   ├── ChessBoardView.tsx  # Chessboard visualization and move list
│   ├── GameControls.tsx    # Right sidebar (Score, Input, Lives)
│   ├── SettingsModal.tsx   # Game settings configuration
│   └── ...
├── data/               # Static data files
│   └── openings.ts     # Database of chess openings
├── utils/              # Helper functions
│   ├── gameLogic.ts    # Game rules and opening selection
│   └── helpers.ts      # Utility functions
├── public/             # Static assets (images, icons)
└── types.ts            # TypeScript definitions
```

## Customization

### Adding New Openings

To add new openings, edit `data/openings.ts`. Add a new entry to the `openings` array:

```typescript
{
  name: "Opening Name",
  eco: "A00",
  fen: "...", // Optional, generated if missing
  moves: "e4 e5 Nf3 ...",
  difficulty: "Medium"
}
```

### Adjusting Difficulty

Difficulty levels are defined in `types.ts` and used in `utils/gameLogic.ts`. The default **Adaptive** mode biases toward harder or easier openings based on your recent accuracy and streak; other fixed tiers pull from predefined pools. You can tweak the adaptive weighting or add new tiers in those files.

## License

This project is licensed under the MIT License.
