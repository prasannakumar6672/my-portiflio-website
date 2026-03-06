export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  email: string;
  location: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface TechItem {
  name: string;
  icon: string; // Lucide or React Icons name
  level: number; // 0-100
  category: string;
  color?: string; // Brand color hex
}

export interface TechCategory {
  title: string;
  skills: TechItem[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  features?: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  logo?: string;
  active?: boolean;
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  icon: string;
}

