import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

export const removeSpaces = (str: string): string => str.replace(/\s+/g, " ").trim();

export const normalizeRoute = (file: string): string => {
  return (
    (
      file
        .replace(/^\.+/, "")
        .replace("index", "")
        .replace("/src/pages", "")
        .replace(/\.(astro|md|mdx|jsx|tsx)$/, "")
        .replace(/\/index\.(astro|md|mdx|jsx|tsx)$/, "") || "/"
    ).replace(/\/$/, "") || "/"
  );
};