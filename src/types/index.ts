export interface CaseStudySection {
  overview?: string;
  challenge: string;
  keyProblems?: string[];
  architecture: string;
  architectureWorkflow?: { step: string; description: string }[];
  innovations: { title: string; detail: string; impact?: string }[];
  technicalChallenges?: { problem: string; solution: string }[];
  outcome: string;
  metrics: { label: string; value: string; detail?: string }[];
  learnings?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  category?: string;
  accentColor?: string;
  badge?: {
    main: string;
    sub: string;
  };
  caseStudy?: CaseStudySection;
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