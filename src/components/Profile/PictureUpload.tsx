import { UploadImageIcon } from '@/svgs/icons';
import React from 'react';

const PictureUpload = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-neutral-500 text-base font-normal leading-normal'>
        Profile Picture
      </h1>
      <div className='w-[193px] h-[193px] bg-lightPurple rounded-xl justify-center items-center inline-flex mt-4'>
        <div className='flex items-center flex-col gap-2'>
          <UploadImageIcon />
          <h4 className='text-primary text-sm font-semibold leading-normal text-center'>
            + Upload Image
          </h4>
        </div>
      </div>

      <p className='text-neutral-500 text-xs font-normal leading-[18px] mt-6'>
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </div>
  );
};

export default PictureUpload;
