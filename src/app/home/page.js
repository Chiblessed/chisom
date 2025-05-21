"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import Mainimage from '@/../../public/mian.png';
import InfiniteScroll from '@/../../src/components/scroll/page';
import MiniAbout from '../../components/quote/page'; 
import Work from "@/components/work/page";
import Footer from "@/components/footer/page";



const Hero = () => {
  const contactRef = useRef(null)

  const handleHireClick = () => {
    const link = document.createElement('a')
    link.href = '/maincv.pdf'
    link.download = 'Chisom_CV.pdf'
    link.click()
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
useEffect(() => {
  gsap.from('h2', {
    y:50,
    opacity: 0,
    ease: 'power4.inOut',
    delay:0.2,
    stagger: {
      amount: 0.3
    }
  })
},[])
  return (
    <>   
    <main className="h-screen sm:h-[60%] md:h-1/2 bg-primary overflow-hidden sm:px-3">
      <section className="pt-10 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-3 group  hover:cursor-pointer">
        <p className="text-lg">
          Creative Developer
        </p>
        <div className="w-2 h-2 rounded-full bg-second" />
        <button 
        onClick={handleHireClick}
        className="group-hover:bg-second group-hover:text-primary group-hover:px-3 group-hover:py-2 rounded-lg">
        Hire Me
        </button>
       
        </div>
     
        <h2 className="text-9xl sm:text-[45px] md:text-[85px] sm:py-3 text-center font-oswald whitespace-nowrap">
          Ohanu Chisom Blessing
        </h2>
       
        <Image src={Mainimage} width={500} height={500} alt="banner" className="rounded-3xl md:mb-10 sm:mb-10" />
      
        
      
      </section>
    </main>
    <InfiniteScroll />
    <MiniAbout />
    <Work />
    <Footer contactRef={contactRef} />
    </>
    
  );
}

export default Hero;

