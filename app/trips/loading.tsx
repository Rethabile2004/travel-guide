import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingTrips() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-9 w-40" /> 
        <Skeleton className="h-5 w-64" /> 
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-col space-y-4 rounded-xl border p-6">
            <div className="space-y-3">
              <Skeleton className="h-6 w-3/4" />
              
              <div className="flex items-center space-x-2">
                <Skeleton className="h-4 w-40" />
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-5/6" />
            </div>

            <div className="flex justify-end pt-4">
              <Skeleton className="h-9 w-24 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
