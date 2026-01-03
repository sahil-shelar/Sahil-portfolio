export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  tech: string[];
  description: string;
  category: string;
  projectUrl: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  details: string[];
}

export interface Skill {
  name: string;
  category: 'code' | 'data' | 'tool';
}