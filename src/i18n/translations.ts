import type { Locale } from "../types/content";

export type UiTranslations = {
  // Header / Nav
  navHome: string;
  navAbout: string;
  navExperience: string;
  navSkills: string;
  navProjects: string;
  navBlog: string;
  navContact: string;
  openMenu: string;
  closeMenu: string;
  selectLanguage: string;
  preferences: string;
  // Footer
  externalLinks: string;
  // Blog index
  blogReadingTime: string;
  blogAllTags: string;
  blogNoResults: string;
  blogTagsLabel: string;
  // Blog post
  postBackToBlog: string;
  postPrevious: string;
  postNext: string;
  postTags: string;
  postNotFound: string;
  // About eyebrows
  eyebrowTechnical: string;
  eyebrowInterests: string;
  eyebrowContact: string;
};

export const translations: Record<Locale, UiTranslations> = {
  "pt-BR": {
    navHome: "Início",
    navAbout: "Sobre",
    navExperience: "Experiência",
    navSkills: "Skills",
    navProjects: "Projetos",
    navBlog: "Blog",
    navContact: "Contato",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    selectLanguage: "Selecionar idioma",
    preferences: "Preferências",
    externalLinks: "Links externos",
    blogReadingTime: "min de leitura",
    blogAllTags: "Todos",
    blogNoResults: "Nenhum artigo encontrado para esta tag.",
    blogTagsLabel: "Filtrar por tag",
    postBackToBlog: "← Voltar ao blog",
    postPrevious: "← Anterior",
    postNext: "Próximo →",
    postTags: "Tags",
    postNotFound: "Artigo não encontrado.",
    eyebrowTechnical: "Técnica",
    eyebrowInterests: "Interesses",
    eyebrowContact: "Contato",
  },
  "en-US": {
    navHome: "Home",
    navAbout: "About",
    navExperience: "Experience",
    navSkills: "Skills",
    navProjects: "Projects",
    navBlog: "Blog",
    navContact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    selectLanguage: "Select language",
    preferences: "Preferences",
    externalLinks: "External links",
    blogReadingTime: "min read",
    blogAllTags: "All",
    blogNoResults: "No articles found for this tag.",
    blogTagsLabel: "Filter by tag",
    postBackToBlog: "← Back to blog",
    postPrevious: "← Previous",
    postNext: "Next →",
    postTags: "Tags",
    postNotFound: "Article not found.",
    eyebrowTechnical: "Technical",
    eyebrowInterests: "Interests",
    eyebrowContact: "Contact",
  },
};
