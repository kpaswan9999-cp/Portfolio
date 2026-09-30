import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, FileText, Menu, X, Sparkles, Send } from 'lucide-react';
import { sounds } from '../utils/audio';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTerminal,
  onOpenResume,
  soundEnabled,
  onToggleSound
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    sounds.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#about');
            }}
            className="group flex items-center space-x-3"
            onMouseEnter={() => sounds.playHover()}
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-400 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center font-bold text-cyan-400 text-lg group-hover:bg-cyan-950/40 transition-colors">
                KP
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white tracking-wide text-lg group-hover:text-cyan-300 transition-colors">
                Krishna Paswan
              </span>
              <span className="text-xs text-cyan-400/80 font-mono tracking-widest uppercase">
                AI & Tech Builder
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                onMouseEnter={() => sounds.playHover()}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Tools & Triggers */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Audio Toggle */}
            <button
              onClick={() => {
                onToggleSound();
              }}
              title={soundEnabled ? 'Disable UI Sound Effects' : 'Enable UI Sound Effects'}
              className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>

            {/* AI Assistant Button */}
            <button
              onClick={() => {
                sounds.playClick();
                onOpenTerminal();
              }}
              onMouseEnter={() => sounds.playHover()}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-900/60 to-purple-900/60 border border-indigo-500/40 text-indigo-200 hover:text-white hover:border-indigo-400 hover:shadow-md hover:shadow-indigo-500/20 text-xs font-mono transition-all"
            >
              <Terminal className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>AI Terminal</span>
              <Sparkles className="w-3 h-3 text-indigo-300" />
            </button>

            {/* Resume PDF Viewer Button */}
            <button
              onClick={() => {
                sounds.playClick();
                onOpenResume();
              }}
              onMouseEnter={() => sounds.playHover()}
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-xs shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>

            {/* Hire Me CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              onMouseEnter={() => sounds.playHover()}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 hover:border-emerald-400 text-xs font-semibold transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Krishna</span>
            </a>
          </div>

          {/* Mobile Menu & Sound Trigger */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onToggleSound}
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col space-y-2">
            <button
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-200 text-sm font-mono"
            >
              <Terminal className="w-4 h-4 text-indigo-400" />
              <span>Launch AI Terminal</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-lg"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
