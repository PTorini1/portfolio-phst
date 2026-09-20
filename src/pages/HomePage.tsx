import { ButtonLink } from "../components/ButtonLink";
import { Container } from "../components/Container";
import { ExternalLink } from "../components/ExternalLink";
import { homeContent } from "../data/home";
import { profile } from "../data/profile";

export function HomePage() {
  const content = homeContent["pt-BR"];

  return (
    <>
      <section className="hero-section" aria-labelledby="home-title">
        <Container className="hero-content">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 id="home-title">{content.title}</h1>
          <p className="hero-summary">{content.summary}</p>
          <div className="hero-actions">
            <ButtonLink to="/experience">{content.primaryCta}</ButtonLink>
            <ButtonLink to="/blog" variant="secondary">
              {content.secondaryCta}
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              {content.tertiaryCta}
            </ButtonLink>
          </div>
          <div className="hero-links" aria-label="Links profissionais">
            <ExternalLink href={profile.linkedInUrl} label="LinkedIn">
              LinkedIn
            </ExternalLink>
            <ExternalLink href={profile.githubUrl} label="GitHub">
              GitHub
            </ExternalLink>
          </div>
        </Container>
      </section>

      <section className="section section--compact" aria-labelledby="home-focus-title">
        <Container>
          <div className="section-heading-row">
            <p className="eyebrow">Resumo</p>
            <h2 id="home-focus-title">{content.competenciesTitle}</h2>
          </div>
          <div className="feature-grid">
            {content.competencies.map((item) => (
              <article className="feature-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--compact" aria-labelledby="home-next-title">
        <Container>
          <div className="section-heading-row">
            <p className="eyebrow">Caminhos</p>
            <h2 id="home-next-title">{content.nextTitle}</h2>
          </div>
          <div className="feature-grid">
            {content.nextItems.map((item) => (
              <article className="feature-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
