import { redirect } from "next/navigation";
import Link from "next/link";
import { getFavorites } from "@/utils/actions/favorite";
import { City } from "@/app/generated/prisma/client";
import FavoriteToggleButton from "@/components/global/FavoriteToggleButton";
import { auth } from "@clerk/nextjs/server";
import FavoritesContent from "@/components/dashboard/FavoritesContent";

export default async function FavoritesPage() {
  // const { userId } = await auth();

  const favorites = await getFavorites();

  return (
    <FavoritesContent favorites={favorites} />
  );
}