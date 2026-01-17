"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/utils/db"
import { CityImageSchema, CitySchema, imageSchema, renderError, validateWithZodSchema } from "@/utils/shema";
import { deleteImage, uploadImage } from "../superbase";
import { getFavorites } from "../favorite";
import { getCityBySlug } from "../city";
import { Attraction, City } from "@/app/generated/prisma/client";

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
    const validatedCity = validateWithZodSchema(CitySchema, rawCityData)

    try {
        const heroImageUrl = await uploadImage(imageFile);

        const attractions: any = []
        let i = 0;
        while (formData.has(`attractionName_${i}`)) {
            attractions.push({
                name: formData.get(`attractionName_${i}`) as string,
                description: formData.get(`attractionDesc_${i}`) as string,
                category: formData.get(`attractionCat_${i}`) as any,
            });
            i++;
        }

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
            maxWait: 5000,
            timeout: 10000,
        });

        revalidatePath("/admin/destinations");
    } catch (error) {
        console.error(error);
        return renderError(error)
    }

    redirect("/admin/destinations");
}

export const deleteDestination = async (prevState: any, formData: FormData) => {
    const id = formData.get('id') as string
    const city = await getCityByid(id)
    if (!city) {
        return {message:'City not found.'}
    }
    try {
        await deleteImage(city.heroImageUrl)
        await prisma.favorite.deleteMany({
            where: {
                cityId: id
            }
        });
        await prisma.guide.deleteMany({
            where: {
                cityId: id
            }
        })
        await prisma.review.deleteMany({
            where: {
                cityId: id
            }
        })
        await prisma.trip.updateMany({
            where: {
                cityId: id
            },
            data: {
                isArchived: true
            }
        })
        await prisma.city.deleteMany({
            where: {
                id,
            }
        })
        await prisma.attraction.deleteMany({
            where:{
                cityId:id
            }
        })
        revalidatePath('/admin/destinations')
        return { message: 'Destination deleted successfully' }
    } catch (error) {
        return renderError(error)
    }

};

export async function getCityByid(id: string) {
    const city=await prisma.city.findUnique({
        where: { id },
        include:{
            attractions:true
        },
    })

    if(!city){
        redirect('/admin')
    }
    return city
}