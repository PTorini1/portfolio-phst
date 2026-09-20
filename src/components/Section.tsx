import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
};

export function Section({ children, className, eyebrow, title }: SectionProps) {
  const titleId = title
    ? `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title`
    : undefined;

  return (
    <section className={["section", className].filter(Boolean).join(" ")} aria-labelledby={titleId}>
      <Container>
        {(eyebrow || title) && (
          <header className="section-header">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h1 id={titleId}>{title}</h1>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
