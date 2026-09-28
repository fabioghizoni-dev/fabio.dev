import { actions } from "astro:actions";
import { defaultLogger as logger } from "clogs.ts";
import { initModal } from "./modal";

addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector<HTMLFormElement>("#contact-form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      const result = await actions.send(formData);

      logger.Log(result);
    });
  }
  initModal("modal-success-email", false);
});
