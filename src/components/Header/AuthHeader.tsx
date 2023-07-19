import React from 'react';
import { devlinksLogoSmall, devlinks } from '../../../public/assets/images';
import Image from 'next/image';

const AuthHeader = () => {
  return (
    <div className='flex items-center gap-2'>
      <Image src={devlinksLogoSmall} alt='devlinks' />
      <Image src={devlinks} alt='devlinks' />
    </div>
  );
};

export default AuthHeader;
