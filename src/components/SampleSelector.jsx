import React from 'react';
import { sampleImages } from '../data/sampleImages';
import { translations } from '../data/translations';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function SampleSelector({ language, onSelectSample }) {
  const t = translations[language];

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-agri-green-600" />
          <h3 className="text-sm font-bold text-agri-brown-900 uppercase tracking-wider">
            {t.orTrySample}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {sampleImages.map((sample) => (
          <button
            key={sample.id}
            onClick={() => onSelectSample(sample)}
            type="button"
            className="group relative flex flex-col text-left p-3 rounded-2xl bg-white border border-agri-cream-400 hover:border-agri-green-500 hover:ring-2 hover:ring-agri-green-300 transition-all duration-200 shadow-sm hover:shadow-md overflow-hidden focus:outline-none"
          >
            {/* Image Preview Container */}
            <div className="w-full h-32 rounded-xl overflow-hidden bg-agri-cream-200 border border-agri-cream-300 mb-3 relative flex items-center justify-center">
              <img
                src={sample.image}
                alt={language === 'hi' ? sample.nameHi : sample.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 text-agri-brown-900 shadow-xs">
                {sample.badge}
              </span>
            </div>

            {/* Label and Arrow */}
            <div className="flex items-center justify-between mt-auto">
              <div>
                <p className="font-extrabold text-sm sm:text-base text-agri-green-950 group-hover:text-agri-green-700 transition-colors">
                  {language === 'hi' ? sample.nameHi : sample.name}
                </p>
                <p className="text-[11px] text-agri-brown-600 line-clamp-1 font-medium">
                  {sample.description}
                </p>
              </div>
              <div className="w-7 h-7 rounded-full bg-agri-cream-200 text-agri-green-800 flex items-center justify-center group-hover:bg-agri-green-600 group-hover:text-white transition-colors shrink-0 ml-2">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
