import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold text-center'>Welcome to NextAuth.js</h1>
      <p className='text-center'>
        {session?.user ? (
          <span>
            You are logged in as <strong>{session.user.email}</strong>
          </span>
        ) : (
          <span>You are not logged in</span>
        )}
      </p>
    </main>
  );
}
