// prisma/seed.ts

// Change this line to import from the new .ts file:
import { Pool } from 'pg';
// import { citiesData } from './data'; // Note: no extension needed here

// Ensure you have the correct client import path from previous suggestions:
import { PrismaClient } from '@/app/generated/prisma/client'; 
import { PrismaPg } from '@prisma/adapter-pg';
// ... (rest of imports for adapter/pool if you used the previous suggestion) ...
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

// 3. Instantiate the Prisma Client with the adapter
const prisma = new PrismaClient({ adapter });
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
