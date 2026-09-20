import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { ExternalLink } from "../components/ExternalLink";
import { ThemeToggle } from "../components/ThemeToggle";
import { siteNavigation } from "../data/navigation";
import { profile } from "../data/profile";

export function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <div className={`header-panel ${isMenuOpen ? "is-open" : ""}`}>
          <nav
            id="site-navigation"
            className="site-nav"
            aria-label="Navegacao principal"
          >
            {siteNavigation.map((item) => (
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
          <div className="header-actions" aria-label="Preferencias">
            <div className="language-switcher" aria-label="Selecionar idioma">
              <button className="text-button is-active" type="button" aria-pressed="true">
                PT
              </button>
              <button className="text-button" type="button" aria-pressed="false">
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
          <nav className="footer-links" aria-label="Links externos">
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
