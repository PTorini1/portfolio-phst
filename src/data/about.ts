import type { HighlightItem, LinkItem, Locale } from "../types/content";

type AboutContent = {
  eyebrow: string;
  title: string;
  introduction: string[];
  technicalTitle: string;
  technicalExperience: HighlightItem[];
  interestsTitle: string;
  interests: string[];
  linksTitle: string;
  links: LinkItem[];
};

export const aboutContent: Record<Locale, AboutContent> = {
  "pt-BR": {
    eyebrow: "Sobre",
    title: "Desenvolvedor backend com foco em problemas reais",
    introduction: [
      "Sou desenvolvedor .NET com mais de 4 anos de experiencia, trabalhando principalmente com C#/.NET, backend, APIs, SQL Server, Azure, mensageria, observabilidade e integracao de servicos.",
      "Gosto de atuar perto do problema: entender sintomas, investigar causas, corrigir bugs e transformar aprendizados em solucoes mais simples de manter.",
    ],
    technicalTitle: "Experiencia tecnica",
    technicalExperience: [
      {
        title: "Desenvolvimento e manutencao",
        description:
          "Construcao e evolucao de APIs, servicos backend e integracoes com atencao a clareza, manutencao e comportamento em producao.",
      },
      {
        title: "Troubleshooting e incidentes",
        description:
          "Analise de falhas, logs, dados e fluxo de execucao para encontrar causas e aplicar correcoes com criterio.",
      },
      {
        title: "Arquitetura e cloud",
        description:
          "Participacao em decisoes de integracao, mensageria, processamento assincrono e uso de recursos Azure.",
      },
    ],
    interestsTitle: "Areas de interesse",
    interests: [
      ".NET e C#",
      "APIs e backend",
      "Azure",
      "Mensageria",
      "Observabilidade",
      "Arquitetura de sistemas",
      "SQL Server",
      "Integracao de servicos",
    ],
    linksTitle: "Links profissionais",
    links: [
      { label: "LinkedIn", href: "linkedInUrl" },
      { label: "GitHub", href: "githubUrl" },
    ],
  },
  "en-US": {
    eyebrow: "About",
    title: "Backend developer focused on real-world problems",
    introduction: [
      "I am a .NET developer with more than 4 years of experience, mainly working with C#/.NET, backend, APIs, SQL Server, Azure, messaging, observability, and service integration.",
      "I like working close to the problem: understanding symptoms, investigating root causes, fixing bugs, and turning lessons learned into easier-to-maintain solutions.",
    ],
    technicalTitle: "Technical experience",
    technicalExperience: [
      {
        title: "Development and maintenance",
        description:
          "Building and evolving APIs, backend services, and integrations with attention to clarity, maintainability, and production behavior.",
      },
      {
        title: "Troubleshooting and incidents",
        description:
          "Analyzing failures, logs, data, and execution flow to find causes and apply fixes with judgment.",
      },
      {
        title: "Architecture and cloud",
        description:
          "Contributing to decisions around integration, messaging, asynchronous processing, and Azure resources.",
      },
    ],
    interestsTitle: "Areas of interest",
    interests: [
      ".NET and C#",
      "APIs and backend",
      "Azure",
      "Messaging",
      "Observability",
      "System architecture",
      "SQL Server",
      "Service integration",
    ],
    linksTitle: "Professional links",
    links: [
      { label: "LinkedIn", href: "linkedInUrl" },
      { label: "GitHub", href: "githubUrl" },
    ],
  },
};
