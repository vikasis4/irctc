import React from 'react'
import { Button } from '../ui/Button'
import useAppState from '@/hooks/useAppState';
import useLogout from '@/hooks/useLogout';


function Logout() {

    const app = useAppState();
    const logoutFxn = useLogout();


    return (
        <div className='flex justify-center gap-6 w-full items-center p-4'>
            <Button variant={'primary'} size="default" text={'Logout'} onClick={logoutFxn} />
            <Button variant={'secondary'} size="default" text={'Close'} onClick={() => app.setPopUpFxn(false, 'logout')} />
        </div>
    )
}

export default Logout