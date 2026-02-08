"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Button from "../button/page";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import MainImage from "@/../../public/Chisom image.png";

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
      },
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
      },
    );

    return () => {
      splitText.revert();
    };
  }, []);

  return (
    <>
      <motion.main className="bg-primary text-third text-center px-20 sm:px-3 font-karla py-14 md:px-5 ">
        <section className="flex sm:flex-col items-start justify-between md:flex-col md:items-center gap-[6vw]">
          <div className="w-[500px] h-1/2 sm:w-[350px] overflow-hidden rounded-2xl">
            <Image
              src={MainImage}
              alt=""
              width={1500}
              height={1500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col items-start max-w-2xl gap-8">
            <h2 className="font-titan text-base">(ABOUT ME)</h2>
            <p className="text-base quote text-left ">
              I started my career as a frontend developer, focused on building
              interfaces and bringing designs to life with code. Over time, I
              became increasingly curious about why users interact with products
              the way they do, not just how to build them. That curiosity
              naturally led me into product design. Today, I work at the
              intersection of product design and frontend development, designing
              and building user-centered digital experiences for startups,
              organizations, and professionals. I approach every project by
              first understanding the problem, the users, and the context, then
              crafting solutions that feel intuitive, accessible, and
              intentional. My process spans from translating ideas and
              requirements into user flows, wireframes, and high-fidelity
              interfaces, to implementing them with clean, responsive frontend
              code. This dual perspective allows me to create products that are
              not only visually engaging, but also practical, scalable, and easy
              to use.
            </p>
            <p className="text-base sm:text-base  text-left quote">
              I believe good design is about clarity and ease. Every decision
              should reduce friction, guide users naturally, and support
              meaningful outcomes. Whether I’m designing a new product,
              improving usability, or refining an existing experience, my goal
              is simple: to build digital products that work, clearly,
              effectively, and with purpose. I enjoy collaborating with teams
              that value thoughtful design, attention to detail, and
              impact-driven solutions. Let’s build digital experiences users
              understand, trust, and enjoy.
            </p>
            <Button>
              <Link
                href="/about"
                className="flex items-center justify-around gap-2  text-lg transition-colors duration-500 ease-linear px-6 py-4 z-50"
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
