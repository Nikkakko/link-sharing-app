'use client';
import React, { useContext, useImperativeHandle, useState } from 'react';
import { Input } from '../ui/Input';
import { RefContext } from '@/context/RefContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import PictureUpload from '@/components/Profile/PictureUpload';
import { profileSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import * as z from 'zod';
import { User } from '@prisma/client';
import { updateProfileDetails } from '@/lib/actions';
import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';

interface initialDataProps {
  initialData: User | null;
}

const ProfileCredentials = ({ initialData }: initialDataProps) => {
  const { profileRef } = useContext(RefContext);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: initialData || {
      firstName: '',
      lastName: '',
      email: '',
      image: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof profileSchema>) {
    try {
      updateProfileDetails(
        values.firstName,
        values.lastName,
        values.email,
        values.image
      );

      toast({
        title: 'Profile Updated!',
        description: 'Redirecting to preview page.',
      });
      router.push('/preview');
    } catch (error) {
      toast({
        title: 'Error!',
        description: 'Something went wrong. Please try again.',
      });
    }
  }

  useImperativeHandle(profileRef, () => ({
    handleUpdate: () => {
      form.handleSubmit(onSubmit)();
    },
  }));

  return (
    <Form {...form}>
      <form
        className='flex flex-col gap-4
         justify-center items-center
      '
      >
        <div className=' p-[20px] rounded-xl bg-neutral-50 items-center flex justify-center'>
          <FormField
            control={form.control}
            name='image'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Image</FormLabel>
                <FormControl>
                  <PictureUpload
                    onChange={field.onChange}
                    value={field.value}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormDescription>
                  Upload a profile picture to personalize your profile.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='firstName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder='First Name' className='px-4' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='lastName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder='Last Name' className='px-4' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter Your Email Address.'
                  className='px-4'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default ProfileCredentials;
