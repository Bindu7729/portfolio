import { useCallback, useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { Project } from '../types';
import { accentOf, splitTitle } from './projectUtils';

/* Shared by the project cards and the case-study page so both stay in sync. */

/* 3-D tilt that follows the cursor */
const TiltMockup = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const spring = { stiffness: 220, damping: 22, mass: 0.5 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [5, -5]), spring);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-5, 5]), spring);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - left) / width - 0.5);
    rawY.set((e.clientY - top) / height - 0.5);
  }, [rawX, rawY]);

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={() => { rawX.set(0); rawY.set(0); }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
};

/* Big accent number + mono category, then the title and subtitle */
export const ProjectHead = ({ p, i, page = false }: { p: Project; i: number; page?: boolean }) => {
  const [name, sub] = splitTitle(p);
  const Title = page ? 'h1' : 'h3';
  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="select-none font-anton text-6xl leading-none transition-transform duration-300 group-hover:scale-105" style={{ color: accentOf(p) }}>
          0{i + 1}
        </span>
        <p className="max-w-[260px] text-right font-mono text-[11px] font-bold uppercase leading-snug tracking-wider text-muted">
          {p.category ?? p.technologies.slice(0, 3).join(' / ')}
        </p>
      </div>
      <Title className={`mt-6 font-anton uppercase leading-[1.05] text-ink ${page ? 'text-4xl sm:text-5xl' : 'text-2xl transition-colors duration-200 group-hover:text-orange sm:text-[2rem] lg:text-[2.4rem]'}`}>
        {name}
      </Title>
      {sub && <p className="mt-1 font-cond text-base font-bold uppercase tracking-wide text-muted">{sub}</p>}
    </>
  );
};

export const TechPills = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((tech) => (
      <span key={tech} className="rounded-lg border-2 border-ink bg-paper px-3 py-1 font-mono text-xs font-bold text-ink shadow-[2px_2px_0_var(--color-ink)] transition-colors hover:border-orange hover:text-orange">
        {tech}
      </span>
    ))}
  </div>
);

/* Right-hand dotted panel with the tilting screenshot */
export const MockupPanel = ({ p, className = '' }: { p: Project; className?: string }) => (
  <div className={`paper-dots relative flex w-full items-center justify-center border-t-2 border-ink p-6 sm:p-10 lg:w-[52%] lg:border-l-2 lg:border-t-0 ${className}`}>
    <TiltMockup className="w-full max-w-[520px]">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border-2 border-ink shadow-[4px_4px_0_var(--color-ink)]">
        {p.image && (
          <img src={p.image} alt={`${splitTitle(p)[0]} screenshot`} loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" />
        )}
      </div>
    </TiltMockup>
  </div>
);
