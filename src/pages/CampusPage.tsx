import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';
import { FACILITIES } from '../data/schoolData';

interface CampusPageProps {
  onOpenBookVisit: () => void;
}

export const CampusPage: React.FC<CampusPageProps> = ({ onOpenBookVisit }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full bg-base pt-32 pb-24 lg:pb-32 bg-dot-pattern">
      
      {/* 1. Header */}
      <section className="px-6 lg:px-16 max-w-[1200px] mx-auto text-center mb-24 lg:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-sage uppercase tracking-widest text-sm font-sans mb-6 block font-bold">Life at School</span>
          <h1 className="text-5xl lg:text-7xl text-[#0F172A] leading-tight mb-8 font-bold">
            An environment designed <br className="hidden md:block" />for exploration.
          </h1>
          <p className="text-xl text-[#475569] font-sans font-medium leading-relaxed max-w-2xl mx-auto">
            Natural light, wooden materials, and open spaces gracefully encourage movement, creativity, and a sense of calm.
          </p>
        </motion.div>
      </section>

      {/* 2. Masonry-style Grid */}
      <section className="px-6 lg:px-16 max-w-[1600px] mx-auto mb-24 lg:mb-32">
        <motion.div layout className="columns-1 md:columns-2 gap-12 space-y-12">
          <AnimatePresence>
            {FACILITIES.map((fac) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={fac.id}
                className="break-inside-avoid relative group playful-card bg-white p-6 rounded-[32px]"
              >
                <div 
                  className="rounded-[20px] overflow-hidden cursor-zoom-in bg-secondary mb-8 border-2 border-slate-900 shadow-sm"
                  onClick={() => setSelectedImage(fac.image)}
                >
                  <img 
                    src={fac.image} 
                    alt={fac.title} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => { e.currentTarget.src = '/eurokids-interaction.jpg'; }}
                  />
                </div>
                <div className="px-2">
                  <h3 className="text-3xl text-primary mb-3">{fac.title}</h3>
                  <p className="text-[#475569] font-sans font-medium text-lg mb-6 leading-relaxed">
                    {fac.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {fac.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-[#0F172A] font-sans font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 3. CTA */}
      <section className="px-6 lg:px-16 max-w-[1600px] mx-auto relative z-10">
        <div className="relative rounded-[40px] overflow-hidden bg-primary text-[#FFFFFF] py-24 lg:py-32 px-6 text-center border-3 border-slate-900 shadow-2xl bg-grid-pattern">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              Come see it for yourself.
            </h2>
            <p className="text-white/90 font-sans font-medium text-lg mb-12">
              Book a private tour with our campus director and experience the warmth of our community.
            </p>
            <button
              onClick={onOpenBookVisit}
              className="px-8 py-4 bg-white text-primary font-sans font-bold rounded-full transition-all playful-btn border-none shadow-lg"
            >
              Book a Campus Tour
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-4 rounded-full bg-secondary text-[#0F172A] hover:bg-slate-200 transition-colors z-[101] playful-btn"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              src={selectedImage}
              className="max-w-full max-h-full rounded-[30px] border-3 border-slate-900 shadow-2xl cursor-zoom-out"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
