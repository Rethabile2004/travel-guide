import { TripGridType } from '@/utils/types'
import React from 'react'
import { TripCard } from '../trip/TripCard'

const TripGrid = ({ trips }: { trips: TripGridType[] }) => {
    return (
        <div className="grid gap-6 sm:grid-cols-2">
            {trips.map((trip) => (
                <TripCard key={trip.id} trip={{ id: trip.id, endDate: trip.endDate, notes: trip.notes, startDate: trip.startDate, title: trip.title }} />
            ))}
        </div>
    )
}

export default TripGrid