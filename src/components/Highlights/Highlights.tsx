import React from 'react';
import { highlightsData, HighlightItem } from '../../data/highlights';
import SectionHeader from '../common/SectionHeader';
import { motion } from 'framer-motion';

interface HighlightsProps {
  onSelectCard: (item: HighlightItem) => void;
}

export default function Highlights({ onSelectCard }: HighlightsProps) {
  return (
    <section id="highlights" className="py-24 relative bg-[#030304] bg-grain overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          title="HIGHLIGHTS" 
          tag="02 // MAJOR ATTRACTIONS" 
          watermark="HIGHLIGHTS" 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlightsData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              onClick={() => onSelectCard(item)}
              className="bg-[#090b0e] border border-white/15 rounded-lg overflow-hidden group cursor-pointer hover:border-cyan-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-950/40 relative"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black border-b border-white/10 p-2">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="h-[2px] w-8 bg-cyan-400/80" />
                  <div className="text-[9px] font-mono-tech text-cyan-400/80">✦ HUD.SYS</div>
                  <div className="h-[2px] w-8 bg-cyan-400/80" />
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="font-tech text-2xl font-bold tracking-widest text-white group-hover:text-cyan-400 transition-colors uppercase">
                  {item.title}
                </h3>
                <p className="font-mono-tech text-xs text-slate-400 tracking-wider mt-1">
                  {item.subtitle}
                </p>
              </div>

              <div className="absolute top-2 left-2 text-[8px] font-mono-tech text-slate-600 group-hover:text-cyan-400">┌</div>
              <div className="absolute top-2 right-2 text-[8px] font-mono-tech text-slate-600 group-hover:text-cyan-400">┐</div>
              <div className="absolute bottom-2 left-2 text-[8px] font-mono-tech text-slate-600 group-hover:text-cyan-400">└</div>
              <div className="absolute bottom-2 right-2 text-[8px] font-mono-tech text-slate-600 group-hover:text-cyan-400">┘</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
