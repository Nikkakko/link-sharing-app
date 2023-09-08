'use client';
import React from 'react';
import Footer from '@/components/Footer';
import MainHeader from '@/components/Header/MainHeader';
import { usePathname } from 'next/navigation';

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className=' flex flex-col w-screen h-screen bg-neutral-50'>
      <MainHeader />

      <main className='p-4 flex flex-col flex-1 container mx-auto'>
        {children}
      </main>
      {pathname !== '/preview' && <Footer />}
    </div>
  );
}
