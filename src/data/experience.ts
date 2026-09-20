import type { Locale } from "../types/content";
import type { ExperienceContent } from "../types/experience";

export const experienceContent: Record<Locale, ExperienceContent> = {
  "pt-BR": {
    eyebrow: "Experiência",
    title: "Trajetória profissional",
    description:
      "Atuação focada em engenharia de software backend, arquitetura de mensageria assíncrona, observabilidade, cloud Azure e automação de processos de alta escala.",
    items: [
      {
        role: "Desenvolvedor de Software",
        company: "Sesi São Paulo",
        period: "Dez 2024 — o momento",
        description:
          "Desenvolvimento de arquiteturas assíncronas, observabilidade centralizada, componentes de interface e microsserviços integrados a serviços de nuvem da Microsoft.",
        responsibilities: [
          "Desenvolvi uma arquitetura de mensageria assíncrona utilizando Azure Service Bus, Azure Functions e SignalR, permitindo notificações em tempo real baseadas em permissões.",
          "Implementei observabilidade com Serilog, OpenTelemetry e Grafana, centralizando logs, métricas e tracing para monitoramento e troubleshooting.",
          "Desenvolvi uma solução de RPA para automatizar a matrícula de mais de 60 mil alunos em cursos complementares.",
          "Integrei Azure Cache for Redis e Azure Cosmos DB, contribuindo para a escalabilidade e desempenho da aplicação.",
          "Implementei Azure Key Vault para gerenciamento seguro e centralizado de secrets.",
          "Implementei PBAC (Permission-Based Access Control), aprimorando o controle de acesso da aplicação.",
          "Otimizei queries utilizando Dapper, aumentando em aproximadamente 50% o desempenho de operações complexas.",
          "Desenvolvi um componente de árvore hierárquica com ordenação (sortable tree) em Blazor, permitindo o gerenciamento dinâmico de estruturas complexas.",
        ],
        technologies: [
          "C#",
          ".NET",
          "Azure Service Bus",
          "Azure Functions",
          "Azure SignalR",
          "Serilog",
          "OpenTelemetry",
          "Grafana",
          "Azure Cache for Redis",
          "Azure Cosmos DB",
          "Azure Key Vault",
          "Dapper",
          "Blazor",
          "RPA",
        ],
      },
      {
        role: "Trainee de TI",
        company: "Sesi São Paulo",
        period: "Fev 2024 — Nov 2024",
        description:
          "Atuação full-stack em ecossistema .NET, prototipação ágil de interfaces e desenvolvimento de soluções com Inteligência Artificial Generativa e processamento documental em nuvem.",
        responsibilities: [
          "Atuei no desenvolvimento full-stack utilizando C#, ASP.NET MVC, .NET Framework, SQL Server e Docker.",
          "Projetei e implementei soluções conversacionais baseadas em IA utilizando Azure OpenAI, Cosmos DB, Microsoft Entra ID e LangChain, contribuindo para decisões de arquitetura e integração com serviços em nuvem.",
          "Processei mais de 200 documentos utilizando Python, Azure AI Document Intelligence e Azure AI Search, extraindo e classificando informações para melhorar a performance das buscas e reduzir chamadas subsequentes a serviços Azure e seus custos.",
          "Desenvolvi protótipos de interfaces no Figma e trabalhei com metodologias Scrum e Kanban, utilizando Azure DevOps.",
        ],
        technologies: [
          "C#",
          "ASP.NET MVC",
          ".NET Framework",
          "SQL Server",
          "Docker",
          "Azure OpenAI",
          "LangChain",
          "Python",
          "Azure AI Search",
          "Azure AI Document Intelligence",
          "Microsoft Entra ID",
          "Azure DevOps",
          "Figma",
        ],
      },
      {
        role: "Desenvolvedor de Software",
        company: "Grupo Krona — Gerenciamento de Riscos",
        period: "Mar 2022 — Jan 2024",
        description:
          "Manutenção e evolução de sistemas corporativos de gerenciamento de risco, padronização da arquitetura MVC e desenvolvimento de funcionalidades full-stack.",
        responsibilities: [
          "Contribuí para a manutenção e evolução de sistemas, desenvolvendo novas funcionalidades, telas interativas, regras de negócio e correções de bugs críticos.",
          "Melhorei a organização e escalabilidade do código por meio da padronização de arquivos na arquitetura MVC.",
          "Atuei no desenvolvimento full-stack utilizando PHP, jQuery, MySQL e HTML.",
          "Desenvolvi soluções eficientes e de fácil manutenção, seguindo boas práticas de desenvolvimento.",
        ],
        technologies: [
          "PHP",
          "MySQL",
          "jQuery",
          "MVC",
          "HTML",
          "Git",
        ],
      },
      {
        role: "Assistente Administrativo (Aprendiz)",
        company: "Indústria de Móveis Bartira Ltda",
        period: "Fev 2021 — Dez 2021",
        description:
          "Automação e análise de dados operacionais para apoio ao controle financeiro e planejamento da manutenção fabril.",
        responsibilities: [
          "Desenvolvi dashboards em Excel para análise financeira, controle de estoque e planejamento da manutenção fabril.",
        ],
        technologies: [
          "Excel",
          "Análise de Dados",
          "Dashboards",
        ],
      },
    ],
  },
  "en-US": {
    eyebrow: "Experience",
    title: "Professional background",
    description:
      "Proven track record in backend software engineering, asynchronous messaging architectures, observability, Azure cloud services, and high-scale process automation.",
    items: [
      {
        role: "Software Developer",
        company: "Sesi São Paulo",
        period: "Dec 2024 — present",
        description:
          "Building asynchronous messaging architectures, centralized observability, UI components, and microservices integrated with Microsoft Azure cloud services.",
        responsibilities: [
          "Architected and built an asynchronous messaging solution using Azure Service Bus, Azure Functions, and SignalR, enabling permission-based real-time notifications.",
          "Implemented observability with Serilog, OpenTelemetry, and Grafana, centralizing logs, metrics, and tracing for proactive monitoring and troubleshooting.",
          "Developed an RPA automation solution processing enrollment for over 60,000 students in supplementary academic courses.",
          "Integrated Azure Cache for Redis and Azure Cosmos DB, improving application throughput, responsiveness, and scalability.",
          "Implemented Azure Key Vault for secure, centralized configuration and secrets management.",
          "Implemented PBAC (Permission-Based Access Control), strengthening enterprise application access control.",
          "Optimized complex database queries with Dapper, increasing the execution performance of critical operations by approximately 50%.",
          "Engineered a hierarchical sortable tree component in Blazor for dynamic management of complex nested entities.",
        ],
        technologies: [
          "C#",
          ".NET",
          "Azure Service Bus",
          "Azure Functions",
          "Azure SignalR",
          "Serilog",
          "OpenTelemetry",
          "Grafana",
          "Azure Cache for Redis",
          "Azure Cosmos DB",
          "Azure Key Vault",
          "Dapper",
          "Blazor",
          "RPA",
        ],
      },
      {
        role: "IT Trainee",
        company: "Sesi São Paulo",
        period: "Feb 2024 — Nov 2024",
        description:
          "Full-stack development across the .NET ecosystem, rapid interface prototyping, and researching/implementing cloud-native generative AI and document intelligence solutions.",
        responsibilities: [
          "Engineered full-stack features using C#, ASP.NET MVC, .NET Framework, SQL Server, and Docker.",
          "Architected and developed conversational AI solutions leveraging Azure OpenAI, Cosmos DB, Microsoft Entra ID, and LangChain.",
          "Extracted, classified, and indexed 200+ enterprise documents using Python, Azure AI Document Intelligence, and Azure AI Search, optimizing search latency and reducing downstream Azure service costs.",
          "Prototyped UI designs in Figma and delivered features under Scrum and Kanban agile methodologies using Azure DevOps.",
        ],
        technologies: [
          "C#",
          "ASP.NET MVC",
          ".NET Framework",
          "SQL Server",
          "Docker",
          "Azure OpenAI",
          "LangChain",
          "Python",
          "Azure AI Search",
          "Azure AI Document Intelligence",
          "Microsoft Entra ID",
          "Azure DevOps",
          "Figma",
        ],
      },
      {
        role: "Software Developer",
        company: "Grupo Krona — Risk Management",
        period: "Mar 2022 — Jan 2024",
        description:
          "Sustained and scaled enterprise risk management systems, drove MVC code standardization, and delivered end-to-end full-stack capabilities.",
        responsibilities: [
          "Contributed to systems maintenance and feature evolution, designing interactive screens, business logic, and critical bug fixes.",
          "Standardized codebase organization and structure according to the MVC pattern to enhance maintainability.",
          "Engineered full-stack features utilizing PHP, jQuery, MySQL, and HTML.",
          "Built clean, maintainable solutions adhering to established software engineering best practices.",
        ],
        technologies: [
          "PHP",
          "MySQL",
          "jQuery",
          "MVC",
          "HTML",
          "Git",
        ],
      },
      {
        role: "Administrative Assistant (Apprentice)",
        company: "Indústria de Móveis Bartira Ltda",
        period: "Feb 2021 — Dec 2021",
        description:
          "Data analysis and operations support for inventory management, financial metrics, and factory maintenance planning.",
        responsibilities: [
          "Developed advanced Excel dashboards for financial evaluation, stock control, and manufacturing maintenance planning.",
        ],
        technologies: [
          "Excel",
          "Data Analysis",
          "Dashboards",
        ],
      },
    ],
  },
};
