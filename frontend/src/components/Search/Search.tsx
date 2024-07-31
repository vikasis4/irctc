import React from 'react'
import Form from './Form'
import { Button } from '@/components/ui/Button'

function Search() {
    return (
        <div className='h-full w-full lg:w-1/2'>
            <div
                className='relative bottom-6 pb-8 bg-secondary pt-12 px-2 rounded-t-3xl w-full overflow-auto flex flex-col lg:flex-col-reverse lg:bottom-0 lg:rounded-none lg:pt-2'>

                <Form />

                <h1 className='w-full text-center hidden lg:block font-bold text-4xl text-primary'>Book Ticket</h1>
                <div
                    className='flex gap-4 w-full pt-8 lg:pt-0 lg:mb-6'>
                    <Button
                        text="PNR STATUS"
                        variant='secondary'
                        size="full"
                    />
                    <Button
                        text="Charts/Vacancy"
                        variant='secondary'
                        size="full"
                    />
                </div>
            </div>
            <div
                className='rounded-sm shadow-2xl border-2 border-gray-200 text-primary mb-12 m-auto p-3 w-[95%] lg:w-full bg-secondary lg:mx-0 lg:mt-4'>
                Please click here for Empanelment for PAD items for Catering.
            </div>
        </div>
    )
}

export default Search