---
title: "[EXEMPLO] Observabilidade em .NET com OpenTelemetry"
description: "[CONTEUDO GENERICO PARA TESTE] Segundo post de exemplo para validar rendering de codigo, tabelas e blockquotes."
date: "2026-09-18"
tags:
  - .NET
  - Observabilidade
  - OpenTelemetry
slug: "observabilidade-dotnet-opentelemetry"
lang: "pt-BR"
---

> ⚠️ **Este é um post de exemplo gerado para fins de teste. O conteúdo abaixo é genérico e deve ser substituído pelo artigo real antes da publicação.**

## Contexto

Adicionar observabilidade em aplicacoes .NET existentes sem reescrever o codigo. Este post cobre a configuracao basica de OpenTelemetry com exportacao para Prometheus e Grafana.

## Configuracao basica

Instalar os pacotes necessarios:

```bash
dotnet add package OpenTelemetry.Extensions.Hosting
dotnet add package OpenTelemetry.Instrumentation.AspNetCore
dotnet add package OpenTelemetry.Exporter.Prometheus.AspNetCore
```

Registrar no `Program.cs`:

```csharp
builder.Services.AddOpenTelemetry()
    .WithTracing(tracing =>
    {
        tracing
            .AddAspNetCoreInstrumentation()
            .AddHttpClientInstrumentation()
            .AddOtlpExporter();
    })
    .WithMetrics(metrics =>
    {
        metrics
            .AddAspNetCoreInstrumentation()
            .AddPrometheusExporter();
    });
```

## Exemplo de configuracao no appsettings.json

```json
{
  "OpenTelemetry": {
    "ServiceName": "minha-api",
    "Endpoint": "http://localhost:4317"
  }
}
```

## Comparativo de ferramentas

| Ferramenta | Traces | Metricas | Logs | Observacao |
|---|---|---|---|---|
| Application Insights | Sim | Sim | Sim | Nativo Azure |
| Grafana + Loki | Nao | Sim | Sim | Open source |
| Jaeger | Sim | Nao | Nao | Traces apenas |
| OpenTelemetry Collector | Sim | Sim | Sim | Agnostico |

## Resultado

Com essa configuracao, traces distribuidos e metricas de request estao disponiveis sem instrumentacao manual adicional.
