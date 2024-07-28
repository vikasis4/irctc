import React from 'react'
import menu from '@/assets/menu.png'
import bell from '@/assets/bell.png'
import user from '@/assets/user.png'

function Navbar() {
    return (
        <div className='bg-primary h-1/4 w-full p-4 flex gap-4 justify-between items-center pb-12'>
            <div className='flex justify-center items-center gap-4'>
                <img src={menu} alt="menu" className='h-8 w-8' />
                <h1 className='text-white font-bold text-2xl text-center'>IRCTC</h1>
            </div>
            <div className='flex gap-4'>
                <img src={bell} alt="bell" className='h-8 w-8' />
                <img src={user} alt="user" className='h-8 w-8' />
            </div>
        </div>
    )
}

export default Navbar