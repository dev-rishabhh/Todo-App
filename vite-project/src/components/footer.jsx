import React from 'react';
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-gray-700 p-2 w-[100%]'>
            <div className='flex items-center gap-2 justify-center'>
                <p className='text-white'>Made with</p>
                <FaHeart />    
                <p className='text-white'>by @devRishabh</p>
            </div>
        </footer>
 
    );
}

export default Footer;
