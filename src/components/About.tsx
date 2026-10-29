import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import { stats, highlights } from '../data/portfolioData';
import { Kicker, RiseWords, Sticker } from './ui';

const Counter = ({ value, decimals = 0, suffix }: { value: number; decimals?: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.4, ease: 'easeOut', onUpdate: setV });
    return () => c.stop();
  }, [inView, value]);
  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>;
};

export const About = () => (
  <section id="about" className="ink-dots relative overflow-hidden px-4 pb-24 pt-28 text-paper sm:px-6">
    <div className="mx-auto max-w-6xl">
      <Kicker n="01" dark>About me</Kicker>
      <h2 className="max-w-3xl font-anton text-[clamp(2.4rem,6vw,4.5rem)] uppercase leading-[1]">
        <RiseWords text="I build things" /> <span className="hl inline-block">that scale.</span>
      </h2>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-paper/80">
          <p>
            I'm a Computer Science & Engineering undergrad at <b className="text-paper">Mohan Babu University</b> who
            likes the unglamorous parts of software: clean DBMS schemas, APIs that don't break, and scripts that
            automate the boring stuff away.
          </p>
          <p>
            Core CS (DSA, OOP, DBMS) keeps my foundations honest; shipping full-stack apps keeps them practical.
            Outside code, I tutor juniors and help run technical events.
          </p>
        </div>

        <div className="relative mt-20 grid grid-cols-3 gap-3 self-start md:mt-24">
          <Sticker pose="wink" from="bottom" tilt={3} bubble="psst… scroll on"
            className="absolute -top-[6.5rem] right-2 z-0 w-28 sm:-top-[8.5rem] sm:w-36" />
          {stats.map((s) => (
            <div key={s.label} className="relative z-10 rounded-xl border-2 border-paper/20 bg-ink p-4 text-center">
              <div className="font-anton text-3xl text-mustard sm:text-4xl">
                <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
              </div>
              <div className="mt-1 font-cond text-xs font-bold uppercase tracking-wider text-paper/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card card-lift p-5 text-ink"
          >
            <div className="font-mono text-xs text-orange">0{i + 1}</div>
            <h3 className="mt-2 font-anton text-2xl uppercase">{h.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{h.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
