'use client'
import React from 'react'
import { Button } from '../ui/button'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { DeleteIcon } from 'lucide-react'
import { useFormStatus } from 'react-dom'

type Props = {}

const IconButton = (props: Props) => {
    const { pending } = useFormStatus()
    return (
        <Button>
            {pending ? <AiOutlineLoading3Quarters className='animate-spin'/> : <DeleteIcon />}
        </Button>
    )
}

export default IconButton