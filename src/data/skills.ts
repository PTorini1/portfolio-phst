import type { Locale } from "../types/content";
import type { SkillsContent } from "../types/skills";

export const skillsContent: Record<Locale, SkillsContent> = {
  "pt-BR": {
    eyebrow: "Habilidades",
    title: "Tecnologias e ferramentas",
    description:
      "Conjunto de tecnologias com as quais trabalhei em projetos reais de backend, cloud e infraestrutura.",
    categories: [
      {
        id: "backend",
        name: "Backend",
        skills: [
          "C#",
          ".NET",
          "ASP.NET Core",
          "ASP.NET MVC",
          "Web APIs",
          "Dapper",
          "Entity Framework Core",
        ],
      },
      {
        id: "cloud",
        name: "Cloud",
        skills: [
          "Microsoft Azure",
          "Azure Service Bus",
          "Azure Functions",
          "Azure SignalR",
          "Azure Cache for Redis",
          "Azure SQL",
          "Azure OpenAI",
        ],
      },
      {
        id: "database",
        name: "Banco de dados",
        skills: ["SQL Server", "Redis"],
      },
      {
        id: "devops",
        name: "DevOps e Infra",
        skills: [
          "Docker",
          "Docker Compose",
          "Kubernetes",
          "GitHub Actions",
          "Azure DevOps",
        ],
      },
      {
        id: "observability",
        name: "Observabilidade",
        skills: [
          "Serilog",
          "OpenTelemetry",
          "Prometheus",
          "Grafana",
          "Loki",
          "Application Insights",
        ],
      },
      {
        id: "other",
        name: "Outros",
        skills: [
          "Git",
          "REST APIs",
          "Mensageria",
          "Arquitetura orientada a eventos",
          "RPA",
          "Integracao com IA",
        ],
      },
    ],
  },
  "en-US": {
    eyebrow: "Skills",
    title: "Technologies and tools",
    description:
      "Technologies I have worked with in real backend, cloud, and infrastructure projects.",
    categories: [
      {
        id: "backend",
        name: "Backend",
        skills: [
          "C#",
          ".NET",
          "ASP.NET Core",
          "ASP.NET MVC",
          "Web APIs",
          "Dapper",
          "Entity Framework Core",
        ],
      },
      {
        id: "cloud",
        name: "Cloud",
        skills: [
          "Microsoft Azure",
          "Azure Service Bus",
          "Azure Functions",
          "Azure SignalR",
          "Azure Cache for Redis",
          "Azure SQL",
          "Azure OpenAI",
        ],
      },
      {
        id: "database",
        name: "Database",
        skills: ["SQL Server", "Redis"],
      },
      {
        id: "devops",
        name: "DevOps and Infra",
        skills: [
          "Docker",
          "Docker Compose",
          "Kubernetes",
          "GitHub Actions",
          "Azure DevOps",
        ],
      },
      {
        id: "observability",
        name: "Observability",
        skills: [
          "Serilog",
          "OpenTelemetry",
          "Prometheus",
          "Grafana",
          "Loki",
          "Application Insights",
        ],
      },
      {
        id: "other",
        name: "Other",
        skills: [
          "Git",
          "REST APIs",
          "Messaging",
          "Event-driven architecture",
          "RPA",
          "AI integration",
        ],
      },
    ],
  },
};
