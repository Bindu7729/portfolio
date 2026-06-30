export interface ContributionStats {
  totalContributions: number;
  activeWeeks: number;
  streakWeeks: number;
}

export function formatContributionSummary(stats: ContributionStats): { badgeLabel: string; isRequirementMet: boolean } {
  const isRequirementMet = stats.totalContributions >= 350 && stats.streakWeeks >= 35;
  const badgeLabel = `${stats.totalContributions} Contributions · ${stats.streakWeeks}w Streak`;

  return {
    badgeLabel,
    isRequirementMet
  };
}
