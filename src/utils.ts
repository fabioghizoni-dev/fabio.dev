import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const googleFontsUrl = (url: "googleapis" | "gstatic" = "googleapis") =>
  `https://fonts.${url}.com`;

export default function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

export const removeSpaces = (str: string): string =>
  str.replace(/\s+/g, " ").trim();

/** `/src/pages/qr/index.astro` -> `/qr`; `/src/pages/index.astro` -> `/`. */
export const normalizeRoute = (file: string): string => {
  const route = file
    .replace(/^.*\/src\/pages/, "")
    .replace(/\.(astro|md|mdx|jsx|tsx)$/, "")
    .replace(/\/index$/, "");

  return route || "/";
};
