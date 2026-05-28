import { describe, it, expect } from 'vitest';
import { getTechBadgeClasses } from '../src/utils/badgeFormatter';

describe('Tech Badge Color Formatter Utility', () => {
  it('returns appropriate theme accent classes for tech stacks', () => {
    expect(getTechBadgeClasses('React')).toContain('cyan');
    expect(getTechBadgeClasses('Spring Boot')).toContain('emerald');
    expect(getTechBadgeClasses('PostgreSQL')).toContain('amber');
    expect(getTechBadgeClasses('Docker')).toContain('purple');
    expect(getTechBadgeClasses('CustomTool')).toContain('slate');
  });
});
