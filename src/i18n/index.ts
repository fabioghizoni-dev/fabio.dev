import fs from "fs";
import path from "path";

const dir = path.resolve("src/i18n");

const jsonFiles = fs.readdirSync(dir).filter(f => f.endsWith(".json"));

export const languages = jsonFiles.map(f => f.replace(".json", ""));

export const dictionaries: Record<string, any> = {};

for (const file of jsonFiles) {
  const code = file.replace(".json", "");
  const content = JSON.parse(
    fs.readFileSync(path.join(dir, file), "utf8")
  );
  dictionaries[code] = content;
}
