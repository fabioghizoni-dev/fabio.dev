import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { hi } from "./hi";
import { ja } from "./ja";
import { ko } from "./ko";
import { pt } from "./pt";
import { ru } from "./ru";
import { zh } from "./zh";

/** Shape of a complete dictionary. `pt` is the source of truth. */
export type PtDict = typeof pt;

/**
 * Locales are allowed to translate only part of the dictionary. Anything
 * missing falls back to Portuguese and then English at runtime, so adding a
 * new key never requires touching ten files at once.
 */
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends readonly unknown[]
    ? T[K]
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

export const DEFAULT_LANGUAGE = "pt-BR" as const;

export const languages = [
  "pt-BR",
  "en",
  "de",
  "es",
  "fr",
  "hi",
  "ja",
  "ko",
  "ru",
  "zh",
] as const;

export type Language = (typeof languages)[number];

export const dict: Record<Language, DeepPartial<PtDict>> = {
  "pt-BR": pt,
  en,
  de,
  es,
  fr,
  hi,
  ja,
  ko,
  ru,
  zh,
};

export const isLanguage = (value: unknown): value is Language =>
  typeof value === "string" && (languages as readonly string[]).includes(value);

export const resolveLanguage = (value?: string | null): Language =>
  isLanguage(value) ? value : DEFAULT_LANGUAGE;

/** Dictionary for a resolved locale (never throws for unknown languages). */
export const getDictionary = (language?: string | null): DeepPartial<PtDict> =>
  dict[resolveLanguage(language)];
