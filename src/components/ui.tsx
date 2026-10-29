import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Pose = 'point' | 'neutral' | 'wink' | 'laugh' | 'think' | 'glance' | 'peace' | 'laptop' | 'books' | 'coffee';

/** Character sticker that springs in from the side when it scrolls into view. */
export const Sticker = ({
  pose, className = '', from = 'bottom', tilt = 4, bubble, bubbleSide = 'left',
}: {
  pose: Pose; className?: string; from?: 'left' | 'right' | 'bottom'; tilt?: number;
  bubble?: string; bubbleSide?: 'left' | 'right';
}) => {
  const offset = from === 'bottom' ? { y: 80 } : { x: from === 'left' ? -120 : 120 };
  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      initial={{ opacity: 0, rotate: from === 'left' ? -tilt * 3 : tilt * 3, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: tilt }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 140, damping: 14 }}
    >
      <div className="relative">
        {bubble && (
          <motion.span
            className={`absolute -top-2 z-10 whitespace-nowrap rounded-xl border-2 border-ink bg-paper px-3 py-1 font-hand text-xl text-ink shadow-[3px_3px_0_var(--color-ink)] ${bubbleSide === 'left' ? 'right-[70%]' : 'left-[70%]'}`}
            style={{ rotate: -tilt }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, type: 'spring', stiffness: 260, damping: 16 }}
          >
            {bubble}
          </motion.span>
        )}
        <img src={`/me/${pose}.webp`} alt="" loading="lazy" className="w-full drop-shadow-[4px_6px_0_rgb(26_23_20/0.25)]" />
      </div>
    </motion.div>
  );
};

/** Numbered section kicker, e.g. (01) about me */
export const Kicker = ({ n, children, dark = false }: { n: string; children: ReactNode; dark?: boolean }) => (
  <div className="mb-4 flex items-center gap-3">
    <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-orange font-hand text-xl text-orange">{n}</span>
    <span className={`font-cond text-sm font-bold uppercase tracking-[0.2em] ${dark ? 'text-paper/70' : 'text-muted'}`}>{children}</span>
  </div>
);

/** Headline whose words rise in one after another. */
export const RiseWords = ({ text, className = '' }: { text: string; className?: string }) => (
  // the observer sits on the visible wrapper; clipped children never intersect themselves
  <motion.span className={className} initial="hidden" whileInView="show" viewport={{ once: true }}
    transition={{ staggerChildren: 0.06 }}>
    {text.split(' ').map((w, i) => (
      <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
        <motion.span
          className="inline-block"
          variants={{ hidden: { y: '105%' }, show: { y: 0 } }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {w}&nbsp;
        </motion.span>
      </span>
    ))}
  </motion.span>
);
