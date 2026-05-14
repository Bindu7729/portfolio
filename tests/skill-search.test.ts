import { describe, it, expect } from 'vitest';
import { filterSkillsByQuery, groupSkillsByCategory } from '../src/utils/skillSearch';

describe('Skill Search and Grouping Utility', () => {
  const skills = [
    { name: 'TypeScript', category: 'Frontend', proficiency: 90 },
    { name: 'React', category: 'Frontend', proficiency: 92 },
    { name: 'Spring Boot', category: 'Backend', proficiency: 85 },
    { name: 'MongoDB', category: 'Database', proficiency: 80 }
  ];

  it('filters skills by substring match across name or category', () => {
    const ts = filterSkillsByQuery(skills, 'Script');
    expect(ts).toHaveLength(1);
    expect(ts[0].name).toBe('TypeScript');

    const front = filterSkillsByQuery(skills, 'Frontend');
    expect(front).toHaveLength(2);
  });

  it('groups skills by category into keyed record dictionary', () => {
    const grouped = groupSkillsByCategory(skills);
    expect(Object.keys(grouped)).toContain('Frontend');
    expect(Object.keys(grouped)).toContain('Backend');
    expect(grouped.Frontend).toHaveLength(2);
  });
});
