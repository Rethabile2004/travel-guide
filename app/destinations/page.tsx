import { CityCard } from "@/components/Destination/CityCard";
import { getCities } from "@/utils/actions/city";
import FavoriteToggleButton from "@/components/global/FavoriteToggleButton";
import Filters from "@/components/Destination/Filters";

type SearchParams = {
  search?: string;
  province?: string;
};

interface DestinationsPageProps {
  searchParams: SearchParams;
}

export default async function DestinationsPage({ searchParams }: DestinationsPageProps) {
  const { search, province } = await searchParams
  const cities = await getCities(search, province);

  // Hardcoded list of provinces for the dropdown filter (replace with DB fetch if needed)
  const provinces = ["Western_Cape", "Gauteng", "KwaZulu_Natal", "Mpumalanga"];

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Destinations</h1>
        <p className="text-muted-foreground">
          Explore cities and start planning your next trip.
        </p>
      </div>
      <Filters provinces={provinces} />

      {cities.length === 0 ? (
        <div className="text-center py-20 border rounded-lg border-dashed">
          <p className="text-muted-foreground">No destinations found for your search.</p>
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
