import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 text-xs">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Krishna Paswan. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with React &
        Vite, Tailwind CSS, TypeScript & Lucide Icons.
      </p>
    </footer>
  );
};
