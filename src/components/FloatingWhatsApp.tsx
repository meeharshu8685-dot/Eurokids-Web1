import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Inquire about Nursery admissions');

  const topics = [
    'Inquire about Nursery & Playgroup admissions',
    'Schedule a Campus Tour for tomorrow',
    'Gwalior School Bus route query',
    'Program details & curriculum'
  ];

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(`Hello EuroKids Early Years Gwalior, I would like to: ${selectedTopic}`);
    window.open(`https://wa.me/${SCHOOL_INFO.whatsapp}?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Quick Popup Card */}
      {isOpen && (
        <div className="w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-[#0F172A] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">EuroKids Admissions Desk</h4>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Gwalior Team Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-slate-700 shadow-xs">
              <p className="font-semibold text-slate-900 mb-1">Namaste! How can we assist you today?</p>
              <p className="text-slate-500">Select a topic to chat instantly with our Gwalior admissions counselor via WhatsApp:</p>
            </div>

            <div className="space-y-1.5">
              {topics.map((topic, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedTopic(topic)}
                  className={`w-full text-left p-2.5 rounded-xl border transition-all text-xs font-medium flex items-center justify-between ${
                    selectedTopic === topic
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{topic}</span>
                  {selectedTopic === topic && (
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={handleSendWhatsApp}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 text-xs transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Start WhatsApp Chat</span>
            </button>
          </div>

          <div className="px-4 py-2 bg-slate-100 border-t border-slate-200 text-[10px] text-slate-500 text-center">
            City Centre, Gwalior • Direct WhatsApp Helpline
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 scale-100 hover:scale-105 active:scale-95"
        aria-label="WhatsApp Us"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">WhatsApp Admissions</span>
      </button>
    </div>
  );
};
