import React from 'react';
import { 
  Scale, 
  IndianRupee, 
  Building2, 
  Leaf, 
  TrendingUp, 
  ArrowUpRight, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { translations } from '../../data/translations';

export default function StatCards({ 
  language, 
  wasteTonnes = 2.4, 
  estValue = 8600, 
  buyerCount = 12, 
  co2SavedKg = 420 
}) {
  const t = translations[language]?.dashboard || translations.en.dashboard;

  const cards = [
    {
      id: 'waste',
      title: t.statWaste,
      value: `${wasteTonnes} tonnes`,
      subtitle: t.statWasteSub,
      badge: "Paddy & Bagasse",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      icon: Scale,
      gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      iconBg: "bg-gradient-to-br from-emerald-600 to-emerald-800 text-white",
      borderColor: "border-emerald-200/80"
    },
    {
      id: 'value',
      title: t.statValue,
      value: `₹${estValue.toLocaleString('en-IN')}`,
      subtitle: t.statValueSub,
      badge: "+14% higher return",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      icon: IndianRupee,
      gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
      iconBg: "bg-gradient-to-br from-amber-500 to-amber-700 text-white",
      borderColor: "border-amber-200/80"
    },
    {
      id: 'buyers',
      title: t.statBuyers,
      value: `${buyerCount} Buyers`,
      subtitle: t.statBuyersSub,
      badge: "100% Verified",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
      icon: Building2,
      gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
      iconBg: "bg-gradient-to-br from-blue-600 to-blue-800 text-white",
      borderColor: "border-blue-200/80"
    },
    {
      id: 'co2',
      title: t.statCo2,
      value: `${co2SavedKg} kg CO₂`,
      subtitle: t.statCo2Sub,
      badge: "21 Trees Saved",
      badgeColor: "bg-agri-green-100 text-agri-green-900 border-agri-green-300",
      icon: Leaf,
      gradient: "from-green-600/10 via-green-600/5 to-transparent",
      iconBg: "bg-gradient-to-br from-green-600 to-green-900 text-white",
      borderColor: "border-green-300/80"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
            className={`relative bg-white rounded-2xl p-5 border ${card.borderColor} shadow-soft-agri hover:shadow-card-agri transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden`}
          >
            {/* Ambient Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-70 pointer-events-none`} />

            <div className="relative z-10 flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  {card.title}
                </span>
                <div className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-baseline gap-1">
                  {card.value}
                </div>
              </div>

              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-md ${card.iconBg} transform group-hover:scale-110 transition-transform`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>

            <div className="relative z-10 mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-medium text-slate-600 truncate max-w-[140px]">
                {card.subtitle}
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${card.badgeColor} flex items-center gap-1`}>
                <Sparkles className="w-2.5 h-2.5" />
                <span>{card.badge}</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
