import { useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
      <div className="bg-[#121215]/90 backdrop-blur-md border border-red-900/30 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_0_20px_rgba(229,9,20,0.15)]">
        <a href="#home" className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
          <span className="text-red-600 font-extrabold">p</span>bindu<span className="text-red-600">.</span>
        </a>

        <div className="hidden md:flex items-center gap-6 bg-[#0A0A0B]/80 px-5 py-1.5 rounded-full border border-red-900/20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-red-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 text-gray-300">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors"><GithubIcon size={18} /></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors"><LinkedinIcon size={18} /></a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-red-500 transition-colors"><Mail size={18} /></a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 bg-[#121215] border border-red-900/40 rounded-2xl p-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-red-500 text-sm font-medium py-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};