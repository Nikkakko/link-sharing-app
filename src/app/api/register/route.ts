import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

const registerUserSchema = z.object({
  email: z
    .string()
    .email()
    .regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g, 'Invalid email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(100),
  confirmPassword: z.string().min(8).max(100),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters')
    .regex(/^[a-z0-9_-]{3,15}$/g, 'Invalid username'),
});

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { username, email, password } = body;

  if (!username || !email || !password) {
    return new NextResponse('Missing Fields', { status: 400 });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (exist) {
    throw new Error('Email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json(user);
}
