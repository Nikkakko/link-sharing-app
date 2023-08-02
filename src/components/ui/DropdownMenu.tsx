import { listArray } from '@/utils/links';
import React from 'react';

type Props = {
  setUpdatedLink: React.Dispatch<
    React.SetStateAction<{
      platform: string;
      url: string;
    }>
  >;
  closeDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropdownMenu = ({ setUpdatedLink, closeDropdown }: Props) => {
  return (
    <div
      className='z-10 w-[255px] px-4 py-3 bg-white rounded-lg shadow border border-zinc-300 flex-col justify-center items-start gap-3 inline-flex
  '
    >
      {listArray.map((item, index) => (
        <div
          key={index}
          className='flex items-center gap-2 first-letter:
            hover:bg-zinc-100 hover:text-zinc-500 rounded-lg px-2 py-1 cursor-pointer
        w-full'
          onClick={() => {
            setUpdatedLink(prev => ({ ...prev, platform: item.title }));
            closeDropdown(false);
          }}
        >
          {item.icon}
          <p className='text-darkGrey text-xs font-normal leading-[18px]'>
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
