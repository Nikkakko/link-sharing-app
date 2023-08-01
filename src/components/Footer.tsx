'use client';
import React from 'react';
import { Button } from './ui/Button';
import { usePathname, useRouter } from 'next/navigation';
import { useLinkStore, useProfileStore } from '@/context/store';

const Footer = () => {
  const { removeLink, links, updateLink } = useLinkStore(state => state);
  const { profileInfo } = useProfileStore(state => state);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = () => {
    if (pathname === '/home' && links.length > 0) {
      //navigate to profile-details page
      router.push('/home/profile-details');
    }

    if (pathname === '/home/profile-details') {
      //navigate to home page
      router.push('/home/preview');
    }
  };

  const checkDisabled = () => {
    if (pathname === '/home' && links.length < 0) {
      return false;
    }

    if (pathname === '/profile-details' && profileInfo.firstName.length < 0) {
      return false;
    }

    return true;
  };

  return (
    <footer className='flex items-center justify-center border-t border-zinc-300 p-4 mt-[25px]'>
      <Button
        variant='primary'
        className='w-full rounded-lg'
        onClick={handleNavigation}
      >
        Save
      </Button>
    </footer>
  );
};

export default Footer;
