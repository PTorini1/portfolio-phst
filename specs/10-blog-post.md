# Spec 10 — Página de Artigo

## Objetivo
Renderizar artigos Markdown em uma página dedicada.

## Rota
`/blog/:slug`

## Suporte
- headings;
- parágrafos;
- listas;
- links;
- imagens;
- tabelas;
- blockquotes;
- código;
- syntax highlighting;
- inline code.

## Cabeçalho
Mostrar:
- título;
- descrição;
- data;
- tags;
- tempo estimado de leitura.

## Conteúdo
Limitar largura para leitura confortável.

## Navegação
Adicionar:
- voltar ao blog;
- artigo anterior;
- próximo artigo.

## Segurança
Não permitir HTML arbitrário inseguro sem sanitização adequada.

## Critérios de aceite
Um artigo técnico com blocos de C#, JSON e comandos shell deve renderizar corretamente em desktop e mobile.
