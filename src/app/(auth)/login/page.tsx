'use client';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import React from 'react';
import { signIn } from 'next-auth/react';
import { iconemail, iconpassword } from '../../../../public/assets/images';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const data = {
      email: form.get('email') as string,
      password: form.get('password') as string,
    };

    try {
      await signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: '/',
        redirect: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=''>
      <div className='flex flex-col gap2'>
        <h1 className='text-darkGrey text-2xl font-bold'>Login</h1>
        <p className='text-customGrey text-base font-normal leading-normal'>
          Add your details below to get back into the app
        </p>
      </div>

      <form className='flex flex-col gap-6 mt-6' onSubmit={handleSubmit}>
        <div>
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
            icon={iconpassword}
          />
        </div>
        <Button
          variant='primary'
          size='sm'
          className='w-full font-semibold text-base'
        >
          Login
        </Button>

        <div className='flex flex-col items-center'>
          <p className='text-customGrey text-base font-normal leading-normal'>
            Don't have an account?
          </p>
          <Button
            variant='link'
            size='sm'
            className='w-full font-semibold'
            href='/register'
          >
            Create an account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
