"use server"

import { revalidatePath } from "next/cache"
import prisma from "../db"
import { renderError } from "../shema"
import { auth } from "@clerk/nextjs/server"
import { Favorite } from "@/app/generated/prisma/client"

const getAuthUser = async () => {
    const { userId } = await auth()
    if (!userId) {
        throw new Error('Please login.')
    }
    return { userId }
}

export async function fetchFavoriteId({ cityId }: { cityId: string }) {
    const { userId } = await getAuthUser()
    const favorite = await prisma.favorite.findFirst({
        where: {
            cityId,
            userId: userId,
        },
        select: {
            id: true,
        }
    })
    return favorite?.id || null
}

export const toggleFavoriteAction = async (prevState: {
    cityId: string;
    favoriteId: string | null;
    pathname: string;
}) :Promise<{message:string}>=> {
    try {
        const { userId } = await getAuthUser()
        const { cityId, favoriteId, pathname } = prevState
        let create = true
        if (favoriteId) {
            await prisma.favorite.delete({
                where: { id: favoriteId, userId },
            })
            revalidatePath(pathname)
            create = false
        } else {
            await prisma.favorite.create({
                data: {
                    cityId: cityId,
                    userId: userId
                },
            })
            create = true
            revalidatePath(pathname)
        }
        return { message: create ? 'Added successfully' : 'Removed successfully' }
    } catch (error) {
        return renderError(error)
    }
}

export async function getFavorites() {
    const { userId } = await getAuthUser()
    const favorites = await prisma.favorite.findMany({
        where: { userId },
        include: { city: true },
    })
    return favorites
}
