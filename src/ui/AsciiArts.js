const a = [" █████╗ ", "██╔══██╗", "███████║", "██╔══██║", "██║  ██║", "╚═╝  ╚═╝"];
const b = ["██████╗ ", "██╔══██╗", "██████╔╝", "██╔══██╗", "██████╔╝", "╚═════╝ "];
const c = [" ██████╗ ", "██╔════╝ ", "██║      ", "██║      ", "╚██████╗ ", " ╚═════╝ "];
const f = ["███████╗", "██╔════╝", "█████╗  ", "██╔══╝  ", "██║     ", "╚═╝     "];
const g = [" ██████╗ ", "██╔════╝ ", "██║  ███╗", "██║   ██║", "╚██████╔╝", " ╚═════╝ "];
const h = ["██╗  ██╗", "██║  ██║", "███████║", "██╔══██║", "██║  ██║", "╚═╝  ╚═╝"];
const i = ["██╗", "██║", "██║", "██║", "██║", "╚═╝"];
const k = ["██╗  ██╗", "██║ ██╔╝", "█████╔╝ ", "██╔═██╗ ", "██║  ██╗", "╚═╝  ╚═╝"];
const l = ["██╗     ", "██║     ", "██║     ", "██║     ", "███████╗", "╚══════╝"];
const n = ["███╗   ██╗", "████╗  ██║", "██╔██╗ ██║", "██║╚██╗██║", "██║ ╚████║", "╚═╝  ╚═══╝"];
const o = [" ██████╗ ", "██╔═══██╗", "██║   ██║", "██║   ██║", "╚██████╔╝", " ╚═════╝ "];
const s = ["███████╗", "██╔════╝", "███████╗", "╚════██║", "███████║", "╚══════╝"];
const t = ["████████╗", "╚══██╔══╝", "   ██║   ", "   ██║   ", "   ██║   ", "   ╚═╝   "];
const u = ["██╗   ██╗", "██║   ██║", "██║   ██║", "██║   ██║", "╚██████╔╝", " ╚═════╝ "];
const z = ["███████╗", "╚══███╔╝", "  ███╔╝ ", " ███╔╝  ", "███████╗", "╚══════╝"];
const dash = ["        ", "        ", "███████╗", "╚══════╝", "        ", "        "];
const space = ["     ", "     ", "     ", "     ", "     ", "     "];

export const barArt = ["█╗", "█║", "█║", "█║", "█║", "█║", "╚╝"].join("\n");

let current = 0;
const letters = { a, b, c, f, g, h, i, k, l, n, o, s, t, u, z, "-": dash, " ": space };
export const keywords = ["Meu nome é", "Eu sou um dev"];
export const fabioArt = f.map((_, y) => `${f[y]} ${a[y]} ${b[y]} ${i[y]} ${o[y]}`).join("\n");

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
export async function animateTyping(
  words = ["FABIO GHIZONI", "FULL-STACK"],
  id = "asciiArt",
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
      const chars = word.toLowerCase().split("");
      let current = Array(6).fill("");

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
