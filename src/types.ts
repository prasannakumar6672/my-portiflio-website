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
    twitter?: string;
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
  liveUrl: string;
  featured?: boolean;
  stats?: {
    stars: number;
    forks: number;
  };
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

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface GitHubStats {
  totalRepos: number;
  stars: number;
  forks: number;
  followers: number;
  contributionData: { date: string; count: number }[];
  languages: { name: string; percentage: number; color: string }[];
}
