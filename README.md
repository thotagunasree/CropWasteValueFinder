# 🌱 CropWaste Finder AI

> **"Turn farm waste into value"** | **"खेत के कचरे को बनाएं मूल्यवान"**

An AI-powered agricultural web application built with React, Tailwind CSS, and TensorFlow.js. **CropWaste Finder AI** helps Indian farmers identify crop residues from an uploaded image and discover profitable, eco-friendly alternatives to open burning (पराली जलाना).

---

## ✨ Features

- 🌾 **Residue Identification via AI & TensorFlow.js**:
  - Pre-configured to load Google Teachable Machine models from `/public/model/model.json` and `/public/model/metadata.json`.
  - Seamless fallback to a clearly labeled **Demo Mode** supporting three primary crop residue types:
    - **Paddy Straw (धान की पराली)**
    - **Banana Stem (केले का तना)**
    - **Corn Stalk (मक्के के डंठल)**
- 💡 **Practical Reuse Recommendations**:
  - **Paddy Straw**: Compost & vermicomposting, Mushroom substrate (Oyster / Paddy straw mushrooms), Biochar (pyrolysis carbon sequestration).
  - **Banana Stem**: Fibre products & handicrafts, Compost & potassium-rich sap fertilizer, Mulch for soil moisture.
  - **Corn Stalk**: Enriched compost & humus restorer, Animal bedding & fodder supplement, Biomass briquettes & white coal pellets.
- 🛑 **Anti-Burning Impact Dashboard**:
  - Highlighted advisory: *“Do not burn crop residue. Reuse can reduce smoke pollution and create value for farmers.”*
  - Quantifies topsoil nutrient preservation (NPK) and smog reduction.
- 🌐 **Bilingual (English / हिंदी) Support**:
  - Instant one-click toggle for all titles, recommendations, step-by-step guides, benefits, impact metrics, and disclaimers.
- ⚠️ **Agricultural Expert Disclaimer**:
  - *“Recommendations are general guidance. Consult local agricultural experts for processing and safety.”*
- 📱 **Mobile-First Responsive Agriculture Theme**:
  - Earthy green, brown, and warm cream tones designed for farmers, field workers, and Krishi Vigyan Kendras (KVKs).
- 🖨️ **Print & Download Summary Guide**:
  - Farmers can download or print an offline summary card for their identified crop residue.

---

## 📂 Project Structure

```
CropWasteValueFinder/
├── public/
│   ├── favicon.svg                # Agricultural sprout favicon
│   └── model/
│       ├── model.json             # Teachable Machine model topology
│       ├── metadata.json          # Model labels (Paddy Straw, Banana Stem, Corn Stalk)
│       └── README.md              # Instructions to drop custom trained weights
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Header with title, tagline, mode badge & language toggle
│   │   ├── HeroSection.jsx        # Value proposition & highlights
│   │   ├── ImageUploader.jsx      # Drag & drop upload, file picker, camera capture
│   │   ├── SampleSelector.jsx     # Instant 1-click test cards with sample crop images
│   │   ├── AnalysisLoading.jsx    # Scanning laser animation with "AI is identifying..."
│   │   ├── ResultsSection.jsx     # Results overview with confidence score & action buttons
│   │   ├── RecommendationCard.jsx # Expandable reuse alternative cards with economic/eco values
│   │   ├── ImpactCard.jsx         # Anti-burning impact card & soil facts
│   │   ├── DisclaimerCard.jsx     # Agricultural safety advisory disclaimer
│   │   └── LanguageToggle.jsx     # Smooth English/Hindi switch
│   ├── data/
│   │   ├── translations.js        # Complete English and Hindi dictionaries
│   │   ├── cropData.js            # In-depth agronomic data & step-by-step guides
│   │   └── sampleImages.js        # High quality vector sample representations
│   ├── services/
│   │   └── classifier.js          # TensorFlow.js loader & Demo Mode classification engine
│   ├── App.jsx                    # Root state & view orchestration
│   ├── index.css                  # Tailwind styles & print stylesheet
│   └── main.jsx                   # React DOM entrypoint
├── index.html                     # HTML5 template with Google fonts
├── package.json                   # Dependencies & scripts
├── tailwind.config.js             # Agricultural color palette configuration
├── postcss.config.js              # PostCSS setup
└── vite.config.js                 # Vite development & build config
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js** (v16+ or v18+ recommended)
- **npm** or **yarn** / **pnpm**

### Installation

1. **Clone the repository or navigate to project directory**:
   ```bash
   cd CropWasteValueFinder
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Building for Production

To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 🧠 Adding Custom Teachable Machine Models

1. Train an image classification model on [Google Teachable Machine](https://teachablemachine.withgoogle.com/).
2. Create classes matching:
   - `Paddy Straw`
   - `Banana Stem`
   - `Corn Stalk`
3. Export the model as **TensorFlow.js**.
4. Download and copy `model.json`, `metadata.json`, and `weights.bin` into the `/public/model/` directory.
5. The application will automatically detect and run live neural inference using the custom weights!

---

## 📜 License

MIT License. Dedicated to Indian farmers and sustainable regenerative agriculture.
