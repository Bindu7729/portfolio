import { tickerItems } from '../data/portfolioData';

export const Ticker = () => {
  const row = tickerItems.map((t) => `${t} ★ `).join('');
  return (
    <div className="relative z-10 -rotate-1 overflow-hidden border-y-2 border-ink bg-mustard py-3">
      <div className="flex w-max animate-marquee whitespace-nowrap font-anton text-xl uppercase tracking-wide text-ink sm:text-2xl" aria-hidden>
        <span className="pr-4">{row.repeat(3)}</span>
        <span className="pr-4">{row.repeat(3)}</span>
      </div>
    </div>
  );
};
