export interface SkillEntry {
  name: string;
  category: string;
  proficiency: number; // 1-100
}

export function filterSkillsByQuery(skills: SkillEntry[], query: string): SkillEntry[] {
  if (!query || !query.trim()) return [...skills];
  const q = query.trim().toLowerCase();

  return skills.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.category.toLowerCase().includes(q)
  );
}

export function groupSkillsByCategory(skills: SkillEntry[]): Record<string, SkillEntry[]> {
  const groups: Record<string, SkillEntry[]> = {};
  for (const s of skills) {
    if (!groups[s.category]) {
      groups[s.category] = [];
    }
    groups[s.category].push(s);
  }
  return groups;
}
