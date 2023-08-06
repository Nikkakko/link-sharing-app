import { PrismaClient } from '@prisma/client';
import { NextAuthOptions, getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
const db = new PrismaClient();

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

        const user = await db.user.findUnique({
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
    async jwt({ token, user, trigger, session }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          username: user.name,
        };
      }

      if (trigger === 'update' && session?.user.image) {
        return {
          ...token,
          image: session.user.image,
        };
      }

      //update the user in database
      await db.user.update({
        where: {
          id: token.id as string,
        },
        data: {
          image: token.image as string,
        },
      });

      return { ...token, ...session?.user };
    },

    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          image: token.image,
        },
      };
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
