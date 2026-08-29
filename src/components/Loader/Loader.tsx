import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  progress: number;
}

export default function Loader({ progress }: LoaderProps) {

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050506] text-white overflow-hidden"
    >
      {/* Background Grid / Noise (Optional, keeping it clean) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10"
        >
          <img
            src="/images/Logo.png"
            alt="TESLA '26"
            className="h-28 sm:h-40 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          />
        </motion.div>

        {/* Progress Container */}
        <div className="w-full flex flex-col gap-3">
          <div className="flex justify-between items-end font-mono-tech text-xs tracking-widest text-slate-400 uppercase">
            <span>System Initialization</span>
            <span className="text-white">{Math.round(progress)}%</span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              style={{ width: `${progress}%` }}
              layout
            />
          </div>

          <div className="flex justify-between items-start font-tacticsans text-[9px] tracking-[0.2em] text-slate-500 uppercase mt-1">
            <span>Loading Core Assets</span>
            <span>Est. 2026</span>
          </div>
        </div>
      </div>
      
      {/* Corner Brackets */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-white/20" />
      <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-white/20" />
      <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-white/20" />
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/20" />
    </motion.div>
  );
}
