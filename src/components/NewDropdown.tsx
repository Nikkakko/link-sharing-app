import { Pointer } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { listArray } from '@/utils/links';
import { Separator } from './ui/separator';
import { Button } from './ui/Button';

type Props = {
  setUpdatedLink: React.Dispatch<
    React.SetStateAction<{
      platform: string;
      url: string;
    }>
  >;
  updatedLink: {
    platform: string;
    url: string;
  };
};

export function DropdownMenuDemo({ setUpdatedLink, updatedLink }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {!updatedLink.platform ? (
          <Button
            variant='ghost'
            className='capitalize p-0 text-darkGrey text-xs font-normal'
          >
            <Pointer size={16} className='mr-2 text-gray-400' />
            choose a platform
          </Button>
        ) : (
          <Pointer size={16} />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        {listArray.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onSelect={() =>
              setUpdatedLink({
                platform: item.title,
                url: '',
              })
            }
          >
            <div
              className='flex items-center justify-center
                bg-neutral-100 rounded-lg px-3 py-2 w-10 h-10
                hover:bg-neutral-200 transition-colors

            '
            >
              <DropdownMenuLabel>{item.icon}</DropdownMenuLabel>
            </div>
            <Separator
              orientation='vertical'
              className='h-6 w-px bg-neutral-200
                mx-2
              '
            />

            <DropdownMenuLabel>{item.title}</DropdownMenuLabel>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownMenuDemo;
