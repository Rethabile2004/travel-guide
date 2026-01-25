'use server'
// import { revalidatePath } from "next/cache";
import { revalidatePath } from "next/cache";
import db from "../db"
import { getAuthUser, renderError, Review, ReviewSchema, validateWithZodSchema } from "../shema";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";


export async function getCityReviewsById(cityId: string) {
    return db.review.findMany({
        where: {
            cityId
        },
        orderBy: {
            createdAt: 'desc',
        },
    })
}

// export const fetchCityRating = async (cityId: string) => {
//     const result = await db.review.groupBy({
//         by: ['cityId'],
//         _avg: {
//             rating: true,
//         },
//         _count: {
//             rating: true,
//         },
//         where: {
//             cityId,
//         },
//     });

//     return {
//         rating: result[0]?._avg.rating?.toFixed(1) ?? 0,
//         count: result[0]?._count.rating ?? 0,
//     };
// };

export const deleteReviewAction = async (prevState: { reviewId: string }) => {
    const { reviewId } = prevState;

    const user = await getAuthUser();

    try {
        await db.review.delete({
            where: {
                id: reviewId,
                userId: user.id,
            },
        });

        revalidatePath('/reviews');
        return { message: 'Review deleted successfully' };
    } catch (error) {
        return renderError(error);
    }
};

export const fetchCityReviewsByUser = async () => {
    const user = await getAuthUser();
    const reviews = await db.review.findMany({
        where: {
            userId: user.id,
        },
        select: {
            id: true,
            rating: true,
            comment: true,
            city: {
                select: {
                    heroImageUrl: true,
                    name: true,
                },
            },
        },
    });
    return reviews;
};

export const fetchCityReviews = async (cityId: string): Promise<Review[]> => {
    const reviews = await db.review.findMany({
        where: {
            cityId,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
    return reviews;
};
/*
export const ReviewSchema = z.object({
  id: z.string().cuid().optional(),
  userId: z.string().cuid(),
  cityId: z.string().cuid(),
  rating: z.number().int().min(1).max(5),
  comment: z.string(),
  authorName: z.string(),
  authorImageUrl: z.string().url(),
  createdAt: z.date().optional(),
});
*/
export const createReviewAction = async (
    prevState: any,
    formData: FormData
) => {
    const user = await getAuthUser();
    try {
        const rawData = Object.fromEntries(formData);
        const validatedFields = validateWithZodSchema(ReviewSchema, { ...rawData, userId: user.id });
        await db.review.create({
            data: {
                ...validatedFields,
                userId: user.id
            },
        });

        revalidatePath(`/cities/${validatedFields.cityId}`);
        return { message: 'Review created successfully' }
        return { message: 'Review submitted successfully' };
    } catch (error) {
        return renderError(error);
    }
};

export const cityRating = async (cityId: string) => {
    // if (!cityId) { redirect('/') }
    const reviewCount = await db.review.count({
        where: {
            cityId
        }
    })

    const rating = await db.review.findFirst({
        where: {
            cityId
        },
        select: {
            rating: true
        }
    })
    let cityRating: number | undefined = rating?.rating
    if (!rating) {
        cityRating = 0
    }
    return { reviewCount, cityRating }
}


export const userHasAddedAReview = async (cityId: string) => {
    const { userId } = await auth()
    const hasReview = await db.review.findFirst({
        where: {
            userId: userId ? userId : '',
            cityId
        }
    });
    if (hasReview===null) {
        return true
    }
    return false
}

export const fetchCityRating = async (cityId: string) => {
    const result = await db.review.groupBy({
        by: ['cityId'],
        _avg: {
            rating: true,
        },
        _count: {
            rating: true,
        },
        where: {
            cityId,
        },
    });

    // empty array if no reviews
    return {
        rating: result[0]?._avg.rating?.toFixed(1) ?? 0,
        count: result[0]?._count.rating ?? 0,
    };
};
