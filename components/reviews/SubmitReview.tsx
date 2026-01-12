'use client';
import { useState } from 'react';
import { SubmitButton } from '../global/SubmitButton';
import FormContainer from '../global/FormContainer';
import { Card } from '@/components/ui/card';
import RatingInput from './RatingInput';
import TextAreaInput from './TextAreaInput';
import { Button } from '@/components/ui/button';
import { createReviewAction } from '@/utils/actions/review';
import { useUser } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
function SubmitReview({ cityId }: { cityId: string }) {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  const { user } = useUser();
  return (
    <div>
      <Button
        size='lg'
        className='capitalize'
        onClick={() => setIsReviewFormVisible((prev) => !prev)}
      >
        leave review
      </Button>
      {isReviewFormVisible && (
        <Card className='p-8 mt-8'>
          <FormContainer action={createReviewAction}>
            <input type='hidden' name='cityId' value={cityId} />
            <input
              type='hidden'
              name='authorName'
              value={user?.firstName || 'user'}
            />
            <input
              type='hidden'
              name='authorImageUrl'
              value={user?.imageUrl || ''}
            />
            <RatingInput name='rating' />
            <TextAreaInput
              name='comment'
              labelText='feedback'
              defaultValue='Outstanding product!!!'
            />
            <SubmitButton className='mt-4' />
          </FormContainer>
        </Card>
      )}
    </div>
  );
}

export default SubmitReview;