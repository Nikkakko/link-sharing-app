import React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { iconemail, iconpassword } from '../../../../../public/assets/images';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { SignUp } from '@clerk/nextjs';

const LoginPage = () => {
  return (
    <>
      <div className='flex flex-col gap2'>
        <h1 className='text-darkGrey text-2xl font-bold'>Create account</h1>
        <p className='text-customGrey text-base font-normal leading-normal'>
          Let’s get you started sharing your links!
        </p>
      </div>

      <form className='flex flex-col gap-6 mt-6'>
        {/* <div>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='e.g. alex@email.com'
            className='w-full px-10'
            label='Email address'
            icon={iconemail}
          />
        </div>

        <div>
          <Input
            type='password'
            id='password'
            name='password'
            placeholder='Enter your password'
            className='w-full px-10'
            label='Password'
            autoComplete='new-password'
            icon={iconpassword}
          />
        </div>

        <div>
          <Input
            type='password'
            id='confirm-password'
            name='confirm-password'
            placeholder='Confirm your password'
            className='w-full px-10'
            label='Confirm password'
            autoComplete='new-password'
            icon={iconpassword}
          />
        </div>

        <p className='text-darkGrey text-xs leading-4'>
          Password must contain at least 8 characters
        </p>
        <Button
          variant='primary'
          size='sm'
          className='w-full font-semibold text-base'
          type='submit'
        >
          Create new account
        </Button>

        <div className='flex flex-col items-center'>
          <p className='text-customGrey text-base font-normal leading-normal'>
            Already have an account?
          </p>
          <Button
            variant='link'
            size='sm'
            className='w-full font-semibold'
            href='/login'
          >
            Login
          </Button>
        </div> */}
        <SignUp />
      </form>
    </>
  );
};

export default LoginPage;
