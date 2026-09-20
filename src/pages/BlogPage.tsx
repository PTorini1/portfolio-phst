import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../components/Badge";
import { Section } from "../components/Section";
import { getAllPosts } from "../lib/posts";

const allPosts = getAllPosts("pt-BR");

function formatDate(dateStr: string): string {
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function BlogPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    allPosts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, []);

  const visiblePosts = useMemo(
    () =>
      activeTag
        ? allPosts.filter((p) => p.tags.includes(activeTag))
        : allPosts,
    [activeTag]
  );

  return (
    <Section eyebrow="Blog" title="Artigos tecnicos">
      <p className="lead-text">
        Artigos sobre .NET, Azure, arquitetura e investigacao de problemas reais
        de engenharia de software.
      </p>

      {allTags.length > 0 && (
        <div className="tag-filter" role="group" aria-label="Filtrar por tag">
          <button
            className={`tag-filter-btn${activeTag === null ? " is-active" : ""}`}
            type="button"
            onClick={() => setActiveTag(null)}
          >
            Todos
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`tag-filter-btn${activeTag === tag ? " is-active" : ""}`}
              type="button"
              aria-pressed={activeTag === tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {visiblePosts.length === 0 ? (
        <p className="blog-empty">
          Nenhum artigo encontrado para esta tag.
        </p>
      ) : (
        <ol className="post-list">
          {visiblePosts.map((post) => (
            <li className="post-item" key={post.slug}>
              <Link className="post-link" to={`/blog/${post.slug}`}>
                <article>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-description">{post.description}</p>
                  <div className="post-meta">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="post-meta-separator" aria-hidden="true">·</span>
                    <span>{post.readingTime} min de leitura</span>
                  </div>
                  {post.tags.length > 0 && (
                    <div className="post-tags badge-list" aria-label="Tags">
                      {post.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  )}
                </article>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </Section>
  );
}
