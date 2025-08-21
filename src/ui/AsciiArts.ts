const a = [" █████╗ ", "██╔══██╗", "███████║", "██╔══██║", "██║  ██║", "╚═╝  ╚═╝"];
const b = ["██████╗ ", "██╔══██╗", "██████╔╝", "██╔══██╗", "██████╔╝", "╚═════╝ "];
const c = [" ██████╗ ", "██╔════╝ ", "██║      ", "██║      ", "╚██████╗ ", " ╚═════╝ "];
const d = ["██████╗ ", "██╔══██╗", "██║  ██║", "██║  ██║", "██████╔╝", "╚═════╝ "];
const e = ["███████╗", "██╔════╝", "█████╗  ", "██╔══╝  ", "███████╗", "╚══════╝"];
const f = ["███████╗", "██╔════╝", "█████╗  ", "██╔══╝  ", "██║     ", "╚═╝     "];
const g = [" ██████╗ ", "██╔════╝ ", "██║  ███╗", "██║   ██║", "╚██████╔╝", " ╚═════╝ "];
const h = ["██╗  ██╗", "██║  ██║", "███████║", "██╔══██║", "██║  ██║", "╚═╝  ╚═╝"];
const i = ["██╗", "██║", "██║", "██║", "██║", "╚═╝"];
const k = ["██╗  ██╗", "██║ ██╔╝", "█████╔╝ ", "██╔═██╗ ", "██║  ██╗", "╚═╝  ╚═╝"];
const l = ["██╗     ", "██║     ", "██║     ", "██║     ", "███████╗", "╚══════╝"];
const m = ["███╗   ███╗", "████╗ ████║", "██╔████╔██║", "██║╚██╔╝██║", "██║ ╚═╝ ██║", "╚═╝     ╚═╝"];
const n = ["███╗   ██╗", "████╗  ██║", "██╔██╗ ██║", "██║╚██╗██║", "██║ ╚████║", "╚═╝  ╚═══╝"];
const o = [" ██████╗ ", "██╔═══██╗", "██║   ██║", "██║   ██║", "╚██████╔╝", " ╚═════╝ "];
const p = ["██████╗ ", "██╔══██╗", "██████╔╝", "██╔═══╝ ", "██║     ", "╚═╝     "];
const q = [" ██████╗ ", "██╔═══██╗", "██║   ██║", "██║▄▄ ██║", "╚██████╔╝", " ╚══▀▀═╝ "];
const r = ["██████╗ ", "██╔══██╗", "██████╔╝", "██╔══██╗", "██║  ██║", "╚═╝  ╚═╝"];
const s = ["███████╗", "██╔════╝", "███████╗", "╚════██║", "███████║", "╚══════╝"];
const t = ["████████╗", "╚══██╔══╝", "   ██║   ", "   ██║   ", "   ██║   ", "   ╚═╝   "];
const u = ["██╗   ██╗", "██║   ██║", "██║   ██║", "██║   ██║", "╚██████╔╝", " ╚═════╝ "];
const v = ["██╗   ██╗", "██║   ██║", "██║   ██║", "╚██╗ ██╔╝", " ╚████╔╝ ", "  ╚═══╝  "];
const w = ["██╗    ██╗", "██║    ██║", "██║ █╗ ██║", "██║███╗██║", "╚███╔███╔╝", " ╚══╝╚══╝ "];
const x = ["██╗  ██╗", "╚██╗██╔╝", " ╚███╔╝ ", " ██╔██╗ ", "██╔╝ ██╗", "╚═╝  ╚═╝"];
const z = ["███████╗", "╚══███╔╝", "  ███╔╝ ", " ███╔╝  ", "███████╗", "╚══════╝"];
const slash = ["    ██╗", "   ██╔╝", "  ██╔╝ ", " ██╔╝  ", "██╔╝   ", "╚═╝    "];
const question = ["██████╗ ", "╚════██╗", "  ▄███╔╝", "  ▀▀══╝ ", "  ██╗   ", "  ╚═╝   "];
const exclamation = ["██╗", "██║", "██║", "╚═╝", "██╗", "╚═╝"];
const dash = ["        ", "        ", "███████╗", "╚══════╝", "        ", "        "];
const space = ["     ", "     ", "     ", "     ", "     ", "     "];
const point = ["   ", "   ", "   ", "   ", "██╗", "╚═╝"];
const parenthesis_left = ["  ██╗", " ██╔╝", " ██║ ", " ██║ ", " ╚██╗", "  ╚═╝"];
const parenthesis_right = ["██╗  ", "╚██╗ ", " ██║ ", " ██║ ", "██╔╝ ", "╚═╝  "];

export const bar = ["█╗", "█║", "█║", "█║", "█║", "█║", "╚╝"].join("\n");

let current = 0;
const letters: Record<string, string[]> = {
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  s,
  t,
  u,
  v,
  w,
  x,
  z,
  "-": dash,
  ".": point,
  "/": slash,
  " ": space,
  "?": question,
  "!": exclamation,
  "(": parenthesis_left,
  ")": parenthesis_right,
};
export const keywords = ["Be", "Let's", "Hello"];
export const fabio = f
  .map((_, y) => `${c[y]} ${o[y]} ${n[y]} ${v[y]} ${e[y]} ${r[y]} ${s[y]} ${a[y]} ${r[y]}`)
  .join("\n");

/**
 * @param {HTMLElement} elKeywords - HTML element in which words will alternate.
 */
export function keywordAlternate(elKeywords = document.getElementById("keywords")) {
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
  words = ["WELCOME", "TALK?", "WORLD!"],
  id = "ascii-art",
  delay = 300,
  pause = 1500
) {
  const elAscii = document.getElementById(id);

  if (!elAscii) {
    console.error(`Element does not exist or was not rendered, id:${id}`);
    return;
  }

  while (true) {
    for (const word of words) {
      let current = Array(6).fill("");
      const chars = word.toLowerCase().split("");

      for (const char of chars) {
        const block = letters[char];
        if (!block) continue;

        for (let i = 0; i < 6; i++) {
          current[i] += block[i] + " ";
        }

        elAscii.textContent = "";
        elAscii.textContent = current.join("\n");
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      await new Promise((resolve) => setTimeout(resolve, pause));
      elAscii.textContent = "";
      keywordAlternate();
    }
  }
}
