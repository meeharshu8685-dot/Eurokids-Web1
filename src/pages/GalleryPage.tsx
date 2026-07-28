import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/schoolData';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const GALLERY_CATEGORIES = Array.from(new Set(GALLERY_ITEMS.map(i => i.category)));
  const filteredImages = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(img => img.category === activeCategory);

  return (
    <div className="w-full bg-[#FFFFFF] pt-32 pb-24 lg:pb-32 min-h-screen">
      
      <section className="px-6 lg:px-16 max-w-[1600px] mx-auto text-center mb-16 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-[#0EA5E9] uppercase tracking-widest text-sm font-sans mb-6 block font-medium">Gallery</span>
          <h1 className="text-5xl lg:text-7xl text-[#0F172A] leading-tight mb-12">
            Moments of joy and discovery.
          </h1>

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-5 py-2.5 rounded-full font-sans text-sm transition-colors font-medium ${
                activeCategory === 'All' 
                  ? 'bg-[#4338CA] text-white' 
                  : 'bg-white text-[#475569] hover:text-[#0F172A] border border-[#E2E8F0]'
              }`}
            >
              All
            </button>
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-sans text-sm transition-colors font-medium ${
                  activeCategory === cat 
                    ? 'bg-[#4338CA] text-white' 
                    : 'bg-white text-[#475569] hover:text-[#0F172A] border border-[#E2E8F0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Masonry-style Grid */}
      <section className="px-6 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                className="break-inside-avoid relative group rounded-[20px] overflow-hidden cursor-zoom-in bg-[#F8FAFC]"
                onClick={() => setSelectedImage(img.image)}
              >
                <img 
                  src={img.image} 
                  alt={img.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#FFFFFF]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-4 rounded-full bg-[#F8FAFC] text-[#0F172A] hover:bg-[#E2E8F0] transition-colors z-[101]"
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
              className="max-w-full max-h-full rounded-[20px] shadow-2xl cursor-zoom-out"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
