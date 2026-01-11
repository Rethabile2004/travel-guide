import { getUserTrips } from "@/utils/actions/trip"
import { TripCard } from "@/components/Trip/TripCard"

export default async function TripsPage() {
  const trips = await getUserTrips()

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Trips</h1>
        <p className="text-muted-foreground">
          Manage your upcoming and past trips.
        </p>
      </div>

      {trips.length === 0 ? (
        <p className="text-muted-foreground">
          You haven’t created any trips yet.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      )}
    </main>
  )
}
