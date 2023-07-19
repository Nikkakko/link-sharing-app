'use client';
import React from 'react';
import { Button } from '../ui/Button';
import CustomizeBanner from './CustomizeBanner';
import { useLinkStore } from '@/context/store';
import NewLink from './NewLink';

const Customize = () => {
  const { links, setLinks } = useLinkStore(state => state);

  console.log(links);

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col'>
        <h1 className='text-darkGrey text-2xl font-bold leading-9'>
          Customize your links
        </h1>
        <p className='text-customGrey text-base font-normal leading-normal'>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>

      <Button
        variant='outline'
        className='rounded-lg mt-[40px]'
        onClick={setLinks}
      >
        + Add New Link
      </Button>

      {links.length > 0 ? <NewLink /> : <CustomizeBanner />}
    </div>
  );
};

export default Customize;
