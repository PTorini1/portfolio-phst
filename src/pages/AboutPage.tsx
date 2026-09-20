import { Badge } from "../components/Badge";
import { ExternalLink } from "../components/ExternalLink";
import { Section } from "../components/Section";
import { aboutContent } from "../data/about";
import { profile } from "../data/profile";
import { useLocale } from "../i18n/locale";
import { translations } from "../i18n/translations";

export function AboutPage() {
  const { locale } = useLocale();
  const content = aboutContent[locale];
  const t = translations[locale];

  return (
    <>
      <Section eyebrow={content.eyebrow} title={content.title}>
        <div className="prose-block">
          {content.introduction.map((paragraph) => (
            <p className="lead-text" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section className="section--compact">
        <div className="section-heading-row">
          <p className="eyebrow">{t.eyebrowTechnical}</p>
          <h2>{content.technicalTitle}</h2>
        </div>
        <div className="feature-grid">
          {content.technicalExperience.map((item) => (
            <article className="feature-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="section--compact">
        <div className="split-layout">
          <div>
            <p className="eyebrow">{t.eyebrowInterests}</p>
            <h2>{content.interestsTitle}</h2>
          </div>
          <div className="badge-list" aria-label={content.interestsTitle}>
            {content.interests.map((interest) => (
              <Badge key={interest}>{interest}</Badge>
            ))}
          </div>
        </div>
      </Section>

      <Section className="section--compact">
        <div className="split-layout">
          <div>
            <p className="eyebrow">{t.eyebrowContact}</p>
            <h2>{content.linksTitle}</h2>
          </div>
          <div className="link-list">
            <ExternalLink href={profile.linkedInUrl} label="LinkedIn">
              LinkedIn
            </ExternalLink>
            <ExternalLink href={profile.githubUrl} label="GitHub">
              GitHub
            </ExternalLink>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>
      </Section>
    </>
  );
}
