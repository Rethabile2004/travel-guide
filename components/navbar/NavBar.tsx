import Link from "next/link";
import { navLinks } from "@/utils/links";
import { MdOutlineTravelExplore } from "react-icons/md";
import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";
import { AuthSkeleton } from "../loading/AuthSkeleton";
import AuthButtons from "./AuthButtons";
import { MobileSidebar } from "./MobileSidebar";
import { ModeToggle } from "./ThemeToggle";

export default async function Navbar() {
  const { userId } = await auth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur upports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
        <div className="flex items-center gap-4">
          <MobileSidebar userId={userId} />
          
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <MdOutlineTravelExplore className="h-8 w-8 text-primary" />
            <span className="hidden text-xl font-bold tracking-tight sm:inline-block">
              TravelGuide
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (!userId && link.label === "Favorites") return null; 

            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            );
          })}

          {!userId && (
            <div className="flex items-center gap-6 border-l pl-6">
              <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="/github" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Github
              </Link>
            </div>
          )}
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle /> 
          <Suspense fallback={<AuthSkeleton />}>
            <AuthButtons />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
