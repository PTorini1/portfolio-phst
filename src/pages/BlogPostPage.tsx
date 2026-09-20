import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "../components/Badge";
import { Container } from "../components/Container";
import { useLocale } from "../i18n/locale";
import { translations } from "../i18n/translations";
import { renderMarkdown } from "../lib/markdown";
import { getAllPosts, getPostBySlug } from "../lib/posts";
import { useSeo } from "../hooks/useSeo";

function formatDate(dateStr: string, locale: string): string {
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLocale();
  const t = translations[locale];

  const post = useMemo(
    () => (slug ? getPostBySlug(slug, locale) : null),
    [slug, locale]
  );

  useSeo({
    title: post ? post.meta.title : t.postNotFound,
    description: post?.meta.description ?? "",
    type: "article",
    path: slug ? `/blog/${slug}` : "/blog",
    publishedTime: post?.meta.date,
    tags: post?.meta.tags ?? [],
  });

  const allPosts = useMemo(() => getAllPosts(locale), [locale]);

  const currentIndex = useMemo(
    () => allPosts.findIndex((p) => p.slug === slug),
    [allPosts, slug]
  );

  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  if (!post) {
    return (
      <section className="section">
        <Container>
          <Link className="post-back" to="/blog">{t.postBackToBlog}</Link>
          <p className="lead-text">{t.postNotFound}</p>
        </Container>
      </section>
    );
  }

  const { meta, body } = post;
  const html = renderMarkdown(body);

  return (
    <section className="section">
      <Container>
        <nav className="post-back-nav" aria-label="Navegacao do artigo">
          <Link className="post-back" to="/blog">{t.postBackToBlog}</Link>
        </nav>

        <header className="post-article-header">
          <p className="eyebrow">
            <time dateTime={meta.date}>{formatDate(meta.date, locale)}</time>
            <span aria-hidden="true"> · </span>
            <span>{meta.readingTime} {t.blogReadingTime}</span>
          </p>
          <h1>{meta.title}</h1>
          {meta.description && (
            <p className="post-article-description">{meta.description}</p>
          )}
          {meta.tags.length > 0 && (
            <div className="post-tags badge-list" aria-label={t.postTags}>
              {meta.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          )}
        </header>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <nav className="post-nav" aria-label="Artigos adjacentes">
          <div className="post-nav-prev">
            {prevPost && (
              <Link to={`/blog/${prevPost.slug}`}>
                <span className="post-nav-label">{t.postPrevious}</span>
                <span className="post-nav-title">{prevPost.title}</span>
              </Link>
            )}
          </div>
          <div className="post-nav-next">
            {nextPost && (
              <Link to={`/blog/${nextPost.slug}`}>
                <span className="post-nav-label">{t.postNext}</span>
                <span className="post-nav-title">{nextPost.title}</span>
              </Link>
            )}
          </div>
        </nav>
      </Container>
    </section>
  );
}
