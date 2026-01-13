import { SignIn, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <ClerkLoading>
        <div className="flex flex-col space-y-4 w-full max-w-[400px]">
          <Skeleton className="h-[450px] w-full rounded-xl" />
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        <SignIn 
          appearance={{
            elements: {
              footer: "hidden", 
            }
          }}
        />
      </ClerkLoaded>
    </main>
  );
}
