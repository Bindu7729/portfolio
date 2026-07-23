import { describe, it, expect } from 'vitest';
import { generatePersonJsonLd } from '../src/utils/structuredData';

describe('Schema.org Structured Data Generator', () => {
  it('generates compliant Person JSON-LD object for SEO', () => {
    const data = generatePersonJsonLd('Penumala Bindu', 'Software Engineer');
    expect(data['@context']).toBe('https://schema.org');
    expect(data['@type']).toBe('Person');
    expect(data.name).toBe('Penumala Bindu');
    expect(data.sameAs).toContain('https://github.com/Bindu7729');
    expect(data.alumniOf.name).toBe('Mohan Babu University');
  });
});
