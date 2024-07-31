import * as React from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const baseStyles = 'inline-flex items-center justify-center font-bold text-secondary text-lg transition-colors cursor-pointer'

const checkableVariants = cva(baseStyles, {
    variants: {
        variant: {
            default: 'bg-slate-200 border border-slate-300',
            selected: 'bg-blue-100 text-sol',
        },
        size: {
            small: 'h-6 w-6',
            default: 'h-5 w-5',
            large: 'h-10 w-10',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
})

export interface CheckableProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof checkableVariants> {
    selected?: boolean
    disabled?: boolean
    onChange?: () => void
    text?: string
}

const Checkable = React.forwardRef<HTMLDivElement, CheckableProps>(
    ({ className, selected, disabled, variant, size, text, onChange, ...props }, ref) => {

        return (
            <div className="flex w-full justify-start items-center lg:w-max" ref={ref} {...props} onClick={onChange}>
                <div className={cn(checkableVariants({ variant: selected ? 'selected' : variant, size }))}>
                    {selected && (
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    )}
                </div>
                {text && <span className="ml-2 text-primary font-medium text-sm">{text}</span>}
            </div>
        )
    }
)
Checkable.displayName = 'Checkable'

export { Checkable, checkableVariants }
