import React from 'react'
import { CardContent } from '../ui/card'

const ContactCard = ({ href, title }: { href: string, title: string }) => {
    return (
        <CardContent className="mt-2 p-0">
            <a href={href} className="text-sm text-muted-foreground hover:underline">
                {title}
            </a>
        </CardContent>
    )
}

export default ContactCard