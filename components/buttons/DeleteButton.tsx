'use client'
import { Button } from '../ui/button'
import { LoaderCircle, Trash2 } from 'lucide-react'
import { useFormStatus } from 'react-dom'

const DeleteButton = () => {
    const { pending } = useFormStatus()
    return (
        <Button variant="destructive" size="sm" className="w-full justify-start">
            <Trash2 className="h-4 w-4 mr-2" /> {pending ? <LoaderCircle className='animate-spin' /> : 'Delete City'}
        </Button>
    )
}

export default DeleteButton