import { letters } from "./letters";
import { dict } from "@/i18n";

type AsciiSequence = (typeof dict.en.ascii.sequences)[number];

let current: number = 0;
let controller: AbortController | null = null;
let activeLanguage = localStorage.getItem("site:lang") || "pt-BR";

const getSequences = (language: string): AsciiSequence[] =>
  dict[language]?.ascii.sequences ?? dict["pt-BR"].ascii.sequences;

let activeSequence = getSequences(activeLanguage);

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** @param {HTMLElement} elKeywords - HTML element in which words will alternate. */
export function keywordAlternate(
  elKeywords: HTMLElement | null = document.getElementById("keywords"),
) {
  if (!elKeywords) return;

  const sequence = activeSequence[current % activeSequence.length];
  elKeywords.textContent = sequence.keyword;

  elKeywords.classList.remove("animate-blur");
  void elKeywords.offsetWidth;
  elKeywords.classList.add("animate-blur");
}

/**
 * @param {string[]} words - List of words to toggle in the animation.
 * @param {string} id - ID of the HTML element where the animation will be displayed.
 * @param {number} delay - Time (in ms) between each letter being "typed".
 * @param {number} pause - Time (in ms) of pause after the word is displayed.
 */
export async function animateAsciiText(
  words: string[] = activeSequence.map(({ word }) => word),
  id: string = "ascii-art",
  delay: number = 300,
  pause: number = 1500,
) {
  const elAscii = document.getElementById(id);
  if (!elAscii) return;

  if (controller) controller.abort();
  controller = new AbortController();
  const signal = controller.signal;


  try {
    while (true) {
      for (let index = 0; index < words.length; index++) {
        const word = words[index];
        current = index;
        keywordAlternate();
        if (signal.aborted) return;
        const rows = Array(6).fill("");

        for (const char of word.toLowerCase()) {
          if (signal.aborted) return;

          const block = letters[char];
          if (!block) continue;

          for (let i = 0; i < 6; i++) {
            rows[i] += block[i];
          }

          elAscii.textContent = rows.join("\n");
          await sleep(delay);
        }

        await sleep(pause);
      }
    }
  } catch (_) {}
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  animateAsciiText();

  let resizeTimer: number | undefined;

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => animateAsciiText(), 200);
  });

  const updateAsciiLanguage = (language?: string): void => {
    activeLanguage = language || document.documentElement.lang || "pt-BR";
    activeSequence = getSequences(activeLanguage);
    current = 0;
    keywordAlternate();
    void animateAsciiText();
  };

  window.addEventListener("site:language-change", (event) => {
    updateAsciiLanguage((event as CustomEvent<string>).detail);
  });
  window.addEventListener("site:language-applied", () => updateAsciiLanguage());
  window.addEventListener("astro:page-load", () => animateAsciiText());
}
