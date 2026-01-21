import { CityGridType } from '@/utils/types'
import React from 'react'
import { CityCard } from '../destination/CityCard'
import FavoriteToggleButton from './FavoriteToggleButton'

const CityGrid = ({ cities }: { cities: CityGridType[] }) => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
                <CityCard key={city.id} city={city} >
                    <FavoriteToggleButton cityId={city.id} />
                </CityCard>
            ))}
        </div>)
}

export default CityGrid