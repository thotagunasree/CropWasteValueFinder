import React from 'react';
import { 
  X, 
  Award, 
  CheckCircle2, 
  Printer, 
  Download, 
  Share2, 
  Leaf, 
  ShieldCheck, 
  Sparkles, 
  Sprout 
} from 'lucide-react';

export default function GreenCertificateModal({ onClose, farmerName = "User Name", stats }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-agri-cream-300 shadow-2xl overflow-hidden">
        
        {/* Modal Action Bar (Hidden in Print) */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-agri-amber-400" />
            <span className="text-xs font-bold text-white">
              Official Environmental Stewardship Certificate
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-agri-green-700 hover:bg-agri-green-600 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Official Certificate Body */}
        <div className="p-8 sm:p-12 bg-[#fdfcf7] text-center space-y-6 relative overflow-hidden border-8 border-agri-green-900/20 m-3 sm:m-6 rounded-2xl shadow-inner">
          
          {/* Certificate Ambient Seals */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-agri-amber-400/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-agri-green-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Certificate Header */}
          <div className="space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-agri-green-800 to-agri-green-950 text-agri-amber-300 flex items-center justify-center mx-auto shadow-lg border-2 border-agri-amber-400/40">
              <Sprout className="w-8 h-8" />
            </div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-agri-green-900">
              CropWasteValueFinder • National Agri-Circular Council
            </h2>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-serif">
              Certificate of Green Stewardship
            </h1>
            <p className="text-xs text-slate-500 italic">
              Awarded for Zero-Stubble Burning & Active Rural Bio-Economy Leadership
            </p>
          </div>

          {/* Recipient Details */}
          <div className="py-4 border-y border-agri-cream-400/80 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              This is proudly presented to
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-agri-green-950 font-serif">
              {farmerName}
            </h3>
            <p className="text-xs font-semibold text-slate-700">
              Demo Village, Demo District, Demo State • 8.5 Acres Certified
            </p>
          </div>

          {/* Verified Impact Numbers */}
          <div className="grid grid-cols-3 gap-3 py-2">
            <div className="p-3 rounded-xl bg-white border border-agri-cream-300 shadow-sm">
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Stubble Diverted</span>
              <span className="text-base sm:text-lg font-extrabold text-agri-green-900">14.2 Tonnes</span>
            </div>

            <div className="p-3 rounded-xl bg-white border border-agri-cream-300 shadow-sm">
              <span className="text-[10px] font-bold text-slate-500 uppercase block">CO₂ Prevented</span>
              <span className="text-base sm:text-lg font-extrabold text-agri-amber-900">3,450 kg</span>
            </div>

            <div className="p-3 rounded-xl bg-white border border-agri-cream-300 shadow-sm">
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Wealth Created</span>
              <span className="text-base sm:text-lg font-extrabold text-blue-900">₹48,600</span>
            </div>
          </div>

          {/* Signatures & Verifier Seal */}
          <div className="pt-6 flex items-center justify-between text-left text-xs text-slate-600">
            <div>
              <p className="font-bold text-slate-900 font-serif text-sm">Dr. Ramesh Chandra</p>
              <p className="text-[10px] text-slate-500">Chief Agri-Scientist, Bio-Value Hub</p>
            </div>

            {/* Stamp Seal */}
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-agri-green-800 flex items-center justify-center text-center p-1 text-[8px] font-bold uppercase text-agri-green-800 rotate-[-12deg]">
              VERIFIED SUSTAINABLE 2026
            </div>

            <div className="text-right">
              <p className="font-bold text-slate-900 text-sm">ID: CWVF-DEMO-0001</p>
              <p className="text-[10px] text-slate-500">Issued: August 2026</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
