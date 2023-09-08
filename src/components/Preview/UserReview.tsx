'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import ReviewCard from './ReviewCard';
import { useUser } from '@clerk/nextjs';
import qs from 'query-string';
import CryptoJS from 'crypto-js';
import { useRouter, usePathname } from 'next/navigation';

import { User } from '@prisma/client';

type Props = {
  links:
    | {
        id: string;
        platform: string;
        link: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
      }[]
    | null;

  currentUser: User | null;
};
const UserReview = ({ links, currentUser }: Props) => {
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const encryptionKey = process.env.NEXT_PUBLIC_ENCRYPTION_KEY as string;

  const Skeleton = () => {
    //animate skeleton loader
    return (
      <div
        className='flex flex-col w-[237px] mx-auto
      animate-pulse
      '
      >
        <div className='flex flex-col items-center text-center'>
          <div className='w-[250px] h-[32px] bg-customGrey/50 rounded-md justify-center items-center inline-flex mt-4 relative' />
          <div className='w-[140px] h-[24px] bg-customGrey/50 rounded-md justify-center items-center inline-flex mt-4 relative' />
        </div>
      </div>
    );
  };

  const ProfileImageSkeleton = () => {
    return (
      <div className='w-[104px] h-[104px] bg-customGrey/50 rounded-full justify-center items-center inline-flex mt-4 relative animate-pulse' />
    );
  };

  useEffect(() => {
    const query = {
      email: CryptoJS.AES.encrypt(
        currentUser?.email as string,
        encryptionKey
      ).toString(),
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );

    router.push(url);
  }, [router, pathname]);

  return (
    <div className='flex flex-col w-[237px] mx-auto shadow-sm bg-background p-6'>
      <div className='p-4  rounded-lg hover:opacity-75 transition flex flex-col space-y-2 items-center justify-center text-center'>
        {currentUser?.image ? (
          <Image
            src={currentUser?.image || (user?.imageUrl as string)}
            alt='user profile'
            width={104}
            height={104}
            sizes='104px'
            blurDataURL={currentUser?.image || user?.imageUrl}
            priority
            className='rounded-full border-2 border-violet-600 w-[104px] h-[104px]
        object-fill object-center'
          />
        ) : (
          <ProfileImageSkeleton />
        )}

        <div className='mt-[25px] flex flex-col gap-2'>
          {currentUser?.firstName && currentUser.lastName ? (
            <>
              <h1
                className='text-darkGrey text-[32px] font-bold leading-[48px] capitalize 
            max-w-[250px] 
            '
              >
                {currentUser.firstName} {currentUser.lastName}
              </h1>
              <p className='text-sm text-neutral-500'>{currentUser.email}</p>
            </>
          ) : (
            <Skeleton />
          )}
        </div>
      </div>

      <div
        className='mt-12 flex flex-col gap-5 
      '
      >
        {links?.map(link => (
          <ReviewCard link={link} key={link?.id} />
        ))}
      </div>
    </div>
  );
};

export default UserReview;
