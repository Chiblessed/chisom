'use client'

import styles from './style.module.scss'

import { useRef } from 'react';  
import { useInView } from 'react-intersection-observer';

import { motion, useScroll, useTransform } from "framer-motion";




export default function Home() {

//Animation
const targetRef = useRef(null);
const { scrollYProgress } = useScroll({
  target: targetRef,
  offset: ["0 1", "1.23 1"],
});

const scaleY = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
const opacityY = useTransform(scrollYProgress, [0, 1], [0, 1]);

const { ref, inView } = useInView({
  triggerOnce: true, // Trigger animation once when the element enters the viewport
  threshold: 0.5, // The element should be 50% visible in the viewport to trigger animation
});


  return (

    <motion.main
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.5,
    }}
    style={{
      scale: scaleY,
      opacity: opacityY,
    }}
    ref={targetRef}
    className={styles.main}>
      <motion.h1
            ref={ref}
            initial={{ rotate: 0 }} // Starting rotation
            animate={{
              rotate: inView ? 320 : 0, // Rotate to 360 degrees when in view, or back to 0
              transition: { duration: 2,       type: "spring",
              } // Duration of the rotation
            }}>About Me</motion.h1>
      <div className={styles.aboutme}>
        <motion.p 
         >Hey there!<span>👋</span>  I’m a a creative and adaptable front-end developer with 
            a background in Mass Communication.
              With a passion for storytelling and design, I now build beautiful,
             user-friendly websites and applications that engage and inspire.
             I bring a unique blend of creativity and technical skills to the table, 
             using frameworks like Vue, React, Next.js, and Nuxt.js to bring ideas to life on the web.
            </motion.p>
            <motion.p
            >
            Whether it’s crafting seamless interfaces or diving into the latest code trends,  
          I’m always excited to learn and grow.
          When I'm not coding, you can usually find me exploring new restaurants <span>🍽️</span>,
           experimenting with flavors, or getting into the goofy side of life <span>😜 </span> 
           (laughter is the best bug fix, right?). I believe creativity knows no bounds, 
           and I bring that mindset to every project I take on.
Let’s create something awesome together!<span>🚀</span> 
            </motion.p>
      </div>
    

    </motion.main>

  )

}