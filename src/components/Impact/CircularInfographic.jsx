import React from 'react';
import { 
  RefreshCw, 
  Sprout, 
  Flame, 
  Factory, 
  Sparkles, 
  ArrowRight, 
  Leaf, 
  IndianRupee, 
  ShieldCheck 
} from 'lucide-react';
import { cropImages } from '../../data/mockData';

export default function CircularInfographic() {
  const steps = [
    {
      step: "01",
      title: "Crop Harvest & Stubble",
      desc: "Zero burning in fields. Stubble gathered cleanly with tractor balers & rakes.",
      icon: Sprout,
      color: "from-amber-500 to-amber-700",
      accent: "text-amber-700 bg-amber-100",
      image: cropImages.paddyStraw
    },
    {
      step: "02",
      title: "Direct Buyer Matching",
      desc: "Off-takers purchase at transparent ₹3.50-₹5.20/kg via CropWasteValueFinder.",
      icon: Factory,
      color: "from-blue-600 to-blue-800",
      accent: "text-blue-700 bg-blue-100",
      image: cropImages.circularFarm
    },
    {
      step: "03",
      title: "Clean Bio-Conversion",
      desc: "Pyrolysis creates Biochar, mushroom spawn produces protein, pellets fuel green boilers.",
      icon: RefreshCw,
      color: "from-agri-green-600 to-agri-green-800",
      accent: "text-agri-green-700 bg-agri-green-100",
      image: cropImages.biochar
    },
    {
      step: "04",
      title: "Soil Humus & Carbon Return",
      desc: "Biochar & vermicompost return organic carbon to topsoil, saving 25% water & fertilizer.",
      icon: Leaf,
      color: "from-emerald-600 to-emerald-900",
      accent: "text-emerald-700 bg-emerald-100",
      image: cropImages.compost
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-agri-cream-300 shadow-soft-agri space-y-6">
      
      {/* Title & Concept */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-agri-cream-200">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-xl bg-agri-green-100 text-agri-green-800">
              <RefreshCw className="w-4 h-4" />
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              The 100% Circular Farm Bio-Economy Flow
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            How farm residue transforms from a hazardous pollution source into renewable wealth and fertile soils
          </p>
        </div>

        <span className="text-xs font-bold px-3 py-1 rounded-full bg-agri-green-100 text-agri-green-900 border border-agri-green-300 self-start sm:self-auto">
          Closed-Loop Sustainability
        </span>
      </div>

      {/* 4-Step Visual Flow Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={s.step}
              className="relative bg-agri-cream-100/70 rounded-2xl p-4 border border-agri-cream-300 flex flex-col justify-between space-y-3 group hover:bg-white hover:shadow-card-agri transition-all duration-300"
            >
              {/* Image Header */}
              <div className="relative h-28 w-full rounded-xl overflow-hidden shadow-inner">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-2 left-2 text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-white text-slate-900 shadow">
                  Step {s.step}
                </span>
              </div>

              {/* Text & Icon */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg bg-gradient-to-br ${s.color} text-white shadow-sm`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">
                    {s.title}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Progress Connector Indicator */}
              <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-[10px] font-bold text-slate-400">
                <span>Phase {idx + 1} of 4</span>
                {idx < 3 && (
                  <ArrowRight className="w-3.5 h-3.5 text-agri-green-700" />
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
