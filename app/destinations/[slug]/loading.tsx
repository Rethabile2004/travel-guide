import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingDestinationDetail() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 space-y-12">
      <section className="grid gap-8 lg:grid-cols-2">
        <Skeleton className="h-100 w-full rounded-xl" />

        <div className="flex flex-col justify-center space-y-4">
          <Skeleton className="h-10 w-2/3" /> 
          <Skeleton className="h-5 w-1/3" /> 
          <div className="space-y-2 mt-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </section>
      <section>
        <Skeleton className="mb-6 h-8 w-48" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border p-4 space-y-3">
              <Skeleton className="h-5 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-3 w-1/4 mt-2" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <Skeleton className="mb-6 h-8 w-40" /> 
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border p-4 space-y-3">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-6 w-20 rounded" />
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-6">
        <Skeleton className="h-8 w-32" />
        <div className="space-y-4">
           <Skeleton className="h-24 w-full rounded-lg" />
           <Skeleton className="h-24 w-full rounded-lg" />
        </div>
      </section>
    </main>
  )
}
