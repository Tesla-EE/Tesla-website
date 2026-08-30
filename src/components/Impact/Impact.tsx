import React from 'react';
import { motion } from 'framer-motion';

export default function Impact() {
  const stats = [
    { value: '5000+', label: 'FOOTFALL' },
    { value: '40+', label: 'EVENTS' },
    { value: '100K', label: 'PRIZE\nMONEY' },
    { value: '60+', label: 'COLLEGES' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full relative bg-tech-grid bg-[#050506] bg-grain overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_58%)]" />

      {/* =========================================================
          TOP 3D NOTCHED HORIZONTAL DIVIDER LINE
          ========================================================= */}
      <div className="relative w-full flex items-center justify-center mb-4 sm:mb-6">
        {/* Left Hairline */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-white/30" />

        {/* Center Trapezoid HUD Notch */}
        <div className="relative px-4">
          <svg width="64" height="12" viewBox="0 0 64 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/40">
            <path d="M0 0H16L24 10H40L48 0H64" stroke="currentColor" strokeWidth="1" fill="#050506" />
            <line x1="28" y1="5" x2="36" y2="5" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Right Hairline */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-white/20 to-white/30" />
      </div>

      {/* =========================================================
          MAIN HUD GRID: IMPACT BOX + 4 STAT CARDS
          ========================================================= */}
      <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 py-2 sm:py-3">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">

          {/* Main Impact Card */}
          <div className="col-span-2 lg:col-span-4 relative group">
            <div className="absolute -top-2 left-0 font-mono-tech text-[10px] text-white/30">+</div>
            <div className="absolute -top-2 right-0 font-mono-tech text-[10px] text-white/30">+</div>
            <div className="absolute -bottom-2 left-0 font-mono-tech text-[10px] text-white/30">+</div>
            <div className="absolute -bottom-2 right-0 font-mono-tech text-[10px] text-white/30">+</div>

            <div className="relative w-full h-40 sm:h-48 lg:h-60 bg-[#09090b] border border-white/12 rounded-[12px] flex items-center justify-center p-6 transition-all duration-300 group-hover:border-white/30 group-hover:bg-[#0d0d12] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.04)] overflow-hidden">
              <div className="absolute inset-[10px] border border-white/[0.06] rounded-[8px]" />
              <div className="absolute top-3 left-3 h-px w-8 bg-white/25 rotate-45" />
              <div className="absolute top-3 right-3 h-px w-8 bg-white/25 -rotate-45" />
              <div className="absolute bottom-3 left-3 h-px w-8 bg-white/25 rotate-45" />
              <div className="absolute bottom-3 right-3 h-px w-8 bg-white/25 -rotate-45" />

              <span
                className="relative font-thomeo text-3xl sm:text-5xl lg:text-6xl tracking-[0.28em] text-white/95 uppercase drop-shadow-[0_2px_20px_rgba(255,255,255,0.12)] group-hover:text-white transition-colors"
                style={{ fontFamily: "'Thomeo', sans-serif" }}
              >
                IMPACT
              </span>
            </div>
          </div>

          {/* Stat Cards */}
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * (idx + 1) }}
              viewport={{ once: true }}
              className="col-span-1 lg:col-span-2 relative group"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 font-mono-tech text-[10px] text-white/30">+</div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono-tech text-[10px] text-white/30">+</div>

              <div className="relative w-full h-40 sm:h-48 lg:h-60 bg-[#09090b] border border-white/12 rounded-[12px] flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:border-white/30 group-hover:bg-[#0d0d12] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.03)] overflow-hidden">
                <div className="absolute inset-[10px] border border-white/[0.06] rounded-[8px]" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between opacity-40">
                  <div className="w-6 h-px bg-white/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  <div className="w-6 h-px bg-white/40" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-40">
                  <div className="w-6 h-px bg-white/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  <div className="w-6 h-px bg-white/40" />
                </div>

                <div className="absolute top-3 right-3 h-5 w-px bg-white/30 rotate-45" />
                <div className="absolute bottom-3 left-3 h-5 w-px bg-white/30 rotate-45" />

                <div className="relative z-10 text-center">
                  <div className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-normal text-white tracking-tight leading-none drop-shadow-md transition-colors">
                    {stat.value}
                  </div>

                  <div className="font-tacticsans text-[10px] sm:text-xs lg:text-sm tracking-[0.2em] text-slate-300 mt-2.5 sm:mt-3 uppercase font-medium text-center whitespace-pre-line leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </motion.div>
  );
}
