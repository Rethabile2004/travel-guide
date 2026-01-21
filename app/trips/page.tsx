import { getUserTrips } from "@/utils/actions/trip"
import { TripCard } from "@/components/trip/TripCard"
import SectionTitle from "@/components/global/SectionTitle"

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
        <div className="grid gap-6 sm:grid-cols-2">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={{ id: trip.id, endDate: trip.endDate, notes: trip.notes, startDate: trip.startDate, title: trip.title }} />
          ))}
        </div>
      )}
    </main>
  )
}
