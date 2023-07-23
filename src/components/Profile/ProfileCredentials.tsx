import React from 'react';
import { Input } from '../ui/Input';

const ProfileCredentials = () => {
  return (
    <form>
      <div className='flex flex-col gap-4'>
        <Input
          placeholder='First Name'
          className='w-full h-10 rounded-lg border border-neutral-200 px-4 py-2 text-sm text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
          label='First Name'
        />

        <Input
          placeholder='Last Name'
          className='w-full h-10 rounded-lg border border-neutral-200 px-4 py-2 text-sm text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
          label='Last Name'
        />

        <Input
          placeholder='Email'
          className='w-full h-10 rounded-lg border border-neutral-200 px-4 py-2 text-sm text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
          label='Email'
        />
      </div>
    </form>
  );
};

export default ProfileCredentials;
