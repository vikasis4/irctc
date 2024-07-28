import * as React from 'react'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

var baseStyles = 'inline-flex font-bold items-center justify-center rounded-md text-secondary'

const HeadingVariants = cva(baseStyles,
    {
        variants: {
            variant: {
                default:
                    'bg-slate-900',
                primary:
                    'bg-accent rounded-md',
            },
            size: {
                default: 'text-sm',
                sm: 'text-sm',
                contain: 'w-max h-14'
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface HeadingProps extends
    React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof HeadingVariants> {
    href?: string
    text?: string
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
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
            <h1
                className={cn(HeadingVariants({ variant, size, className }))}
                ref={ref}
                {...props}>
                {text}
            </h1>
        )
    }
)
Heading.displayName = 'Heading'

export { Heading, HeadingVariants }