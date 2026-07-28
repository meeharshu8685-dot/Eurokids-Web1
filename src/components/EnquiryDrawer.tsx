import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, Sparkles, MapPin } from 'lucide-react';
import { EnquiryFormData } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';

interface EnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryDrawer: React.FC<EnquiryDrawerProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<EnquiryFormData>({
    parentName: '',
    phone: '',
    email: '',
    locality: 'City Centre',
    childAgeGroup: 'Nursery (2.5 – 3.5 yrs)',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#FFFFFF] h-full shadow-2xl flex flex-col justify-between overflow-y-auto p-6 relative border-l border-[#4338CA]/10">
        
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#4338CA]/10">
            <div>
              <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Fast Admission Inquiry
              </span>
              <h3 className="text-xl font-bold font-sans uppercase tracking-tight text-[#4338CA]">Enquire for Session 2026–27</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-serif">Enquiry Submitted!</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Thank you, {formData.parentName}. Our Gwalior Admissions Office has received your inquiry. We will send the complete prospectus to <strong className="text-slate-900">{formData.email || formData.phone}</strong>.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="py-6 space-y-4 text-xs">
              
              <div>
                <label className="block text-slate-700 font-bold mb-1">Parent Name *</label>
                <input
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  placeholder="Your Full Name"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-slate-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 Mobile Number"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-slate-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="parent@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-slate-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Child's Age Group *</label>
                <select
                  value={formData.childAgeGroup}
                  onChange={(e) => setFormData({ ...formData, childAgeGroup: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-slate-900 focus:outline-none"
                >
                  <option value="Playgroup (1.8 – 2.5 yrs)">Playgroup (1.8 – 2.5 yrs)</option>
                  <option value="Nursery (2.5 – 3.5 yrs)">Nursery (2.5 – 3.5 yrs)</option>
                  <option value="Junior KG (3.5 – 4.5 yrs)">Junior KG (3.5 – 4.5 yrs)</option>
                  <option value="Senior KG (4.5 – 5.5 yrs)">Senior KG (4.5 – 5.5 yrs)</option>
                  <option value="Daycare / After School Care">Daycare / After School Care</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Specific Query</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Please share admission details and bus route options."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-slate-900 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#0F172A] hover:bg-slate-800 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors text-xs"
              >
                <Send className="w-3.5 h-3.5 text-amber-400" />
                <span>Submit Admission Enquiry</span>
              </button>

            </form>
          )}
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-slate-200 text-[11px] text-slate-500 space-y-1">
          <p className="flex items-center gap-1.5 font-medium text-slate-700">
            <Phone className="w-3.5 h-3.5 text-amber-500" /> Helpline: {SCHOOL_INFO.phone}
          </p>
          <p className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400" /> Balwant Nagar, Gwalior MP
          </p>
        </div>

      </div>
    </div>
  );
};
