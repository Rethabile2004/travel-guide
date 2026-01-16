"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/utils/db"
import { CityImageSchema, CitySchema, imageSchema, renderError, validateWithZodSchema } from "@/utils/shema";
import { uploadImage } from "../superbase";
import { Province } from "@/app/generated/prisma/enums";
import { Attraction } from "@/app/generated/prisma/client";

export async function getForAdminCities() {
    try {
        const cities = await prisma.city.findMany({
            orderBy: { name: 'asc' },
            include: {
                guides: true,
                attractions: true,
                reviews: true
            }
        });
        return cities;
    } catch (error) {
        console.error(error);
        return [];
    }
}


export async function createFullCityAction(prevState: any, formData: FormData) {
    const rawCityData = {
        name: formData.get("name"),
        slug: formData.get("slug"),
        description: formData.get("description"),
    };

    const province = formData.get("province") as any;
    const imageFile = formData.get("image") as File;

    // 1. Validate Basic City Data
    // console.log(rawCityData);
    // console.log(rawCityData);
    // console.log(rawCityData);
    // console.log(rawCityData);
    // console.log(rawCityData);
    // console.log(rawCityData);
    // console.log(rawCityData);
    // console.log(rawCityData);

    const validatedCity = validateWithZodSchema(CitySchema, rawCityData)
    // if (!validatedCity.success) {
    //     return { message: validatedCity.error.flatten().fieldErrors.name?.[0] || "Check City Details" };
    // }

    try {
        // 2. Upload Hero Image
        const heroImageUrl = await uploadImage(imageFile);
        console.log(heroImageUrl);
        console.log(heroImageUrl);
        console.log(heroImageUrl);
        console.log(heroImageUrl);
        console.log(heroImageUrl);
        console.log(heroImageUrl);

        // 3. Extract Attractions (Parsing indexed names)
        const attractions:any=[]
        let i = 0;
        while (formData.has(`attractionName_${i}`)) {
            attractions.push({
               name: formData.get(`attractionName_${i}`) as string,
        description: formData.get(`attractionDesc_${i}`) as string,
        category: formData.get(`attractionCat_${i}`) as any,
            });
            i++;
        }

        // 4. Transactional Create
        await prisma.$transaction(async (tx) => {
            await tx.city.create({
                data: {
                    ...validatedCity,
                    province,
                    heroImageUrl,
                    attractions: {
                        create: attractions,
                    },
                },
            });
        }, {
            maxWait: 5000, // 5s to acquire connection
            timeout: 10000, // 10s to execute (increased for 2026 safety)
        });

        revalidatePath("/admin/destinations");
    } catch (error) {
        console.error(error);
        return renderError(error)
    }

    redirect("/admin/destinations");
}
