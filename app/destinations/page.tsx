import { CityCard } from "@/components/Destination/CityCard"
import { getCities } from "@/utils/actions/city"
import { City } from "../generated/prisma/browser"

export default async function DestinationsPage() {
  const cities = await getCities()

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Destinations</h1>
        <p className="text-muted-foreground">
          Explore cities and start planning your next trip.
        </p>
      </div>

      {cities.length === 0 ? (
        <p className="text-muted-foreground">No destinations found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      )}
    </main>
  )
}
