import { dict } from "@/i18n";

type Language = keyof typeof dict;

const DEFAULT_LANGUAGE: Language = "pt-BR";

const getTranslation = (language: Language, path: string): string | undefined => {
  const read = (value: unknown): unknown =>
    path.split(".").reduce<unknown>((current, key) => {
      if (!current || typeof current !== "object") return undefined;
      return (current as Record<string, unknown>)[key];
    }, value);

  const value = read(dict[language]) ?? read(dict[DEFAULT_LANGUAGE]) ?? read(dict.en);
  return typeof value === "string" ? value : undefined;
};

const resolveLanguage = (value: string | null): Language =>
  value && value in dict ? (value as Language) : DEFAULT_LANGUAGE;

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

  document.querySelectorAll<HTMLElement>("[data-i18n-attr]").forEach((element) => {
    const pairs = element.dataset.i18nAttr?.split("|") ?? [];
    pairs.forEach((pair) => {
      const [attribute, path] = pair.split(":");
      const translation = getTranslation(language, path);
      if (attribute && translation) element.setAttribute(attribute, translation);
    });
  });

  document.querySelectorAll<HTMLInputElement>("[data-language-input]").forEach((input) => {
    input.value = language;
  });

  window.dispatchEvent(new CustomEvent("site:language-applied", { detail: dictionary }));
};

const initializeLanguage = (): void => applyLanguage();

document.addEventListener("DOMContentLoaded", initializeLanguage, { once: true });
document.addEventListener("astro:page-load", initializeLanguage);
window.addEventListener("site:language-change", (event) => {
  const language = (event as CustomEvent<string>).detail;
  applyLanguage(language);
});

if (document.readyState !== "loading") initializeLanguage();
