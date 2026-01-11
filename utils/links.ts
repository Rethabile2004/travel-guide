// src/utils/links.ts
export type NavLink = {
    label: string
    href: string
}

export const navLinks: NavLink[] = [
    { label: "Destinations", href: "/destinations" },
    { label: "Guides", href: "/guides" },
    { label: "Trips", href: "/trips", },
    { label: "Favorites", href: "/favorites" },
]
