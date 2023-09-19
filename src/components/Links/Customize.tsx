'use client';
import { Button } from '../ui/Button';
import CustomizeBanner from './CustomizeBanner';
import NewLink from './NewLink';
import { addNewLink } from '@/lib/actions';
import React, { useState, startTransition } from 'react';
import { LoaderIcon } from 'lucide-react';

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
  const [isPending, startTransition] = React.useTransition();

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
        className='max-w-xs  rounded-lg mt-[40px]'
        onClick={() =>
          startTransition(async () => {
            addNewLink();
          })
        }
        disabled={isPending}
      >
        {isPending && <LoaderIcon className='animate-spin mr-2' size={16} />}
        Add New Link
      </Button>

      <div className='flex flex-col mt-6 '>
        {links.length > 0 ? (
          <div
            className='
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            
          '
          >
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
