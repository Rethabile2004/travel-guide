'use server'

import prisma from "@/utils/db"
import { GuideSchema, renderError, validateWithZodSchema } from "@/utils/shema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Province } from "@/app/generated/prisma/client";

export async function getForAdminGuides(province?: string) {
    const provinceFilter = province && province !== "all"
        ? { city: { province: province as Province } }
        : {};

    const guides = await prisma.guide.findMany({
        where: provinceFilter,
        include: {
            city: {
                select: {
                    name: true,
                    province: true
                }
            }
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return guides;
}

export async function getForAdminGuidesById( slug: string) {
    const guides = await prisma.guide.findFirst({
        where: {
            slug
        },
    })
    return guides
}

/**
 * Creates a new guide for a specific city.
 * @param cityId The ID of the city the guide belongs to.
 * @param formData The form data submitted from the dialog.
 */
export async function createGuide(prevState: any, formData: FormData,) {
    const cityId = formData.get('cityId') as string
    // const title = formData.get("title") as string;
    // const slug = formData.get("slug") as string;
    // const summary = formData.get("summary") as string;
    // const content = formData.get("content") as string;
    // // Checkbox value 'on' when checked, null/undefined otherwise
    const isPremium = formData.get("isPremium") === "on";
    const rawData = Object.fromEntries(formData.entries());
    const validatedData = validateWithZodSchema(GuideSchema, { ...rawData, isPremium })

    // Basic validation (consider using Zod for more robust validation)
    // if (!title || !slug || !summary || !content || !cityId) {
    //     throw new Error("Missing required fields for guide creation.");
    // }

    try {
        await prisma.guide.create({
            data: {
                ...validatedData,
                city: {
                    connect: { id: cityId },
                },
            },
        });

        // Revalidate the admin destinations page cache to show the new guide count
        revalidatePath("/admin/destinations");
        return { message: "Guide added successfully" }

    } catch (error) {
        return renderError(error)
    }
}
