import StatCard from "@/components/dashboard/StatCard";
import { getFavoriteCitiesCount } from "@/utils/actions/city";
import { getDashboardActivityData } from "@/utils/actions/dashboard";
import { getPlannedTripsCount } from "@/utils/actions/trips";

export default async function DashboardPage() {
  const cities = await getFavoriteCitiesCount()
  const trips = await getPlannedTripsCount()
  
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your travel activity
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Saved Cities" value={cities.toString()} />
        <StatCard title="Trips Planned" value={trips.toString()} />
      </div>
    </section>
  );
}

