import c from "clogs.ts";

() => {
  try {
    const savedLang = localStorage.getItem("site:lang") || "en";
    document.documentElement.lang = savedLang;
    c.log(`🌐 Language initialized: ${savedLang}`);
  } catch (err) {
    c.warn("Error initializing language:", err);
  }
}