"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Work from "../work/page";
import { motion, useScroll, useTransform } from "framer-motion";

const MiniAbout = () => {

  const container = useRef();

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const splitText = new SplitType(".quote", { types: "words, chars" });
    
        // GSAP Animation for the split text
        gsap.fromTo(
          splitText.chars,
          {
            opacity: 0.2,
           y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.05, // Stagger the animation for each character
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".quote", // Target the element with the class `quote`
              start: "top bottom", // Start the animation when the element enters the viewport
              end: "top 50%", // End when the element reaches the middle of the viewport
              scrub: false, // Smoothly animate based on scroll
            },
          }
        );

        
      }, []);



    
    return (
         <>
         <div ref={container} className="relative h-[200vh]">
         <motion.main
         style={{scale, rotate}}
          className="sticky top-0 overflow-x-hidden bg-black text-white text-center h-[120vh] w-full ">
            <section >
            <blockquote className="quote text-6xl font-[Poppins] px-5 pt-36">
            "The only limit to your impact is your imagination, your CSS skills, and how many browsers you’re willing to support."
            
            </blockquote>

            </section>
         </motion.main>
         <Work scrollYProgress={scrollYProgress} />
         </div>
       
    </> );
}
 
export default MiniAbout;