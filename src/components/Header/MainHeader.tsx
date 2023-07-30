'use client';
import React from 'react';
import { LinkIcon, PreviewIcon, ProfileIcon, DevlinksIcon } from '@/svgs/icons';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';

const MainHeader = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleShareLink = () => {
    console.log('share link');
  };

  const isPreview = pathname === '/home/preview';

  const activeClass = {
    isActive: 'px-[27px] py-[11px] bg-violet-100 rounded-lg cursor-pointer',
    notActive: 'cursor-pointer ',
  };

  const links = [
    {
      id: 0,
      url: '/',
      icon: <DevlinksIcon fill={pathname === '/' ? '' : 'bg-primary'} />,
    },
    {
      id: 1,
      url: '/home',
      icon: <LinkIcon fill={pathname === '/home' ? '#633CFF' : ''} />,
    },

    {
      id: 2,
      url: '/home/profile-details',
      icon: (
        <ProfileIcon
          fill={pathname === '/home/profile-details' ? '#633CFF' : ''}
        />
      ),
    },

    {
      id: 3,
      url: '/home/preview',
      icon: <PreviewIcon isActive={pathname === '/home/preview'} />,
    },
  ];

  return (
    <header className='pl-6 py-4 pr-4 h-[74px] bg-white'>
      {isPreview ? (
        <div className='flex items-center justify-between'>
          <Button
            className='py-[11px] px-[27px] w-[160px] h-[46px]'
            variant='outline'
            onClick={() => router.back()}
          >
            Back to Editor
          </Button>
          <Button
            className='py-[11px] px-[27px] w-[160px] h-[46px]'
            variant='primary'
            onClick={handleShareLink}
          >
            Share Link
          </Button>
        </div>
      ) : (
        <div className='flex items-center justify-between'>
          {links.map((link, index) => (
            <div key={index} className='flex items-center'>
              <div
                className={`${
                  pathname === link.url
                    ? activeClass.isActive
                    : activeClass.notActive
                }`}
                onClick={() => router.push(link.url)}
              >
                {link.icon}
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default MainHeader;
