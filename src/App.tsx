import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageView } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Modals/Drawers
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookVisitModal } from './components/BookVisitModal';
import { EnquiryDrawer } from './components/EnquiryDrawer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { CampusPage } from './pages/CampusPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activeView, setActiveView] = useState<PageView>('home');
  const [isBookVisitOpen, setIsBookVisitOpen] = useState(false);
  const [isEnquiryDrawerOpen, setIsEnquiryDrawerOpen] = useState(false);
  const [theme, setTheme] = useState<'yellow' | 'blue' | 'green' | 'pink'>('yellow');

  const handleOpenBookVisit = () => setIsBookVisitOpen(true);
  const handleOpenEnquiry = () => setIsEnquiryDrawerOpen(true);

  return (
    <div className={`min-h-screen bg-base text-[#0F172A] flex flex-col font-sans selection:bg-secondary selection:text-[#0F172A] relative theme-${theme} overflow-x-hidden bg-dot-pattern transition-colors duration-500`}>
      
      {/* Playful Floating Background Doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        {/* Soft clouds */}
        <div className="absolute top-[12%] left-[5%] w-24 h-12 bg-white/70 rounded-full blur-[1px] animate-float opacity-80" style={{ borderRadius: '50px 50px 30px 30px' }} />
        <div className="absolute top-[18%] right-[8%] w-32 h-16 bg-white/60 rounded-full blur-[1px] animate-float-delayed opacity-80" style={{ borderRadius: '60px 60px 40px 40px' }} />
        <div className="absolute top-[50%] left-[2%] w-20 h-10 bg-white/50 rounded-full blur-[2px] animate-float-slow opacity-60" style={{ borderRadius: '40px 40px 20px 20px' }} />
        <div className="absolute top-[75%] right-[4%] w-28 h-12 bg-white/60 rounded-full blur-[1px] animate-float opacity-70" style={{ borderRadius: '50px 50px 30px 30px' }} />
        
        {/* Playful Sun / Star background silhouettes */}
        <svg className="absolute top-[5%] right-[25%] w-32 h-32 text-accent/10 animate-spin-slow" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50,15 L55,35 L75,40 L55,45 L50,65 L45,45 L25,40 L45,35 Z" />
        </svg>
        <svg className="absolute top-[40%] right-[3%] w-20 h-20 text-primary/5 animate-float-slow" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="30" />
          <path d="M50,10 L50,90 M10,50 L90,50 M22,22 L78,78 M22,78 L78,22" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
        <svg className="absolute top-[65%] left-[6%] w-24 h-24 text-sage/10 animate-float-delayed" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50,20 Q60,35 80,35 Q60,45 50,70 Q40,45 20,35 Q40,35 50,20 Z" />
        </svg>
      </div>

      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenBookVisit={handleOpenBookVisit}
        onOpenEnquiry={handleOpenEnquiry}
        theme={theme}
        setTheme={setTheme}
      />

      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full"
          >
            {activeView === 'home' && (
              <HomePage
                setActiveView={setActiveView}
                onOpenBookVisit={handleOpenBookVisit}
                onOpenEnquiry={handleOpenEnquiry}
              />
            )}
            {activeView === 'about' && (
              <AboutPage
                onOpenBookVisit={handleOpenBookVisit}
                setActiveView={setActiveView}
              />
            )}
            {activeView === 'programs' && (
              <ProgramsPage
                onOpenBookVisit={handleOpenBookVisit}
              />
            )}
            {activeView === 'admissions' && (
              <AdmissionsPage
                onOpenBookVisit={handleOpenBookVisit}
                onOpenEnquiry={handleOpenEnquiry}
              />
            )}
            {activeView === 'campus' && (
              <CampusPage
                onOpenBookVisit={handleOpenBookVisit}
              />
            )}
            {activeView === 'gallery' && (
              <GalleryPage />
            )}
            {activeView === 'contact' && (
              <ContactPage />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer
        setActiveView={setActiveView}
      />

      {/* Floating Interactive Badges & Modals */}
      <FloatingWhatsApp />
      
      <BookVisitModal
        isOpen={isBookVisitOpen}
        onClose={() => setIsBookVisitOpen(false)}
      />
      
      <EnquiryDrawer
        isOpen={isEnquiryDrawerOpen}
        onClose={() => setIsEnquiryDrawerOpen(false)}
      />
    </div>
  );
}
