import React, { useState } from 'react';
import {
  Sprout,
  Layers,
  Flame,
  Scissors,
  Droplets,
  ShieldCheck,
  Home,
  Zap,
  ChevronDown,
  ChevronUp,
  Coins,
  Leaf,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { translations } from '../data/translations';

const iconMap = {
  Sprout,
  Layers,
  Flame,
  Scissors,
  Droplets,
  ShieldCheck,
  Home,
  Zap
};

export default function RecommendationCard({ recommendation, index, language }) {
  const [isOpen, setIsOpen] = useState(true);
  const t = translations[language];

  const IconComponent = iconMap[recommendation.icon] || Sprout;

  return (
    <div className="rounded-3xl bg-white border border-agri-cream-400 hover:border-agri-green-500 shadow-soft-agri hover:shadow-card-agri transition-all duration-300 overflow-hidden flex flex-col">
      
      {/* Card Header */}
      <div className="p-5 sm:p-6 pb-4 border-b border-agri-cream-200 bg-gradient-to-b from-white to-agri-cream-100/50">
        
        <div className="flex items-start justify-between gap-3 mb-3">
          
          {/* Icon + Number */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-agri-green-100 border border-agri-green-300 text-agri-green-800 flex items-center justify-center shadow-xs">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-agri-brown-600 uppercase tracking-wider">
                {language === 'hi' ? `विकल्प ${index + 1}` : `Option 0${index + 1}`}
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-agri-green-950 leading-tight">
                {recommendation.title[language] || recommendation.title.en}
              </h3>
            </div>
          </div>

          {/* Badge */}
          <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-xs font-bold bg-agri-cream-300 text-agri-brown-900 border border-agri-cream-400 shrink-0">
            {recommendation.badge[language] || recommendation.badge.en}
          </span>
        </div>

        {/* Short Summary */}
        <p className="text-sm text-agri-brown-800 font-medium leading-relaxed">
          {recommendation.summary[language] || recommendation.summary.en}
        </p>

      </div>

      {/* Benefits Section */}
      <div className="p-5 sm:p-6 space-y-3.5 flex-1 bg-white">
        
        {/* Economic Benefit Box */}
        <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
          <div className="p-2 rounded-xl bg-amber-100 text-amber-800 shrink-0 mt-0.5">
            <Coins className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wide text-amber-900">
              {t.economicBenefit}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-agri-brown-950 mt-0.5">
              {recommendation.economicBenefit[language] || recommendation.economicBenefit.en}
            </p>
          </div>
        </div>

        {/* Eco Benefit Box */}
        <div className="p-3.5 rounded-2xl bg-agri-green-50/70 border border-agri-green-200/80 flex items-start gap-3">
          <div className="p-2 rounded-xl bg-agri-green-100 text-agri-green-800 shrink-0 mt-0.5">
            <Leaf className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wide text-agri-green-900">
              {t.environmentalBenefit}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-agri-brown-950 mt-0.5">
              {recommendation.environmentalBenefit[language] || recommendation.environmentalBenefit.en}
            </p>
          </div>
        </div>

        {/* Expandable Step-by-Step Guide */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between py-2 text-xs sm:text-sm font-extrabold text-agri-green-800 hover:text-agri-green-950 transition-colors focus:outline-none"
          >
            <span className="flex items-center gap-1.5">
              <span>{isOpen ? t.hideDetails : t.viewDetails}</span>
            </span>
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {isOpen && (
            <div className="mt-3 pt-3 border-t border-agri-cream-300 space-y-2.5">
              <p className="text-xs font-extrabold text-agri-brown-900 uppercase tracking-wider mb-2">
                {t.howToImplement}:
              </p>
              {(recommendation.steps[language] || recommendation.steps.en).map((step, sIdx) => (
                <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-agri-brown-800 font-medium leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-agri-green-100 text-agri-green-800 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    {sIdx + 1}
                  </div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
