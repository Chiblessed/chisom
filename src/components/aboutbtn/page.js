"use client";
import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion, useSpring, useTime, useTransform } from "framer-motion";

export default function OrderButton({
  children,
  className,
  onClick,
  disabled,
}) {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });
  const rotateImg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #AA1A30, #AA1A30, #F6F4F1, #AA1A30 )`;
  });

  const pulse = useSpring(0, { damping: 0, mass: 5, stiffness: 10 });
  const pulseImg = useTransform(pulse, (p) => {
    return `blur(${p}px)`;
  });
  useEffect(() => {
    pulse.set(10);
  }, []);

  return (
    <div className="relative cursor-pointer">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`relative ${className} rounded-[20px] z-10 cursor-pointer`}
      >
        {children}
      </button>
      <div
        style={{
          background: rotateImg,
        }}
        className="absolute -inset-[1px] rounded-[20px]"
      />
      <motion.div
        style={{
          background: rotateImg,
          filter: pulseImg,
        }}
        className="absolute -inset-[2px] rounded-[20px]"
      />
    </div>
  );
}
