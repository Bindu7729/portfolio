import { motion } from 'framer-motion';

export const Footer = () => (
  <footer className="paper-dots border-t-2 border-ink px-4 py-10 sm:px-6">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
      <div className="flex items-center gap-4">
        <img src="/me/coffee.webp" alt="" loading="lazy" className="w-16 -rotate-6" />
        <div>
          <p className="font-anton text-2xl uppercase">Penumala Bindu</p>
          <p className="font-hand text-xl text-muted">designed & built with a lot of coffee</p>
        </div>
      </div>
      <p className="font-mono text-xs text-muted">© {new Date().getFullYear()} · all rights reserved</p>
    </div>
  </footer>
);

/** Rotating "hire me" coin pinned to the corner. */
export const HireBadge = () => (
  <motion.a
    href="#contact"
    aria-label="Contact Bindu"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1.6, type: 'spring', stiffness: 200, damping: 12 }}
    whileHover={{ scale: 1.08 }}
    className="fixed bottom-4 right-4 z-40 grid h-16 w-16 place-items-center rounded-full border-2 border-ink bg-orange text-paper shadow-[3px_3px_0_var(--color-ink)] sm:h-24 sm:w-24"
  >
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow">
      <defs><path id="c" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" /></defs>
      <text fill="currentColor" fontSize="11.5" fontFamily="Barlow Condensed" fontWeight="700" letterSpacing="2.4">
        <textPath href="#c">HIRE ME ★ OPEN TO WORK ★</textPath>
      </text>
    </svg>
    <span className="grid h-7 w-7 place-items-center rounded-full bg-ink font-anton text-base sm:h-11 sm:w-11">B</span>
  </motion.a>
);
