import React, { useState } from 'react';
import VisualMapSection from './VisualMapSection';
import BuyerCard from './BuyerCard';
import ConnectModal from './ConnectModal';
import { 
  Search, 
  Filter, 
  MapPin, 
  ShieldCheck, 
  Building2, 
  Layers, 
  X, 
  SlidersHorizontal,
  Map,
  ListFilter
} from 'lucide-react';
import { nearbyBuyers } from '../../data/mockData';
import { translations } from '../../data/translations';

export default function FindBuyersView({ language, onQuoteSent }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedDistance, setSelectedDistance] = useState(30);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [activeModalBuyer, setActiveModalBuyer] = useState(null);
  const [viewMode, setViewMode] = useState('both'); // 'both' | 'map' | 'cards'

  const t = translations[language]?.buyers || translations.en.buyers;

  const cropFilterOptions = [
    { value: 'all', label: 'All Crops' },
    { value: 'Paddy Straw', label: 'Paddy Straw' },
    { value: 'Sugarcane Bagasse', label: 'Sugarcane Bagasse' },
    { value: 'Wheat Straw', label: 'Wheat Straw' },
    { value: 'Cotton Stalks', label: 'Cotton Stalks' },
    { value: 'Mustard Husk', label: 'Mustard Husk' },
    { value: 'Groundnut Shells', label: 'Groundnut Shells' }
  ];

  const locationOptions = [
    { value: 'all', label: 'All Districts' },
    { value: 'Patiala', label: 'Patiala, Punjab' },
    { value: 'Mohali', label: 'Mohali, Punjab' },
    { value: 'Bathinda', label: 'Bathinda, Punjab' },
    { value: 'SAS Nagar', label: 'SAS Nagar, Punjab' }
  ];

  // Filter Logic
  const filteredBuyers = nearbyBuyers.filter((b) => {
    const matchesSearch = 
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.acceptedWastes.some(w => w.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCrop = selectedCrop === 'all' || b.acceptedWastes.includes(selectedCrop);
    const matchesLocation = selectedLocation === 'all' || b.district.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesDistance = b.distanceKm <= selectedDistance;
    const matchesVerified = !verifiedOnly || b.verified;

    return matchesSearch && matchesCrop && matchesLocation && matchesDistance && matchesVerified;
  });

  return (
    <div className="space-y-6 pb-12 animate-fadeIn">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <span>{t.title}</span>
            <span className="text-xs bg-agri-green-100 text-agri-green-800 font-bold px-2.5 py-0.5 rounded-full border border-agri-green-300">
              {filteredBuyers.length} Available
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {t.subtitle}
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 bg-agri-cream-100 p-1 rounded-2xl border border-agri-cream-300 self-start sm:self-auto">
          <button
            onClick={() => setViewMode('both')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
              viewMode === 'both' ? 'bg-agri-green-800 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
              viewMode === 'map' ? 'bg-agri-green-800 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Radar Map
          </button>
          <button
            onClick={() => setViewMode('cards')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
              viewMode === 'cards' ? 'bg-agri-green-800 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Buyer List ({filteredBuyers.length})
          </button>
        </div>
      </div>

      {/* Search & Comprehensive Multi-Filter Bar */}
      <div className="bg-white rounded-3xl p-5 border border-agri-cream-300 shadow-soft-agri space-y-4">
        
        {/* Search Input Row */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-12 pr-10 py-3 text-xs sm:text-sm font-semibold bg-agri-cream-100/60 rounded-2xl border border-agri-cream-300 focus:border-agri-green-600 focus:ring-2 focus:ring-agri-green-500/20 outline-none transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
          
          <div className="flex flex-wrap items-center gap-2">
            {/* Crop Select */}
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="px-3 py-1.5 text-xs font-bold bg-agri-cream-100 text-slate-700 rounded-xl border border-agri-cream-300 outline-none focus:border-agri-green-600"
            >
              {cropFilterOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>

            {/* Location Select */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-3 py-1.5 text-xs font-bold bg-agri-cream-100 text-slate-700 rounded-xl border border-agri-cream-300 outline-none focus:border-agri-green-600"
            >
              {locationOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>

            {/* Verified Toggle */}
            <button
              onClick={() => setVerifiedOnly(!verifiedOnly)}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-colors flex items-center gap-1.5 ${
                verifiedOnly 
                  ? 'bg-agri-green-100 text-agri-green-900 border-agri-green-400' 
                  : 'bg-agri-cream-100 text-slate-600 border-agri-cream-300 hover:bg-agri-cream-200'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-agri-green-700" />
              <span>{t.verifiedOnly}</span>
            </button>
          </div>

          {/* Active Filter Reset */}
          {(selectedCrop !== 'all' || selectedLocation !== 'all' || verifiedOnly || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCrop('all');
                setSelectedLocation('all');
                setVerifiedOnly(false);
                setSearchQuery('');
              }}
              className="text-xs text-rose-700 font-bold hover:underline"
            >
              Clear Filters
            </button>
          )}

        </div>
      </div>

      {/* Visual Map Radar Section */}
      {(viewMode === 'both' || viewMode === 'map') && (
        <VisualMapSection
          buyers={filteredBuyers}
          selectedDistance={selectedDistance}
          setSelectedDistance={setSelectedDistance}
          onConnectBuyer={(b) => setActiveModalBuyer(b)}
          language={language}
        />
      )}

      {/* Buyer Cards Grid */}
      {(viewMode === 'both' || viewMode === 'cards') && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">
              Direct Off-Taker Directory ({filteredBuyers.length} verified buyers)
            </h3>
          </div>

          {filteredBuyers.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-agri-cream-300 space-y-3">
              <div className="w-12 h-12 rounded-full bg-agri-amber-100 text-agri-amber-700 flex items-center justify-center mx-auto text-xl">
                🔍
              </div>
              <h4 className="text-base font-bold text-slate-900">No matching buyers found</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Try expanding your search distance radius or clearing crop filters to see more results.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredBuyers.map((buyer) => (
                <BuyerCard
                  key={buyer.id}
                  buyer={buyer}
                  onConnect={(b) => setActiveModalBuyer(b)}
                  language={language}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Connect & Quote Modal */}
      {activeModalBuyer && (
        <ConnectModal
          buyer={activeModalBuyer}
          onClose={() => setActiveModalBuyer(null)}
          onQuoteSent={onQuoteSent}
          language={language}
        />
      )}

    </div>
  );
}
