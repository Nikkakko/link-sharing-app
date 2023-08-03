import { listArray } from '@/utils/links';
import React, { useRef } from 'react';

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
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className='
  absolute top-16
      z-10 w-[255px] px-4 py-3 bg-white rounded-lg shadow border border-zinc-300 flex-col justify-center items-start gap-2 inline-flex
  '
    >
      {listArray.map((item, index) => (
        <div
          key={index}
          className='flex items-center gap-2 w-full 
          border-b border-zinc-300
            hover:bg-zinc-100/25 hover:text-zinc-500 hover:rounded-lg  px-2 py-1 cursor-pointer
        '
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
