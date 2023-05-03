import React from 'react'
import Navbar from '../global-components/navbar'
import landingImg from '../assets/glimere-landing.png'


export default function Home() {
  return (
    <>
        <Navbar />
        
        <div className='h-[100vh] bg-[#fff5ee] w-full px-[3rem] pt-[80px] relative flex flex-row'>

          <div className="flex-[1] h-full flex flex-col justify-center">
            <div className="w-[90%] mb-[15px]">
            <h1 className="text-[50px] text-left text-[#9d5c0d] font-semibold">Unleash Your Fashion Potential</h1>
            </div>
            <div className="w-[80%] mb-[15px]">
            <h1 className="text-[30px] text-left text-[#9d5c0d]">Connect, Create, and Empower</h1>
            </div>
            <div className="w-[70%] ">
            <h1 className="text-[13px] text-left text-[#9d5c0d]">Unlock the doors to your fashion dreams and join Glimere's community of creators and innovators. Connect with like-minded individuals, create stunning portfolios, and empower yourself with endless opportunities for growth and success.</h1>
            </div>
          </div>
           
          
    
          <div className="h-[500px] w-[500px] bg-[#ffe9b8] overflow-hidden rounded-full flex flex-col justify-end flex-[1]">
            <img src={landingImg} alt="" className='px-[50px] pt-[50px]' />
          </div>
      
        </div>
        <div className="h-[100vh] bg-[#772f1a] w-full px-[3rem] pt-[80px] relative flex flex-row">

        </div>
        <div className="h-[100vh] bg-[#ffe9b8] w-full px-[3rem] pt-[80px] relative flex flex-row">

        </div>
        <div className="h-[100vh] bg-[#fff5ee] w-full px-[3rem] pt-[80px] relative flex flex-row">

        </div>
        <div className="h-[100vh] bg-[#772f1a] w-full px-[3rem] pt-[80px] relative flex flex-row">

        </div>
    </>
  )
}
