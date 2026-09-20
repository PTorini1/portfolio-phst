# Spec 09 — Blog

## Objetivo
Criar um blog técnico baseado em arquivos Markdown, sem backend.

## Estrutura
```text
src/content/posts/
├── pt-BR/
└── en-US/
```

## Frontmatter
Cada post deve suportar:

```yaml
---
title: "Título"
description: "Descrição"
date: "2026-09-20"
tags:
  - .NET
  - Azure
slug: "slug-do-artigo"
lang: "pt-BR"
---
```

## Blog index
`/blog` deve apresentar:
- título;
- descrição;
- data;
- tags;
- tempo estimado de leitura;
- filtro/pesquisa se simples de implementar.

## Ordenação
Posts mais recentes primeiro.

## Critérios de aceite
Adicionar um `.md` válido deve fazer o artigo aparecer automaticamente na listagem após build.
