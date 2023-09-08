import { Customize } from '@/components/Links';
import { db } from '@/lib/db';
import { auth, redirectToSignIn, currentUser } from '@clerk/nextjs';
import type { User } from '@clerk/nextjs/api';
import React from 'react';

const HomePage = async () => {
  const { userId } = auth();
  const user: User | null = await currentUser();

  const currentUserDb = await db.user.findUnique({
    where: {
      email: user?.emailAddresses[0].emailAddress as string,
      userId: userId as string,
    },
  });

  if (!currentUserDb) {
    const newUser = await db.user.create({
      data: {
        email: user?.emailAddresses[0].emailAddress as string | '',
        userId: userId as string,
        firstName: user?.firstName as string | '',
        lastName: user?.lastName as string | '',
        image: user?.imageUrl as string,
      },

      //check if user already exists in db
    });
  }

  //find link that belongs to user
  const link = await db.link.findMany({
    where: {
      userId: currentUserDb?.id as string,
    },
  });

  if (!userId) {
    return redirectToSignIn();
  }

  return (
    <div className='p-6 bg-white rounded-md shadow-sm '>
      <Customize links={link} />
    </div>
  );
};

export default HomePage;
