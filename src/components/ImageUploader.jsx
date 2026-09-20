import React, { useState, useRef } from 'react';
import { UploadCloud, Camera, Image as ImageIcon, Sparkles, CheckCircle2 } from 'lucide-react';
import { translations } from '../data/translations';
import SampleSelector from './SampleSelector';

export default function ImageUploader({ language, onImageReady }) {
  const t = translations[language];
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert(language === 'hi' ? 'कृपया केवल तस्वीर (Image) फ़ाइल चुनें।' : 'Please select an image file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      onImageReady(e.target.result, null);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Upload Box */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`relative rounded-3xl border-2 border-dashed p-6 sm:p-10 transition-all duration-300 text-center bg-white shadow-soft-agri ${
          isDragging
            ? 'border-agri-green-600 bg-agri-green-50/80 scale-[1.01]'
            : 'border-agri-cream-400 hover:border-agri-green-400 hover:bg-agri-cream-100/50'
        }`}
      >
        {/* Hidden Inputs */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) handleFile(e.target.files[0]);
          }}
        />

        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) handleFile(e.target.files[0]);
          }}
        />

        {/* Center Illustration / Icon */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-5 rounded-full bg-gradient-to-b from-agri-green-100 to-agri-cream-200 flex items-center justify-center text-agri-green-700 shadow-inner ring-8 ring-agri-green-50">
          <UploadCloud className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>

        {/* Main Headings */}
        <h2 className="text-xl sm:text-2xl font-black text-agri-green-950 mb-2 font-sans">
          {t.uploadTitle}
        </h2>
        <p className="text-sm text-agri-brown-600 font-medium max-w-md mx-auto mb-6">
          {t.uploadSubtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          {/* Browse Files Button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-agri-green-700 hover:bg-agri-green-800 text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-agri-green-500 focus:ring-offset-2"
          >
            <ImageIcon className="w-5 h-5 text-agri-green-200" />
            <span>{t.browseFiles}</span>
          </button>

          {/* Camera Button */}
          <button
            type="button"
            onClick={() => cameraInputRef.current?.click()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white hover:bg-agri-cream-200 text-agri-brown-900 border border-agri-brown-300 font-bold text-base shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-agri-brown-400"
          >
            <Camera className="w-5 h-5 text-agri-brown-700" />
            <span>{t.takePhoto}</span>
          </button>
        </div>

        {/* Helper Note */}
        <p className="text-[11px] text-agri-brown-500 mt-4">
          {t.selectFileNote}
        </p>
      </div>

      {/* Quick Sample Selector */}
      <SampleSelector
        language={language}
        onSelectSample={(sample) => onImageReady(sample.image, sample.tag)}
      />
    </div>
  );
}
