'use client';
import React from 'react';
import { LinkIcon, PreviewIcon, ProfileIcon, DevlinksIcon } from '@/svgs/icons';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const MainHeader = () => {
  const pathname = usePathname();
  const router = useRouter();

  const activeClass = {
    isActive: 'px-[27px] py-[11px] bg-violet-100 rounded-lg cursor-pointer',
    notActive: 'cursor-pointer',
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
    </header>
  );
};

export default MainHeader;
