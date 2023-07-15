import { cn } from '@/utils';
import * as React from 'react';
import Image from 'next/image';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, icon, ...props }, ref) => {
    return (
      <div className='relative'>
        {label && (
          <label
            htmlFor={props.type}
            className='text-xs font-normal text-darkGrey'
          >
            {label}
          </label>
        )}

        {icon && (
          <div className='absolute left-4 top-[43px]'>
            <Image src={icon} alt='icon' width={12} height={12} />
          </div>
        )}
        <input
          className={cn(
            'h-12  bg-white rounded-lg border border-zinc-300 inline-flex placeholder:text-zinc-800/50 text-base font-normal leading-normal active:outline-primary focus:outline-primary',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
