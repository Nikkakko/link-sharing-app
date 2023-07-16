'use client';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import React from 'react';
import { iconemail, iconpassword } from '../../../../public/assets/images';

const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
            placeholder='e.g. alex@email.com'
            className='w-full px-10'
            label='Email address'
            icon={iconemail}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div>
          <Input
            type='password'
            id='password'
            placeholder='Enter your password'
            className='w-full px-10'
            label='Password'
            icon={iconpassword}
            value={password}
            onChange={e => setPassword(e.target.value)}
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
