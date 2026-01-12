import { currentUser, auth } from '@clerk/nextjs/server'
import { LuUser } from 'react-icons/lu'
import { ImUser } from "react-icons/im";
const UserIcon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl

  if (profileImage) {
    return <img src={profileImage} alt="profile image" className='h-6 w-6 rounded-full' />
  }
  return (
    <ImUser className='h-7 w-7 rounded-full bg-secondary text-white ml-3'/>
  )
}

export default UserIcon