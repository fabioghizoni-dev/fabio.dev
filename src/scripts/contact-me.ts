import { actions } from "astro:actions";
import c from "clogs.ts";
import { ready } from "../constants";
import { initModal } from "./modal";

if (ready) document.addEventListener("DOMContentLoaded",
  () => {
    const form = document.getElementById("contact-form")!;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form as HTMLFormElement);

      const result = await actions.send(formData);

      c.log(result);
    });
    initModal("modal-success-email", false);
  }
);