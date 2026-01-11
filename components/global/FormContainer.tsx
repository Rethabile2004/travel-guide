'use client'

import { useActionState, useEffect } from "react"
import { toast } from "sonner"

const initialState: { message: string } = {
    message: ''
}
const FormContainer = ({ action, children }: { action: (prevState: any, formData: FormData) => Promise<{ message: string }>, children: React.ReactNode }) => {
    const [state, formAction] = useActionState(action, initialState)
    useEffect(() => {
        if (state.message) {
            toast.success(state.message)
        }
    }, [state])
    return (
        <form action={formAction}>{children}</form>
    )
}

export default FormContainer