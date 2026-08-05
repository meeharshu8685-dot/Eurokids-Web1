import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const FloatingWhatsApp: React.FC = () => {
  const handleSendWhatsApp = () => {
    const text = encodeURIComponent("Hello EuroKids Gwalior, I have an inquiry about admissions.");
    window.open(`https://wa.me/${SCHOOL_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleSendWhatsApp}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 scale-100 hover:scale-105 active:scale-95 border border-emerald-500/25"
        aria-label="WhatsApp Us"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="text-xs font-bold tracking-wide">WhatsApp Admissions</span>
      </button>
    </div>
  );
};
