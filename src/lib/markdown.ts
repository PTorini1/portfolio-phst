import { marked } from "marked";
import hljs from "highlight.js/lib/core";
import csharp from "highlight.js/lib/languages/csharp";
import json from "highlight.js/lib/languages/json";
import bash from "highlight.js/lib/languages/bash";
import sql from "highlight.js/lib/languages/sql";
import yaml from "highlight.js/lib/languages/yaml";
import typescript from "highlight.js/lib/languages/typescript";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";

// Registrar apenas as linguagens necessárias (reduz bundle)
hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("json", json);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("shell", bash);
hljs.registerLanguage("sql", sql);
hljs.registerLanguage("yaml", yaml);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("html", xml);

// Configurar marked com syntax highlighting via highlight.js
marked.use({
  renderer: {
    code({ text, lang }) {
      const language = lang && hljs.getLanguage(lang) ? lang : null;
      const highlighted = language
        ? hljs.highlight(text, { language }).value
        : hljs.highlightAuto(text).value;
      const langClass = language ? ` language-${language}` : "";
      return `<pre><code class="hljs${langClass}">${highlighted}</code></pre>`;
    },
  },
});

/**
 * Remove tags e atributos potencialmente perigosos do HTML gerado.
 * O conteúdo vem exclusivamente de arquivos do repositório,
 * então esta sanitização leve é suficiente para o cenário de uso.
 */
function sanitize(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/\s+on\w+="[^"]*"/gi, "")
    .replace(/\s+on\w+='[^']*'/gi, "");
}

/** Converte Markdown em HTML sanitizado. Síncrono. */
export function renderMarkdown(body: string): string {
  const html = marked.parse(body, { async: false }) as string;
  return sanitize(html);
}
