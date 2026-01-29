const modules = import.meta.glob<{ default: any }>("./*.json", { eager: true });

export const languages: string[] = Object.keys(modules).map((filePath) =>
  filePath.split("/").pop()!.replace(".json", ""),
);

export const dict = Object.fromEntries(
  Object.entries(modules).map(([path, module]) => {
    const lang = path.split("/").pop()!.replace(".json", "");
    return [lang, module?.default];
  }),
);
