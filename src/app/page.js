"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/app/home/page";
import Preloader from "@/components/preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div key="preloader">
            <Preloader />
          </motion.div>
        ) : (
          <motion.div key="hero">
            <Hero />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
