"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Lenis from "lenis";
import Navbar from "@/components/navbar/page"; 
import './globals.css';


export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: true,
      lerp: 0.5, 
    });

    function animate(time) {
      lenis.raf(time);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    return () => lenis.destroy();
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=DM+Serif+Text:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ReactLenis>
          <Navbar />
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
