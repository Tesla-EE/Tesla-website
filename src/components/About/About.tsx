import React from 'react';
import Impact from '../Impact/Impact';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="pt-0 pb-0 relative bg-[#050506] bg-grain overflow-hidden">

      {/* SECTION 1 — IMPACT (Full Screen Width) */}
      <div className="w-full max-w-full px-0 mb-8 sm:mb-10 lg:mb-12 relative z-10">
        <Impact />
      </div>

      {/* SECTION 2 — ABOUT (100% Full Screen Width Edge-to-Edge) */}
      <div className="w-full max-w-none px-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full px-6 pt-4 pb-8 sm:px-12 sm:pt-6 sm:pb-12 md:px-16 md:pt-8 md:pb-16 lg:px-20 lg:pt-10 lg:pb-20 xl:px-24 xl:pt-12 xl:pb-24 shadow-2xl shadow-black/90 select-none bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/textures/abouttext.png')",
            backgroundSize: '100% 100%',
          }}
        >
          {/* Section Tag */}
          <div className="flex items-center gap-2 mb-6 sm:mb-8 font-mono-tech text-xs sm:text-sm tracking-[0.25em] text-slate-400">
            <span className="text-slate-500">—</span> ABOUT
          </div>

          {/* Main Question Heading */}
          <div className="relative mb-8 sm:mb-12">
            <h2 className="font-tech text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-black text-white tracking-tight leading-[1.05] uppercase drop-shadow-md">
              WHAT IS ACTUALLY <br />
              <span className="relative inline-block mt-2">
                TESLA?
                {/* Organic Triple-Stroke Brush Underline */}
                <svg
                  className="absolute -bottom-4 sm:-bottom-6 left-0 w-full h-5 sm:h-7 text-white/90"
                  viewBox="0 0 240 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 14C60 6 180 5 236 12" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M12 18C75 11 165 11 228 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
                  <path d="M25 22C90 16 150 16 215 21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
                </svg>
              </span>
            </h2>
          </div>

          {/* Narrative Content */}
          <div className="font-tech text-base sm:text-xl md:text-2xl lg:text-3xl text-slate-300 font-normal leading-relaxed tracking-wide space-y-4 max-w-5xl pt-4 sm:pt-6">
            <p>
              <strong className="text-white font-medium">TESLA isn't just an event;</strong> it's a surge of innovation and energy! Inspired by Nikola Tesla's genius, it brings together the brightest minds to showcase groundbreaking ideas, tackle high-voltage challenges, and spark the future. With cutting-edge projects, power-packed workshops, expert panels, and electrifying hackathons, TESLA is where innovation meets opportunity. Be part of the revolution—<span className="text-white font-semibold">charge ahead with TESLA!</span>
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
