import type { Project } from '../types';

export const accentOf = (p: Project) => p.accentColor ?? 'var(--color-orange)';
export const splitTitle = (p: Project): string[] => {
  if (!p || !p.title) return [""];
  const parts = p.title.split(/\s*[-—–]\s*/);
  return parts.length > 1 ? parts : [p.title];
};
