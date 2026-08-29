import React from 'react';
import { motion } from 'framer-motion';

export default function Impact() {
  const stats = [
    { value: '5000+', label: 'FOOTFALL' },
    { value: '40+', label: 'EVENTS' },
    { value: '150K', label: 'PRIZE\nMONEY' },
    { value: '60+', label: 'COLLEGES' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full relative"
    >
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
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">

          {/* -------------------------------------------------------
              LEFT: MAIN IMPACT BOX (Occupies ~4/12 cols on desktop)
              ------------------------------------------------------- */}
          <div className="col-span-2 lg:col-span-4 relative group">
            {/* Outer HUD Corner Ticks */}
            <div className="absolute -top-2 left-0 font-mono-tech text-[10px] text-white/30">+</div>
            <div className="absolute -top-2 right-0 font-mono-tech text-[10px] text-white/30">+</div>
            <div className="absolute -bottom-2 left-0 font-mono-tech text-[10px] text-white/30">+</div>
            <div className="absolute -bottom-2 right-0 font-mono-tech text-[10px] text-white/30">+</div>

            {/* Chamfered Box Container */}
            <div className="relative w-full h-36 sm:h-44 lg:h-52 bg-[#08080a] border border-white/20 rounded-lg flex items-center justify-center p-6 transition-all duration-300 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.04)]">

              {/* Inner Double Hairline Border with Chamfer Cuts */}
              <div className="absolute inset-2 border border-white/[0.08] rounded pointer-events-none" />

              {/* Top-Left Diagonal Slashing Ticks (///) */}
              <div className="absolute top-3 left-3 flex items-center gap-1 opacity-50">
                <div className="w-[1px] h-3 bg-white -rotate-45" />
                <div className="w-[1px] h-3 bg-white -rotate-45" />
                <div className="w-[1px] h-3 bg-white -rotate-45" />
              </div>

              {/* Top-Right Chamfer Cut Line */}
              <div className="absolute top-2.5 right-2.5 w-4 h-[1px] bg-white/40 rotate-45" />

              {/* Bottom-Left Tech Bracket Corner */}
              <div className="absolute bottom-2.5 left-2.5 text-[9px] font-mono-tech text-white/40">
                └─
              </div>

              {/* Bottom-Right Calibration Dot Pattern (· · · · ·) */}
              <div className="absolute bottom-3 right-4 flex items-center gap-1.5 opacity-40">
                <div className="w-1 h-1 rounded-full bg-white" />
                <div className="w-1 h-1 rounded-full bg-white" />
                <div className="w-1 h-1 rounded-full bg-white" />
                <div className="w-1 h-1 rounded-full bg-white" />
                <div className="w-1 h-1 rounded-full bg-white" />
              </div>

              {/* Centered I M P A C T Title */}
              <span
                className="font-thomeo text-3xl sm:text-5xl lg:text-6xl tracking-[0.38em] text-white/95 uppercase drop-shadow-[0_2px_20px_rgba(255,255,255,0.15)] group-hover:text-white transition-colors"
                style={{ fontFamily: "'Thomeo', sans-serif" }}
              >
                IMPACT
              </span>
            </div>
          </div>

          {/* -------------------------------------------------------
              RIGHT: 4 OCTAGONAL STAT CARDS (2 cols each on desktop)
              ------------------------------------------------------- */}
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * (idx + 1) }}
              viewport={{ once: true }}
              className="col-span-1 lg:col-span-2 relative group"
            >
              {/* Outer Calibration Crosshair Marks (+) */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 font-mono-tech text-[10px] text-white/30">+</div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono-tech text-[10px] text-white/30">+</div>

              {/* Stat Box Enclosure */}
              <div className="relative w-full h-36 sm:h-44 lg:h-52 bg-[#08080a] border border-white/20 rounded-lg flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:border-white/40 group-hover:bg-[#0c0c10] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.03)]">

                {/* Inner Chamfer Border */}
                <div className="absolute inset-1.5 border border-white/[0.08] rounded pointer-events-none" />

                {/* Top Corner Angled Slits */}
                <div className="absolute top-2.5 right-2.5 w-3 h-[1px] bg-white/40 rotate-45" />
                <div className="absolute top-2.5 left-2.5 w-3 h-[1px] bg-white/40 -rotate-45" />

                {/* Bottom Corner Angled Slits */}
                <div className="absolute bottom-2.5 left-2.5 w-3 h-[1px] bg-white/40 rotate-45" />
                <div className="absolute bottom-2.5 right-2.5 w-3 h-[1px] bg-white/40 -rotate-45" />

                {/* Top Edge Tick Scale Line */}
                <div className="absolute top-1.5 inset-x-6 flex items-center justify-between opacity-30">
                  <div className="w-2 h-[1px] bg-white" />
                  <div className="w-1 h-1 rounded-full bg-white" />
                  <div className="w-2 h-[1px] bg-white" />
                </div>

                {/* Bottom Edge Tick Scale Line */}
                <div className="absolute bottom-1.5 inset-x-6 flex items-center justify-between opacity-30">
                  <div className="w-2 h-[1px] bg-white" />
                  <div className="w-1 h-1 rounded-full bg-white" />
                  <div className="w-2 h-[1px] bg-white" />
                </div>

                {/* Large Condensed Stat Value */}
                <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-none drop-shadow-md group-hover:text-white transition-colors">
                  {stat.value}
                </div>

                {/* Uppercase Monospace Subtitle */}
                <div className="font-tacticsans text-[10px] sm:text-xs lg:text-sm tracking-[0.22em] text-slate-300 mt-2.5 sm:mt-3 uppercase font-medium text-center whitespace-pre-line leading-tight">
                  {stat.label}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </motion.div>
  );
}
