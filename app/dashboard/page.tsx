// import { auth } from "@clerk/nextjs/server";

import { getFavoriteCitiesCount } from "@/utils/actions/city";
import { getDashboardActivityData } from "@/utils/actions/dashboard";
import { getPlannedTripsCount } from "@/utils/actions/trips";

export default async function DashboardPage() {
  const cities = await getFavoriteCitiesCount()
  const {lastActivityDate}=await getDashboardActivityData()
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
        <StatCard title="Last Activity" value={lastActivityDate!.toLocaleDateString()} />
        <StatCard title="Trips Planned" value={trips.toString()} />
      </div>
    </section>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border p-4">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </div>
  );
}
