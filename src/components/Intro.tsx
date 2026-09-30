import React from 'react';
import { ArrowRight, Download, Settings } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

interface IntroProps {
  setActiveSection: (section: string) => void;
  resumeUrl: string;
  onOpenResumeSettings: () => void;
}

export const Intro: React.FC<IntroProps> = ({
  setActiveSection,
  resumeUrl,
  onOpenResumeSettings
}) => {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (resumeUrl.startsWith('http')) {
      return;
    }

    e.preventDefault();
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Krishna_Paswan_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative z-10 mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] pt-28 sm:pt-36"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* Avatar frame filling circle edge-to-edge with shirt collar and shoulders */}
          <div className="h-32 w-32 sm:h-36 sm:w-36 rounded-full overflow-hidden border-[0.35rem] border-white shadow-xl dark:border-gray-800">
            <img
              src="/krishna-paswan.jpg"
              alt="Krishna Paswan"
              className="h-full w-full object-cover object-[50%_25%]"
            />
          </div>
          <span className="absolute bottom-0 right-0 text-3xl select-none animate-pulse">
            👋
          </span>
        </div>
      </div>

      <h1 className="mb-10 mt-6 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-gray-900 dark:text-white">
        <span className="font-bold">Hi, I'm Krishna.</span> I'm an{' '}
        <span className="font-bold">AI & Tech builder</span> with hands-on
        experience in <span className="font-bold">Generative AI</span> and{' '}
        <span className="font-bold">Data Science</span>. I enjoy building{' '}
        <span className="italic">intelligent agents and full-stack apps</span>. My
        focus is <span className="underline font-semibold">FastAPI, Gemini API & Next.js</span>.
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            setActiveSection('Contact');
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:hover:bg-white/20 text-sm sm:text-base"
        >
          Contact me{' '}
          <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition" />
        </a>

        <div className="relative flex items-center">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Krishna_Paswan_Resume.pdf"
            onClick={handleDownload}
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/80 text-sm sm:text-base"
          >
            My Resume{' '}
            <Download className="w-4 h-4 opacity-60 group-hover:translate-y-0.5 transition" />
          </a>

          <button
            onClick={onOpenResumeSettings}
            title="Configure / Update Resume Link"
            className="ml-1 p-2 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Settings className="w-3.5 h-3.5 opacity-75 hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        <a
          href="https://www.linkedin.com/in/krishna-paswan-9999"
          target="_blank"
          rel="noreferrer"
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          title="LinkedIn Profile"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>

        <a
          href="https://github.com/kpaswan9999-cp"
          target="_blank"
          rel="noreferrer"
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          title="GitHub Profile"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
