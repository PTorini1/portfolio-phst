import { profile } from "./profile";
import type { Locale } from "../types/content";
import type { ContactContent } from "../types/contact";

export const contactContent: Record<Locale, ContactContent> = {
  "pt-BR": {
    eyebrow: "Contato",
    title: "Vamos conversar",
    message:
      "Disponivel para conversas sobre desenvolvimento backend, arquitetura, projetos e oportunidades. Entre em contato pelo LinkedIn ou email.",
    channels: [
      {
        id: "linkedin",
        label: "LinkedIn",
        value: profile.linkedInUrl.replace(/^https?:\/\//, ""),
        href: profile.linkedInUrl,
        external: true,
      },
      {
        id: "github",
        label: "GitHub",
        value: profile.githubUrl.replace(/^https?:\/\//, ""),
        href: profile.githubUrl,
        external: true,
      },
      {
        id: "email",
        label: "Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
        external: false,
      },
    ],
  },
  "en-US": {
    eyebrow: "Contact",
    title: "Let's talk",
    message:
      "Available for conversations about backend development, architecture, projects, and opportunities. Reach out via LinkedIn or email.",
    channels: [
      {
        id: "linkedin",
        label: "LinkedIn",
        value: profile.linkedInUrl.replace(/^https?:\/\//, ""),
        href: profile.linkedInUrl,
        external: true,
      },
      {
        id: "github",
        label: "GitHub",
        value: profile.githubUrl.replace(/^https?:\/\//, ""),
        href: profile.githubUrl,
        external: true,
      },
      {
        id: "email",
        label: "Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
        external: false,
      },
    ],
  },
};
