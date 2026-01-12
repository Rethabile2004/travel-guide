// import { auth } from '@clerk/nextjs/server';
import { CardSignInButton } from '../buttons/CardSignInButton';
import { fetchFavoriteId } from '@/utils/actions/favorite';
import FavoriteToggleForm from './FavoriteToggleForm';
import { auth } from '@clerk/nextjs/server';
async function FavoriteToggleButton({ cityId }: { cityId: string }) {
  const user = await auth()
  const userId = user.userId;

  if (!userId) return <CardSignInButton />
  const favoriteId = await fetchFavoriteId({ cityId })

  return (
    <FavoriteToggleForm favoriteId={favoriteId} cityId={cityId} />
  );
}
export default FavoriteToggleButton;
