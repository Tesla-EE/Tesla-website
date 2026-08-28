import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Highlights from '../components/Highlights/Highlights';
import Events from '../components/Events/Events';
import Merchandise from '../components/Merchandise/Merchandise';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030304] text-white selection:bg-slate-300 selection:text-black font-body overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Events />
        {/* <Merchandise /> */}
      </main>

      <Footer />
    </div>
  );
}
