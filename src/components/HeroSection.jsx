import React from 'react';
import { Sparkles, ShieldCheck, TrendingUp, Wind } from 'lucide-react';
import { translations } from '../data/translations';

export default function HeroSection({ language }) {
  const t = translations[language];

  return (
    <section className="relative overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-14">
      {/* Background Decorative Circles */}
      <div className="absolute -top-24 -left-20 w-72 h-72 bg-agri-green-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 -right-20 w-80 h-80 bg-agri-brown-200/30 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-agri-green-100/90 text-agri-green-900 border border-agri-green-300 text-xs sm:text-sm font-bold shadow-sm mb-5">
          <Sparkles className="w-4 h-4 text-agri-green-600 animate-spin-slow" />
          <span>{t.heroBadge}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-agri-green-950 tracking-tight mb-4 font-sans leading-tight">
          CropWaste <span className="text-agri-green-600 underline decoration-agri-brown-400/40 decoration-wavy decoration-2">Finder AI</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-agri-brown-800 mb-4 tracking-wide font-sans">
          "{t.tagline}"
        </p>

        {/* Short Explanation */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-agri-brown-700 font-medium leading-relaxed mb-8">
          {t.shortExplanation}
        </p>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
          
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-agri-cream-400 shadow-sm">
            <div className="p-2 rounded-lg bg-agri-green-100 text-agri-green-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-agri-green-900">{language === 'hi' ? 'स्मार्ट पहचान' : 'Instant AI Scan'}</p>
              <p className="text-[11px] text-agri-brown-600">{language === 'hi' ? 'तस्वीर से तुरंत पहचान' : 'Identify residue in seconds'}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-agri-cream-400 shadow-sm">
            <div className="p-2 rounded-lg bg-agri-brown-100 text-agri-brown-800">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-agri-brown-900">{language === 'hi' ? 'अतिरिक्त मुनाफा' : 'High Value Alternatives'}</p>
              <p className="text-[11px] text-agri-brown-600">{language === 'hi' ? 'खाद, मशरूम व बायोचार' : 'Compost, biochar & fiber'}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-agri-cream-400 shadow-sm">
            <div className="p-2 rounded-lg bg-agri-green-100 text-agri-green-700">
              <Wind className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-agri-green-900">{language === 'hi' ? 'धुआं मुक्त भारत' : 'Stop Field Fires'}</p>
              <p className="text-[11px] text-agri-brown-600">{language === 'hi' ? 'स्वच्छ हवा व उपजाऊ खेत' : 'Clean air & fertile soil'}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
