'use server';

import { db } from '../db';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function deleteLink(id: string) {
  const { userId, user: authUser } = auth();

  const user = await db.user.findFirst({
    where: {
      userId: userId as string,
    },
  });

  if (!user) {
    return new NextResponse('User not found', { status: 500 });
  }

  const link = await db.link.delete({
    where: {
      id: id,
    },
  });

  revalidatePath('/');
  return link;
}

export async function addNewLink() {
  const { userId, user: authUser } = auth();

  const user = await db.user.findFirst({
    where: {
      email: authUser?.emailAddresses[0].emailAddress as string,
      userId: userId as string,
    },
  });

  if (!user) {
    return;
  }

  // create a new link based on the user
  const newLink = await db.link.create({
    data: {
      link: '',
      platform: '',
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  revalidatePath('/');
  return newLink;
}

export async function saveLinks(id: string, platform: string, link: string) {
  const { userId, user: authUser } = auth();

  const user = await db.user.findFirst({
    where: {
      email: authUser?.emailAddresses[0].emailAddress as string,
      userId: userId as string,
    },
  });

  if (!user) {
    return;
  }

  const updatedLinks = await db.link.update({
    where: {
      id: id,
    },

    select: {
      id: true,
    },

    data: {
      platform: platform,
      link: link,
    },
  });

  revalidatePath('/');
  return updatedLinks;
}

export const updateProfileDetails = async (
  firstName: string,
  lastName: string,
  email: string,
  image: string
) => {
  const { userId, user: authUser } = auth();

  const user = await db.user.findFirst({
    where: {
      email: authUser?.emailAddresses[0].emailAddress as string,
      userId: userId as string,
    },
  });

  if (!user) {
    return;
  }

  //check if firstName,lastName,email,image is empty
  if (!firstName || !lastName || !email || !image) {
    return new NextResponse('Please fill all the fields', { status: 500 });
  }

  const updateProfile = await db.user.update({
    where: {
      id: user.id,
    },

    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      image: image,
    },
  });

  revalidatePath('/preview');
  return updateProfile;
};
