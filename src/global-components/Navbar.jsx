import React from 'react'
import glimere from '../assets/glimere.svg'
import glimerenew1 from '../assets/glimerenew1.svg'


export default function Navbar(props) {
  return (
    <>
    <div className="bg-transparent h-[80px] w-full absolute flex flex-row justify-between items-center px-[40px] sm:px-[80px] z-[1]">
        <div className="">
        <img src={glimere} alt="" className='w-[120px] hidden sm:block'/>
        <img src={glimerenew1} alt="" className='w-[40px] block sm:hidden'/>
        </div>
        {/* <div className='h-full w-[250px] flex flex-row justify-between items-center'>
            <div className="h-[20px] w-[40px] text-[#9d5c0d] text-[15px]">Home</div>
            <div className="h-[20px] w-[40px] text-[#9d5c0d] text-[15px]">About</div>
            <div className="h-[20px] w-[40px] text-[#9d5c0d] text-[15px]">Features</div>
            <div className="h-[20px] w-[40px] text-[#9d5c0d] text-[15px]">Contact</div>
        </div> */}
        <div className="">
            <div className='px-[35px] py-[5px] bg-[#ed7534] duration-150 hover:bg-[#9d5c0d] flex justify-center items-center text-white text-[15px] rounded-full cursor-pointer'
            onClick={props.handleButtonClick}>
                Join
            </div>
        </div>
    </div>
    
    </>
  )
}
