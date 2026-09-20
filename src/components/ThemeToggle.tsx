import { useEffect, useState } from "react";
import { useLocale } from "../i18n/locale";

type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const { locale } = useLocale();

  // Ouve mudanças na preferência do sistema se o usuário não definiu uma escolha manual
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        const newTheme: Theme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.dataset.theme = newTheme;
        document.documentElement.style.colorScheme = newTheme;
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  const isDark = theme === "dark";
  const nextTheme: Theme = isDark ? "light" : "dark";

  const label =
    locale === "pt-BR"
      ? `Ativar tema ${nextTheme === "dark" ? "escuro" : "claro"}`
      : `Switch to ${nextTheme} mode`;

  return (
    <button
      className="icon-button"
      type="button"
      aria-label={label}
      title={label}
      onClick={toggleTheme}
    >
      <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
    </button>
  );
}
