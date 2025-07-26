"use client";

import React, { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Lenis from "lenis";
import gsap from "gsap";
import Navbar from "@/components/navbar/page";
import "./globals.css";
import { Oswald, Open_Sans } from "next/font/google";

const open = Open_Sans({
  subsets: ["latin"],
});
const oswald = Oswald({
  subsets: ["latin"],
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

  return (
    <html lang="en">
      <body className={`${open.className} ${oswald.className} antialiased`}>
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
          <Navbar />
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
