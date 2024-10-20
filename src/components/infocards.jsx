import React from 'react';

const Infocards = ({bgcolor,value,text}) => {
    return (
        <article className={`${bgcolor} px-2  py-1 rounded-[9px] inline-block shadow-md `}>
            <p className='text-[16px] font-semibold text-center'>{text}</p>
            <p className='text-[16px] font-semibold text-center'>tasks</p>
            <h1 className='text-[22px] font-semibold text-center'>{value}</h1>
        </article>
    );
}

export default Infocards;
