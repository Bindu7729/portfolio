import type { Project } from '../types';

export const accentOf = (p: Project) => p.accentColor ?? 'var(--color-orange)';
export const splitTitle = (p: Project) => p.title.split(' – ');
