import React, { useState } from 'react';
import {
  Sprout,
  ArrowRight,
  ShieldCheck,
  Coins,
  Truck,
  Sparkles,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Globe2,
  Phone,
  MapPin,
  Scale,
  IndianRupee,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { cropImages } from '../../data/mockData';
import { translations } from '../../data/translations';
import * as authService from '../../services/authService';

// ─── Reusable Field ────────────────────────────────────────────────────────
function Field({ label, icon: Icon, error, children }) {
  return (
    <div>
      {label && (
        <label className="block text-xs font-bold text-slate-700 mb-1">{label}</label>
      )}
      <div className="relative">{children}</div>
      {Icon && !children.props?.value && (
        <Icon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      )}
      {error && (
        <p className="mt-1 text-[11px] text-rose-600 font-semibold flex items-center gap-1">
          <AlertCircle className="w-3 h-3 flex-shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Input helper ─────────────────────────────────────────────────────────
function Input({ icon: Icon, error, className = '', ...props }) {
  return (
    <div>
      <div className="relative">
        {Icon && (
          <Icon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        )}
        <input
          {...props}
          className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-2.5 text-sm bg-agri-cream-100/60 rounded-xl border ${
            error ? 'border-rose-400 focus:ring-rose-400/20' : 'border-agri-cream-400 focus:border-agri-green-600 focus:ring-agri-green-500/20'
          } focus:ring-2 outline-none transition-all ${className}`}
        />
      </div>
      {error && (
        <p className="mt-1 text-[11px] text-rose-600 font-semibold flex items-center gap-1">
          <AlertCircle className="w-3 h-3 flex-shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Left Hero Panel (shared) ──────────────────────────────────────────────
function HeroPanel({ t }) {
  return (
    <div className="lg:col-span-5 relative flex flex-col justify-between p-8 sm:p-12 text-white overflow-hidden agri-gradient-hero">
      <img
        src={cropImages.heroFarm}
        alt="Indian Golden Farm Harvest"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 pointer-events-none scale-105"
      />
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/30">
            <Sprout className="w-6 h-6 text-agri-amber-300" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-white">
              CropWaste<span className="text-agri-amber-400">ValueFinder</span>
            </h1>
            <span className="text-[11px] font-medium tracking-wide text-agri-green-200 uppercase">
              Agri-Biomass Hub
            </span>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agri-amber-400/20 text-agri-amber-300 border border-agri-amber-400/30 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Zero Stubble Burning • 100% Value</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white">
            {t?.heroTitle || 'Turn Crop Waste into Opportunity'}
          </h2>
          <p className="text-sm text-agri-green-100 leading-relaxed max-w-md">
            Join thousands of Indian farmers earning real income from crop residue — biochar, compost, mushrooms &amp; more.
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-10 space-y-3 pt-6 border-t border-white/15">
        {[
          { icon: Coins, title: 'Guaranteed Payout', sub: '₹3,500–₹8,000 / tonne direct UPI', color: 'agri-amber' },
          { icon: Truck, title: 'Doorstep Farm Pickup', sub: '12+ Verified buyers in your district', color: 'agri-green' },
          { icon: ShieldCheck, title: 'Clean Air Champion', sub: 'Verified carbon offset credentials', color: 'agri-blue' },
        ].map(({ icon: Icon, title, sub, color }) => (
          <div key={title} className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15">
            <div className={`p-1.5 bg-${color}-400/30 rounded-lg text-${color}-300`}>
              <Icon className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <p className="font-bold text-white">{title}</p>
              <p className="text-agri-green-200">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// LOGIN FORM
// ══════════════════════════════════════════════════════════════════════════════
function LoginForm({ onLogin, onGoRegister, t, successMessage }) {
  const [username, setUsername]       = useState('');
  const [password, setPassword]       = useState('');
  const [showPass, setShowPass]       = useState(false);
  const [isLoading, setIsLoading]     = useState(false);
  const [error, setError]             = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!username.trim() || !password) {
      setError('Please enter your username and password.');
      return;
    }
    setIsLoading(true);
    // Small delay for UX feel
    setTimeout(() => {
      const result = authService.login(username.trim(), password);
      setIsLoading(false);
      if (result.ok) {
        onLogin(result.farmer);
      } else {
        setError(result.error);
      }
    }, 500);
  };

  return (
    <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center bg-white">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900">Welcome Back</h3>
        <p className="text-sm text-slate-500 mt-1">Sign in to your CropWasteValueFinder account</p>
      </div>

      {/* Success message after registration */}
      {successMessage && (
        <div className="mb-4 p-3 rounded-xl bg-agri-green-50 border border-agri-green-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-agri-green-700 flex-shrink-0" />
          <p className="text-xs font-bold text-agri-green-800">{successMessage}</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-300 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
          <p className="text-xs font-bold text-rose-700">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Username</label>
          <Input
            icon={User}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            autoComplete="username"
            id="login-username"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
          <div className="relative">
            <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type={showPass ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
              id="login-password"
              className="w-full pl-10 pr-10 py-2.5 text-sm bg-agri-cream-100/60 rounded-xl border border-agri-cream-400 focus:border-agri-green-600 focus:ring-2 focus:ring-agri-green-500/20 outline-none transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label={showPass ? 'Hide password' : 'Show password'}
            >
              {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          id="login-submit-btn"
          className="w-full py-3 px-4 rounded-xl bg-agri-green-800 hover:bg-agri-green-900 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
        >
          {isLoading ? (
            <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span>Login</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Register Link */}
      <div className="mt-6 pt-4 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-600">
          New farmer?{' '}
          <button
            type="button"
            onClick={onGoRegister}
            id="go-register-btn"
            className="text-agri-green-800 font-bold hover:underline"
          >
            Create Farmer Account
          </button>
        </p>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// REGISTRATION FORM
// ══════════════════════════════════════════════════════════════════════════════
const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'pb', label: 'ਪੰਜਾਬੀ' },
  { code: 'te', label: 'తెలుగు' },
];

const EMPTY_FORM = {
  name: '', username: '', password: '', confirmPassword: '',
  mobile: '', email: '', village: '', district: '', state: '',
  farmSizeAcres: '', preferredLanguage: 'en', upiId: '',
};

function RegisterForm({ onRegistered, onGoLogin }) {
  const [form, setForm]       = useState(EMPTY_FORM);
  const [errors, setErrors]   = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass]   = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [globalError, setGlobalError] = useState('');
  const [step, setStep] = useState(1); // 2-step for UX on mobile

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  const clearError = (field) => setErrors((e) => { const n = { ...e }; delete n[field]; return n; });

  const handleSubmit = (e) => {
    e.preventDefault();
    setGlobalError('');
    setIsLoading(true);
    setTimeout(() => {
      const result = authService.register(form);
      setIsLoading(false);
      if (result.ok) {
        onRegistered('Account created! Please log in with your new credentials.');
      } else {
        if (result.fieldErrors) setErrors(result.fieldErrors);
        setGlobalError(result.error || 'Registration failed.');
        // If step 2 errors affect step 1 fields, go back
        const step1Fields = ['name','username','password','confirmPassword'];
        if (result.fieldErrors && step1Fields.some(f => result.fieldErrors[f])) {
          setStep(1);
        }
      }
    }, 600);
  };

  const labelCls = 'block text-xs font-bold text-slate-700 mb-1';
  const inputCls = (field) =>
    `w-full pl-10 pr-4 py-2.5 text-sm bg-agri-cream-100/60 rounded-xl border ${
      errors[field] ? 'border-rose-400' : 'border-agri-cream-400'
    } focus:border-agri-green-600 focus:ring-2 focus:ring-agri-green-500/20 outline-none transition-all`;

  const inputClsNoIcon = (field) =>
    `w-full pl-4 pr-4 py-2.5 text-sm bg-agri-cream-100/60 rounded-xl border ${
      errors[field] ? 'border-rose-400' : 'border-agri-cream-400'
    } focus:border-agri-green-600 focus:ring-2 focus:ring-agri-green-500/20 outline-none transition-all`;

  const ErrMsg = ({ field }) =>
    errors[field] ? (
      <p className="mt-1 text-[11px] text-rose-600 font-semibold flex items-center gap-1">
        <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors[field]}
      </p>
    ) : null;

  return (
    <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col bg-white overflow-y-auto max-h-screen">
      {/* Header */}
      <div className="mb-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Create Farmer Account</h3>
            <p className="text-xs text-slate-500 mt-0.5">Join thousands of farmers earning from crop residue</p>
          </div>
          <span className="text-xs font-bold text-slate-400">Step {step}/2</span>
        </div>

        {/* Step indicator */}
        <div className="flex gap-2 mt-3">
          <div className={`h-1 flex-1 rounded-full transition-all ${step >= 1 ? 'bg-agri-green-700' : 'bg-slate-200'}`} />
          <div className={`h-1 flex-1 rounded-full transition-all ${step >= 2 ? 'bg-agri-green-700' : 'bg-slate-200'}`} />
        </div>
      </div>

      {globalError && (
        <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-300 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
          <p className="text-xs font-bold text-rose-700">{globalError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 flex-1">

        {/* ── STEP 1: Account Details ─────────────────────────────── */}
        {step === 1 && (
          <>
            {/* Farmer Name */}
            <div>
              <label className={labelCls}>Full Name *</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input id="reg-name" type="text" value={form.name}
                  onChange={(e) => { set('name')(e); clearError('name'); }}
                  placeholder="Your full name"
                  className={inputCls('name')} />
              </div>
              <ErrMsg field="name" />
            </div>

            {/* Username */}
            <div>
              <label className={labelCls}>Username *</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input id="reg-username" type="text" value={form.username}
                  onChange={(e) => { set('username')(e); clearError('username'); }}
                  placeholder="Choose a unique username"
                  autoComplete="username"
                  className={inputCls('username')} />
              </div>
              <ErrMsg field="username" />
            </div>

            {/* Password */}
            <div>
              <label className={labelCls}>Password * (min 6 chars)</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input id="reg-password"
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => { set('password')(e); clearError('password'); }}
                  placeholder="Create a password"
                  autoComplete="new-password"
                  className={`${inputCls('password')} pr-10`} />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <ErrMsg field="password" />
            </div>

            {/* Confirm Password */}
            <div>
              <label className={labelCls}>Confirm Password *</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input id="reg-confirm-password"
                  type={showConfirm ? 'text' : 'password'}
                  value={form.confirmPassword}
                  onChange={(e) => { set('confirmPassword')(e); clearError('confirmPassword'); }}
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                  className={`${inputCls('confirmPassword')} pr-10`} />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <ErrMsg field="confirmPassword" />
            </div>

            {/* Mobile */}
            <div>
              <label className={labelCls}>Mobile Number *</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input id="reg-mobile" type="tel" value={form.mobile}
                  onChange={(e) => { set('mobile')(e); clearError('mobile'); }}
                  placeholder="+91 98765 43210"
                  className={inputCls('mobile')} />
              </div>
              <ErrMsg field="mobile" />
            </div>

            {/* Email */}
            <div>
              <label className={labelCls}>Email Address *</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input id="reg-email" type="email" value={form.email}
                  onChange={(e) => { set('email')(e); clearError('email'); }}
                  placeholder="your@email.com"
                  className={inputCls('email')} />
              </div>
              <ErrMsg field="email" />
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              id="reg-next-btn"
              className="w-full py-3 px-4 rounded-xl bg-agri-green-800 hover:bg-agri-green-900 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
            >
              <span>Next — Farm Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* ── STEP 2: Farm Details ─────────────────────────────── */}
        {step === 2 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Village */}
              <div>
                <label className={labelCls}>Village *</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input id="reg-village" type="text" value={form.village}
                    onChange={(e) => { set('village')(e); clearError('village'); }}
                    placeholder="Your village"
                    className={inputCls('village')} />
                </div>
                <ErrMsg field="village" />
              </div>

              {/* District */}
              <div>
                <label className={labelCls}>District *</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input id="reg-district" type="text" value={form.district}
                    onChange={(e) => { set('district')(e); clearError('district'); }}
                    placeholder="Your district"
                    className={inputCls('district')} />
                </div>
                <ErrMsg field="district" />
              </div>
            </div>

            {/* State */}
            <div>
              <label className={labelCls}>State *</label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input id="reg-state" type="text" value={form.state}
                  onChange={(e) => { set('state')(e); clearError('state'); }}
                  placeholder="Your state"
                  className={inputCls('state')} />
              </div>
              <ErrMsg field="state" />
            </div>

            {/* Cultivated Land */}
            <div>
              <label className={labelCls}>Cultivated Land (Acres) *</label>
              <div className="relative">
                <Scale className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input id="reg-acreage" type="number" step="0.1" min="0.1"
                  value={form.farmSizeAcres}
                  onChange={(e) => { set('farmSizeAcres')(e); clearError('farmSizeAcres'); }}
                  placeholder="e.g. 5.5"
                  className={inputCls('farmSizeAcres')} />
              </div>
              <ErrMsg field="farmSizeAcres" />
            </div>

            {/* UPI ID */}
            <div>
              <label className={labelCls}>UPI ID *</label>
              <div className="relative">
                <IndianRupee className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input id="reg-upi" type="text" value={form.upiId}
                  onChange={(e) => { set('upiId')(e); clearError('upiId'); }}
                  placeholder="e.g. name@upi"
                  className={inputCls('upiId')} />
              </div>
              <ErrMsg field="upiId" />
            </div>

            {/* Preferred Language */}
            <div>
              <label className={labelCls}>Preferred Language</label>
              <div className="grid grid-cols-4 gap-2">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, preferredLanguage: l.code }))}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      form.preferredLanguage === l.code
                        ? 'bg-agri-green-800 text-white border-agri-green-950'
                        : 'bg-agri-cream-100 text-slate-700 border-agri-cream-300 hover:bg-agri-cream-200'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm border border-slate-200 transition-all"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={isLoading}
                id="reg-submit-btn"
                className="flex-[2] py-3 px-4 rounded-xl bg-agri-green-800 hover:bg-agri-green-900 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
              >
                {isLoading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Create Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </form>

      {/* Login link */}
      <div className="mt-4 pt-4 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onGoLogin}
            id="go-login-btn"
            className="text-agri-green-800 font-bold hover:underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// MAIN AUTH PAGE
// ══════════════════════════════════════════════════════════════════════════════
export default function AuthPage({ onLogin, language, setLanguage }) {
  const [view, setView] = useState('login'); // 'login' | 'register'
  const [successMsg, setSuccessMsg] = useState('');

  const t = translations[language]?.auth || translations.en.auth;
  const langKey = language;

  const handleRegistered = (msg) => {
    setSuccessMsg(msg);
    setView('login');
  };

  return (
    <div className="min-h-screen bg-agri-cream-100/80 flex items-center justify-center p-3 sm:p-6 lg:p-10 selection:bg-agri-green-500 selection:text-white">
      {/* Floating Language Bar */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-agri-cream-300">
        <Globe2 className="w-4 h-4 text-agri-green-700" />
        {[
          { code: 'en', label: 'EN' },
          { code: 'hi', label: 'हिन्दी' },
          { code: 'pb', label: 'ਪੰਜਾਬੀ' },
          { code: 'te', label: 'తెలుగు' },
        ].map(({ code, label }) => (
          <button
            key={code}
            onClick={() => setLanguage(code)}
            className={`px-2 py-0.5 text-xs font-semibold rounded-full transition-all ${
              langKey === code ? 'bg-agri-green-700 text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Main Split Card */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl shadow-agri-green-950/10 border border-agri-cream-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
        <HeroPanel t={t} />

        {view === 'login' ? (
          <LoginForm
            onLogin={onLogin}
            onGoRegister={() => { setSuccessMsg(''); setView('register'); }}
            t={t}
            successMessage={successMsg}
          />
        ) : (
          <RegisterForm
            onRegistered={handleRegistered}
            onGoLogin={() => setView('login')}
          />
        )}
      </div>
    </div>
  );
}
