"use server"

import { auth } from "@clerk/nextjs/server"
import  prisma  from "../db"
// import { auth } from "@clerk/nextjs/server"

export async function getUserTrips() {
  const  {userId}  = await auth()

  if (!userId) {
    throw new Error("Unauthorized")
  }

  return prisma.trip.findMany({
    where: { userId },
    orderBy: {
      startDate: "asc",
    },
    include:{
      city:true
    }
  })
}
