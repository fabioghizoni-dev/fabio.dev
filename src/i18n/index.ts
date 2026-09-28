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

// Helper type to get the structure from English
export type EnDict = typeof en;

export const languages = [
  "en",
  "pt",
  "de",
  "es",
  "fr",
  "hi",
  "ja",
  "ko",
  "ru",
  "zh",
];

export const dict: Record<string, EnDict> = {
  en,
  pt,
  de,
  es,
  fr,
  hi,
  ja,
  ko,
  ru,
  zh,
} as const;
