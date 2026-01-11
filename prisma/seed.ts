// prisma/seed.ts

// Change this line to import from the new .ts file:
import { Pool } from 'pg';
import { citiesData } from './data'; // Note: no extension needed here

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
// const prisma = new PrismaClient(); // (Or the client with adapter config)

export async function main() {
  // ... the rest of your seeding logic (it will now be type-safe) ...
  console.log('Start seeding...');
  
  await prisma.city.deleteMany();
  console.log('Cleared existing cities.');
  
  for (const city of citiesData) {
    const { guides, attractions, ...cityData } = city;
    
    await prisma.city.create({
      data: {
        ...cityData,
        guides: { create: guides },
        attractions: { create: attractions }, // This line is now type-safe!
      },
    });
    console.log(`Seeded city: ${city.name}`);
  }
  console.log('Seeding finished.');
}

// ... rest of the main() execution ...
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Ensure you disconnect both the client and the pool
    await prisma.$disconnect();
    await pool.end();
  });
