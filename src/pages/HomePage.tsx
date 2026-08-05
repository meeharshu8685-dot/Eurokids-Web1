import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, Star, Heart, Sun } from 'lucide-react';
import { PageView } from '../types';
import { PROGRAMS_DATA, GALLERY_ITEMS, TESTIMONIALS } from '../data/schoolData';

interface HomePageProps {
  setActiveView: (view: PageView) => void;
  onOpenBookVisit: () => void;
  onOpenEnquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActiveView,
  onOpenBookVisit,
  onOpenEnquiry
}) => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <div className="w-full bg-base overflow-hidden">
      
      {/* 1. HERO */}
      <section className="relative h-[90vh] min-h-[650px] w-full flex items-end pb-28 lg:pb-36 px-6 lg:px-16 overflow-hidden bg-primary/10">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/eurokids-interaction.jpg" 
            alt="Children playing" 
            className="w-full h-full object-cover object-top"
            onError={(e) => { e.currentTarget.src = '/eurokids-logo.jpg'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-transparent" />
        </div>
        
        {/* Playful Decorative elements */}
        <div className="absolute top-[20%] right-[10%] w-36 h-36 bg-[#F59E0B] mix-blend-multiply opacity-40 blur-2xl animate-float-slow shape-blob" />
        <div className="absolute bottom-[35%] right-[25%] w-44 h-44 bg-[#EC4899] mix-blend-multiply opacity-35 blur-2xl animate-float-delayed shape-blob delay-1000" />
        <div className="absolute top-[35%] left-[10%] w-52 h-52 bg-[#0EA5E9] mix-blend-multiply opacity-35 blur-3xl animate-float shape-blob delay-700" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative z-10 max-w-2xl w-full lg:w-[50%]"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white mb-6">
            <Star className="w-4 h-4 text-accent animate-spin-slow" fill="currentColor" />
            <span className="font-sans text-sm font-semibold tracking-wide">Admissions open for 2026</span>
          </div>
          <h1 className="text-5xl lg:text-7xl text-white font-bold leading-[1.1] mb-6 drop-shadow-md">
            A warm place for little minds to grow.
          </h1>
          <p className="text-lg text-white/95 font-sans font-medium mb-10 max-w-lg drop-shadow-sm">
            A beautiful, caring environment where children learn naturally through play, curiosity, and connection.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenBookVisit}
              className="px-8 py-4 bg-accent text-white font-sans font-bold rounded-full hover:shadow-xl transition-all shadow-lg playful-btn"
            >
              Book a Visit
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenEnquiry}
              className="px-8 py-4 bg-white text-[#0F172A] font-sans font-bold rounded-full hover:shadow-xl transition-all shadow-lg playful-btn"
            >
              Enquire Now
            </motion.button>
          </div>
        </motion.div>

        {/* Wavy bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[80px] fill-base">
            <path d="M0,0 C90,40 180,80 350,80 C500,80 600,30 750,30 C900,30 1050,70 1200,50 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. PARENT TESTIMONIALS (FEEDBACKS FIRST) */}
      <section className="py-16 lg:py-24 px-6 lg:px-16 max-w-[1200px] mx-auto text-center relative bg-dot-pattern">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[120px] font-sans text-primary/10 leading-none z-0 select-none">“</div>
        
        <div className="relative z-10 min-h-[380px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-slate-900 shadow-lg bg-slate-100">
                <img 
                  src={TESTIMONIALS[currentTestimonial].avatar} 
                  alt={TESTIMONIALS[currentTestimonial].parentName} 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = '/eurokids-logo.jpg'; }}
                />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl leading-snug lg:leading-tight text-[#0F172A] mb-6 max-w-4xl font-serif">
                "{TESTIMONIALS[currentTestimonial].quote}"
              </h2>
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-1 text-accent mb-2">
                  {[...Array(TESTIMONIALS[currentTestimonial].rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4" fill="currentColor" />
                  ))}
                </div>
                <p className="font-sans font-bold text-primary text-lg">{TESTIMONIALS[currentTestimonial].parentName}</p>
                <p className="font-sans text-[#475569] font-medium text-sm">{TESTIMONIALS[currentTestimonial].childNameAndGrade}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2.5 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === idx 
                    ? 'bg-primary scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. WELCOME (Editorial Split) */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 max-w-[1600px] mx-auto relative bg-dot-pattern">
        {/* Floating background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full -z-10 -translate-y-1/2 translate-x-1/4 blur-3xl opacity-60"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-3 bg-sage rounded-full"></span>
              <span className="text-sage uppercase tracking-widest text-sm font-sans font-bold">Welcome</span>
            </div>
            <h2 className="text-4xl lg:text-6xl text-[#0F172A] leading-tight mb-8 relative">
              A warm and caring environment where every child can grow with confidence.
              <Heart className="absolute -top-6 -right-6 w-12 h-12 text-[#EC4899]/30 animate-float-delayed" fill="currentColor" />
            </h2>
            <div className="space-y-6 text-[#475569] font-sans font-medium leading-relaxed text-lg lg:text-xl">
              <p>
                We believe children learn best when they feel safe, loved, and respected. Our natural environment allows your child to explore at their own pace.
              </p>
              <p>
                Instead of rigid structures, we focus on helping children build confidence, kindness, and a genuine love for discovering the world.
              </p>
            </div>
            <button onClick={() => setActiveView('about')} className="mt-10 group flex items-center gap-3 text-primary font-sans font-bold hover:text-sage transition-colors text-lg">
              Read our story
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-sage group-hover:text-white transition-all transform group-hover:translate-x-2 playful-btn">
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-sage rounded-[30px] transform translate-x-4 translate-y-4 -z-10 opacity-20"></div>
            <div className="aspect-[4/5] rounded-[30px] overflow-hidden relative border-3 border-slate-900 shadow-lg">
              <img 
                src="/eurokids-writing.jpg" 
                alt="Teacher reading to child" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                onError={(e) => { e.currentTarget.src = '/eurokids-interaction.jpg'; }}
              />
            </div>
            {/* Floating badge */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[24px] shadow-xl border-3 border-slate-900 animate-float"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full overflow-hidden border-2 border-slate-900 flex items-center justify-center bg-white">
                  <img src="/eurokids-logo.jpg" alt="EuroKids Mascot" className="w-full h-full object-cover scale-110" onError={(e) => { e.currentTarget.src = '/eurokids-interaction.jpg'; }} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary leading-none">15+</p>
                  <p className="text-sm font-sans text-[#475569] font-semibold mt-1">Years of care</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US (Split Layout) */}
      <section className="bg-secondary py-24 lg:py-32 px-6 lg:px-16 overflow-hidden rounded-[40px] mx-4 lg:mx-8 relative bg-grid-pattern">
        {/* Soft background shape */}
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-white rounded-full mix-blend-soft-light opacity-50 transform translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <h2 className="text-4xl lg:text-6xl text-[#0F172A] leading-tight mb-8">
                Why families choose our kindergarten.
              </h2>
              <motion.div 
                whileHover={{ y: -10 }}
                className="aspect-[3/4] rounded-[30px] overflow-hidden shadow-xl border-3 border-[#0F172A]"
              >
                <img 
                  src="/eurokids-interaction.jpg" 
                  alt="Parents visiting school" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = '/eurokids-logo.jpg'; }}
                />
              </motion.div>
            </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col justify-center gap-8 lg:py-10">
            {[
              { title: "Play-based learning", text: "Children explore naturally through guided play, building a strong foundation without the pressure of formal lessons.", color: "bg-accent/25 text-accent border-accent" },
              { title: "A safe, warm environment", text: "Our classrooms feel like an extension of home. We prioritise emotional well-being so children feel secure enough to take creative risks.", color: "bg-sage/25 text-sage border-sage" },
              { title: "Experienced educators", text: "Our teachers are observers and guides. They take the time to understand your child's unique personality and tailor support.", color: "bg-[#EC4899]/25 text-[#EC4899] border-[#EC4899]" },
              { title: "Natural surroundings", text: "We believe in the power of nature. Our outdoor spaces are designed to encourage movement, curiosity, and a love for the environment.", color: "bg-primary/20 text-primary border-primary" }
            ].map((reason, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="playful-card bg-white p-8 rounded-[32px]"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-12 h-12 rounded-full ${reason.color} border-2 flex items-center justify-center shrink-0 font-bold text-xl`}>
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-3xl text-primary mb-3">{reason.title}</h3>
                    <p className="text-[#475569] font-sans font-medium text-lg leading-relaxed max-w-xl">
                      {reason.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEARNING THROUGH PLAY (Editorial Image First) */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 max-w-[1600px] mx-auto relative bg-dot-pattern">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <motion.div 
             style={{ y: y1 }}
             className="order-2 lg:order-1 relative"
           >
             <div className="aspect-square rounded-[40px] overflow-hidden border-3 border-slate-900 shadow-xl">
               <img 
                 src="/eurokids-butterfly.jpg" 
                 alt="Child painting" 
                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                 onError={(e) => { e.currentTarget.src = '/eurokids-writing.jpg'; }}
               />
             </div>
             {/* Decorative dot */}
             <div className="absolute top-10 -left-6 w-12 h-12 bg-accent rounded-full mix-blend-multiply animate-float-delayed"></div>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="order-1 lg:order-2 lg:pl-10"
           >
             <h2 className="text-4xl lg:text-6xl text-[#0F172A] leading-tight mb-8">
               Helping Children Learn Through Play.
             </h2>
             <div className="space-y-6 text-[#475569] font-sans font-medium leading-relaxed text-lg lg:text-xl mb-10">
               <p>
                 Every activity is an opportunity to learn. Whether they are painting, building blocks, or listening to a story, children are developing critical thinking and motor skills.
               </p>
               <p>
                 We foster a curiosity-driven approach where joy is the center of every lesson.
               </p>
             </div>
             <button onClick={() => setActiveView('programs')} className="group flex items-center gap-3 text-primary font-sans font-bold hover:text-accent transition-colors text-lg">
               Explore Life at School
               <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all transform group-hover:translate-x-2 playful-btn">
                 <ArrowRight className="w-5 h-5" />
               </div>
             </button>
           </motion.div>
         </div>
       </section>

       {/* 5. PROGRAMS (Interactive Cards) */}
       <section className="bg-base py-24 px-6 lg:px-16 relative">
         <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
         <div className="max-w-[1600px] mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <h2 className="text-4xl lg:text-6xl text-[#0F172A] leading-tight max-w-lg">
               Our Programs for every stage.
             </h2>
             <button onClick={() => setActiveView('programs')} className="group flex items-center gap-3 text-primary font-sans font-bold bg-secondary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all playful-btn">
               View Our Programs
               <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
             </button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {PROGRAMS_DATA.slice(0, 3).map((prog, idx) => (
               <motion.div 
                 key={prog.id}
                 whileHover={{ y: -10 }}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: idx * 0.1 }}
                 className="group cursor-pointer playful-card bg-white rounded-[32px] p-4 transition-all"
                 onClick={() => setActiveView('programs')}
               >
                 <div className="aspect-[4/3] rounded-[24px] overflow-hidden mb-6 relative border-2 border-slate-900 shadow-sm">
                   <img 
                     src={prog.image} 
                     alt={prog.name} 
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                     onError={(e) => { e.currentTarget.src = '/eurokids-logo.jpg'; }}
                   />
                 </div>
                 <div className="px-2 pb-4">
                   <h3 className="text-3xl text-primary mb-3 group-hover:text-accent transition-colors">{prog.name}</h3>
                   <p className="text-[#475569] font-sans font-medium mb-6 line-clamp-2">
                     {prog.description}
                   </p>
                   <div className="flex items-center justify-between">
                     <span className="text-primary font-sans font-bold flex items-center gap-2 group-hover:text-accent transition-colors">
                       Learn more
                     </span>
                     <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all playful-btn">
                       <ArrowUpRight className="w-4 h-4" />
                     </div>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>

      {/* 6. CAMPUS EXPERIENCE (Offset Layout) */}
      <section className="py-24 lg:py-40 px-6 lg:px-16 max-w-[1600px] mx-auto overflow-hidden relative bg-dot-pattern">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:col-start-2 relative z-20"
          >
            <h2 className="text-4xl lg:text-6xl text-[#0F172A] leading-tight mb-8">
              Spaces designed for little hands and feet.
            </h2>
            <p className="text-[#475569] font-sans font-medium text-lg lg:text-xl mb-10 leading-relaxed">
              Natural light, wooden materials, and open spaces encourage movement and creativity. We've created an environment that feels calming rather than overstimulating.
            </p>
            <button onClick={() => setActiveView('campus')} className="group flex items-center gap-3 text-primary font-sans font-bold hover:text-accent transition-colors text-lg">
              Explore Life at School
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all transform group-hover:translate-x-2 playful-btn">
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
          </motion.div>
          <div className="lg:col-span-6 relative mt-16 lg:mt-0">
            <motion.div 
              style={{ y: y2 }}
              className="aspect-[4/5] w-[85%] rounded-[40px] overflow-hidden ml-auto relative z-10 shadow-xl border-3 border-slate-900"
            >
              <img 
                src="/eurokids-playgroup-1.jpg" 
                alt="Classroom" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = '/eurokids-writing.jpg'; }}
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="aspect-square w-[55%] rounded-[30px] overflow-hidden absolute -bottom-10 -left-10 z-20 border-3 border-slate-900 bg-white p-2 shadow-2xl hidden md:block"
            >
              <img 
                src="/eurokids-writing.jpg" 
                alt="Outdoor play" 
                className="w-full h-full object-cover rounded-[20px]"
                onError={(e) => { e.currentTarget.src = '/eurokids-interaction.jpg'; }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. GALLERY PREVIEW */}
      <section className="bg-secondary py-24 lg:py-32 px-6 lg:px-16 rounded-[40px] mx-4 lg:mx-8 mb-24 bg-grid-pattern">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-sage uppercase tracking-widest text-sm font-sans mb-4 font-bold">Our Gallery</span>
            <h2 className="text-4xl lg:text-6xl text-[#0F172A] mb-8">Moments of joy.</h2>
            <button onClick={() => setActiveView('gallery')} className="px-6 py-3 rounded-full bg-white text-primary font-sans font-bold hover:shadow-md transition-all flex items-center gap-2 border-2 border-primary/20 hover:scale-105 active:scale-95">
              View full gallery <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
            {GALLERY_ITEMS.slice(0, 5).map((img, idx) => {
              let spanClass = "col-span-1 row-span-1";
              if (idx === 0) spanClass = "col-span-2 row-span-2";
              if (idx === 3) spanClass = "col-span-2 row-span-1";
              
              return (
                <motion.div 
                  key={img.id}
                  whileHover={{ scale: 0.98 }}
                  className={`${spanClass} rounded-[30px] overflow-hidden group relative cursor-pointer border-3 border-slate-900 shadow-sm`}
                  onClick={() => setActiveView('gallery')}
                >
                  <img 
                    src={img.image} 
                    alt={img.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                    onError={(e) => { e.currentTarget.src = '/eurokids-interaction.jpg'; }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-12 lg:py-24 px-6 lg:px-16 max-w-[1600px] mx-auto relative z-10">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[40px] overflow-hidden shadow-2xl border-3 border-slate-900"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="/eurokids-playgroup-2.jpg" 
              alt="Children smiling" 
              className="w-full h-full object-cover transform scale-105"
              onError={(e) => { e.currentTarget.src = '/eurokids-interaction.jpg'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80 mix-blend-multiply" />
          </div>
          
          <div className="relative z-10 py-32 px-6 text-center text-white flex flex-col items-center">
            <span className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-8">
              <Heart className="w-8 h-8 text-[#EC4899]" fill="#EC4899" />
            </span>
            <h2 className="text-5xl lg:text-7xl text-white mb-8 font-bold">
              Come say hello.
            </h2>
            <p className="text-xl font-sans font-medium max-w-lg mb-12 text-white/90">
              We would love to show you around our campus and discuss how we can support your child's early years.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenBookVisit}
                className="px-8 py-4 bg-accent text-white font-sans font-bold rounded-full hover:shadow-xl transition-all shadow-lg playful-btn"
              >
                Book a Visit
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenEnquiry}
                className="px-8 py-4 bg-white text-[#0F172A] font-sans font-bold rounded-full hover:shadow-xl transition-all shadow-lg playful-btn"
              >
                Enquire Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};
