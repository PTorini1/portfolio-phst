export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  relatedPostSlug?: string;
  imageUrl?: string;
};

export type ProjectsContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: ProjectItem[];
};
