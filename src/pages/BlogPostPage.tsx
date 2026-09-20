import { useParams } from "react-router-dom";
import { Section } from "../components/Section";

export function BlogPostPage() {
  const { slug } = useParams();

  return (
    <Section eyebrow="Artigo" title="Post em preparacao">
      <p className="lead-text">
        O artigo <strong>{slug}</strong> ainda sera carregado a partir de um
        arquivo Markdown.
      </p>
    </Section>
  );
}
