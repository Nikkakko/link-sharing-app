import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs';
import { NextResponse, NextRequest } from 'next/server';

const uuid = require('uuid').v4;

export async function PATCH(req: Request) {
  const user = await currentUser();

  const body = await req.json();

  const { firstName, lastName, email, image, link } = body;

  if (!user) return new NextResponse('User not found', { status: 500 });

  try {
    const currentUser = await db.user.update({
      where: {
        userId: user?.id,
        email: user?.emailAddresses[0].emailAddress,
      },

      data: {},

      select: {
        link: true,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return new NextResponse('Something went wrong', { status: 500 });
  }
}
