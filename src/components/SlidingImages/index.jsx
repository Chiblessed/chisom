import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';

import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import Image1 from '../../../public/images/Screenshot (24).jpg';
import Image2 from '../../../public/images/Screenshot (25).jpg'
import Image3 from '../../../public/images/Screenshot (26).jpg'
const slider1 = [
    {
        color: "#e3e5e7",
        src: "c2.jpg"
    },
    {
        color: "#d6d7dc",
        src: "decimal.jpg"
    },
    {
        color: "#e3e3e3",
        src: "funny.jpg"
    },
    {
        color: "#21242b",
        src: "google.jpg"
    }
]

const slider2 = [
    {
        color: "#d4e3ec",
        src: "maven.jpg"
    },
    {
        color: "#e5e0e1",
        src: "panda.jpg"
    },
    {
        color: "#d7d4cf",
        src: "powell.jpg"
    },
    {
        color: "#e1dad6",
        src: "wix.jpg"
    }
]

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div>
            <main ref={container} className={styles.projects}>
    <h1>Works</h1>
    <div className={styles.body}>
      <div className={styles.projectsbody}>
        <Image src={Image1} width={450} height={250} alt=''/>
        <p></p>
        <div> 
        <Rounded>
      <p>Site</p>
    </Rounded>     
       <Rounded>
      <p> Github</p>
    </Rounded>      
      </div>

      </div>

      <div className={styles.projectsbody}>
      <Image src={Image2} width={450} height={250} alt=''/>
        <p></p>
        <div> 
        <Rounded>
      <p>Site</p>
    </Rounded>
            <Rounded>
      <p> Github</p>
    </Rounded>
        </div>
        
      </div>

      <div className={styles.projectsbody}>
      <Image src={Image3} width={450} height={250} alt=''/>
        <p></p>
        <div> 
        <Rounded>
      <p>Site</p>
    </Rounded>
    <Rounded>
      <p> Github</p>
    </Rounded>       
     </div>
      </div>

      

    </div>
        
 
  </main>
                </motion.div>
             
                <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
        </div>
    )
}
