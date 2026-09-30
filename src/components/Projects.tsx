import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  mockup: {
    badge: string;
    headline: string;
    subline: string;
    accentColor: string;
  };
}

export const Projects: React.FC = () => {
  const projectsData: ProjectItem[] = [
    {
      title: 'HireResumeAI',
      subtitle: 'AI-Powered Resume Optimizer & ATS Analyzer',
      description:
        'A production AI web app that helps job seekers optimize resumes for specific job descriptions using Gemini API via LangChain, FAISS semantic vector search, and a Next.js frontend.',
      tags: ['FastAPI', 'Gemini API', 'LangChain', 'FAISS', 'Next.js', 'Python'],
      liveUrl: 'https://hire-resume-ai.vercel.app',
      githubUrl: 'https://github.com/kpaswan9999-cp',
      mockup: {
        badge: 'AI ATS Engine',
        headline: 'Optimize Resumes & Beat ATS Filters',
        subline: 'Real-time semantic gap analysis & interview prep',
        accentColor: 'from-blue-600 to-indigo-600'
      }
    },
    {
      title: 'Raksha AI',
      subtitle: "Women's Emergency Command Center (AI for Bharat Finalist)",
      description:
        'An AI-driven emergency command application built for AI for Bharat Hackathon 2026. Top 15 Finalist out of 16,000+ teams nationwide; invited to the onsite Grand Finale in Bangalore.',
      tags: ['Next.js', 'FastAPI', 'Python', 'Real-Time Alerts', 'Location Tracking'],
      liveUrl: 'https://raksha-ai-command-center.vercel.app',
      githubUrl: 'https://github.com/kpaswan9999-cp',
      mockup: {
        badge: 'Top 15 National Finalist',
        headline: 'Intelligent Emergency Triage & SOS',
        subline: 'Real-time telemetry and geo-location tracking',
        accentColor: 'from-rose-600 to-amber-600'
      }
    },
    {
      title: 'TrashTrail',
      subtitle: 'Waste Accountability & Tracking System (Hackathon Project)',
      description:
        'A full-stack waste management tracking system that enforces transparency, geo-tagged reporting, and civic accountability in urban waste collection and disposal.',
      tags: ['Next.js', 'React', 'Tailwind', 'Geo-Tracking', 'Vercel'],
      liveUrl: 'https://trash-trail-waste.vercel.app/',
      githubUrl: 'https://github.com/kpaswan9999-cp/Hackathon-Project---TrashTrail-Waste-Accountability-Tracking-System',
      mockup: {
        badge: 'Hackathon Project',
        headline: 'TrashTrail Accountability System',
        subline: 'Geo-tagged tracking & citizen reporting workflow',
        accentColor: 'from-emerald-600 to-green-700'
      }
    },
    {
      title: '5G Network Predictor',
      subtitle: 'Predictive Machine Learning Engine for 5G Telemetry',
      description:
        'A predictive machine learning web application analyzing cellular network signal parameters, latency, and throughput to forecast 5G performance and traffic behavior.',
      tags: ['Python', 'Machine Learning', 'Next.js', 'Vercel', 'Predictive Modeling'],
      liveUrl: 'https://cp-project-chi.vercel.app/',
      githubUrl: 'https://github.com/kpaswan9999-cp/CP_Project_5G_Network_Predictor',
      mockup: {
        badge: 'ML Telemetry',
        headline: '5G Performance & Traffic Forecasts',
        subline: 'Network latency, bandwidth & throughput prediction',
        accentColor: 'from-cyan-600 to-blue-700'
      }
    },
    {
      title: 'Climate Temperature Predictor',
      subtitle: 'Deployed Linear Regression Model for Climate Analytics',
      description:
        'A deployed machine learning model utilizing linear regression algorithms to predict ambient temperature trends and climate shifts based on historical meteorological features.',
      tags: ['Python', 'Scikit-Learn', 'Linear Regression', 'HTML/JS', 'Vercel'],
      liveUrl: 'https://linear-regression-model-climate-dep.vercel.app/index.html',
      githubUrl: 'https://github.com/kpaswan9999-cp/Linear_Regression_Model_Climate_Deployed_on-_Internet',
      mockup: {
        badge: 'Linear Regression',
        headline: 'Climate Trend & Temperature Predictions',
        subline: 'Statistical regression model deployed on Vercel',
        accentColor: 'from-teal-600 to-cyan-700'
      }
    },
    {
      title: 'Flight Fare Analytics',
      subtitle: 'Indian Domestic Airline Pricing Trends Engine',
      description:
        'Validated and analyzed domestic flight booking data to uncover pricing dynamics, seasonal booking trends, and travel demand behavior using SQL, Python, and Power BI.',
      tags: ['SQL', 'Python', 'Power BI', 'EDA', 'Data Analytics'],
      githubUrl: 'https://github.com/kpaswan9999-cp',
      mockup: {
        badge: 'Power BI Dashboard',
        headline: 'Fare Dynamics & Demand Trends',
        subline: 'Multi-carrier price sensitivity and volume insights',
        accentColor: 'from-violet-600 to-purple-700'
      }
    },
    {
      title: 'Supermarket Sales BI',
      subtitle: 'Multi-Dimensional Retail Transaction Analytics',
      description:
        'Interactive Excel BI dashboard analyzing 1,000+ retail transactions to uncover revenue trends using Pivot Tables, dynamic Slicers, and GETPIVOTDATA formulas.',
      tags: ['Advanced Excel', 'Pivot Tables', 'GETPIVOTDATA', 'Dynamic Slicers', 'KPI Cards'],
      githubUrl: 'https://github.com/kpaswan9999-cp',
      mockup: {
        badge: 'Executive BI Dashboard',
        headline: '1,000+ Retail Transactions Analyzed',
        subline: 'Customer segmentation, revenue & branch KPIs',
        accentColor: 'from-amber-600 to-orange-600'
      }
    }
  ];

  return (
    <section id="projects" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Projects</SectionHeading>

      <div className="space-y-6 sm:space-y-8">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={project.title}
              className="group bg-gray-100 max-w-[44rem] border border-black/5 rounded-2xl overflow-hidden relative sm:h-[22rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/15"
            >
              <div
                className={`pt-5 pb-7 px-6 sm:px-10 sm:pt-8 sm:max-w-[55%] flex flex-col h-full ${
                  isEven ? 'sm:ml-auto' : ''
                }`}
              >
                <div className="flex items-center space-x-2">
                  <h3 className="text-2xl sm:text-[1.7rem] font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-1 mb-2">
                  {project.subtitle}
                </p>

                <p className="mt-1 leading-relaxed text-gray-700 dark:text-white/70 text-sm sm:text-[0.95rem]">
                  {project.description}
                </p>

                <div className="flex items-center gap-3 mt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:scale-105 transition"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-gray-800 borderBlack dark:bg-white/10 dark:text-white hover:scale-105 transition"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>
                </div>

                <ul className="flex flex-wrap mt-4 sm:mt-auto gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="bg-black/[0.7] px-3 py-1 text-[0.68rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Angled Mockup Card matching Sanidhyy Screenshot 3 */}
              <div
                className={`absolute hidden sm:block top-8 ${
                  isEven ? '-left-32 group-hover:rotate-2 group-hover:scale-[1.03]' : '-right-32 group-hover:-rotate-2 group-hover:scale-[1.03]'
                } w-[24rem] h-[19rem] rounded-xl shadow-2xl bg-white dark:bg-gray-800 border border-black/10 dark:border-white/10 p-5 transition-transform duration-300 pointer-events-none select-none`}
              >
                <div className="flex items-center space-x-2 border-b border-gray-100 dark:border-gray-700 pb-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-[10px] font-mono text-gray-400 ml-2">
                    {project.title.toLowerCase().replace(/\s+/g, '-')}.vercel.app
                  </span>
                </div>

                <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 mb-2">
                  {project.mockup.badge}
                </span>

                <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">
                  {project.mockup.headline}
                </h4>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-normal">
                  {project.mockup.subline}
                </p>

                <div
                  className={`mt-5 w-full h-20 rounded-lg bg-gradient-to-r ${project.mockup.accentColor} opacity-85 flex items-center justify-center text-white text-xs font-semibold shadow-inner`}
                >
                  🚀 Production Ready System
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
