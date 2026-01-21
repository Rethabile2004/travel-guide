import { Province } from '@/app/generated/prisma/client'
import React from 'react'
import { EmptyState } from './EmptyState'
import { CityCard } from './CityCard'
import { Favorite } from '@/utils/types'

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
                <EmptyState description="Save cities you're are interested in and they'll appear here" href='/destinations' text='Explore cities' title='No favorite cities yet' />
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