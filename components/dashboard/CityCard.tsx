import { City } from "@/app/generated/prisma/client";
import Link from "next/link";
import FavoriteToggleButton from "../global/FavoriteToggleButton";

export function CityCard({ city }: { city: City }) {
  return (
    <div className="flex gap-x-5 group rounded-lg border p-5 transition hover:border-foreground">
      <Link
        href={`/citys/${city.slug}`}
      >
        <div className="mb-1 text-sm text-muted-foreground">
          {city.province}
        </div>

        <h3 className="text-lg font-semibold group-hover:underline">
          {city.name}
        </h3>

        {city.province && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
            {city.description}
          </p>
        )}
      </Link>
      <div className="relative">

        <FavoriteToggleButton cityId={city.id} />
      </div>
    </div>
  );
}

