import React from 'react';
import { Globe } from 'lucide-react';

export default function LanguageToggle({ language, setLanguage }) {
  const isHindi = language === 'hi';

  return (
    <button
      onClick={() => setLanguage(isHindi ? 'en' : 'hi')}
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-agri-green-300 bg-white/90 text-agri-green-900 hover:bg-agri-green-50 shadow-sm transition-all duration-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-agri-green-500 focus:ring-offset-1"
      title={isHindi ? "Switch to English" : "हिंदी में बदलें"}
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4 text-agri-green-600" />
      <span className="flex items-center gap-1.5">
        <span className={!isHindi ? "text-agri-green-700 font-bold underline decoration-2 underline-offset-4" : "text-agri-brown-600 font-normal"}>
          English
        </span>
        <span className="text-agri-brown-300 font-light">|</span>
        <span className={isHindi ? "text-agri-green-700 font-bold underline decoration-2 underline-offset-4" : "text-agri-brown-600 font-normal"}>
          हिंदी
        </span>
      </span>
    </button>
  );
}
