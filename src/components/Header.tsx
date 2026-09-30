import React from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const links = [
    { name: 'Home', hash: '#home' },
    { name: 'About', hash: '#about' },
    { name: 'Projects', hash: '#projects' },
    { name: 'Skills', hash: '#skills' },
    { name: 'Achievement', hash: '#achievements' },
    { name: 'Contact', hash: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string, name: string) => {
    e.preventDefault();
    setActiveSection(name);
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="z-[999] relative">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 transition-all">
        <nav className="flex items-center justify-center h-full">
          <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:gap-x-1 sm:text-[0.9rem]">
            {links.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <li key={link.hash} className="relative flex items-center justify-center">
                  <a
                    href={link.hash}
                    onClick={(e) => handleLinkClick(e, link.hash, link.name)}
                    className={`flex items-center justify-center px-3 py-1.5 transition rounded-full ${
                      isActive
                        ? 'text-gray-950 bg-gray-100 dark:text-gray-200 dark:bg-gray-800 font-semibold'
                        : 'hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
