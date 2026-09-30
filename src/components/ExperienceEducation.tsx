import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, CheckCircle, UserCheck } from 'lucide-react';
import { sounds } from '../utils/audio';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-950/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background & Certification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Credentials</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Solid computer science foundations combined with intensive postgraduate specialization in Data Science and Applied Machine Learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2 mb-6">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span>Academic Qualifications</span>
            </h3>

            <div className="space-y-6 relative border-l-2 border-cyan-500/30 ml-4 pl-6">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => sounds.playHover()}
                  className="relative group glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-6 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#090d16] group-hover:scale-125 transition-transform"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-cyan-400 border border-slate-700 w-max">
                      {edu.duration}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-slate-300 font-medium mb-3">
                    {edu.institution} {edu.score && <span className="text-emerald-400 font-bold ml-2">• {edu.score}</span>}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Professional Reference */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2 mb-6">
              <Award className="w-5 h-5 text-emerald-400" />
              <span>Professional Certification</span>
            </h3>

            {/* Certification Card */}
            <div className="glass-card p-6 rounded-2xl border border-emerald-500/30 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Certified Data Scientist Professional</h4>
                  <p className="text-xs font-mono text-emerald-400">Imarticus Learning, Thane</p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                <p className="font-semibold text-slate-200">Core Verified Competencies:</p>
                <div className="grid grid-cols-2 gap-2 font-mono">
                  {['Statistics Fundamentals', 'Data Science with Python', 'Machine Learning', 'Deep Learning', 'SQL Programming', 'Power BI & Tableau'].map((c) => (
                    <div key={c} className="flex items-center space-x-1.5 text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="text-[11px]">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reference Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Academic & Industry Reference</h4>
                  <p className="text-xs text-slate-400">Trainer, Learning & Development</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-xs space-y-1">
                <p className="font-bold text-slate-200">Mr. Hrishikesh Rele</p>
                <p className="text-slate-400">Imarticus Learning | +91 81086 65239</p>
                <a href="mailto:hrishikesh.rele@imarticus.com" className="text-cyan-400 font-mono hover:underline block pt-1">
                  hrishikesh.rele@imarticus.com
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
