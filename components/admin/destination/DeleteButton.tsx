'use client'
import { Button } from '@/components/ui/button'
import { LoaderIcon, Trash2 } from 'lucide-react'
import { useFormStatus } from 'react-dom'

const DeleteButton = () => {
    const { pending } = useFormStatus()
    return (
        <Button disabled={pending} variant="destructive" size="sm" className="w-full justify-start">
            {pending ? <LoaderIcon className='h-4 w-4 mr-2 animate-spin' /> : <Trash2 className="h-4 w-4 mr-2" />} {pending ? 'Deleting...' : 'Delete City'}
        </Button>
    )
}

export default DeleteButton