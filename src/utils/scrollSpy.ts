export function determineActiveSection(
  scrollPosition: number,
  sections: { id: string; top: number; height: number }[],
  offset: number = 100
): string {
  if (!sections || sections.length === 0) return '';

  for (let i = sections.length - 1; i >= 0; i--) {
    const s = sections[i];
    if (scrollPosition + offset >= s.top) {
      return s.id;
    }
  }

  return sections[0].id;
}
