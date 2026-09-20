import type { Locale } from "../types/content";
import type { ExperienceContent } from "../types/experience";

export const experienceContent: Record<Locale, ExperienceContent> = {
  "pt-BR": {
    eyebrow: "Experiencia",
    title: "Trajetoria profissional",
    description:
      "Atuacao focada em backend, APIs, integracao de servicos e resolucao de problemas em ambientes reais de producao.",
    items: [
      {
        role: "Desenvolvedor .NET",
        company: "Empresa",
        period: "2022 — presente",
        description:
          "Desenvolvimento e manutencao de APIs e servicos backend com .NET, com atuacao direta em troubleshooting, investigacao de incidentes e melhoria continua dos sistemas.",
        responsibilities: [
          "Desenvolvimento e manutencao de APIs RESTful com ASP.NET Core",
          "Investigacao e correcao de bugs e falhas em producao",
          "Integracao com servicos Azure: Service Bus, Functions, SignalR e Redis",
          "Melhoria de observabilidade com Serilog, OpenTelemetry e Application Insights",
          "Participacao em revisoes de codigo e discussoes de arquitetura",
          "Otimizacao de consultas SQL Server e uso de Dapper e Entity Framework Core",
        ],
        technologies: [
          "C#",
          ".NET",
          "ASP.NET Core",
          "SQL Server",
          "Azure",
          "Azure Service Bus",
          "Dapper",
          "Entity Framework Core",
          "Serilog",
          "OpenTelemetry",
          "Docker",
        ],
      },
      {
        role: "Desenvolvedor .NET Junior",
        company: "Empresa",
        period: "2020 — 2022",
        description:
          "Inicio da carreira atuando no desenvolvimento e sustentacao de sistemas backend, com foco em correcao de bugs, integracao entre servicos e aprendizado em ambientes de producao.",
        responsibilities: [
          "Desenvolvimento de funcionalidades em sistemas ASP.NET MVC e Web APIs",
          "Suporte e correcao de bugs em sistemas legados",
          "Escrita e otimizacao de queries SQL Server",
          "Integracao com APIs externas e sistemas de terceiros",
          "Participacao em processos de deploy e pipelines de CI/CD",
        ],
        technologies: [
          "C#",
          ".NET",
          "ASP.NET MVC",
          "Web APIs",
          "SQL Server",
          "Git",
          "Azure DevOps",
        ],
      },
    ],
  },
  "en-US": {
    eyebrow: "Experience",
    title: "Professional background",
    description:
      "Focused on backend development, APIs, service integration, and solving real problems in production environments.",
    items: [
      {
        role: ".NET Developer",
        company: "Company",
        period: "2022 — present",
        description:
          "Development and maintenance of APIs and backend services with .NET, with direct involvement in troubleshooting, incident investigation, and continuous system improvement.",
        responsibilities: [
          "Development and maintenance of RESTful APIs with ASP.NET Core",
          "Investigation and resolution of bugs and production failures",
          "Integration with Azure services: Service Bus, Functions, SignalR, and Redis",
          "Observability improvements with Serilog, OpenTelemetry, and Application Insights",
          "Participation in code reviews and architecture discussions",
          "SQL Server query optimization using Dapper and Entity Framework Core",
        ],
        technologies: [
          "C#",
          ".NET",
          "ASP.NET Core",
          "SQL Server",
          "Azure",
          "Azure Service Bus",
          "Dapper",
          "Entity Framework Core",
          "Serilog",
          "OpenTelemetry",
          "Docker",
        ],
      },
      {
        role: "Junior .NET Developer",
        company: "Company",
        period: "2020 — 2022",
        description:
          "Started my career developing and maintaining backend systems, focused on bug fixes, service integration, and learning from real production environments.",
        responsibilities: [
          "Development of features in ASP.NET MVC and Web API systems",
          "Support and bug fixes on legacy systems",
          "Writing and optimizing SQL Server queries",
          "Integration with external APIs and third-party systems",
          "Participation in deployment processes and CI/CD pipelines",
        ],
        technologies: [
          "C#",
          ".NET",
          "ASP.NET MVC",
          "Web APIs",
          "SQL Server",
          "Git",
          "Azure DevOps",
        ],
      },
    ],
  },
};
