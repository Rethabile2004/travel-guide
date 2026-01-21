import { getCities } from "@/utils/actions/city";
import FavoriteToggleButton from "@/components/global/FavoriteToggleButton";
import Filters from "@/components/destination/Filters";
import { MapPinOff } from "lucide-react";
import { provinces } from "@/utils/data";
import { DestinationsPageProps } from "@/utils/types";
import { CityCard } from "@/components/destination/CityCard";

export default async function DestinationsPage({ searchParams }: DestinationsPageProps) {
  const { search, province } = await searchParams
  const cities = await getCities(search, province);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Destinations</h1>
        <p className="text-muted-foreground">
          Explore cities and start planning your next trip.
        </p>
      </div>
      <Filters provinces={provinces} />

      {cities.length === 0 ? (
        <div className="text-center py-20 border rounded-lg border-dashed flex flex-col items-center gap-4">
          <MapPinOff className="h-10 w-10 text-muted-foreground" />
          <p className="text-muted-foreground">
            No destinations found for your search.
          </p>
        </div>

      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <CityCard key={city.id} city={city} >
              <FavoriteToggleButton cityId={city.id} />
            </CityCard>
          ))}
        </div>
      )}
    </main>
  );
}
