import UserReview from '@/components/Preview/UserReview';
import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs';

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

  console.log(searchParams);

  const checkSearchParamsID = searchParams.id !== undefined || null;
  const checkSearchParamsEmail = searchParams.email !== undefined || null;

  const currentUserDb = await db.user.findUnique({
    where: {
      userId: (userId as string) || searchParams.id,
      email:
        (user?.emailAddresses[0].emailAddress as string) || searchParams.email,
    },
  });

  const dbLinks = await db.link.findMany({
    where: {
      userId: currentUserDb?.id,
    },
  });

  return (
    <div className='flex flex-col flex-1'>
      <UserReview links={dbLinks} currentUser={currentUserDb} />
    </div>
  );
};

export default PreviewPage;
