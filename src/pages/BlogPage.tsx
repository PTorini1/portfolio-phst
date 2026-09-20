import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../components/Badge";
import { Section } from "../components/Section";
import { useLocale } from "../i18n/locale";
import { translations } from "../i18n/translations";
import { getAllPosts } from "../lib/posts";

function formatDate(dateStr: string, locale: string): string {
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function BlogPage() {
  const { locale } = useLocale();
  const t = translations[locale];
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allPosts = useMemo(() => getAllPosts(locale), [locale]);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    allPosts.forEach((p) => p.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }, [allPosts]);

  const visiblePosts = useMemo(
    () =>
      activeTag
        ? allPosts.filter((p) => p.tags.includes(activeTag))
        : allPosts,
    [activeTag, allPosts]
  );

  return (
    <Section eyebrow={locale === "pt-BR" ? "Blog" : "Blog"} title={locale === "pt-BR" ? "Artigos tecnicos" : "Technical articles"}>
      <p className="lead-text">
        {locale === "pt-BR"
          ? "Artigos sobre .NET, Azure, arquitetura e investigacao de problemas reais de engenharia de software."
          : "Articles on .NET, Azure, architecture, and real engineering problem investigation."}
      </p>

      {allTags.length > 0 && (
        <div className="tag-filter" role="group" aria-label={t.blogTagsLabel}>
          <button
            className={`tag-filter-btn${activeTag === null ? " is-active" : ""}`}
            type="button"
            onClick={() => setActiveTag(null)}
          >
            {t.blogAllTags}
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
        <p className="blog-empty">{t.blogNoResults}</p>
      ) : (
        <ol className="post-list">
          {visiblePosts.map((post) => (
            <li className="post-item" key={post.slug}>
              <Link className="post-link" to={`/blog/${post.slug}`}>
                <article>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-description">{post.description}</p>
                  <div className="post-meta">
                    <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
                    <span className="post-meta-separator" aria-hidden="true">·</span>
                    <span>{post.readingTime} {t.blogReadingTime}</span>
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
