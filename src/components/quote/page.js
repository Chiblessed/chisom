"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Button from "../button/page";
import { motion } from "framer-motion";
import Link from "next/link";

const MiniAbout = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitText = new SplitType(".quote", { types: "words, chars" });
    gsap.fromTo(
      splitText.chars,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.4,
        delay: 0.3,
        stagger: 0.05,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".quote",
          start: "top bottom",
          end: "top 55%",
          scrub: true,
        },
      }
    );
    const splitText2 = new SplitType(".about", { types: "words, chars" });

    gsap.fromTo(
      ".about .word",
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
    <>
      <motion.main className=" text-second text-center  py-14 bg-primary px-16 sm:px-3 sm:h-[70%] md:px-3 lg:px-16">
        <section className="flex sm:flex-col items-center justify-center  gap-1">
          <h1 className="text-3xl px-3 sm:px-0  quote text-left font-oswald">
            Helping brands, businesses, and organizations build clean,
            responsive, and user-focused websites. I create digital experiences
            that are not just visually appealing but also easy to use, helping
            you connect better with your audience and grow your impact online.
          </h1>
          <div className="flex flex-col items-end gap-8">
            <p className="text-sm sm:text-base font-open text-left about">
              From building smooth, high-performing interfaces to ensuring your
              website is fast, accessible, and mobile-friendly. I bring both
              creativity and technical skill to every project. Whether you’re
              launching something new or refreshing your existing site, I’m here
              to help you make a strong and lasting impression. Let’s work
              together to turn your ideas into powerful online experiences that
              users love.
            </p>
            <Button>
              <Link
                href="/about"
                className="text-2xl transition-colors duration-500 ease-linear z-50"
              >
                <p>About me</p>
              </Link>
            </Button>
          </div>
        </section>
      </motion.main>
    </>
  );
};

export default MiniAbout;
