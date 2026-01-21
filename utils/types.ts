import { Province } from "@/app/generated/prisma/enums";

export type City = {
    id: string;
    name: string;
    slug: string;
    province: Province;
    description: string;
    heroImageUrl: string;
    createdAt: Date;
    updatedAt: Date;
};

export type Favorite = {
    userId: string;
    id: string;
    cityId: string;
    city: City;
};

export type UserTripsType = {
    city: {
        name: string;
        id: string;
        slug: string;
        province: Province;
        description: string;
        heroImageUrl: string;
        createdAt: Date;
        updatedAt: Date;
    };
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    userId: string;
    cityId: string;
    startDate: Date | null;
    endDate: Date | null;
    notes: string | null;
    isArchived: boolean;
}

export interface TripData {
    id: string;
    title: string;
    cityId: string;
    startDate: Date | null;
    endDate: Date | null;
    notes: string | null;
}