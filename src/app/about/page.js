import Image from 'next/image';
import styles from './style.module.scss';
import Image1 from '../../../public/avatar of me.png'


const About = () => {
    return ( <>
<main className="bg-white -z-10 -mt-32 ">
      <section className="h-[100vh] ">
        <h2 className={`${styles.heading} text-center text-6xl text-black pt-36`}>
          About Me
        </h2>
      <div className='h-[100vh] flex items-center justify-center gap-20 mx-20 md:mx-2 lg:mx-20 md:gap-3 lg:gap-20 sm:mx-0 sm:gap-2 sm:flex-col sm:pt-[50rem]'>
<Image src={Image1} width={400} height={300} />
<div>
    <p className={`${styles.heading2} text-xl leading-[35px]`}>
    Hey there!👋 My name is Chisom Blessing Ohanu. I'm a a creative and adaptable front-end developer
     with a background in Mass Communication. With a passion for storytelling
      and design, I now build beautiful, user-friendly websites and applications 
      that engage and inspire. I bring a unique blend of creativity and technical 
      skills to the table, 
    using frameworks like Vue, React, Next.js, and Nuxt.js to bring ideas to life on the web.
    </p>
    <p className={`${styles.heading2} text-xl leading-[35px] mt-3`}>
Whether it's crafting seamless interfaces or diving into the latest code trends,
 I’m always excited to learn and grow. When I'm not coding, you can usually find 
 me exploring new restaurants, experimenting with flavors, or getting into the 
 goofy side of life (laughter is the best bug fix, right?). I believe creativity knows no bounds, 
and I bring that mindset to every project I take on. Let's create something awesome together!🚀
</p>
</div>
      </div>
     
      </section>
    </main>    </> );
}
 
export default About;