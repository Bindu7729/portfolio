import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Kicker, RiseWords, Sticker } from './ui';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Portfolio contact from ${name}`)}&body=${encodeURIComponent(`${message}\n\nReply to: ${email}`)}`;
  };

  const rows = [
    { icon: Mail, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, text: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
    { icon: MapPin, text: personalInfo.location },
  ];

  return (
    <section id="contact" className="ink-dots relative overflow-hidden px-4 py-24 text-paper sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.1fr]">
        <div>
          <Kicker n="05" dark>Contact</Kicker>
          <h2 className="font-anton text-[clamp(2.6rem,7vw,5rem)] uppercase leading-[0.95]">
            <RiseWords text="Let's build" /> <span className="hl inline-block">something.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-paper/75">
            Open to full-stack internships, projects and collaborations. My inbox is always open.
          </p>

          <ul className="mt-8 space-y-4">
            {rows.map(({ icon: Icon, text, href }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg border-2 border-paper/25 text-mustard"><Icon size={18} /></span>
                {href ? <a href={href} className="break-all py-2 hover:text-mustard">{text}</a> : <span>{text}</span>}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-3">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="btn bg-paper p-3 text-ink"><GithubIcon size={20} /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="btn bg-paper p-3 text-ink"><LinkedinIcon size={20} /></a>
          </div>
        </div>

        <div className="relative mt-24 self-start sm:mt-28 md:mt-16">
        <Sticker pose="peace" from="bottom" tilt={-3} bubble="talk soon!"
          className="absolute -top-[6.5rem] right-4 z-0 w-28 sm:-top-[8rem] sm:w-36" />
        <form onSubmit={handleSubmit} className="card relative z-10 flex flex-col gap-4 p-6 text-ink sm:p-8">
          <h3 className="font-anton text-3xl uppercase">Drop a message</h3>
          <input className="field" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" aria-label="Your name" />
          <input className="field" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" aria-label="Your email" />
          <textarea className="field" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="What are we building?" aria-label="Your message" />
          <button type="submit" className="btn self-start bg-orange text-paper">
            Send it <Send size={18} />
          </button>
        </form>
        </div>
      </div>
    </section>
  );
};
