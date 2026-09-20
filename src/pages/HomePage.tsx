import { ButtonLink } from "../components/ButtonLink";
import { Container } from "../components/Container";
import { profile } from "../data/profile";

export function HomePage() {
  return (
    <section className="hero-section" aria-labelledby="home-title">
      <Container className="hero-content">
        <p className="eyebrow">{profile.role}</p>
        <h1 id="home-title">{profile.name}</h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <ButtonLink to="/projects">Ver projetos</ButtonLink>
          <ButtonLink to="/blog" variant="secondary">
            Ler blog
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
