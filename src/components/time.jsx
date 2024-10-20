import React, { useEffect, useState } from 'react';
const Time = () => {
    const [time, setTime] = useState('');
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-GB'));
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);
        
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className=" shadow-md inline-block text-center p-2 bg-pink-200 rounded-lg">
        <h2 className="text-[20px] font-semibold">Time</h2>
        <div className="text-[24px] font-semibold" id="date">{time}</div>
    </div>
    );
};


export default Time;
