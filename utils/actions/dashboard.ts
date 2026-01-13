"use server";

import prisma from "@/utils/db";
import { auth } from "@clerk/nextjs/server";

export async function getDashboardActivityData() {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const [favoriteCount, tripCount, lastActivityRecord] = await Promise.all([
        prisma.favorite.count({ where: { userId } }),
        prisma.trip.count({ where: { userId } }),
        prisma.trip.findFirst({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            select: { createdAt: true }
        })
    ]);

    return {
        favoriteCount,
        tripCount,
        lastActivityDate: lastActivityRecord?.createdAt || null,
    };
}
