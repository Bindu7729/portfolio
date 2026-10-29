import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { Kicker, RiseWords, Sticker } from './ui';

export const Skills = () => (
  <section id="skills" className="paper-dots px-4 py-24 sm:px-6">
    <div className="mx-auto max-w-6xl">
      <Kicker n="02">Skills</Kicker>
      <h2 className="font-anton text-[clamp(2.4rem,6vw,4.5rem)] uppercase leading-[1]">
        <RiseWords text="What I work with" />
      </h2>

      <div className="relative mt-32 max-w-3xl sm:mt-40">
        <Sticker pose="think" from="bottom" tilt={-3} bubble="hmm… which stack?"
          className="absolute -top-[7.5rem] right-4 z-0 w-32 sm:-top-[10rem] sm:w-44" />
        <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-ink bg-ink text-paper shadow-[6px_6px_0_var(--color-orange)]">
          <div className="flex items-center gap-2 border-b border-paper/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-orange" />
            <span className="h-3 w-3 rounded-full bg-mustard" />
            <span className="h-3 w-3 rounded-full bg-teal" />
            <span className="ml-3 font-mono text-xs text-paper/50">bindu · ~/stack</span>
          </div>
          <div className="space-y-5 p-5 font-mono text-sm sm:p-6">
            <p><span className="text-orange">&gt;</span> cat stack.txt</p>
            {skillsData.map((cat, ci) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + ci * 0.25 }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-teal">✓</span>
                  <span className="font-bold uppercase tracking-wider text-mustard">{cat.category}</span>
                </div>
                <div className="flex flex-wrap gap-2 pl-6">
                  {cat.skills.map((s) => (
                    <span key={s} className="rounded-md border border-paper/20 px-2 py-1 text-paper/85">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
            <p className="text-paper/50">→ always learning · next up: system design</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
