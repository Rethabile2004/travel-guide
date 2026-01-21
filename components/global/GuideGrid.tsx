import React from 'react'
import { GuideCard } from '../guide/GuideCard'
import { GuideType } from '@/utils/types'

const GuideGrid = ({ guides }: { guides: GuideType[] }) => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
            ))}
        </div>
    )
}

export default GuideGrid