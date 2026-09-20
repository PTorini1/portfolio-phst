import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { ExternalLink } from "../components/ExternalLink";
import { ThemeToggle } from "../components/ThemeToggle";
import { siteNavigation } from "../data/navigation";
import { profile } from "../data/profile";
import { useLocale } from "../i18n/locale";
import { translations } from "../i18n/translations";

export function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale, setLocale } = useLocale();
  const t = translations[locale];
  const nav = siteNavigation[locale];
  const currentYear = new Date().getFullYear();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link
          className="site-brand"
          to="/"
          aria-label="Pedro Torini - inicio"
          onClick={closeMenu}
        >
          Pedro Torini
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          aria-label={isMenuOpen ? t.closeMenu : t.openMenu}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <div className={`header-panel ${isMenuOpen ? "is-open" : ""}`}>
          <nav
            id="site-navigation"
            className="site-nav"
            aria-label={t.navHome}
          >
            {nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={closeMenu}
                end={item.href === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-actions" aria-label={t.preferences}>
            <div className="language-switcher" aria-label={t.selectLanguage}>
              <button
                className={`text-button${locale === "pt-BR" ? " is-active" : ""}`}
                type="button"
                aria-pressed={locale === "pt-BR"}
                onClick={() => { setLocale("pt-BR"); closeMenu(); }}
              >
                PT
              </button>
              <button
                className={`text-button${locale === "en-US" ? " is-active" : ""}`}
                type="button"
                aria-pressed={locale === "en-US"}
                onClick={() => { setLocale("en-US"); closeMenu(); }}
              >
                EN
              </button>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container footer-content">
          <p>
            <strong>{profile.name}</strong> © {currentYear}
          </p>
          <nav className="footer-links" aria-label={t.externalLinks}>
            <ExternalLink href={profile.linkedInUrl} label="LinkedIn">
              LinkedIn
            </ExternalLink>
            <ExternalLink href={profile.githubUrl} label="GitHub">
              GitHub
            </ExternalLink>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
