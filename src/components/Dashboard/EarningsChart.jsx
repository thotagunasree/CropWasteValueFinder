import React, { useState } from 'react';
import { 
  TrendingUp, 
  IndianRupee, 
  Flame, 
  Calendar, 
  ArrowUpRight, 
  Info, 
  Sparkles 
} from 'lucide-react';
import { monthlyEarnings } from '../../data/mockData';
import { translations } from '../../data/translations';

export default function EarningsChart({ language }) {
  const [activeMonthIndex, setActiveMonthIndex] = useState(monthlyEarnings.length - 2); // November peak harvest
  const [viewMode, setViewMode] = useState('revenue'); // 'revenue' | 'volume'

  const t = translations[language]?.dashboard || translations.en.dashboard;

  const totalEarnings = monthlyEarnings.reduce((acc, curr) => acc + curr.earnings, 0);
  const totalBurnSaved = monthlyEarnings.reduce((acc, curr) => acc + curr.burningLossAvoided, 0);
  const totalKgSold = monthlyEarnings.reduce((acc, curr) => acc + curr.wasteSoldKg, 0);

  const maxEarning = Math.max(...monthlyEarnings.map(m => m.earnings));
  const activeData = monthlyEarnings[activeMonthIndex] || monthlyEarnings[0];

  return (
    <div className="bg-white rounded-3xl p-6 border border-agri-cream-300 shadow-soft-agri">
      
      {/* Chart Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-agri-cream-200">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-xl bg-agri-green-100 text-agri-green-800">
              <TrendingUp className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              {t.monthlyChartTitle}
            </h3>
            <span className="text-[10px] bg-agri-amber-100 text-agri-amber-800 font-bold px-2 py-0.5 rounded-full border border-agri-amber-300">
              +48% YoY Growth
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {t.monthlyChartSubtitle}
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1.5 p-1 bg-agri-cream-100 rounded-xl border border-agri-cream-300 self-start sm:self-auto">
          <button
            onClick={() => setViewMode('revenue')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
              viewMode === 'revenue' 
                ? 'bg-agri-green-800 text-white shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Income (₹)
          </button>
          <button
            onClick={() => setViewMode('volume')}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
              viewMode === 'volume' 
                ? 'bg-agri-green-800 text-white shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Volume (kg)
          </button>
        </div>
      </div>

      {/* Summary KPI Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
        <div className="p-3.5 rounded-2xl bg-agri-green-50 border border-agri-green-200/80 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-agri-green-800 uppercase tracking-wider block">
              Total Waste Monetized
            </span>
            <span className="text-lg font-extrabold text-agri-green-950">
              ₹{totalEarnings.toLocaleString('en-IN')}
            </span>
          </div>
          <div className="p-2 rounded-xl bg-agri-green-600 text-white">
            <IndianRupee className="w-4 h-4" />
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-agri-amber-50 border border-agri-amber-200/80 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-agri-amber-800 uppercase tracking-wider block">
              Burning Fines/Loss Avoided
            </span>
            <span className="text-lg font-extrabold text-agri-amber-950">
              ₹{totalBurnSaved.toLocaleString('en-IN')}
            </span>
          </div>
          <div className="p-2 rounded-xl bg-agri-amber-500 text-white">
            <Flame className="w-4 h-4" />
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-blue-800 uppercase tracking-wider block">
              Total Stubble Diverted
            </span>
            <span className="text-lg font-extrabold text-blue-950">
              {(totalKgSold / 1000).toFixed(1)} tonnes
            </span>
          </div>
          <div className="p-2 rounded-xl bg-blue-600 text-white">
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* SVG Responsive Visual Chart */}
      <div className="relative pt-4 pb-2">
        <div className="h-64 flex items-end justify-between gap-2 sm:gap-6 px-2 sm:px-6">
          {monthlyEarnings.map((item, idx) => {
            const isSelected = activeMonthIndex === idx;
            const primaryVal = viewMode === 'revenue' ? item.earnings : item.wasteSoldKg;
            const maxVal = viewMode === 'revenue' ? maxEarning : 4500;
            const heightPercent = Math.round((primaryVal / maxVal) * 85);
            const secondaryHeight = Math.round((item.burningLossAvoided / 10000) * 85);

            return (
              <div 
                key={item.month} 
                onClick={() => setActiveMonthIndex(idx)}
                className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer"
              >
                {/* Value Hover Pill */}
                <div className={`mb-2 text-center transition-all ${
                  isSelected ? 'opacity-100 scale-105' : 'opacity-70 group-hover:opacity-100'
                }`}>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md shadow-sm ${
                    isSelected 
                      ? 'bg-slate-900 text-white' 
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {viewMode === 'revenue' ? `₹${(item.earnings / 1000).toFixed(1)}k` : `${item.wasteSoldKg}kg`}
                  </span>
                </div>

                {/* Double Bar Visual */}
                <div className="w-full max-w-[48px] flex items-end justify-center gap-1 sm:gap-1.5 h-44">
                  {/* Primary Earnings Bar */}
                  <div
                    style={{ height: `${Math.max(heightPercent, 12)}%` }}
                    className={`w-full rounded-t-xl transition-all duration-300 ${
                      isSelected 
                        ? 'bg-gradient-to-t from-agri-green-800 to-agri-green-500 shadow-md shadow-agri-green-900/30' 
                        : 'bg-agri-green-600/70 hover:bg-agri-green-600'
                    }`}
                  />

                  {/* Secondary Saved Value Bar */}
                  <div
                    style={{ height: `${Math.max(secondaryHeight, 8)}%` }}
                    className={`w-2/3 rounded-t-lg transition-all duration-300 ${
                      isSelected 
                        ? 'bg-gradient-to-t from-amber-600 to-amber-400' 
                        : 'bg-amber-300/60 hover:bg-amber-400/80'
                    }`}
                    title={`Burning Loss Avoided: ₹${item.burningLossAvoided}`}
                  />
                </div>

                {/* Month Label */}
                <div className={`mt-3 text-xs font-bold transition-colors ${
                  isSelected ? 'text-agri-green-900 underline decoration-agri-amber-500 decoration-2' : 'text-slate-500'
                }`}>
                  {item.month}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-md bg-agri-green-700 inline-block"></span>
            <span>{t.totalEarned}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-md bg-amber-400 inline-block"></span>
            <span>{t.burnLossAvoided}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-400">
            <Info className="w-3.5 h-3.5" />
            <span>Click any month to inspect details</span>
          </div>
        </div>
      </div>

    </div>
  );
}
