import { currentUser } from '@clerk/nextjs/server';
import { z, ZodSchema } from 'zod';

export const ProvinceSchema = z.enum([
  'WESTERN_CAPE',
  'GAUTENG',
  'KWAZULU_NATAL',
  'EASTERN_CAPE',
  'FREE_STATE',
  'LIMPOPO',
  'MPUMALANGA',
  'NORTH_WEST',
  'NORTHERN_CAPE',
]);

export const AttractionCategorySchema = z.enum([
  'NATURE',
  'FOOD',
  'CULTURE',
  'ADVENTURE',
  'SHOPPING',
  'NIGHTLIFE',
  'HISTORY',
]);

export const UserSchema = z.object({
  id: z.string().cuid().optional(),
  clerkUserId: z.string().min(1, { message: 'Clerk User ID is required' }),
  email: z.string().email({ message: 'A valid email address is required' }),
  name: z.string().min(1, { message: 'Name must have a value' }).nullable().optional(),
  imageUrl: z.string().url({ message: 'Invalid image URL' }).nullable().optional(),
});

export const CitySchema = z.object({
  id: z.string().cuid().optional(),
  name: z.string().min(1, { message: 'City name must have a value' }),
  slug: z.string().min(1, { message: 'Slug must have a value' }),
  province: ProvinceSchema,
  description: z.string().min(10, { message: 'Description must be at least 10 characters' }),
  heroImageUrl: z.string().url({ message: 'Valid hero image URL is required' }),
});

export const CityImageSchema = z.object({
  id: z.string().cuid().optional(),
  cityId: z.string().cuid({ message: 'Valid City ID is required' }),
  imageUrl: z.string().url({ message: 'Valid image URL is required' }),
});

export const GuideSchema = z.object({
  id: z.string().cuid().optional(),
  cityId: z.string().cuid({ message: 'Valid City ID is required' }),
  title: z.string().min(1, { message: 'Guide title must have a value' }),
  slug: z.string().min(1, { message: 'Slug must have a value' }),
  summary: z.string().min(1, { message: 'Summary must have a value' }),
  content: z.string().min(1, { message: 'Content must have a value' }),
  isPremium: z.boolean().default(false),
});

export const AttractionSchema = z.object({
  id: z.string().cuid().optional(),
  cityId: z.string().cuid({ message: 'Valid City ID is required' }),
  name: z.string().min(1, { message: 'Attraction name must have a value' }),
  description: z.string().min(1, { message: 'Description must have a value' }),
  category: AttractionCategorySchema,
  imageUrl: z.string().url({ message: 'Invalid image URL' }).nullable().optional(),
});

export const FavoriteSchema = z.object({
  id: z.string().cuid().optional(),
  userId: z.string().cuid({ message: 'User ID is required' }),
  cityId: z.string().cuid({ message: 'City ID is required' }),
});

export const TripSchema = z.object({
  id: z.string().cuid().optional(),
  userId: z.string().cuid({ message: 'User ID is required' }),
  title: z.string().min(1, { message: 'Trip title must have a value' }),
  startDate: z.coerce.date({ message: 'Start date must be a valid date' }),
  endDate: z.coerce.date({ message: 'End date must be a valid date' }),
  notes: z.string().nullable().optional(),
});

export const ReviewSchema = z.object({
  cityId: z.string().cuid({ message: 'City ID must be a valid CUID' }),//
  rating: z.coerce.number()
    .int({ message: 'Rating must be a whole number' })
    .min(1, { message: 'Rating must be at least 1' })
    .max(5, { message: 'Rating cannot exceed 5' }),//
  comment: z.string().min(1, { message: 'Comment must have a value' }),//
  authorName: z.string().min(1, { message: 'Author name must have a value' }),//
  authorImageUrl: z.string().url({ message: 'Author image must be a valid URL' }),//
});

export const PurchaseSchema = z.object({
  id: z.string().cuid().optional(),
  userId: z.string().cuid({ message: 'User ID is required' }),
  guideId: z.string().cuid({ message: 'Guide ID is required' }),
  isPaid: z.boolean().default(false),
});


export type User = z.infer<typeof UserSchema>;
export type City = z.infer<typeof CitySchema>;
export type Review = z.infer<typeof ReviewSchema>;

export function validateWithZodSchema<T>(
    schema: ZodSchema<T>,
    data: unknown
): T {
    const result = schema.safeParse(data)

    if (!result.success) {
        const errors = result.error.issues.map((error) => error.message).join(', ')
        throw new Error(errors)
    }

    return result.data
}

export const renderError = (error: unknown): { message: string } => {
  return { message: error instanceof Error ? error.message : 'there was an error' }
}

export const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error('You must be logged in to access this route');
  }
  return user;
};