import UserReview from '@/components/Preview/UserReview';
import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs';
import CryptoJS from 'crypto-js';

import React from 'react';

type Props = {
  searchParams: {
    id: string;
    email: string;
  };
};

const PreviewPage = async ({ searchParams }: Props) => {
  const { userId } = auth();
  const user = await currentUser();

  const decryptedBytes = CryptoJS.AES.decrypt(
    searchParams.email || (user?.emailAddresses[0].emailAddress as string),
    process.env.NEXT_PUBLIC_ENCRYPTION_KEY as string
  );
  const decryptedEmail = decryptedBytes.toString(CryptoJS.enc.Utf8);

  const currentUserDb = await db.user.findUnique({
    where: {
      email:
        (searchParams.email !== null && decryptedEmail) ||
        (user?.emailAddresses[0].emailAddress as string),
    },
  });

  const dbLinks = await db.link.findMany({
    where: {
      userId: currentUserDb?.id as string,
    },
  });

  return (
    <div className='flex flex-col flex-1'>
      <UserReview links={dbLinks} currentUser={currentUserDb} />
    </div>
  );
};

export default PreviewPage;
