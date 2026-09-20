import React from 'react';
import { 
  LayoutDashboard, 
  Search, 
  PlusCircle, 
  Lightbulb, 
  Leaf, 
  UserCheck 
} from 'lucide-react';
import { translations } from '../../data/translations';

export default function MobileNav({ activeTab, setActiveTab, language }) {
  const t = translations[language]?.nav || translations.en.nav;

  const tabs = [
    { id: 'dashboard', label: t.dashboard, icon: LayoutDashboard },
    { id: 'buyers', label: t.findBuyers, icon: Search },
    { id: 'list-waste', label: t.listWaste, icon: PlusCircle, isPrimary: true },
    { id: 'value-ideas', label: t.valueIdeas, icon: Lightbulb },
    { id: 'impact', label: t.impact, icon: Leaf }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-agri-cream-300 px-2 py-2 flex items-center justify-around shadow-2xl">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        if (tab.isPrimary) {
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-center -mt-6 group"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-transform ${
                isActive 
                  ? 'bg-agri-amber-500 shadow-agri-amber-500/40 scale-105 ring-4 ring-white' 
                  : 'bg-agri-green-800 shadow-agri-green-900/30'
              }`}>
                <PlusCircle className="w-6 h-6" />
              </div>
              <span className={`text-[10px] font-bold mt-1 ${isActive ? 'text-agri-amber-600' : 'text-slate-600'}`}>
                {tab.label}
              </span>
            </button>
          );
        }

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center py-1 px-2 transition-colors ${
              isActive ? 'text-agri-green-800 font-extrabold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'text-agri-green-700' : 'text-slate-400'}`} />
            <span className="text-[10px] tracking-tight font-medium mt-1 truncate max-w-[64px]">
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
