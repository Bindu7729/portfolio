import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo, heroLines } from '../data/portfolioData';

/** Types each line, holds, deletes, moves to the next. */
const useTyped = (lines: string[]) => {
  const [text, setText] = useState('');
  useEffect(() => {
    let i = 0, n = 0, del = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const line = lines[i];
      n += del ? -1 : 1;
      setText(line.slice(0, n));
      let wait = del ? 22 : 45;
      if (!del && n === line.length) { del = true; wait = 1800; }
      else if (del && n === 0) { del = false; i = (i + 1) % lines.length; wait = 300; }
      t = setTimeout(tick, wait);
    };
    t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, [lines]);
  return text;
};

const rise = (d: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: d, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as const },
});

export const Hero = () => {
  const typed = useTyped(heroLines);
  // character leans toward the cursor
  const mx = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 15 });
  const rot = useTransform(sx, [-1, 1], [-4, 4]);
  const shift = useTransform(sx, [-1, 1], [-14, 14]);

  return (
    <section
      id="home"
      onMouseMove={(e) => mx.set((e.clientX / window.innerWidth) * 2 - 1)}
      className="paper-dots relative overflow-hidden"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 pb-0 pt-12 sm:px-6 md:grid-cols-[1.25fr_1fr] md:pt-16">
        <div className="relative z-10 pb-10 md:pb-24">
          <motion.p {...rise(0)} className="mb-2 -rotate-2 font-hand text-2xl text-teal sm:text-3xl">
            computer science · class of '27
          </motion.p>

          <h1 className="font-anton uppercase leading-[0.95] text-ink">
            <motion.span {...rise(0.1)} className="block text-[clamp(3rem,10vw,6.5rem)]">Penumala</motion.span>
            <motion.span {...rise(0.2)} className="block text-[clamp(3rem,10vw,6.5rem)]">
              <span className="hl inline-block -rotate-1">Bindu.</span>
            </motion.span>
            <motion.span {...rise(0.3)} className="mt-3 block text-[clamp(1.6rem,4.4vw,2.6rem)] text-ink/85">
              Full-stack developer
            </motion.span>
          </h1>

          <motion.div {...rise(0.4)} className="card mt-6 flex max-w-xl items-center gap-3 px-4 py-3 font-mono text-sm sm:text-base">
            <span className="text-orange">&gt;</span>
            <span className="min-h-[1.5em] flex-1">{typed}<span className="animate-blink">▍</span></span>
            <span className="hidden rounded-md bg-teal px-2 py-0.5 text-xs font-bold text-paper sm:inline">LIVE</span>
          </motion.div>

          <motion.p {...rise(0.5)} className="mt-5 max-w-lg text-lg leading-relaxed text-ink/75">
            {personalInfo.tagline}
          </motion.p>

          <motion.div {...rise(0.6)} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn bg-orange text-paper">
              View projects <ArrowUpRight size={20} />
            </a>
            <a href="#contact" className="btn bg-paper text-ink">Say hello</a>
            <span className="tag rotate-3 bg-mustard px-3 py-1 text-sm text-ink">8.89 CGPA ★</span>
          </motion.div>
        </div>

        <div className="relative mx-auto w-[78%] max-w-[420px] self-end md:w-full">
          <motion.div
            initial={{ y: 200, opacity: 0, rotate: 8 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.35, type: 'spring', stiffness: 90, damping: 14 }}
          >
            <motion.img
              src="/me/point.webp"
              alt="Illustration of Bindu pointing at you"
              style={{ rotate: rot, x: shift, transformOrigin: '50% 100%' }}
              animate={{ scale: [1, 1.015, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full drop-shadow-[6px_8px_0_rgb(26_23_20/0.2)]"
            />
          </motion.div>
          <motion.span
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: -6 }}
            transition={{ delay: 1.1, type: 'spring', stiffness: 260, damping: 14 }}
            className="absolute -left-2 -top-10 rounded-2xl text-xl sm:-left-6 sm:top-[8%] sm:text-2xl border-2 border-ink bg-paper px-4 py-2 font-hand shadow-[3px_3px_0_var(--color-ink)] sm:-left-6"
          >
            yes, you! let's build ↗
          </motion.span>
        </div>
      </div>
    </section>
  );
};
