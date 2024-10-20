import React, { useEffect, useState } from 'react';
const Calender = () => {
    const [date, setDate] = useState('');

    useEffect(() => {
        const updateDate = () => {
            const now = new Date();
            setDate(now.toLocaleDateString('en-GB'));
        };

        updateDate();
        const intervalId = setInterval(updateDate, 1000);
        
        return () => clearInterval(intervalId);
    }, []);

    return (
                <div className=" shadow-md inline-block text-center p-2 bg-green-200 rounded-lg">
                    <h2 className="text-[20px]  font-semibold">Date</h2>
                    <div className=" text-[24px] font-semibold" id="date">{date}</div>
                </div>
    );
};


export default Calender;

