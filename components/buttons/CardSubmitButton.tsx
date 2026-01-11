import { useFormStatus } from "react-dom";
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { Button } from "../ui/button";
import { TfiReload } from "react-icons/tfi";
export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type='submit'
      size='icon'
      variant='outline'
      disabled={pending}
      className=' p-2 cursor-pointer'
    >
      {pending ? (
        <TfiReload className='animate-spin' />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
};