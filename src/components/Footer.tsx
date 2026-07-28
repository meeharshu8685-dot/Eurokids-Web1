import React from 'react';
import { PageView } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';

interface FooterProps {
  setActiveView: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveView }) => {
  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-10 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 border-b border-white/10 pb-16">
          
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex flex-col text-left mb-6">
              <span className="font-serif text-3xl leading-none tracking-tight">EuroKids</span>
              <span className="font-sans text-xs uppercase tracking-[0.2em] opacity-70 mt-1">Gwalior</span>
            </div>
            <p className="text-white/60 font-sans font-light max-w-sm text-sm leading-relaxed">
              A happy place where little minds grow. Learning through play, curiosity, and care in a warm and natural environment.
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-sans font-medium text-sm tracking-widest uppercase mb-6 text-white/80">Navigation</h4>
            <ul className="space-y-4 text-sm font-sans font-light text-white/60">
              <li><button onClick={() => setActiveView('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => setActiveView('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => setActiveView('programs')} className="hover:text-white transition-colors">Our Programs</button></li>
              <li><button onClick={() => setActiveView('campus')} className="hover:text-white transition-colors">Life at School</button></li>
              <li><button onClick={() => setActiveView('admissions')} className="hover:text-white transition-colors">Admissions</button></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="font-sans font-medium text-sm tracking-widest uppercase mb-6 text-white/80">Contact</h4>
            <div className="space-y-4 text-sm font-sans font-light text-white/60">
              <p>{SCHOOL_INFO.address}</p>
              <p>
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-white transition-colors">{SCHOOL_INFO.phone}</a>
              </p>
              <p>
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white transition-colors">{SCHOOL_INFO.email}</a>
              </p>
            </div>
          </div>
          
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans font-light text-white/40">
          <p>&copy; {new Date().getFullYear()} EuroKids Gwalior. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
