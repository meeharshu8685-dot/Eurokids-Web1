import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { PageView } from '../types';

interface HeaderProps {
  activeView: PageView;
  setActiveView: (view: PageView) => void;
  onOpenBookVisit: () => void;
  onOpenEnquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  setActiveView,
  onOpenBookVisit,
  onOpenEnquiry
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageView; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'programs', label: 'Our Programs' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'campus', label: 'Life at School' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (view: PageView) => {
    setActiveView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out flex justify-center px-4 sm:px-6 pt-4 sm:pt-6`}
      >
        <div 
          className={`flex items-center justify-between transition-all duration-500 ease-out w-full max-w-6xl rounded-full px-6 py-3 border ${
            isScrolled 
              ? 'bg-white/90 backdrop-blur-xl shadow-[0_6px_30px_rgba(0,0,0,0.08)] border-white/80' 
              : 'bg-white/60 backdrop-blur-md shadow-sm border-white/40'
          }`}
        >
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 focus:outline-none group text-left"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-900 shadow-sm flex items-center justify-center bg-white">
              <img src="/eurokids-logo.jpg" alt="EuroKids Logo" className="w-full h-full object-cover scale-110" />
            </div>
            <div className="flex flex-col text-left text-[#0F172A]">
              <span className="font-sans font-bold text-2xl leading-none tracking-tight text-primary">EuroKids</span>
              <span className="font-sans text-[9px] uppercase tracking-[0.25em] font-semibold opacity-70 mt-0.5">Gwalior</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-sans font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'text-primary scale-105' 
                      : 'text-[#0F172A]/70 hover:text-primary hover:scale-105'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute inset-0 rounded-full bg-secondary/80"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenBookVisit}
              className={`px-5 py-2 rounded-full text-sm font-sans font-bold transition-all duration-200 bg-primary text-white hover:scale-105 active:scale-95`}
            >
              Book a Visit
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full transition-colors text-primary"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-base flex flex-col bg-dot-pattern"
          >
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-900 flex items-center justify-center bg-white">
                  <img src="/eurokids-logo.jpg" alt="EuroKids Logo" className="w-full h-full object-cover scale-110" />
                </div>
                <div className="flex flex-col text-[#0F172A]">
                  <span className="font-sans font-bold text-2xl leading-none text-primary">EuroKids</span>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full text-[#0F172A] bg-secondary"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-5 justify-center">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-2xl font-sans font-bold ${
                    activeView === item.id ? 'text-primary' : 'text-[#475569]'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-4 flex flex-col gap-3"
              >
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBookVisit();
                  }}
                  className="w-full py-3.5 rounded-full bg-primary text-white font-sans font-bold text-lg hover:opacity-90 active:scale-95"
                >
                  Book a Visit
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full py-3.5 rounded-full border border-primary/20 bg-white text-primary font-sans font-bold text-lg hover:bg-slate-50 active:scale-95"
                >
                  Enquire Now
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
