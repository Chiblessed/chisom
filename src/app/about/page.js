"use client";

import { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";

const About = () => {
  useEffect(() => {
    const splitText = new SplitType(".aboutmain", { types: "words, chars" });

    gsap.fromTo(
      ".aboutmain .word",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.4,
        ease: "easeInOut",
      }
    );

    return () => {
      splitText.revert();
    };
  }, []);

  return (
    <main className="bg-primary -z-10 h-full">
      <section className="h-screen sm:h-full">
        <h2 className="font-oswald text-center text-6xl text-black">
          About Me
        </h2>
        <div className="mt-10 mx-20 md:mx-2 lg:mx-20 sm:mx-0 sm:px-3">
          <div>
            <p className="font-open text-xl leading-[35px] aboutmain text-wrap">
              Hey there!👋 My name is Chisom Blessing Ohanu. I'm a creative
              front-end developer with a background in Mass Communication. With
              a passion for storytelling and design, I now build beautiful,
              user-friendly websites and applications that engage and inspire. I
              bring a unique blend of creativity and technical skills to the
              table, using frameworks like Vue, React, Next.js, and Nuxt.js to
              bring ideas to life on the web.
            </p>
            <p className="font-open text-xl leading-[35px] mt-3 aboutmain">
              Whether it's crafting seamless interfaces or diving into the
              latest code trends, I’m always excited to learn and grow. When I'm
              not coding, you can usually find me exploring new restaurants,
              experimenting with flavors, or getting into the goofy side of life
              (laughter is the best bug fix, right?). I believe creativity knows
              no bounds, and I bring that mindset to every project I take on.
              Let's create something awesome together!🚀
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
