
import fs from 'fs';
import path from 'path';
import { Chess } from 'chess.js';

// Mock types since we're running in a standalone script context potentially
type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Very Hard';

interface ChessOpening {
    name: string;
    fen: string;
    moves: string;
    eco: string;
    difficulty: Difficulty;
}

const OPENINGS_PATH = path.join(process.cwd(), 'data/openings.ts');
const VERY_HARD_PATH = path.join(process.cwd(), 'data/very_hard_openings.ts');
const ADDITIONAL_PATH = path.join(process.cwd(), 'data/additional_openings.ts');

function extractOpenings(content: string): ChessOpening[] {
    // Regex to match object literals inside the array
    const match = content.match(/const \w+(?::\s*ChessOpening\[\])?\s*=\s*(\[[\s\S]*?\]);/);
    if (!match) return [];

    try {
        const arrayString = match[1];
        // remove comments
        let cleanString = arrayString.replace(/\/\/.*/g, '').replace(/\/\*[\s\S]*?\*\//g, '');
        // Remove spread operators lines to avoid ReferenceError
        cleanString = cleanString.replace(/\.\.\.\w+,?/g, '');

        // Use eval to get the object. 
        const openings = eval(cleanString);
        return openings;
    } catch (e) {
        console.error("Error parsing openings:", e);
        return [];
    }
}

function calculateScore(opening: ChessOpening): number {
    const chess = new Chess();
    const moveList = opening.moves.split(' ');
    let score = 0;

    // 1. Length Factor
    score += moveList.length * 1.5;

    // 2. Play the moves to analyze
    try {
        for (const move of moveList) {
            const result = chess.move(move);
            if (!result) break;

            // Capture
            if (result.captured) score += 2;

            // Check
            if (chess.inCheck()) score += 3;

            // Promotion
            if (result.promotion) score += 5;

            // Castling
            if (result.san.includes('O-O')) score += 1;
        }
    } catch (e) {
        // console.error(`Invalid moves for ${opening.name}: ${opening.moves}`);
    }

    // 3. Piece Variety 
    const uniquePieces = new Set(moveList.map(m => m[0] === 'N' || m[0] === 'B' || m[0] === 'R' || m[0] === 'Q' || m[0] === 'K' ? m[0] : 'P'));
    score += uniquePieces.size * 2;

    // 4. "Commonness" Heuristic
    if (opening.name.length > 30) score += 5;
    if (opening.name.includes("Gambit")) score += 3;
    if (opening.name.includes("Variation")) score += 2;
    if (opening.name.includes("Attack")) score += 2;
    if ((opening.name.match(/-/g) || []).length > 2) score += 5;

    return score;
}

async function main() {
    console.log("Reading files...");
    const openingsContent = fs.readFileSync(OPENINGS_PATH, 'utf-8');
    const veryHardContent = fs.readFileSync(VERY_HARD_PATH, 'utf-8');
    const additionalContent = fs.readFileSync(ADDITIONAL_PATH, 'utf-8');

    let allOpenings = [
        ...extractOpenings(openingsContent),
        ...extractOpenings(veryHardContent),
        ...extractOpenings(additionalContent)
    ];

    console.log(`Total openings loaded: ${allOpenings.length}`);

    // Score and Sort
    const scoredOpenings = allOpenings.map(op => ({
        ...op,
        score: calculateScore(op)
    })).sort((a, b) => a.score - b.score);

    // Analyze distribution
    const maxScore = scoredOpenings[scoredOpenings.length - 1].score;
    const minScore = scoredOpenings[0].score;
    console.log(`Score Range: ${minScore} - ${maxScore}`);

    // Thresholds: Easy (0-25%), Medium (25-60%), Hard (60-85%), Very Hard (85-100%)
    const tEasy = scoredOpenings[Math.floor(scoredOpenings.length * 0.25)].score;
    const tMedium = scoredOpenings[Math.floor(scoredOpenings.length * 0.60)].score;
    const tHard = scoredOpenings[Math.floor(scoredOpenings.length * 0.85)].score;

    console.log(`Thresholds: Easy < ${tEasy}, Medium < ${tMedium}, Hard < ${tHard}`);

    const counts = { Easy: 0, Medium: 0, Hard: 0, 'Very Hard': 0 };

    const reclassified = scoredOpenings.map(op => {
        let newDiff: Difficulty;
        if (op.score < tEasy) newDiff = 'Easy';
        else if (op.score < tMedium) newDiff = 'Medium';
        else if (op.score < tHard) newDiff = 'Hard';
        else newDiff = 'Very Hard';

        counts[newDiff]++;
        return { ...op, difficulty: newDiff };
    });

    console.log('New Distribution:', JSON.stringify(counts));

    const easyAndMedium = reclassified.filter(o => o.difficulty === 'Easy' || o.difficulty === 'Medium');
    const hard = reclassified.filter(o => o.difficulty === 'Hard');
    const veryHard = reclassified.filter(o => o.difficulty === 'Very Hard');

    // Helper to format opening object to string
    const formatOpenings = (ops: ChessOpening[]) => {
        const body = ops.map(o => `  {
    name: "${o.name.replace(/"/g, '\\"')}",
    fen: "${o.fen}",
    moves: "${o.moves}",
    eco: "${o.eco}",
    difficulty: "${o.difficulty}"
  }`).join(',\n');
        return `[\n${body}\n]`;
    };

    // 1. Write openings.ts (Easy + Medium + Imports)
    const openingsFileContent = `import { ChessOpening } from '../types';
import { VERY_HARD_OPENINGS } from './very_hard_openings';
import { ADDITIONAL_OPENINGS } from './additional_openings';

export const OPENINGS: ChessOpening[] = [
${easyAndMedium.map(o => `  {
    name: "${o.name.replace(/"/g, '\\"')}",
    fen: "${o.fen}",
    moves: "${o.moves}",
    eco: "${o.eco}",
    difficulty: "${o.difficulty}"
  }`).join(',\n')},

  ...VERY_HARD_OPENINGS,
  ...ADDITIONAL_OPENINGS
];
`;
    fs.writeFileSync(OPENINGS_PATH, openingsFileContent);
    console.log(`Wrote ${easyAndMedium.length} openings to openings.ts`);

    // 2. Write very_hard_openings.ts (Now holds "Hard")
    const hardFileContent = `import { ChessOpening } from '../types';

export const VERY_HARD_OPENINGS: ChessOpening[] = ${formatOpenings(hard)};
`;
    fs.writeFileSync(VERY_HARD_PATH, hardFileContent);
    console.log(`Wrote ${hard.length} openings to very_hard_openings.ts`);

    // 3. Write additional_openings.ts (Now holds "Very Hard")
    const veryHardFileContent = `import { ChessOpening } from '../types';

export const ADDITIONAL_OPENINGS: ChessOpening[] = ${formatOpenings(veryHard)};
`;
    fs.writeFileSync(ADDITIONAL_PATH, veryHardFileContent);
    console.log(`Wrote ${veryHard.length} openings to additional_openings.ts`);
}

main();
