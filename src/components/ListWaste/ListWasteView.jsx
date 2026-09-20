import React, { useState } from 'react';
import LiveValuationCard from './LiveValuationCard';
import SuccessModal from './SuccessModal';
import { 
  PlusCircle, 
  Upload, 
  Image as ImageIcon, 
  MapPin, 
  IndianRupee, 
  Scale, 
  Droplets, 
  Truck, 
  CheckCircle2, 
  Sparkles,
  Camera,
  X
} from 'lucide-react';
import { samplePresetPhotos, cropImages } from '../../data/mockData';
import { translations } from '../../data/translations';

export default function ListWaste({ language, onAddListing, onNavigateDashboard }) {
  const [cropType, setCropType] = useState('Paddy Straw');
  const [wasteType, setWasteType] = useState('Dry Baled Straw');
  const [quantity, setQuantity] = useState(2.4);
  const [unit, setUnit] = useState('tonnes');
  const [expectedPrice, setExpectedPrice] = useState(3800);
  const [moisture, setMoisture] = useState(12);
  const [village, setVillage] = useState('Demo Village');
  const [district, setDistrict] = useState('Demo District, Demo State');
  const [deliveryMode, setDeliveryMode] = useState('Buyer Pickup Available');
  const [selectedPhoto, setSelectedPhoto] = useState(cropImages.paddyStraw);
  const [photoPreviewName, setPhotoPreviewName] = useState('Paddy Straw (Dry Bales)');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdListing, setCreatedListing] = useState(null);

  const t = translations[language]?.listWaste || translations.en.listWaste;

  const cropOptions = [
    { name: 'Paddy Straw', condition: 'Dry Baled Straw', baseRate: 3800, img: cropImages.paddyStraw },
    { name: 'Sugarcane Bagasse', condition: 'Crushed Fibrous Bagasse', baseRate: 3600, img: cropImages.sugarcaneBagasse },
    { name: 'Wheat Straw', condition: 'Chopped Wheat Stubble (Tuuri)', baseRate: 4200, img: cropImages.paddyStraw },
    { name: 'Coconut Husk', condition: 'Coir & Peat Raw', baseRate: 5000, img: cropImages.coconutHusk },
    { name: 'Banana Stem', condition: 'Fresh Pseudo-Stem Sheaths', baseRate: 2500, img: cropImages.bananaStem },
    { name: 'Cotton Stalks', condition: 'Woody Biomass Stalks', baseRate: 3900, img: cropImages.cottonStalks },
    { name: 'Mustard Husk', condition: 'Granular Yellow Husk', baseRate: 4100, img: cropImages.mustardHusk },
    { name: 'Groundnut Shells', condition: 'Dry Outer Pods', baseRate: 4400, img: cropImages.groundnutShells }
  ];

  const handleCropChange = (cropName) => {
    setCropType(cropName);
    const matched = cropOptions.find(c => c.name === cropName);
    if (matched) {
      setWasteType(matched.condition);
      setExpectedPrice(matched.baseRate);
      setSelectedPhoto(matched.img);
      setPhotoPreviewName(`${matched.name} Sample`);
    }
  };

  const handleApplyPresetPhoto = (preset) => {
    setCropType(preset.crop);
    setWasteType(preset.type);
    setSelectedPhoto(preset.url);
    setPhotoPreviewName(preset.label);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        setSelectedPhoto(uploadEvent.target.result);
        setPhotoPreviewName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const qtyInTonnes = unit === 'tonnes' ? Number(quantity) : unit === 'quintals' ? Number(quantity) / 10 : Number(quantity) / 1000;
    const totalVal = Math.round(qtyInTonnes * Number(expectedPrice));

    const newListing = {
      id: `lst-${Date.now()}`,
      cropName: cropType,
      cropType: cropType,
      wasteType: wasteType,
      quantity: Number(quantity),
      unit: unit,
      pricePerUnit: Number(expectedPrice),
      totalValue: totalVal,
      village: village,
      district: district,
      status: "Active",
      postedDate: "Just now",
      moisturePercent: Number(moisture),
      deliveryMode: deliveryMode,
      image: selectedPhoto,
      interestedBuyers: Math.floor(Math.random() * 4) + 2
    };

    setTimeout(() => {
      setIsSubmitting(false);
      onAddListing(newListing);
      setCreatedListing(newListing);
    }, 600);
  };

  return (
    <div className="space-y-6 pb-12 animate-fadeIn">
      
      {/* Page Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
          <span>{t.title}</span>
          <span className="text-xs bg-agri-amber-100 text-agri-amber-900 font-bold px-2.5 py-0.5 rounded-full border border-agri-amber-300">
            Instant Match
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          {t.subtitle}
        </p>
      </div>

      {/* Grid: Form (Left) & Realtime AI Valuation (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Form Container */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-agri-cream-300 shadow-soft-agri space-y-6">
          
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Crop Type Picker */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {t.cropTypeLabel}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {cropOptions.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => handleCropChange(c.name)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all flex flex-col justify-between h-16 ${
                      cropType === c.name 
                        ? 'bg-agri-green-800 text-white border-agri-green-900 shadow-md shadow-agri-green-900/20' 
                        : 'bg-agri-cream-100 text-slate-700 border-agri-cream-300 hover:bg-agri-cream-200'
                    }`}
                  >
                    <span className="leading-tight">{c.name}</span>
                    <span className={`text-[10px] ${cropType === c.name ? 'text-agri-amber-300' : 'text-slate-500'}`}>
                      ₹{c.baseRate}/t
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Waste Condition & Quantity Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.wasteTypeLabel}
                </label>
                <input
                  type="text"
                  value={wasteType}
                  onChange={(e) => setWasteType(e.target.value)}
                  placeholder="e.g. Dry Baled Stubble"
                  className="w-full px-3.5 py-2.5 text-xs font-bold bg-agri-cream-100 rounded-xl border border-agri-cream-400 focus:border-agri-green-600 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.quantityLabel} & Unit
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    step="0.1"
                    min="0.1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs font-bold bg-agri-cream-100 rounded-xl border border-agri-cream-400 focus:border-agri-green-600 outline-none"
                    required
                  />
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="px-3 py-2.5 text-xs font-bold bg-agri-cream-100 rounded-xl border border-agri-cream-400 focus:border-agri-green-600 outline-none"
                  >
                    <option value="tonnes">Tonnes</option>
                    <option value="quintals">Quintals</option>
                    <option value="kg">kg</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Expected Price & Moisture */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.expectedPriceLabel} ({unit})
                </label>
                <div className="relative">
                  <IndianRupee className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="number"
                    step="50"
                    value={expectedPrice}
                    onChange={(e) => setExpectedPrice(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-xs font-bold bg-agri-cream-100 rounded-xl border border-agri-cream-400 focus:border-agri-green-600 outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-700">
                    {t.moistureLabel}: <span className="text-agri-green-800">{moisture}%</span>
                  </label>
                  <span className="text-[10px] text-slate-500">
                    {moisture < 15 ? 'Ideal Dry' : 'Damp / High Moisture'}
                  </span>
                </div>
                <div className="pt-2">
                  <input
                    type="range"
                    min="5"
                    max="35"
                    value={moisture}
                    onChange={(e) => setMoisture(Number(e.target.value))}
                    className="w-full accent-agri-green-700 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Location & Delivery Mode */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.locationLabel}
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={village}
                    onChange={(e) => setVillage(e.target.value)}
                    placeholder="e.g. Demo Farm #1"
                    className="w-full pl-10 pr-4 py-2.5 text-xs font-bold bg-agri-cream-100 rounded-xl border border-agri-cream-400 focus:border-agri-green-600 outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.deliveryLabel}
                </label>
                <select
                  value={deliveryMode}
                  onChange={(e) => setDeliveryMode(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs font-bold bg-agri-cream-100 rounded-xl border border-agri-cream-400 focus:border-agri-green-600 outline-none"
                >
                  <option value="Buyer Pickup Available">Buyer Pickup Available (Tractor / Fleet)</option>
                  <option value="Farmer Self Delivery">Farmer Self Delivery to Plant</option>
                  <option value="Negotiable on Quote">Negotiable on Quote</option>
                </select>
              </div>
            </div>

            {/* Photo Upload & Preview Section */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold text-slate-700">
                {t.photoLabel}
              </label>

              {/* Selected Photo Preview Banner */}
              <div className="relative h-44 rounded-2xl overflow-hidden border border-agri-cream-300 group">
                <img
                  src={selectedPhoto}
                  alt={photoPreviewName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] text-agri-amber-300 font-bold uppercase tracking-wider block">
                      Active Photo Preview
                    </span>
                    <span className="text-xs font-bold truncate max-w-xs block">
                      {photoPreviewName}
                    </span>
                  </div>

                  <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-bold border border-white/30 flex items-center gap-1.5 transition-colors">
                    <Camera className="w-3.5 h-3.5" />
                    <span>Change Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* 1-Click Quick Preset Sample Crop Photos */}
              <div>
                <span className="text-[11px] font-bold text-slate-500 block mb-1.5">
                  Or pick a sample photo preset:
                </span>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {samplePresetPhotos.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleApplyPresetPhoto(preset)}
                      className={`relative rounded-xl overflow-hidden h-14 border transition-all ${
                        selectedPhoto === preset.url ? 'ring-2 ring-agri-green-600 scale-105' : 'opacity-80 hover:opacity-100'
                      }`}
                    >
                      <img src={preset.url} alt={preset.label} className="w-full h-full object-cover" />
                      <span className="absolute inset-0 bg-black/40 flex items-center justify-center text-[9px] text-white font-bold p-1 text-center leading-tight">
                        {preset.crop.split(' ')[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-2xl bg-agri-green-800 hover:bg-agri-green-900 text-white font-extrabold text-sm shadow-xl shadow-agri-green-900/25 flex items-center justify-center gap-2 transition-all transform active:scale-98"
            >
              {isSubmitting ? (
                <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <>
                  <PlusCircle className="w-5 h-5 text-agri-amber-300" />
                  <span>{t.submitBtn}</span>
                </>
              )}
            </button>

          </form>

        </div>

        {/* Real-Time Live AI Valuation Side Panel */}
        <div className="lg:col-span-5">
          <LiveValuationCard
            cropType={cropType}
            quantity={quantity}
            unit={unit}
            expectedPrice={expectedPrice}
            moisture={moisture}
            language={language}
          />
        </div>

      </div>

      {/* Success Modal Confirmation */}
      {createdListing && (
        <SuccessModal
          listing={createdListing}
          onClose={() => setCreatedListing(null)}
          onViewDashboard={onNavigateDashboard}
          language={language}
        />
      )}

    </div>
  );
}
