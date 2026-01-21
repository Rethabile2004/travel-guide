import { Province } from '@/app/generated/prisma/client'
import React from 'react'
import { EmptyState } from './EmptyState'
import { CityCard } from './CityCard'

type City = {
    id: string;
    name: string;
    slug: string;
    province: Province;
    description: string;
    heroImageUrl: string;
    createdAt: Date;
    updatedAt: Date;
};

type Favorite = {
    userId: string;
    id: string;
    cityId: string;
    city: City;
};

const FavoritesContent = ({ favorites }: { favorites: Favorite[] }) => {
    return (
        <div className="mx-auto max-w-7xl px-4 py-10 h-screen">
            <header className="mb-8">
                <h1 className="text-3xl font-bold">Favorite Cities</h1>
                <p className="mt-2 text-muted-foreground">
                    Cities in South Africa you’ve saved to explore later.
                </p>
            </header>
            {favorites.length === 0 ? (
                <EmptyState />
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {favorites.map((fav) => (
                        <CityCard key={fav.id} city={fav.city} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default FavoritesContent