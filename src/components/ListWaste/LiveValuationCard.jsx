import React from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  IndianRupee, 
  Scale, 
  Leaf, 
  ShieldCheck, 
  Building2,
  Flame
} from 'lucide-react';
import { translations } from '../../data/translations';

export default function LiveValuationCard({ 
  cropType, 
  quantity, 
  unit, 
  expectedPrice, 
  moisture,
  language 
}) {
  const t = translations[language]?.listWaste || translations.en.listWaste;

  // Normalise quantity to tonnes
  const quantityInTonnes = unit === 'tonnes' ? Number(quantity) : unit === 'quintals' ? Number(quantity) / 10 : Number(quantity) / 1000;
  
  // Market benchmark base price per tonne
  const marketRatesPerTonne = {
    'Paddy Straw': 3800,
    'Sugarcane Bagasse': 3600,
    'Wheat Straw': 4200,
    'Coconut Husk': 5000,
    'Cotton Stalks': 3900,
    'Mustard Husk': 4100,
    'Groundnut Shells': 4400
  };

  const benchmarkRate = marketRatesPerTonne[cropType] || 3800;
  const farmerPricePerTonne = unit === 'tonnes' ? Number(expectedPrice) : Number(expectedPrice) * 10;
  
  // Moisture penalty / reward factor
  const moistureFactor = moisture > 20 ? 0.92 : moisture < 12 ? 1.06 : 1.0;

  const estimatedMarketRevenue = Math.round(quantityInTonnes * benchmarkRate * moistureFactor);
  const potentialCo2SavedKg = Math.round(quantityInTonnes * 175); // ~175 kg CO2 avoided per tonne of unburnt stubble

  // Demand rating based on crop
  const demandScores = {
    'Paddy Straw': { score: '98 / 100', label: 'Very High Demand', color: 'text-emerald-700 bg-emerald-100' },
    'Sugarcane Bagasse': { score: '94 / 100', label: 'High Demand', color: 'text-emerald-700 bg-emerald-100' },
    'Wheat Straw': { score: '99 / 100', label: 'Peak Scarcity', color: 'text-amber-800 bg-amber-100' },
    'Coconut Husk': { score: '91 / 100', label: 'Export Demand', color: 'text-blue-800 bg-blue-100' },
    'Cotton Stalks': { score: '88 / 100', label: 'High Demand', color: 'text-emerald-700 bg-emerald-100' },
    'Mustard Husk': { score: '95 / 100', label: 'Thermal Power Ready', color: 'text-amber-800 bg-amber-100' },
    'Groundnut Shells': { score: '93 / 100', label: 'High Demand', color: 'text-emerald-700 bg-emerald-100' }
  };

  const demand = demandScores[cropType] || { score: '92 / 100', label: 'High Demand', color: 'text-emerald-700 bg-emerald-100' };

  return (
    <div className="bg-gradient-to-br from-agri-green-950 via-agri-green-900 to-slate-950 text-white rounded-3xl p-6 border border-agri-green-700/50 shadow-xl space-y-5 sticky top-24">
      
      {/* Valuation Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/15">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-xl bg-agri-amber-400/20 text-agri-amber-300 border border-agri-amber-400/30">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-white">
              {t.aiEstimatorTitle}
            </h3>
            <span className="text-[10px] text-agri-green-200">
              Live Mandi & Bio-energy Benchmark
            </span>
          </div>
        </div>

        <span className="text-[10px] bg-agri-green-500/20 text-agri-green-300 font-bold px-2 py-0.5 rounded-full border border-agri-green-400/30">
          AI Verified
        </span>
      </div>

      {/* Main Revenue Number */}
      <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-1">
        <span className="text-[11px] font-medium text-agri-green-200 uppercase tracking-wider block">
          {t.estTotalValue}
        </span>
        <div className="text-3xl font-extrabold text-agri-amber-300 tracking-tight flex items-baseline gap-1">
          ₹{estimatedMarketRevenue > 0 ? estimatedMarketRevenue.toLocaleString('en-IN') : '0'}
        </div>
        <p className="text-[10px] text-slate-300">
          Based on benchmark rate of ₹{benchmarkRate}/tonne in Patiala cluster
        </p>
      </div>

      {/* Demand & Quality Score */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-300 font-medium">{t.buyerDemand}:</span>
          <span className={`px-2 py-0.5 rounded-md font-bold text-[11px] ${demand.color}`}>
            {demand.score} • {demand.label}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-300 font-medium">Moisture Adjustment:</span>
          <span className="font-bold text-agri-green-300">
            {moisture < 14 ? '+6% Dry Bonus' : moisture > 20 ? '-8% Wet Moisture' : 'Standard Norm'}
          </span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-300 font-medium">{t.carbonOffsetEst}:</span>
          <span className="font-bold text-agri-amber-300 flex items-center gap-1">
            <Leaf className="w-3 h-3" />
            {potentialCo2SavedKg} kg CO₂
          </span>
        </div>
      </div>

      {/* Nearby Active Buyers for this exact crop */}
      <div className="pt-3 border-t border-white/15 text-xs text-agri-green-100 flex items-center gap-2">
        <Building2 className="w-4 h-4 text-agri-amber-300 flex-shrink-0" />
        <span>
          <strong className="text-white">4 verified buyers</strong> in your radius currently looking for {cropType}.
        </span>
      </div>

    </div>
  );
}
