import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingGuides() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-9 w-64" /> 
        <Skeleton className="h-5 w-80" />  
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col space-y-4 rounded-xl border p-4">
            <Skeleton className="aspect-video w-full rounded-lg" />
            
            <div className="space-y-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            <div className="flex items-center justify-between pt-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
