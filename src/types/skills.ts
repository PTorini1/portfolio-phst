export type SkillCategory = {
  id: string;
  name: string;
  skills: string[];
};

export type SkillsContent = {
  eyebrow: string;
  title: string;
  description: string;
  categories: SkillCategory[];
};
