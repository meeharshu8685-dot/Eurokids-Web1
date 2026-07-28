import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight, CheckCircle2, BookOpen, Clock, Users } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/schoolData';
import { PageView } from '../types';

interface AgeFinderQuizProps {
  setActiveView: (view: PageView) => void;
  onOpenBookVisit: () => void;
}

export const AgeFinderQuiz: React.FC<AgeFinderQuizProps> = ({ setActiveView, onOpenBookVisit }) => {
  const [ageMonths, setAgeMonths] = useState<number>(30); // default 2.5 yrs (30 months)

  // Calculate age string
  const years = Math.floor(ageMonths / 12);
  const remainingMonths = ageMonths % 12;
  const ageDisplay = `${years} yrs ${remainingMonths > 0 ? `${remainingMonths} mos` : ''}`;

  // Find matching program
  const matchedProgram = PROGRAMS_DATA.find((p) => {
    if (ageMonths >= 20 && ageMonths < 30) return p.id === 'playgroup';
    if (ageMonths >= 30 && ageMonths < 42) return p.id === 'nursery';
    if (ageMonths >= 42 && ageMonths < 54) return p.id === 'junior-kg';
    if (ageMonths >= 54 && ageMonths < 68) return p.id === 'senior-kg';
    return p.id === 'daycare';
  }) || PROGRAMS_DATA[1];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
      <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider mb-2">
        <Sparkles className="w-4 h-4" /> Interactive Program Recommender
      </div>
      
      <h3 className="text-2xl font-bold font-serif text-slate-900">
        Find the Right Program for Your Child
      </h3>
      <p className="text-slate-600 text-xs mt-1 mb-6">
        Slide to select your child's age to instantly see recommended early learning outcomes, batch timings, and ratio.
      </p>

      {/* Slider Control */}
      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold text-slate-700">Child's Current Age:</span>
          <span className="text-sm font-extrabold text-[#0F172A] bg-amber-300 px-3 py-1 rounded-full border border-amber-400/60 shadow-xs">
            {ageDisplay} ({ageMonths} Months)
          </span>
        </div>

        <input
          type="range"
          min="20"
          max="72"
          step="2"
          value={ageMonths}
          onChange={(e) => setAgeMonths(parseInt(e.target.value))}
          className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0F172A]"
        />

        <div className="flex justify-between text-[10px] text-slate-500 font-semibold mt-2">
          <span>1.8 Yrs (Playgroup)</span>
          <span>2.5 Yrs (Nursery)</span>
          <span>3.5 Yrs (Jr KG)</span>
          <span>4.5 Yrs (Sr KG)</span>
          <span>6.0 Yrs</span>
        </div>
      </div>

      {/* Matched Result Card */}
      <div className="bg-[#0F172A] text-white rounded-2xl p-6 relative overflow-hidden space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-700 pb-4">
          <div>
            <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
              Recommended Match
            </span>
            <h4 className="text-2xl font-bold font-serif text-white flex items-center gap-2">
              {matchedProgram.name}
              <span className="text-xs font-sans font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {matchedProgram.ageGroup}
              </span>
            </h4>
            <p className="text-slate-300 text-xs mt-0.5">{matchedProgram.subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Batch Timing: <strong>{matchedProgram.timing}</strong></span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Users className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Ratio: <strong>{matchedProgram.teacherRatio}</strong></span>
          </div>
        </div>

        <div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
            Key Learning Outcomes for this Age
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
            {matchedProgram.keyOutcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2 flex flex-wrap gap-3">
          <button
            onClick={onOpenBookVisit}
            className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Tour for {matchedProgram.name}</span>
          </button>
          <button
            onClick={() => setActiveView('programs')}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center gap-1.5 transition-colors border border-slate-700"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>View Full Syllabus</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
