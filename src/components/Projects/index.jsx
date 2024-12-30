'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import Image1 from '../../../public/images/Screenshot (24).jpg';
import Image4 from '../../../public/images/image0 (3).jpeg';
import Image2 from '../../../public/images/Screenshot (25).jpg'
import Image3 from '../../../public/images/Screenshot (26).jpg';
import Image5 from '../../../public/images/Screenshot (30) (1).jpg';

import Link from 'next/link';




const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}


export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
})
const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])


  const [modal, setModal] = useState({active: false, index: 0})  
  return (
  <main ref={container} className={styles.projects}>
    <h1>Works</h1>
    <div className={styles.body}>
      
      <div className={styles.projectsbody}>
        <Image src={Image1} width={420} height={250} alt=''/>
        <p className={styles.projectssub}>The Chess-in-Slum website, built with React.js, empowers
           underserved communities through chess education. 
          Featuring an interactive chessboard, event registration,
           donation tracking, and success stories, it&apos;s a dynamic platform for 
           engagement. Optimized for performance and accessibility, it inspires support 
           for its mission and fosters learning.</p>
        <div className={styles.projectdetails}>
        
        <Rounded  backgroundColor={"#b22222"}>
<Link href='https://tinyurl.com/2xnj87ro'>
<p>Site</p>
</Link>
    </Rounded>     
       <Rounded  backgroundColor={"#b22222"}>
        <Link href='https://github.com/Chiblessed/ChessInSlum.git'>
        <p> Github</p>
        </Link>
    </Rounded>      

        </div>
       
      </div>
      <div className={styles.projectsbody}>
        <Image src={Image4} width={420} height={250} alt=''/>
        <p className={styles.projectssub}>
        The interior decor website, built with Nuxt.js and GSAP, 
        offers a sleek, immersive experience for showcasing designs.
         With smooth scrolling and animations powered by GSAP,
          it highlights portfolio pieces, services, and client testimonials. 
          Optimized for performance and responsiveness, it creates a 
          visually captivating platform for 
        engaging clients and promoting interior design excellence.
        </p>
        <div className={styles.projectdetails}>
        
        <Rounded  backgroundColor={"#b22222"}>
<Link href='https://selhono-interior.netlify.app/'>
<p>Site</p>
</Link>
    </Rounded>     
       <Rounded  backgroundColor={"#b22222"}>
        <Link href='https://github.com/Chiblessed/selhono'>
        <p> Github</p>
        </Link>
    </Rounded>      

        </div>
       
      </div>


      <div className={styles.projectsbody}>
        <Image src={Image5} width={420} height={250} alt=''/>
        <p className={styles.projectssub}>The Lemon Wares platform, built with Vue.js,
           delivers blazing-fast web hosting for individuals and businesses.
            Featuring intuitive navigation, dynamic animations powered by Vuemotion,
             and sleek styling with TailwindCSS, it’s designed for seamless user experiences. 
             Backed by 24x7x365 support, 
          it ensures performance, reliability, and accessibility for websites of all sizes.</p>
        <div className={styles.projectdetails}>
        
        <Rounded  backgroundColor={"#b22222"}>
<Link href='https://chiblessed.github.io/lemon-wares/'>
<p>Site</p>
</Link>
    </Rounded>     
       <Rounded  backgroundColor={"#b22222"}>
        <Link href='https://github.com/Chiblessed/lemon-wares'>
        <p> Github</p>
        </Link>
    </Rounded>      

        </div>
       
      </div>


      <div className={styles.projectsbody}>
      <Image src={Image2} width={420} height={250} alt=''/>
      <p className={styles.projectssub}>
      The insurance landing page, built with Vue.js,
       provides a clean and user-friendly interface to 
       showcase services and benefits. Featuring interactive forms, 
       clear CTAs, and responsive design, it simplifies insurance
        navigation for users. Optimized for performance,
       it effectively engages visitors and drives conversions.
      </p>
        <div className={styles.projectdetails}> 
        <Rounded  backgroundColor={"#b22222"}>
        <Link href='https://tinyurl.com/24fmj7ub'>
<p>Site</p>
</Link>    </Rounded>
            <Rounded  backgroundColor={"#b22222"}>
            <Link href='https://github.com/Chiblessed/insurance.git'>
        <p> Github</p>
        </Link>  
          </Rounded>
        </div>
        
      </div>

      <div className={styles.projectsbody}>
      <Image src={Image3} width={420} height={250} alt=''/>
      <p className={styles.projectssub}>
      The FinPulse website, built with React.js and 
      Framer Motion, delivers a dynamic and engaging experience 
      for showcasing fintech solutions. With smooth animations 
      and intuitive navigation, it highlights services, features, 
      and client success stories. Optimized for performance and responsiveness, 
      it reflects innovation and builds trust with users.
      </p>
        <div className={styles.projectdetails}> 
        <Rounded  backgroundColor={"#b22222"}>
        <Link href='https://tinyurl.com/27lvz99d'>
<p>Site</p>

</Link>    </Rounded>
    <Rounded  backgroundColor={"#b22222"}>
    <Link href='https://github.com/Chiblessed/Finpulse.git'>
        <p> Github</p>
        </Link> 
            </Rounded>       
     </div>
      </div>

      

    </div>
        
    <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
  </main>
  )
}
