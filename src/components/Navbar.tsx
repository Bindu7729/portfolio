import { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-anton text-2xl tracking-wide text-ink">BINDU</span>
          <span className="tag -rotate-3 bg-orange text-paper">Dev</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-medium text-ink/80 transition-colors hover:text-orange">
              {link.name}
            </a>
          ))}
          <a href="#resume" className="btn bg-orange py-2 text-base text-paper">
            Resume <FileText size={18} />
          </a>
        </div>

        <button className="-mr-2 p-2 text-ink md:hidden" aria-label="Toggle menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-1 border-t-2 border-ink/10 bg-paper px-4 pb-5 pt-2 md:hidden">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="py-2 font-anton text-2xl uppercase text-ink">
              {link.name}
            </a>
          ))}
          <a href="#resume" onClick={() => setIsOpen(false)} className="btn mt-2 self-start bg-orange text-paper">
            Resume <FileText size={18} />
          </a>
        </div>
      )}
    </nav>
  );
};
