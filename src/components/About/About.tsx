import React from 'react';
import Impact from '../Impact/Impact';
import TechContainer from '../common/TechContainer';
import { Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#050608] bg-grain overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Impact />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <TechContainer>
            <div className="absolute top-6 right-6 text-slate-600 group-hover:text-cyan-400 transition-colors pointer-events-none">
              <div className="w-10 h-10 border border-slate-700 rounded flex items-center justify-center">
                <Target className="w-6 h-6 animate-pulse" />
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4 font-mono-tech text-xs tracking-widest text-slate-400">
              <span className="text-cyan-400">—</span> ABOUT
            </div>

            <div className="relative mb-8">
              <h2 className="font-tech text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase">
                WHAT IS ACTUALLY <br className="hidden sm:block"/>
                <span className="text-white relative inline-block">
                  TESLA?
                  <svg className="absolute -bottom-3 left-0 w-full h-4 text-cyan-400" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 15C50 5 150 5 195 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
            </div>

            <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-normal pt-4">
              <strong className="text-white font-semibold">TESLA isn't just an event;</strong> it's a surge of innovation and energy! 
              Inspired by Nikola Tesla's genius, it brings together the brightest minds to showcase groundbreaking ideas, 
              tackle high-voltage challenges, and spark the future. With cutting-edge projects, power-packed workshops, 
              expert panels, and electrifying hackathons, TESLA is where innovation meets opportunity. 
              Be part of the revolution—<span className="text-cyan-400 font-semibold">charge ahead with TESLA!</span>
            </p>

            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />
          </TechContainer>
        </motion.div>
      </div>
    </section>
  );
}
