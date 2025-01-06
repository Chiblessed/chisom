"use client";
import { useRef,useEffect } from "react";
import styles from './style.module.scss'; 
import ShaderBackground from "../shader";
import MiniAbout from "../quote/page";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Work from "../work/page";
import Link from "next/link";




const Hero = () => {
  const ref = useRef()
  const container = useRef()

const {scrollYProgress} = useScroll({
  target: ref,
  offset: ['start start', 'end start']
})


const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const splitText = new SplitType(".quote", { types: "words, chars" });
  // GSAP Animation for the split text
  gsap.fromTo(
    splitText.chars,
    {
      opacity: 0.2,
    },
    {
      opacity: 1,
      //y: -50,
      duration: 1,
      stagger: 0.05, 
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".quote", 
        start: "top 80%", 
        end: "top 20%", 
        scrub: true, 
        markers: false
      },
    }
  );

  
}, []);

      
  
      

  return (
    <>
    <div>
      <div ref={ref} >
       
        <ShaderBackground  />

   
      <motion.main
      initial= {{opacity: 0,
        rotate: -360,
scale:0
      }}
      animate = {{
        opacity: 1,
        scale: 1,
        transition: {duration: 2}
      }}
      style={{y: textY}} 
      className="relative min-h-screen flex flex-col items-center justify-center text-black">
        <h1  className={`${styles.heading} text-8xl text-center font-semibold sm:text-6xl`}>Ohanu Chisom Blessing</h1>
        <p className={`${styles.heading2} text-2xl pt-5`}> A Frontend Developer based in Lagos, Nigeria.</p>
        
        <div className="flex items-center gap-5 mt-5">
            <button className="border-2 border-solid border-black bg-black text-white text-[16px] font-fontPrim rounded-[15px] font-medium px-5 py-2">Download CV</button>
            <button className="border-2 border-solid border-black  text-black text-[16px] font-fontPrim rounded-[15px] font-medium px-5 py-2">
              <Link href='/about'>
              Get to Know me
              </Link>
            </button>

        </div>
      </motion.main>
    </div>
   <MiniAbout />
    

    </div>
  
 
    </>
    
  );
}

export default Hero;

