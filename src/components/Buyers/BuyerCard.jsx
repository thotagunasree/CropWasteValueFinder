import React from 'react';
import { 
  Building2, 
  MapPin, 
  IndianRupee, 
  Star, 
  ShieldCheck, 
  Truck, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';
import { translations } from '../../data/translations';

export default function BuyerCard({ buyer, onConnect, language }) {
  const t = translations[language]?.buyers || translations.en.buyers;

  return (
    <div className="bg-white rounded-3xl p-5 border border-agri-cream-300 shadow-soft-agri hover:shadow-card-agri transition-all duration-300 flex flex-col justify-between space-y-4 group">
      
      {/* Top Header with Image & Title */}
      <div>
        <div className="flex items-start gap-3.5">
          <img
            src={buyer.image}
            alt={buyer.name}
            className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h4 className="text-sm font-bold text-slate-900 truncate group-hover:text-agri-green-800 transition-colors">
                {buyer.name}
              </h4>
              {buyer.verified && (
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-agri-green-100 text-agri-green-800 text-[10px] font-bold border border-agri-green-300">
                  <ShieldCheck className="w-3 h-3" />
                  Verified
                </span>
              )}
            </div>

            <p className="text-xs font-semibold text-agri-brown-700 mt-0.5">
              {buyer.category}
            </p>

            <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-600">
              <span className="flex items-center gap-1 font-semibold text-agri-green-900 bg-agri-green-50 px-2 py-0.5 rounded-md">
                <MapPin className="w-3 h-3 text-agri-green-700" />
                {buyer.distanceKm} km {t.buyerDistance}
              </span>
              <span className="flex items-center gap-1 font-bold text-amber-700">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                {buyer.rating} ({buyer.reviewsCount})
              </span>
            </div>
          </div>
        </div>

        {/* Badge Description */}
        {buyer.badge && (
          <div className="mt-3 px-2.5 py-1 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-900 text-[11px] font-semibold flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
            <span className="truncate">{buyer.badge}</span>
          </div>
        )}

        {/* Accepted Waste Types Tags */}
        <div className="mt-3">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-1.5">
            Residue Accepted
          </span>
          <div className="flex flex-wrap gap-1.5">
            {buyer.acceptedWastes.map((waste, i) => (
              <span
                key={i}
                className="text-[11px] font-semibold bg-agri-cream-100 text-slate-700 px-2.5 py-0.5 rounded-lg border border-agri-cream-300"
              >
                {waste}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing & Min Order Specs Box */}
      <div className="space-y-3 pt-2 border-t border-slate-100">
        <div className="p-3 rounded-2xl bg-gradient-to-br from-agri-cream-100 to-agri-cream-50 border border-agri-cream-300 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-500 block">
              {t.priceTag}
            </span>
            <span className="text-sm font-extrabold text-agri-green-950">
              {buyer.priceRange}
            </span>
          </div>

          <div className="text-right">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">
              {t.minOrder}
            </span>
            <span className="text-xs font-bold text-slate-700">
              {buyer.minQuantity}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onConnect(buyer)}
          className="w-full py-2.5 px-4 rounded-xl bg-agri-green-800 hover:bg-agri-green-900 text-white font-bold text-xs shadow-md shadow-agri-green-900/15 flex items-center justify-center gap-2 transition-all transform active:scale-95 group-hover:bg-agri-green-900"
        >
          <PhoneCall className="w-3.5 h-3.5 text-agri-amber-300" />
          <span>Connect & Send Quote</span>
          <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  );
}
