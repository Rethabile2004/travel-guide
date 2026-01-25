import { deleteReviewAction, fetchCityRating, getCityReviewsById } from '@/utils/actions/review';
import ReviewCard from './ReviewCard';
import { DeleteIcon } from 'lucide-react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import FormContainer from '../global/FormContainer';
import { Button } from '../ui/button';
import IconButton from '../buttons/IconButton';
import { auth } from '@clerk/nextjs/server';
async function CityReviews({ cityId }: { cityId: string }) {
  const { userId } = await auth()
  const reviews = await getCityReviewsById(cityId);
  const { rating, count } = await fetchCityRating(cityId);
  let c = 0;
  return (
    <div className='mt-16'>
      <div className='grid md:grid-cols-2 gap-8 my-8'>
        {reviews.map((review) => {
          const { comment, rating, authorImageUrl, authorName } = review;
          const reviewInfo = {
            comment,
            rating,
            image: authorImageUrl,
            name: authorName,
          };
          const toggleAction = deleteReviewAction.bind(null, { reviewId: review.id })
          if (review.userId !== userId) {
            return
          }
          return <ReviewCard key={review.id} reviewInfo={reviewInfo} >
            {review.userId === userId ? <FormContainer action={toggleAction}>
              <IconButton />
            </FormContainer> : <></>}
          </ReviewCard>;
        })}
      </div>
    </div>
  );
}
export default CityReviews;