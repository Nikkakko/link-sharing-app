'use client';
import { UploadImageIcon } from '@/svgs/icons';
import React, { useState } from 'react';
import { Input } from '../ui/Input';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { uploadImage, deleteImage } from '@/utils/cloudinary';
import { Button } from '../ui/Button';
import { DeleteIcon } from 'lucide-react';

const PictureUpload = () => {
  const { data: session, update: sessionUpdate } = useSession();

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };

    const url = await uploadImage(target.files[0]);

    await sessionUpdate({
      ...session,
      user: {
        ...session?.user,
        image: url.url,
      },
    });
  };

  const handleRemoveImage = async () => {
    await sessionUpdate({
      ...session,
      user: {
        ...session?.user,
        image: null,
      },
    });
  };

  return (
    <div className='flex flex-col'>
      <h1 className='text-neutral-500 text-base font-normal leading-normal'>
        Profile Picture
      </h1>

      {!session?.user?.image && (
        <div className='w-[193px] h-[193px] bg-lightPurple rounded-xl justify-center items-center inline-flex mt-4'>
          <div className='flex items-center flex-col gap-2 relative'>
            <UploadImageIcon />
            <Input
              type='file'
              className='
            absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer border border-red-500 rounded-lg
            '
              id='file-upload'
              name='file'
              onChange={handleFileUpload}
              accept='image/png, image/jpeg'
            />
            <label
              className='text-primary text-sm font-semibold leading-normal text-center'
              htmlFor='file'
            >
              + Upload Image
            </label>
          </div>
        </div>
      )}

      {session?.user?.image && (
        <div className='relative'>
          <Image
            src={session.user.image}
            width={193}
            height={193}
            className='rounded-xl'
            alt='Profile Picture'
          />

          {/* add remove icon */}

          <Button
            className='absolute top-0 right-0'
            onClick={handleRemoveImage}
            variant='destructive'
          >
            <DeleteIcon size={24} />
          </Button>
        </div>
      )}

      <p className='text-neutral-500 text-xs font-normal leading-[18px] mt-6'>
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </div>
  );
};

export default PictureUpload;
