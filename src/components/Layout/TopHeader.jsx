import React, { useState } from 'react';
import { 
  Bell, 
  Globe, 
  PlusCircle, 
  MapPin, 
  SunMedium, 
  CheckCircle2, 
  TrendingUp, 
  X,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { translations } from '../../data/translations';

export default function TopHeader({ 
  activeTab, 
  setActiveTab, 
  language, 
  setLanguage, 
  farmerName = "User Name",
  farmerLocation = "Demo Village, Demo District",
  unreadCount = 3
}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const t = translations[language]?.dashboard || translations.en.dashboard;
  const navT = translations[language]?.nav || translations.en.nav;

  const mockNotifications = [
    {
      id: 1,
      title: "New Buyer Bid Received",
      desc: "GreenBio Fueltech offered ₹3.85/kg for your Paddy Straw listing.",
      time: "10 mins ago",
      read: false,
      tag: "Buyer Match"
    },
    {
      id: 2,
      title: "Carbon Offset Verified",
      desc: "420 kg CO₂ avoided credits added to your Kisan Impact card.",
      time: "2 hours ago",
      read: false,
      tag: "Impact"
    },
    {
      id: 3,
      title: "Mushroom Spawn Demand High",
      desc: "Local mandis report 25% spike in wholesale Oyster mushroom rates.",
      time: "Yesterday",
      read: true,
      tag: "Market Trend"
    }
  ];

  const languagesList = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'pb', label: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
    { code: 'te', label: 'Telugu', native: 'తెలుగు' }
  ];

  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-agri-cream-300 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-sm">
      
      {/* Left: Dynamic Greeting & Weather */}
      <div className="flex items-center gap-3 sm:gap-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-1.5">
              <span>{t.greeting}, {farmerName}</span>
              <span className="inline-block animate-bounce text-sm">🌾</span>
            </h1>
          </div>
          <p className="text-xs text-slate-500 hidden sm:block">
            {t.subtitle}
          </p>
        </div>

        {/* Location & Weather Pill */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-agri-cream-200/80 border border-agri-cream-400 text-xs font-semibold text-agri-brown-800">
          <MapPin className="w-3.5 h-3.5 text-agri-green-700" />
          <span>{farmerLocation}</span>
          <span className="text-agri-cream-600">•</span>
          <SunMedium className="w-3.5 h-3.5 text-amber-600" />
          <span>28°C Clear</span>
        </div>
      </div>

      {/* Right: Actions, Language & Notifications */}
      <div className="flex items-center gap-2 sm:gap-3">
        
        {/* Quick List Waste CTA */}
        {activeTab !== 'list-waste' && (
          <button
            onClick={() => setActiveTab('list-waste')}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-agri-green-800 hover:bg-agri-green-900 text-white text-xs font-bold shadow-md shadow-agri-green-900/15 transition-all transform active:scale-95"
          >
            <PlusCircle className="w-4 h-4 text-agri-amber-300" />
            <span>{navT.listWaste}</span>
          </button>
        )}

        {/* Language Selector Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowLangMenu(!showLangMenu);
              setShowNotifications(false);
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-agri-cream-100 hover:bg-agri-cream-200 border border-agri-cream-400 text-slate-700 text-xs font-bold transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-agri-green-700" />
            <span className="uppercase">{language}</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {showLangMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-xl border border-agri-cream-300 py-1.5 z-50 animate-fadeIn">
              <div className="px-3 py-1 text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                Select Language
              </div>
              {languagesList.map((item) => (
                <button
                  key={item.code}
                  onClick={() => {
                    setLanguage(item.code);
                    setShowLangMenu(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs font-semibold flex items-center justify-between hover:bg-agri-cream-100 transition-colors ${
                    language === item.code ? 'text-agri-green-800 font-bold bg-agri-green-50' : 'text-slate-700'
                  }`}
                >
                  <span>{item.native}</span>
                  {language === item.code && <CheckCircle2 className="w-3.5 h-3.5 text-agri-green-700" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowLangMenu(false);
            }}
            className="relative p-2 rounded-xl bg-agri-cream-100 hover:bg-agri-cream-200 border border-agri-cream-400 text-slate-700 transition-colors"
            title="Notifications"
          >
            <Bell className="w-4 h-4 text-slate-700" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-agri-amber-500 text-white font-bold text-[9px] flex items-center justify-center shadow">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-agri-cream-300 p-4 z-50 animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-slate-900">Notifications</h4>
                  <span className="text-[10px] bg-agri-green-100 text-agri-green-800 font-bold px-2 py-0.5 rounded-full">
                    {mockNotifications.length} New
                  </span>
                </div>
                <button 
                  onClick={() => setShowNotifications(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="divide-y divide-slate-100 mt-2 max-h-72 overflow-y-auto">
                {mockNotifications.map((notif) => (
                  <div key={notif.id} className="py-2.5 hover:bg-slate-50 rounded-xl px-2 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-agri-green-700 bg-agri-green-50 px-2 py-0.5 rounded-md">
                        {notif.tag}
                      </span>
                      <span className="text-[10px] text-slate-400">{notif.time}</span>
                    </div>
                    <h5 className="text-xs font-bold text-slate-900">{notif.title}</h5>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{notif.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2.5 mt-2 border-t border-slate-100 text-center">
                <button
                  onClick={() => setShowNotifications(false)}
                  className="text-xs text-agri-green-800 font-bold hover:underline"
                >
                  Mark all as read
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
