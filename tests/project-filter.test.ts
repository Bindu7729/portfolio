import { describe, it, expect } from 'vitest';
import { filterProjectsByTech } from '../src/utils/projectFilter';

describe('Project Technology Filter Utility', () => {
  const projects = [
    { id: '1', title: 'StudyHub', techStack: ['FastAPI', 'Next.js', 'React'] },
    { id: '2', title: 'CodeVista', techStack: ['TypeScript', 'Monaco', 'React'] },
    { id: '3', title: 'Ghostline', techStack: ['Node.js', 'WebRTC', 'Crypto'] }
  ];

  it('filters projects matching specified technology keyword', () => {
    const reactProjects = filterProjectsByTech(projects, 'React');
    expect(reactProjects).toHaveLength(2);

    const webrtcProjects = filterProjectsByTech(projects, 'WebRTC');
    expect(webrtcProjects).toHaveLength(1);
    expect(webrtcProjects[0].title).toBe('Ghostline');
  });

  it('returns complete project list when query is All or blank', () => {
    expect(filterProjectsByTech(projects, 'All')).toHaveLength(3);
    expect(filterProjectsByTech(projects, '')).toHaveLength(3);
  });
});
