import { Badge } from "../components/Badge";
import { ExternalLink } from "../components/ExternalLink";
import { Section } from "../components/Section";
import { projectsContent } from "../data/projects";
import { useLocale } from "../i18n/locale";

export function ProjectsPage() {
  const { locale } = useLocale();
  const content = projectsContent[locale];

  return (
    <Section eyebrow={content.eyebrow} title={content.title}>
      <p className="lead-text">{content.description}</p>
      <ol className="project-list">
        {content.items.map((project) => (
          <li className="project-item" key={project.id}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="badge-list" aria-label="Tecnologias">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
            {(project.githubUrl || project.demoUrl || project.relatedPostSlug) && (
              <div className="project-links">
                {project.githubUrl && (
                  <ExternalLink href={project.githubUrl} label="GitHub">
                    GitHub
                  </ExternalLink>
                )}
                {project.demoUrl && (
                  <ExternalLink href={project.demoUrl} label="Demo">
                    Demo
                  </ExternalLink>
                )}
                {project.relatedPostSlug && (
                  <a href={`/blog/${project.relatedPostSlug}`}>
                    Ver artigo relacionado
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
