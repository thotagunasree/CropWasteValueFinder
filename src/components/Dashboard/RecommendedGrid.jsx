import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Timer, 
  Leaf, 
  TrendingUp, 
  Flame, 
  Layers, 
  Sprout,
  Compass
} from 'lucide-react';
import { recommendedHighlights } from '../../data/mockData';
import { translations } from '../../data/translations';

export default function RecommendedGrid({ language, onSelectIdea, onExploreMore }) {
  const t = translations[language]?.dashboard || translations.en.dashboard;

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-xl bg-agri-amber-100 text-agri-amber-800">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              {t.recommendedTitle}
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            {t.recommendedSubtitle}
          </p>
        </div>

        <button
          onClick={onExploreMore}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-agri-green-800 hover:text-agri-green-900 group"
        >
          <span>{t.quickExploreIdeas}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {recommendedHighlights.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectIdea(item.id)}
            className="group bg-white rounded-2xl border border-agri-cream-300 overflow-hidden shadow-soft-agri hover:shadow-card-agri transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
          >
            {/* Image Banner */}
            <div className="relative h-44 w-full overflow-hidden bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Revenue Overlay Tag */}
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[10px] font-medium text-white/90 uppercase tracking-wider block">
                  Est. Revenue
                </span>
                <span className="text-sm font-extrabold text-agri-amber-300">
                  {item.expectedRevenue}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-agri-green-800 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Metrics Pill Row */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1 text-slate-500 font-medium">
                  <Timer className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.timeRequired}</span>
                </div>
                <span className={`px-2 py-0.5 rounded-md font-bold text-[10px] ${item.effortColor}`}>
                  {item.effortLevel} Effort
                </span>
              </div>

              {/* Action Button */}
              <button
                type="button"
                className="w-full py-2 px-3 rounded-xl bg-agri-cream-200 group-hover:bg-agri-green-800 text-slate-800 group-hover:text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>{t.viewBlueprint}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
