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

export const userLinks: NavLink[] = [
    { label: "Overview", href: "/dashboard" },    
    { label: "Favorites", href: "/dashboard/favorites" },    
    { label: "My Trips", href: "/dashboard/trips" },    
    { label: "Profile", href: "/dashboard/profile" },    
]
