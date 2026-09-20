import { Link } from "react-router-dom";
import { Section } from "../components/Section";

export function NotFoundPage() {
  return (
    <Section eyebrow="404" title="Pagina nao encontrada">
      <p>O conteudo solicitado ainda nao existe neste portfolio.</p>
      <Link to="/">Voltar para o inicio</Link>
    </Section>
  );
}
