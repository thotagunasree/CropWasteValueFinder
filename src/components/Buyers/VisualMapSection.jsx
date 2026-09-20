import React, { useState } from 'react';
import { 
  MapPin, 
  Compass, 
  Navigation, 
  Layers, 
  ShieldCheck, 
  PhoneCall, 
  ExternalLink,
  Sparkles,
  Info
} from 'lucide-react';
import { translations } from '../../data/translations';

export default function VisualMapSection({ 
  buyers, 
  selectedDistance, 
  setSelectedDistance, 
  onConnectBuyer,
  language 
}) {
  const [activePin, setActivePin] = useState(buyers[0] || null);

  const t = translations[language]?.buyers || translations.en.buyers;

  // Visual coordinates scaled within 100% box around Patiala (30.3398 N, 76.3869 E)
  const mapCenter = { lat: 30.34, lng: 76.40, name: "Your Farm (Demo Village)" };

  // Calculate relative X/Y percentage for pins
  const getPinCoords = (buyer, index) => {
    // Deterministic pleasant distribution across the radar
    const angles = [35, 120, 210, 310, 75, 160];
    const distances = [28, 48, 62, 75, 42, 85];
    
    const angle = (angles[index % angles.length] * Math.PI) / 180;
    const dist = (distances[index % distances.length] / 100) * (selectedDistance / 30);
    
    const x = 50 + Math.cos(angle) * dist * 38;
    const y = 50 + Math.sin(angle) * dist * 38;

    return { 
      x: Math.min(Math.max(x, 10), 90), 
      y: Math.min(Math.max(y, 12), 88) 
    };
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 border border-agri-cream-300 shadow-soft-agri space-y-4">
      
      {/* Map Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-agri-cream-200">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-xl bg-agri-green-100 text-agri-green-800">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              {t.radarTitle}
            </h3>
            <span className="text-[10px] bg-agri-green-100 text-agri-green-800 font-bold px-2 py-0.5 rounded-full">
              Live Geospatial Cluster
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            {t.radarSubtitle}
          </p>
        </div>

        {/* Distance Radius Slider */}
        <div className="flex items-center gap-3 bg-agri-cream-100 px-3.5 py-1.5 rounded-2xl border border-agri-cream-300">
          <span className="text-xs font-bold text-slate-700 whitespace-nowrap">
            Search Radius: <span className="text-agri-green-800 font-extrabold">{selectedDistance} km</span>
          </span>
          <input
            type="range"
            min="5"
            max="50"
            step="5"
            value={selectedDistance}
            onChange={(e) => setSelectedDistance(Number(e.target.value))}
            className="w-24 sm:w-32 accent-agri-green-700 cursor-pointer"
          />
        </div>
      </div>

      {/* Stylized Visual Interactive Radar Map Canvas */}
      <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center shadow-inner">
        
        {/* Ambient Grid Lines & Radar Circles */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Concentric Distance Rings */}
        <div className="absolute w-32 h-32 rounded-full border border-agri-green-500/30 pointer-events-none" />
        <div className="absolute w-56 h-56 rounded-full border border-agri-green-500/25 pointer-events-none" />
        <div className="absolute w-80 h-80 rounded-full border border-agri-green-500/20 pointer-events-none" />
        <div className="absolute w-[440px] h-[440px] rounded-full border border-agri-green-500/15 pointer-events-none" />

        {/* Radar Crosshairs */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-agri-green-500/20 pointer-events-none" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-agri-green-500/20 pointer-events-none" />

        {/* Center: Farmer's Farm Marker */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-agri-amber-500 border-2 border-white flex items-center justify-center text-slate-950 font-bold text-xs shadow-lg shadow-agri-amber-500/50 animate-pulse">
              🌾
            </div>
            <div className="absolute -inset-2 rounded-full bg-agri-amber-400/20 animate-ping pointer-events-none" />
          </div>
          <span className="mt-1 text-[10px] font-bold text-white bg-slate-900/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-agri-amber-400/40 shadow whitespace-nowrap">
            Your Farm (User Name)
          </span>
        </div>

        {/* Dynamic Buyer Pins plotted on Map */}
        {buyers.map((buyer, idx) => {
          const coords = getPinCoords(buyer, idx);
          const isSelected = activePin?.id === buyer.id;
          const inRange = buyer.distanceKm <= selectedDistance;

          if (!inRange) return null;

          return (
            <div
              key={buyer.id}
              onClick={() => setActivePin(buyer)}
              style={{ left: `${coords.x}%`, top: `${coords.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group"
            >
              {/* Pin Bubble */}
              <div className={`relative transition-transform transform ${isSelected ? 'scale-125 z-40' : 'hover:scale-110'}`}>
                <div className={`px-2 py-1 rounded-xl flex items-center gap-1.5 shadow-lg border backdrop-blur-md ${
                  isSelected 
                    ? 'bg-agri-green-700 text-white border-agri-amber-300 ring-2 ring-agri-amber-400' 
                    : 'bg-slate-900/90 text-slate-200 border-slate-700 hover:border-agri-green-400'
                }`}>
                  <MapPin className={`w-3 h-3 ${isSelected ? 'text-agri-amber-300 fill-agri-amber-300' : 'text-agri-green-400'}`} />
                  <span className="text-[11px] font-bold truncate max-w-[90px] sm:max-w-[130px]">
                    {buyer.name.split(' ')[0]}
                  </span>
                  <span className="text-[10px] opacity-80">
                    {buyer.distanceKm}km
                  </span>
                </div>
                
                {/* Visual pulse for verified buyers */}
                {buyer.verified && (
                  <div className="absolute -inset-1 rounded-xl bg-agri-green-500/20 animate-pulse pointer-events-none" />
                )}
              </div>
            </div>
          );
        })}

        {/* Selected Buyer Quick Floating Tooltip Bar on Radar */}
        {activePin && (
          <div className="absolute bottom-3 left-3 right-3 sm:left-auto sm:right-3 sm:w-80 bg-slate-900/95 backdrop-blur-md border border-agri-green-500/40 rounded-2xl p-3 text-white shadow-2xl z-40 animate-fadeIn">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h5 className="text-xs font-bold text-white truncate">{activePin.name}</h5>
                  {activePin.verified && <ShieldCheck className="w-3.5 h-3.5 text-agri-green-400 flex-shrink-0" />}
                </div>
                <p className="text-[10px] text-slate-300 mt-0.5">
                  {activePin.location} • <span className="text-agri-amber-400 font-bold">{activePin.distanceKm} km away</span>
                </p>
                <div className="mt-1 text-[11px] font-semibold text-agri-green-300">
                  Rate: {activePin.priceRange}
                </div>
              </div>

              <button
                onClick={() => onConnectBuyer(activePin)}
                className="px-3 py-1.5 rounded-xl bg-agri-green-600 hover:bg-agri-green-500 text-white font-bold text-xs shadow transition-colors flex items-center gap-1 whitespace-nowrap"
              >
                <PhoneCall className="w-3 h-3" />
                <span>Connect</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
