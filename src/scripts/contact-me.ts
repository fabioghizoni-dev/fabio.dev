import { actions } from "astro:actions";
import c from "clogs.ts";
import { initModal } from "./modal";

addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector<HTMLFormElement>("#contact-form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      const result = await actions.send(formData);

      c.log(result);
    });
  }
  initModal("modal-success-email", false);
});
