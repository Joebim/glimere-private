import React from 'react'

export default function Countdown() {

     // // Set the date you're counting down to
    // const countDownDate = new Date("August 25, 2023 00:00:00").getTime();
  
    // // Update the countdown every 1 second
    // const countdownInterval = setInterval(function () {
    //   // Get today's date and time
    //   const now = new Date().getTime();
  
    //   // Find the distance between now and the count down date
    //   const distance = countDownDate - now;
  
    //   // Calculate the days, hours, minutes and seconds remaining
    //   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    //   // Update the HTML with the new values
    //   document.getElementById("days").style.setProperty("--value", days);
    //   document.getElementById("hours").style.setProperty("--value", hours);
    //   document.getElementById("mins").style.setProperty("--value", minutes);
    //   document.getElementById("secs").style.setProperty("--value", seconds);
  
    //   // Update the text with the new values
    //   document.getElementById("days").textContent = days;
    //   document.getElementById("hours").textContent = hours;
    //   document.getElementById("mins").textContent = minutes;
    //   document.getElementById("secs").textContent = seconds;
  
    //   // If the countdown is finished, clear the interval
    //   if (distance < 0) {
    //     clearInterval(countdownInterval);
    //   }
    // }, 1000);

  return (
    <div>  

          {/* <div className="flex-[0.6] sm:flex-[1] flex justify-center items-center">

          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col h-[100px] sm:h-[120px] w-[60px] sm:w-[90px] rounded-[15px] bg-[#ed7534] text-white p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown flex-[1] text-white font-mono text-[35px] sm:text-5xl relative">
                <span id="days" style={{ "--value": 15 }}></span>
              </span>
              <h1 className="20px flex-[1]">days</h1>

            </div>
            <div className="flex flex-col h-[100px] sm:h-[120px] w-[60px] sm:w-[90px] rounded-[15px] bg-[#ed7534] text-white p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown flex-[1] text-white font-mono text-[35px] sm:text-5xl relative">
                <span id="hours" style={{ "--value": 10 }}></span>
              </span>
              <h1 className="20px flex-[1]">hours</h1>

            </div>
            <div className="flex flex-col h-[100px] sm:h-[120px] w-[60px] sm:w-[90px] rounded-[15px] bg-[#ed7534] text-white p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown flex-[1] text-white font-mono text-[35px] sm:text-5xl relative">
                <span id="mins" style={{ "--value": 24 }}></span>
              </span>
              <h1 className="20px flex-[1]">min</h1>

            </div>
            <div className="flex flex-col h-[100px] sm:h-[120px] w-[60px] sm:w-[90px] rounded-[15px] bg-[#ed7534] text-white p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown flex-[1] text-white font-mono text-[35px] sm:text-5xl relative">
                <span id="secs" style={{ "--value": 22 }}></span>
              </span>
              <h1 className="20px flex-[1]">sec</h1>

            </div>
          </div>

        </div> */}
   
  </div>
  )
}
