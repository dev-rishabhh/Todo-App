import React, { useState } from 'react';

const Input = ({ settasks, editedtask, input, setinput, seteditedtask}) => {
    const [error, seterror] = useState("")

    const handleInputChange = (e) => {
        seterror("")
        const { name, value } = e.target
        setinput(prev => ({ ...prev, [name]: value, isdone: false }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!input.title || !input.detail) {
            seterror("Empty information cannot be added");
            return
        }
        if (editedtask) {
            settasks((prev) =>
                prev.map((prevtask) => {
                    if (prevtask === editedtask) {
                        return { ...input }
                    }
                    return prevtask
                }))

            setinput({ title: "", detail: "", isdone: false })
            seteditedtask("")
            return
        }

        settasks((prev) => [...prev, input])

        setinput({ title: "", detail: "", isdone: false })
    }
    return (
        <div className='relative'>
            <p className='text-red-600 text-[14px] absolute top-[-4px] px-2'>{error}</p>
            <form
                className='flex gap-3 flex-col md:flex-row justify-between bg-white p-4 rounded-[5px]'
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name='title'
                    placeholder='Title of your task e.g Wake up'
                    className='px-3 shadow-md bg-gray-100 py-1 rounded-[5px] md:w-[30%] placeholder:text-gray-800'
                    value={input.title}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name='detail'
                    placeholder='Detail of your task e.g At 5 AM'
                    className='px-3  bg-gray-100 shadow-md py-1 rounded-[5px] md:w-[60%] placeholder:text-gray-800'
                    value={input.detail}
                    onChange={handleInputChange}
                />
                <button className='px-2 py-1 shadow-md mt-3 md:mt-0  bg-[#3b9fc7] rounded-[5px] text-white'>{editedtask ? "Save" : "Add"}</button>
            </form>
        </div>
    );
}

export default Input;

