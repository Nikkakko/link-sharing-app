'use client';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

export default function Home() {
  // const session = await getServerSession(authOptions);
  const { data: session } = useSession();

  console.log(session?.user);

  // if (!session) {
  //   redirect('/login');
  // }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold text-center'>Welcome to NextAuth.js</h1>
      <p className='text-center'>
        <button
          className='text-blue-600 hover:text-blue-700'
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </p>
    </main>
  );
}
