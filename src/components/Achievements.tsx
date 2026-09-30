import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Award, GraduationCap, ShieldCheck, ExternalLink } from 'lucide-react';
import { CertificateModal, type CertificateModalData } from './CertificateModal';

interface TimelineItem {
  id: string;
  title: string;
  location: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  category: 'Hackathon' | 'Certification' | 'Academic';
  certificateUrl?: string;
  certificateType?: 'image' | 'pdf';
  certificateId?: string;
  rank?: string;
}

export const Achievements: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateModalData | null>(null);

  const timelineData: TimelineItem[] = [
    {
      id: 'ai-for-bharat',
      title: 'Top 15 Finalist — AI for Bharat Hackathon',
      location: 'PanIIT Alumni India & Govt. of Karnataka (Bangalore Finale)',
      description:
        'Selected in the Top 15 among 16,000+ teams nationwide with Raksha AI. Collaborated with a cross-functional team on real-time alerts and safety telemetry.',
      date: '2026',
      icon: <Award className="w-5 h-5 text-amber-500" />,
      category: 'Hackathon',
      rank: 'Top 15 out of 16,000+ Teams',
      certificateUrl: '/certificates/ai-for-bharat-certificate.png',
      certificateType: 'image'
    },
    {
      id: 'nebulon',
      title: 'Exceptional Performance — Nebulon Hackathon',
      location: 'TransStadia Institute & University of Mumbai',
      description:
        'Awarded in recognition of exceptional performance and innovative solution delivery demonstrated during the Nebulon Hackathon 2026.',
      date: '2026',
      icon: <Award className="w-5 h-5 text-purple-500" />,
      category: 'Hackathon',
      rank: 'Top 5 Finalist & Innovation Award',
      certificateUrl: '/certificates/nebulon-hackathon-certificate.jpg',
      certificateType: 'image'
    },
    {
      id: 'far-away',
      title: 'Round 2 Contestant — FAR AWAY International Hackathon',
      location: 'ZuUp International & Chandigarh University',
      description:
        'Selected as a Round 2 contestant representing team "The Outliers" in an international hackathon competing against global developer teams.',
      date: '2026',
      icon: <Award className="w-5 h-5 text-indigo-500" />,
      category: 'Hackathon',
      rank: 'Round 2 Global Contestant',
      certificateUrl: '/certificates/far-away-hackathon-certificate.pdf',
      certificateType: 'pdf',
      certificateId: 'FA26-U530EK11-02'
    },
    {
      id: 'imarticus',
      title: 'Post Graduate Program in Data Science & Analytics',
      location: 'Imarticus Learning (NSDC & Skill India)',
      description:
        'Certified Data Scientist Professional covering advanced statistics, Machine Learning, Deep Learning, SQL, EDA, Power BI, and Tableau dashboards.',
      date: '2025 – 2026',
      icon: <GraduationCap className="w-5 h-5 text-emerald-500" />,
      category: 'Certification',
      rank: 'Certified Data Scientist (Advanced ML Track)',
      certificateUrl: '/certificates/imarticus-data-science-certificate.png',
      certificateType: 'image',
      certificateId: 'EK4ECEE25650E5'
    },
    {
      id: 'bsc-it',
      title: 'Bachelor of Information Technology (BSc IT)',
      location: 'Rajiv Gandhi College, University of Mumbai',
      description:
        'Graduated with Distinction (CGPA: 8.27). Built solid foundations in software engineering, algorithms, database systems, and application architecture.',
      date: '2022 – 2025',
      icon: <GraduationCap className="w-5 h-5 text-blue-500" />,
      category: 'Academic',
      rank: 'CGPA: 8.27 (Distinction)'
    }
  ];

  const handleOpenCertificate = (item: TimelineItem) => {
    if (!item.certificateUrl) return;
    setSelectedCertificate({
      title: item.title,
      issuer: item.location,
      date: item.date,
      certificateUrl: item.certificateUrl,
      certificateType: item.certificateType,
      certificateId: item.certificateId,
      rank: item.rank,
      description: item.description
    });
  };

  return (
    <section id="achievements" className="scroll-mt-28 mb-28 sm:mb-40 max-w-[53rem]">
      {/* Invisible anchor for backward compatibility */}
      <span id="experience" className="block relative -top-28 invisible" />

      <SectionHeading>Hackathon & Achievements</SectionHeading>

      <div className="relative mt-8 sm:mt-12">
        {/* Central Vertical Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const hasCert = Boolean(item.certificateUrl);

            return (
              <div
                key={item.id}
                className="relative flex flex-col md:flex-row items-center justify-between"
              >
                {/* Left Side Content */}
                <div
                  className={`w-full md:w-[44%] ${
                    isLeft ? 'order-1 md:text-right' : 'order-2 md:order-1 hidden md:block'
                  }`}
                >
                  {isLeft ? (
                    <div
                      onClick={() => {
                        if (hasCert) handleOpenCertificate(item);
                      }}
                      className={`group bg-gray-100 dark:bg-white/10 p-6 sm:p-7 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm text-left transition-all duration-300 ${
                        hasCert
                          ? 'hover:shadow-lg hover:scale-[1.01] hover:border-purple-500/30 dark:hover:border-purple-400/30 cursor-pointer'
                          : ''
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span
                          className={`inline-flex items-center gap-1 text-[0.7rem] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                            item.category === 'Hackathon'
                              ? 'bg-amber-500/10 text-amber-600 dark:bg-amber-400/20 dark:text-amber-400'
                              : item.category === 'Certification'
                              ? 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/20 dark:text-emerald-400'
                              : 'bg-blue-500/10 text-blue-600 dark:bg-blue-400/20 dark:text-blue-400'
                          }`}
                        >
                          {item.category}
                        </span>
                        <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 md:hidden">
                          {item.date}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
                        {item.location}
                      </p>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-2.5 leading-relaxed">
                        {item.description}
                      </p>

                      {hasCert && (
                        <div className="mt-4 pt-3 border-t border-gray-200/60 dark:border-white/10 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenCertificate(item);
                            }}
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition group-hover:underline"
                          >
                            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>View Certificate</span>
                            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition" />
                          </button>
                          {item.certificateId && (
                            <span className="text-[0.68rem] font-mono text-gray-400 dark:text-gray-500">
                              ID: {item.certificateId}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-right pr-6 hidden md:block">
                      <span className="text-base font-semibold text-gray-500 dark:text-gray-400">
                        {item.date}
                      </span>
                    </div>
                  )}
                </div>

                {/* Central Milestone Icon */}
                <div className="z-10 order-2 flex items-center justify-center my-4 md:my-0">
                  <div
                    onClick={() => {
                      if (hasCert) handleOpenCertificate(item);
                    }}
                    className={`w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-md transition-transform duration-300 ${
                      hasCert ? 'hover:scale-110 cursor-pointer' : ''
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Right Side Content */}
                <div
                  className={`w-full md:w-[44%] ${
                    !isLeft ? 'order-3 md:text-left' : 'order-3 hidden md:block'
                  }`}
                >
                  {!isLeft ? (
                    <div
                      onClick={() => {
                        if (hasCert) handleOpenCertificate(item);
                      }}
                      className={`group bg-gray-100 dark:bg-white/10 p-6 sm:p-7 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm text-left transition-all duration-300 ${
                        hasCert
                          ? 'hover:shadow-lg hover:scale-[1.01] hover:border-purple-500/30 dark:hover:border-purple-400/30 cursor-pointer'
                          : ''
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span
                          className={`inline-flex items-center gap-1 text-[0.7rem] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                            item.category === 'Hackathon'
                              ? 'bg-amber-500/10 text-amber-600 dark:bg-amber-400/20 dark:text-amber-400'
                              : item.category === 'Certification'
                              ? 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/20 dark:text-emerald-400'
                              : 'bg-blue-500/10 text-blue-600 dark:bg-blue-400/20 dark:text-blue-400'
                          }`}
                        >
                          {item.category}
                        </span>
                        <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 md:hidden">
                          {item.date}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
                        {item.location}
                      </p>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-2.5 leading-relaxed">
                        {item.description}
                      </p>

                      {hasCert && (
                        <div className="mt-4 pt-3 border-t border-gray-200/60 dark:border-white/10 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenCertificate(item);
                            }}
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition group-hover:underline"
                          >
                            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>View Certificate</span>
                            <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition" />
                          </button>
                          {item.certificateId && (
                            <span className="text-[0.68rem] font-mono text-gray-400 dark:text-gray-500">
                              ID: {item.certificateId}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-left pl-6 hidden md:block">
                      <span className="text-base font-semibold text-gray-500 dark:text-gray-400">
                        {item.date}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certificate Viewer Lightbox Modal */}
      <CertificateModal
        isOpen={Boolean(selectedCertificate)}
        onClose={() => setSelectedCertificate(null)}
        certificate={selectedCertificate}
      />
    </section>
  );
};

// Export alias as Experience for backward compatibility
export const Experience = Achievements;
