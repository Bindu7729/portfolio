export interface ProjectItem {
  id: string;
  title: string;
  techStack: string[];
  featured?: boolean;
}

export function filterProjectsByTech(projects: ProjectItem[], techQuery: string): ProjectItem[] {
  if (!techQuery || !techQuery.trim() || techQuery.toLowerCase() === 'all') {
    return [...projects];
  }

  const query = techQuery.trim().toLowerCase();
  return projects.filter(p =>
    p.techStack.some(t => t.toLowerCase().includes(query)) ||
    p.title.toLowerCase().includes(query)
  );
}
