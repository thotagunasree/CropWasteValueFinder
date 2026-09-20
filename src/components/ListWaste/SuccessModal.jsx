import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Building2, 
  Scale, 
  Share2,
  TrendingUp
} from 'lucide-react';
import { translations } from '../../data/translations';

export default function SuccessModal({ listing, onClose, onViewDashboard, language }) {
  if (!listing) return null;

  const t = translations[language]?.listWaste || translations.en.listWaste;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-agri-cream-300 shadow-2xl text-center space-y-5 animate-scaleUp">
        
        {/* Celebration Animated Icon */}
        <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-tr from-agri-green-700 to-agri-green-500 text-white flex items-center justify-center mx-auto shadow-xl shadow-agri-green-900/30">
          <CheckCircle2 className="w-10 h-10 text-white" />
          <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-agri-amber-400 text-slate-950 flex items-center justify-center text-xs font-bold animate-bounce">
            🌾
          </div>
        </div>

        {/* Title & Message */}
        <div>
          <span className="text-xs font-bold text-agri-green-800 bg-agri-green-100 px-3 py-1 rounded-full uppercase tracking-wider">
            Broadcast Live to Buyers
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
            {t.successTitle}
          </h3>
          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
            {t.successMessage}
          </p>
        </div>

        {/* Listing Highlights Box */}
        <div className="p-4 rounded-2xl bg-agri-cream-100 border border-agri-cream-300 text-left space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-900">
            <span>{listing.cropName}</span>
            <span className="text-agri-green-800">₹{listing.totalValue.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span>Quantity: {listing.quantity} {listing.unit}</span>
            <span>Location: {listing.village}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2">
          <button
            onClick={onViewDashboard}
            className="w-full py-3 px-4 rounded-xl bg-agri-green-800 hover:bg-agri-green-900 text-white font-bold text-xs shadow-lg shadow-agri-green-900/20 flex items-center justify-center gap-2 transition-all transform active:scale-95"
          >
            <span>View on Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
          >
            Add Another Listing
          </button>
        </div>

      </div>
    </div>
  );
}
