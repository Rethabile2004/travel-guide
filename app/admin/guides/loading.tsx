import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Skeleton className="h-10 w-64" />
        <div className="flex gap-4">
          <Skeleton className="h-10 w-44" />
        </div>
      </div>

      <Skeleton className="h-px w-full" /> 

      <Card>
        <CardHeader className="space-y-2">
          <Skeleton className="h-7 w-64" />
          <Skeleton className="h-5 w-96" />
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-3 gap-4 border-b p-4">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-5 w-24 justify-self-end" />
            </div>

            {[...Array(7)].map((_, i) => (
              <div 
                key={i}
                className="grid grid-cols-3 gap-4 border-b p-4 last:border-none"
              >
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-6 w-40" />
                <div className="flex justify-end gap-3">
                  <Skeleton className="h-9 w-20" />
                  <Skeleton className="h-9 w-24" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}