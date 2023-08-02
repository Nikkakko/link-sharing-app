import { RightArrowIcon } from '@/svgs/icons';
import { listArray } from '@/utils/links';
import React from 'react';

type Props = {
  link: {
    id: number;
    title: string;
    platform: string;
  };
};

const ReviewCard = ({ link }: Props) => {
  const { id, title, platform } = link;

  const cardItem = listArray.find(item => item.title === platform);
  const cardIcon = cardItem?.icon;

  return (
    <div
      style={{ backgroundColor: cardItem?.bgColor }}
      className={`p-4 rounded-lg flex flex-row justify-between items-center`}
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
