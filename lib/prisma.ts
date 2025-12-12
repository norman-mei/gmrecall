import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
  adapter: PrismaBetterSqlite3 | undefined;
};

const databaseUrl = process.env.DATABASE_URL ?? 'file:./dev.db';
const dbFilePath = databaseUrl.replace(/^file:/, '');

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
