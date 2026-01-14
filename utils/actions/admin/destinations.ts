import { City } from "@/app/generated/prisma/client";
import prisma from "@/utils/db"
import { searchCity, searchProvince } from "../city";

export async function getCities(search?: string, province?: string) {
    try {
        const cities = await prisma.city.findMany({
            orderBy: { name: 'asc' },
        });
        if (search && province) {

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

