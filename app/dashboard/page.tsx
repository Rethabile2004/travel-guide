// import { auth } from "@clerk/nextjs/server";

import { getFavoriteCitiesCount } from "@/utils/actions/city";

export default async function DashboardPage() {
  const  userId  ="user-2"// auth();
const cities=await getFavoriteCitiesCount()
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
        <StatCard title="Saved Guides" value="—" />
        <StatCard title="Trips Planned" value="—" />
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
