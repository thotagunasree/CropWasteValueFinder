import React from 'react';
import StatCards from './StatCards';
import EarningsChart from './EarningsChart';
import RecommendedGrid from './RecommendedGrid';
import NearbyBuyersPreview from './NearbyBuyersPreview';
import {
  PlusCircle,
  Search,
  Lightbulb,
  Leaf,
  Package,
  ArrowUpRight,
  Flame,
  IndianRupee,
  Scale,
  Sparkles,
  Award,
} from 'lucide-react';
import { translations } from '../../data/translations';

export default function DashboardView({
  language,
  listings,
  farmerProfile,
  onNavigateTab,
  onSelectIdea,
  onConnectBuyer,
  onOpenCertificate,
}) {
  const t = translations[language]?.dashboard || translations.en.dashboard;

  const totalActiveTonnes = listings.reduce(
    (acc, curr) => acc + (curr.unit === 'tonnes' ? curr.quantity : curr.quantity / 10),
    0
  );
  const totalEstValue = listings.reduce((acc, curr) => acc + curr.totalValue, 0);

  return (
    <div className="space-y-6 pb-12 animate-fadeIn">

      {/* Hero Welcome Banner */}
      <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-agri-green-900 via-agri-green-800 to-agri-green-950 text-white overflow-hidden shadow-xl border border-agri-green-700/50">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agri-amber-400/20 text-agri-amber-300 border border-agri-amber-400/30 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kisan Circular Bio-Economy Platform</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Turn Crop Residue into Guaranteed Cash Flow
          </h2>
          <p className="text-xs sm:text-sm text-agri-green-100 leading-relaxed">
            Connect your paddy straw, sugarcane bagasse, and crop stalks with verified buyers or convert them into high-yield biochar and mushrooms.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigateTab('list-waste')}
              className="px-4 py-2.5 rounded-xl bg-agri-amber-500 hover:bg-agri-amber-600 text-slate-950 font-bold text-xs shadow-lg flex items-center gap-2 transition-all active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{t.quickListWaste}</span>
            </button>

            <button
              onClick={() => onNavigateTab('buyers')}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs backdrop-blur-md border border-white/20 flex items-center gap-2 transition-all"
            >
              <Search className="w-4 h-4 text-agri-amber-300" />
              <span>{t.viewAllBuyers}</span>
            </button>

            <button
              onClick={onOpenCertificate}
              className="px-4 py-2.5 rounded-xl bg-agri-green-700/60 hover:bg-agri-green-700 text-agri-green-100 font-semibold text-xs border border-agri-green-500/40 flex items-center gap-1.5 transition-all"
            >
              <Award className="w-4 h-4 text-agri-amber-300" />
              <span>Green Certificate</span>
            </button>
          </div>
        </div>

        <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-agri-green-500/10 blur-3xl pointer-events-none" />
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 text-9xl opacity-15 pointer-events-none select-none">
          🌾
        </div>
      </div>

      {/* Stat Cards */}
      <StatCards
        language={language}
        wasteTonnes={parseFloat(totalActiveTonnes.toFixed(1))}
        estValue={totalEstValue}
        buyerCount={12}
        co2SavedKg={farmerProfile?.co2SavedKg || 0}
        farmSizeAcres={farmerProfile?.farmSizeAcres}
      />

      {/* Earnings Chart */}
      <EarningsChart language={language} listings={listings} />

      {/* Recommended */}
      <RecommendedGrid
        language={language}
        onSelectIdea={onSelectIdea}
        onExploreMore={() => onNavigateTab('value-ideas')}
      />

      {/* Nearby Buyers */}
      <NearbyBuyersPreview
        language={language}
        onConnectBuyer={onConnectBuyer}
        onViewAllBuyers={() => onNavigateTab('buyers')}
      />

      {/* Active Listings Section */}
      <div className="bg-white rounded-3xl p-6 border border-agri-cream-300 shadow-soft-agri">
        <div className="flex items-center justify-between pb-4 border-b border-agri-cream-200">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-xl bg-agri-green-100 text-agri-green-800">
              <Package className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Your Active Waste Listings</h3>
              <p className="text-xs text-slate-500">Visible to all nearby bio-energy and paper mill buyers</p>
            </div>
          </div>
          <button
            onClick={() => onNavigateTab('list-waste')}
            className="text-xs font-bold text-agri-green-800 hover:text-agri-green-900 flex items-center gap-1"
          >
            <span>+ Add Listing</span>
          </button>
        </div>

        {listings.length === 0 ? (
          /* Empty State */
          <div className="py-12 text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-agri-cream-100 border border-agri-cream-300 flex items-center justify-center mx-auto">
              <Package className="w-8 h-8 text-slate-400" />
            </div>
            <p className="text-base font-bold text-slate-700">No crop-waste listings yet</p>
            <p className="text-sm text-slate-500 max-w-xs mx-auto">
              Create your first listing to start earning from crop residue and connect with verified buyers.
            </p>
            <button
              onClick={() => onNavigateTab('list-waste')}
              className="mt-3 px-5 py-2.5 rounded-xl bg-agri-amber-500 hover:bg-agri-amber-600 text-slate-950 font-bold text-xs shadow-md flex items-center gap-2 mx-auto transition-all active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>List Your First Waste</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {listings.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-agri-cream-100/70 border border-agri-cream-300 flex items-center justify-between gap-3 hover:bg-agri-cream-200/60 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <img
                    src={item.image}
                    alt={item.cropName}
                    className="w-14 h-14 rounded-xl object-cover border border-slate-200 shadow-sm"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900">{item.cropName}</h4>
                      <span className="text-[10px] bg-agri-green-100 text-agri-green-800 font-bold px-2 py-0.5 rounded-full border border-agri-green-300">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium mt-0.5">
                      {item.quantity} {item.unit} • {item.wasteType}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      {item.village}, {item.district}
                    </p>
                  </div>
                </div>
                <div className="text-right flex flex-col justify-between h-14">
                  <span className="text-base font-extrabold text-agri-green-950">
                    ₹{item.totalValue.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] text-agri-amber-700 font-bold">
                    {item.interestedBuyers} Buyers
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
