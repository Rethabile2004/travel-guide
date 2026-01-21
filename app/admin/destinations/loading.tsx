import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function Loading() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-10 w-72" />
          <Skeleton className="h-5 w-96" />
        </div>
        <Skeleton className="h-10 w-48 rounded-md" /> 
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <Skeleton className="h-7 w-64" />
        </CardHeader>

        <CardContent className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="border rounded-lg px-4 py-3 bg-card"
            >
              <div className="flex items-center gap-4">
                <Skeleton className="h-10 w-10 rounded-md" />

                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-6 w-40" />
                    <Skeleton className="h-5 w-24 rounded-sm" /> 
                  </div>
                  <Skeleton className="h-4 w-56" /> 
                </div>
              </div>
              <div className="pt-5 grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                <div className="md:col-span-2 space-y-5">
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {Array(3).fill(0).map((_, idx) => (
                      <div key={idx} className="text-center space-y-2 p-3 bg-muted/40 rounded-lg">
                        <Skeleton className="h-8 w-12 mx-auto" />
                        <Skeleton className="h-3 w-20 mx-auto" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-5 w-56 font-mono" />
                  <Skeleton className="h-4 w-40" />

                  <div className="space-y-2 pt-2">
                    <Skeleton className="h-9 w-full" />
                    <Skeleton className="h-9 w-full" />
                    <Skeleton className="h-9 w-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}