import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function Loading() {
  return (
    <div className="space-y-6 p-6">
      {/* Header area */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-9 w-72" />           {/* Title */}
          <Skeleton className="h-5 w-96" />           {/* Description */}
        </div>
        <Skeleton className="h-7 w-36 rounded-full" /> {/* Badge */}
      </div>

      <Separator />

      <Card className="shadow-sm">
        <CardHeader className="space-y-3">
          <Skeleton className="h-7 w-64" />           {/* CardTitle */}
          <Skeleton className="h-5 w-96" />           {/* CardDescription */}
        </CardHeader>

        <CardContent>
          {/* Table header */}
          <div className="rounded-md border">
            <div className="grid grid-cols-6 gap-4 border-b bg-muted/50 p-4">
              <Skeleton className="h-5 w-20" />        {/* Profile */}
              <Skeleton className="h-5 w-32" />        {/* Full Name */}
              <Skeleton className="h-5 w-48" />        {/* Email */}
              <Skeleton className="h-5 w-32" />        {/* Joined */}
              <Skeleton className="h-5 w-32" />        {/* Last Sign In */}
              <Skeleton className="h-5 w-20 justify-self-end" /> {/* Status */}
            </div>

            {/* Skeleton rows - show 6-8 realistic rows */}
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-6 items-center gap-4 border-b p-4 last:border-none hover:bg-muted/30"
              >
                {/* Avatar */}
                <Skeleton className="h-10 w-10 rounded-full" />

                {/* Name */}
                <div className="space-y-2">
                  <Skeleton className="h-5 w-40" />
                </div>

                {/* Email */}
                <Skeleton className="h-5 w-56" />

                {/* Joined date */}
                <Skeleton className="h-5 w-32" />

                {/* Last sign in */}
                <Skeleton className="h-5 w-32" />

                {/* Status badge */}
                <div className="flex justify-end">
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}