export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

export type ExperienceContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: ExperienceItem[];
};
