"use server"

import { revalidatePath } from "next/cache"
import prisma from "../db"
import { renderError } from "../shema"

export async function fetchFavoriteId({ cityId }: { cityId: string }) {
    const user = 'user-2'
    const favorite = await prisma.favorite.findFirst({
      where: {
        cityId,
        userId: user,
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
}) => {
  try {
    const user = 'user-2'
    const { cityId, favoriteId, pathname } = prevState

    if (favoriteId) {
      await prisma.favorite.delete({
        where: { id: favoriteId },
      })
      revalidatePath(pathname)
      return { message: 'Removed successfully' }
    } else {
      await prisma.favorite.create({
        data: {
          cityId: cityId,
          userId: user
        },
      })
      revalidatePath(pathname)
      return { message: 'Added successfully' }
    }
  } catch (error) {
    return renderError(error)
  }
}

export async function getFavorites() {
    const userId = 'user-2'
    const favorites = await prisma.favorite.findMany({
      where: { userId },
      include: { city: true },
    })
    return  favorites 
}
