import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, ArrowRight, Download, Award, ShieldCheck, Sparkles, MapPin, Code2, Cpu, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { sounds } from '../utils/audio';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResume }) => {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Main Title & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                Hi, I'm <span className="text-gradient-cyan">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center flex-wrap gap-2 pt-1">
                <span>AI Builder & Certified Data Scientist</span>
                <span className="text-cyan-400 font-mono text-sm px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60">
                  BSc IT '25
                </span>
              </p>
            </div>

            {/* Description Bio */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Key Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Python', 'FastAPI', 'Gemini API', 'LangChain', 'FAISS', 'Next.js', 'SQL', 'LoRA & CivitAI'].map((tech) => (
                <span
                  key={tech}
                  onMouseEnter={() => sounds.playHover()}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/80 border border-slate-700/80 text-cyan-300 hover:border-cyan-500/50 hover:bg-slate-800 transition-colors"
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                onClick={() => sounds.playClick()}
                onMouseEnter={() => sounds.playHover()}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
              >
                <span>View Shipped Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  sounds.playClick();
                  onOpenTerminal();
                }}
                onMouseEnter={() => sounds.playHover()}
                className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-900/90 border border-indigo-500/40 text-indigo-200 hover:text-white hover:border-indigo-400 hover:bg-indigo-950/40 font-mono text-sm shadow-md transition-all group"
              >
                <Terminal className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                <span>Ask AI Assistant</span>
                <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
              </button>

              <button
                onClick={() => {
                  sounds.playClick();
                  onOpenResume();
                }}
                onMouseEnter={() => sounds.playHover()}
                className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 text-sm font-medium transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume (PDF)</span>
              </button>
            </div>

            {/* Social & Contact links */}
            <div className="flex items-center space-x-4 pt-2 text-slate-400 text-sm">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sounds.playHover()}
                className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sounds.playHover()}
                className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <span className="flex items-center space-x-1.5 text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Mumbai (Remote Ready)</span>
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Profile Headshot & Floating Stats Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Avatar Frame */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-400 blur-xl opacity-40 animate-pulse-slow"></div>

              {/* Photo Frame Container */}
              <div className="relative w-full h-full rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-400 p-1 shadow-2xl shadow-cyan-500/20">
                <div className="w-full h-full bg-[#090d16] rounded-[22px] overflow-hidden relative group">
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay scanline effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-60"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-cyan-400">Top 15 Finalist</p>
                      <p className="text-sm font-bold text-white">AI for Bharat 2026</p>
                    </div>
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Generative AI */}
              <div className="absolute -top-4 -left-6 px-3.5 py-2 rounded-xl glass-card border-cyan-500/40 text-cyan-300 flex items-center space-x-2 shadow-xl animate-float">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-semibold">Gemini + FAISS</span>
              </div>

              {/* Floating Badge 2: Data Science */}
              <div className="absolute -bottom-6 -right-6 px-3.5 py-2 rounded-xl glass-card border-emerald-500/40 text-emerald-300 flex items-center space-x-2 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                <Database className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-semibold">Certified Data Scientist</span>
              </div>

              {/* Floating Badge 3: Hackathons */}
              <div className="absolute top-1/2 -right-10 px-3 py-1.5 rounded-xl glass-card border-indigo-500/40 text-indigo-300 hidden sm:flex items-center space-x-2 shadow-xl animate-float" style={{ animationDelay: '4s' }}>
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-mono font-semibold">16k+ Competitors</span>
              </div>

            </div>

          </div>

        </div>

        {/* Hero Bottom Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80">
          <div className="p-4 rounded-2xl glass-card border-slate-800 flex items-center space-x-3">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-white">Top 15</p>
              <p className="text-xs text-slate-400">National Hackathon Finalist</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-card border-slate-800 flex items-center space-x-3">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-white">16,000+</p>
              <p className="text-xs text-slate-400">Teams Outperformed</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-card border-slate-800 flex items-center space-x-3">
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-white">4+ Live</p>
              <p className="text-xs text-slate-400">AI & Analytics Projects</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-card border-slate-800 flex items-center space-x-3">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-white">8.27 CGPA</p>
              <p className="text-xs text-slate-400">Distinction BSc IT</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
