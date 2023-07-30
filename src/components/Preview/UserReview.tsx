'use client';

import { useProfileStore } from '@/context/store';
import { ProfileIcon } from '@/svgs/icons';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const UserReview = () => {
  const { data: session } = useSession();
  const { profileInfo } = useProfileStore();

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col items-center text-center'>
        {session?.user?.image ? (
          <Image
            src={session?.user?.image as string}
            alt='user profile'
            width={104}
            height={104}
            className='rounded-full border-2 border-violet-600 w-[104px] h-[104px]
        object-fill object-center'
          />
        ) : (
          <ProfileIcon className='w-[104px] h-[104px]' />
        )}

        <div className='mt-[25px] flex flex-col gap-2'>
          <h1
            className='text-darkGrey text-[32px] font-bold leading-[48px] capitalize 
            max-w-[250px] 
          '
          >
            {profileInfo.firstName} {profileInfo.lastName}
          </h1>
          <p className='text-sm text-neutral-500'>{profileInfo.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
