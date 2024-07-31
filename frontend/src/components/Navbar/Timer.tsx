import React, { useState, useEffect } from 'react';

function Timer() {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatDate = (date: any) => {
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        return date.toLocaleDateString('en-GB', options);
    };

    const formatTime = (date: any) => {
        return date.toLocaleTimeString('en-GB', { hour12: false });
    };

    return (
        <span className='w-52 text-center'>{formatDate(currentTime)} [{formatTime(currentTime)}]</span>
    )
}

export default Timer