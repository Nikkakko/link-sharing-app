import { db } from './db';
import { NextAuthOptions, User, getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

import { z } from 'zod';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

const loginUserSchema = z.object({
  email: z
    .string()
    .email()
    .regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g, 'Invalid email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(100),
});

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email address',
          type: 'email',
          placeholder: 'e.g. alex@email.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter your password',
        },
      },

      async authorize(credentials) {
        const validatedCredentials = loginUserSchema.parse(credentials);

        const user = await db.user.findUniqueOrThrow({
          where: {
            email: validatedCredentials?.email,
          },
        });

        if (!user) {
          throw new Error('User not found');
        }

        const passwordValid = await bcrypt.compare(
          validatedCredentials.password,
          user.password as string
        );

        if (!passwordValid) {
          throw new Error('Invalid password');
        }

        return user;
      },
    }),
  ],

  callbacks: {
    session({ session, token }) {
      session.user.id = token.id;
      session.user.username = token.username;
      return session;
    },
    jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user.id;
        token.username = (user as User).name;
        console.log({ user });
      }
      return token;
    },
  },

  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '/login',
  },

  secret: process.env.NEXTAUTH_SECRET,
};

export const getAuthSession = () => getServerSession(authOptions);
