import { describe, it, expect } from 'vitest';
import { buildVerifiedSocialLinks } from '../src/utils/socialLinks';

describe('Verified Social Links Utility', () => {
  it('generates correct GitHub and mailto URLs matching profile identity', () => {
    const links = buildVerifiedSocialLinks('Bindu7729', 'pbibinduamb@gmail.com');
    expect(links.find(l => l.platform === 'github')?.url).toBe('https://github.com/Bindu7729');
    expect(links.find(l => l.platform === 'email')?.url).toBe('mailto:pbibinduamb@gmail.com');
  });
});
