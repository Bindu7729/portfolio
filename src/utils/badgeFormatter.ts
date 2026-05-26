export function getTechBadgeClasses(tech: string): string {
  const t = tech.toLowerCase();

  if (t.includes('react') || t.includes('vue') || t.includes('tailwind')) {
    return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
  }
  if (t.includes('node') || t.includes('spring') || t.includes('python')) {
    return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
  }
  if (t.includes('mongo') || t.includes('sql') || t.includes('postgres')) {
    return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
  }
  if (t.includes('git') || t.includes('docker') || t.includes('ci')) {
    return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
  }

  return 'bg-slate-500/10 text-slate-300 border-slate-500/20';
}
