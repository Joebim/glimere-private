import React from 'react'
import glimere from '../assets/glimere.svg'

export default function Navbar() {
  return (
    <>
    <div className="bg-transparent h-[80px] w-full absolute flex flex-row justify-between items-center px-[50px] z-[1]">
        <div className="">
        <img src={glimere} alt="" className='w-[80px]'/>
        </div>
        <div className='h-full w-[250px] flex flex-row justify-between items-center'>
            <div className="h-[20px] w-[40px] text-[#9d5c0d] text-[13px]">Home</div>
            <div className="h-[20px] w-[40px] text-[#9d5c0d] text-[13px]">About</div>
            <div className="h-[20px] w-[40px] text-[#9d5c0d] text-[13px]">Features</div>
            <div className="h-[20px] w-[40px] text-[#9d5c0d] text-[13px]">Contact</div>
        </div>
        <div className="">
            <div className='px-[40px] py-[5px] bg-[#ed7534] flex justify-center items-center text-white text-[15px] rounded-full cursor-pointer'>
                Join
            </div>
        </div>
    </div>
    
    </>
  )
}
