import React, { useState } from 'react';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  Building2
} from 'lucide-react';
import { VisitFormData } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';

interface BookVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookVisitModal: React.FC<BookVisitModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<VisitFormData>({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childAgeMonths: '30',
    programInterest: 'Nursery (2.5 – 3.5 yrs)',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredTimeSlot: '10:00 AM – 11:30 AM (Morning Batch)',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] w-full max-w-xl rounded-3xl shadow-2xl border border-[#4338CA]/10 overflow-hidden relative my-8">
        
        {/* Header */}
        <div className="bg-[#4338CA] p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-1 bg-[#F59E0B]"></div>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-[#F59E0B] text-xs font-bold uppercase tracking-widest mb-2">
            <Sparkles className="w-4 h-4" /> Gwalior Campus Walkthrough
          </div>
          <h3 className="text-2xl font-bold font-sans uppercase tracking-tight text-white">Book a Personalized Campus Tour</h3>
          <p className="text-slate-300 text-xs mt-1 font-light">
            Experience our architectural smart classrooms, organic kitchen, and soft-play outdoor turf with our pedagogy team.
          </p>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Visit Slot Reserved!
              </span>
              <h4 className="text-xl font-bold text-slate-900 font-serif">
                We look forward to welcoming you, {formData.parentName}!
              </h4>
              <p className="text-slate-600 text-xs max-w-md mx-auto leading-relaxed">
                Our Admissions Coordinator will call you at <strong className="text-slate-900">{formData.phone}</strong> within 2 hours to confirm your walkthrough on <strong className="text-slate-900">{formData.preferredDate}</strong> ({formData.preferredTimeSlot}).
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <Building2 className="w-4 h-4 text-amber-500" />
                <span>Campus Location:</span>
              </div>
              <p className="text-slate-600 pl-6">{SCHOOL_INFO.address}</p>
              <div className="flex items-center gap-2 text-slate-700 font-semibold pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Visitor Guideline:</span>
              </div>
              <p className="text-slate-600 pl-6">Please bring a valid photo ID. Free parent parking available on premises.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  const text = encodeURIComponent(`Hello, I just booked a campus visit for ${formData.parentName} on ${formData.preferredDate}. Please confirm my slot.`);
                  window.open(`https://wa.me/${SCHOOL_INFO.whatsapp}?text=${text}`, '_blank');
                }}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Confirm on WhatsApp</span>
              </button>
              <button
                onClick={handleReset}
                className="w-full py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl text-xs transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            
            {/* Grid 1: Parent Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" /> Parent / Guardian Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  placeholder="e.g. Dr. Rajesh Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 font-medium"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" /> Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +91 98260 12345"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 font-medium"
                />
              </div>
            </div>

            {/* Grid 2: Email & Child Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" /> Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. parent@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 font-medium"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5">
                  Child's Name & Age
                </label>
                <input
                  type="text"
                  required
                  value={formData.childName}
                  onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  placeholder="e.g. Aarav (2.5 years)"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 font-medium"
                />
              </div>
            </div>

            {/* Program Interest */}
            <div>
              <label className="block text-slate-700 font-bold mb-1.5">
                Program of Interest *
              </label>
              <select
                value={formData.programInterest}
                onChange={(e) => setFormData({ ...formData, programInterest: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 font-medium"
              >
                <option value="Playgroup (1.8 – 2.5 yrs)">Playgroup (1.8 – 2.5 yrs)</option>
                <option value="Nursery (2.5 – 3.5 yrs)">Nursery (2.5 – 3.5 yrs)</option>
                <option value="Junior KG (3.5 – 4.5 yrs)">Junior KG (3.5 – 4.5 yrs)</option>
                <option value="Senior KG (4.5 – 5.5 yrs)">Senior KG (4.5 – 5.5 yrs)</option>
              </select>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                  <CalendarIcon className="w-3.5 h-3.5 text-slate-400" /> Preferred Visit Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 font-medium"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> Preferred Slot *
                </label>
                <select
                  value={formData.preferredTimeSlot}
                  onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 font-medium"
                >
                  <option value="09:30 AM – 10:30 AM (Morning Batch)">09:30 AM – 10:30 AM (Morning)</option>
                  <option value="11:00 AM – 12:30 PM (Midday Walkthrough)">11:00 AM – 12:30 PM (Midday)</option>
                  <option value="03:00 PM – 04:30 PM (Afternoon Batch)">03:00 PM – 04:30 PM (Afternoon)</option>
                </select>
              </div>
            </div>

            {/* Special Request */}
            <div>
              <label className="block text-slate-700 font-bold mb-1.5">
                Questions / Specific Areas to Inspect
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="e.g. Would like to inspect the organic kitchen, transport bus routes, or meet the Principal."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 font-medium"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-slate-900 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-md hover:shadow-lg transition-all text-sm"
              >
                Confirm Campus Visit Booking
              </button>
            </div>

            <p className="text-[10px] text-slate-500 text-center">
              🔒 We respect your privacy. No spam. You will only receive your visit confirmation and prospectus.
            </p>

          </form>
        )}

      </div>
    </div>
  );
};
