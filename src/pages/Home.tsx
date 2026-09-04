import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Highlights from '../components/Highlights/Highlights';
import Events from '../components/Events/Events';
import Merchandise from '../components/Merchandise/Merchandise';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Loader from '../components/Loader/Loader';
import Countdown from '../components/Countdown/Countdown';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [heroProgress, setHeroProgress] = useState(0);

  // Lock scroll while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  // Complete loading when hero reports 100%
  useEffect(() => {
    if (heroProgress >= 100) {
      setTimeout(() => setIsLoading(false), 300);
    }
  }, [heroProgress]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" progress={heroProgress} />}
      </AnimatePresence>
      
      <div className={`min-h-screen bg-[#030304] text-white selection:bg-slate-300 selection:text-black font-body w-full transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero onProgress={setHeroProgress} />
          <About />
          
          <Events />
          <Merchandise />
          <Countdown />
          <Highlights />
        </main>

        <Footer />
      </div>
    </>
  );
}
