'use client';
import React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { iconemail, iconpassword } from '../../../../public/assets/images';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const data = {
      email: form.get('email') as string,
      username: form.get('username') as string,
      password: form.get('password') as string,
      confirmPassword: form.get('confirm-password') as string,
    };

    try {
      const response = await axios.post('/api/register', data);

      if (response.status === 200) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=''>
      <div className='flex flex-col gap2'>
        <h1 className='text-darkGrey text-2xl font-bold'>Create account</h1>
        <p className='text-customGrey text-base font-normal leading-normal'>
          Let’s get you started sharing your links!
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
            type='text'
            id='username'
            name='username'
            placeholder='Enter your name'
            className='w-full px-10'
            label='Username'
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

        <div>
          <Input
            type='password'
            id='confirm-password'
            name='confirm-password'
            placeholder='Confirm your password'
            className='w-full px-10'
            label='Confirm password'
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
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
