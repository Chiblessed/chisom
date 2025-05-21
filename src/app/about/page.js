import Image from 'next/image';
import styles from './style.module.scss';
import Image1 from '../../../public/avatar of me.png'


const About = () => {
    return ( <>
<main className="bg-primary  h-full">
      <section className="">
        <h2 className={`font-oswald text-center text-6xl text-black `}>
          About Me
        </h2>
      <div className='mt-10  mx-20 md:mx-2 lg:mx-20  sm:mx-0  sm:px-3 '>
<div>
    <p className={`font-open text-xl leading-[35px]`}>
    Hey there!👋 My name is Chisom Blessing Ohanu. I'm a creative front-end developer
     with a background in Mass Communication. With a passion for storytelling and design,
      I now build beautiful, user-friendly websites and applications that engage and inspire.
       I bring a unique blend of creativity and technical skills to the table, using frameworks
        like Vue, React, Next.js, and Nuxt.js to bring ideas to life on the web.

</p>
    <p className={`font-open text-xl leading-[35px] mt-3`}>
    Whether it's crafting seamless interfaces or diving into the latest code trends, 
    I’m always excited to learn and grow. When I'm not coding, you can usually find me
     exploring new restaurants, experimenting with flavors, or getting into the goofy 
     side of life (laughter is the best bug fix, right?). I believe creativity knows no bounds,
     and I bring that mindset to every project I take on. Let's create something awesome together!🚀</p>
</div>
      </div>
     
      </section>
    </main>    </> );
}
 
export default About;