import { fetchCityRating } from '@/utils/actions/review';
import { FaStar } from 'react-icons/fa';

async function CityRating({ cityId }: { cityId: string }) {
  const { rating, count } = await fetchCityRating(cityId);

  const className = `flex gap-1 items-center text-md mt-1 mb-4`;
  const countValue = `(${count}) reviews`;
  return (
    <span className={className}>
      <FaStar className='w-3 h-3' />
      {rating} {countValue}
    </span>
  );
}

export default CityRating;