import React from 'react';
import Todo from './todo';
// import Clock from './clock';

const Content = ({isopen}) => {
    return (
        <main className='py-3 px-4 min-h-[90vh] bg-gray-300'>
            <Todo isopen={isopen} />
        </main>
    );
}

export default Content;
