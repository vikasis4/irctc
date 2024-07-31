import React from 'react'
import train from '@/assets/train.jpg'

type WrapperProps = {
    children: React.ReactNode
}

function Wrapper({ children }: WrapperProps) {

    return (
        <div
            style={window.innerWidth > 620 ? { backgroundImage: `url(${train})` } : {}}
            className="flex justify-center items-center lg:py-8 lg:px-16  bg-no-repeat bg-cover bg-center bg-fixed">

            {children}

            <div className='lg:w-1/2 h-full'>

            </div>
        </div>
    )
}

export default Wrapper