// app/admin/page.tsx
import { fetchDashboardMetrics } from "@/utils/actions/admin/overview";
import { StatsCard } from "@/components/admin/overview/StatsChart";
import DashboardChartsClient from "@/components/admin/overview/DashboardChartsClient";
import { MapPin, BookOpen, Star, Plane } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

export default async function AdminDashboardPage() {
    // Data fetched securely on the server
    const metrics = await fetchDashboardMetrics();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">Admin / Dashboard</h1>
            
            {/* 1. KPI Grid (Server-rendered static cards) */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <StatsCard 
                    title="Total Destinations" 
                    value={metrics.totalCities} 
                    icon={MapPin} 
                />
                <StatsCard 
                    title="Total Guides" 
                    value={metrics.totalGuides} 
                    icon={BookOpen} 
                />
                <StatsCard 
                    title="User Reviews" 
                    value={metrics.totalReviews} 
                    icon={Star} 
                />
                <StatsCard 
                    title="Trips Planned" 
                    value={metrics.totalTrips} 
                    icon={Plane} 
                />
            </div>

            {/* 2. Charts (Passed data to Client Component) */}
            <div className="grid gap-6 lg:grid-cols-2">
                <DashboardChartsClient chartData={metrics.guidesPerProvinceData} />
                
                <Card>
                    <CardHeader>
                        <CardTitle>Recent User Activity</CardTitle>
                        <CardDescription>Summary of latest sign-ins and reviews.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-4">
                        <ul className="list-disc pl-5 text-sm text-gray-500 space-y-1">
                            <li>User 'JohnD' reviewed Cape Town (5 Stars).</li>
                            <li>User 'SarahM' reviewed Gauteng (4 Stars).</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
