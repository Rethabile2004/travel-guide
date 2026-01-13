"use server"

import { City } from "@/app/generated/prisma/client";
import prisma from "../db"

export async function getCities(search?: string, province?: string) {
    try {
        const cities = await prisma.city.findMany({
            orderBy: { name: 'asc' },
        });
        if(search&&province){

        }
        if (search) {
            const searched = searchCity(search, cities)
            return searched
        }
        if (province) {
            const searched = searchProvince(province, cities)
            return searched
        }
        return cities
    } catch (error) {
        console.error(error);
        return [];
    }
}

const filterBothByCityAndProvine = (search:string,province: string, cities: City[]) => {
    let searchedCities: City[] = [];
    if (province) {
        searchedCities = cities.filter((c) => {

            const firstSearch = c.province.toLowerCase().includes(province.toLowerCase())
            const secondSearch = c.name.toLowerCase().includes(province.toLowerCase())
            // const secondSearch = c.slug.toLowerCase().includes(province.toLowerCase())
            return firstSearch || secondSearch
        })
        return searchedCities
    }
    return cities;
}

const searchProvince = (province: string, cities: City[]) => {
    // console.log();
    
    let searchedCities: City[] = [];
    if (province) {
        searchedCities = cities.filter((c) => {

            const firstSearch = c.province.toLowerCase().includes(province.toLowerCase())
            const secondSearch = c.slug.toLowerCase().includes(province.toLowerCase())
            return firstSearch || secondSearch
        })
        return searchedCities
    }
    return cities;
}

const searchCity = (search: string, cities: City[]) => {
    let searchedCities: City[] = [];
    if (search) {
        searchedCities = cities.filter((c) => {

            const match = c.province.toLowerCase().includes(search.toLowerCase())
            const province = c.name.toLowerCase().includes(search.toLowerCase())
            return match || province
        })
        return searchedCities
    }
    return cities;

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
    const cities =
        await prisma.city.findMany({
            orderBy: { name: "asc" },
        })

    return cities
}