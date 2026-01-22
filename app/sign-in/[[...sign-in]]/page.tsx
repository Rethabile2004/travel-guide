import { SignIn, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 bg-gray-50">
      <ClerkLoading>
        <div className="flex flex-col space-y-4 w-full max-w-md">
          <Skeleton className="h-28 w-full rounded-xl" />
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        <div className="w-full max-w-md">
          <SignIn
            appearance={{
              elements: {
                footer: "hidden",
                card: "shadow-lg rounded-xl p-6 bg-white",
                headerTitle: "text-xl font-semibold text-gray-800",
                formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
              },
            }}
          />
        </div>
      </ClerkLoaded>
    </main>
  );
}