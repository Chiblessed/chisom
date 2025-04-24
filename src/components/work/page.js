"use client"
import {React, useRef, useEffect} from 'react';
import styles from './styles.module.scss'
import { motion, useTransform } from "framer-motion";
import Image2 from '../../../public/image0 (3).jpeg';
import Image1 from '../../../public/Screenshot (24).jpg';
import Image3 from '../../../public/image0.jpeg';
import Image4 from '../../../public/Screenshot (26).jpg';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import Link from 'next/link';

export default function Work({scrollYProgress}) {

  const form = useRef();
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const serviceId = process.env.NEXT_SERVICE_ID;
  const templateId = process.env.NEXT_TEMPLATE_ID;

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: apiKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          
          e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  useEffect(() => {
    const marquee = document.querySelector('.marquee')
gsap.to(marquee , {
  xPercent: -100,
  repeat: -1,
  duration: 5,
  ease: 'linear'
})
  }, [])

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0])

  return (
    <>
    <motion.main 
    style={{scale, rotate}}
    className={`${styles.bgbody} relative rounded-2xl`} >
    <section className=' h-[510vh] sm:h-[400vh] md:h-[430vh] lg:h-[500vh]'>
<h2 className={`${styles.head3} text-center text-6xl text-black pt-20`}>
  Projects 
</h2>
<div className='flex flex-col items-center justify-center gap-14 pt-10 mt-12 pb-52'>
  <div className='bg-white text-white rounded-[12px] shadow-custom-glow flex flex-col items-center justify-center sticky top-10  z-0 w-[70vw] sm:w-[100vw] sm:top-10'>
    <h2 className={`${styles.head3} pt-5 pb-5 text-3xl text-black`}>Chess-In Slum</h2>
    <Image src={Image1} alt='chess-in-slum image' width={800} height={200} />
    <div className='flex items-center justify-center gap-10 pt-5  sm:gap-2'>
    <button className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>React</button>
   <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Tailwind CSS</button>
   <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>JavaScript</button>
    </div>
   <div  className={`${styles.mintext} mt-5`}>
    <button  className="bg-black px-6 py-2 rounded-[20px] hover:bg-transparent hover:border-2 hover:border-solid hover:border-black shadow-dark-500 mr-5 mb-10 mt-3" > 
      <Link href='https://chiblessed.github.io/ChessInSlum/'>
      Site
      </Link>
      </button>
    <button  className="bg-black px-6 py-2 rounded-[20px] hover:bg-transparent hover:border-2 hover:border-solid hover:border-black shadow-dark-500 mr-5 mb-10 mt-3" >
      <Link href='https://github.com/Chiblessed/ChessInSlum'>
      Github
      </Link>
      </button>
   </div>

  </div>
  <div className=' bg-white text-white rounded-[12px] shadow-custom-glow flex flex-col items-center justify-center sticky top-14  z-0  w-[70vw] sm:w-[100vw]'>
  <h2 className={`${styles.head3} pt-5 pb-5 text-3xl text-black`}>Selhono</h2>
  <Image src={Image2} alt='selhono img' width={800} height={200} />
    <div className='flex items-center justify-center gap-10 pt-5 sm:flex-col'>
    <div className='flex items-center justify-center gap-10 '>
    <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Nuxt</button>
   <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Tailwind CSS</button>
      </div>
      <div className='flex items-center justify-center gap-10 '>
      <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>GSAP</button>
   <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>JavaScript</button>
</div>
  </div>
   <div  className={`${styles.mintext} mt-5`}>
    <button  className="bg-black px-6 py-2 rounded-[20px] hover:bg-transparent hover:border-2 hover:border-solid hover:border-black shadow-dark-500 mr-5 mb-10 mt-3" >
      <Link href="https://selhono-interior.netlify.app/">
      Site
      </Link>
      </button>
    <button  className="bg-black px-6 py-2 rounded-[20px] hover:bg-transparent hover:border-2 hover:border-solid hover:border-black shadow-dark-500 mr-5 mb-10 mt-3" >
      <Link href="https://github.com/Chiblessed/selhono">
      Github
      </Link>
    </button>
   </div>

  </div>
  <div className='bg-white rounded-[12px] text-white shadow-custom-glow flex flex-col items-center justify-center sticky top-20  z-40  w-[70vw] sm:w-[100vw]'>
  <h2 className={`${styles.head3} pt-5 pb-5 text-3xl text-black`}>African Business Radio</h2>
  <Image src={Image3} alt='chess-in-slum image' width={800} height={200} />
    <div className='flex items-center justify-center gap-10 pt-5 sm:flex-col'>
    <div className='flex items-center justify-center gap-10'>
    <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Next.js</button>
   <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Tailwind CSS</button>
</div>
<div className='flex items-center justify-center gap-10'>
<button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Restful API</button>
   <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>React Query</button>
   
</div>
    </div>
   <div  className={`${styles.mintext} mt-5`}>
    <button  className="bg-black px-6 py-2 rounded-[20px] hover:bg-transparent hover:border-2 hover:border-solid hover:border-black shadow-dark-500 mr-5 mb-10 mt-3" >
      <Link href="https://african-business-radio-dun.vercel.app/">
      Site
      </Link>
    </button>
    <button  className="bg-black px-6 py-2 rounded-[20px] hover:bg-transparent hover:border-2 hover:border-solid hover:border-black shadow-dark-500 mr-5 mb-10 mt-3" >
      <Link href="https://github.com/Chiblessed/business-radio">
      Github
      </Link>
    </button>
   </div>

  </div>
  <div className='bg-white rounded-[12px] text-white shadow-custom-glow flex flex-col items-center justify-center sticky top-10  z-40  w-[70vw] sm:w-[100vw]'>
  <h2 className={`${styles.head3} text-black pt-5 pb-5 text-3xl`}>Finpulse</h2>
  <Image src={Image4} alt='chess-in-slum image' width={800} height={200} />
    <div className='flex items-center justify-center gap-4 pt-5 sm:flex-col'>
    <div className='flex items-center justify-center gap-4'>
    <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>React</button>
   <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Tailwind CSS</button>
    </div>
    <div className='flex items-center justify-center gap-4'>
    <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Framer Motion</button>
   <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>JavaScript</button>
</div>
   </div>
   <div  className={`${styles.mintext} mt-5`}>
    <button  className="bg-black px-6 py-2 rounded-[20px] hover:bg-transparent hover:border-2 hover:border-solid hover:border-black shadow-dark-500 mr-5 mb-10 mt-3" >
      <Link href="https://chiblessed.github.io/Finpulse/">
      Site
      </Link>
    </button>
    <button  className="bg-black px-6 py-2 rounded-[20px] hover:bg-transparent hover:border-2 hover:border-solid hover:border-black shadow-dark-500 mr-5 mb-10 mt-3" >
      <Link href="https://github.com/Chiblessed/Finpulse">
      Github
      </Link>
    </button>
   </div>

  </div>
  <button  className={`${styles.mintext} bg-black relative top-20 z-40  px-4 py-2 rounded-[15px] shadow-dark-500 text-white hover:bg-transparent hover:border-2 hover:border-solid hover:border-black hover:textblack`}>
    <Link href='/works'> More Projects</Link>
  </button>
</div>

    </section>
    </motion.main>
<footer className={`${styles.footerbg} rounded-2xl bg-black h-[100vh] sm:h-[120vh] md:h-[70vh] lg:h-[100vh] text-white flex flex-col items-center justify-center`}>
<div className="marquee relative py-8 overflow-hidden flex w-full gap-5 whitespace-nowrap">
<h2 className={`${styles.head3} text-center text-6xl text-white max-sm:text-4xl max-sm:py-7 `}>Let's Work Together</h2>



</div>
<form ref={form} onSubmit={sendEmail} className="flex flex-col items-center justify-center">
  <div className="flex items-center justify-center gap-5 mb-4 sm:flex-col">
  <label className={`${styles.mintext} text-3xl mb-2`}>Name:</label>
      <input type="text" name="from_name" className="text-black font-fontPrim text-xl w-[25rem] sm:w-[20rem] px-3 focus:outline-none py-2 rounded-[12px]" required/>
  </div>
  <div className="flex items-center justify-center gap-5 mb-4 sm:flex-col">
  <label className={`${styles.mintext} text-3xl mb-2`}>Email:</label>
  <input type="email" name="from_email" className="text-black font-fontPrim text-xl w-[25rem]  sm:w-[20rem] px-3 focus:outline-none py-2 rounded-[12px]" required/>
  </div>
  <div className="flex items-center justify-center gap-4 sm:flex-col">
  <label className={`${styles.mintext} text-3xl mb-2`}>Message:</label>
  <textarea name="message" className="text-black font-fontPrim text-xl w-[25rem]  sm:w-[20rem] h-32 px-3 focus:outline-none py-2 rounded-[12px] resize-none"  required/>
  </div>
   <input type="submit" value="Send" className={`${styles.mintext} bg-white mt-10 text-black font-fontPrim text-xl cursor-pointer px-5  focus:outline-none py-2 rounded-[12px]`} />

    </form>
</footer>
    </>
  )
}
