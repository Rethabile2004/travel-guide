import { getFavorites } from "@/utils/actions/favorite";
import { EmptyState } from "@/components/dashboard/EmptyState";
import SectionTitle from "@/components/global/SectionTitle";
import FavoriteGrid from "@/components/global/FavoriteGrid";

export default async function FavoritesPage() {
  const favorites = await getFavorites();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 h-screen">
      <SectionTitle desc="Cities in South Africa you’ve saved to explore later." title="Favorite Cities" />
      {favorites.length === 0 ? (
        <EmptyState description="Save cities you're are interested in and they'll appear here" href='/destinations' text='Explore cities' title='No favorite cities yet' />
      ) : (
        <FavoriteGrid favorites={favorites}/>
      )}
    </div>
  );
}
