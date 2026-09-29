import { applyLanguage } from "./i18n";

export const setupLanguageSwitcher = (): void => {
  const btnLang = document.getElementById("btn-lang");
  const listLangs = document.getElementById("list-langs");
  if (listLangs && btnLang && !btnLang.dataset.initialized) {
    btnLang.dataset.initialized = "true";
    let isOpen = false;
    const selectedLanguage = localStorage.getItem("site:lang") || "pt-BR";
    const languageButtons = listLangs.querySelectorAll<HTMLButtonElement>("[data-language]");

    const updateSelected = (language: string): void => {
      languageButtons.forEach((button) => {
        const isSelected = button.dataset.language === language;
        button.classList.toggle("bg-purple-blue", isSelected);
        button.classList.toggle("text-white", isSelected);
        button.setAttribute("aria-current", isSelected ? "true" : "false");
      });
    };

    const show = () => {
      isOpen = true;
      btnLang.setAttribute("aria-expanded", "true");
      listLangs.classList.remove("max-h-0", "invisible", "opacity-0");
      listLangs.classList.add("max-h-96", "opacity-100");
    };
    const hide = () => {
      isOpen = false;
      btnLang.setAttribute("aria-expanded", "false");
      listLangs.classList.add("max-h-0", "invisible", "opacity-0");
      listLangs.classList.remove("max-h-96", "opacity-100");
    };
    const toggle = () => {
      isOpen ? hide() : show();
    };

    updateSelected(selectedLanguage);
    btnLang.addEventListener("click", toggle);

    languageButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const language = button.dataset.language;
        if (!language) return;
        localStorage.setItem("site:lang", language);
        updateSelected(language);
        applyLanguage(language);
        hide();
      });
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (isOpen && target instanceof Element && !target.closest("#btn-lang, #list-langs")) hide();
    });
  }
};

addEventListener("DOMContentLoaded", setupLanguageSwitcher);
addEventListener("astro:page-load", setupLanguageSwitcher);

if (document.readyState !== "loading") setupLanguageSwitcher();
