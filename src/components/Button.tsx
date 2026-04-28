import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background transform hover:scale-105 active:scale-95 dark:focus-visible:ring-blue-300',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-slate-900 to-blue-900 text-white hover:from-slate-950 hover:to-blue-950 shadow-lg hover:shadow-xl dark:from-blue-700 dark:to-slate-800 dark:hover:from-blue-600 dark:hover:to-slate-700',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl',
        outline:
          'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white dark:border-blue-200 dark:text-blue-100 dark:hover:bg-blue-200 dark:hover:text-slate-950 shadow-md hover:shadow-lg',
        secondary:
          'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg',
        ghost: 'hover:bg-slate-100 hover:text-blue-900 transition-colors dark:hover:bg-slate-800/80 dark:hover:text-blue-200',
        link: 'underline-offset-4 hover:underline text-blue-900 hover:text-slate-900 dark:text-blue-200 dark:hover:text-blue-100',
        gradient: 'bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 text-white hover:from-slate-950 hover:via-blue-950 hover:to-blue-800 shadow-lg hover:shadow-xl dark:from-blue-700 dark:via-slate-800 dark:to-blue-500',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-10 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
