'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Hero from "@/app/home/page";
import Preloader from '@/components/preloader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
       
          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
<div>
<AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
  <Hero />
    </div>
  );
}
