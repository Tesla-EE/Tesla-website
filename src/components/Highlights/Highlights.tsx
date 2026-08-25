import React from 'react';
import { highlightsData, HighlightItem } from '../../data/highlights';
import { motion } from 'framer-motion';

interface HighlightsProps {
  onSelectCard: (item: HighlightItem) => void;
}

export default function Highlights({ onSelectCard }: HighlightsProps) {
  return (
    <section id="highlights" className="py-24 sm:py-32 lg:py-36 relative bg-[#040405] bg-grain overflow-hidden">
      
      {/* Subtle background celestial radar rings */}

      <div className="max-w-7xl xl:max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Outer Section Frame with Top HUD Notch */}
        <div className="relative border border-white/[0.08] rounded-2xl p-8 sm:p-14 lg:p-18 bg-[#07070a]/90 backdrop-blur-md shadow-2xl">
          
          {/* Top Notch Accent (inspired by screenshots) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 sm:w-60 h-4 bg-[#040405] border-b border-x border-white/[0.08] rounded-b-lg flex items-center justify-center">
            <div className="w-12 h-[1px] bg-white/25" />
          </div>

          {/* Section Header */}
          <div className="relative mb-14 sm:mb-20 flex items-center">
            {/* Background Watermark Text */}
            <div className="absolute left-16 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.035]">
              <span className="font-tech text-7xl sm:text-9xl lg:text-[11rem] font-bold tracking-[0.2em] text-stroke-ghost uppercase">
                HIGHLIGHTS
              </span>
            </div>

            {/* Target Reticle Icon on Left */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 border border-white/20 rounded-lg flex items-center justify-center mr-5 sm:mr-8 text-white/70 flex-shrink-0 select-none">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="1" />
                <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </div>

            {/* Section Title */}
            <h2 className="font-tech text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[0.12em] text-white uppercase select-none">
              HIGHLIGHTS
            </h2>
          </div>

          {/* 3 Visual Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {highlightsData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                onClick={() => onSelectCard(item)}
                className="group cursor-pointer flex flex-col items-center select-none"
              >
                {/* HUD Framed Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/15 bg-black/60 p-2 transition-all duration-500 group-hover:border-white/40 group-hover:shadow-[0_0_35px_rgba(255,255,255,0.1)]">
                  
                  {/* Chamfered Corners Cut */}
                  <div className="w-full h-full overflow-hidden rounded-lg relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:scale-105 group-hover:contrast-110 group-hover:brightness-100 transition-all duration-700 ease-out"
                    />

                    {/* Subtle Scanline Overlay on Image */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 pointer-events-none" />
                  </div>

                  {/* Corner HUD Bracket Ticks on the Image Frame */}
                  <div className="absolute top-3 left-3 text-[9px] font-mono-tech text-white/40 pointer-events-none">┌</div>
                  <div className="absolute top-3 right-3 text-[9px] font-mono-tech text-white/40 pointer-events-none">┐</div>
                  <div className="absolute bottom-3 left-3 text-[9px] font-mono-tech text-white/40 pointer-events-none">└</div>
                  <div className="absolute bottom-3 right-3 text-[9px] font-mono-tech text-white/40 pointer-events-none">┘</div>

                  {/* Bottom Technical Scale Indicator (— · · —) */}
                  <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-2 pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
                    <div className="w-8 h-[1px] bg-white" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    <div className="w-8 h-[1px] bg-white" />
                  </div>
                </div>

                {/* Card Title Below Frame */}
                <h3 className="font-tech text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.18em] text-white/90 group-hover:text-white transition-colors uppercase mt-6 text-center">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
