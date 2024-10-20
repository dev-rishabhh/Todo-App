import React, { useEffect, useState } from 'react';

import {v4 as uuidv4} from  'uuid'

import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

import Input from './input';
import Infocards from './infocards';
import Time from './time';
import Calender from './date';

const Todo = ({isopen}) => {
    const [input, setinput] = useState({isdone:false, title: "", detail: "",})

    const [tasks, settasks] = useState([])

    const [editedtask, seteditedtask] = useState("")




useEffect(()=>{
   const savedtask= localStorage.getItem("task")
   if(savedtask){
    settasks(JSON.parse(savedtask))
   }
   else{
    settasks([])
   }
},[])

useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(tasks))
 },[tasks])

   const addtask=(newtask)=>{
    const updatedtask=[...tasks,newtask]
    localStorage.setItem("task",JSON.stringify(updatedtask))
   }

    const handleDelete = (task) => {
        const filteredData = tasks.filter((currTask) => currTask !== task)
        settasks(filteredData)
    }
    const handleEdit = (task) => {
        if(task.isdone){
            return
        }
            setinput(task)
            seteditedtask(task)
        
    }

    const updateDone=(task)=>{
      const updated= tasks.map((curtask)=>{
            if(curtask===task){
                return{...curtask,isdone:!curtask.isdone}
            }
            return curtask
        })
        return updated
    }

    const handleDone=(task)=>{
        settasks(updateDone(task))
    }
    
    const countDone=(arr)=>{
        const donetask=arr.filter((el)=>el.isdone)
        if(donetask.length<10){
            return `0${donetask.length}`
        }
        return donetask.length
    }

    const Donetask=countDone(tasks)

    const pendingtask=tasks.length-countDone(tasks)
    return (
        <div>
            <div className={`${isopen?'grid grid-cols-2':'hidden'} gap-5 sm:gap-10  p-2 sm:p-5 bg-[rgb(143,116,116)] fixed top-[51%] left-[6%] md:left-[27%]`}>
            <Infocards text={"Completed"} bgcolor={"bg-yellow-100"} value={Donetask}/>
            <Infocards text={"Pending"} bgcolor={"bg-red-300"} value={pendingtask<10?`0${pendingtask}`:pendingtask}/>
            <Time />
            <Calender />
            </div>
            <Input settasks={settasks}input={input} setinput={setinput} editedtask={editedtask} seteditedtask={seteditedtask}/>
              <p className='text-[20px] font-semibold font-mono mt-2 '> Your Tasks:</p>
            <ul className='grid grid-cols-1 gap-3 mt-2 '>
                {tasks.map((task) => {
                    const { title, detail,isdone } = task
                    return (
                        <li
                            className={`p-1 ${isdone?'bg-yellow-100':'bg-white'} shadow-md rounded-[5px] flex justify-between`}
                            key={uuidv4()}>
                            <div>
                                <p className={`break-all text-[18px] px-1 font-semibold ${isdone?'line-through':''} text-red-500`}>{title}</p>
                                <p className={`break-all text-[13px] text-gray-700 px-1  ${isdone?'line-through':''}`}>{detail}</p>
                            </div>
                            <div className='flex flex-col gap-2  items-center justify-between p-1'>
                                <button className='text-blue-600' onClick={()=>handleDone(task)}><FaCheckCircle /></button>
                                <button className='text-blue-600' onClick={() => handleEdit(task)}><FaRegEdit /></button>
                                <button className='scale-[1.3] text-blue-600' onClick={() => handleDelete(task)}><MdDelete /></button>

                            </div>
                        </li>
                    )
                })}

            </ul>
        </div>
    );
}

export default Todo;
