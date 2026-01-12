"use server"

import Link from "next/link"
import { navLinks } from "@/utils/links"
import { MdOutlineTravelExplore } from "react-icons/md";
import { Button } from "@/components/ui/button"
import { auth } from "@clerk/nextjs/server";
import {
    ClerkProvider,
    SignInButton,
    SignOutButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import UserIcon from "./UserIcon";

export async function Navbar() {
    const { userId } = await auth()
    
    return (
        <header className="border-b">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                <Button asChild>
                    <Link href="/" className="text-xl font-bold">
                        {/* <Travel */}
                        <MdOutlineTravelExplore width={24} height={24} />
                        TravelGuide
                    </Link>
                </Button>

                <nav className="flex items-center gap-6">
                    {navLinks.map((link) => {
                        if (!userId && (link.label === 'Favorites')) {
                            return <span key='about'className="flex items-center gap-6">
                                <Link
                                    href='/about'
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground"
                                >
                                    About
                                </Link>
                                <Link
                                    href='/about'
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground"
                                >
                                    Github
                                </Link>
                            </span>
                        }
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

                <div className="flex items-center gap-2">
                    {userId ? (
                        <span className="flex gap-x-3 justify-center place-items-center">
                            <Button variant="outline" size="sm" asChild>
                                <Link href="/dashboard">Dashboard</Link>
                            </Button>
                            <Button asChild size="sm">
                                <SignOutButton/>
                            </Button>
                        </span>
                    ) : (
                        <>
                        <Button size="sm" asChild>
                            <Link href="/sign-in">Sign In</Link>
                        </Button>
                        <UserIcon/>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}
