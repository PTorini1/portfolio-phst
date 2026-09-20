import { useEffect } from "react";
import { useLocale } from "../i18n/locale";

export type SeoProps = {
  title: string;
  description: string;
  type?: "website" | "article";
  path?: string;
  publishedTime?: string;
  tags?: string[];
};

const SITE_NAME = "Pedro Torini";
const BASE_URL = "https://www.phstorini.dev";

function setMetaTag(attributeName: "name" | "property", attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setLinkRel(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export function useSeo({
  title,
  description,
  type = "website",
  path = "",
  publishedTime,
  tags = [],
}: SeoProps) {
  const { locale } = useLocale();

  useEffect(() => {
    // 1. Atualizar title
    const fullTitle = path === "" || path === "/" ? `${SITE_NAME} | ${title}` : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    // 2. Atualizar atributo lang do HTML
    document.documentElement.lang = locale;

    // 3. Meta description
    setMetaTag("name", "description", description);

    // 4. Canonical link
    const canonicalUrl = `${BASE_URL}${path}`;
    setLinkRel("canonical", canonicalUrl);

    // 5. Open Graph
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", type);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:locale", locale === "pt-BR" ? "pt_BR" : "en_US");

    // 6. Twitter Cards
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);

    // 7. Artigo específico (quando aplicável)
    if (type === "article") {
      if (publishedTime) {
        setMetaTag("property", "article:published_time", publishedTime);
      }
      if (tags.length > 0) {
        setMetaTag("property", "article:tag", tags.join(", "));
      }
    }
  }, [title, description, type, path, publishedTime, tags, locale]);
}
