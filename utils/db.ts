import { Pool } from 'pg';

import { PrismaClient } from '@/app/generated/prisma/client'; 
import { PrismaPg } from '@prisma/adapter-pg';
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
