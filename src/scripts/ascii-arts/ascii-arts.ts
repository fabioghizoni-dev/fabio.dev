import { bar, keywords, letters } from "./letters";

let current: number = 0;
let controller: AbortController | null = null;

const barEl: HTMLElement | null = document.getElementById("bar");

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** @param {HTMLElement} elKeywords - HTML element in which words will alternate. */
export function keywordAlternate(
  elKeywords: HTMLElement | null = document.getElementById("keywords"),
) {
  if (!elKeywords) return;

  current = (current + 1) % keywords.length;
  elKeywords.textContent = keywords[current];

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
  words: string[] = ["WELCOME", "TALK?", "WORLD!"],
  id: string = "ascii-art",
  delay: number = 300,
  pause: number = 1500,
) {
  const elAscii = document.getElementById(id);
  if (!elAscii) return;

  if (controller) controller.abort();
  controller = new AbortController();
  const signal = controller.signal;

  if (!barEl) return;

  try {
    while (true) {
      for (const word of words) {
        barEl.textContent = bar.str;
        if (signal.aborted) return;

        if (matchMedia("(max-width: 768px)").matches) {
          elAscii.textContent = word;
          await sleep(delay);
        } else {
          barEl.textContent = bar.ascii;
          const current = Array(6).fill("");

          for (const char of word.toLowerCase()) {
            if (signal.aborted) return;

            const block = letters[char];
            if (!block) continue;

            for (let i = 0; i < 6; i++) {
              current[i] += block[i] + " ";
            }

            elAscii.textContent = current.join("\n");
            await sleep(delay);
          }
        }

        await sleep(pause);
        keywordAlternate();
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
}
