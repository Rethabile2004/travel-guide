import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const CreateTripButton = () => {
    return (
        <Button asChild className='hover:pointer'>
            <Link href="/dashboard/trips/new">Create Trip</Link>
        </Button>
    )
}

export default CreateTripButton