'use client';
import { DragAndDropIcon } from '@/svgs/icons';
import React, { useImperativeHandle, useContext, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { listArray } from '@/utils/links';
import { RefContext } from '@/context/RefContext';

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
import { linkSchema } from '@/schemas';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { cn } from '@/lib/utils';
import { deleteLink, saveLinks } from '@/lib/actions';
import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';

type Props = {
  link: {
    id: string;
    platform: string;
    link: string;
  };
};

const NewLink = ({ link }: Props) => {
  const router = useRouter();
  const { toast } = useToast();
  const { newLinkRef } = useContext(RefContext);

  const form = useForm<z.infer<typeof linkSchema>>({
    resolver: zodResolver(linkSchema),
    defaultValues: {
      platform: link.platform || '',
      url: link.link || '',
    },
  });

  const onSubmit = async (values: z.infer<typeof linkSchema>) => {
    try {
      saveLinks(link.id, values.platform, values.url);

      toast({
        title: 'Link Successfully Saved',
        description: 'Redirecting to profile details page',
      });
      router.push('/profile-details');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
      });
    }
  };

  //use useImperativeHandle to expose a function to parent component
  useImperativeHandle(newLinkRef, () => ({
    handleUpdate: () => {
      form.handleSubmit(onSubmit)();
    },
  }));

  return (
    <div className='p-5 bg-neutral-50 rounded-xl border flex-col justify-center items-center gap-3 inline-flex'>
      <div className='flex flex-col items-start gap-4 w-full '>
        <div className='flex items-center justify-between w-full '>
          <div className='flex items-center gap-2'>
            <DragAndDropIcon />
            <h3 className='text-neutral-500 text-base font-bold leading-normal"'>
              Link
            </h3>
          </div>
          <Button
            variant='destructive'
            className='p-0 h-6'
            onClick={() => {
              deleteLink(link.id);
            }}
          >
            Remove
          </Button>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='platform'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-darkGrey text-xs font-normal'>
                    Platform
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder='select a platform text-red-500'
                          className='text-red-500'
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {listArray.map(item => (
                        <SelectItem key={item.title} value={item.title}>
                          <div className='flex items-center gap-2'>
                            <div
                              className={cn(
                                `w-7 h-7 
                                flex items-center justify-center
                                text-white rounded-lg
                                `
                              )}
                            >
                              {item.icon}
                            </div>
                            {item.title}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='url'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-darkGrey text-xs font-normal'>
                    Link
                  </FormLabel>
                  <FormControl>
                    <Input
                      className='w-[255px]
                        placeholder-gray-400
                        pl-4
                       
                      '
                      placeholder='e.g. https://www.github.com/username
                      '
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default NewLink;
