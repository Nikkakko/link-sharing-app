import { cn } from '@/utils';
import * as React from 'react';
import Image from 'next/image';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, icon, error, ...props }, ref) => {
    return (
      <div className='relative'>
        {label && (
          <label
            htmlFor={props.id}
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
            error ? 'border-red-500' : 'border-zinc-300',
            'h-12  bg-white rounded-lg border inline-flex placeholder:text-zinc-800/50 text-base font-normal leading-normal active:outline-primary focus:outline-primary focus:caret-primary',
            className
          )}
          ref={ref}
          {...props}
        />

        {error && (
          <p className='text-xs font-normal text-red-500 mt-1'>{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
