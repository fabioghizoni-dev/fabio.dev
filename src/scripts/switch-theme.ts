type Theme = "dark" | "light";

const STORAGE_KEY = "site:theme";
const root = document.documentElement;
const prefersLight = window.matchMedia("(prefers-color-scheme: light)");

const getStoredTheme = (): Theme | null => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
};

const setupTheme = (): void => {
  const button = document.getElementById("btn-theme");
  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");

  if (!button || !sun || !moon || button.dataset.initialized) return;
  button.dataset.initialized = "true";

  const applyTheme = (theme: Theme, animate: boolean = false): void => {
    root.dataset.theme = theme;
    button.setAttribute("aria-pressed", String(theme === "dark"));

    const active = theme === "dark" ? moon : sun;
    const inactive = theme === "dark" ? sun : moon;

    inactive.classList.add("hidden");
    inactive.classList.remove("animate-show");

    active.classList.remove("hidden");
    active.classList.remove("animate-show");

    if (animate) {
      void active.offsetWidth;
      active.classList.add("animate-show");
    }
  };

  const initial =
    getStoredTheme() ?? (root.dataset.theme === "light" ? "light" : "dark");

  applyTheme(initial);

  button.addEventListener("click", () => {
    const next: Theme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next, true);

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* Storage can be unavailable in private mode. */
    }
  });

  prefersLight.addEventListener("change", (event) => {
    if (getStoredTheme()) return;
    applyTheme(event.matches ? "light" : "dark");
  });
};

addEventListener("DOMContentLoaded", setupTheme);
addEventListener("astro:page-load", setupTheme);

if (document.readyState !== "loading") setupTheme();
