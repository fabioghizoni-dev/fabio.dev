import { applyLanguage } from "./i18n";

const getStoredLanguage = (): string | null => {
  try {
    return localStorage.getItem("site:lang");
  } catch {
    return null;
  }
};

export const setupLanguageSwitcher = (): void => {
  const button = document.getElementById("btn-lang");
  const list = document.getElementById("list-langs");

  if (!button || !list || button.dataset.initialized) return;
  button.dataset.initialized = "true";

  const options = Array.from(
    list.querySelectorAll<HTMLButtonElement>("[data-language]"),
  );
  const languageCodes = options
    .map((option) => option.dataset.language)
    .filter((language): language is string => Boolean(language));

  let isOpen = false;

  const selectedLanguage = (): string =>
    getStoredLanguage() ?? document.documentElement.lang ?? "pt-BR";

  const updateSelected = (language: string): void => {
    options.forEach((option) => {
      const isSelected = option.dataset.language === language;
      option.classList.toggle("bg-purple-blue", isSelected);
      option.classList.toggle("text-white", isSelected);
      option.setAttribute("aria-current", isSelected ? "true" : "false");
    });
  };

  const changeLanguage = (language: string): void => {
    if (!languageCodes.includes(language)) return;
    try {
      localStorage.setItem("site:lang", language);
    } catch {
      /* Storage can be unavailable in private mode. */
    }
    updateSelected(language);
    applyLanguage(language);
  };

  const show = (): void => {
    isOpen = true;
    button.setAttribute("aria-expanded", "true");
    list.classList.remove("max-h-0", "invisible", "opacity-0");
    list.classList.add("max-h-96", "opacity-100");

    const current = options.find(
      (option) => option.dataset.language === selectedLanguage(),
    );
    (current ?? options[0])?.focus();
  };

  const hide = (returnFocus: boolean = false): void => {
    isOpen = false;
    button.setAttribute("aria-expanded", "false");
    list.classList.add("max-h-0", "invisible", "opacity-0");
    list.classList.remove("max-h-96", "opacity-100");

    if (returnFocus) button.focus();
  };

  const toggle = (): void => {
    isOpen ? hide(true) : show();
  };

  const moveFocus = (direction: 1 | -1): void => {
    const currentIndex = options.indexOf(
      document.activeElement as HTMLButtonElement,
    );
    const nextIndex =
      (currentIndex + direction + options.length) % options.length;
    options[nextIndex]?.focus();
  };

  updateSelected(selectedLanguage());

  button.addEventListener("click", toggle);

  button.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!isOpen) show();
    }
  });

  list.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        moveFocus(1);
        break;
      case "ArrowUp":
        event.preventDefault();
        moveFocus(-1);
        break;
      case "Home":
        event.preventDefault();
        options[0]?.focus();
        break;
      case "End":
        event.preventDefault();
        options[options.length - 1]?.focus();
        break;
      case "Escape":
        event.preventDefault();
        hide(true);
        break;
    }
  });

  list.addEventListener("focusout", (event) => {
    if (!isOpen) return;

    const next = event.relatedTarget as Node | null;
    if (next && (list.contains(next) || next === button)) return;

    hide();
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const language = option.dataset.language;
      if (!language) return;
      changeLanguage(language);
      hide(true);
    });
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (
      isOpen &&
      target instanceof Element &&
      !target.closest("#btn-lang, #list-langs")
    ) {
      hide();
    }
  });
};

addEventListener("DOMContentLoaded", setupLanguageSwitcher);
addEventListener("astro:page-load", setupLanguageSwitcher);

if (document.readyState !== "loading") setupLanguageSwitcher();
