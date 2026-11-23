import { actions } from "astro:actions";
import { defaultLogger as logger } from "clogs.ts";
import { initModal, showModal } from "./modal";

const MODAL_ID = "modal-success-email";

const setupContactForm = (): void => {
  const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
  if (!form || form.dataset.initialized) return;
  form.dataset.initialized = "true";

  initModal(MODAL_ID, false);

  const status = document.getElementById("contact-status");
  const submit = form.querySelector<HTMLButtonElement>("[data-contact-submit]");

  const setStatus = (message: string, isError: boolean): void => {
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("text-red-300", isError);
    status.classList.toggle("text-white/80", !isError);
  };

  if (form.dataset.submitted === "true") {
    const modal = document.getElementById(MODAL_ID);
    if (modal) showModal(modal, false);
    form.dataset.submitted = "false";
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    setStatus("", false);
    submit?.setAttribute("aria-busy", "true");
    if (submit) submit.disabled = true;

    try {
      const result = await actions.send(new FormData(form));

      if (result.error) {
        throw new Error(result.error.message);
      }

      if (!result.data?.success) {
        throw new Error("Não foi possível enviar a mensagem.");
      }

      form.reset();

      const languageInput = form.querySelector<HTMLInputElement>(
        "[data-language-input]",
      );
      if (languageInput) {
        languageInput.value = document.documentElement.lang || "pt-BR";
      }

      const modal = document.getElementById(MODAL_ID);
      if (modal) showModal(modal, false);
    } catch (error) {
      logger.Error("Contact form failed:", error);
      setStatus(
        error instanceof Error
          ? error.message
          : "Erro ao enviar a mensagem. Tente novamente.",
        true,
      );
    } finally {
      submit?.removeAttribute("aria-busy");
      if (submit) submit.disabled = false;
    }
  });
};

addEventListener("DOMContentLoaded", setupContactForm);
addEventListener("astro:page-load", setupContactForm);

if (document.readyState !== "loading") setupContactForm();
