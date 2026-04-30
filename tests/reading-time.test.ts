import { describe, it, expect } from 'vitest';
import { estimateReadingTimeMinutes, formatReadingTime } from '../src/utils/readingTime';

describe('Reading Time Estimation Utility', () => {
  it('estimates 1 minute read for short technical descriptions', () => {
    const text = 'Full-stack developer engineering scalable React and Spring Boot web applications with automated testing.';
    expect(estimateReadingTimeMinutes(text)).toBe(1);
    expect(formatReadingTime(text)).toBe('1 min read');
  });

  it('estimates longer reads accurately based on word count', () => {
    const text = new Array(450).fill('architecture').join(' ');
    expect(estimateReadingTimeMinutes(text, 200)).toBe(3);
    expect(formatReadingTime(text)).toBe('3 min read');
  });

  it('handles empty or blank input gracefully', () => {
    expect(estimateReadingTimeMinutes('')).toBe(0);
    expect(formatReadingTime('')).toBe('< 1 min read');
  });
});
