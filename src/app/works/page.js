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
import WorkButton from '@/components/workbtn/page';


const Work = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
    <main className='bg-primary h-full px-16 sm:px-3 md:px-3 lg:px-16'>
      <section className='flex flex-col'>
      <h2 className="text-second font-oswald text-[10rem] sm:text-[5rem] uppercase">
          Selected Works
        </h2>
        <div className='flex items-center justify-between sm:flex-col md:flex-col border-t border-t-second py-5'>
          <div className='flex items-start justify-center gap-3 sm:flex-col'>
            <Image src={Image6} width={500} height={500} alt='project1' />
            <div  className='flex flex-col'>
              <h1 className="text-second font-oswald text-3xl uppercase">African Business Radio</h1>
              <p className='text-sm py-5 w-[70%] sm:w-full md:w-full font-open'>
              African Business Radio is a podcast platform offering diverse channels across 
              Kids & Parenting, Religion, Sports, and Technology. With smart filtering and sorting, users can easily discover 
              and enjoy content that informs, inspires, and connects with the African experience.
              </p>
              <ul className='flex gap-3 sm:gap-1 sm:mb-3  font-open'>
                <li className='bg-second text-primary text-sm px-3 py-2 rounded-sm cursor-pointer'>Next.js</li>
                <li className='bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm'>Tailwindcss</li>
                <li className='bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm'>React Query</li>
                <li className='bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm'>Restful API</li>
              </ul>
            </div>
          </div>
<div className='flex items-center justify-center gap-3 md:mt-3'>
  <Link href='https://african-business-radio-dun.vercel.app/' >
          <WorkButton>
            <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">Live</p>
          </WorkButton>
        </Link>
        <Link href='https://github.com/Chiblessed/business-radio' >
          <WorkButton>
            <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">Github</p>
          </WorkButton>
        </Link>
</div>
        </div>

        <div className='flex items-center justify-between sm:flex-col md:flex-col border-t border-t-second py-5'>
          <div className='flex items-start justify-center sm:flex-col gap-3'>
            <Image src={Image5} width={500} height={500} alt='project1' />
            <div  className='flex flex-col'>
              <h1 className="text-second font-oswald text-3xl uppercase">Selhono</h1>
              <p className='text-sm py-5 w-[70%] sm:w-full md:w-full font-open'>
              Selhono is an interior design platform that showcases elegant design projects 
              and offers tailored services. From concept to completion, users can
               explore Selhono’s portfolio and discover how beauty meets functionality in every space.</p>
              <ul className='flex gap-3 sm:gap-1 sm:mb-3 font-open'>
                <li className='bg-second text-primary text-sm px-3 py-2 rounded-sm cursor-pointer'>Nuxt.js</li>
                <li className='bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm'>Tailwindcss</li>
                <li className='bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm'>Vue.js</li>
                <li className='bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm'>GSAP</li>
              </ul>
            </div>
          </div>
<div className='flex items-center justify-center gap-3 md:mt-3'>
  <Link href= 'https://selhono-interior.netlify.app/' >
          <WorkButton>
            <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">Live</p>
          </WorkButton>
        </Link>
        <Link href='https://github.com/Chiblessed/selhono' >
          <WorkButton>
            <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">Github</p>
          </WorkButton>
        </Link>
</div>
        </div>


        <div className='flex items-center justify-between sm:flex-col  md:flex-col border-t border-t-second py-5'>
          <div className='flex items-start justify-center sm:flex-col gap-3'>
            <Image src={Image1} width={500} height={500} alt='project1' />
            <div  className='flex flex-col'>
              <h1 className="text-second font-oswald text-3xl uppercase">Chess In Slum</h1>
              <p className='text-sm py-5 w-[70%] sm:w-full md:w-full font-open'>
              Chess in Slum is a charity platform using the game of chess to empower 
              underprivileged children. It shares impactful stories, showcases initiatives,
               and provides ways for 
              supporters to get involved in transforming lives through strategy and hope. </p>
              <ul className='flex gap-3 sm:gap-1 sm:mb-3 font-open'>
                <li className='bg-second text-primary text-sm px-3 py-2 rounded-sm cursor-pointer'>React.js</li>
                <li className='bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm'>Tailwindcss</li>
              </ul>
            </div>
          </div>
<div className='flex items-center justify-center gap-3 md:mt-3'>
  <Link href='https://chiblessed.github.io/ChessInSlum/'>
          <WorkButton>
            <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">Live</p>
          </WorkButton>
        </Link>
        <Link href='https://github.com/Chiblessed/ChessInSlum'>
          <WorkButton>
            <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">Github</p>
          </WorkButton>
        </Link>
</div>
        </div>


        <div className='flex items-center justify-between sm:flex-col  md:flex-col border-t border-t-second py-5'>
          <div className='flex items-start justify-center sm:flex-col gap-3'>
            <Image src={Image4} width={500} height={500} alt='project1' />
            <div  className='flex flex-col'>
              <h1 className="text-second font-oswald text-3xl uppercase">Finpulse</h1>
              <p className='text-sm py-5 w-[70%] sm:w-full md:w-full font-open'>
              FinPulse is a landing page designed to introduce a finance-focused platform that offers tools,
               insights, and updates to help users stay informed and make smarter financial decisions. </p>
              <ul className='flex gap-3 sm:gap-1 sm:mb-3 font-open'>
                <li className='bg-second text-primary text-sm px-3 py-2 rounded-sm cursor-pointer'>Landing Page</li>
                <li className='bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm'>React.js</li>
                <li className='bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm'>Framer Motion</li>
              </ul>
            </div>
          </div>
<div className='flex items-center justify-center gap-3 md:mt-3'>
  <Link href= 'https://chiblessed.github.io/Finpulse/' >
          <WorkButton>
            <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">Live</p>
          </WorkButton>
        </Link>
        <Link href='https://github.com/Chiblessed/Finpulse' >
          <WorkButton>
            <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">Github</p>
          </WorkButton>
        </Link>
</div>
        </div>

        <div className='flex items-center justify-between sm:flex-col  md:flex-col border-t border-t-second py-5'>
          <div className='flex items-start justify-center sm:flex-col gap-3'>
            <Image src={Image2} width={500} height={500} alt='project1' />
            <div  className='flex flex-col'>
              <h1 className="text-second font-oswald text-3xl uppercase">Insurance</h1>
              <p className='text-sm py-5 w-[70%] sm:w-full md:w-full font-open'>
              Insurance is a sleek landing page built to introduce users to a trusted
               insurance solution, providing clear information on coverage options, 
              benefits, and how to get started—making protection simple and accessible.</p>
              <ul className='flex gap-3 sm:gap-1 sm:mb-3 font-open'>
                <li className='bg-second text-primary text-sm px-3 py-2 rounded-sm cursor-pointer'>Landing Page</li>
                <li className='bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm'>Vue.js</li>
                <li className='bg-second text-primary text-sm px-3 py-2 cursor-pointer rounded-sm'>Tailwind CSS</li>
               </ul>
            </div>
          </div>
<div className='flex items-center justify-center gap-3 md:mt-3'>
  <Link href="https://chiblessed.github.io/insurance/" >
          <WorkButton>
            <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">Live</p>
          </WorkButton>
        </Link>
        <Link href="https://github.com/Chiblessed/insurance" >
          <WorkButton>
            <p className="text-lg sm:text-base transition-colors duration-500 ease-linear z-50">Github</p>
          </WorkButton>
        </Link>
</div>
        </div>

       

      </section>
    </main>
    </>
  );
};

export default Work;
