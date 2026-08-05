import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/schoolData';

interface ProgramsPageProps {
  onOpenBookVisit: () => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onOpenBookVisit }) => {
  return (
    <div className="w-full bg-[#FFFFFF] pt-32 pb-24 lg:pb-32">
      
      {/* 1. Header */}
      <section className="px-6 lg:px-16 max-w-[1200px] mx-auto text-center mb-24 lg:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-[#0EA5E9] uppercase tracking-widest text-sm font-sans mb-6 block font-medium">Our Programs</span>
          <h1 className="text-5xl lg:text-7xl text-[#0F172A] leading-tight mb-8">
            Growing up with us.
          </h1>
          <p className="text-xl text-[#475569] font-sans font-light leading-relaxed max-w-2xl mx-auto">
            From their first steps away from home to getting ready for big school, our programs naturally adapt to your child's evolving needs.
          </p>
        </motion.div>
      </section>

      {/* 2. Programs List (Editorial Alternating) */}
      <section className="px-6 lg:px-16 max-w-[1600px] mx-auto mb-24 lg:mb-32">
        <div className="space-y-32 lg:space-y-48">
          {PROGRAMS_DATA.map((prog, index) => (
            <div 
              key={prog.id} 
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center ${
                index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`lg:col-span-7 aspect-[4/3] rounded-[20px] overflow-hidden ${index % 2 !== 0 ? 'lg:col-start-6' : ''}`}
              >
                <img 
                  src={prog.image} 
                  alt={prog.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`lg:col-span-5 space-y-8 ${index % 2 !== 0 ? 'lg:col-start-1 lg:pr-10' : ''}`}
              >
                <div className="space-y-2">
                  <h2 className="text-4xl lg:text-5xl text-[#0F172A] leading-tight">
                    {prog.name}
                  </h2>
                  <p className="text-[#0EA5E9] font-sans font-medium uppercase tracking-widest text-sm">
                    {prog.timing}
                  </p>
                </div>
                
                <p className="text-[#475569] font-sans font-light text-lg leading-relaxed">
                  {prog.description}
                </p>

                <div className="pt-6 border-t border-[#E2E8F0]">
                  <ul className="space-y-4">
                    {prog.keyOutcomes.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-4 text-[#475569] font-sans font-light">
                        <span className="text-[#F59E0B] mt-1 text-lg leading-none">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </motion.div>
            </div>
          ))}
        </div>
      </section>



    </div>
  );
};
