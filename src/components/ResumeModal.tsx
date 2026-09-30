import React from 'react';
import { X, Download, FileText, ExternalLink, Award, MapPin, Phone, Mail } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, ACHIEVEMENTS, EDUCATION, SKILL_CATEGORIES } from '../data/portfolioData';
import { sounds } from '../utils/audio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-lg">
      <div className="w-full max-w-4xl rounded-2xl glass-card border border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col h-[85vh]">
        
        {/* Header Bar */}
        <div className="bg-[#0f172a] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Krishna Paswan — Official Resume</h3>
              <p className="text-xs font-mono text-cyan-400">BSc IT '25 | Certified Data Scientist | AI Builder</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.resumePdf}
              download="Krishna_Paswan_Resume.pdf"
              onClick={() => sounds.playSuccess()}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs shadow-lg hover:shadow-cyan-500/40 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </a>

            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-8 bg-[#090d16] text-slate-300">
          
          {/* Header Info */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              KRISHNA PASWAN
            </h1>
            <p className="text-cyan-400 font-medium text-sm mt-1">
              AI & Tech Intern | Python · FastAPI · Automation · AI-Assisted Development
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-3">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase border-b border-slate-800/80 pb-1">
              Profile Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase border-b border-slate-800/80 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <p className="font-bold text-white mb-1">{cat.title}</p>
                  <p className="text-slate-400 font-mono text-[11px]">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase border-b border-slate-800/80 pb-1">
              Featured Projects
            </h2>

            {PROJECTS.map((project) => (
              <div key={project.id} className="space-y-1.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-white text-sm">
                    {project.title} — <span className="text-cyan-400 font-normal">{project.subtitle}</span>
                  </h3>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-cyan-400 hover:underline flex items-center space-x-1"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <p className="text-xs font-mono text-slate-400">Tech: {project.tags.join(' · ')}</p>

                <ul className="space-y-1 pt-1">
                  {project.bulletPoints.map((point, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start space-x-2">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Awards */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase border-b border-slate-800/80 pb-1">
              Awards & Hackathon Recognition
            </h2>
            <ul className="space-y-2 text-xs">
              {ACHIEVEMENTS.map((ach) => (
                <li key={ach.id} className="flex items-start space-x-2">
                  <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">{ach.title}</span> — <span className="text-slate-400">{ach.organizer} ({ach.year})</span>
                    <p className="text-slate-400 text-[11px]">{ach.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase border-b border-slate-800/80 pb-1">
              Education & Certification
            </h2>
            <div className="space-y-2 text-xs">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-white">{edu.degree}</p>
                    <p className="text-slate-400">{edu.institution} {edu.score && `(${edu.score})`}</p>
                  </div>
                  <span className="font-mono text-slate-400">{edu.duration}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer download action */}
        <div className="bg-[#0f172a] px-6 py-4 border-t border-slate-800 flex items-center justify-between">
          <p className="text-xs font-mono text-slate-400">
            Official PDF Document ready for recruiters & interviewers
          </p>
          <a
            href={PERSONAL_INFO.resumePdf}
            download="Krishna_Paswan_Resume.pdf"
            onClick={() => sounds.playSuccess()}
            className="flex items-center space-x-2 px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Original PDF File</span>
          </a>
        </div>

      </div>
    </div>
  );
};
