"use server"

import prisma from "../db"

export async function getGuides() {
  return prisma.guide.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      slug: true,
      summary: true,
      isPremium: true,
      city: {
        select: {
          name: true,
          slug: true,
        },
      },
    },
  })
}

export async function getGuideBySlug(slug: string) {

  return prisma.guide.findUnique({
    where: { slug },
    include: {
      city: {
        select: {
          name: true,
          slug: true,
        },
      },
    },
  })
}

export async function getForHomePageGuides() {
  const latest = await prisma.guide.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })
  return [latest[0], latest[1], latest[2]]
}

export async function getCityGuides(cityId: string, excludeGuideId?: string) {
  return prisma.guide.findMany({
    where: {
      cityId,
      id: excludeGuideId ? { not: excludeGuideId } : undefined,
      // published: true,
    },
    orderBy: { createdAt: "desc" },
    take: 4,
  })
}
