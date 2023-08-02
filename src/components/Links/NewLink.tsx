'use client';
import { ChevronDownIcon, DragAndDropIcon } from '@/svgs/icons';
import React, { useImperativeHandle, useContext } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useLinkStore } from '@/context/store';

import { listArray } from '@/utils/links';
import { RefContext } from '@/context/RefContext';
import DropdownMenu from '../ui/DropdownMenu';

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
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const { newLinkRef } = useContext(RefContext);

  //use useImperativeHandle to expose a function to parent component
  useImperativeHandle(newLinkRef, () => ({
    handleUpdate: () => {
      updateLink(link.id, updatedLink.platform, updatedLink.url);
    },
  }));

  return (
    <div className='p-5 bg-neutral-50 rounded-xl border flex-col justify-center items-center gap-3 inline-flex'>
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
          <div className='w-[255px] h-12 px-4 py-3 bg-white rounded-lg border border-zinc-300 flex justify-between items-center gap-3 '>
            <div className='flex items-center gap-2'>
              {
                listArray.find(item => item.title === updatedLink.platform)
                  ?.icon
              }
              {updatedLink.platform}
            </div>

            <ChevronDownIcon
              className={`${isDropdownOpen ? 'transform rotate-180' : ''}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
          </div>
          {isDropdownOpen && (
            <DropdownMenu
              setUpdatedLink={setUpdatedLink}
              closeDropdown={() => setIsDropdownOpen(false)}
            />
          )}
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
              setUpdatedLink(prev => ({ ...prev, url: e.target.value }));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewLink;
