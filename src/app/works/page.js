'use client'
import styles from './styles.module.scss';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import Image6 from '../../../public/image0.jpeg';
import Image2 from '../../../public/Screenshot (25).jpg';
import Image1 from '../../../public/Screenshot (24).jpg';
import Image3 from '../../../public/Screenshot (30) (1).jpg';
import Image4 from '../../../public/Screenshot (26).jpg';
import Image5 from '../../../public/image0 (3).jpeg';
import Link from 'next/link';
import Image from 'next/image';


const Work = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main className={`${styles.bgbody} -z-10 -mt-32 `}>
      <section className="h-[580vh] sm:h-[350vh] md:h-[300vh]  lg:h-[580vh] ">
        <h2 className={`${styles.heading} text-center text-6xl text-black pt-36`}>
          Projects
        </h2>
        <div className='flex flex-col items-center justify-center gap-24 pt-3 mt-12 sm:gap-10'>


        <div className='bg-white shadow-custom-glow rounded-[12px] text-white flex flex-col items-center justify-center sticky top-3  z-0  w-[70vw] sm:w-[100vw]'>
  <h2 className={`${styles.heading} pt-5 pb-5 text-3xl text-black`}>African Business Radio</h2>
  <Image src={Image5} alt='selhono img' width={800} height={200} />
    <div className='flex items-center justify-center gap-5 pt-5 sm:flex-col'>
      <div className='flex items-center justify-center gap-2'>
      <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Nextjs</button>
   <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Tailwind CSS</button>
      </div>
      <div className='flex items-center justify-center gap-2'>
      <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Restful API</button>
   <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>React Query</button>
    
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




        <div className='bg-white shadow-custom-glow rounded-[12px] text-white flex flex-col items-center justify-center sticky top-3  z-0  w-[70vw] sm:w-[100vw]'>
  <h2 className={`${styles.heading} pt-5 pb-5 text-3xl text-black`}>Selhono</h2>
  <Image src={Image5} alt='selhono img' width={800} height={200} />
    <div className='flex items-center justify-center gap-5 pt-5 sm:flex-col'>
      <div className='flex items-center justify-center gap-2'>
      <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Nuxt</button>
   <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Tailwind CSS</button>
      </div>
      <div className='flex items-center justify-center gap-2'>
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
  <div className='bg-white shadow-custom-glow rounded-[12px] text-white flex flex-col items-center justify-center sticky top-10  z-0 w-[70vw] sm:w-[100vw]'>
    <h2 className={`${styles.heading} pt-5 pb-5 text-3xl text-black`}>Chess-In Slum</h2>
    <Image src={Image1} alt='chess-in-slum image' width={800} height={200} />
    <div className='flex items-center justify-center gap-10 pt-5'>
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
      </button></div>

  </div>
  <div className='bg-white shadow-custom-glow rounded-[12px] text-white flex flex-col items-center justify-center sticky top-14  z-0  w-[70vw] sm:w-[100vw]'>
  <h2 className={`${styles.heading} pt-5 pb-5 text-3xl text-black`}>Insurance</h2>
  <Image src={Image2} alt='chess-in-slum image' width={800} height={200} />
    <div className='flex items-center justify-center gap-10 pt-5'>
    <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Vue</button>
   <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Tailwind CSS</button>
   <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>JavaScript</button>
    </div>
   <div  className={`${styles.mintext} mt-5`}>
   <button  className="bg-black px-6 py-2 rounded-[20px] hover:bg-transparent hover:border-2 hover:border-solid hover:border-black shadow-dark-500 mr-5 mb-10 mt-3" >
      <Link href="https://chiblessed.github.io/insurance/">
      Site
      </Link>
    </button>
    <button  className="bg-black px-6 py-2 rounded-[20px] hover:bg-transparent hover:border-2 hover:border-solid hover:border-black shadow-dark-500 mr-5 mb-10 mt-3" >
      <Link href="https://github.com/Chiblessed/insurance">
      Github
      </Link>
    </button>  </div>

  </div>
  <div className='bg-white shadow-custom-glow rounded-[12px] text-white flex flex-col items-center justify-center sticky top-20  z-40  w-[70vw] sm:w-[100vw]'>
  <h2 className={`${styles.heading} pt-5 pb-5 text-3xl text-black`}>Lemon Wares</h2>
  <Image src={Image3} alt='chess-in-slum image' width={800} height={200} />
    <div className='flex items-center justify-center gap-5 pt-5 sm:flex-col'>
      <div className='flex items-center justify-center gap-3'>
      <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Vue</button>
   <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Tailwind CSS</button>
      </div>
      <div className='flex items-center justify-center gap-3'>
      <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Framer Motion</button>
   <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>JavaScript</button>
      </div>
 </div>
   <div  className={`${styles.mintext} mt-5`}>
   <button  className="bg-black px-6 py-2 rounded-[20px] hover:bg-transparent hover:border-2 hover:border-solid hover:border-black shadow-dark-500 mr-5 mb-10 mt-3" >
      <Link href="https://chiblessed.github.io/lemon-wares/">
      Site
      </Link>
    </button>
    <button  className="bg-black px-6 py-2 rounded-[20px] hover:bg-transparent hover:border-2 hover:border-solid hover:border-black shadow-dark-500 mr-5 mb-10 mt-3" >
      <Link href="https://github.com/Chiblessed/lemon-wares">
      Github
      </Link>
    </button> </div>

  </div>
  <div className='bg-white shadow-custom-glow rounded-[12px] text-white flex flex-col items-center justify-center sticky top-10  z-40  w-[70vw] sm:w-[100vw]'>
  <h2 className={`${styles.heading} pt-5 pb-5 text-3xl text-black`}>Finpulse</h2>
  <Image src={Image4} alt='chess-in-slum image' width={800} height={200} />
    <div className='flex items-center justify-center gap-4 pt-5 sm:flex-col'>
      <div className='flex items-center justify-center gap-3'>
      <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>React</button>
   <button  className={`${styles.mintext} bg-black/20 px-4 py-2 rounded-[15px] shadow-dark-500`}>Tailwind CSS</button>
      </div>
      <div className='flex items-center justify-center gap-3'>
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
    </button> </div>

  </div>
</div>
      </section>
    </main>
  );
};

export default Work;
