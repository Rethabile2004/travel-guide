import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingFavorites() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <header className="mb-8 space-y-2">
        <Skeleton className="h-9 w-56" /> 
        <Skeleton className="h-5 w-80" /> 
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={i} 
            className="flex gap-x-5 rounded-lg border p-5"
          >
            <div className="flex-1 space-y-3">
              <Skeleton className="h-4 w-20" /> 
              <Skeleton className="h-6 w-3/4" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            </div>

            <div className="relative">
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
