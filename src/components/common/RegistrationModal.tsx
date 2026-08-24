import React, { useState } from 'react';
import { X, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';
import GlowButton from './GlowButton';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItem?: string | null;
}

export default function RegistrationModal({ isOpen, onClose, initialItem }: RegistrationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    tShirtSize: 'L'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#090b0e] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg border border-white/10 hover:border-cyan-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="font-mono-tech text-xs text-cyan-400 tracking-widest uppercase">
                OFFICIAL REGISTRATION // TESLA '26
              </span>
            </div>

            <h3 className="font-tech text-2xl font-bold text-white uppercase tracking-wider mb-2">
              {initialItem ? `REGISTER FOR: ${initialItem}` : 'JOIN TESLA 2026 TECHNICAL FEST'}
            </h3>
            
            <p className="font-body text-xs text-slate-400 mb-6">
              Complete your registration pass for high-voltage events, hackathons, and merchandise preorders.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono-tech text-xs">
              <div>
                <label className="block text-slate-300 mb-1">FULL NAME *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Nikola Tesla"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black/60 border border-white/15 focus:border-cyan-400 text-white rounded px-3 py-2.5 outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1">EMAIL ADDRESS *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="nikola@ee.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black/60 border border-white/15 focus:border-cyan-400 text-white rounded px-3 py-2.5 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">PHONE NUMBER *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-black/60 border border-white/15 focus:border-cyan-400 text-white rounded px-3 py-2.5 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1">COLLEGE / INSTITUTION *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Department of Electrical Engineering"
                  value={formData.college}
                  onChange={(e) => setFormData({...formData, college: e.target.value})}
                  className="w-full bg-black/60 border border-white/15 focus:border-cyan-400 text-white rounded px-3 py-2.5 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">T-SHIRT SIZE (FOR MERCHANDISE PASS)</label>
                <select 
                  value={formData.tShirtSize}
                  onChange={(e) => setFormData({...formData, tShirtSize: e.target.value})}
                  className="w-full bg-black/60 border border-white/15 focus:border-cyan-400 text-white rounded px-3 py-2.5 outline-none transition-colors"
                >
                  <option value="S">SMALL (S)</option>
                  <option value="M">MEDIUM (M)</option>
                  <option value="L">LARGE (L)</option>
                  <option value="XL">EXTRA LARGE (XL)</option>
                  <option value="XXL">OVERSIZED XXL</option>
                </select>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>SECURE HUD PASS GENERATOR</span>
                </div>

                <GlowButton type="submit" variant="cyan">
                  CONFIRM PASS
                </GlowButton>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-tech text-3xl font-bold text-white uppercase tracking-wider">
              PASS CONFIRMED!
            </h3>

            <p className="font-mono-tech text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Welcome to TESLA '26, <span className="text-cyan-400">{formData.name}</span>! 
              Your pass has been generated. Confirmation details sent to <span className="text-cyan-400">{formData.email}</span>.
            </p>

            <div className="p-4 bg-black/60 border border-white/10 rounded font-mono-tech text-[11px] text-left max-w-xs mx-auto space-y-1">
              <div>PASS ID: <span className="text-cyan-400 font-bold">TSL-2026-9842</span></div>
              <div>EVENT: <span className="text-white">{initialItem || 'ALL ACCESS PASS'}</span></div>
              <div>DATE: <span className="text-white">21 , 22 SEP 2026</span></div>
            </div>

            <GlowButton onClick={handleReset} variant="white" className="mt-4">
              CLOSE WINDOW
            </GlowButton>
          </div>
        )}

      </div>
    </div>
  );
}
