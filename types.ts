export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Achievement {
  id: number;
  text: string;
}

export type SectionId = 'home' | 'about' | 'projects' | 'contact';