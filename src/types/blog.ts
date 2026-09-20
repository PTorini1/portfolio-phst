export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  lang: string;
};

export type PostMeta = PostFrontmatter & {
  readingTime: number;
};
