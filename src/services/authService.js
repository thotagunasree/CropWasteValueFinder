/**
 * authService.js — CropWasteValueFinder Auth & Persistence Layer
 *
 * HACKATHON PROTOTYPE: Farmer data including passwords are stored in
 * localStorage for demo purposes only.
 * ⚠️  Before production use, replace with a real backend API that:
 *   - Stores passwords using bcrypt / argon2 hashing
 *   - Uses JWT or server-side session tokens
 *   - Enforces HTTPS and CORS policies
 */

// ---------------------------------------------------------------------------
// Storage Keys & Versioning
// ---------------------------------------------------------------------------
const KEYS = {
  FARMERS: 'cwvf_farmers',       // JSON array of all farmer objects
  SESSION:  'cwvf_session',      // Currently logged-in farmer ID (string)
  VERSION:  'cwvf_data_version', // Migration sentinel
  LISTINGS: (id) => `cwvf_listings_${id}`, // Per-farmer listings array
};

// Bump this whenever you need to wipe and reset all stored data
const CURRENT_VERSION = 'v3_clean';

// ---------------------------------------------------------------------------
// Migration / Reset
// ---------------------------------------------------------------------------

/**
 * Called once on app startup.
 * If the stored version doesn't match CURRENT_VERSION, wipe all CWVF keys.
 */
export function migrateAndReset() {
  const stored = localStorage.getItem(KEYS.VERSION);
  if (stored !== CURRENT_VERSION) {
    // Remove all cwvf_ prefixed keys
    const toRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('cwvf_')) {
        toRemove.push(key);
      }
    }
    toRemove.forEach((k) => localStorage.removeItem(k));
    localStorage.setItem(KEYS.VERSION, CURRENT_VERSION);
  }
}

// ---------------------------------------------------------------------------
// Internal Helpers
// ---------------------------------------------------------------------------

function getFarmers() {
  try {
    return JSON.parse(localStorage.getItem(KEYS.FARMERS) || '[]');
  } catch {
    return [];
  }
}

function saveFarmers(farmers) {
  localStorage.setItem(KEYS.FARMERS, JSON.stringify(farmers));
}

function generateId(prefix = 'f') {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}

// ---------------------------------------------------------------------------
// Session Management
// ---------------------------------------------------------------------------

/**
 * Returns the currently logged-in farmer object, or null.
 */
export function getSession() {
  const sessionId = localStorage.getItem(KEYS.SESSION);
  if (!sessionId) return null;
  const farmers = getFarmers();
  return farmers.find((f) => f.id === sessionId) || null;
}

/**
 * Persists the logged-in farmer ID.
 */
function setSession(farmerId) {
  localStorage.setItem(KEYS.SESSION, farmerId);
}

/**
 * Clears the session (logout). Does NOT delete farmer data.
 */
export function logout() {
  localStorage.removeItem(KEYS.SESSION);
}

// ---------------------------------------------------------------------------
// Authentication
// ---------------------------------------------------------------------------

/**
 * Validates login credentials.
 * @returns {{ ok: boolean, farmer?: object, error?: string }}
 */
export function login(username, password) {
  if (!username || !password) {
    return { ok: false, error: 'Username and password are required.' };
  }
  const farmers = getFarmers();
  const farmer = farmers.find(
    (f) => f.username.toLowerCase() === username.trim().toLowerCase()
  );
  if (!farmer) {
    return { ok: false, error: 'No account found with that username.' };
  }
  // NOTE: plaintext comparison — replace with hash check in production
  if (farmer.password !== password) {
    return { ok: false, error: 'Incorrect password. Please try again.' };
  }
  setSession(farmer.id);
  return { ok: true, farmer };
}

// ---------------------------------------------------------------------------
// Registration
// ---------------------------------------------------------------------------

/**
 * Validates and registers a new farmer.
 * @param {object} data — form fields
 * @returns {{ ok: boolean, farmer?: object, error?: string, fieldErrors?: object }}
 */
