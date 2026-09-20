import type { Locale } from "../types/content";
import type { PostMeta } from "../types/blog";

// Carrega todos os arquivos .md de src/content/posts/ em tempo de build via Vite.
// O sufixo ?raw retorna o conteúdo como string, sem precisar de plugin externo.
const modules = import.meta.glob("../content/posts/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

/**
 * Faz parse manual do frontmatter YAML delimitado por "---".
 * Suporta strings, arrays simples (- item) e sem dependências externas.
 */
export function parseFrontmatter(raw: string): {
  frontmatter: Record<string, unknown>;
  body: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: raw };

  const [, yamlBlock, body] = match;
  const frontmatter: Record<string, unknown> = {};
  let currentKey: string | null = null;
  let currentArray: string[] | null = null;

  for (const line of yamlBlock.split(/\r?\n/)) {
    const arrayItem = line.match(/^ {2}- (.+)$/);
    if (arrayItem && currentKey && Array.isArray(currentArray)) {
      currentArray.push(arrayItem[1].trim());
      continue;
    }

    const keyValue = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*):\s*"?([^"]*)"?\s*$/);
    if (keyValue) {
      if (currentKey && currentArray) {
        frontmatter[currentKey] = currentArray;
      }
      currentKey = keyValue[1];
      const value = keyValue[2].trim();
      if (value === "") {
        currentArray = [];
      } else {
        currentArray = null;
        frontmatter[currentKey] = value;
      }
    }
  }

  if (currentKey && currentArray) {
    frontmatter[currentKey] = currentArray;
  }

  return { frontmatter, body: body.trim() };
}

/** Estima o tempo de leitura em minutos (média de 200 palavras/min). */
export function estimateReadingTime(body: string): number {
  const words = body.trim().split(/\s{1,}/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/** Retorna os metadados de todos os posts de um locale, ordenados do mais recente. */
export function getAllPosts(locale: Locale): PostMeta[] {
  const posts: PostMeta[] = [];

  for (const [, raw] of Object.entries(modules)) {
    if (typeof raw !== "string") continue;

    const { frontmatter, body } = parseFrontmatter(raw);
    if (frontmatter["lang"] !== locale) continue;

    posts.push({
      title: String(frontmatter["title"] ?? ""),
      description: String(frontmatter["description"] ?? ""),
      date: String(frontmatter["date"] ?? ""),
      tags: Array.isArray(frontmatter["tags"])
        ? (frontmatter["tags"] as string[])
        : [],
      slug: String(frontmatter["slug"] ?? ""),
      lang: String(frontmatter["lang"] ?? ""),
      readingTime: estimateReadingTime(body),
    });
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
