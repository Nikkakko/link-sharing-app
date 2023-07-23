import React from 'react';
import { customizeBanner as customizeImg } from '../../../public/assets/images';
import Image from 'next/image';

const CustomizeBanner = () => {
  return (
    <div className='p-[20px] flex flex-col'>
      <div className='flex flex-col gap-6 items-center '>
        <Image src={customizeImg} alt='customize banner' />

        <h1 className='text-center text-darkGrey text-2xl font-bold leading-9'>
          Let's get you started
        </h1>

        <p className='text-center text-customGrey text-base font-normal leading-normal '>
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </div>
    </div>
  );
};

export default CustomizeBanner;
