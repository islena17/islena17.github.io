export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
  accent: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};
