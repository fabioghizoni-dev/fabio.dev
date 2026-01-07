const modules = import.meta.glob("./*.json", { eager: true });

export const languages = Object.keys(modules).map((filePath) =>
  filePath
    .split("/")
    .pop()!
    .replace(".json", "")
);

export const jsons = Object.entries(modules).map(([filePath, mod]) => {
  const code = filePath
    .split("/")
    .pop()!
    .replace(".json", "");

  return {
    code,
    content: (mod as any).default,
  };
});

