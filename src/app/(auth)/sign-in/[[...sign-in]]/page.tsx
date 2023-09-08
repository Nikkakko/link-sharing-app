import React from 'react';
import { SignIn } from '@clerk/nextjs';

const LoginPage = async () => {
  return (
    <div
      className='
      flex flex-col 
      gap-6
      mt-6
      items-center
      justify-center
    '
    >
      <div className='flex flex-col gap2'>
        <h1 className='text-darkGrey text-2xl font-bold'>Login</h1>
        <p className='text-customGrey text-base font-normal leading-normal'>
          Add your details below to get back into the app
        </p>
      </div>

      <SignIn />
    </div>
  );
};

export default LoginPage;
