import { getUserTrips } from "@/utils/actions/trip"
import SectionTitle from "@/components/global/SectionTitle"
import TripGrid from "@/components/global/TripGrid"

export default async function TripsPage() {
  const trips = await getUserTrips()

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-8 h-screen">
      <SectionTitle desc="Manage your upcoming and past trips." title="My Trips" />
      {trips.length === 0 ? (
        <p className="text-muted-foreground">
          You haven’t created any trips yet.
        </p>
      ) : (
        <TripGrid trips={trips}/>
      )}
    </main>
  )
}


