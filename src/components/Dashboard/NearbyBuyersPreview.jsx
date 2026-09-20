import React from 'react';
import { 
  Building2, 
  MapPin, 
  IndianRupee, 
  Star, 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight, 
  Truck,
  Sparkles
} from 'lucide-react';
import { nearbyBuyers } from '../../data/mockData';
import { translations } from '../../data/translations';

export default function NearbyBuyersPreview({ language, onConnectBuyer, onViewAllBuyers }) {
  const t = translations[language]?.dashboard || translations.en.dashboard;

  // Show top 3 nearest buyers
  const previewBuyers = nearbyBuyers.slice(0, 3);

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-xl bg-blue-100 text-blue-800">
            <Building2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">
              {t.nearbyBuyersTitle}
            </h3>
          </div>
        </div>

        <button
          onClick={onViewAllBuyers}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-agri-green-800 hover:text-agri-green-900 group"
        >
          <span>{t.viewAllBuyers}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 3 Buyer Cards in Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {previewBuyers.map((buyer) => (
          <div
            key={buyer.id}
            className="bg-white rounded-2xl p-4 border border-agri-cream-300 shadow-soft-agri hover:shadow-card-agri transition-all duration-300 flex flex-col justify-between space-y-3 group"
          >
            {/* Top Row: Avatar / Logo + Company Info */}
            <div className="flex items-start gap-3">
              <img
                src={buyer.image}
                alt={buyer.name}
                className="w-12 h-12 rounded-xl object-cover border border-slate-200 shadow-sm flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold text-slate-900 truncate group-hover:text-agri-green-800 transition-colors">
                    {buyer.name}
                  </h4>
                  {buyer.verified && (
                    <ShieldCheck className="w-3.5 h-3.5 text-agri-green-700 flex-shrink-0" />
                  )}
                </div>
                <p className="text-[11px] font-medium text-slate-500 truncate">
                  {buyer.category}
                </p>
                <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-600 font-semibold">
                  <span className="flex items-center gap-1 text-agri-green-800 bg-agri-green-50 px-1.5 py-0.5 rounded">
                    <MapPin className="w-2.5 h-2.5" />
                    {buyer.distanceKm} km
                  </span>
                  <span className="flex items-center gap-0.5 text-amber-600">
                    <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                    {buyer.rating} ({buyer.reviewsCount})
                  </span>
                </div>
              </div>
            </div>

            {/* Price & Accepted Wastes */}
            <div className="p-2.5 rounded-xl bg-agri-cream-100/80 border border-agri-cream-300 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[11px] font-medium text-slate-600">Buying Rate:</span>
                <span className="font-extrabold text-agri-green-900">{buyer.priceRange}</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-500">Pickup:</span>
                <span className="font-semibold text-slate-700 flex items-center gap-1">
                  <Truck className="w-3 h-3 text-agri-green-700" />
                  {buyer.turnaroundHours}
                </span>
              </div>
            </div>

            {/* Action Connect Button */}
            <button
              onClick={() => onConnectBuyer(buyer)}
              className="w-full py-2 px-3 rounded-xl bg-agri-green-800 hover:bg-agri-green-900 text-white text-xs font-bold transition-all shadow-md shadow-agri-green-900/10 flex items-center justify-center gap-2 active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{t.connectNow}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
