import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

/**
 * A loading skeleton component that mimics the travel guide card layout.
 */
export default function TravelGuideLoadingSkeleton() {
  return (
    <div className="space-y-8 p-4 md:p-8">
      {/* Main City Card Skeleton */}
      <Card className="flex flex-col md:flex-row overflow-hidden">
        {/* Image Placeholder */}
        <Skeleton className="h-64 w-full md:w-96 rounded-none" />

        {/* Text Content Placeholder */}
        <div className="flex flex-col p-6 space-y-4">
          <Skeleton className="h-8 w-64" /> {/* Title */}
          <Skeleton className="h-4 w-32" /> {/* Subtitle/Region */}
          <Skeleton className="h-4 w-full max-w-lg" /> {/* Description line 1 */}
          <Skeleton className="h-4 w-3/4 max-w-lg" /> {/* Description line 2 */}
        </div>
      </Card>

      {/* Top Attractions Section Header */}
      <Skeleton className="h-8 w-56 mt-8" />

      {/* Attractions Grid Skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Attraction Card 1 Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-48" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2 mt-2" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-24" /> {/* Category Tag */}
          </CardContent>
        </Card>

        {/* Attraction Card 2 Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-48" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2 mt-2" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-24" /> {/* Category Tag */}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
