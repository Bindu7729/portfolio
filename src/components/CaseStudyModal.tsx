import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../types';
import { Kicker, Sticker } from './ui';
import { MockupPanel, ProjectHead, TechPills } from './ProjectParts';
import { accentOf, splitTitle } from './projectUtils';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject?: (p: Project) => void;
}

/* One numbered block, same (01) kicker + Anton headline as the homepage sections */
const Block = ({ n, label, title, children }: { n: string; label: string; title: string; children: ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
  >
    <Kicker n={n}>{label}</Kicker>
    <h2 className="font-anton text-[clamp(2rem,5vw,3.25rem)] uppercase leading-[1]">{title}</h2>
    <div className="mt-6">{children}</div>
  </motion.section>
);

const Lede = ({ children }: { children: ReactNode }) => (
  <p className="max-w-3xl text-lg leading-relaxed text-ink/80">{children}</p>
);

export const CaseStudyModal = ({ project, onClose, onSelectProject }: CaseStudyModalProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cs = project?.caseStudy;

  const currentIndex = projectsData.findIndex((p) => p.id === project?.id);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  /* lock body scroll while open */
  useEffect(() => {
    if (!project) return; // don't clobber the intro's scroll lock
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  /* back to top when switching projects */
  useEffect(() => {
    if (project) scrollRef.current?.scrollTo({ top: 0 });
  }, [project]);

  /* close on Escape */
  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [project, onClose]);

  if (!project) return <AnimatePresence />;
  const accent = accentOf(project);
  const [name] = splitTitle(project);
  let n = 0;
  const num = () => `0${++n}`;

  return (
    <AnimatePresence>
      {cs && (
        <motion.div
          key={project.id}
          ref={scrollRef}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          className="paper-dots fixed inset-0 z-50 overflow-y-auto overflow-x-hidden text-ink"
          role="dialog"
          aria-modal="true"
          aria-label={`${name} case study`}
        >
          {/* ── Top bar: same look as the site navbar ── */}
          <header className="sticky top-0 z-40 border-b-2 border-ink/10 bg-paper/85 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
              <button onClick={onClose} className="btn bg-paper px-3 py-1.5 text-sm text-ink sm:px-4">
                <ArrowLeft size={16} /> <span className="hidden sm:inline">All</span> Projects
              </button>
              <span className="hidden font-mono text-xs font-bold uppercase tracking-wider text-muted md:block">
                Case study · 0{currentIndex + 1} / 0{projectsData.length}
              </span>
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn px-3 py-1.5 text-sm text-paper sm:px-4" style={{ background: accent }}>
                    Live demo <ArrowUpRight size={16} />
                  </a>
                )}
                <button onClick={onClose} aria-label="Close case study" className="btn bg-paper p-2 text-ink">
                  <X size={18} />
                </button>
              </div>
            </div>
          </header>

          <main className="mx-auto max-w-6xl space-y-20 px-4 pb-24 pt-10 sm:space-y-24 sm:px-6 sm:pt-14">
            {/* ── Hero: the project card, opened up ── */}
            <div>
              <div className="card overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex flex-1 flex-col p-7 sm:p-10 lg:p-12">
                    <ProjectHead p={project} i={currentIndex} page />
                    <p className="mt-5 text-base leading-relaxed text-ink/75">{cs.overview ?? project.description}</p>
                    <div className="mt-6"><TechPills items={project.technologies} /></div>
                  </div>
                  <MockupPanel p={project} />
                </div>
              </div>

              {/* metrics */}
              <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {cs.metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.07 }}
                    className="card p-4 sm:p-5"
                  >
                    <p className="break-words font-anton text-2xl leading-tight sm:text-3xl" style={{ color: accent }}>{m.value}</p>
                    <p className="mt-1 font-cond text-xs font-bold uppercase tracking-wider text-muted sm:text-sm">{m.label}</p>
                    {m.detail && <p className="mt-2 border-t border-dashed border-ink/20 pt-2 text-xs text-ink/60">{m.detail}</p>}
                  </motion.div>
                ))}
              </div>
            </div>

            <Block n={num()} label="The problem" title="Why it had to exist">
              <Lede>{cs.challenge}</Lede>
              {cs.keyProblems && cs.keyProblems.length > 0 && (
                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  {cs.keyProblems.map((kp) => {
                    const [title, desc] = kp.split(': ');
                    return (
                      <div key={kp} className="card card-lift p-5">
                        <h3 className="font-anton text-xl uppercase leading-tight" style={{ color: accent }}>{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink/75">{desc ?? ''}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </Block>

            <Block n={num()} label="Architecture" title="How it works">
              <Lede>{cs.architecture}</Lede>
              {cs.architectureWorkflow && cs.architectureWorkflow.length > 0 && (
                <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {cs.architectureWorkflow.map((wf) => {
                    const [stepNo, ...rest] = wf.step.split('. ');
                    return (
                      <li key={wf.step} className="card p-5">
                        <span className="font-anton text-4xl leading-none" style={{ color: accent }}>{rest.length ? stepNo : ''}</span>
                        <h3 className="mt-3 font-cond text-lg font-bold uppercase leading-tight tracking-wide">{rest.length ? rest.join('. ') : wf.step}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink/75">{wf.description}</p>
                      </li>
                    );
                  })}
                </ol>
              )}
            </Block>

            <Block n={num()} label="Innovations" title="What makes it different">
              <div className="grid gap-5 md:grid-cols-2">
                {cs.innovations.map((item, i) => (
                  <div key={item.title} className="card card-lift flex flex-col p-6">
                    <span className="font-mono text-xs text-orange">0{i + 1}</span>
                    <h3 className="mt-2 font-anton text-2xl uppercase leading-tight">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/75">{item.detail}</p>
                    {item.impact && (
                      <span className="tag mt-4 self-start -rotate-1 bg-mustard normal-case text-ink">★ {item.impact}</span>
                    )}
                  </div>
                ))}
              </div>
            </Block>

            {cs.technicalChallenges && cs.technicalChallenges.length > 0 && (
              <Block n={num()} label="Hard parts" title="What broke & how I fixed it">
                <div className="space-y-5">
                  {cs.technicalChallenges.map((tc) => (
                    <div key={tc.problem} className="card grid gap-4 p-5 sm:p-6 md:grid-cols-[1fr_1.6fr]">
                      <div>
                        <span className="tag bg-orange text-paper">Problem</span>
                        <h3 className="mt-3 font-anton text-xl uppercase leading-tight">{tc.problem}</h3>
                      </div>
                      <div className="border-t-2 border-dashed border-ink/20 pt-4 md:border-l-2 md:border-t-0 md:pl-5 md:pt-0">
                        <span className="tag bg-teal text-paper">Fix</span>
                        <p className="mt-3 text-sm leading-relaxed text-ink/80 sm:text-base">{tc.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Block>
            )}

            <Block n={num()} label="Outcome" title="Where it landed">
              <Lede>{cs.outcome}</Lede>
              {cs.learnings && cs.learnings.length > 0 && (
                <div className="mt-8 rounded-2xl border-2 border-dashed border-ink/40 p-5 sm:p-6">
                  <h3 className="font-cond text-lg font-bold uppercase tracking-widest">What I learned</h3>
                  <ul className="mt-3 space-y-2.5">
                    {cs.learnings.map((l) => (
                      <li key={l} className="flex gap-2 text-sm leading-relaxed text-ink/80 sm:text-base">
                        <span className="text-orange">→</span>{l}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Block>

            {/* ── CTA: dark band like the Contact section, sticker peeking over it ── */}
            <div className="relative pt-24 sm:pt-28">
              <Sticker pose="laptop" tilt={-3} bubble="try it live!"
                className="absolute right-6 top-0 z-0 w-32 sm:w-40" />
              <div className="ink-dots relative z-10 rounded-2xl border-2 border-ink p-8 text-paper shadow-[6px_6px_0_var(--color-orange)] sm:p-12">
                <p className="font-hand text-2xl text-mustard">see it running</p>
                <h2 className="mt-1 font-anton text-[clamp(2rem,5vw,3.5rem)] uppercase leading-[1]">
                  {name}, <span className="hl inline-block">live.</span>
                </h2>
                <div className="mt-6 flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn text-paper" style={{ background: accent }}>
                      Launch live demo <ArrowUpRight size={20} />
                    </a>
                  )}
                  <button onClick={onClose} className="btn bg-paper text-ink">Back to projects</button>
                </div>
              </div>
            </div>

            {/* ── Prev / next ── */}
            <nav className="grid gap-4 border-t-2 border-ink pt-8 sm:grid-cols-2">
              {prevProject ? (
                <button onClick={() => onSelectProject?.(prevProject)} className="card card-lift p-5 text-left">
                  <span className="flex items-center gap-1 font-mono text-xs text-muted"><ArrowLeft size={14} /> Previous</span>
                  <span className="mt-1 block font-anton text-2xl uppercase">{splitTitle(prevProject)[0]}</span>
                </button>
              ) : <div className="hidden sm:block" />}
              {nextProject && (
                <button onClick={() => onSelectProject?.(nextProject)} className="card card-lift p-5 text-right">
                  <span className="flex items-center justify-end gap-1 font-mono text-xs text-muted">Next <ArrowRight size={14} /></span>
                  <span className="mt-1 block font-anton text-2xl uppercase">{splitTitle(nextProject)[0]}</span>
                </button>
              )}
            </nav>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
