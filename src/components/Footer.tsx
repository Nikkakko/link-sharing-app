'use client';
import React, { useContext } from 'react';
import { Button } from './ui/Button';
import { usePathname } from 'next/navigation';

import { RefContext } from '@/context/RefContext';

const Footer = () => {
  const pathname = usePathname();
  const { newLinkRef, profileRef } = useContext(RefContext);

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
    if (pathname === '/') {
      handleUpdateNewLink();
    }

    if (pathname === '/profile-details') {
      handleCredentials();
    }
  };

  return (
    <footer className='flex items-center justify-center border-t border-zinc-300 p-4 mt-[25px] container mx-auto'>
      <Button variant='primary' className='w-full' onClick={handleSave}>
        Save
      </Button>
    </footer>
  );
};

export default Footer;
