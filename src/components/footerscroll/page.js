"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Flower from "@/../../public/flower.svg";

const FooterScroll = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  // Items to display in the marquee
  const items = Array(6).fill(
    <div className="flex items-center gap-[1rem] whitespace-nowrap">
      <p className="text-primary text-4xl">Let's Work Together</p>
      <div className="w-10 h-10">
        <Image src={Flower} width={200} height={200} alt="Flower" />
      </div>
    </div>
  );

  return (
    <section ref={marqueeRef} className="overflow-hidden w-full bg-third py-4">
      <div className="marquee-track flex gap-[3vw] px-[1.5vw]">
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        {/* Duplicate items to make seamless infinite scroll */}
        {items.map((item, index) => (
          <div key={`dup-${index}`}>{item}</div>
        ))}
      </div>
    </section>
  );
};

export default FooterScroll;
