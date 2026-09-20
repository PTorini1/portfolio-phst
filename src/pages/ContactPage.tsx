import { ExternalLink } from "../components/ExternalLink";
import { Section } from "../components/Section";
import { profile } from "../data/profile";

export function ContactPage() {
  return (
    <Section eyebrow="Contato" title="Vamos conversar">
      <div className="stack">
        <p className="lead-text">
          Canais principais para conversas sobre desenvolvimento, arquitetura e
          projetos.
        </p>
        <div className="link-list">
          <ExternalLink href={profile.linkedInUrl}>LinkedIn</ExternalLink>
          <ExternalLink href={profile.githubUrl}>GitHub</ExternalLink>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>
    </Section>
  );
}
