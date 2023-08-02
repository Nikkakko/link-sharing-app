'use client';
import { ChevronDownIcon, DragAndDropIcon } from '@/svgs/icons';
import React, {
  useEffect,
  useImperativeHandle,
  forwardRef,
  useContext,
} from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useLinkStore } from '@/context/store';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { listArray } from '@/utils/links';
import { RefContext } from '@/context/RefContext';

type linkProps = {
  id: number;
  title: string;
  platform: string;
  url: string;
};

type Props = {
  link: linkProps;
};

const NewLink = ({ link }: Props) => {
  const { removeLink, links, updateLink } = useLinkStore(state => state);
  const [updatedLink, setUpdatedLink] = React.useState({
    platform: link.platform,
    url: link.url,
  });
  const { newLinkRef } = useContext(RefContext);

  //use useImperativeHandle to expose a function to parent component
  useImperativeHandle(newLinkRef, () => ({
    handleUpdate: () => {
      updateLink(link.id, updatedLink.platform, updatedLink.url);
    },
  }));

  console.log(links);

  return (
    <div className='p-5 bg-neutral-50 rounded-xl border flex-col justify-center items-center gap-3 inline-flex '>
      <div className='flex flex-col items-start gap-4 w-full '>
        <div className='flex items-center justify-between w-full '>
          <div className='flex items-center gap-2'>
            <DragAndDropIcon />
            <h3 className='text-neutral-500 text-base font-bold leading-normal"'>
              {link.title}
            </h3>
          </div>
          <Button
            variant='destructive'
            className='p-0 h-6'
            onClick={() => removeLink(link.id)}
          >
            Delete
          </Button>
        </div>

        <div className='flex flex-col items-start'>
          <label className='text-darkGrey text-xs font-normal leading-[18px]'>
            Platform
          </label>
          <div className='w-[255px] h-12 px-4 py-3 bg-white rounded-lg border border-zinc-300 flex justify-between items-center gap-3  relative'>
            <DropdownMenu>
              <DropdownMenuLabel>
                <div className='flex items-center gap-2'>
                  {listArray.map(item => {
                    if (item.title === updatedLink.platform) {
                      return item.icon;
                    }
                  })}
                  <span className='text-darkGrey text-sm font-normal leading-[18px]'>
                    {updatedLink.platform}
                  </span>
                </div>
              </DropdownMenuLabel>

              <DropdownMenuTrigger>
                <ChevronDownIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent className=''>
                {listArray.map(item => (
                  <DropdownMenuItem
                    key={item.id}
                    className={`flex items-center gap-2 cursor-pointer hover:bg-neutral-100 p-2 rounded-md`}
                    onSelect={() => {
                      setUpdatedLink({ ...updatedLink, platform: item.title });
                    }}
                  >
                    {item.icon}
                    <DropdownMenuLabel>{item.title}</DropdownMenuLabel>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div>
          <label className='text-darkGrey text-xs font-normal leading-[18px]'>
            Link
          </label>
          <Input
            className='w-[255px] px-4 py-3 '
            placeholder='e.g. https://www.github.com/johnappleseed'
            value={updatedLink.url}
            name='url'
            onChange={e => {
              setUpdatedLink({ ...updatedLink, url: e.target.value });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewLink;
