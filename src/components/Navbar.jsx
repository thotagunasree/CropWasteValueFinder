import React from 'react';
import { Leaf, Sparkles } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { translations } from '../data/translations';

export default function Navbar({ language, setLanguage, isDemoMode }) {
  const t = translations[language];

  return (
    <header className="sticky top-0 z-40 agri-glass-header border-b border-agri-cream-300 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & App Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-agri-green-deep to-agri-green-leaf flex items-center justify-center shadow-md ring-2 ring-agri-green-300/60">
              <Leaf className="w-6 h-6 sm:w-7 sm:h-7 text-agri-cream-warm" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-agri-green-950 font-sans">
                  CropWaste <span className="text-agri-green-600">Finder</span>
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-extrabold bg-agri-green-100 text-agri-green-800 border border-agri-green-300">
                  AI
                </span>
              </div>
              <p className="text-xs text-agri-brown-600 font-medium hidden sm:block">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Right Header Elements */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Model Mode Badge */}
            <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-agri-cream-200 text-agri-brown-800 border border-agri-cream-400">
              <Sparkles className="w-3.5 h-3.5 text-agri-green-600 animate-pulse" />
              <span>{isDemoMode ? t.demoModeBadge : t.liveModelBadge}</span>
            </div>

            {/* Language Switcher */}
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </div>

        </div>
      </div>
    </header>
  );
}
