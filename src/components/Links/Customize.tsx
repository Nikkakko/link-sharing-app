'use client';
import { Button } from '../ui/Button';
import CustomizeBanner from './CustomizeBanner';
import NewLink from './NewLink';
import { addNewLink } from '@/lib/actions';
import React, { useState } from 'react';

type Props = {
  links: {
    id: string;
    platform: string;
    link: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
};

const Customize = ({ links }: Props) => {
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

      <div className='flex flex-col gap-6'>
        <Button
          variant='outline'
          className='rounded-lg mt-[40px]'
          onClick={() => addNewLink()}
        >
          + Add New Link
        </Button>

        {links.length > 0 ? (
          <div className='flex flex-col gap-6'>
            {links.map(link => (
              <NewLink key={link.id} link={link} />
            ))}
          </div>
        ) : (
          <CustomizeBanner />
        )}
      </div>
    </div>
  );
};

export default Customize;
