import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
  adapter: PrismaBetterSqlite3 | undefined;
};

const databaseUrl = process.env.DATABASE_URL ?? 'file:./dev.db';
const dbFilePath = resolve(process.cwd(), databaseUrl.replace(/^file:/, ''));
const dbDir = dirname(dbFilePath);

if (!existsSync(dbDir)) {
  mkdirSync(dbDir, { recursive: true });
}

// If the target DB file doesn't exist (e.g., cold start on Vercel), seed it from the packaged dev.db if available.
if (!existsSync(dbFilePath)) {
  const packagedDb = resolve(process.cwd(), 'dev.db');
  if (existsSync(packagedDb)) {
    try {
      copyFileSync(packagedDb, dbFilePath);
    } catch (err) {
      console.warn('Unable to seed SQLite file from packaged dev.db', err);
    }
  }
}

const adapter =
  globalForPrisma.adapter ??
  new PrismaBetterSqlite3({
    url: dbFilePath
  });

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error']
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
  globalForPrisma.adapter = adapter;
}
