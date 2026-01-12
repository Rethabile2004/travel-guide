"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export async function getUserTrips() {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    return prisma.trip.findMany({
        where: { userId },
        include: {
            city: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
}

export async function createTrip (prev: any, formData: FormData) {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const title = formData.get("title") as string;
    const cityId = formData.get("cityId") as string;
    const startDate = formData.get("startDate") as string;
    const endDate = formData.get("endDate") as string;
    const notes = formData.get("notes") as string;

    if (!title || !cityId) {
        throw new Error("Missing required fields");
    }

    await prisma.trip.create({
        data: {
            userId,
            title,
            cityId,
            startDate: startDate ? new Date(startDate) : undefined,
            endDate: endDate ? new Date(endDate) : undefined,
            notes,
        },
    });
    return {message :'Trip created successfully'}
    redirect('/dashboard/trips')
}

export const getPlannedTripsCount = async () => {
    const count = await prisma.favorite.groupBy({
        by: ['userId'],
        _count: {
            userId: true
        }
    })
    return count[0]?._count.userId || 0
}