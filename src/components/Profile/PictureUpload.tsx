'use client';
import { UploadImageIcon } from '@/svgs/icons';
import React, { useState } from 'react';
import { Input } from '../ui/Input';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { uploadImage, deleteImage } from '@/utils/cloudinary';
import { Button } from '../ui/Button';
import { DeleteIcon, Upload } from 'lucide-react';

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
    <div className='flex flex-col '>
      <h1 className='text-neutral-500 text-base font-normal leading-normal'>
        Profile Picture
      </h1>

      {!session?.user?.image && (
        <div className='w-[193px] h-[193px] bg-lightPurple rounded-xl justify-center items-center inline-flex mt-4 relative'>
          <div
            className='flex items-center flex-col gap-2 
          '
          >
            <UploadImageIcon />
            <Input
              type='file'
              id='file-upload'
              name='file'
              onChange={handleFileUpload}
              accept='image/png, image/jpeg'
              className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
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
        <div className='relative max-w-fit'>
          <Image
            src={session.user.image}
            width={193}
            height={193}
            className='rounded-md'
            priority
            alt='Profile Picture'
          />

          <div
            className='flex items-center justify-center flex-col gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer w-full h-full bg-black bg-opacity-50 rounded-md
          '
          >
            <UploadImageIcon fill='#fff' />
            <label
              className='text-white text-base font-semibold leading-normal text-center'
              htmlFor='file-upload'
            >
              Change Image
            </label>

            <Input
              type='file'
              id='file-upload'
              name='file'
              onChange={handleFileUpload}
              accept='image/png, image/jpeg'
              className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
            />
          </div>
        </div>
      )}

      <p className='text-neutral-500 text-xs font-normal leading-[18px] mt-6'>
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </div>
  );
};

export default PictureUpload;
