'use client';

import { useLinkStore, useProfileStore } from '@/context/store';
import { ProfileIcon } from '@/svgs/icons';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import ReviewCard from './ReviewCard';

const UserReview = () => {
  const { data: session } = useSession();
  const { profileInfo } = useProfileStore();
  const { links } = useLinkStore();

  return (
    <div className='flex flex-col w-[237px] mx-auto'>
      <div className='flex flex-col items-center text-center'>
        {session?.user?.image ? (
          <Image
            src={session?.user?.image as string}
            alt='user profile'
            width={104}
            height={104}
            blurDataURL={session?.user?.image as string}
            priority
            className='rounded-full border-2 border-violet-600 w-[104px] h-[104px]
        object-fill object-center'
          />
        ) : (
          <ProfileIcon className='w-[104px] h-[104px]' />
        )}

        <div className='mt-[25px] flex flex-col gap-2'>
          {profileInfo?.firstName && profileInfo.lastName ? (
            <>
              <h1
                className='text-darkGrey text-[32px] font-bold leading-[48px] capitalize 
            max-w-[250px] 
            '
              >
                {profileInfo.firstName} {profileInfo.lastName}
              </h1>
              <p className='text-sm text-neutral-500'>{profileInfo.email}</p>
            </>
          ) : (
            <div className='flex flex-col items-center'>
              <div className='w-[173px] h-[30px] bg-customGrey/50 rounded-md justify-center items-center inline-flex mt-4 relative' />
              <div className='w-[140px] h-[24px] bg-customGrey/50 rounded-md justify-center items-center inline-flex mt-4 relative' />
            </div>
          )}
        </div>
      </div>

      <div className='mt-12 flex flex-col gap-5'>
        {links?.map(link => (
          <ReviewCard link={link} key={link.id} />
        ))}
      </div>
    </div>
  );
};

export default UserReview;
