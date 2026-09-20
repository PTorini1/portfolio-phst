import type { Locale } from "../types/content";
import type { NavigationItem } from "../types/navigation";

export const siteNavigation: Record<Locale, NavigationItem[]> = {
  "pt-BR": [
    { href: "/", label: "Início" },
    { href: "/about", label: "Sobre" },
    { href: "/experience", label: "Experiência" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projetos" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contato" },
  ],
  "en-US": [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
};
