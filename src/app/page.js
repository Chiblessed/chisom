"use client"
import { useState, useEffect } from "react";
import Hero from "@/app/home/page";
import Index from "@/components/preloader";
import { AnimatePresence } from "framer-motion";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
setTimeout(() => {
  setIsLoading(false);
  document.body.style.cursor = 'default'
  window.scrollTo(0,0);
}, 2000)
  }, [])
  return (
<div>
<AnimatePresence mode='wait'>
        {isLoading && <Index />}
      </AnimatePresence>
  
  <Hero />
    </div>
  );
}
