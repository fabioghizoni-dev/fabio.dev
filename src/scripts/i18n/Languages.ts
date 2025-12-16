import fs from "fs";
import path from "path";

const dir = "./src/i18n/";
const files = fs.readdirSync(dir);

const jsonFiles = files.filter(f => f.endsWith(".json"));
export const languages = jsonFiles.map(f => f.replace(".json", ""));

export const jsons = jsonFiles.map(f => {
  const filePath = path.join(dir, f);
  const content = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return { code: f.replace(".json", ""), content };
});

export const dictionaries: Record<string, any> = {};
jsons.forEach(({ code, content }) => dictionaries[code] = content);

export function t(keyPath: string, lang: string = "en"): string {
  try {
    const dict = dictionaries[lang] || dictionaries["en"];

    if (!dict) {
      console.warn(`Idioma '${lang}' não encontrado. Usando inglês.`);
      return keyPath;
    }

    // Navega através do objeto usando a notação de ponto
    let value = dict;
    const keys = keyPath.split(".");

    for (const key of keys) {
      if (value && typeof value === "object" && key in value) {
        value = value[key];
      } else {
        console.warn(`Chave '${keyPath}' não encontrada em '${lang}'.`);
        return keyPath;
      }
    }

    return typeof value === "string" ? value : keyPath;
  } catch (error) {
    console.error(`Erro ao traduzir '${keyPath}' para '${lang}':`, error);
    return keyPath;
  }
}

export function buildLanguages(): Array<{ code: string; name: string }> {
  return jsons.map(({ code, content }) => ({
    code,
    name: content.name || code.toUpperCase(),
  }));
}

export function setLang(lang: string): boolean {
  try {
    if (typeof window !== "undefined") {
      localStorage.setItem("site:lang", lang);
      return true;
    }
    return false;
  } catch (error) {
    console.error("Erro ao salvar idioma:", error);
    return false;
  }
}

export function getLang(): string {
  try {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("site:lang");
      if (saved && dictionaries[saved]) {
        return saved;
      }
    }

    // Tenta usar o idioma do navegador
    if (typeof navigator !== "undefined") {
      const lang = navigator.language.split("-")[0];
      if (dictionaries[lang]) {
        return lang;
      }
    }

    return "en";
  } catch (error) {
    console.error("Erro ao obter idioma:", error);
    return "en";
  }
}

/**
 * Inicializa o sistema de idiomas
 * Define o idioma na página
 */
export function initI18n(): void {
  try {
    const currentLang = getLang();
    if (typeof document !== "undefined") {
      document.documentElement.lang = currentLang;
    }
  } catch (error) {
    console.error("Erro ao inicializar i18n:", error);
  }
}