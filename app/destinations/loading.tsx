import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function DestinationsLoadingSkeleton() {
    const DestinationCardSkeleton = () => (
        <Card className="flex flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl px-20">
            <Skeleton className="h-48 w-full rounded-b-none" />

            <CardContent className="p-4 space-y-3">
                <Skeleton className="h-6 w-32" /> {/* City Name */}
                <Skeleton className="h-4 w-24" /> {/* Region/Subtitle */}
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" /> {/* Description line 1 */}
                    <Skeleton className="h-4 w-5/6" /> {/* Description line 2 */}
                </div>
            </CardContent>
        </Card>
    );

    return (
        <main className="mx-auto max-w-7xl px-4 py-12">
            <div className="p-4 md:p-8">
                {/* Header/Title Placeholder */}
                <div className="mb-8 space-y-3">
                    <Skeleton className="h-10 w-48" /> {/* Main Title: Destinations */}
                    <Skeleton className="h-5 w-72" /> {/* Subtitle: Explore cities... */}
                </div>

                {/* Grid of 3 Card Skeletons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <DestinationCardSkeleton />
                    <DestinationCardSkeleton />
                    <DestinationCardSkeleton />
                </div>
            </div>
        </main>
    )
}
