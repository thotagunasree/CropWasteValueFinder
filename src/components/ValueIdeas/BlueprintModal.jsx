import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Sparkles, 
  Leaf, 
  TrendingUp, 
  Layers, 
  Wrench, 
  Clock, 
  DollarSign, 
  Building2 
} from 'lucide-react';

export default function BlueprintModal({ solution, onClose }) {
  if (!solution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-agri-cream-300 shadow-2xl overflow-hidden">
        
        {/* Banner with Image */}
        <div className="relative h-48 sm:h-56 w-full">
          <img
            src={solution.image}
            alt={solution.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-agri-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full">
              {solution.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              {solution.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-2xl bg-agri-green-50 border border-agri-green-200">
              <span className="text-[10px] font-bold text-agri-green-800 uppercase block">Revenue</span>
              <span className="text-xs font-extrabold text-agri-green-950">{solution.revenuePotential || solution.expectedRevenue}</span>
            </div>

            <div className="p-3 rounded-2xl bg-agri-amber-50 border border-agri-amber-200">
              <span className="text-[10px] font-bold text-agri-amber-800 uppercase block">Effort</span>
              <span className="text-xs font-extrabold text-agri-amber-950">{solution.effort || solution.effortLevel}</span>
            </div>

            <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200">
              <span className="text-[10px] font-bold text-blue-800 uppercase block">Time Return</span>
              <span className="text-xs font-extrabold text-blue-950">{solution.timeToReturns || solution.timeRequired}</span>
            </div>

            <div className="p-3 rounded-2xl bg-slate-100 border border-slate-200">
              <span className="text-[10px] font-bold text-slate-700 uppercase block">Tech Level</span>
              <span className="text-xs font-extrabold text-slate-900 truncate block">{solution.techComplexity || 'Standard'}</span>
            </div>
          </div>

          {/* Environmental Benefit */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-agri-green-900 to-agri-green-950 text-white flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-agri-green-800 text-agri-amber-300">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-agri-green-300 tracking-wider block">
                Environmental & Carbon Benefit
              </span>
              <p className="text-xs font-medium text-agri-green-100 mt-0.5">
                {solution.environmentalImpact || solution.co2Offset || "Prevents harmful stubble burning while enriching rural soil organic carbon."}
              </p>
            </div>
          </div>

          {/* Step-by-Step Processing Guide */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
              <Wrench className="w-4 h-4 text-agri-green-700" />
              <span>Step-by-Step Implementation Roadmap</span>
            </h4>

            <div className="space-y-2.5">
              {solution.steps ? (
                solution.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-agri-cream-100/70 border border-agri-cream-300">
                    <div className="w-6 h-6 rounded-full bg-agri-green-800 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))
              ) : (
                <div className="p-4 rounded-2xl bg-agri-cream-100 text-xs text-slate-700">
                  {solution.description}
                </div>
              )}
            </div>
          </div>

          {/* Target Buyers */}
          {solution.targetBuyers && (
            <div className="pt-2">
              <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Key Industrial Off-Takers & Off-Grid Markets
              </h5>
              <div className="flex flex-wrap gap-2">
                {solution.targetBuyers.map((tb, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-blue-50 text-blue-900 border border-blue-200 text-xs font-semibold flex items-center gap-1.5"
                  >
                    <Building2 className="w-3 h-3 text-blue-600" />
                    <span>{tb}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Close Button */}
          <div className="pt-3 border-t border-slate-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-agri-green-800 text-white font-bold text-xs shadow-md hover:bg-agri-green-900 transition-colors"
            >
              Close Roadmap
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
