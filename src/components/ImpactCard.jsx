import React from 'react';
import { Flame, Wind, Sparkles, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';
import { translations } from '../data/translations';

export default function ImpactCard({ language }) {
  const t = translations[language];

  return (
    <div className="my-8 rounded-3xl overflow-hidden bg-gradient-to-br from-agri-green-deep via-agri-green-emerald to-agri-brown-soil text-white p-6 sm:p-8 shadow-card-agri border border-agri-green-500/30 relative">
      
      {/* Background Subtle Accent Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-agri-green-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        
        {/* Top Warning / Stop Icon Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 text-red-100 border border-red-400/40 text-xs font-bold uppercase tracking-wider mb-4">
          <AlertTriangle className="w-4 h-4 text-red-300" />
          <span>{language === 'hi' ? 'पर्यावरण एवं स्वास्थ्य संदेश' : 'Anti-Burning Mission'}</span>
        </div>

        {/* Primary Required Headings */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white mb-2 font-sans flex items-center gap-3">
          <span className="p-2 rounded-2xl bg-red-600/30 border border-red-400/30 text-amber-300">
            <Flame className="w-6 h-6 sm:w-8 sm:h-8" />
          </span>
          <span>{t.impactHeadline}</span>
        </h2>

        {/* Subline */}
        <p className="text-base sm:text-xl font-bold text-agri-cream-warm mb-6 max-w-2xl leading-relaxed">
          "{t.impactSubline}"
        </p>

        {/* 3 Value & Impact Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          
          {/* Pillar 1: Clean Air */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 border border-white/15">
            <div className="w-10 h-10 rounded-xl bg-agri-green-400/20 flex items-center justify-center text-agri-green-300 mb-3">
              <Wind className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-sm sm:text-base text-white mb-1">
              {t.impactAirMetricTitle}
            </h4>
            <p className="text-xs text-agri-cream-200 leading-normal">
              {t.impactAirMetricDesc}
            </p>
          </div>

          {/* Pillar 2: Soil Health */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 border border-white/15">
            <div className="w-10 h-10 rounded-xl bg-agri-brown-400/30 flex items-center justify-center text-amber-300 mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-sm sm:text-base text-white mb-1">
              {t.impactSoilMetricTitle}
            </h4>
            <p className="text-xs text-agri-cream-200 leading-normal">
              {t.impactSoilMetricDesc}
            </p>
          </div>

          {/* Pillar 3: Farm Wealth */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 border border-white/15">
            <div className="w-10 h-10 rounded-xl bg-agri-green-400/20 flex items-center justify-center text-emerald-300 mb-3">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-sm sm:text-base text-white mb-1">
              {t.impactIncomeMetricTitle}
            </h4>
            <p className="text-xs text-agri-cream-200 leading-normal">
              {t.impactIncomeMetricDesc}
            </p>
          </div>

        </div>

        {/* Why Not Burn Facts Bar */}
        <div className="mt-6 pt-5 border-t border-white/15">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-200 mb-2">
            {t.whyNotBurnTitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs text-agri-cream-200/90 font-medium">
            <div className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">•</span>
              <span>{t.whyNotBurnPoint1}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">•</span>
              <span>{t.whyNotBurnPoint2}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">•</span>
              <span>{t.whyNotBurnPoint3}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
