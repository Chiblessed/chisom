"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Lenis from "lenis";
import Navbar from "@/components/navbar/page"; 
import './globals.css';
import {Oswald ,Open_Sans} from 'next/font/google'



const open = Open_Sans({
  subsets: ['latin'],
});
const oswald = Oswald({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: true,
      lerp: 0.5, 
    });

   // <Link href="/maincv.pdf"  passHref>
   // <a download="maincv.pdf">Download CV</a>
   // </Link>

    function animate(time) {
      lenis.raf(time);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    return () => lenis.destroy();
  }, []);

  return (
    <html lang="en">
     
      <body className={`${open.className} ${oswald.className} antialiased`}>
        <ReactLenis>
          <Navbar />
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
