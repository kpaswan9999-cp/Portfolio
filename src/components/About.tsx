import React from 'react';
import { SectionHeading } from './SectionHeading';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3 text-gray-700 dark:text-gray-300 font-normal">
        After graduating with a <span className="font-semibold text-gray-900 dark:text-white">BSc in Information Technology</span> (CGPA: 8.27), I decided to pursue my passion for programming and AI. I completed a certified program in{' '}
        <span className="font-semibold text-gray-900 dark:text-white">Data Science & Analytics</span> and learned full-stack AI development.{' '}
        <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I{' '}
        <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My core stack is{' '}
        <span className="font-semibold text-gray-900 dark:text-white">
          Python, FastAPI, Gemini API, and Next.js
        </span>
        . I am also familiar with LangChain, FAISS, and SQL. I am always looking to learn new technologies. I am currently looking for an{' '}
        <span className="font-semibold text-gray-900 dark:text-white">
          internship or full-time position
        </span>{' '}
        as an AI developer.
      </p>

      <p className="text-gray-700 dark:text-gray-300 font-normal">
        <span className="italic">When I'm not coding</span>, I enjoy exploring open-source AI models, watching tech talks, and learning new things. I am currently learning about{' '}
        <span className="font-semibold text-gray-900 dark:text-white">
          LoRA fine-tuning and Model Context Protocol (MCP)
        </span>
        . I'm also learning about cybersecurity and ethical hacking.
      </p>
    </section>
  );
};
