import ProfileCredentials from '@/components/Profile/ProfileCredentials';
import { db } from '@/lib/db';
import { auth, redirectToSignIn, currentUser } from '@clerk/nextjs';
import type { User } from '@clerk/nextjs/api';

const ProfileDetails = async () => {
  const { userId } = auth();
  const user: User | null = await currentUser();

  const currentUserDb = await db.user.findUnique({
    where: {
      email: user?.emailAddresses[0].emailAddress as string,
      userId: userId as string,
    },
  });

  if (!currentUser) {
    return redirectToSignIn();
  }

  if (!userId) {
    return redirectToSignIn();
  }

  return (
    <div className='p-4 flex flex-col bg-white'>
      <div className='flex flex-col gap-2'>
        <h1 className=' text-darkGrey text-2xl font-bold leading-9'>
          Profile Details
        </h1>
        <p className='text-customGrey text-base font-normal leading-norma'>
          Add your details to create a personal touch to your profile.
        </p>
      </div>

      <div className='mt-6 p-[20px] rounded-xl bg-neutral-50'>
        <ProfileCredentials initialData={currentUserDb} />
      </div>
    </div>
  );
};

export default ProfileDetails;
