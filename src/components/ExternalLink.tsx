import type { ReactNode } from "react";

type ExternalLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
  label?: string;
  hideArrow?: boolean;
};

export function ExternalLink({
  children,
  href,
  className,
  label,
  hideArrow = false,
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
      {!hideArrow && <span aria-hidden="true">↗</span>}
    </a>
  );
}
