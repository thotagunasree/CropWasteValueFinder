import React, { useState } from 'react';
import CircularInfographic from './CircularInfographic';
import GreenCertificateModal from './GreenCertificateModal';
import { 
  Leaf, 
  Scale, 
  IndianRupee, 
  Flame, 
  ShieldCheck, 
  Wind, 
  Award, 
  TrendingUp, 
  Droplets, 
  Sparkles,
  TreePine,
  ArrowUpRight
} from 'lucide-react';
import { translations } from '../../data/translations';

export default function ImpactView({ language, farmerProfile }) {
  const [showCertificate, setShowCertificate] = useState(false);

  const t = translations[language]?.impact || translations.en.impact;

  // Impact Metrics
  const metrics = [
    {
      id: 'waste',
      title: t.wasteReused,
      value: "14.2 Tonnes",
      percent: 88,
      subtext: "Diverted from open-field burning",
      icon: Scale,
      color: "text-agri-green-800",
      progressBg: "bg-agri-green-600",
      ringBorder: "border-agri-green-500"
    },
    {
      id: 'income',
      title: t.incomeGenerated,
      value: "₹48,600",
      percent: 94,
      subtext: "Direct extra revenue into farmer UPI",
      icon: IndianRupee,
      color: "text-amber-800",
      progressBg: "bg-amber-500",
      ringBorder: "border-amber-500"
    },
    {
      id: 'co2',
      title: t.co2Avoided,
      value: "3,450 kg",
      percent: 82,
      subtext: "Equivalent to 172 mature trees saved",
      icon: Leaf,
      color: "text-emerald-800",
      progressBg: "bg-emerald-600",
      ringBorder: "border-emerald-500"
    },
    {
      id: 'acres',
      title: t.acresSaved,
      value: "18.5 Acres",
      percent: 95,
      subtext: "100% Zero-smoke harvest compliance",
      icon: Flame,
      color: "text-blue-800",
      progressBg: "bg-blue-600",
      ringBorder: "border-blue-500"
    }
  ];

  const regionalAqiStats = [
    { city: "Patiala Rural Cluster", aqiBefore: 380, aqiNow: 165, improvement: "56% Smog Reduction" },
    { city: "Nabha & Bhadson Belt", aqiBefore: 410, aqiNow: 178, improvement: "57% Cleaner Air" },
    { city: "Indo-Gangetic Airshed", aqiBefore: 450, aqiNow: 210, improvement: "53% Particulate Drop" }
  ];

  return (
    <div className="space-y-8 pb-12 animate-fadeIn">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <span>{t.title}</span>
            <span className="text-xs bg-agri-green-100 text-agri-green-900 font-bold px-2.5 py-0.5 rounded-full border border-agri-green-300">
              Gold Tier Eco-Kisan
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {t.subtitle}
          </p>
        </div>

        <button
          onClick={() => setShowCertificate(true)}
          className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-agri-green-800 to-agri-green-900 text-white text-xs font-bold shadow-lg shadow-agri-green-900/20 flex items-center gap-2 transition-all transform active:scale-95 self-start sm:self-auto hover:brightness-110"
        >
          <Award className="w-4 h-4 text-agri-amber-300" />
          <span>{t.certBtn}</span>
        </button>
      </div>

      {/* Progress Cards & Circular Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.id}
              className="bg-white rounded-3xl p-6 border border-agri-cream-300 shadow-soft-agri hover:shadow-card-agri transition-all duration-300 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                  {m.title}
                </span>
                <div className={`p-2 rounded-xl bg-agri-cream-100 ${m.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {m.value}
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  {m.subtext}
                </p>
              </div>

              {/* Progress Bar & Rate */}
              <div className="space-y-1.5 pt-2">
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-slate-500">Goal Target</span>
                  <span className={m.color}>{m.percent}% Achieved</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-agri-cream-200 overflow-hidden">
                  <div
                    style={{ width: `${m.percent}%` }}
                    className={`h-full rounded-full ${m.progressBg} transition-all duration-1000`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Circular Bio-Economy Infographic Section */}
      <CircularInfographic />

      {/* Regional Air Quality & Stubble Burning Reduction Breakdown */}
      <div className="bg-gradient-to-br from-agri-green-950 via-slate-900 to-agri-green-900 text-white rounded-3xl p-6 sm:p-8 border border-agri-green-700/50 shadow-xl space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/15">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-white/10 text-agri-amber-300 border border-white/15">
              <Wind className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-white">
                {t.regionalAqiTitle}
              </h3>
              <p className="text-xs text-agri-green-200">
                Live ground sensor data across Patiala, Nabha and Punjab agricultural corridors
              </p>
            </div>
          </div>

          <span className="text-xs font-bold text-agri-amber-300 bg-agri-amber-400/20 px-3 py-1 rounded-full border border-agri-amber-400/30 self-start sm:self-auto">
            Zero Open Flames Recorded
          </span>
        </div>

        {/* 3 City Impact Bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {regionalAqiStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">{stat.city}</span>
                <span className="text-[10px] font-bold text-agri-green-300 bg-agri-green-500/20 px-2 py-0.5 rounded-md">
                  {stat.improvement}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <div>
                  <span className="text-[10px] text-slate-400 block">Baseline Peak AQI</span>
                  <span className="text-sm font-bold text-rose-400">{stat.aqiBefore} (Severe Smog)</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block">Current Green AQI</span>
                  <span className="text-sm font-bold text-agri-green-400">{stat.aqiNow} (Moderate)</span>
                </div>
              </div>

              <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
                <div className="w-3/5 h-full rounded-full bg-gradient-to-r from-rose-500 to-agri-green-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Community Stewardship Note */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-agri-green-100 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <TreePine className="w-4 h-4 text-agri-amber-300" />
            <span>
              Your farm diverted <strong className="text-white">14.2 tonnes</strong> of biomass, conserving <strong>85,000 Litres</strong> of topsoil water.
            </span>
          </div>

          <button
            onClick={() => setShowCertificate(true)}
            className="text-xs font-bold text-agri-amber-300 hover:underline flex items-center gap-1"
          >
            <span>Download Eco-Champion Badge</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <GreenCertificateModal
          onClose={() => setShowCertificate(false)}
          farmerName={farmerProfile?.name || "User Name"}
        />
      )}

    </div>
  );
}
