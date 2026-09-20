import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const storageKey = "portfolio-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(storageKey);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      className="icon-button"
      type="button"
      aria-label={`Ativar tema ${nextTheme === "light" ? "claro" : "escuro"}`}
      title={`Tema ${theme === "light" ? "claro" : "escuro"}`}
      onClick={() => setTheme(nextTheme)}
    >
      <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
    </button>
  );
}
