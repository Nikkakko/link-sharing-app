import React from 'react';
import { Button } from './ui/Button';

const Footer = () => {
  return (
    <footer className='flex items-center justify-center border-t border-zinc-300 p-4 mt-[25px]'>
      <Button variant='primary' className='w-full rounded-lg'>
        Save
      </Button>
    </footer>
  );
};

export default Footer;
