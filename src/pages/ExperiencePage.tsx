import { Badge } from "../components/Badge";
import { Section } from "../components/Section";
import { experienceContent } from "../data/experience";
import { useLocale } from "../i18n/locale";
import { useSeo } from "../hooks/useSeo";

export function ExperiencePage() {
  const { locale } = useLocale();
  const content = experienceContent[locale];

  useSeo({
    title: content.eyebrow,
    description: content.description,
    path: "/experience",
  });

  const ariaResponsibilities =
    locale === "pt-BR" ? "Responsabilidades" : "Responsibilities";
  const ariaTechnologies =
    locale === "pt-BR" ? "Tecnologias" : "Technologies";

  return (
    <Section eyebrow={content.eyebrow} title={content.title}>
      <p className="lead-text">{content.description}</p>
      <ol className="experience-list">
        {content.items.map((item) => (
          <li className="experience-item" key={`${item.role}-${item.company}-${item.period}`}>
            <div className="experience-header">
              <h3 className="experience-role">{item.role}</h3>
              <p className="experience-meta">
                <span className="experience-company">{item.company}</span>
                <span className="experience-separator" aria-hidden="true">·</span>
                <span className="experience-period">{item.period}</span>
              </p>
            </div>
            <p className="experience-description">{item.description}</p>
            <ul className="experience-responsibilities" aria-label={ariaResponsibilities}>
              {item.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <div className="experience-tech" aria-label={ariaTechnologies}>
              <div className="badge-list">
                {item.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
