export const extractLangCode = (path: string): string | null => {
  return path.match(/\/([a-z]{2})\.json$/)?.[1] ?? null;
};

export const extractVariants = (
  data: any,
  langCode: string
): Record<string, string> => {
  const variants: Record<string, string> = {};

  if (!data.variants || typeof data.variants !== "object") {
    return variants;
  }

  for (const variantCode of Object.keys(data.variants)) {
    variants[variantCode] = `${langCode}-${variantCode}`;
  }

  return variants;
};

export const buildLanguages = (
  langFiles: Record<string, any>
): Record<string, { variants: Record<string, string> }> => {
  const result: Record<string, { variants: Record<string, string> }> = {};

  for (const [path, content] of Object.entries(langFiles)) {
    const langCode = extractLangCode(path);
    if (!langCode || !content) continue;

    const variants = extractVariants(content, langCode);

    result[langCode] = { variants };
  }

  return result;
};