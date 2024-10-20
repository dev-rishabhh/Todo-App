import React, { useState } from 'react';
import { IoCall } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import ContactForm from './contact';
import {Link} from 'react-router-dom'
const Header = ({isopen,setisopen}) => {
    const handleClick=(e)=>{
        e.stopPropagation()
        setisopen(!isopen)
    }
    window.addEventListener("click",()=>{
        setisopen(false)
    })
    return (
        <header>
            <div className='text-white m-auto px-5 py-3 bg-gray-600 shadow-md flex items-center justify-between'>
                <p onClick={handleClick}> <GiHamburgerMenu/> </p>
                <p className='font-mono text-[24px]'>Todo-App</p>
                <Link to={"/contact"}  className='text-[16px]'><IoCall /> </Link>
            </div>
        </header>
    );
}
export default Header;
