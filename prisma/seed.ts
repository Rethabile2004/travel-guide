// import { Pool } from 'pg';
// import { PrismaClient } from '@/app/generated/prisma/client'; 
// import { PrismaPg } from '@prisma/adapter-pg';
// import { citiesData, usersData, tripsData } from './data';

// const connectionString = process.env.DATABASE_URL;
// const pool = new Pool({ connectionString });
// const adapter = new PrismaPg(pool);
// const prisma = new PrismaClient({ adapter });

// async function main() {
//   console.log('Start seeding 2026 data...');
  
//   // 1. Clear existing data
//   // await prisma.trip.deleteMany();
//   // await prisma.guide.deleteMany();
//   // await prisma.attraction.deleteMany();
//   await prisma.city.deleteMany();
//   // await prisma.user.deleteMany();
  
//   // 2. Seed Users
//   // for (const user of usersData) {
//   //   await prisma.user.create({ data: user });
//   // }

//   // 3. Seed Cities, Guides, and Attractions
//   for (const city of citiesData) {
//     const { guides, attractions, ...cityData } = city;
//     await prisma.city.create({
//       data: {
//         ...cityData,
//         guides: { create: guides },
//         attractions: { create: attractions },
//       },
//     });
//   }

//   // 4. Seed Trips
//   for (const trip of tripsData) {
//     await prisma.trip.create({ data: trip });
//   }

//   console.log('Seeding finished successfully.');
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//     await pool.end();
//   });
