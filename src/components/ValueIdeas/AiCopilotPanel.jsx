import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  IndianRupee, 
  Calendar, 
  Leaf, 
  Flame, 
  Lightbulb,
  CornerDownLeft
} from 'lucide-react';
import { aiCopilotPresets } from '../../data/cropResidueIdeas';
import { translations } from '../../data/translations';

export default function AiCopilotPanel({ language }) {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [userQuery, setUserQuery] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [activeAnalysis, setActiveAnalysis] = useState(aiCopilotPresets[0].recommendation);

  const t = translations[language]?.valueIdeas || translations.en.valueIdeas;

  const handleSelectPreset = (idx) => {
    setSelectedPresetIndex(idx);
    setIsThinking(true);
    setTimeout(() => {
      setIsThinking(false);
      setActiveAnalysis(aiCopilotPresets[idx].recommendation);
    }, 400);
  };

  const handleCustomQuery = (e) => {
    e.preventDefault();
    if (!userQuery.trim()) return;

    setIsThinking(true);
    setTimeout(() => {
      setIsThinking(false);
      // Smart simulated responsive model based on query text
      setActiveAnalysis({
        headline: `Optimized Biochar & Mushroom Blueprint for "${userQuery.slice(0, 32)}..."`,
        bestCrop: "Mixed Farm Residue",
        expectedGross: "₹36,000 - ₹54,000 / batch",
        netProfit: "₹28,500 (82% Margin)",
        paybackDays: "18 Days",
        summary: `Based on current mandi rates and industrial biomass pellet plants in Punjab, converting your biomass into Oyster Mushroom beds yields the highest cash returns (₹110/kg), while pyrolyzing the woody core into Biochar prevents fine smog and sequesters 2.4t CO₂.`,
        actionSteps: [
          "Separate leafy straw from hard stalks for two distinct value streams.",
          "Sterilize straw for 18-day quick Oyster mushroom flushes.",
          "Feed dry stalks into low-cost steel retort kiln for pure Biochar.",
          "List ready products directly on CropWasteValueFinder buyer feed."
        ],
        carbonSaved: "1,450 kg CO₂ avoided"
      });
      setUserQuery('');
    }, 600);
  };

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-agri-green-950 text-white rounded-3xl p-6 sm:p-8 border border-agri-green-600/40 shadow-2xl space-y-6">
      
      {/* Copilot Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-agri-green-600 to-agri-amber-400 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-agri-green-900/40">
            <Bot className="w-6 h-6 text-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-extrabold text-white">
                {t.aiCopilotTitle}
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-agri-amber-400 text-slate-950">
                GPT-Agri v3
              </span>
            </div>
            <p className="text-xs text-agri-green-200">
              {t.aiCopilotSubtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-agri-amber-300 font-semibold bg-white/5 px-3 py-1.5 rounded-full border border-white/10 self-start sm:self-auto">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Real-time Biomass ROI Simulation</span>
        </div>
      </div>

      {/* Suggested Query Pills */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
          Try smart farmer queries:
        </span>
        <div className="flex flex-wrap gap-2">
          {aiCopilotPresets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectPreset(idx)}
              className={`text-xs font-semibold px-3.5 py-2 rounded-xl text-left transition-all border ${
                selectedPresetIndex === idx
                  ? 'bg-agri-green-700/80 text-white border-agri-amber-400/80 shadow-md ring-1 ring-agri-amber-400/50'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {preset.query}
            </button>
          ))}
        </div>
      </div>

      {/* Query Input Bar */}
      <form onSubmit={handleCustomQuery} className="relative">
        <input
          type="text"
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
          placeholder={t.askPlaceholder}
          className="w-full pl-4 pr-24 py-3 text-xs sm:text-sm bg-white/10 rounded-2xl border border-white/20 focus:border-agri-amber-400 focus:ring-2 focus:ring-agri-amber-400/20 text-white placeholder-slate-400 outline-none transition-all"
        />
        <button
          type="submit"
          disabled={isThinking || !userQuery.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-3.5 py-1.5 rounded-xl bg-agri-amber-400 hover:bg-agri-amber-500 disabled:opacity-50 text-slate-950 font-bold text-xs shadow flex items-center gap-1.5 transition-all"
        >
          <span>Ask</span>
          <Send className="w-3 h-3" />
        </button>
      </form>

      {/* AI Structured Response Box */}
      {isThinking ? (
        <div className="py-12 text-center space-y-3 bg-white/5 rounded-2xl border border-white/10">
          <div className="w-8 h-8 border-2 border-agri-amber-400 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs text-agri-green-200 font-bold">
            Simulating Biomass Processing ROI & Supply Chain Matched Buyers...
          </p>
        </div>
      ) : activeAnalysis && (
        <div className="p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/15 space-y-4 animate-fadeIn">
          
          {/* Top Title & Best Crop */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
            <div>
              <span className="text-[10px] font-bold uppercase text-agri-amber-400 tracking-wider block">
                Recommended Solution
              </span>
              <h4 className="text-base sm:text-lg font-extrabold text-white mt-0.5">
                {activeAnalysis.headline}
              </h4>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-agri-green-500/20 text-agri-green-300 border border-agri-green-400/30 self-start sm:self-auto">
              Crop: {activeAnalysis.bestCrop}
            </span>
          </div>

          {/* 3 Metric Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/10 border border-white/10">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Expected Gross</span>
              <span className="text-sm font-extrabold text-agri-amber-300">{activeAnalysis.expectedGross}</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 border border-white/10">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Est. Net Profit</span>
              <span className="text-sm font-extrabold text-agri-green-300">{activeAnalysis.netProfit}</span>
            </div>
            <div className="p-3 rounded-xl bg-white/10 border border-white/10">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Payback Cycle</span>
              <span className="text-sm font-extrabold text-blue-300">{activeAnalysis.paybackDays}</span>
            </div>
          </div>

          {/* AI Summary */}
          <p className="text-xs text-slate-200 leading-relaxed bg-black/20 p-3.5 rounded-xl border border-white/5">
            {activeAnalysis.summary}
          </p>

          {/* Step-by-Step Action Roadmap */}
          <div className="space-y-2 pt-1">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Suggested Step-by-Step Execution Plan:
            </span>
            <div className="space-y-2">
              {activeAnalysis.actionSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-agri-green-400 flex-shrink-0 mt-0.5" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Carbon Offset Footnote */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-agri-green-300">
            <div className="flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-agri-amber-300" />
              <span>{activeAnalysis.carbonSaved}</span>
            </div>
            <span className="text-[10px] text-slate-400">100% Circular Verified</span>
          </div>

        </div>
      )}

    </div>
  );
}
