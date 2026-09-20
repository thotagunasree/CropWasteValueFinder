import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Leaf, 
  Layers, 
  Timer, 
  IndianRupee, 
  Wrench, 
  ShieldCheck 
} from 'lucide-react';
import { translations } from '../../data/translations';

export default function ValueIdeaCard({ solution, onOpenBlueprint, language }) {
  const t = translations[language]?.valueIdeas || translations.en.valueIdeas;

  return (
    <div className="bg-white rounded-3xl border border-agri-cream-300 shadow-soft-agri hover:shadow-card-agri transition-all duration-300 overflow-hidden flex flex-col justify-between group">
      
      {/* Top Banner Image */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={solution.image}
          alt={solution.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
            {solution.category}
          </span>
        </div>

        {/* Revenue Tag */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <span className="text-[10px] uppercase font-bold text-agri-amber-300 tracking-wider block">
            {t.revenueBadge}
          </span>
          <span className="text-base font-extrabold text-white">
            {solution.revenuePotential || solution.expectedRevenue}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          <h3 className="text-base font-bold text-slate-900 group-hover:text-agri-green-800 transition-colors">
            {solution.title}
          </h3>

          {/* Effort & Timeline Row */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
              {t.effortBadge} {solution.effort || solution.effortLevel}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-900 border border-blue-300 flex items-center gap-1">
              <Timer className="w-2.5 h-2.5" />
              {solution.timeToReturns || solution.timeRequired}
            </span>
          </div>

          {/* Environmental Benefit Snippet */}
          <div className="mt-3 p-3 rounded-2xl bg-agri-green-50/80 border border-agri-green-200/80 text-xs text-agri-green-950 flex items-start gap-2">
            <Leaf className="w-4 h-4 text-agri-green-700 flex-shrink-0 mt-0.5" />
            <p className="line-clamp-2 leading-relaxed">
              {solution.environmentalImpact || solution.co2Offset || "Reduces air smog, sequesters permanent carbon and builds organic humus."}
            </p>
          </div>
        </div>

        {/* Steps Preview Snippet */}
        {solution.steps && solution.steps.length > 0 && (
          <div className="text-[11px] text-slate-500 space-y-1">
            <span className="font-bold text-slate-700 block">Sample Step 1:</span>
            <p className="line-clamp-1 italic text-slate-600">
              "{solution.steps[0]}"
            </p>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={() => onOpenBlueprint(solution)}
          className="w-full py-2.5 px-4 rounded-xl bg-agri-green-800 group-hover:bg-agri-green-900 text-white font-bold text-xs shadow-md shadow-agri-green-900/15 flex items-center justify-center gap-2 transition-all transform active:scale-95"
        >
          <span>{t.blueprintBtn}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>

      </div>

    </div>
  );
}
