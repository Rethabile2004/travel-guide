"use client";

import { ReactNode, useState } from "react";
import { redirect } from "next/navigation";
import { Menu, X } from "lucide-react"; 

type DashboardLayoutProps = { children: ReactNode };

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userId = "user-2";

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-muted/40">
      <header className="flex items-center justify-between border-b bg-background px-4 py-3 md:hidden">
        <span className="font-bold">Dashboard</span>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md p-1 hover:bg-muted"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 md:flex-row">
        {isMenuOpen && (
          <div className="rounded-lg border bg-background p-4 md:hidden">
            <nav className="flex flex-col space-y-2">
              <DashboardNav />
            </nav>
          </div>
        )}

        <aside className="hidden w-64 shrink-0 rounded-lg border bg-background p-4 md:block">
          <nav className="space-y-2">
            <DashboardNav />
          </nav>
        </aside>

        <main className="flex-1 rounded-lg border bg-background p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

function DashboardNav() {
  return (
    <>
      <NavItem href="/dashboard" label="Overview" />
      <NavItem href="/dashboard/favorites" label="Favorites" />
      <NavItem href="/dashboard/trips" label="My Trips" />
      <NavItem href="/dashboard/profile" label="Profile" />
    </>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
    >
      {label}
    </a>
  );
}
