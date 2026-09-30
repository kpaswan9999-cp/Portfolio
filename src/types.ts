export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Gen AI' | 'Automation' | 'Data Science';
  tags: string[];
  description: string;
  bulletPoints: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  awardBadge?: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; tag?: string }[];
}

export interface Achievement {
  id: string;
  title: string;
  organizer: string;
  rank: string;
  location?: string;
  description: string;
  year: string;
  badgeType: 'gold' | 'silver' | 'bronze';
  certificateUrl?: string;
  certificateType?: 'image' | 'pdf';
  certificateId?: string;
  category?: 'Hackathon' | 'Certification' | 'Academic';
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  score?: string;
  details?: string;
  certificateUrl?: string;
  certificateType?: 'image' | 'pdf';
  certificateId?: string;
}

export interface UpskillingItem {
  topic: string;
  description: string;
  badge: string;
}
