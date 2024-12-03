'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import Image1 from '../../../public/images/Screenshot (24).jpg';
import Image2 from '../../../public/images/Screenshot (25).jpg'
import Image3 from '../../../public/images/Screenshot (26).jpg';
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
        <div className={styles.projectdetails}>
        <div> 
        <Rounded  backgroundColor={"#b22222"}>
<Link href='https://chiblessed.github.io/ChessInSlum/'>
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
       
      </div>

      <div className={styles.projectsbody}>
      <Image src={Image2} width={420} height={250} alt=''/>
        <div> 
        <Rounded  backgroundColor={"#b22222"}>
        <Link href='https://chiblessed.github.io/insurance/'>
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
        <div> 
        <Rounded  backgroundColor={"#b22222"}>
        <Link href='https://chiblessed.github.io/Finpulse/'>
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
