import { SignInButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { FaRegHeart } from "react-icons/fa";
import { auth } from "@clerk/nextjs/server";

export const UserSignInButton = async () => {
  const { userId } = await auth()
  if (userId === null) return (
    <SignInButton mode='modal' >
      <Button
        size='sm'
        type='button'
        variant='outline'
        className='p-2 cursor-pointer mt-2'
      >
        Please sign in
      </Button>
    </SignInButton>
  );
  return <></>
};