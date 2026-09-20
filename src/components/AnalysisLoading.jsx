import React, { useState, useEffect } from 'react';
import { Loader2, Sparkles, Scan, CheckCircle2 } from 'lucide-react';
import { translations } from '../data/translations';

export default function AnalysisLoading({ language, imagePreview }) {
  const t = translations[language];
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = [
    t.analyzingStep1,
    t.analyzingStep2,
    t.analyzingStep3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 600);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="w-full max-w-2xl mx-auto py-8 px-4 text-center">
      <div className="bg-white rounded-3xl border border-agri-cream-400 p-6 sm:p-10 shadow-card-agri relative overflow-hidden">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-green-100 text-agri-green-900 border border-agri-green-300 text-xs font-bold mb-6">
          <Scan className="w-4 h-4 text-agri-green-600 animate-pulse" />
          <span>TensorFlow.js Neural Vision</span>
        </div>

        {/* Image Preview with Laser Scanning Overlay */}
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto rounded-2xl overflow-hidden border-4 border-agri-green-600/30 bg-agri-cream-200 shadow-md mb-6">
          <img
            src={imagePreview}
            alt="Analyzing residue"
            className="w-full h-full object-cover"
          />
          
          {/* Laser Scanner Bar */}
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-agri-green-400 to-transparent shadow-[0_0_15px_#4ade80] scan-laser" />
          
          {/* Scanning Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#52b788_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
          
          {/* Corner Guides */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-agri-green-400" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-agri-green-400" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-agri-green-400" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-agri-green-400" />
        </div>

        {/* Required Headline Text */}
        <h2 className="text-xl sm:text-2xl font-black text-agri-green-950 mb-2 font-sans flex items-center justify-center gap-2">
          <Loader2 className="w-6 h-6 text-agri-green-600 animate-spin" />
          <span>{t.analyzingText}</span>
        </h2>

        {language === 'hi' && (
          <p className="text-base font-bold text-agri-green-800 mb-2">
            {t.analyzingTextHindi}
          </p>
        )}

        <p className="text-xs sm:text-sm text-agri-brown-600 max-w-md mx-auto mb-6">
          {t.analyzingSubtitle}
        </p>

        {/* Step Progress Indicators */}
        <div className="space-y-2.5 max-w-sm mx-auto text-left">
          {steps.map((stepText, idx) => {
            const isCompleted = idx < activeStepIndex;
            const isCurrent = idx === activeStepIndex;

            return (
              <div
                key={idx}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  isCurrent
                    ? 'bg-agri-green-100 text-agri-green-950 border border-agri-green-300 shadow-xs'
                    : isCompleted
                    ? 'bg-agri-cream-200 text-agri-brown-700'
                    : 'text-agri-brown-400 opacity-50'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-agri-green-600 shrink-0" />
                ) : isCurrent ? (
                  <Loader2 className="w-4 h-4 text-agri-green-600 animate-spin shrink-0" />
                ) : (
                  <div className="w-4 h-4 rounded-full border border-agri-brown-300 shrink-0" />
                )}
                <span className="line-clamp-1">{stepText}</span>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
