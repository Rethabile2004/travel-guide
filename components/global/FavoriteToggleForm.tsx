'use client';

import { usePathname } from 'next/navigation';
import FormContainer from './FormContainer';
import { toggleFavoriteAction } from '@/utils/actions/favorite';
import { CardSubmitButton } from '../buttons/CardSubmitButton';

type FavoriteToggleFormProps = {
  cityId: string;
  favoriteId: string | null;
};

function FavoriteToggleForm({
  cityId,
  favoriteId,
}: FavoriteToggleFormProps) {
  const pathname = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    cityId,
    favoriteId,
    pathname,
  });
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
}
export default FavoriteToggleForm;