// src/components/layout/navbar.tsx
"use client"

import Link from "next/link"
import { navLinks } from "@/utils/links"
import { Button } from "@/components/ui/button"
// import { useUser } from "@clerk/nextjs"

export function Navbar() {
    const isSignedIn = true//useUser()

    return (
        <header className="border-b">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold">
                    TravelGuide
                </Link>

                {/* Nav */}
                <nav className="flex items-center gap-6">
                    {navLinks.map((link) => {
                        if (!isSignedIn) return null

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                </nav>

                {/* Auth CTA */}
                <div className="flex items-center gap-2">
                    {isSignedIn ? (
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/dashboard">Dashboard</Link>
                        </Button>
                    ) : (
                        <Button size="sm" asChild>
                            <Link href="/sign-in">Sign In</Link>
                        </Button>
                    )}
                </div>
            </div>
        </header>
    )
}
