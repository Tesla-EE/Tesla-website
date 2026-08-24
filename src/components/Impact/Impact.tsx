import React from 'react';
import { Sparkles, Award, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Impact() {
  const stats = [
    { value: '5000+', label: 'FOOTFALL', icon: Users },
    { value: '40+', label: 'EVENTS', icon: BookOpen },
    { value: '150K', label: 'PRIZE MONEY', icon: Award },
    { value: '60+', label: 'COLLEGES', icon: Sparkles },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
      <div className="col-span-2 sm:col-span-3 lg:col-span-1 bg-black/60 border border-white/15 p-4 rounded-sm flex items-center justify-center relative group hover:border-cyan-400 transition-colors">
        <span className="font-tech text-2xl font-extrabold tracking-[0.3em] text-white group-hover:text-cyan-400 transition-colors">
          IMPACT
        </span>
        <div className="absolute top-1 left-1 text-[8px] font-mono-tech text-slate-500">┌ ┐</div>
        <div className="absolute bottom-1 right-1 text-[8px] font-mono-tech text-slate-500">└ ┘</div>
      </div>

      {stats.map((stat, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="bg-[#0a0c10] border border-white/10 p-4 rounded-sm text-center relative group hover:border-cyan-500/50 hover:bg-[#0e1117] transition-all"
        >
          <div className="font-display text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {stat.value}
          </div>
          <div className="font-mono-tech text-[10px] tracking-widest text-slate-400 mt-1 uppercase">
            {stat.label}
          </div>
          <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-white/30" />
        </motion.div>
      ))}
    </div>
  );
}
