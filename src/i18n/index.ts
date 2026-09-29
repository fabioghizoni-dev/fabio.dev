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

export type PtDict = typeof pt;

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
];

export const dict: Record<string, PtDict> = {
  en,
  pt,
  "pt-BR": pt,
  de,
  es,
  fr,
  hi,
  ja,
  ko,
  ru,
  zh,
} as const;
