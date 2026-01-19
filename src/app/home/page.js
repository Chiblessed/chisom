"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import BannerImg from "@/../../public/b banner.png";
import InfiniteScroll from "@/../../src/components/scroll/page";
import MiniAbout from "../../components/quote/page";
import Work from "@/components/work/page";
import Footer from "@/components/footer/page";
import SplitType from "split-type";
import AboutBtn from "@/components/aboutbtn/page";

const Hero = () => {
  const container = useRef(null);
  const contactRef = useRef(null);
  const titleRef = useRef(null);
  const dotRef = useRef(null);

  const handleHireClick = () => {
    const link = document.createElement("a");
    link.href = "/maincv.pdf";
    link.download = "Chisom_CV.pdf";
    link.click();
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.fromTo(".hero-image", { opacity: 0 }, { opacity: 1 });
      const splitText = new SplitType(".more", { types: "words, chars" });
      tl.fromTo(
        splitText.words,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.1,
          delay: 0.01,
          stagger: 0.05,
          ease: "power1.out",
        },
        "+=0.2"
      );

      tl.fromTo(
        ".header",
        {
          y: 0,
          opacity: 0,
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 2,
          delay: 0.2,
          ease: "power2.inOut",
        },
        "-=0.5"
      );

      tl.fromTo(
        ".hero-btn",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
        },
        "-=0.1"
      );

      gsap.to(dotRef.current, {
        scale: 0.6,
        backgroundColor: "#AA1A30",
        boxShadow: "0 0 10px #AA1A30",
        duration: 0.15,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        repeatDelay: 0.3,
      });
    }, container);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <main
        ref={container}
        className="h-screen relative sm:h-full md:h-1/2 overflow-hidden sm:px-3"
      >
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={BannerImg}
            alt="banner"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        <section className="pt-10 sm:px-3 px-20 w-full h-screen flex flex-col items-center justify-center font-karla">
          <div className="flex pt-36 relative items-start justify-start  w-full pb-20">
            <div className="flex flex-col">
              <div className="bg-primary w-fit py-2 px-3 rounded-2xl flex items-center justify-center gap-3">
                <div ref={dotRef} className="w-3 h-3 rounded-full bg-second" />
                <p className="text-xs font-semibold">
                  Available for Opportunities
                </p>
              </div>
              <p
                className="max-w-lg pt-2 more text-zinc-900         [text-shadow:4px_4px_12px_rgba(0,0,0,0.35)]
 text-base"
              >
                Hello, I’m Chisom Ohanu, Product Designer & Frontend Developer.
                I design and build user-focused websites and web apps that solve
                problems, delight users, and bring ideas to life.
                <span className="font-semibold">
                  {" "}
                  Where your ideas stop being concepts and start shaping
                  experiences people actually use and enjoy.
                </span>
              </p>
              <div className="flex sm:flex-col gap-4 pt-9 hero-btn">
                <AboutBtn
                  className="px-9 bg-primary py-4 w-full"
                  onClick={handleHireClick}
                >
                  Download CV
                </AboutBtn>

                <button
                  onClick={() => {
                    const subject = encodeURIComponent("Let's Build Your Idea");
                    const body = encodeURIComponent(
                      "Hi, my name is [Your Name], and I want to discuss building my idea with you."
                    );
                    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
                  }}
                  className="bg-second px-6 py-3 rounded-2xl text-primary cursor-pointer"
                >
                  Let's Build Your Idea
                </button>
              </div>
            </div>
          </div>

          <h2
            className="
        text-[150px] font-titan font-semibold header
        w-full sm:text-[40px] sm:pb-8 md:text-[150px]
        whitespace-nowrap text-center cursor-pointer relative z-20
        text-second
        [text-shadow:4px_4px_12px_rgba(0,0,0,0.35)]
      "
          >
            Chisom Ohanu
          </h2>
        </section>
      </main>

      <InfiniteScroll />
      <MiniAbout />
      <Work />
      <Footer contactRef={contactRef} />
    </>
  );
};

export default Hero;
