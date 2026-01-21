import { FavoriteGridType } from '@/utils/types'
import React from 'react'
import { CityCard } from '../dashboard/CityCard'

const FavoriteGrid = ({ favorites }: { favorites: FavoriteGridType[] }) => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((fav) => (
                <CityCard key={fav.id} city={fav.city} />
            ))}
        </div>
    )
}

export default FavoriteGrid