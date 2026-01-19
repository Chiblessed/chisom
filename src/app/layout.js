"use client";

import React, { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Lenis from "lenis";
import gsap from "gsap";
import Navbar from "@/components/navbar/page";
import "./globals.css";
import { Titan_One, Open_Sans, Lexend } from "next/font/google";

const karla = Lexend({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
const titan = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  const metadata = {
    title: "Chisom Ohanu Portfolio",
    description: "Chisom Ohanu Portfolio",
    icons: {
      icon: "/favicon.ico",
    },
  };

  return (
    <html lang="en">
      <body className={`${karla.className} ${titan.className} antialiased`}>
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
          <Navbar />
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
