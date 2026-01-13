'use client'

import { redirect } from "next/navigation"
import { useActionState, useEffect } from "react"
import { toast } from "sonner"

const initialState: { message: string, success?: boolean } = {
    message: '',
    success: false
}
const FormContainer = ({ action, children }: { action: (prevState: any, formData: FormData) => Promise<{ message: string }>, children: React.ReactNode }) => {
    const [state, formAction] = useActionState(action, initialState)
    useEffect(() => {
        if (state.message) {
            toast.success(state.message)
            if (state.message.includes('Trip removed successfully')) {
                redirect('/dashboard/trips')
            } else if (state.message.includes('Trip updated successfully')) {
                redirect('/dashboard/trips')

            }
        }
    }, [state])
    return (
        <form action={formAction}>{children}</form>
    )
}

export default FormContainer