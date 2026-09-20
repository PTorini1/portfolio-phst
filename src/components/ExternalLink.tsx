import type { ReactNode } from "react";

type ExternalLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
  label?: string;
};

export function ExternalLink({
  children,
  href,
  className,
  label,
}: ExternalLinkProps) {
  return (
    <a
      className={className}
      href={href}
      rel="noreferrer"
      target="_blank"
      aria-label={`${label ?? "Link externo"} - abre em nova aba`}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
