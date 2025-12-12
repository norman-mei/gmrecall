import { NextResponse } from 'next/server';
import { z } from 'zod';

import { requireUser } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

const difficultySchema = z.enum(['Easy', 'Medium', 'Hard', 'Very Hard', 'Adaptive']);

const openingSchema = z.object({
  name: z.string(),
  fen: z.string(),
  moves: z.string(),
  eco: z.string(),
  difficulty: difficultySchema
});

const settingsSchema = z.object({
  showCoordinates: z.boolean(),
  allowMistakes: z.boolean(),
  soundEnabled: z.boolean(),
  soundVolume: z.number().min(0).max(1),
  animationEnabled: z.boolean(),
  difficulty: difficultySchema,
  themeMode: z.enum(['light', 'dark', 'system'])
});

const statsSchema = z.object({
  gamesPlayed: z.number().int().nonnegative(),
  bestScore: z.number().int().nonnegative(),
  totalGuesses: z.number().int().nonnegative(),
  correctGuesses: z.number().int().nonnegative()
});

const gameRecordSchema = z.object({
  id: z.string(),
  timestamp: z.number().int(),
  score: z.number().int().nonnegative(),
  difficulty: difficultySchema,
  openingsSolved: z.array(z.string())
});

const sessionEntrySchema = z.object({
  name: z.string(),
  moves: z.string(),
  livesLost: z.number().int().nonnegative(),
  hintsUsed: z.number().int().nonnegative(),
  scoreAfter: z.number().int().nonnegative(),
  outcome: z.enum(['solved', 'skipped', 'failed', 'unfinished'])
});

const resumeStateSchema = z.object({
  status: z.enum(['idle', 'playing', 'gameover']),
  currentOpening: openingSchema.nullable(),
  score: z.number().int().nonnegative(),
  lives: z.number().int().nonnegative(),
  history: z.array(z.string()),
  hintsRemaining: z.number().int().nonnegative(),
  inputStr: z.string().optional(),
  openingStats: z
    .object({
      livesLost: z.number().int().nonnegative(),
      hintsUsed: z.number().int().nonnegative()
    })
    .optional(),
  message: z.string().nullable().optional()
});

const progressSchema = z.object({
  settings: settingsSchema,
  stats: statsSchema,
  gameHistory: z.array(gameRecordSchema),
  sessionHistory: z.array(sessionEntrySchema),
  resumeState: resumeStateSchema.nullable().optional(),
  updatedAt: z.number().int().nonnegative().optional()
});

type ProgressPayload = z.infer<typeof progressSchema>;

export async function GET() {
  const user = await requireUser().catch(() => null);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const existing = await prisma.userProgress.findUnique({
    where: { userId: user.id }
  });

  return NextResponse.json({
    progress: (existing?.data as ProgressPayload | null) ?? null,
    updatedAt: existing?.updatedAt ? existing.updatedAt.getTime() : null
  });
}

export async function POST(request: Request) {
  const user = await requireUser().catch(() => null);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const json = await request.json().catch(() => null);
  const parsed = progressSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  await prisma.userProgress.upsert({
    where: { userId: user.id },
    create: {
      userId: user.id,
      data: parsed.data
    },
    update: {
      data: parsed.data
    }
  });

  return NextResponse.json({ ok: true });
}
