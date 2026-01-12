import { ReactNode } from "react";
// import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const  userId  = "user-2"

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-muted/40">
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 rounded-lg border bg-background p-4 md:block">
          <nav className="space-y-2">
            <DashboardNav />
          </nav>
        </aside>

        {/* Main content */}
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
