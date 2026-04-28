export function estimateReadingTimeMinutes(text: string, wordsPerMinute: number = 200): number {
  if (!text || typeof text !== 'string') return 0;
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return 0;
  return Math.max(1, Math.ceil(words.length / wordsPerMinute));
}

export function formatReadingTime(text: string): string {
  const mins = estimateReadingTimeMinutes(text);
  if (mins === 0) return '< 1 min read';
  return `${mins} min read`;
}
