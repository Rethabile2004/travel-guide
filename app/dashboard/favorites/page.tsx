// import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getFavorites } from "@/utils/actions/favorite";
import { City } from "@/app/generated/prisma/client";
import FavoriteToggleButton from "@/components/global/FavoriteToggleButton";

export default async function FavoritesPage() {
  const userId = 'user-2'//await getAuthUser();

  const favorites = await getFavorites();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Favorite Cities</h1>
        <p className="mt-2 text-muted-foreground">
          Cities in South Africa you’ve saved to explore later.
        </p>
      </header>

      {favorites.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((fav) => (
            <CityCard key={fav.id} city={fav.city} />
          ))}
        </div>
      )}
    </div>
  );
}

function CityCard({ city }: { city: City }) {
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

function EmptyState() {
  return (
    <div className="rounded-lg border border-dashed py-20 text-center">
      <h2 className="text-xl font-semibold">No favorite cities yet</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Save cities you’re interested in and they’ll appear here.
      </p>

      <Link
        href="/destinations"
        className="mt-6 inline-block rounded-md bg-foreground px-6 py-2 text-sm font-medium text-background"
      >
        Explore Cities
      </Link>
    </div>
  );
}
