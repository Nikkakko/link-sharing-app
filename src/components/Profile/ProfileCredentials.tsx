'use client';
import React, { useContext, useImperativeHandle, useState } from 'react';
import { Input } from '../ui/Input';
import { useProfileStore } from '@/context/store';
import { RefContext } from '@/context/RefContext';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
}

const ProfileCredentials = () => {
  const { setProfileInfo, profileInfo } = useProfileStore();
  const { profileRef } = useContext(RefContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      firstName: '' || profileInfo.firstName,
      lastName: '' || profileInfo.lastName,
      email: '' || profileInfo.email,
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = data => {
    setProfileInfo(data.firstName, data.lastName, data.email);
  };

  useImperativeHandle(profileRef, () => ({
    handleUpdate: () => {
      handleSubmit(onSubmit)();
    },
  }));

  return (
    <form className='flex flex-col gap-4'>
      <Input
        placeholder='First Name'
        className='w-full h-10 px-4 py-2 '
        label='First Name'
        {...register('firstName', {
          required: {
            value: true,
            message: 'Can’t be empty',
          },
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: 'Can only contain letters',
          },
        })}
        error={errors.firstName?.message}
      />

      <Input
        placeholder='Last Name'
        className='w-full h-10 px-4 py-2 '
        label='Last Name'
        {...register('lastName', {
          required: {
            value: true,
            message: 'Can’t be empty',
          },
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: 'Can only contain letters',
          },
        })}
        error={errors.lastName?.message}
      />

      <Input
        placeholder='Email'
        className='w-full h-10 px-4 py-2 '
        label='Email'
        {...register('email', {
          required: {
            value: true,
            message: 'Can’t be empty',
          },
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Please enter a valid email',
          },
        })}
        error={errors.email?.message}
      />
    </form>
  );
};

export default ProfileCredentials;
