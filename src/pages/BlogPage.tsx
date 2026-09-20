import { Section } from "../components/Section";

export function BlogPage() {
  return (
    <Section eyebrow="Blog" title="Artigos tecnicos">
      <p className="lead-text">
        Em breve, artigos em Markdown sobre .NET, Azure, arquitetura e
        investigacao de problemas reais.
      </p>
    </Section>
  );
}
