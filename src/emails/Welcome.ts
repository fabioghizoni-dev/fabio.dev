const escapeHtml = (value: string): string =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character] ?? character,
  );

export default function getHtml(
  name: string,
  email: string,
  message: string,
): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  return `
<section style="width: 100%; padding: 2rem; box-sizing: border-box; font-family: Inter, Arial, sans-serif; letter-spacing: -0.03em;">
  <div style="margin: 0 auto; max-width: 36rem; padding: 2rem; border-radius: 0.5rem; background-color: oklch(99% 0 0); box-shadow: 0 0.25rem 0.5rem oklch(0% 0 0 / 0.1);">
    <h1 style="display: flex; align-items: center; gap: 1rem; font-size: 1.25rem; margin-bottom: 1rem; color: oklch(25% 0 0); font-weight: bolder;">
      <img
        src="https://portfolio-fabio-main.vercel.app/logo_neon.png"
        alt="Logo do site de Fábio Ghizoni"
        width="80"
        height="80"
        style="width: 5rem; height: auto;"
      />
      Novo contato pelo site
    </h1>
    <p style="font-size: 1rem; line-height: 1.5; color: oklch(30% 0 0); margin: 0.5rem 0;">
      <span style="font-weight: bold;">Nome:</span>
      ${safeName}
    </p>
    <p style="font-size: 1rem; line-height: 1.5; color: oklch(30% 0 0); margin: 0.5rem 0;">
      <span style="font-weight: bold;">Email:</span>
      ${safeEmail}
    </p>
    <div style="margin-top: 1rem; padding: 1rem; background-color: oklch(97% 0 0); border-radius: 0.25rem; white-space: pre-line;">
      ${safeMessage}
    </div>
  </div>
</section>
  `;
}
