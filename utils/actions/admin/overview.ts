"use server";

import prisma from "@/utils/db"; 

export async function fetchDashboardMetrics() {
  const totalCities = await prisma.city.count();
  const totalGuides = await prisma.guide.count();
  const totalReviews = await prisma.review.count();
  const totalTrips = await prisma.trip.count();

  return {
    totalCities,
    totalGuides,
    totalReviews,
    totalTrips,
    guidesPerProvinceData: [
      { name: 'Western Cape', guides: 42 },
      { name: 'Gauteng', guides: 30 },
      { name: 'KZN', guides: 15 },
      { name: 'Mpumalanga', guides: 27 },
      { name: 'ECape', guides: 10 },
      { name: 'FS', guides: 5 },
      { name: 'Limpopo', guides: 8 },
    ],
  };
}
