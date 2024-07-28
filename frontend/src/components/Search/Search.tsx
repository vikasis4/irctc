import React from 'react'
import Form from './Form'
import { Button } from '@/components/ui/Button'

function Search() {
    return (
        <div className='relative bottom-6 bg-secondary pt-12 px-2 rounded-t-3xl w-full overflow-auto'>
            <Form />
            <div className='flex flex-col justify-center items-end pt-8 gap-4'>
                <Button
                    text="Easy Bookings on AskDiksha"
                    variant="primary"
                    size="default"
                />
                <div className='flex gap-4 w-full'>
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
        </div>
    )
}

export default Search