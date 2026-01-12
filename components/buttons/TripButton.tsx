'use client'
import React from 'react'
import { Button } from '../ui/button'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { DeleteIcon } from 'lucide-react'
import { useFormStatus } from 'react-dom'

type Props = {
    type?: 'create' | 'edit'
}

const TripButton = (props: Props) => {
    const { pending } = useFormStatus()
    if (props.type === 'create') return (
        <Button className="w-full">
            {pending ? <AiOutlineLoading3Quarters className='animate-spin' /> : 'Create Trip'}
        </Button>
    );

    return (
        <Button className="w-full">
            {pending ? <AiOutlineLoading3Quarters className='animate-spin' /> : 'Edit Trip'}
        </Button>
    )
}

export default TripButton