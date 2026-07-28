import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#FFFFFF] pt-32 pb-24 lg:pb-32 min-h-screen">
      
      {/* 1. Header */}
      <section className="px-6 lg:px-16 max-w-[1200px] mx-auto text-center mb-24 lg:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-[#0EA5E9] uppercase tracking-widest text-sm font-sans mb-6 block font-medium">Contact Us</span>
          <h1 className="text-5xl lg:text-7xl text-[#0F172A] leading-tight mb-8">
            Let's start a conversation.
          </h1>
          <p className="text-xl text-[#475569] font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Whether you have a quick question or want to discuss your child's specific needs, we're here to help.
          </p>
        </motion.div>
      </section>

      {/* 2. Contact Info & Form */}
      <section className="px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <h2 className="text-3xl text-[#4338CA] mb-8">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-[#475569] font-sans">
                  <MapPin className="w-5 h-5 mt-1 shrink-0 text-[#F59E0B]" />
                  <p className="font-light leading-relaxed">
                    {SCHOOL_INFO.address}<br />
                    {SCHOOL_INFO.city}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-[#475569] font-sans">
                  <Phone className="w-5 h-5 shrink-0 text-[#F59E0B]" />
                  <p className="font-light">
                    <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-[#0F172A] transition-colors">{SCHOOL_INFO.phone}</a>
                    {SCHOOL_INFO.altPhone && <span> / <a href={`tel:${SCHOOL_INFO.altPhone}`} className="hover:text-[#0F172A] transition-colors">{SCHOOL_INFO.altPhone}</a></span>}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-[#475569] font-sans">
                  <Mail className="w-5 h-5 shrink-0 text-[#F59E0B]" />
                  <p className="font-light">
                    <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-[#0F172A] transition-colors">{SCHOOL_INFO.email}</a>
                  </p>
                </div>
                <div className="flex items-center gap-4 text-[#475569] font-sans">
                  <Clock className="w-5 h-5 shrink-0 text-[#F59E0B]" />
                  <p className="font-light">{SCHOOL_INFO.officeHours}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[20px] overflow-hidden aspect-[16/9] lg:aspect-[4/3]">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.73581788756!2d78.10707746409892!3d26.195240954848974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291b5%3A0x856b3e64c1bdf739!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1714402334812!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location Map"
              ></iframe>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-[#F8FAFC] rounded-[20px] p-8 lg:p-16 border border-[#E2E8F0]"
          >
            <h2 className="text-3xl text-[#4338CA] mb-8">Send a message</h2>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#FFFFFF] rounded-full flex items-center justify-center mx-auto mb-6 text-[#0EA5E9]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl text-[#0F172A] mb-4">Thank you</h3>
                <p className="text-[#475569] font-sans font-light">
                  We have received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-sans text-[#475569] mb-2 font-medium">Your Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl px-4 py-4 text-[#0F172A] font-sans focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all outline-none"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-sans text-[#475569] mb-2 font-medium">Phone</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl px-4 py-4 text-[#0F172A] font-sans focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all outline-none"
                      placeholder="+91"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-sans text-[#475569] mb-2 font-medium">Email (optional)</label>
                    <input 
                      type="email" 
                      className="w-full bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl px-4 py-4 text-[#0F172A] font-sans focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all outline-none"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-sans text-[#475569] mb-2 font-medium">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl px-4 py-4 text-[#0F172A] font-sans focus:ring-2 focus:ring-[#0EA5E9] focus:border-transparent transition-all outline-none resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-[#4338CA] text-white font-sans font-semibold rounded-full hover:bg-[#0EA5E9] transition-colors mt-6"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>

    </div>
  );
};
