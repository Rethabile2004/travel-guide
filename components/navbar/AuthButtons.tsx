import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { UserIcon } from "lucide-react";

export default async function AuthButtons() {
  const { userId } = await auth();

  return (
    <div className="flex items-center gap-2">
      {userId ? (
        <div className="flex items-center gap-x-3">
          <Button variant="outline" size="sm" className="hidden sm:flex" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>          
          <UserButton afterSignOutUrl="/" />
          
        </div>
      ) : (
        <div className="flex items-center gap-x-2">
          <Button size="sm" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          
          <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-muted">
            <UserIcon className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      )}
    </div>
  );
}
