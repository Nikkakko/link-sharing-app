import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import RefContextProvider from '../context/RefContext';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from '@/components/ui/toaster';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Link Sharing App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <RefContextProvider>
            {children}
            <Toaster />
          </RefContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
