import React from 'react'
import menu from '@/assets/menu.png'
import bell from '@/assets/bell.png'
import user from '@/assets/user.png'
import useAppState from '@/hooks/useAppState'

function Navbar() {

    const { setPopUpFxn, appState } = useAppState();

    const handleClick = () => {
        setPopUpFxn(true, appState.loggedIn ? "logout" : 'auth');
    }

    return (
        <div className='bg-primary h-1/4 w-full p-4 flex gap-4 justify-between z-50 items-center pb-12 lg:pb-4'>

            <div className='flex justify-center items-center gap-4'>
                <img
                    src={menu}
                    alt="menu"
                    className='h-8 w-8' />

                <h1 className='text-white font-bold text-2xl text-center'>
                    IRCTC
                </h1>

            </div>

            <div className='flex gap-4'>

                <img
                    src={bell}
                    alt="bell"
                    className='h-8 w-8' />
                <img
                    src={user}
                    alt="user"
                    className='h-8 w-8'
                    onClick={handleClick} />
                    
            </div>

        </div>
    )
}

export default Navbar