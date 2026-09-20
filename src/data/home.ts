import type { HighlightItem, Locale } from "../types/content";

type HomeContent = {
  eyebrow: string;
  title: string;
  summary: string;
  primaryCta: string;
  secondaryCta: string;
  tertiaryCta: string;
  competenciesTitle: string;
  competencies: HighlightItem[];
  nextTitle: string;
  nextItems: HighlightItem[];
};

export const homeContent: Record<Locale, HomeContent> = {
  "pt-BR": {
    eyebrow: "Desenvolvedor .NET / Backend",
    title: "Pedro Torini",
    summary:
      "Desenvolvedor .NET com foco em backend, cloud, arquitetura e resolucao de problemas reais.",
    primaryCta: "Ver experiencia",
    secondaryCta: "Ler artigos",
    tertiaryCta: "Entrar em contato",
    competenciesTitle: "Foco tecnico",
    competencies: [
      {
        title: "Backend e APIs",
        description:
          "Desenvolvimento e manutencao de servicos com C#, .NET e integracoes entre sistemas.",
      },
      {
        title: "Cloud e mensageria",
        description:
          "Experiencia pratica com Azure, processamento assincrono e comunicacao entre servicos.",
      },
      {
        title: "Troubleshooting",
        description:
          "Investigacao de incidentes, bugs e comportamentos inesperados em ambientes reais.",
      },
    ],
    nextTitle: "Explore o portfolio",
    nextItems: [
      {
        title: "Experiencia",
        description: "Conheca a trajetoria profissional e os principais tipos de problema tratados.",
      },
      {
        title: "Projetos",
        description: "Veja projetos e estudos tecnicos com contexto, tecnologias e resultados.",
      },
      {
        title: "Blog",
        description: "Leia artigos sobre .NET, Azure, arquitetura e investigacao tecnica.",
      },
    ],
  },
  "en-US": {
    eyebrow: ".NET / Backend Developer",
    title: "Pedro Torini",
    summary:
      ".NET developer focused on backend, cloud, architecture, and solving real engineering problems.",
    primaryCta: "View experience",
    secondaryCta: "Read articles",
    tertiaryCta: "Get in touch",
    competenciesTitle: "Technical focus",
    competencies: [
      {
        title: "Backend and APIs",
        description:
          "Development and maintenance of services with C#, .NET, and system integrations.",
      },
      {
        title: "Cloud and messaging",
        description:
          "Practical experience with Azure, asynchronous processing, and service communication.",
      },
      {
        title: "Troubleshooting",
        description:
          "Investigation of incidents, bugs, and unexpected behavior in real environments.",
      },
    ],
    nextTitle: "Explore the portfolio",
    nextItems: [
      {
        title: "Experience",
        description: "Explore professional background and the types of problems handled.",
      },
      {
        title: "Projects",
        description: "See projects and technical studies with context, technologies, and outcomes.",
      },
      {
        title: "Blog",
        description: "Read articles about .NET, Azure, architecture, and technical investigation.",
      },
    ],
  },
};
