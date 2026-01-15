import prisma from "@/utils/db"

export async function getForAdminCities() {
    try {
        const cities = await prisma.city.findMany({
            orderBy: { name: 'asc' },
        });
        return cities;
    } catch (error) {
        console.error(error);
        return [];
    }
}

