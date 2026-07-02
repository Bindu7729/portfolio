import { describe, it, expect } from 'vitest';
import { formatContributionSummary } from '../src/utils/githubStatsFormatter';

describe('GitHub Stats Badge Formatter', () => {
  it('formats badge label with total contributions and weekly streak', () => {
    const stats = { totalContributions: 360, activeWeeks: 47, streakWeeks: 47 };
    const res = formatContributionSummary(stats);

    expect(res.badgeLabel).toBe('360 Contributions · 47w Streak');
    expect(res.isRequirementMet).toBe(true);
  });

  it('identifies incomplete progress when targets are not yet reached', () => {
    const stats = { totalContributions: 200, activeWeeks: 20, streakWeeks: 10 };
    const res = formatContributionSummary(stats);
    expect(res.isRequirementMet).toBe(false);
  });
});
