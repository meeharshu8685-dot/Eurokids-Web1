import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/schoolData';

export const FeedbacksPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-16 max-w-[1200px] mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-sage uppercase tracking-widest text-sm font-sans mb-4 font-bold">Parent Feedbacks</span>
        <h1 className="text-4xl lg:text-6xl text-[#0F172A] font-bold">What parents say about us.</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, idx) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-200">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.parentName}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = '/eurokids-logo.jpg'; }}
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{testimonial.parentName}</h3>
                <p className="text-sm text-slate-500">{testimonial.childNameAndGrade}</p>
                <div className="flex gap-1 text-accent mt-1">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3" fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-slate-600 font-medium italic flex-1">
              "{testimonial.quote}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
