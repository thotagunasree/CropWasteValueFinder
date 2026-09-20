import React, { useState, useEffect } from 'react';
import AuthPage from './components/Auth/AuthPage';
import Sidebar from './components/Layout/Sidebar';
import TopHeader from './components/Layout/TopHeader';
import MobileNav from './components/Layout/MobileNav';

// View Pages
import DashboardView from './components/Dashboard/DashboardView';
import FindBuyersView from './components/Buyers/FindBuyersView';
import ListWasteView from './components/ListWaste/ListWasteView';
import ValueIdeasView from './components/ValueIdeas/ValueIdeasView';
import ImpactView from './components/Impact/ImpactView';
import ProfileView from './components/Profile/ProfileView';

// Modals
import ConnectModal from './components/Buyers/ConnectModal';
import GreenCertificateModal from './components/Impact/GreenCertificateModal';

// Auth & Persistence Service
import * as authService from './services/authService';

// Static data (buyers, images — NOT farmer-specific)
import { nearbyBuyers } from './data/mockData';
import { translations } from './data/translations';
import { CheckCircle2, Sprout } from 'lucide-react';

export default function App() {
  // ── Run migration/reset on very first mount ──────────────────────────────
  useEffect(() => {
    authService.migrateAndReset();
  }, []);

  // ── Auth & Session State ─────────────────────────────────────────────────
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  // ── Navigation & UI State ────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState('dashboard');
  const [language, setLanguage] = useState('en');

  // ── Farmer-Specific State ────────────────────────────────────────────────
  const [listings, setListings] = useState([]);
  const [selectedIdeaId, setSelectedIdeaId] = useState('rice-straw');
  const [activeConnectBuyer, setActiveConnectBuyer] = useState(null);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  // ── Global Toast ─────────────────────────────────────────────────────────
  const [toastMessage, setToastMessage] = useState(null);
  const [toastType, setToastType] = useState('success'); // 'success' | 'error'

  // ── Session Restore on App Load ──────────────────────────────────────────
  useEffect(() => {
    const farmer = authService.getSession();
    if (farmer) {
      const farmerListings = authService.getListings(farmer.id);
      setUserProfile(farmer);
      setListings(farmerListings);
      setLanguage(farmer.preferredLanguage || 'en');
      setIsAuthenticated(true);
    }
  }, []);

  // ── Toast Helper ─────────────────────────────────────────────────────────
  const showToast = (msg, type = 'success') => {
    setToastMessage(msg);
    setToastType(type);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // ── Login Handler ────────────────────────────────────────────────────────
  const handleLogin = (farmer) => {
    const farmerListings = authService.getListings(farmer.id);
    setUserProfile(farmer);
    setListings(farmerListings);
    setLanguage(farmer.preferredLanguage || 'en');
    setIsAuthenticated(true);
    setActiveTab('dashboard');
    showToast(`Welcome back, ${farmer.name}! Your farm residue dashboard is ready.`);
  };

  // ── Logout Handler ───────────────────────────────────────────────────────
  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
    setUserProfile(null);
    setListings([]);
    setActiveTab('dashboard');
  };

  // ── Profile Update Handler ───────────────────────────────────────────────
  const handleUpdateProfile = (updates) => {
    if (!userProfile) return;
    const result = authService.updateProfile(userProfile.id, updates);
    if (result.ok) {
      setUserProfile(result.farmer);
      if (updates.preferredLanguage) setLanguage(updates.preferredLanguage);
      showToast('Profile updated successfully!');
    } else {
      showToast(result.error || 'Failed to update profile.', 'error');
    }
  };

  // ── Listing Handlers ─────────────────────────────────────────────────────
  const handleAddListing = (newListingData) => {
    if (!userProfile) return;
    const saved = authService.addListing(userProfile.id, newListingData);
    setListings((prev) => [saved, ...prev]);
    showToast(`"${saved.cropName}" listing broadcasted to ${nearbyBuyers.length} nearby buyers!`);
  };

  const handleDeleteListing = (id) => {
    if (!userProfile) return;
    authService.deleteListing(userProfile.id, id);
    setListings((prev) => prev.filter((item) => item.id !== id));
    showToast('Residue listing removed successfully.');
  };

  // ── Idea Navigation ──────────────────────────────────────────────────────
  const handleSelectIdeaFromDashboard = (ideaId) => {
    const map = {
      'rec-biochar':    'rice-straw',
      'rec-compost':    'rice-straw',
      'rec-mushroom':   'rice-straw',
      'rec-briquettes': 'sugarcane-bagasse',
    };
    setSelectedIdeaId(map[ideaId] || 'rice-straw');
    setActiveTab('value-ideas');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuoteSent = ({ buyerName, totalAmount }) => {
    showToast(`Official quote for ₹${totalAmount.toLocaleString('en-IN')} sent to ${buyerName}!`);
  };

  // ── Auth Gate ─────────────────────────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <AuthPage
        onLogin={handleLogin}
        language={language}
        setLanguage={setLanguage}
      />
    );
  }

  const t = translations[language]?.nav || translations.en.nav;

  return (
    <div className="min-h-screen flex bg-agri-cream-100/60 font-sans selection:bg-agri-green-500 selection:text-white">

      {/* ── Toast Notification ──────────────────────────────────────────── */}
      {toastMessage && (
        <div className={`fixed top-5 right-5 z-50 px-4 py-3 rounded-2xl shadow-2xl border flex items-center gap-3 animate-slideDown max-w-sm ${
          toastType === 'error'
            ? 'bg-rose-950 text-white border-rose-500/40'
            : 'bg-slate-950 text-white border-agri-green-500/40'
        }`}>
          <div className={`p-1.5 rounded-xl text-white ${toastType === 'error' ? 'bg-rose-600' : 'bg-agri-green-600'}`}>
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <p className="text-xs font-semibold text-slate-100 flex-1 leading-snug">
            {toastMessage}
          </p>
        </div>
      )}

      {/* ── Sidebar Navigation ──────────────────────────────────────────── */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={handleLogout}
        language={language}
        activeListingCount={listings.length}
        buyerCount={nearbyBuyers.length}
        userProfile={userProfile}
      />

      {/* ── Main Content Area ────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-x-hidden">

        {/* Top Header */}
        <TopHeader
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          language={language}
          setLanguage={setLanguage}
          farmerName={userProfile?.name?.split(' ')[0] || 'Farmer'}
          farmerLocation={
            userProfile
              ? `${userProfile.village}, ${userProfile.district}`
              : ''
          }
        />

        {/* Dynamic Page Views */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto pb-24 md:pb-12">

          {activeTab === 'dashboard' && (
            <DashboardView
              language={language}
              listings={listings}
              farmerProfile={userProfile}
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectIdea={handleSelectIdeaFromDashboard}
              onConnectBuyer={(b) => setActiveConnectBuyer(b)}
              onOpenCertificate={() => setShowCertificateModal(true)}
            />
          )}

          {activeTab === 'buyers' && (
            <FindBuyersView
              language={language}
              onQuoteSent={handleQuoteSent}
            />
          )}

          {activeTab === 'list-waste' && (
            <ListWasteView
              language={language}
              farmerProfile={userProfile}
              onAddListing={handleAddListing}
              onNavigateDashboard={() => {
                setActiveTab('dashboard');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {activeTab === 'value-ideas' && (
            <ValueIdeasView
              language={language}
              initialResidueId={selectedIdeaId}
            />
          )}

          {activeTab === 'impact' && (
            <ImpactView
              language={language}
              farmerProfile={userProfile}
            />
          )}

          {activeTab === 'profile' && (
            <ProfileView
              farmerProfile={userProfile}
              listings={listings}
              onDeleteListing={handleDeleteListing}
              onUpdateProfile={handleUpdateProfile}
              language={language}
              setLanguage={(lang) => {
                setLanguage(lang);
                handleUpdateProfile({ preferredLanguage: lang });
              }}
              onOpenCertificate={() => setShowCertificateModal(true)}
              onNavigateTab={setActiveTab}
            />
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-agri-cream-300 bg-white/70 py-6 text-center text-xs text-agri-brown-700 no-print hidden md:block">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-bold text-agri-green-950">
              <Sprout className="w-4 h-4 text-agri-green-700" />
              <span>CropWasteValueFinder • Zero Stubble Burning Initiative</span>
            </div>
            <p className="font-medium text-slate-500">
              Transforming agricultural biomass into sustainable income across Indian farmlands.
            </p>
            <div className="flex items-center gap-1 font-semibold text-agri-green-800">
              <span>Verified Eco-Agritech Hub</span>
            </div>
          </div>
        </footer>

        {/* Mobile Navigation */}
        <MobileNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          language={language}
        />
      </div>

      {/* ── Global Modals ────────────────────────────────────────────────── */}
      {activeConnectBuyer && (
        <ConnectModal
          buyer={activeConnectBuyer}
          onClose={() => setActiveConnectBuyer(null)}
          onQuoteSent={handleQuoteSent}
          language={language}
        />
      )}

      {showCertificateModal && (
        <GreenCertificateModal
          onClose={() => setShowCertificateModal(false)}
          farmerName={userProfile?.name || ''}
        />
      )}
    </div>
  );
}
