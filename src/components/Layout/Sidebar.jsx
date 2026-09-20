import React from 'react';
import { 
  LayoutDashboard, 
  Search, 
  PlusCircle, 
  Lightbulb, 
  Leaf, 
  UserCheck, 
  LogOut, 
  Sprout, 
  ShieldCheck, 
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { translations } from '../../data/translations';

export default function Sidebar({ 
  activeTab, 
  setActiveTab, 
  onLogout, 
  language, 
  activeListingCount = 2, 
  buyerCount = 12,
  userProfile = { name: "User Name", village: "Demo Village", farmSizeAcres: 8.5 }
}) {
  const t = translations[language]?.nav || translations.en.nav;

  const initials = userProfile?.name ? userProfile.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'UN';

  const navItems = [
    {
      id: 'dashboard',
      label: t.dashboard,
      icon: LayoutDashboard,
      badge: null
    },
    {
      id: 'buyers',
      label: t.findBuyers,
      icon: Search,
      badge: `${buyerCount} active`
    },
    {
      id: 'list-waste',
      label: t.listWaste,
      icon: PlusCircle,
      badge: 'New'
    },
    {
      id: 'value-ideas',
      label: t.valueIdeas,
      icon: Lightbulb,
      badge: 'AI'
    },
    {
      id: 'impact',
      label: t.impact,
      icon: Leaf,
      badge: '420 kg'
    },
    {
      id: 'profile',
      label: t.profile,
      icon: UserCheck,
      badge: null
    }
  ];

  return (
    <aside className="w-64 bg-white/95 backdrop-blur-md border-r border-agri-cream-300 flex flex-col justify-between h-screen sticky top-0 shadow-sm z-30 hidden md:flex">
      
      {/* Brand Header */}
      <div className="p-5 border-b border-agri-cream-200">
        <div 
          onClick={() => setActiveTab('dashboard')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-agri-green-700 to-agri-green-900 flex items-center justify-center text-white shadow-md shadow-agri-green-900/20 group-hover:scale-105 transition-transform">
            <Sprout className="w-5 h-5 text-agri-amber-300" />
          </div>
          <div>
            <h2 className="text-base font-extrabold tracking-tight text-slate-900 leading-none">
              CropWaste<span className="text-agri-green-600">Value</span>
            </h2>
            <span className="text-[10px] font-bold text-agri-amber-600 uppercase tracking-wider block mt-1">
              Agri-Biomass Hub
            </span>
          </div>
        </div>

        {/* Farmer Trust Badge */}
        <div className="mt-4 p-2.5 rounded-xl bg-agri-green-50 border border-agri-green-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-agri-green-700" />
            <span className="text-xs font-bold text-agri-green-950">Verified Eco-Farmer</span>
          </div>
          <span className="text-[10px] bg-agri-green-700 text-white font-bold px-1.5 py-0.5 rounded-full">
            Gold
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="p-4 space-y-1.5 flex-1 overflow-y-auto">
        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Navigation
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all group ${
                isActive
                  ? 'bg-agri-green-800 text-white shadow-md shadow-agri-green-900/20 translate-x-1'
                  : 'text-slate-700 hover:bg-agri-cream-200/70 hover:text-agri-green-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? 'text-agri-amber-300' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-agri-amber-100 text-agri-amber-800 border border-agri-amber-300/50'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom User Card & Logout */}
      <div className="p-4 border-t border-agri-cream-200 bg-agri-cream-50/50">
        <div 
          onClick={() => setActiveTab('profile')}
          className="flex items-center gap-3 p-2 rounded-xl hover:bg-white transition-colors cursor-pointer mb-2"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-agri-amber-400 to-agri-green-600 flex items-center justify-center font-bold text-white shadow-sm text-xs">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-slate-900 truncate">{userProfile?.name || "User Name"}</p>
            <p className="text-[11px] text-slate-500 truncate">{userProfile?.village || "Demo Village"} • {userProfile?.farmSizeAcres || 8.5} ac</p>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </div>

        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold text-rose-700 hover:bg-rose-50 hover:text-rose-800 transition-colors border border-rose-200/60"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>{t.logout}</span>
        </button>
      </div>

    </aside>
  );
}
