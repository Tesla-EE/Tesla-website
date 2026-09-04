import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Target date set to September 25
const TARGET_DATE = new Date('2026-09-25T09:00:00+05:30').getTime();

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div 
        className="relative bg-black/40 border border-white/20 rounded-xl px-5 py-6 sm:px-8 sm:py-8 flex justify-center items-center backdrop-blur-md overflow-hidden"
        style={{
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.05)'
        }}
      >
        <span 
          className="text-5xl sm:text-7xl md:text-8xl font-black text-white z-10 drop-shadow-lg"
          style={{ fontFamily: "'Chakra Petch', sans-serif" }}
        >
          {formatNumber(value)}
        </span>
      </div>
      <span className="mt-4 text-xs sm:text-sm font-tacticsans tracking-[0.25em] text-slate-300 uppercase font-semibold drop-shadow-md">
        {label}
      </span>
    </div>
  );

  return (
    <section 
      className="relative w-full py-20 sm:py-28 overflow-hidden shadow-2xl shadow-black/90 bg-no-repeat bg-center"
      style={{
        backgroundColor: '#050506',
        backgroundImage: "url('/textures/abouttext.png')",
        backgroundSize: '100% 100%',
      }}
    >
      {/* =========================================================
          HUD TOP-CENTER NOTCH (Separating Line)
          ========================================================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <svg width="96" height="10" viewBox="0 0 96 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0 H18 L26 9 H70 L78 0 H96"
            fill="#050506"
            stroke="rgba(255, 255, 255, 0.20)"
            strokeWidth="1"
          />
          <line x1="38" y1="5" x2="58" y2="5" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 flex flex-col items-center justify-center">
        {/* Header section */}
        <motion.div 
          className="mb-10 sm:mb-14 text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4 font-tacticsans text-xs sm:text-sm tracking-[0.25em] text-slate-400 uppercase">
            <span className="text-slate-500">—</span> COUNTDOWN INITIATED
          </div>
          
          <h2 className="font-tech text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.96] uppercase drop-shadow-md">
            T-MINUS
            {/* Organic Triple-Stroke Brush Underline */}
            <span className="relative inline-block block w-full mt-2">
              <svg
                className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 w-3/4 h-4 sm:h-6 text-white/90"
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
        </motion.div>

        {/* Countdown Timer Blocks */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-4 sm:gap-8 md:gap-12 mt-6 w-full max-w-sm md:max-w-none mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <TimeBlock value={timeLeft.days} label="Days" />
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <TimeBlock value={timeLeft.minutes} label="Mins" />
          <TimeBlock value={timeLeft.seconds} label="Secs" />
        </motion.div>

      </div>
    </section>
  );
}
