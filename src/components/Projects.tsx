import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../types';
import { Kicker, RiseWords, Sticker } from './ui';
import { CaseStudyModal } from './CaseStudyModal';
import { MockupPanel, ProjectHead, TechPills } from './ProjectParts';
import { accentOf } from './projectUtils';

/* ── Single showcase card ── */
const ShowcaseCard = ({
  p, i, onOpenCase,
}: {
  p: Project; i: number; onOpenCase: (p: Project) => void;
}) => {
  const accent = accentOf(p);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 110, damping: 18 }}
      className="card group relative overflow-hidden transition-shadow duration-200 hover:shadow-[6px_6px_0_var(--color-ink)]"
    >
      <div className="flex flex-col lg:flex-row">

        {/* ══ LEFT: Content ══ */}
        <div className="flex flex-1 flex-col justify-between p-7 sm:p-10 lg:p-12">
          <div>
            <ProjectHead p={p} i={i} />
            <p className="mt-5 text-base leading-relaxed text-ink/75">{p.description}</p>
            <div className="mt-6"><TechPills items={p.technologies} /></div>
          </div>

          {/* Divider + CTA */}
          <div>
            <div className="my-7 border-t-2 border-dashed border-ink/20" />
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary: CASE STUDY */}
              <button
                onClick={() => onOpenCase(p)}
                className="btn text-paper transition-all"
                style={{
                  background: accent,
                  borderColor: 'var(--color-ink)',
                  boxShadow: '4px 4px 0 var(--color-ink)',
                }}
              >
                Case Study <ArrowUpRight size={18} />
              </button>

              {/* Secondary: Live Demo (text link only, no GitHub) */}
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 font-cond text-base font-bold uppercase tracking-wide text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>
        </div>

        <MockupPanel p={p} />
      </div>
    </motion.article>
  );
};

/* ══ Section ══ */
export const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  /* Deep linking & browser back-button support for full-page case studies */
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#case-study-')) {
        const id = hash.replace('#case-study-', '');
        const found = projectsData.find((p) => p.id === id);
        if (found) {
          setActiveProject(found);
          return;
        }
      }
      setActiveProject(null);
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenCase = (p: Project) => {
    window.location.hash = `#case-study-${p.id}`;
    setActiveProject(p);
  };

  const handleCloseCase = () => {
    if (window.location.hash.startsWith('#case-study-')) {
      window.history.replaceState(null, '', window.location.pathname + '#projects');
    }
    setActiveProject(null);
  };

  const handleSelectCase = (p: Project) => {
    window.location.hash = `#case-study-${p.id}`;
    setActiveProject(p);
  };

  return (
    <section id="projects" className="relative bg-paper-2 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <Kicker n="03">Projects</Kicker>
            <h2 className="font-anton text-[clamp(2.4rem,6vw,4.5rem)] uppercase leading-[1]">
              <RiseWords text="Things I've" /> <span className="hl inline-block">shipped.</span>
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="relative mt-20 sm:mt-28">
          <Sticker
            pose="laptop"
            from="bottom"
            tilt={-3}
            bubble="shipping…"
            className="absolute -top-[5.5rem] right-4 z-20 w-32 sm:-top-[7.5rem] sm:w-44"
          />
          <div className="relative z-10 flex flex-col space-y-12 sm:space-y-16">
            {projectsData.map((p, i) => (
              <ShowcaseCard
                key={p.id}
                p={p}
                i={i}
                onOpenCase={handleOpenCase}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Full Page Case Study View */}
      <CaseStudyModal
        project={activeProject}
        onClose={handleCloseCase}
        onSelectProject={handleSelectCase}
      />
    </section>
  );
};
