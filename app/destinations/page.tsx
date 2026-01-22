import { getCities } from "@/utils/actions/city";
import { MapPinOff } from "lucide-react";
import { provinces } from "@/utils/data";
import { DestinationsPageProps } from "@/utils/types";
import Filters from "@/components/destination/Filters";
import SectionTitle from "@/components/global/SectionTitle";
import CityGrid from "@/components/global/CityGrid";

export default async function DestinationsPage({ searchParams }: DestinationsPageProps) {
  const { search, province } = await searchParams
  const cities = await getCities(search, province);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <SectionTitle desc="Explore cities and start planning your next trip." title="Destinations" />
      <Filters provinces={provinces} />

      {cities.length === 0 ? (
        <div className="text-center py-20 border rounded-lg border-dashed flex flex-col items-center gap-4">
          <MapPinOff className="h-10 w-10 text-muted-foreground" />
          <p className="text-muted-foreground">
            No destinations found for your search.
          </p>
        </div>

      ) : (
        <section>
          <CityGrid cities={cities} />
        </section>
      )}
    </main>
  );
}

