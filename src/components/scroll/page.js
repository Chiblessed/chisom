'use client';
import { useEffect } from "react";
import Image from "next/image";
import Image1 from '@/../../public/second.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const InfiniteScroll = () => {
  

  useEffect(() => {
 gsap.registerPlugin(ScrollTrigger);

 
 gsap.fromTo('.marquee', {
  transform: 'translateX(-100%)',
  duration: 0.5,
  delay: 0.2,
  repeat: -1,
  ease: 'none'
   }, 
   {
    transform: 'translateX(0%)',
   delay: 8.5,
     duration: 4,
  repeat: -1,
  ease: 'none',
   
   }
 
);

  }, []);

  return (
    <>
    <main>
      <section
       className="bg-second font-open flex py-[1vw] overflow-hidden">
        <div className=" marquee flex flex-shrink-0 items-center gap-[3vw] px-[1.5vw] translate-x-[200%]">
             <p  className="text-primary text-4xl">Frontend Developer</p>
             <div className="w-10 h-10">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
        <path style={{fill:"#fefae0"}} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/>
        </svg>
             </div>
        </div>
        <div className=" marquee flex flex-shrink-0 items-center gap-[3vw] px-[1.5vw]">
             <p  className="text-primary text-4xl">Frontend Developer</p>
             <div className="w-10 h-10">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
        <path style={{fill:"#fefae0"}} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/>
        </svg>
             </div>
        </div>
        <div className=" marquee flex flex-shrink-0 items-center gap-[3vw] px-[1.5vw]">
             <p  className="text-primary text-4xl">Frontend Developer</p>
             <div className="w-10 h-10">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
        <path style={{fill:"#fefae0"}} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/>
        </svg>
             </div>
        </div>
        <div className=" marquee flex flex-shrink-0 items-center gap-[3vw] px-[1.5vw]">
             <p  className="text-primary text-4xl">Frontend Developer</p>
             <div className="w-10 h-10">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
        <path style={{fill:"#fefae0"}} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/>
        </svg>
             </div>
        </div>
        <div className=" marquee flex flex-shrink-0 items-center gap-[3vw] px-[1.5vw]">
             <p  className="text-primary text-4xl">Frontend Developer</p>
            <div className="w-10 h-10">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
        <path style={{fill:"#fefae0"}} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/>
        </svg>
             </div> 
            
        </div>
     
        
        
      </section>
    </main>
    </>
  );
};

export default InfiniteScroll;
