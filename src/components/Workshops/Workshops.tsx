import React from 'react';
import { workshopsData, WorkshopItem } from '../../data/workshops';
import Badge from '../common/Badge';
import { Cpu, Zap, Radio, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface WorkshopsProps {
  onSelectCard: (item: WorkshopItem) => void;
}

const iconMap = {
  Cpu,
  Zap,
  Radio
};

export default function Workshops({ onSelectCard }: WorkshopsProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/10">
        <div>
          <h2 className="font-tech text-4xl sm:text-5xl font-bold tracking-widest text-white uppercase">
            WORKSHOPS
          </h2>
          <div className="font-mono-tech text-xs text-cyan-400 tracking-wider mt-1">
            [ HANDS-ON TECHNICAL SESSIONS ]
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono-tech text-xs text-slate-500">
          <span>STATUS // OPEN FOR REGISTRATION</span>
          <Sparkles className="w-4 h-4 text-cyan-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {workshopsData.map((ws, index) => {
          const IconComp = iconMap[ws.iconName];
          return (
            <motion.div 
              key={ws.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => onSelectCard(ws)}
              className="bg-[#090b0e] border border-white/15 rounded-xl overflow-hidden relative group cursor-pointer hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              {ws.badge && (
                <div className="absolute top-3 left-3 z-20">
                  <Badge label={ws.badge} variant="white" />
                </div>
              )}

              <div className="h-44 bg-gradient-to-b from-[#0f131a] to-[#06080b] p-6 flex flex-col justify-end relative border-b border-white/10 overflow-hidden">
                <div className="absolute top-4 right-4 text-slate-700 group-hover:text-cyan-400 transition-colors">
                  <IconComp className="w-12 h-12 stroke-[1.2]" />
                </div>
                
                <span className="font-mono-tech text-[10px] text-cyan-400 tracking-widest uppercase mb-1">
                  {ws.date}
                </span>
                <h3 className="font-tech text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {ws.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="font-mono-tech text-xs text-slate-400 tracking-wider mb-3">
                  {ws.subtitle}
                </p>
                <p className="font-body text-xs text-slate-300 leading-relaxed">
                  {ws.desc}
                </p>
                
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5 font-mono-tech text-[11px] text-cyan-400">
                  <span>ENROLL NOW →</span>
                  <span className="text-slate-500">{ws.seatsLeft} SEATS LEFT</span>
                </div>
              </div>

              <div className="absolute bottom-2 left-2 text-[8px] font-mono-tech text-slate-700">+</div>
              <div className="absolute bottom-2 right-2 text-[8px] font-mono-tech text-slate-700">+</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
