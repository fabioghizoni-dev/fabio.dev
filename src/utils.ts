import { fg, defaultLogger as logger } from "clogs.ts";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const googleFontsUrl = (url: "googleapis" | "gstatic" = "googleapis") =>
  `https://fonts.${url}.com`;

export default function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

export const removeSpaces = (str: string): string =>
  str.replace(/\s+/g, " ").trim();

export const normalizeRoute = (file: string): string => {
  const formattedFile =
    (
      file
        .replace(/^\.+/, "")
        .replace("index", "")
        .replace("/src/pages", "")
        .replace(/\.(astro|md|mdx|jsx|tsx)$/, "")
        .replace(/\/index\.(astro|md|mdx|jsx|tsx)$/, "") || "/"
    ).replace(/\/$/, "") || "/";
  logger.Log(
    `normalizeRoute(): "${file}" ${fg("yellow", "===>")} "${formattedFile}"`,
  );

  return formattedFile;
};
