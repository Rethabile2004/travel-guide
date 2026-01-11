"use server"

import { revalidatePath } from "next/cache"
import prisma from "../db"

export async function fetchFavoriteId({ cityId }: { cityId: string }) {
    const user = 'user-2'//await getAuthUser();
    const favorite = await prisma.favorite.findMany({
        where: {
            cityId,
            userId: user,
        },
        select: {
            id: true,
        }
    })

    return favorite[0]?.id || null
}

export const toggleFavoriteAction = async (prevState: {
    cityId: string;
    favoriteId: string | null;
    pathname: string;
}) => {
    const user = 'user-2'//await getAuthUser();
    const { cityId, favoriteId, pathname } = prevState;
    try {
        if (favoriteId) {
            await prisma.favorite.delete({
                where: {
                    id: favoriteId,
                },
            });
        } else {
            await prisma.favorite.create({
                data: {
                    cityId: cityId,
                    userId: user
                },
            });
        }
        revalidatePath(pathname);
        return { message: favoriteId ? 'Removed from Faves' : 'Added to Faves' };
    } catch (error) {
        return { message: error instanceof Error ? error.message : 'There was an error' }
    }
};

export async function getFavorites() {
    const userId = 'user-2'//await getAuthUser();
    //   if (!userId) {
    //     throw new Error("Unauthorized");
    //   }

    const favorites = await prisma.favorite.findMany({
        where: {
            userId,
        },
        include: {
            city: true
            //   destination: true,
        },
        orderBy: {
            // createdAt: "desc",
            //add created at!!!!!!!!!!
        },
    });

    return favorites;
}
