import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const ease = [0.6, 0, 0.3, 1] as const;
const BOOT = 'boot bindu.portfolio';
const STEPS = ['load projects', 'wire the stack', 'ship it'];

/* Mini terminal: types the boot line, then ticks off each step, then calls onDone. */
const BootTerminal = ({ still, onDone }: { still: boolean; onDone: () => void }) => {
  const [typed, setTyped] = useState(still ? BOOT : '');
  const [done, setDone] = useState(still ? STEPS.length : 0);

  useEffect(() => {
    if (still) { onDone(); return; }
    let t: number, n = 0;
    const tick = (k: number) => {
      setDone(k);
      t = window.setTimeout(k < STEPS.length ? () => tick(k + 1) : onDone, k < STEPS.length ? 260 : 500);
    };
    const type = () => {
      setTyped(BOOT.slice(0, ++n));
      t = window.setTimeout(n < BOOT.length ? type : () => tick(1), n < BOOT.length ? 28 + Math.random() * 40 : 300);
    };
    t = window.setTimeout(type, 700);
    return () => window.clearTimeout(t);
  }, [still, onDone]);

  return (
    <div className="w-[min(100%,22rem)] overflow-hidden rounded-2xl border-2 border-ink bg-ink font-mono text-[13px] leading-relaxed text-paper shadow-[5px_6px_0_var(--color-orange)]">
      <div className="flex items-center gap-1.5 border-b border-paper/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-orange" />
        <span className="h-2.5 w-2.5 rounded-full bg-mustard" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal" />
        <span className="ml-2 text-[11px] text-paper/40">bindu · ~/portfolio</span>
      </div>
      <div className="px-4 py-3">
        <p><span className="text-orange">&gt;</span> {typed}<span className="animate-blink">▍</span></p>
        <ul className="mt-2 space-y-1">
          {STEPS.map((s, i) => (
            <li key={s} className={`flex justify-between transition-opacity duration-300 ${i < done ? 'opacity-100' : 'opacity-25'}`}>
              <span>{s}</span>
              <span className={i < done ? 'text-mustard' : 'text-transparent'}>✓</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Overlay = ({ onEnter, onReady }: { onEnter: () => void; onReady: () => void }) => {
  const still = !!useReducedMotion();
  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label="Portfolio introduction. Click or press Enter to continue."
      className="paper-dots fixed inset-0 z-[9999] cursor-pointer overflow-hidden text-ink"
      exit={{ y: still ? 0 : '-100%', opacity: still ? 0 : 1 }}
      transition={{ duration: still ? 0.15 : 0.75, ease }}
      onClick={onEnter}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onEnter()}
    >
      {/* the orange edge that "slashes" across as the sheet lifts */}
      <div className="absolute inset-x-0 bottom-0 h-3 bg-orange" />

      <div className="relative flex h-full flex-col justify-between px-6 py-6 sm:px-12 sm:py-10">
        <header className="flex items-start justify-between gap-3 font-mono text-[11px] tracking-[0.2em] text-muted">
          <span>BINDU / PORTFOLIO</span>
          <motion.span
            className="tag mr-1 shrink-0 whitespace-nowrap bg-mustard text-ink"
            initial={{ opacity: 0, rotate: 0, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 4, scale: 1 }}
            transition={{ delay: still ? 0 : 1.1, type: 'spring', stiffness: 380, damping: 16 }}
          >
            Edition 01 — {new Date().getFullYear()}
          </motion.span>
        </header>

        <main className="mx-auto w-full max-w-6xl">
          <motion.p
            className="mb-2 font-hand text-[clamp(1.5rem,3vw,2.25rem)] text-teal"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: still ? 0 : 0.9, delay: still ? 0 : 0.85, ease: 'easeOut' }}
          >
            hi, i build full-stack apps
          </motion.p>
          <h1 className="flex font-anton text-[clamp(5rem,24vw,19rem)] uppercase leading-[0.85]" aria-label="Bindu">
            {'BINDU'.split('').map((ch, i) => (
              <span key={i} className="inline-block overflow-hidden" aria-hidden>
                <motion.span
                  className={`inline-block ${i >= 3 ? 'text-orange' : ''}`}
                  initial={{ y: still ? 0 : '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: still ? 0 : 0.1 + 0.07 * i, ease }}
                >
                  {ch}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div
            className="mt-3 h-[6px] origin-left rounded-full bg-ink"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: still ? 0 : 0.8, delay: still ? 0 : 0.6, ease }}
          />
        </main>

        <footer className="flex items-end justify-between gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: still ? 0 : 0.5, duration: 0.5 }}>
            <BootTerminal still={still} onDone={onReady} />
            <p className="mt-4 font-mono text-[10px] tracking-[0.2em] text-muted">CLICK ANYWHERE TO SKIP</p>
          </motion.div>

          <div className="hidden items-end gap-2 sm:flex">
            <motion.img
              src="/me/wink.webp"
              alt=""
              className="w-36 drop-shadow-[4px_6px_0_rgb(26_23_20/0.25)] lg:w-44"
              initial={{ y: 160, rotate: 10, opacity: 0 }}
              animate={{ y: 0, rotate: 4, opacity: 1 }}
              transition={{ delay: still ? 0 : 1.2, type: 'spring', stiffness: 140, damping: 14 }}
            />
            <motion.div
              className="relative grid h-24 w-24 place-items-center rounded-full border-2 border-ink bg-orange text-paper shadow-[3px_3px_0_var(--color-ink)]"
              initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: still ? 0 : 0.9, type: 'spring', stiffness: 220, damping: 18 }}
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow">
                <defs><path id="intro-ring" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" /></defs>
                <text fill="currentColor" fontSize="12" fontFamily="Barlow Condensed" fontWeight="700" letterSpacing="3">
                  <textPath href="#intro-ring">ENTER · ENTER · ENTER · </textPath>
                </text>
              </svg>
              <span className="font-anton text-2xl">↵</span>
            </motion.div>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

/* Plays on every load/reload; onFinish fires as the sheet starts lifting. */
export const Intro = ({ onFinish }: { onFinish: () => void }) => {
  const [show, setShow] = useState(true);

  const enter = useCallback(() => {
    setShow(false);
    onFinish();
  }, [onFinish]);
  const ready = useCallback(() => { window.setTimeout(enter, 700); }, [enter]);

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [show, onFinish]);

  return <AnimatePresence>{show && <Overlay onEnter={enter} onReady={ready} />}</AnimatePresence>;
};
