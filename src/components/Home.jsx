import React from 'react'
import Navbar from '../global-components/navbar'
import landingImg from '../assets/glimere-landing.png'
// import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import glimere from '../assets/glimere.svg'
import glimerenew from '../assets/glimerenew.svg'
import style from "../assets/style.jpg"
import career1 from "../assets/career1.jpg"
import career4 from "../assets/career4.jpg"
import career5 from "../assets/career5.jpg"
import career9 from "../assets/career9.jpg"
import community from "../assets/community.png"
import products from "../assets/products.png"
import inclusive from "../assets/inclusive.jpg"






export default function Home() {

// Set the date you're counting down to
const countDownDate = new Date("June 31, 2023 00:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function() {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Calculate the days, hours, minutes and seconds remaining
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the HTML with the new values
  document.getElementById("days").style.setProperty("--value", days);
  document.getElementById("hours").style.setProperty("--value", hours);
  document.getElementById("mins").style.setProperty("--value", minutes);
  document.getElementById("secs").style.setProperty("--value", seconds);

  // Update the text with the new values
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("mins").textContent = minutes;
  document.getElementById("secs").textContent = seconds;

  // If the countdown is finished, clear the interval
  if (distance < 0) {
    clearInterval(countdownInterval);
  }
}, 1000);

  // const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  
  // const renderer = new THREE.WebGLRenderer();
  // renderer.setSize( window.innerWidth, window.innerHeight );
  // const canvasRef = useRef(null);
  
  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   canvas.appendChild(renderer.domElement);
    
  //   const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  //   const material = new THREE.MeshBasicMaterial( { color: 0xffe9b8 } );
  //   const cube = new THREE.Mesh( geometry, material );
  //   scene.add( cube );
    
  //   camera.position.z = 5;
    
  //   const animate = () => {
  //     requestAnimationFrame( animate );
    
  //     cube.rotation.x += 0.01;
  //     cube.rotation.y += 0.01;
      
  //     renderer.setClearColor(0x772f1a);
  //     renderer.render( scene, camera );
  //   }
    
  //   animate();
  // }, []);

  return (
    <>
        <Navbar />
        
        <div className='h-[100vh] bg-[#fff5ee] w-full px-[4rem] pt-[80px] relative flex flex-row'>

          <div className="flex-[1] h-full flex flex-col justify-center">
            <div className="w-[90%] mb-[15px]">
            <h1 className="text-[50px] text-left text-[#9d5c0d] font-semibold" style={{fontFamily: "Edensor"}}>Unleash Your Fashion Potential</h1>
            </div>
            <div className="w-[80%] mb-[15px]">
            <h1 className="text-[30px] text-left text-[#9d5c0d]" style={{fontFamily: "Edensor"}}>Connect, Create, and Empower</h1>
            </div>
            <div className="w-[70%] ">
            <h1 className="text-[13px] text-left text-[#9d5c0d]">Unlock the doors to your fashion dreams and join Glimere's community of creators and innovators. Connect with like-minded individuals, create stunning portfolios, and empower yourself with endless opportunities for growth and success.</h1>
            </div>
          </div>
           
          
    
          <div className="h-[500px] w-[500px] bg-[#ffe9b8] overflow-hidden rounded-full flex flex-col justify-end flex-[1]">
            <img src={landingImg} alt="" className='px-[50px] pt-[50px]' />
          </div>
      
        </div>
        <div className="h-[100vh] bg-[#772f1a] w-full relative flex flex-row">
          <img src={style} alt="" className='w-full absolute' />

        <div className='flex-[1] overflow-hidden z-10 flex flex-col items-start py-[80px] pl-[4rem]'>
          
            <h1 className="text-white font-semibold text-[40px]" style={{fontFamily: "Edensor"}}>Unleash Your Style</h1>
            <div className="w-[40%] mt-[20px] text-left">
            <p className="text-[#613e13]">Discover the fashion potential within you and let it shine</p>
            </div>
        </div>
          {/* <div className='absolute top-0 left-0 w-full h-full' ref={canvasRef} /> */}
        <div className="flex-[1] z-10 flex flex-col items-end justify-end py-[80px] pr-[4rem]">
            <h1 className="text-white font-semibold text-[40px]" style={{fontFamily: "Edensor"}}>Express Yourself</h1>
            <div className="w-[40%] mt-[20px] text-right">
            <p className="text-[#613e13]">Make a statement with your unique style</p>
            </div>
        </div>
        </div>
        <div className="h-[100vh] bg-[#fff5ee] w-full relative flex flex-row-reverse">
        <div className="flex-[1] h-full pl-[4rem] flex flex-col justify-center">
            <div className="w-[90%] mb-[15px]">
            <h1 className="text-[50px] text-left text-[#9d5c0d] font-semibold" style={{fontFamily: "Edensor"}}>Empower Yourself with Endless Opportunities</h1>
            </div>
            <div className="w-[70%] ">
            <h1 className="text-[13px] text-left text-[#9d5c0d]">Unlock Limitless Career Opportunities with Glimere's job portal, featuring a wide range of positions in the fashion industry. From design to marketing, discover your dream job and take the next step in your career.</h1>
            </div>
          </div>
          <div className="flex-[1] flex flex-col py-[70px] px-[150px]">
            <div className="flex-[1] h-[30%] w-full bg-white rounded-tl-[150px] rounded-tr-[150px] overflow-hidden">
              <img src={career1} alt="" className="w-full" />
            </div>
            <div className="flex-[1] h-[30%] flex flex-row">
              <div className="w-full h-full bg-[#585123] flex-[1]  rounded-tl-[150px] relative overflow-hidden">
                {/* <img src={career2} alt="" className="w-[500px] absolute" /> */}
              </div>
              <div className="w-full h-full bg-[#fdff92] flex-[1] rounded-tr-[150px] overflow-hidden">
                {/* <img src={career3} alt="" className="w-full" /> */}
              </div>
              <div className="w-full h-full bg-white flex-[1] rounded-bl-[150px]  rounded-br-[150px] rounded-tr-[150px] rounded-tl-[150px] overflow-hidden">
                <img src={career4} alt="" className="w-full" />
              </div>
            </div>
            <div className="flex-[1] h-[30%] flex flex-row">
              <div className="w-full h-full bg-white flex-[1]  rounded-bl-[150px]  rounded-br-[150px] overflow-hidden">
                <img src={career5} alt="" className="w-full" />
              </div>
              <div className="w-full h-full bg-[#ed7534] flex-[1]  rounded-bl-[150px] overflow-hidden">
                <img src={career9} alt="" className="w-full" />
              </div>
              <div className="w-full h-full bg-[#EEC170] flex-[1]  rounded-br-[150px] overflow-hidden">
                {/* <img src={career7} alt="" className="w-full" /> */}
              </div>
            </div>
              

          </div>
        </div>
        <div className="h-[100vh] bg-[#63AA87] w-full relative flex flex-row">
          <div className="flex-[1]">
          <div className="flex-[1] h-full pl-[4rem] flex flex-col justify-center">
            <div className="w-[90%] mb-[15px]">
            <h1 className="text-[50px] text-left text-white font-semibold" style={{fontFamily: "Edensor"}}>Join a Thriving Fashion Community</h1>
            </div>
            <div className="w-[70%] ">
            <h1 className="text-[13px] text-left text-white">Connect with like-minded individuals who share your passion for fashion. Collaborate with other creatives, exchange ideas, and share your work.</h1>
            </div>
          </div>
          </div>
          <div className="flex-[1.9] flex items-end">
            <img src={community} alt="" className='w-full' />
          </div>

        </div>

        <div className="h-[100vh] bg-[#ffe9b8] w-full relative flex flex-row">
        <div className="flex-[1] flex items-end">
            <img src={products} alt="" className='h-full' />
          </div>

          <div className="flex-[1.3]">
          <div className="flex-[1] h-full pl-[4rem] flex flex-col justify-center">
            <div className="w-[90%] mb-[15px]">
            <h1 className="text-[50px] text-left text-[#9d5c0d] font-semibold" style={{fontFamily: "Edensor"}}>Showcase Your Creativity and Skills</h1>
            </div>
            <div className="w-[70%] ">
            <h1 className="text-[13px] text-left text-[#9d5c0d]">Showcase your unique style with a stunning portfolio that captures your essence and creativity, and sets you apart in the fashion industry.</h1>
            </div>
          </div>
          </div>
        </div>

        <div className="h-[100vh] bg-[#fff5ee] w-full relative flex flex-row">
        <div className="flex-[1] flex items-end">
            {/* <img src={inclusive} alt="" className='h-full' /> */}
          </div>

          {/* <div className="flex-[1.3]">
          <div className="flex-[1] h-full pl-[4rem] flex flex-col justify-center">
            <div className="w-[90%] mb-[15px]">
            <h1 className="text-[50px] text-left text-[#9d5c0d] font-semibold" style={{fontFamily: "Edensor"}}>Showcase Your Creativity and Skills</h1>
            </div>
            <div className="w-[70%] ">
            <h1 className="text-[13px] text-left text-[#9d5c0d]">Showcase your unique style with a stunning portfolio that captures your essence and creativity, and sets you apart in the fashion industry.</h1>
            </div>
          </div>
          </div> */}

        </div>


        <div className="h-[100vh] bg-[#332f2d] w-full relative flex flex-row">
        <div className="flex-[1] flex items-end">
            <img src={inclusive} alt="" className='h-full' />
          </div>

          <div className="flex-[1.3]">
          <div className="flex-[1] h-full pl-[4rem] flex flex-col justify-center">
            <div className="w-[90%] mb-[15px]">
            <h1 className="text-[50px] text-left text-white font-semibold" style={{fontFamily: "Edensor"}}>We Value Inclusivity</h1>
            </div>
            <div className="w-[70%] ">
            <h1 className="text-[13px] text-left text-[#cec1ba]">At Glimere, we value inclusivity and believe in creating a platform that welcomes everyone. We celebrate diversity and are committed to providing a safe and welcoming space for individuals from all walks of life.

Our community is built on the foundation of respect and understanding, and we believe in creating a culture where everyone feels valued and empowered to express themselves freely and authentically.

We encourage individuals to showcase their unique style and creativity, regardless of their race, gender, age, or background. Our goal is to create a community that embraces diversity and promotes inclusivity.

Join us on Glimere to be a part of a community that values inclusivity and celebrates the beauty of our differences.</h1>
            </div>
          </div>
          </div>

        </div>


        <div className="h-[100vh] bg-[#fff5ee] w-full px-[4rem] relative flex flex-row">
          <div className="flex-[1] flex items-center">
            <div className="">
              <h1 className="font-medium text-[70px] mb-[30px]" style={{fontFamily: "Edensor"}}>Ready to slay the fashion game?</h1>
              <div className="w-[70%]">
                <p className='text-[19px] mb-[30px]'>Get in line with Glimere's waitlist and join the fashion revolution!</p>
              </div>
              
              <button className='px-[40px] py-[12px] bg-[#ed7534] flex justify-center items-center text-white text-[15px] rounded-[10px] cursor-pointer'>
                Join Now!
              </button>
            </div>
          </div>
          <div className="flex-[1] flex justify-center items-center">

          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col h-[120px] w-[90px] rounded-[15px] bg-[#ed7534] text-white p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown flex-[1] text-white font-mono text-5xl relative">
                <span id="days" style={{"--value": 15}}></span>
                </span>
                <h1 className="20px flex-[1]">days</h1>
                
              </div> 
              <div className="flex flex-col h-[120px] w-[90px] rounded-[15px] bg-[#ed7534] text-white p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown flex-[1] text-white font-mono text-5xl relative">
                <span id="hours" style={{"--value": 10}}></span>
                </span>
                <h1 className="20px flex-[1]">hours</h1>
                
              </div> 
              <div className="flex flex-col h-[120px] w-[90px] rounded-[15px] bg-[#ed7534] text-white p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown flex-[1] text-white font-mono text-5xl relative">
                <span id="mins" style={{"--value": 24}}></span>
                </span>
                <h1 className="20px flex-[1]">min</h1>
               
              </div> 
              <div className="flex flex-col h-[120px] w-[90px] rounded-[15px] bg-[#ed7534] text-white p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown flex-[1] text-white font-mono text-5xl relative">
                <span id="secs" style={{"--value": 22}}></span>
                </span>
                <h1 className="20px flex-[1]">sec</h1>
               
              </div>
            </div>

          </div>
        </div>
          <div className="bg-[#772f1a] w-full h-[250px] border-t-[1px] border-[#ffe9b865] flex">

            <div className="flex-[1] flex py-[20px] items-center">
              <div className="w-full">
              <div className="px-[60px]">
                <h3 className="text-[#ffe9b8] text-[13px]">Socials</h3>
                <div className="flex flex-row items-center mb-[18px]">
                  <div className="h-[1px] w-[40%] bg-[#ffe9b8]"></div>
                  <div className="h-[10px] w-[10px] bg-[#ffe9b8] rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-row justify-between px-[60px]">
                <div className='px-[15px] py-[4px] border-[1.5px] border-[#ed7534] flex justify-center items-center text-[#ffe9b8] text-[12px] rounded-full cursor-pointer'>
                  Linkedin
                </div>
                <div className='px-[15px] py-[4px] border-[1.5px] border-[#ed7534] flex justify-center items-center text-[#ffe9b8] text-[12px] rounded-full cursor-pointer'>
                  Twitter
                </div>
                <div className='px-[15px] py-[4px] border-[1.5px] border-[#ed7534] flex justify-center items-center text-[#ffe9b8] text-[12px] rounded-full cursor-pointer'>
                  Facebook
                </div>
                <div className='px-[15px] py-[4px] border-[1.5px] border-[#ed7534] flex justify-center items-center text-[#ffe9b8] text-[12px] rounded-full cursor-pointer'>
                  Instagram
                </div>
              </div>
              </div>
              
            </div>

            <div className="flex-[1] flex flex-col justify-center items-end px-[60px]">
              <div className="flex flex-col justify-center items-center">
                <img src={glimerenew} alt="" className='w-[100px]'/>
                <img src={glimere} alt="" className='w-[70px] mt-[30px]'/>
              </div>
              
            </div>
          </div>
    </>
  )
}
