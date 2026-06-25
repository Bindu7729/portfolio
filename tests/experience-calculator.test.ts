import { describe, it, expect } from 'vitest';
import { calculateTenureMonths, formatTenureDisplay } from '../src/utils/experienceCalculator';

describe('Experience Tenure Calculator', () => {
  it('computes elapsed months from start date to current 2026 milestone', () => {
    const months = calculateTenureMonths(2023, 7, 2026, 11);
    expect(months).toBe(40);
    expect(formatTenureDisplay(months)).toBe('3 yrs 4 mos');
  });

  it('formats whole year tenures without residual months', () => {
    expect(formatTenureDisplay(24)).toBe('2 years');
    expect(formatTenureDisplay(12)).toBe('1 year');
    expect(formatTenureDisplay(6)).toBe('6 months');
  });
});
