import React, { useState } from 'react';
import { 
  X, 
  Building2, 
  MapPin, 
  PhoneCall, 
  MessageSquare, 
  CheckCircle2, 
  Send, 
  Truck, 
  Calendar, 
  IndianRupee, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { translations } from '../../data/translations';

export default function ConnectModal({ buyer, onClose, onQuoteSent, language }) {
  const [wasteType, setWasteType] = useState(buyer?.acceptedWastes[0] || 'Paddy Straw');
  const [quantity, setQuantity] = useState(2.0);
  const [offeredRate, setOfferedRate] = useState(buyer?.pricePerKg || 3.8);
  const [pickupDate, setPickupDate] = useState('2026-09-02');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  if (!buyer) return null;

  const t = translations[language]?.buyers || translations.en.buyers;

  const totalCalculated = Math.round(quantity * 1000 * offeredRate);

  const handleSendQuote = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage({
        type: 'success',
        text: `Official quotation for ₹${totalCalculated.toLocaleString('en-IN')} sent directly to ${buyer.name}! Buyer rep will contact you on WhatsApp within 2 hours.`
      });
      if (onQuoteSent) {
        onQuoteSent({
          buyerName: buyer.name,
          totalAmount: totalCalculated,
          quantity: quantity
        });
      }
    }, 700);
  };

  const handleSimulateCall = () => {
    alert(`Dialing ${buyer.name} Procurement Desk at ${buyer.phone}... (Connected in Demo Mode)`);
  };

  const handleSimulateWhatsApp = () => {
    const text = encodeURIComponent(`Hello ${buyer.name}, I am User Name from Demo Village, Demo District. I have ${quantity} tonnes of ${wasteType} available for immediate collection at ₹${offeredRate}/kg.`);
    window.open(`https://wa.me/919417011223?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-agri-cream-300 shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 bg-gradient-to-r from-agri-green-900 to-agri-green-800 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={buyer.image}
              alt={buyer.name}
              className="w-12 h-12 rounded-xl object-cover border border-white/20 shadow-md"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                  {buyer.name}
                </h3>
                {buyer.verified && (
                  <ShieldCheck className="w-4 h-4 text-agri-amber-300" />
                )}
              </div>
              <p className="text-xs text-agri-green-200">
                {buyer.location} • {buyer.distanceKm} km away
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          
          {statusMessage ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-agri-green-100 text-agri-green-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Quote Dispatched Successfully!
              </h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                {statusMessage.text}
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-agri-green-800 text-white font-bold text-xs shadow-lg shadow-agri-green-900/20"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSendQuote} className="space-y-4">
              
              {/* Residue Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Residue Crop Type
                </label>
                <select
                  value={wasteType}
                  onChange={(e) => setWasteType(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs font-bold bg-agri-cream-100 rounded-xl border border-agri-cream-400 focus:border-agri-green-600 outline-none"
                >
                  {buyer.acceptedWastes.map((w, idx) => (
                    <option key={idx} value={w}>{w}</option>
                  ))}
                </select>
              </div>

              {/* Quantity & Rate Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Quantity (Tonnes)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.2"
                    max="100"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 text-xs font-bold bg-agri-cream-100 rounded-xl border border-agri-cream-400 focus:border-agri-green-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Offer Rate (₹ / kg)
                  </label>
                  <input
                    type="number"
                    step="0.05"
                    min="1.0"
                    max="20.0"
                    value={offeredRate}
                    onChange={(e) => setOfferedRate(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 text-xs font-bold bg-agri-cream-100 rounded-xl border border-agri-cream-400 focus:border-agri-green-600 outline-none"
                  />
                </div>
              </div>

              {/* Pickup Date */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Pickup Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-xs font-semibold bg-agri-cream-100 rounded-xl border border-agri-cream-400 focus:border-agri-green-600 outline-none"
                  />
                </div>
              </div>

              {/* Total Payout Estimation Card */}
              <div className="p-3.5 rounded-2xl bg-agri-green-50 border border-agri-green-300 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-agri-green-800 uppercase tracking-wider block">
                    Estimated Farmer Payout
                  </span>
                  <span className="text-xl font-extrabold text-agri-green-950">
                    ₹{totalCalculated.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="text-right text-[11px] text-agri-green-800 font-semibold">
                  <span>{(quantity * 1000).toLocaleString('en-IN')} kg total</span>
                </div>
              </div>

              {/* Quick WhatsApp / Direct Call Instant Actions */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleSimulateWhatsApp}
                  className="py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquire</span>
                </button>

                <button
                  type="button"
                  onClick={handleSimulateCall}
                  className="py-2 px-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Procurement</span>
                </button>
              </div>

              {/* Send Quote Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-xl bg-agri-green-800 hover:bg-agri-green-900 text-white font-bold text-xs shadow-lg shadow-agri-green-900/20 flex items-center justify-center gap-2 transition-all transform active:scale-95"
              >
                {isSubmitting ? (
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-agri-amber-300" />
                    <span>Submit Official Quote & Schedule</span>
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
