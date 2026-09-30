import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center text-gray-900 dark:text-white">
      {children}
    </h2>
  );
};
