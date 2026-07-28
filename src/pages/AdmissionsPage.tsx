import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ADMISSION_FAQS } from '../data/schoolData';

interface AdmissionsPageProps {
  onOpenBookVisit: () => void;
  onOpenEnquiry: () => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({
  onOpenBookVisit,
  onOpenEnquiry
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const steps = [
    {
      title: "Say hello",
      desc: "Start by reaching out to us online or over the phone. We'll happily answer your immediate questions and send you our information pack."
    },
    {
      title: "Come for a visit",
      desc: "Walk through our spaces, see the children engaged in activities, and get a true feel for the genuine warmth of our community."
    },
    {
      title: "A relaxed meeting",
      desc: "We'll invite you and your child for a casual play session. It's just a chance for us to say hi and make sure everyone feels comfortable."
    },
    {
      title: "Welcome to the family",
      desc: "If we're a good fit, we'll offer a place and gracefully guide you through the simple enrolment process. Then, the real fun begins."
    }
  ];

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
          <span className="text-[#0EA5E9] uppercase tracking-widest text-sm font-sans mb-6 block font-medium">Admissions</span>
          <h1 className="text-5xl lg:text-7xl text-[#0F172A] leading-tight mb-8">
            Joining our community.
          </h1>
          <p className="text-xl text-[#475569] font-sans font-light leading-relaxed max-w-2xl mx-auto">
            We believe finding the right preschool is about feeling a sense of true belonging. Our admissions process is designed to be gentle, transparent, and effortlessly welcoming.
          </p>
        </motion.div>
      </section>

      {/* 2. Process (Split Layout) */}
      <section className="px-6 lg:px-16 max-w-[1600px] mx-auto mb-24 lg:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="sticky top-32 aspect-[4/5] rounded-[20px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop" 
                alt="Admissions" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col justify-center space-y-16 lg:py-10 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl lg:text-5xl text-[#0F172A] leading-tight mb-12">How it works.</h2>
              <div className="relative border-l-2 border-[#E2E8F0] ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[3.1rem] md:-left-[3.6rem] w-12 h-12 bg-white border-2 border-[#E2E8F0] rounded-full flex items-center justify-center font-serif text-xl text-[#F59E0B] z-10 shadow-sm">
                      {index + 1}
                    </div>
                    <div className="bg-white p-6 md:p-8 rounded-[24px] border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <h3 className="text-2xl text-[#4338CA] mb-3">{step.title}</h3>
                      <p className="text-[#475569] font-sans font-light text-lg leading-relaxed max-w-xl">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="pt-12 border-t border-[#E2E8F0] flex flex-wrap gap-4">
              <button
                onClick={onOpenBookVisit}
                className="px-8 py-4 bg-[#4338CA] text-white font-sans font-semibold rounded-full hover:bg-[#0EA5E9] transition-colors"
              >
                Book a Visit
              </button>
              <button
                onClick={onOpenEnquiry}
                className="px-8 py-4 bg-white border border-[#E2E8F0] text-[#0F172A] font-sans font-medium rounded-full hover:bg-[#F8FAFC] transition-colors"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQs */}
      <section className="px-6 lg:px-16 max-w-[900px] mx-auto mb-24 lg:mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-[#0F172A] leading-tight mb-6">Questions you might have.</h2>
        </div>
        
        <div className="space-y-4">
          {ADMISSION_FAQS.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white rounded-[20px] overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'shadow-[0_4px_24px_rgba(0,0,0,0.03)] border-transparent' : 'border border-[#E2E8F0]'}`}
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-serif text-2xl text-[#0F172A]">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#0EA5E9] transition-transform duration-300 ${
                    openFaqIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openFaqIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-[#475569] font-sans font-light text-lg leading-relaxed max-w-3xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
