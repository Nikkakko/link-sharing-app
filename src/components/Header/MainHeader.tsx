'use client';
import React, { useState } from 'react';
import { LinkIcon, PreviewIcon, ProfileIcon, DevlinksIcon } from '@/svgs/icons';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';

const MainHeader = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState(false);

  const handleShareLink = () => {
    //copy current url to clipboard
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);

    //remove copied message after 3 seconds
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const isPreview = pathname === '/home/preview';

  const activeClass = {
    isActive: 'w-[74px] h-[42px] bg-violet-100 rounded-lg cursor-pointer   ',
    notActive: 'cursor-pointer w-[74px] h-[42px]     ',
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
            {copied ? 'Copied!' : 'Share Link'}
          </Button>
        </div>
      ) : (
        <div className='flex items-center justify-between'>
          {links.map((link, index) => (
            <div
              key={link.id}
              className={`${
                pathname === link.url
                  ? activeClass.isActive
                  : activeClass.notActive
              }
              flex items-center justify-center 
              `}
              onClick={() => router.push(link.url)}
            >
              {link.icon}
            </div>
          ))}
        </div>
      )}

      {copied && (
        <div
          className='absolute 
          w-[340px]
        

          
          
          flex items-center justify-between
          bottom-10 
          left-1/2 transform -translate-x-1/2
          bg-darkGrey rounded-xl shadow-lg p-4'
        >
          <LinkIcon />
          <p
            className='text-sm text-white 
          text-center
          '
          >
            The link has been copied to your clipboard!
          </p>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
