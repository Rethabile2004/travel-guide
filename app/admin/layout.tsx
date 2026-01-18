
"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Map, 
  Users, 
  Compass, 
  PlusCircle,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const SIDEBAR_WIDTH = "w-64"; 
const HEADER_HEIGHT = "h-14"; 

function NavItem({ href, label, icon: Icon }: { href: string; label: string; icon: any }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:text-primary",
        isActive 
          ? "bg-muted text-primary" 
          : "text-muted-foreground"
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );
}

function AdminNav() {
  const navGroups = [
    {
      title: "Core",
      items: [
        { href: "/admin", label: "Overview", icon: LayoutDashboard },
        { href: "/admin/users", label: "User Management", icon: Users },
      ]
    },
    {
      title: "Content",
      items: [
        { href: "/admin/destinations", label: "Destinations", icon: Map },
        { href: "/admin/guides", label: "Travel Guides", icon: Compass },
      ]
    },
    {
      title: "Actions",
      items: [
        { href: "/admin/destinations/new", label: "Add Destination", icon: PlusCircle },
        // { href: "/admin/guides/new", label: "Create Guide", icon: PlusCircle },
      ]
    }
  ];

  return (
    <nav className="grid items-start px-4 text-sm font-medium gap-4">
      {navGroups.map((group, i) => (
        <div key={i} className="space-y-1">
          <p className="px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
            {group.title}
          </p>
          {group.items.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </div>
      ))}
    </nav>
  );
}

type AdminLayoutProps = { children: ReactNode };

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-muted/40">
      <aside className={cn("fixed inset-y-0 left-0 z-10 hidden flex-col border-r bg-background lg:flex", SIDEBAR_WIDTH)}>
        <div className={cn("flex items-center border-b px-6", HEADER_HEIGHT)}>
          <Link href="/admin" className="flex items-center gap-2 font-bold">
            <Settings className="h-5 w-5 text-primary" />
            <span>Admin Console</span>
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <AdminNav />
        </div>

        <div className="mt-auto border-t p-4">
          <Button variant="ghost" className="w-full justify-start gap-2" asChild>
            <Link href="/">
              <LogOut className="h-4 w-4" />
              Exit to App
            </Link>
          </Button>
        </div>
      </aside>

      <div className={cn("flex flex-1 flex-col", "lg:pl-64")}>
        
        <header className={cn("sticky top-0 z-0 flex items-center gap-4 border-b bg-background px-6", HEADER_HEIGHT)}>
          <h2 className="text-sm font-medium text-muted-foreground">Admin / Dashboard</h2>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="mx-auto max-w-6xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
