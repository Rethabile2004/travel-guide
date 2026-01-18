'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'
import { Loader2Icon } from 'lucide-react'

const SubmitButton = ({ title }: { title: string }) => {
    const { pending } = useFormStatus()
    return (
        <Button disabled={pending} type="submit">{pending ? <><Loader2Icon className='animate-spin' />loading</> : title}</Button>
    )
}

export default SubmitButton