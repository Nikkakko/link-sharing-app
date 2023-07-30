'use client';
import React from 'react';
import { Input } from '../ui/Input';
import { useProfileStore } from '@/context/store';

const ProfileCredentials = () => {
  const { setProfileInfo } = useProfileStore();

  const handleChange = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const data = Object.fromEntries(formData.entries());

    try {
      setProfileInfo(
        data.firstName as string,
        data.lastName as string,
        data.email as string
      );

      // if ok, then empty the form
      // e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='flex flex-col gap-4' onSubmit={handleChange}>
      <Input
        placeholder='First Name'
        className='w-full h-10 rounded-lg border border-neutral-200 px-4 py-2 text-sm text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
        label='First Name'
        name='firstName'
      />

      <Input
        placeholder='Last Name'
        className='w-full h-10 rounded-lg border border-neutral-200 px-4 py-2 text-sm text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
        label='Last Name'
        name='lastName'
      />

      <Input
        placeholder='Email'
        className='w-full h-10 rounded-lg border border-neutral-200 px-4 py-2 text-sm text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
        label='Email'
        name='email'
      />

      <button className='btn btn-primary w-full'>Save</button>
    </form>
  );
};

export default ProfileCredentials;
