'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import { Link as LinkIcon, User, Link2, Eye } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { cn } from '@/utils';
import { useToast } from '../ui/use-toast';

const MainHeader = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();

  const [copied, setCopied] = useState(false);

  const handleShareLink = () => {
    //copy current url to clipboard
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);

    toast({
      title: 'Copied!',
      description: 'Link copied to clipboard',
      duration: 1500,
      className: 'top-16 md:top-0',
    });

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const isPreview = pathname === '/preview';

  const links = [
    {
      id: 1,
      url: '/',
      Icon: (
        <LinkIcon
          className={cn(pathname === '/' ? 'text-[#633CFF]' : 'text-darkGrey')}
        />
      ),
    },

    {
      id: 2,
      url: '/profile-details',
      Icon: (
        <User
          className={cn(
            pathname === '/profile-details' ? 'text-[#633CFF]' : 'text-darkGrey'
          )}
        />
      ),
    },

    {
      id: 3,
      url: '/preview',
      Icon: <Eye />,
    },
  ];

  return (
    <header className='pl-6 py-4 pr-4 h-[74px] bg-white'>
      {isPreview ? (
        <div className='flex items-center justify-between'>
          <Button
            className='py-[11px] px-[27px] w-[160px] h-[46px]'
            variant='outline'
            onClick={() => router.push('/profile-details')}
          >
            Back to Editor
          </Button>
          <Button
            className='py-[11px] px-[27px] w-[160px] h-[46px]'
            variant='primary'
            onClick={handleShareLink}
          >
            {copied ? 'Copied!' : 'Share Link'}
          </Button>
        </div>
      ) : (
        <div className='flex items-center justify-between'>
          <Link2
            className='bg-[#633CFF] text-white rounded-lg cursor-pointer p-1'
            onClick={() => router.push('/')}
            size={32}
          />

          {links.map(link => (
            <Link key={link.id} href={link.url}>
              {link.Icon}
            </Link>
          ))}
          <UserButton afterSignOutUrl='/sign-in' />
        </div>
      )}
    </header>
  );
};

export default MainHeader;
