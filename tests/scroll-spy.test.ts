import { describe, it, expect } from 'vitest';
import { determineActiveSection } from '../src/utils/scrollSpy';

describe('Scroll Spy Viewport Tracker', () => {
  const sections = [
    { id: 'hero', top: 0, height: 600 },
    { id: 'about', top: 600, height: 800 },
    { id: 'projects', top: 1400, height: 1000 }
  ];

  it('identifies top section when near top of viewport', () => {
    expect(determineActiveSection(50, sections)).toBe('hero');
  });

  it('transitions active section ID as user scrolls past threshold', () => {
    expect(determineActiveSection(550, sections)).toBe('about');
    expect(determineActiveSection(1350, sections)).toBe('projects');
  });
});
