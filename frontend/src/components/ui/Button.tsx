import * as React from 'react'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

var baseStyles = 'inline-flex font-bold hover:cursor-pointer active:scale-90 transition-all  items-center justify-center rounded-md text-secondary text-md duration-300 ease-in-out'

const buttonVariants = cva(baseStyles,
    {
        variants: {
            variant: {
                default:
                    'bg-slate-900',
                primary:
                    'bg-accent rounded-md',
                secondary:
                    'bg-primary rounded-sm border border-slate-200',
                link:
                    'bg-transparent  underline-offset-4 hover:underline text-slate-900  hover:bg-transparent',
            },
            size: {
                default: 'h-10 py-2 px-4',
                full: 'w-full h-10 py-2',
                contain: 'w-max h-14'
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    href?: string
    text?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, text, href, variant, size, ...props }, ref) => {
        // if (href) {
        //   return (
        //     <Link
        //       href={href}
        //       className={cn(buttonVariants({ variant, size, className }))}
        //     >
        //       {children}
        //     </Link>
        //   )
        // }
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {text}
            </button>
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }