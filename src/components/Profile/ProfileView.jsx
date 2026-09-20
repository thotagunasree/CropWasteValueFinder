import React, { useState, useEffect } from 'react';
import {
  User,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  IndianRupee,
  Scale,
  Leaf,
  Trash2,
  CheckCircle2,
  Globe,
  CreditCard,
  Bell,
  Save,
  Award,
  Edit3,
  X,
  PlusCircle,
  Package,
} from 'lucide-react';
import { translations } from '../../data/translations';

const LANGUAGES = [
  { code: 'en', name: 'English (India)' },
  { code: 'hi', name: 'हिन्दी (Hindi)' },
  { code: 'pb', name: 'ਪੰਜਾਬੀ (Punjabi)' },
  { code: 'te', name: 'తెలుగు (Telugu)' },
];

// ─── Editable Field ────────────────────────────────────────────────────────
function EField({ label, icon: Icon, value, onChange, placeholder, type = 'text', step }) {
  return (
    <div>
      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">{label}</label>
      <div className="relative">
        {Icon && <Icon className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />}
        <input
          type={type}
          step={step}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full ${Icon ? 'pl-9' : 'pl-3'} pr-3 py-2 text-sm bg-agri-cream-100 rounded-xl border border-agri-cream-400 focus:border-agri-green-600 focus:ring-2 focus:ring-agri-green-500/20 outline-none transition-all`}
        />
      </div>
    </div>
  );
}

export default function ProfileView({
  farmerProfile,
  listings,
  onDeleteListing,
  onUpdateProfile,
  language,
  setLanguage,
  onOpenCertificate,
  onNavigateTab,
}) {
  const [isEditing, setIsEditing]     = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [smsAlerts, setSmsAlerts]     = useState(true);
  const [autoQuote, setAutoQuote]     = useState(false);

  // Edit form state — seeded from farmerProfile
  const [editForm, setEditForm] = useState({
    name:             farmerProfile?.name            || '',
    mobile:           farmerProfile?.mobile          || '',
    email:            farmerProfile?.email           || '',
    village:          farmerProfile?.village         || '',
    district:         farmerProfile?.district        || '',
    state:            farmerProfile?.state           || '',
    farmSizeAcres:    farmerProfile?.farmSizeAcres   || '',
    upiId:            farmerProfile?.upiId           || '',
    preferredLanguage: farmerProfile?.preferredLanguage || 'en',
  });

  // Keep form in sync if profile prop changes (e.g. after parent update)
  useEffect(() => {
    if (farmerProfile) {
      setEditForm({
        name:              farmerProfile.name            || '',
        mobile:            farmerProfile.mobile          || '',
        email:             farmerProfile.email           || '',
        village:           farmerProfile.village         || '',
        district:          farmerProfile.district        || '',
        state:             farmerProfile.state           || '',
        farmSizeAcres:     farmerProfile.farmSizeAcres   || '',
        upiId:             farmerProfile.upiId           || '',
        preferredLanguage: farmerProfile.preferredLanguage || 'en',
      });
    }
  }, [farmerProfile]);

  const t = translations[language]?.profile || translations.en.profile;

  const set = (field) => (e) => setEditForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSaveProfile = (e) => {
    e.preventDefault();
    if (!editForm.name.trim()) return;
    onUpdateProfile({
      ...editForm,
      farmSizeAcres: parseFloat(editForm.farmSizeAcres) || farmerProfile.farmSizeAcres,
    });
    setSavedSuccess(true);
    setIsEditing(false);
    setTimeout(() => setSavedSuccess(false), 3500);
  };

  const handleCancelEdit = () => {
    // Reset to current profile
    setEditForm({
      name:              farmerProfile.name            || '',
      mobile:            farmerProfile.mobile          || '',
      email:             farmerProfile.email           || '',
      village:           farmerProfile.village         || '',
      district:          farmerProfile.district        || '',
      state:             farmerProfile.state           || '',
      farmSizeAcres:     farmerProfile.farmSizeAcres   || '',
      upiId:             farmerProfile.upiId           || '',
      preferredLanguage: farmerProfile.preferredLanguage || 'en',
    });
    setIsEditing(false);
  };

  const profile = farmerProfile || {};
  const initials = profile.name
    ? profile.name.split(' ').map((n) => n[0]).join('').substring(0, 2).toUpperCase()
    : '?';

  return (
    <div className="space-y-6 pb-12 animate-fadeIn">

      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <span>{t.title}</span>
            {profile.sustainabilityBadge && (
              <span className="text-xs bg-agri-green-100 text-agri-green-900 font-bold px-2.5 py-0.5 rounded-full border border-agri-green-300">
                {profile.sustainabilityBadge}
              </span>
            )}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage your agricultural details, payment UPI ID, and residue listings
          </p>
        </div>

        {/* Edit Profile Toggle */}
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            id="edit-profile-btn"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-agri-green-50 hover:bg-agri-green-100 text-agri-green-900 border border-agri-green-300 font-bold text-xs transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Profile</span>
          </button>
        ) : (
          <button
            onClick={handleCancelEdit}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-bold text-xs transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            <span>Cancel</span>
          </button>
        )}
      </div>

      {/* Success Banner */}
      {savedSuccess && (
        <div className="p-3 rounded-xl bg-agri-green-50 border border-agri-green-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-agri-green-700 flex-shrink-0" />
          <p className="text-xs font-bold text-agri-green-800">Profile updated successfully!</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* ── Left Column ─────────────────────────────────────────────── */}
        <div className="lg:col-span-5 space-y-6">

          {/* Farmer ID Card */}
          <div className="bg-white rounded-3xl p-6 border border-agri-cream-300 shadow-soft-agri space-y-5">

            {!isEditing ? (
              /* VIEW MODE */
              <>
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  {/* Avatar */}
                  {profile.avatar ? (
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-agri-green-600 shadow-md flex-shrink-0"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-agri-amber-400 to-agri-green-600 flex items-center justify-center font-bold text-white text-2xl shadow-md flex-shrink-0">
                      {initials}
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <h3 className="text-lg font-bold text-slate-900">{profile.name}</h3>
                      <ShieldCheck className="w-5 h-5 text-agri-green-700" />
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {[profile.village, profile.district, profile.state].filter(Boolean).join(', ')}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">@{profile.username}</p>
                    {profile.sustainabilityBadge && (
                      <span className="inline-block mt-2 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-agri-amber-100 text-agri-amber-900 border border-agri-amber-300">
                        {profile.sustainabilityBadge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Farm Specs */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-xs">
                  <div className="p-3 rounded-xl bg-agri-cream-100/70 border border-agri-cream-300">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Cultivated Land</span>
                    <span className="text-sm font-extrabold text-slate-900">{profile.farmSizeAcres} Acres</span>
                  </div>
                  <div className="p-3 rounded-xl bg-agri-cream-100/70 border border-agri-cream-300">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Total Monetized</span>
                    <span className="text-sm font-extrabold text-agri-green-950">
                      ₹{(profile.totalEarningsToDate || 0).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-agri-green-700 flex-shrink-0" />
                    <span>{profile.mobile || '—'}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-agri-green-700 flex-shrink-0" />
                    <span>{profile.email || '—'}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <IndianRupee className="w-4 h-4 text-agri-green-700 flex-shrink-0" />
                    <span>UPI: {profile.upiId || '—'}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-agri-green-700 flex-shrink-0" />
                    <span>Member since {profile.memberSince || '—'}</span>
                  </div>
                </div>

                {/* Green Certificate */}
                <button
                  onClick={onOpenCertificate}
                  className="w-full py-2.5 px-4 rounded-xl bg-agri-green-50 hover:bg-agri-green-100 text-agri-green-900 border border-agri-green-300 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Award className="w-4 h-4 text-agri-amber-600" />
                  <span>View National Green Certificate</span>
                </button>
              </>
            ) : (
              /* EDIT MODE */
              <form onSubmit={handleSaveProfile} className="space-y-3">
                <p className="text-xs font-bold text-agri-green-800 border-b border-agri-cream-200 pb-2">
                  Editing Profile
                </p>

                <EField label="Full Name" icon={User} value={editForm.name} onChange={set('name')} placeholder="Your full name" />
                <EField label="Mobile Number" icon={Phone} value={editForm.mobile} onChange={set('mobile')} placeholder="+91 98765 43210" />
                <EField label="Email" icon={Mail} value={editForm.email} onChange={set('email')} placeholder="your@email.com" />
                <EField label="Village" icon={MapPin} value={editForm.village} onChange={set('village')} placeholder="Village" />
                <EField label="District" icon={MapPin} value={editForm.district} onChange={set('district')} placeholder="District" />
                <EField label="State" icon={MapPin} value={editForm.state} onChange={set('state')} placeholder="State" />
                <EField label="Cultivated Land (Acres)" icon={Scale} type="number" step="0.1"
                  value={editForm.farmSizeAcres} onChange={set('farmSizeAcres')} placeholder="e.g. 5.5" />
                <EField label="UPI ID" icon={IndianRupee} value={editForm.upiId} onChange={set('upiId')} placeholder="name@upi" />

                {/* Language Selector inside edit */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">Preferred Language</label>
                  <div className="grid grid-cols-2 gap-2">
                    {LANGUAGES.map((l) => (
                      <button
                        key={l.code}
                        type="button"
                        onClick={() => setEditForm((f) => ({ ...f, preferredLanguage: l.code }))}
                        className={`py-1.5 rounded-xl text-xs font-bold border transition-all ${
                          editForm.preferredLanguage === l.code
                            ? 'bg-agri-green-800 text-white border-agri-green-950'
                            : 'bg-agri-cream-100 text-slate-700 border-agri-cream-300'
                        }`}
                      >
                        {l.name}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  id="save-profile-btn"
                  className="w-full py-2.5 px-4 rounded-xl bg-agri-green-800 hover:bg-agri-green-900 text-white font-bold text-xs shadow flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Profile</span>
                </button>
              </form>
            )}
          </div>

          {/* UPI / Payment Card (view-only when editing; visible in both modes) */}
          {!isEditing && (
            <div className="bg-white rounded-3xl p-6 border border-agri-cream-300 shadow-soft-agri space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-xl bg-blue-100 text-blue-800">
                  <CreditCard className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{t.bankDetails}</h3>
              </div>

              <div className="p-4 rounded-xl bg-agri-cream-100/70 border border-agri-cream-300 space-y-1 text-xs">
                <p className="font-bold text-slate-700">UPI ID:</p>
                <p className="font-extrabold text-agri-green-900">{profile.upiId || 'Not set'}</p>
                <p className="text-[11px] text-emerald-700 font-semibold mt-1">✓ Verified for Direct Buyer Payouts</p>
              </div>

              <p className="text-[11px] text-slate-500">
                To change your UPI ID, click <strong>Edit Profile</strong> above.
              </p>
            </div>
          )}
        </div>

        {/* ── Right Column ─────────────────────────────────────────────── */}
        <div className="lg:col-span-7 space-y-6">

          {/* Active Listings Manager */}
          <div className="bg-white rounded-3xl p-6 border border-agri-cream-300 shadow-soft-agri space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-agri-cream-200">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {t.activeListings} ({listings.length})
                </h3>
                <p className="text-xs text-slate-500">
                  Active crop residues advertised on the buyer network
                </p>
              </div>
              {onNavigateTab && (
                <button
                  onClick={() => onNavigateTab('list-waste')}
                  className="flex items-center gap-1 text-xs font-bold text-agri-green-800 hover:text-agri-green-900"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              )}
            </div>

            {listings.length === 0 ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-agri-cream-100 border border-agri-cream-300 flex items-center justify-center mx-auto">
                  <Package className="w-7 h-7 text-slate-400" />
                </div>
                <p className="text-sm font-bold text-slate-700">No crop-waste listings yet</p>
                <p className="text-xs text-slate-500">Create your first listing to start earning from crop residue.</p>
                {onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab('list-waste')}
                    className="mt-2 px-4 py-2 rounded-xl bg-agri-green-800 hover:bg-agri-green-900 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    List Waste Now
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                {listings.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-agri-cream-100/70 border border-agri-cream-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.cropName}
                        className="w-12 h-12 rounded-xl object-cover border border-slate-200 shadow-sm flex-shrink-0"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{item.cropName}</h4>
                        <p className="text-[11px] text-slate-600">
                          {item.quantity} {item.unit} • ₹{item.pricePerUnit}/{item.unit}
                        </p>
                        <p className="text-[10px] text-agri-green-800 font-semibold">
                          {item.interestedBuyers} Interested Buyers • {item.postedDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                      <span className="text-sm font-extrabold text-agri-green-950">
                        ₹{item.totalValue.toLocaleString('en-IN')}
                      </span>
                      <button
                        onClick={() => onDeleteListing(item.id)}
                        className="p-2 rounded-xl text-rose-700 hover:bg-rose-100 transition-colors"
                        title="Remove Listing"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Language & Notification Preferences (view mode only) */}
          {!isEditing && (
            <div className="bg-white rounded-3xl p-6 border border-agri-cream-300 shadow-soft-agri space-y-5">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-xl bg-agri-green-100 text-agri-green-800">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{t.languagePref} &amp; Notification Alerts</h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`p-3 rounded-2xl border text-xs font-bold text-left flex items-center justify-between transition-all ${
                      language === l.code
                        ? 'bg-agri-green-800 text-white border-agri-green-950 shadow-md'
                        : 'bg-agri-cream-100 text-slate-700 border-agri-cream-300 hover:bg-agri-cream-200'
                    }`}
                  >
                    <span>{l.name}</span>
                    {language === l.code && <CheckCircle2 className="w-4 h-4 text-agri-amber-300" />}
                  </button>
                ))}
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <span className="font-bold text-slate-800 block">SMS &amp; WhatsApp Alerts</span>
                    <span className="text-[11px] text-slate-500">Receive instant SMS whenever a buyer places a bid</span>
                  </div>
                  <input type="checkbox" checked={smsAlerts} onChange={(e) => setSmsAlerts(e.target.checked)}
                    className="rounded border-slate-300 text-agri-green-700 focus:ring-agri-green-500 h-5 w-5 cursor-pointer" />
                </label>

                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <span className="font-bold text-slate-800 block">Instant Doorstep Fleet Booking</span>
                    <span className="text-[11px] text-slate-500">Allow verified buyers within 10 km to schedule pickups</span>
                  </div>
                  <input type="checkbox" checked={autoQuote} onChange={(e) => setAutoQuote(e.target.checked)}
                    className="rounded border-slate-300 text-agri-green-700 focus:ring-agri-green-500 h-5 w-5 cursor-pointer" />
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
