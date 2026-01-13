"use server"

import prisma from "../db"
import { City } from "@/app/generated/prisma/browser"
export async function getCities() {
    return prisma.city.findMany({
        orderBy: {
            createdAt: "desc",
        },
        select: {
            id: true,
            name: true,
            slug: true,
            province: true,
            description: true,
            heroImageUrl: true,
        },
    })
}

export async function getCityBySlug(slug: string) {
    return prisma.city.findUnique({
        where: { slug },
        include: {
            gallery: true,
            attractions: true,
            guides: {
                select: {
                    id: true,
                    title: true,
                    slug: true,
                    summary: true,
                    isPremium: true,
                },
            },
            reviews: {
                select: {
                    id: true,
                    rating: true,
                    comment: true,
                    createdAt: true,
                },
            },
        },
    })
}

export const getFavoriteCitiesCount = async () => {
    const count = await prisma.favorite.groupBy({
        by: ['userId'],
        _count: {
            userId: true
        }
    })
    return count[0]?._count.userId || 0
}


export const getCitiyNames = async () => {
    const cities=
    await prisma.city.findMany({
        orderBy: { name: "asc" },
    })

    return cities
}