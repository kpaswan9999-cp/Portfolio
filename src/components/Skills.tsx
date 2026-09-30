import React from 'react';
import { SectionHeading } from './SectionHeading';

export const Skills: React.FC = () => {
  const skillsData = [
    'Python',
    'FastAPI',
    'Next.js',
    'Gemini API',
    'LangChain',
    'FAISS Vector Search',
    'Prompt Engineering',
    'SQL',
    'MySQL',
    'Power BI',
    'Tableau',
    'Open-Source AI',
    'LoRA Fine-Tuning',
    'CivitAI',
    'Model Context Protocol (MCP)',
    'Social Media APIs',
    'Git & GitHub',
    'Vercel Deployment',
    'Advanced Excel',
    'Exploratory Data Analysis (EDA)',
    'Cybersecurity Fundamentals',
    'Ethical Hacking Basics',
    'Data Cleaning & Validation'
  ];

  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2.5 text-base sm:text-lg text-gray-800 dark:text-white/80">
        {skillsData.map((skill) => (
          <li
            key={skill}
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 hover:scale-105 transition shadow-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};
