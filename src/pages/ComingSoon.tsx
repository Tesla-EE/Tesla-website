import React, { useEffect, useState } from 'react';

export default function ComingSoon() {
  const [text, setText] = useState('');
  const fullText = 'SYSTEM INITIALIZATION...';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden selection:bg-white selection:text-black">
      
      {/* Absolute Pure Black Background with faint scanlines */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '100% 4px'
        }}
      />

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-6">
        
        {/* Minimalist Top Bar */}
        <div className="w-full flex justify-between text-[#333] font-['JetBrains_Mono'] text-xs uppercase tracking-[0.3em] mb-20 border-b border-[#111] pb-4">
          <span>// TESLA 2026</span>
          <span>STATUS: OFFLINE</span>
        </div>

        {/* Center Logo Area */}
        <div className="relative mb-16 flex flex-col items-center group cursor-default">
          {/* Glitch Box / Brackets */}
          <div className="absolute -inset-8 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/40 -translate-x-1 -translate-y-1" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/40 translate-x-1 -translate-y-1" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/40 -translate-x-1 translate-y-1" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/40 translate-x-1 translate-y-1" />
          </div>

          <img 
            src="/images/Logo.png" 
            alt="TESLA '26" 
            className="w-48 md:w-64 grayscale contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
        </div>

        {/* Typography */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-['Space_Grotesk'] tracking-tight uppercase">
            Dropping Soon
          </h1>
          
          <div className="h-6 flex items-center justify-center">
            <p className="text-white/40 font-['JetBrains_Mono'] text-sm md:text-base tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-white/40 rounded-full animate-pulse" />
              {text}
              <span className="w-2 h-5 bg-white/70 animate-[pulse_1s_ease-in-out_infinite]" />
            </p>
          </div>
        </div>

        {/* Minimalist Bottom Bar */}
        <div className="w-full flex justify-between text-[#333] font-['JetBrains_Mono'] text-xs uppercase tracking-[0.3em] mt-32 border-t border-[#111] pt-4">
          <span>DEPT. OF ELECTRICAL ENGINEERING</span>
          <span>COLLEGE OF ENGINEERING TRIVANDRUM</span>
        </div>

      </div>
    </div>
  );
}
