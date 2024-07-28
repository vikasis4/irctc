import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import downimg from '@/assets/down.png'

const dropdownBaseStyles = 'flex font-bold items-center justify-between text-sm transition-colors border-b-2 focus:outline-none focus:border-4 focus:border-sol';

const dropdownVariants = cva(dropdownBaseStyles, {
    variants: {
        variant: {
            default: 'text-primary ',
            primary: 'bg-accent text-secondary hover:bg-red-600 rounded-md',
            secondary: 'bg-primary text-secondary border border-slate-200 hover:bg-slate-100 uppercase',
            subtle: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
            link: 'bg-transparent underline-offset-4 hover:underline text-slate-900 hover:bg-transparent',
        },
        size: {
            default: 'h-10 w-full py-2 px-4',
            full: 'w-full h-12',
            contain: 'w-max h-14',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dropdownVariants> {
    options: string[];
    onOptionSelect: (option: string) => void;
    value: string,
    srcimg: any
}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
    ({ className, value, srcimg, options, onOptionSelect, variant, size, ...props }, ref) => {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <div className="relative text-left w-full" {...props} ref={ref}>
                <div
                    tabIndex="0"
                    className={cn(dropdownVariants({ variant, size, className }))}
                    onClick={() => setIsOpen(!isOpen)}>
                    <div className='flex justify-center items-center gap-4'>
                        <img src={srcimg} alt="new" className='h-4 w-3' />
                        <h1>
                            {value}
                        </h1>
                    </div>
                    <img src={downimg} alt="new" className='h-6 w-6' />
                </div>

                {(
                    <div className={cn("origin-top absolute left-0 w-full right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" + `transition-all duration-200 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`)}>
                        <div className="flex flex-col py-1">
                            {options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        onOptionSelect(option);
                                        setIsOpen(false);
                                    }}
                                    className={cn("block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left", option == value ? "bg-blue-300" : "")}>
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }
);

Dropdown.displayName = 'Dropdown';

export { Dropdown, dropdownVariants };
