import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Heart, Sparkles, Star } from 'lucide-react';
import { SCHOOL_INFO, FACULTY_MEMBERS } from '../data/schoolData';
import { PageView } from '../types';

interface AboutPageProps {
  onOpenBookVisit: () => void;
  setActiveView: (view: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBookVisit, setActiveView }) => {
  return (
    <div className="w-full bg-base pt-32 pb-24 lg:pb-32 bg-dot-pattern">
      
      {/* 1. Header (Editorial) */}
      <section className="px-6 lg:px-16 max-w-[1200px] mx-auto text-center mb-24 lg:mb-32 relative">
        <div className="absolute top-0 left-[10%] w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-4 bg-secondary px-4 py-1.5 rounded-full border border-primary/20">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-primary uppercase tracking-widest text-xs font-sans font-bold">Our Story</span>
          </div>
          <h1 className="text-5xl lg:text-7xl text-[#0F172A] leading-tight mb-8 max-w-4xl font-bold">
            A small community with a very big heart.
          </h1>
          <p className="text-xl text-[#475569] font-sans font-medium leading-relaxed max-w-2xl mx-auto">
            We started with a simple idea: to create a space where children feel completely at home while they take their first gentle steps into learning.
          </p>
        </motion.div>
      </section>

      {/* 2. Collage & Text (Magazine style) */}
      <section className="px-6 lg:px-16 max-w-[1600px] mx-auto mb-24 lg:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8 lg:pr-10 order-2 lg:order-1"
          >
            <h2 className="text-4xl lg:text-5xl text-[#0F172A] leading-tight font-bold">
              Learning at their own pace.
            </h2>
            <div className="space-y-6 text-[#475569] font-sans font-medium text-lg leading-relaxed">
              <p>
                Children are naturally curious. They want to touch, see, and understand the world around them. Instead of telling them what to learn, we provide the natural environment and gentle guidance they need to discover it themselves.
              </p>
              <p>
                Our educators act as thoughtful observers and supporters, ensuring every child feels seen, heard, and valued for who they are.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 relative order-1 lg:order-2"
          >
            <div className="aspect-[4/3] rounded-[32px] overflow-hidden ml-auto w-[85%] relative z-10 border-3 border-slate-900 shadow-xl">
              <img 
                src="/eurokids-writing.jpg" 
                alt="Teacher with children" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.currentTarget.src = '/eurokids-interaction.jpg'; }}
              />
            </div>
            <div className="aspect-square rounded-[24px] overflow-hidden absolute -bottom-16 left-0 w-[45%] border-3 border-slate-900 bg-white p-2 z-20 hidden md:block shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1503454537195-1dc534b36f61?q=80&w=800&auto=format&fit=crop" 
                alt="Classroom" 
                className="w-full h-full object-cover rounded-[16px]"
                onError={(e) => { e.currentTarget.src = '/eurokids-writing.jpg'; }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Philosophy */}
      <section className="bg-primary text-[#FFFFFF] py-24 lg:py-32 px-6 lg:px-16 mt-32 mb-24 lg:mb-32 rounded-[40px] max-w-[1600px] mx-auto md:mx-6 lg:mx-16 xl:mx-auto relative overflow-hidden border-3 border-slate-900 shadow-2xl bg-grid-pattern">
        <div className="absolute top-10 right-10 text-white/5 w-64 h-64 pointer-events-none select-none">
          <Heart className="w-full h-full animate-float-delayed" fill="currentColor" />
        </div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl lg:text-5xl leading-tight font-bold mb-6">Our Approach</h2>
            <p className="text-white/80 font-sans font-medium text-lg max-w-xl mx-auto">
              We focus on three core principles that gracefully guide our everyday interactions with the children.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center lg:text-left">
            {[
              { id: "01", title: "Connection First", text: "Before learning happens, a child must feel completely safe. We prioritize building strong, warm, and trusting relationships." },
              { id: "02", title: "Nature and Play", text: "Mud, water, sand, and paint. We believe messy, unstructured play is essential for developing true creativity and physical skills." },
              { id: "03", title: "Family Partnership", text: "You know your child best. We work intimately with families to ensure a beautiful consistency between home and school." }
            ].map((principle, idx) => (
              <motion.div 
                key={principle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="space-y-4 bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl mx-auto lg:mx-0 playful-btn border-none">
                  {idx + 1}
                </div>
                <h3 className="text-2xl text-white font-bold">{principle.title}</h3>
                <p className="text-white/80 font-sans font-medium leading-relaxed text-base">
                  {principle.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Team (Offset grid) */}
      <section className="px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="max-w-3xl mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-5xl text-[#0F172A] leading-tight mb-6 font-bold">The people who care for them.</h2>
          <p className="text-[#475569] font-sans font-medium text-lg">
            Our teachers are warm, patient, and deeply committed to early childhood education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16">
          {FACULTY_MEMBERS.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group playful-card bg-white p-6 rounded-[32px]"
            >
              <div className="aspect-[4/5] rounded-[24px] overflow-hidden mb-6 border-2 border-slate-900 shadow-sm">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = '/eurokids-logo.jpg'; }}
                />
              </div>
              <h3 className="text-2xl text-primary font-bold mb-1">{member.name}</h3>
              <p className="text-sage font-sans text-sm font-bold uppercase tracking-wider mb-4">{member.role}</p>
              <p className="text-[#475569] font-sans font-medium leading-relaxed">
                {member.qualification}. {member.experience} of working with young children. Passionate about creating inclusive and joyful learning spaces.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};
