"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { getAuthUser, renderError, TripSchema, validateWithZodSchema } from "../shema";
import { Trip } from "@/app/generated/prisma/client";

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

export async function getUserTripById(tripId: string) {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    // Check if tripId is actually present before running the query
    if (!tripId) {
        // You can throw an error or handle this case explicitly
        throw new Error('tripId cannot be null')
    }

    // Use findFirst instead of findUnique
    const trip = await prisma.trip.findFirst({
        where: {
            id: tripId,
            userId: userId // Ensure the trip belongs to the authenticated user
        },
    });
    if (!trip) return null;
    return trip;
}


export async function createTrip(prev: any, formData: FormData) {
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
    return { success: true, message: 'Trip created successfully' }
}

export const getPlannedTripsCount = async () => {
    const { userId } = await auth();
    if (!userId) {
        throw new Error('Unauthorized: User ID cannot be null');
    }

    const count = await prisma.trip.count({
        where: {
            userId: userId
        },
    });

    return count;
};

export async function editTrip(prev: any, formData: FormData) {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const id = formData.get("id") as string;
    const rawData = Object.fromEntries(formData.entries())
    const validatedData = validateWithZodSchema(TripSchema, rawData)

    try {

        await prisma.trip.update({
            where: {
                id,
                userId
            },
            data: {
                ...validatedData
            },
        });
        return { success: true, message: 'Trip updated successfully' }
    } catch (error) {
        return renderError(error)
    }

}

export async function deleteTrip(prev: any, formData: FormData): Promise<{ message: string, success: boolean }> {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const id = formData.get("id") as string;

    if (!id) {
        throw new Error("Id is required");
    }

    await prisma.trip.delete({
        where: {
            id
        }
    });
    return { success: true, message: 'Trip removed successfully' }
    redirect('/dashboard/trips')
}