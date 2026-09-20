import React, { useState } from 'react';
import ValueIdeaCard from './ValueIdeaCard';
import AiCopilotPanel from './AiCopilotPanel';
import BlueprintModal from './BlueprintModal';
import { cropResidues } from '../../data/cropResidueIdeas';
import { 
  Lightbulb, 
  Sparkles, 
  Layers, 
  Flame, 
  Droplets, 
  Scale, 
  MapPin, 
  Sprout 
} from 'lucide-react';
import { translations } from '../../data/translations';

export default function ValueIdeasView({ language, initialResidueId = null }) {
  const [selectedCropId, setSelectedCropId] = useState(initialResidueId || 'rice-straw');
  const [activeBlueprint, setActiveBlueprint] = useState(null);

  const t = translations[language]?.valueIdeas || translations.en.valueIdeas;

  const currentCrop = cropResidues.find(c => c.id === selectedCropId) || cropResidues[0];

  return (
    <div className="space-y-8 pb-12 animate-fadeIn">
      
      {/* Page Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
          <span>{t.title}</span>
          <span className="text-xs bg-agri-amber-100 text-agri-amber-900 font-bold px-2.5 py-0.5 rounded-full border border-agri-amber-300">
            {cropResidues.length} Residues Analyzed
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          {t.subtitle}
        </p>
      </div>

      {/* Crop Residue Selector Horizontal Scrollable Tabs */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
          {t.chooseResidue}
        </span>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {cropResidues.map((crop) => {
            const isSelected = selectedCropId === crop.id;
            return (
              <button
                key={crop.id}
                onClick={() => setSelectedCropId(crop.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-agri-green-800 text-white border-agri-green-950 shadow-md shadow-agri-green-900/20 scale-105'
                    : 'bg-white text-slate-700 border-agri-cream-300 hover:bg-agri-cream-100 hover:border-agri-cream-400'
                }`}
              >
                <span>{crop.name}</span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-agri-amber-400" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Crop Residue Technical Spotlight Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-agri-cream-300 shadow-soft-agri overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <div className="md:col-span-8 space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-agri-green-100 text-agri-green-900 border border-agri-green-300">
                {currentCrop.annualAvailability}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {language === 'hi' ? currentCrop.hindiName : language === 'pb' ? currentCrop.punjabiName : language === 'te' ? currentCrop.teluguName : currentCrop.name}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {currentCrop.name} Value Transformation
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              {currentCrop.tagline}
            </p>

            {/* Technical Specs Pill Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 bg-agri-cream-100 px-3 py-1.5 rounded-xl border border-agri-cream-300">
                <Flame className="w-3.5 h-3.5 text-amber-600" />
                <span>Calorific: {currentCrop.calorificValue}</span>
              </div>

              <div className="flex items-center gap-1.5 bg-agri-cream-100 px-3 py-1.5 rounded-xl border border-agri-cream-300">
                <Scale className="w-3.5 h-3.5 text-agri-green-700" />
                <span>C:N Ratio: {currentCrop.carbonNitrogenRatio}</span>
              </div>

              <div className="flex items-center gap-1.5 bg-agri-cream-100 px-3 py-1.5 rounded-xl border border-agri-cream-300">
                <Droplets className="w-3.5 h-3.5 text-blue-600" />
                <span>Avg Moisture: {currentCrop.moistureAverage}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="relative h-44 rounded-2xl overflow-hidden border border-agri-cream-300 shadow-md">
              <img
                src={currentCrop.image}
                alt={currentCrop.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <span className="text-[10px] uppercase font-bold text-agri-amber-300">Primary Hubs</span>
                <p className="text-xs font-bold">{currentCrop.majorStates.slice(0, 3).join(', ')}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Solutions / Value Ideas Grid for this Crop */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-agri-amber-600" />
            <span>High-Margin Blueprints for {currentCrop.name}</span>
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            {currentCrop.solutions.length} Viable Paths
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCrop.solutions.map((sol) => (
            <ValueIdeaCard
              key={sol.id}
              solution={sol}
              onOpenBlueprint={(s) => setActiveBlueprint(s)}
              language={language}
            />
          ))}
        </div>
      </div>

      {/* Interactive AI Copilot Panel */}
      <AiCopilotPanel language={language} />

      {/* Detailed Blueprint Modal */}
      {activeBlueprint && (
        <BlueprintModal
          solution={activeBlueprint}
          onClose={() => setActiveBlueprint(null)}
        />
      )}

    </div>
  );
}
