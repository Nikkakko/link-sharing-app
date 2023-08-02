'use client';
import React, { useContext, useImperativeHandle, useState } from 'react';
import { Input } from '../ui/Input';
import { useProfileStore } from '@/context/store';
import { RefContext } from '@/context/RefContext';

const ProfileCredentials = () => {
  const { setProfileInfo, profileInfo } = useProfileStore();
  const { profileRef } = useContext(RefContext);
  const [updatedProfile, setUpdatedProfile] = useState({
    firstName: '' || profileInfo.firstName,
    lastName: '' || profileInfo.lastName,
    email: '' || profileInfo.email,
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedProfile({
      ...updatedProfile,
      [e.target.name]: e.target.value,
    });
  };

  useImperativeHandle(profileRef, () => ({
    handleUpdate: () => {
      setProfileInfo(
        updatedProfile.firstName,
        updatedProfile.lastName,
        updatedProfile.email
      );
    },
  }));

  console.log(profileInfo);

  return (
    <form className='flex flex-col gap-4'>
      <Input
        placeholder='First Name'
        className='w-full h-10 rounded-lg border border-neutral-200 px-4 py-2 text-sm text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
        label='First Name'
        name='firstName'
        value={updatedProfile.firstName}
        onChange={handleOnChange}
      />

      <Input
        placeholder='Last Name'
        className='w-full h-10 rounded-lg border border-neutral-200 px-4 py-2 text-sm text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
        label='Last Name'
        name='lastName'
        value={updatedProfile.lastName}
        onChange={handleOnChange}
      />

      <Input
        placeholder='Email'
        className='w-full h-10 rounded-lg border border-neutral-200 px-4 py-2 text-sm text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
        label='Email'
        name='email'
        value={updatedProfile.email}
        onChange={handleOnChange}
      />
    </form>
  );
};

export default ProfileCredentials;
