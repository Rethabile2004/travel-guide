"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";      
import Link from "next/link";
import { navLinks } from "@/utils/links";
import { useState } from "react";
import { cn } from "@/lib/utils";               

export function MobileSidebar({ userId }: { userId: string | null }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-muted/60 active:bg-muted"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent 
          side="left" 
          className={cn(
            "w-[85vw] max-w-[340px] p-0 bg-gradient-to-b from-background to-background/95",
            "border-r border-border/40 backdrop-blur-sm",
            // optional subtle shadow on some devices
            "shadow-2xl shadow-black/20 dark:shadow-black/40"
          )}
        >
          <SheetHeader className="border-b px-6 py-5">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-xl font-semibold tracking-tight">
                TravelGuide
              </SheetTitle>
            </div>
          </SheetHeader>

          <nav className="flex flex-col py-6 px-5">
            <ul className="space-y-1.5">
              {navLinks.map((link) => {
                if (!userId && link.label === "Favorites") return null;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-4 py-3.5 text-[15.5px] font-medium",
                        "text-foreground/90 transition-all duration-200",
                        "hover:bg-accent hover:text-accent-foreground",
                        "active:bg-accent/70",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {!userId && (
              <div className="mt-8 border-t pt-6 px-4">
                <p className="mb-3 px-1 text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
                  Explore more
                </p>
                <ul className="space-y-1.5">
                  <li>
                    <Link
                      href="/about"
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center rounded-lg px-4 py-3 text-[15px] font-medium",
                        "text-muted-foreground hover:bg-muted/70 hover:text-foreground",
                        "transition-colors"
                      )}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/github"
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center rounded-lg px-4 py-3 text-[15px] font-medium",
                        "text-muted-foreground hover:bg-muted/70 hover:text-foreground",
                        "transition-colors"
                      )}
                    >
                      Github
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </nav>

          <div className="mt-auto border-t p-6 text-xs text-muted-foreground/60">
            <p>© {new Date().getFullYear()} TravelGuide</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}