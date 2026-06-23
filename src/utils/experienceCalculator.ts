export function calculateTenureMonths(startYear: number, startMonth: number, currentYear: number = 2026, currentMonth: number = 11): number {
  const totalMonths = ((currentYear - startYear) * 12) + (currentMonth - startMonth);
  return Math.max(0, totalMonths);
}

export function formatTenureDisplay(months: number): string {
  if (months <= 0) return '0 months';
  const years = Math.floor(months / 12);
  const remMonths = months % 12;

  if (years === 0) return `${remMonths} months`;
  if (remMonths === 0) return `${years} ${years === 1 ? 'year' : 'years'}`;
  return `${years} ${years === 1 ? 'yr' : 'yrs'} ${remMonths} mos`;
}
