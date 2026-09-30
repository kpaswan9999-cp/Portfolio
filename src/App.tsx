import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { SectionDivider } from './components/SectionDivider';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeSwitch } from './components/ThemeSwitch';
import { ResumeSettingsModal } from './components/ResumeSettingsModal';
import { RESUME_CONFIG } from './data/portfolioData';

export function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const [resumeSettingsOpen, setResumeSettingsOpen] = useState(false);
  const [resumeUrl, setResumeUrl] = useState(() => {
    return localStorage.getItem('custom_resume_url') || RESUME_CONFIG.cloudResumeUrl || RESUME_CONFIG.localPdfPath;
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            const name = section === 'achievements' ? 'Achievement' : section.charAt(0).toUpperCase() + section.slice(1);
            setActiveSection(name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-gray-950 relative min-h-screen dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 transition-colors duration-300">
      {/* Background Cloud-Type Light Purple Ambient Glows */}
      {/* Top clouds */}
      <div className="bg-[#f0e6ff] absolute top-[-6rem] -z-10 right-[5rem] h-[34rem] w-[34rem] rounded-full blur-[10rem] sm:w-[48rem] opacity-75 pointer-events-none dark:bg-[#7e5c99]/30"></div>
      <div className="bg-[#e4ddfc] absolute top-[-2rem] -z-10 left-[-15rem] h-[36rem] w-[44rem] rounded-full blur-[10rem] sm:w-[54rem] opacity-80 pointer-events-none dark:bg-[#5b548a]/30"></div>

      {/* Floating Side Border Purple Clouds (Persists as you scroll) */}
      <div className="fixed top-[20%] -left-[16rem] sm:-left-[12rem] w-[30rem] h-[40rem] rounded-full bg-gradient-to-r from-purple-300/40 via-violet-200/35 to-transparent blur-[8.5rem] pointer-events-none -z-10 dark:from-purple-900/25 dark:via-violet-950/20"></div>
      <div className="fixed top-[45%] -right-[16rem] sm:-right-[12rem] w-[32rem] h-[42rem] rounded-full bg-gradient-to-l from-violet-300/35 via-purple-200/30 to-transparent blur-[9rem] pointer-events-none -z-10 dark:from-violet-900/25 dark:via-purple-950/20"></div>
      <div className="fixed bottom-[5%] -left-[14rem] sm:-left-[10rem] w-[28rem] h-[36rem] rounded-full bg-gradient-to-tr from-purple-200/40 via-indigo-100/35 to-transparent blur-[8rem] pointer-events-none -z-10 dark:from-indigo-950/25"></div>

      {/* Home Section Exclusive Graphic Background */}
      <div className="absolute top-0 left-0 right-0 h-[44rem] sm:h-[50rem] overflow-hidden pointer-events-none z-0">
        <img
          src="/home-bg.jpg"
          alt="Home Background"
          className="w-full h-full object-cover object-top opacity-95 dark:opacity-40"
        />
        {/* Bottom smooth fade to white so it blends seamlessly into About section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white dark:via-gray-900/10 dark:to-gray-900"></div>
      </div>

      {/* Floating Pill Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col items-center px-4">
        <Intro
          setActiveSection={setActiveSection}
          resumeUrl={resumeUrl}
          onOpenResumeSettings={() => setResumeSettingsOpen(true)}
        />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Theme Switch */}
      <ThemeSwitch />

      {/* Resume Link & Update Modal */}
      <ResumeSettingsModal
        isOpen={resumeSettingsOpen}
        onClose={() => setResumeSettingsOpen(false)}
        onUpdateResumeUrl={(newUrl) => setResumeUrl(newUrl)}
        currentResumeUrl={resumeUrl}
      />
    </div>
  );
}

export default App;
