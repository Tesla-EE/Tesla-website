import React from 'react';
import teeFrontImg from '../../assets/tee-front.jpg';
import teeBackImg from '../../assets/tee-back.jpg';
import GlowButton from '../common/GlowButton';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface MerchandiseProps {
  onOpenBuy: () => void;
}

export default function Merchandise({ onOpenBuy }: MerchandiseProps) {
  return (
    <section id="merchandise" className="py-24 relative bg-[#020203] bg-grain overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radar-circle pointer-events-none opacity-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-block mb-12 relative">
          <h2 className="font-handwriting text-5xl sm:text-7xl text-white tracking-wide rotate-[-1deg] drop-shadow-lg">
            GRAB YOUR TEES!
          </h2>
          <div className="mt-2 flex flex-col items-center">
            <div className="h-[3px] w-48 bg-white/80 rounded-full" />
            <div className="h-[2px] w-36 bg-cyan-400 rounded-full mt-1" />
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm aspect-square bg-[#080a0e] border border-white/10 rounded-2xl p-6 flex items-center justify-center overflow-hidden group-hover:border-cyan-400/50 transition-all duration-500 shadow-2xl">
              <img 
                src={teeFrontImg} 
                alt="TESLA Official T-Shirt Front View" 
                className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/60 border border-white/10 px-3 py-1 rounded text-[10px] font-mono-tech text-slate-300">
                FRONT VIEW // MINIMAL LOGO
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="font-mono-tech text-xs text-slate-400">COMBO SPECIAL</span>
              <div className="flex items-center gap-1 font-tech text-2xl font-extrabold text-white bg-white/5 border border-white/20 px-4 py-1.5 rounded-full shadow-lg">
                <span className="text-cyan-400">₹</span>399/-
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm aspect-square bg-[#080a0e] border border-white/10 rounded-2xl p-6 flex items-center justify-center overflow-hidden group-hover:border-green-400/50 transition-all duration-500 shadow-2xl">
              <img 
                src={teeBackImg} 
                alt="TESLA Official T-Shirt Back View" 
                className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute top-4 left-4 bg-black/60 border border-green-500/30 px-3 py-1 rounded text-[10px] font-mono-tech text-green-400">
                BACK VIEW // NEON MECH GRAPHIC
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="font-mono-tech text-xs text-slate-400">EARLY BIRD TEE</span>
              <div className="flex items-center gap-1 font-tech text-2xl font-extrabold text-white bg-white/5 border border-white/20 px-4 py-1.5 rounded-full shadow-lg">
                <span className="text-green-400">₹</span>349/-
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto mt-16 pt-12 pb-8 flex items-center justify-between">
          <div className="hidden sm:block w-36 lg:w-48 text-cyan-400/40 animate-float-subtle">
            <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 50 H90 M90 50 L140 20 M90 50 L150 45 M90 50 L145 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <circle cx="140" cy="20" r="4" fill="currentColor" />
              <circle cx="150" cy="45" r="5" fill="#39FF14" />
              <circle cx="145" cy="70" r="4" fill="currentColor" />
            </svg>
          </div>

          <div className="mx-auto">
            <GlowButton variant="pill" onClick={onOpenBuy}>
              <ShoppingBag className="w-5 h-5 group-hover:text-black transition-colors" />
              <span>GET YOURS NOW!</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </GlowButton>
          </div>

          <div className="hidden sm:block w-36 lg:w-48 text-green-400/40 animate-float-subtle">
            <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-x-[-1]">
              <path d="M10 50 H90 M90 50 L140 20 M90 50 L150 45 M90 50 L145 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <circle cx="140" cy="20" r="4" fill="currentColor" />
              <circle cx="150" cy="45" r="5" fill="#38bdf8" />
              <circle cx="145" cy="70" r="4" fill="currentColor" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
