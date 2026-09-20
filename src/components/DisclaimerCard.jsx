import React from 'react';
import { AlertCircle, HelpCircle } from 'lucide-react';
import { translations } from '../data/translations';

export default function DisclaimerCard({ language }) {
  const t = translations[language];

  return (
    <div className="rounded-2xl bg-amber-50/90 border border-amber-200/90 p-4 sm:p-5 text-amber-950 flex items-start gap-3.5 shadow-xs">
      <div className="p-2 rounded-xl bg-amber-100 text-amber-800 shrink-0 mt-0.5">
        <AlertCircle className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
          {language === 'hi' ? 'महत्वपूर्ण कृषि सलाह एवं परामर्श' : 'Important Advisory & Safety Disclaimer'}
        </h4>
        <p className="text-sm font-semibold text-amber-900 leading-relaxed">
          "{t.disclaimerText}"
        </p>
      </div>
    </div>
  );
}
