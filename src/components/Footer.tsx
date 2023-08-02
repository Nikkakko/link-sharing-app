'use client';
import React, { useContext } from 'react';
import { Button } from './ui/Button';
import { usePathname, useRouter } from 'next/navigation';
import { useLinkStore, useProfileStore } from '@/context/store';
import { RefContext } from '@/context/RefContext';

const Footer = () => {
  const { removeLink, links, updateLink } = useLinkStore(state => state);
  const { profileInfo } = useProfileStore(state => state);
  const pathname = usePathname();
  const router = useRouter();
  const { newLinkRef, profileRef } = useContext(RefContext);

  const ButtonOpacity =
    pathname === '/home' && links.length === 0 ? 'opacity-50' : '';

  const handleUpdateNewLink = () => {
    // Call handleUpdate function in NewLink component using the ref
    if (newLinkRef.current) {
      newLinkRef.current.handleUpdate();
    }
  };

  const handleCredentials = () => {
    if (profileRef.current) {
      profileRef.current.handleUpdate();
    }
  };

  const handleSave = () => {
    if (pathname === '/home') {
      handleUpdateNewLink();
    }

    if (pathname === '/home/profile-details') {
      handleCredentials();
    }
  };

  return (
    <footer className='flex items-center justify-center border-t border-zinc-300 p-4 mt-[25px]'>
      <Button
        variant='primary'
        className={`w-full rounded-lg ${ButtonOpacity}`}
        onClick={handleSave}
      >
        Save
      </Button>
    </footer>
  );
};

export default Footer;
