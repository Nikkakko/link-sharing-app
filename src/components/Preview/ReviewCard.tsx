'use client';
import { RightArrowIcon } from '@/svgs/icons';
import { listArray } from '@/utils/links';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  link: {
    id: string;
    platform: string;
    link: string;
  };
};

const ReviewCard = ({ link }: Props) => {
  const { platform, link: url } = link;

  const router = useRouter();

  const handleClick = () => {
    //navigate to url on new tab
    router.push(url);
  };

  const cardItem = listArray.find(item => item.title === platform);
  const cardIcon = cardItem?.icon;

  return (
    <div
      style={{ backgroundColor: cardItem?.bgColor }}
      className={`p-4 rounded-lg flex flex-row justify-between items-center cursor-pointer 
      hover:opacity-75 transition-opacity`}
      onClick={handleClick}
    >
      <div className='flex flex-row items-center gap-2'>
        <div id='card-container'>{cardIcon}</div>
        <h3 className='text-white text-base font-normal leading-normal'>
          {platform}
        </h3>
      </div>

      <RightArrowIcon />
    </div>
  );
};

export default ReviewCard;
