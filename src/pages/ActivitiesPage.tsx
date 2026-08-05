import React from 'react';
import { 
  Sparkles, 
  Palette, 
  Music, 
  BookOpen, 
  Smile, 
  Cpu, 
  Compass, 
  Trophy, 
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface ActivitiesPageProps {
  onOpenBookVisit: () => void;
}

export const ActivitiesPage: React.FC<ActivitiesPageProps> = ({ onOpenBookVisit }) => {
  const activities = [
    {
      title: "Art & Craft",
      category: "Creative Expression",
      icon: Palette,
      desc: "Children experiment with non-toxic clay, vegetable dyes, watercolor blending, and paper craft to build fine-motor agility and aesthetic imagination.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Music & Dance",
      category: "Aesthetic Intelligence",
      icon: Music,
      desc: "Weekly percussion circles with xylophones, bongos, and classical Indian rhythmic patterns that enhance auditory memory and motor synchronization.",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Storytelling",
      category: "Linguistic Mastery",
      icon: BookOpen,
      desc: "Bilingual puppetry, dramatic role-play, and audiobooks in our Wonder Nook library that cultivate vocabulary and expressive public speaking.",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "STEM Activities",
      category: "Scientific Logic",
      icon: Cpu,
      desc: "Hands-on water density tests, plant lifecycle monitoring in our organic garden, magnet puzzles, and basic robotics logic.",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Yoga",
      category: "Emotional Well-Being",
      icon: Smile,
      desc: "Child-friendly animal yoga postures, gentle diaphragmatic breathing, and morning gratitude circles to promote self-regulation and inner calm.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Sports",
      category: "Physical Agility",
      icon: Trophy,
      desc: "Age-appropriate athletics, obstacle courses, and team games on our non-toxic EPDM rubber turf to develop gross motor skills and teamwork.",
      image: "/eurokids-interaction.jpg"
    },
    {
      title: "Festival Celebrations",
      category: "Cultural Immersion",
      icon: Calendar,
      desc: "Joyful celebrations of cultural festivals fostering respect, diversity, and community spirit through music, traditional dress, and shared meals.",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      
      {/* Header */}
      <section className="bg-[#183153] text-white py-16 sm:py-20 border-b border-[#183153]/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-1.5 bg-[#D4A017]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A017]/15 text-[#D4A017] text-xs font-bold uppercase tracking-widest border border-[#D4A017]/30">
            <Sparkles className="w-3.5 h-3.5" /> Holistic Enrichment
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-sans uppercase tracking-tight text-white">
            Activities, Arts & STEM Exploration
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-light">
            Beyond academics, children discover their innate talents through structured artistic, musical, athletic, and scientific rotations.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all space-y-4">
              <img
                src={act.image}
                alt={act.title}
                className="w-full h-48 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 space-y-3">
                <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 uppercase tracking-wider">
                  {act.category}
                </span>
                <h3 className="text-lg font-bold font-serif text-slate-900">{act.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-100 p-8 rounded-3xl border border-slate-200 text-center space-y-4">
          <h3 className="text-xl font-bold font-serif text-slate-900">Discover Our Enrichment Studios in Person</h3>
          <p className="text-slate-600 text-xs max-w-xl mx-auto">
            Tour our music suite, pottery wheels, and junior STEM lab during your private campus walkthrough.
          </p>
          <button
            onClick={onOpenBookVisit}
            className="px-6 py-3 bg-[#0F172A] hover:bg-slate-800 text-amber-300 font-bold rounded-xl text-xs transition-colors shadow-sm"
          >
            Book a Tour
          </button>
        </div>
      </section>

    </div>
  );
};
