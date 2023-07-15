import { Button } from '@/components/ui/Button';
import React from 'react';

const LoginPage = () => {
  return (
    <div className=''>
      <div className='flex flex-col gap2'>
        <h1 className='text-darkGrey text-2xl font-bold leading-9'>
          Login Page
        </h1>
        <p className='text-customGrey text-base font-normal leading-normal'>
          Add your details below to get back into the app
        </p>
      </div>

      <Button variant='destructive' size='sm'>
        <span>Sign in with Google</span>
      </Button>
    </div>
  );
};

export default LoginPage;