export function register(data) {
  const errors = {};

  if (!data.name?.trim())     errors.name     = 'Farmer name is required.';
  if (!data.username?.trim()) errors.username  = 'Username is required.';
  if (!data.password)         errors.password  = 'Password is required.';
  else if (data.password.length < 6) errors.password = 'Password must be at least 6 characters.';
  if (data.password !== data.confirmPassword) errors.confirmPassword = 'Passwords do not match.';

  // Mobile: 10-digit Indian number (with optional +91 prefix)
  const mobileClean = (data.mobile || '').replace(/[\s\-()]/g, '');
  if (!mobileClean) {
    errors.mobile = 'Mobile number is required.';
  } else if (!/^(\+91)?[6-9]\d{9}$/.test(mobileClean)) {
    errors.mobile = 'Enter a valid 10-digit Indian mobile number.';
  }

  // Email
  if (!data.email?.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (!data.village?.trim())  errors.village  = 'Village is required.';
  if (!data.district?.trim()) errors.district = 'District is required.';
  if (!data.state?.trim())    errors.state    = 'State is required.';

  const acres = parseFloat(data.farmSizeAcres);
  if (!data.farmSizeAcres || isNaN(acres) || acres <= 0) {
    errors.farmSizeAcres = 'Enter valid acreage (e.g. 5.5).';
  }

  // UPI ID — basic format: something@something
  if (!data.upiId?.trim()) {
    errors.upiId = 'UPI ID is required.';
  } else if (!/^[\w.\-]+@[\w]+$/.test(data.upiId.trim())) {
    errors.upiId = 'Enter a valid UPI ID (e.g. name@upi).';
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, fieldErrors: errors, error: 'Please fix the errors below.' };
  }

  // Check username uniqueness
  const farmers = getFarmers();
  const exists = farmers.find(
    (f) => f.username.toLowerCase() === data.username.trim().toLowerCase()
  );
  if (exists) {
    return {
      ok: false,
      fieldErrors: { username: 'This username is already taken.' },
      error: 'Username already exists.',
    };
  }

  const newFarmer = {
    id:               generateId('f'),
    name:             data.name.trim(),
    username:         data.username.trim(),
    password:         data.password, // ⚠️ plaintext — use hashing in production
    mobile:           mobileClean.startsWith('+91') ? mobileClean : '+91' + mobileClean.slice(-10),
    email:            data.email.trim(),
    village:          data.village.trim(),
    district:         data.district.trim(),
    state:            data.state.trim(),
    farmSizeAcres:    parseFloat(parseFloat(data.farmSizeAcres).toFixed(1)),
    preferredLanguage: data.preferredLanguage || 'en',
    upiId:            data.upiId.trim(),
    createdAt:        new Date().toISOString(),
    avatar:           'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    sustainabilityBadge: 'Eco-Kisan Member',
    totalEarningsToDate: 0,
    wasteDivertedTonnes: 0,
    co2SavedKg:        0,
    accountNo:         'Not linked yet',
    cropsGrown:        [],
    memberSince:       new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' }),
  };

  farmers.push(newFarmer);
  saveFarmers(farmers);

  return { ok: true, farmer: newFarmer };
}

// ---------------------------------------------------------------------------
// Profile Editing
// ---------------------------------------------------------------------------

/**
 * Updates mutable fields of an existing farmer.
 * @returns {{ ok: boolean, farmer?: object, error?: string }}
 */
export function updateProfile(farmerId, updates) {
  const farmers = getFarmers();
  const idx = farmers.findIndex((f) => f.id === farmerId);
  if (idx === -1) return { ok: false, error: 'Farmer not found.' };

  // Only allow safe editable fields (never overwrite id, username, password via this fn)
  const EDITABLE = ['name','mobile','email','village','district','state','farmSizeAcres','preferredLanguage','upiId','avatar','cropsGrown'];
  EDITABLE.forEach((field) => {
    if (updates[field] !== undefined) {
      farmers[idx][field] = updates[field];
    }
  });

  saveFarmers(farmers);
  return { ok: true, farmer: farmers[idx] };
}

// ---------------------------------------------------------------------------
// Listings Management
// ---------------------------------------------------------------------------

export function getListings(farmerId) {
  try {
    return JSON.parse(localStorage.getItem(KEYS.LISTINGS(farmerId)) || '[]');
  } catch {
    return [];
  }
}

export function addListing(farmerId, listing) {
  const listings = getListings(farmerId);
  const newListing = {
    ...listing,
    id: generateId('lst'),
    farmerId,
    createdAt: new Date().toISOString(),
    interestedBuyers: 0,
    status: 'Active',
    postedDate: 'Just now',
  };
  listings.unshift(newListing);
  localStorage.setItem(KEYS.LISTINGS(farmerId), JSON.stringify(listings));
  return newListing;
}

export function deleteListing(farmerId, listingId) {
  const listings = getListings(farmerId).filter((l) => l.id !== listingId);
  localStorage.setItem(KEYS.LISTINGS(farmerId), JSON.stringify(listings));
}

export function updateListings(farmerId, listings) {
  localStorage.setItem(KEYS.LISTINGS(farmerId), JSON.stringify(listings));
}
