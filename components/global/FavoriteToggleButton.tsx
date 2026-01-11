// import { auth } from '@clerk/nextjs/server';
// import { CardSignInButton } from '../form/Buttons';
import { fetchFavoriteId } from '@/utils/actions/favorite';
import FavoriteToggleForm from './FavoriteToggleForm';
async function FavoriteToggleButton({ cityId }: { cityId: string }) {
  // const user = await auth()
  const userId = 'user-2'//user.userId;
  
  // if (!userId) return <CardSignInButton />
  const favoriteId = await fetchFavoriteId({ cityId })

  return (
    <FavoriteToggleForm favoriteId={favoriteId} cityId={cityId} />
  );
}
export default FavoriteToggleButton;
