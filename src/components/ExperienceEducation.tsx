import { motion } from 'framer-motion';
import { experienceData, educationData, certificationsData } from '../data/portfolioData';
import { Kicker, RiseWords, Sticker } from './ui';

const Stamp = ({ children }: { children: string }) => (
  <span className="tag inline-block rotate-2 bg-mustard font-mono text-[11px] normal-case tracking-normal text-ink">{children}</span>
);

const Item = ({ i, children }: { i: number; children: React.ReactNode }) => (
  <motion.li
    initial={{ opacity: 0, x: -24 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ delay: i * 0.1, duration: 0.5 }}
    className="relative pl-8"
  >
    <span className="absolute left-0 top-6 h-4 w-4 rounded-full border-2 border-ink bg-orange" />
    {children}
  </motion.li>
);

export const ExperienceEducation = () => (
  <section id="experience" className="paper-dots relative overflow-hidden px-4 py-24 sm:px-6">
    <div className="mx-auto max-w-6xl">
      <Kicker n="04">Journey</Kicker>
      <h2 className="font-anton text-[clamp(2.4rem,6vw,4.5rem)] uppercase leading-[1]">
        <RiseWords text="Where I've been" />
      </h2>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 font-cond text-xl font-bold uppercase tracking-widest text-orange">Experience</h3>
          <ol className="space-y-6 border-l-2 border-dashed border-ink/30 pl-0 [&>li]:-ml-[9px]">
            {experienceData.map((e, i) => (
              <Item key={e.role} i={i}>
                <div className="card p-5">
                  <Stamp>{e.period}</Stamp>
                  <h4 className="mt-3 font-anton text-2xl uppercase leading-tight">{e.role}</h4>
                  <p className="font-cond text-lg font-semibold text-muted">{e.organization}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/75">
                    {e.details.map((d) => (
                      <li key={d} className="flex gap-2"><span className="text-orange">→</span>{d}</li>
                    ))}
                  </ul>
                </div>
              </Item>
            ))}
          </ol>
        </div>

        <div className="relative">
          <Sticker pose="books" from="bottom" tilt={4} bubble="always studying"
            className="absolute -top-16 right-2 z-0 w-24 sm:-top-24 sm:w-32" />
          <h3 className="mb-6 font-cond text-xl font-bold uppercase tracking-widest text-teal">Education</h3>
          <ol className="relative z-10 space-y-6 border-l-2 border-dashed border-ink/30 [&>li]:-ml-[9px]">
            {educationData.map((e, i) => (
              <Item key={e.degree} i={i}>
                <div className="card flex items-start justify-between gap-4 p-5">
                  <div>
                    <Stamp>{e.period}</Stamp>
                    <h4 className="mt-3 font-anton text-xl uppercase leading-tight">{e.degree}</h4>
                    <p className="font-cond text-lg font-semibold text-muted">{e.institution}</p>
                  </div>
                  {e.details && <span className="shrink-0 font-anton text-3xl text-teal">{e.details.replace(' CGPA', '')}</span>}
                </div>
              </Item>
            ))}
          </ol>

          <div className="mt-10 rounded-2xl border-2 border-dashed border-ink/40 p-5">
            <h3 className="font-cond text-lg font-bold uppercase tracking-widest">Certificates</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {certificationsData.map((c) => (
                <li key={c.title} className="flex justify-between gap-3 border-b border-ink/10 pb-2">
                  <span className="font-medium">{c.title}</span>
                  <span className="shrink-0 font-mono text-xs text-muted">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
