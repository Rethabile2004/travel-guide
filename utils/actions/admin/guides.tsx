import prisma from "@/utils/db"

export async function getForAdminGuides() {
    const guides = await prisma.guide.findMany({
        orderBy: {
            createdAt: "desc",
        },
    })
    return guides
}