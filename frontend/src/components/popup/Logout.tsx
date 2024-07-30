import React from 'react'
import { Button } from '../ui/Button'
import useAppState from '@/hooks/useAppState';
import axios from 'axios';

const URL = "http://localhost:8888/api/user/auth/logout"

function Logout() {

    const app = useAppState();

    const handleClick = async () => {
        var response = await axios.post(URL, {}, { withCredentials: true });

        if (response.data.success) {
            app.setPopUpFxn(false, 'auth');
            app.setLogInFxn(false);
            window.location.href = '/';
        } else {
            alert('Something went wrong. Please try again later.')
        }

    }

    return (
        <div className='flex justify-center gap-6 w-full items-center p-4'>
            <Button variant={'primary'} size="default" text={'Logout'} onClick={handleClick} />
            <Button variant={'secondary'} size="default" text={'Close'} onClick={() => app.setPopUpFxn(false, 'logout')} />
        </div>
    )
}

export default Logout