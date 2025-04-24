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
const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
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
            stagger: 0.05, 
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".quote", 
              start: "top bottom",
              end: "top 50%", 
              scrub: false, 
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
          <h1 className="text-6xl px-3 pt-24">
          I help brands, businesses, and organizations bring their ideas to life through clean,
           responsive, and user-focused websites. My goal is to create digital experiences that
            are not only visually appealing but also intuitive and accessible—so users can easily engage, 
          navigate, and connect with what you offer.
          </h1>

            </section>
         </motion.main>
         <Work scrollYProgress={scrollYProgress} />
         </div>
       
    </> );
}
 
export default MiniAbout;