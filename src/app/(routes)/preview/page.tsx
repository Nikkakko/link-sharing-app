import UserReview from '@/components/Preview/UserReview';
import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs';

import React from 'react';

const PreviewPage = async () => {
  const { userId } = auth();
  const user = await currentUser();

  const currentUserDb = await db.user.findUnique({
    where: {
      email: user?.emailAddresses[0].emailAddress as string,
      userId: userId as string,
    },
  });

  const dbLinks = await db.link.findMany({
    where: {
      userId: currentUserDb?.id,
    },
  });

  console.log(dbLinks);

  return (
    <div className='flex flex-col flex-1'>
      <UserReview links={dbLinks} currentUser={currentUserDb} />
    </div>
  );
};

export default PreviewPage;
