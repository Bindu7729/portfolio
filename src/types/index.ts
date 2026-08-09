export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  details: string[];
}