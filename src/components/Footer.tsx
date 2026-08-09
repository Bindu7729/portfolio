import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-red-900/20 text-center text-xs text-gray-500">
      <p>Designed & Built by <span className="text-white font-medium">{personalInfo.name}</span></p>
      <p className="mt-1">© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
};