import type { Locale } from "../types/content";
import type { ProjectsContent } from "../types/project";

export const projectsContent: Record<Locale, ProjectsContent> = {
  "pt-BR": {
    eyebrow: "Projetos",
    title: "Projetos selecionados",
    description:
      "Projetos desenvolvidos com foco em problema real, solucao tecnica e resultado concreto.",
    items: [
      {
        id: "async-notifications",
        title: "Sistema de notificacoes assincronas",
        description:
          "Solucao de notificacoes desacoplada usando Azure Service Bus e Azure SignalR. O objetivo era eliminar o acoplamento sincrono entre servicos e garantir entrega confiavel de mensagens em tempo real para o cliente, mesmo sob falhas parciais do sistema.",
        technologies: [
          "C#",
          ".NET",
          "ASP.NET Core",
          "Azure Service Bus",
          "Azure SignalR",
          "Azure Functions",
          "SQL Server",
        ],
      },
      {
        id: "dotnet-observability",
        title: "Observabilidade para aplicacoes .NET",
        description:
          "Implementacao de stack de observabilidade em aplicacoes .NET existentes sem reescrita. Uso de OpenTelemetry para traces distribuidos, Serilog para logs estruturados e Grafana com Loki para visualizacao e alertas. Reduziu drasticamente o tempo de investigacao de incidentes.",
        technologies: [
          "C#",
          ".NET",
          "OpenTelemetry",
          "Serilog",
          "Prometheus",
          "Grafana",
          "Loki",
          "Application Insights",
          "Docker",
        ],
      },
      {
        id: "rpa-enrollment",
        title: "RPA para matricula de mais de 60 mil alunos",
        description:
          "Automacao de processo de matricula academica de alta escala usando RPA. O processo manual era propenso a erros e nao escalava para o volume exigido. A solucao automatizou etapas criticas do fluxo, reduziu erros operacionais e viabilizou o processamento do volume total sem intervencao humana por etapa.",
        technologies: [
          "C#",
          ".NET",
          "RPA",
          "SQL Server",
          "Azure",
          "REST APIs",
        ],
      },
    ],
  },
  "en-US": {
    eyebrow: "Projects",
    title: "Selected projects",
    description:
      "Projects developed with a focus on real problems, technical solutions, and concrete outcomes.",
    items: [
      {
        id: "async-notifications",
        title: "Asynchronous notification system",
        description:
          "Decoupled notification solution using Azure Service Bus and Azure SignalR. The goal was to eliminate synchronous coupling between services and ensure reliable real-time message delivery to the client, even under partial system failures.",
        technologies: [
          "C#",
          ".NET",
          "ASP.NET Core",
          "Azure Service Bus",
          "Azure SignalR",
          "Azure Functions",
          "SQL Server",
        ],
      },
      {
        id: "dotnet-observability",
        title: "Observability for .NET applications",
        description:
          "Implemented an observability stack in existing .NET applications without rewriting them. Used OpenTelemetry for distributed tracing, Serilog for structured logging, and Grafana with Loki for visualization and alerting. Drastically reduced incident investigation time.",
        technologies: [
          "C#",
          ".NET",
          "OpenTelemetry",
          "Serilog",
          "Prometheus",
          "Grafana",
          "Loki",
          "Application Insights",
          "Docker",
        ],
      },
      {
        id: "rpa-enrollment",
        title: "RPA for enrolling over 60,000 students",
        description:
          "High-scale academic enrollment process automation using RPA. The manual process was error-prone and could not scale to the required volume. The solution automated critical flow steps, reduced operational errors, and enabled full-volume processing without human intervention per step.",
        technologies: [
          "C#",
          ".NET",
          "RPA",
          "SQL Server",
          "Azure",
          "REST APIs",
        ],
      },
    ],
  },
};
