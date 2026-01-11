"use server"

import  prisma  from "../db"
// import { auth } from "@clerk/nextjs/server"

export async function getUserTrips() {
  const  userId  = 'user-2' //auth()

  if (!userId) {
    throw new Error("Unauthorized")
  }

  return prisma.trip.findMany({
    where: { userId },
    orderBy: {
      startDate: "asc",
    },
  })
}
