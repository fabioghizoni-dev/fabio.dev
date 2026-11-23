import { DEFAULT_LANGUAGE, dict, resolveLanguage, type Language } from "@/i18n";

const readPath = (value: unknown, path: string): unknown =>
  path.split(".").reduce<unknown>((current, key) => {
    if (!current || typeof current !== "object") return undefined;
    return (current as Record<string, unknown>)[key];
  }, value);

const getTranslation = (
  language: Language,
  path: string,
): string | undefined => {
  const value =
    readPath(dict[language], path) ??
    readPath(dict[DEFAULT_LANGUAGE], path) ??
    readPath(dict.en, path);

  return typeof value === "string" ? value : undefined;
};

export const applyLanguage = (value?: string): void => {
  const language = resolveLanguage(value ?? localStorage.getItem("site:lang"));
  const dictionary = dict[language];

  document.documentElement.lang = language;
  document.documentElement.dataset.language = language;
  localStorage.setItem("site:lang", language);

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((element) => {
    const translation = getTranslation(language, element.dataset.i18n ?? "");
    if (translation) element.textContent = translation;
  });

  document
    .querySelectorAll<HTMLElement>("[data-i18n-attr]")
    .forEach((element) => {
      const pairs = element.dataset.i18nAttr?.split("|") ?? [];
      pairs.forEach((pair) => {
        const [attribute, path] = pair.split(":");
        if (!attribute || !path) return;
        const translation = getTranslation(language, path);
        if (translation) element.setAttribute(attribute, translation);
      });
    });

  document
    .querySelectorAll<HTMLInputElement>("[data-language-input]")
    .forEach((input) => {
      input.value = language;
    });

  window.dispatchEvent(
    new CustomEvent("site:language-applied", { detail: dictionary }),
  );
};

const initializeLanguage = (): void => applyLanguage();

document.addEventListener("DOMContentLoaded", initializeLanguage, {
  once: true,
});
document.addEventListener("astro:page-load", initializeLanguage);
window.addEventListener("site:language-change", (event) => {
  const language = (event as CustomEvent<string>).detail;
  applyLanguage(language);
});

if (document.readyState !== "loading") initializeLanguage();
