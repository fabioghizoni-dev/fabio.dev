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
const x = ["██╗  ██╗", "╚██╗██╔╝", " ╚███╔╝ ", " ██╔██╗ ", "██╔╝ ██╗", "╚═╝  ╚═╝"];
const z = ["███████╗", "╚══███╔╝", "  ███╔╝ ", " ███╔╝  ", "███████╗", "╚══════╝"];
const slash = ["    ██╗", "   ██╔╝", "  ██╔╝ ", " ██╔╝  ", "██╔╝   ", "╚═╝    "];
const question = ["██████╗ ", "╚════██╗", "  ▄███╔╝", "  ▀▀══╝ ", "  ██╗   ", "  ╚═╝   "];
const dash = ["        ", "        ", "███████╗", "╚══════╝", "        ", "        "];
const space = ["     ", "     ", "     ", "     ", "     ", "     "];
const point = ["   ", "   ", "   ", "   ", "██╗", "╚═╝"];
const parenthesis_left = ["  ██╗", " ██╔╝", " ██║ ", " ██║ ", " ╚██╗", "  ╚═╝"];
const parenthesis_right = ["██╗  ", "╚██╗ ", " ██║ ", " ██║ ", "██╔╝ ", "╚═╝  "];

export const bar = ["█╗", "█║", "█║", "█║", "█║", "█║", "╚╝"].join("\n");

let current = 0;
const letters = {
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
  x,
  z,
  "-": dash,
  ".": point,
  "/": slash,
  " ": space,
  "?": question,
  "(": parenthesis_left,
  ")": parenthesis_right,
};
export const keywords = ["Seja", "Vamos"];
export const fabio = f
  .map((_, y) => `${c[y]} ${o[y]} ${n[y]} ${v[y]} ${e[y]} ${r[y]} ${s[y]} ${a[y]} ${r[y]}`)
  .join("\n");

/**
 * @param {HTMLElement} elKeywords - Elemento HTML em que as palavras vão alternar
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
 * @param {string[]} words - Lista de palavras para alternar na animação.
 * @param {string} id - ID do elemento HTML onde a animação será exibida.
 * @param {number} delay - Tempo (em ms) entre cada letra sendo "digitada".
 * @param {number} pause - Tempo (em ms) de pausa após a palavra ser exibida.
 */
export async function animateAsciiText(
  words = ["BEM VINDO(A)", "CONVERSAR?"],
  id = "ascii-art",
  delay = 300,
  pause = 1500
) {
  const elAscii = document.getElementById(id);

  if (!elAscii) {
    console.error(`Elemento não existe ou não foi renderizado, id:${id}`);
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
