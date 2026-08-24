import React from 'react';
import { Zap, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-[#020203] text-slate-400 border-t border-white/10 pt-20 pb-12 overflow-hidden">
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full border border-cyan-500/20 bg-gradient-to-tr from-cyan-950/40 via-cyan-900/10 to-transparent pointer-events-none blur-sm" />
      
      <div className="absolute top-12 right-6 sm:right-12 w-64 h-64 border border-dashed border-white/10 rounded-full flex items-center justify-center pointer-events-none animate-spin-slow opacity-30">
        <div className="w-48 h-48 border border-cyan-500/20 rounded-full" />
        <div className="w-2 h-2 bg-cyan-400 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded border border-cyan-400/50 bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Zap className="w-5 h-5 fill-cyan-400/30" />
              </div>
              <span className="font-display text-3xl font-bold tracking-widest text-white">
                TESLA <span className="text-cyan-400 text-sm font-mono-tech align-top">‘26</span>
              </span>
            </div>
            
            <p className="font-body text-xs text-slate-400 leading-relaxed max-w-sm">
              Official Annual Technical Festival organized by the Department of Electrical Engineering. 
              Igniting high-voltage innovation, hackathons, workshops, and proshows.
            </p>

            <div className="font-mono-tech text-[10px] text-cyan-400/80 tracking-wider flex items-center gap-2 pt-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>COLLEGE OF ENGINEERING // DEPT OF EE</span>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h4 className="font-mono-tech text-xs font-bold text-white tracking-widest uppercase flex items-center gap-1.5">
                <span className="text-cyan-400">+</span> EXPLORE
              </h4>
              <ul className="space-y-2 font-mono-tech text-xs">
                <li><a href="#hero" className="hover:text-cyan-400 transition-colors">HOME</a></li>
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">ABOUT TESLA</a></li>
                <li><a href="#highlights" className="hover:text-cyan-400 transition-colors">HIGHLIGHTS</a></li>
                <li><a href="#events" className="hover:text-cyan-400 transition-colors">WORKSHOPS</a></li>
                <li><a href="#merchandise" className="hover:text-cyan-400 transition-colors">MERCHANDISE</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-mono-tech text-xs font-bold text-white tracking-widest uppercase flex items-center gap-1.5">
                <span className="text-cyan-400">+</span> CONNECT
              </h4>
              <ul className="space-y-2.5 font-mono-tech text-xs">
                <li>
                  <a href="https://discord.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                    <span>DISCORD</span>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span>INSTAGRAM</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@tesla26.org" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>EMAIL US</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>HELPLINE</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-mono-tech text-xs font-bold text-white tracking-widest uppercase flex items-center gap-1.5">
                <span className="text-cyan-400">+</span> RESOURCES
              </h4>
              <ul className="space-y-2 font-mono-tech text-xs">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">RULEBOOK PDF</a></li>
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">CAMPUS MAP</a></li>
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">SPONSORS</a></li>
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">FAQ & HELP</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-mono-tech text-xs font-bold text-white tracking-widest uppercase flex items-center gap-1.5">
                <span className="text-cyan-400">+</span> JOIN US
              </h4>
              <ul className="space-y-2 font-mono-tech text-xs">
                <li><a href="#footer" className="hover:text-cyan-400 transition-colors">VOLUNTEERS</a></li>
                <li><a href="#footer" className="hover:text-cyan-400 transition-colors">CORE TEAM</a></li>
                <li><a href="#footer" className="hover:text-cyan-400 transition-colors">AMBASSADORS</a></li>
                <li><a href="#footer" className="hover:text-cyan-400 transition-colors">MEDIA KIT</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col items-center justify-center text-center space-y-3">
          <div className="font-mono-tech text-xs tracking-[0.2em] text-slate-300 uppercase">
            DESIGNED AND CURATED BY <span className="text-white font-bold tracking-widest border-b border-cyan-400 pb-0.5">ROHAN KISHORE</span>
          </div>
        </div>

        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between font-mono-tech text-[10px] text-slate-500 border-t border-white/5">
          <div className="bg-[#080a0e] border border-white/10 px-4 py-1.5 rounded-t-md text-slate-400">
            © TESLA '26. ALL RIGHTS RESERVED
          </div>
          
          <div className="mt-2 sm:mt-0 tracking-widest text-cyan-400/80">
            09.5469° N &nbsp; 76.0057° E
          </div>
        </div>

      </div>
    </footer>
  );
}
