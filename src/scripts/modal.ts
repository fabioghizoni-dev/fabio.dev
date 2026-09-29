import { defaultLogger as logger } from "clogs.ts";

const logAria = (modal: HTMLElement) =>
  logger.Log(
    `initModal(): Aria-hidden in element(${modal.id}): ${modal.getAttribute("aria-hidden")}`,
  );

export const hideModal = (
  id: string = "first-modal",
  save: boolean = true,
): void => {
  if (save) localStorage.setItem(id, "1");
  logger.Log(`Element saved in localStorage with id(${id}) and item: 1.`);
  const modal = document.getElementById(id);

  if (modal) {
    modal.classList.replace("flex", "hidden");
    modal.setAttribute("aria-hidden", "true");
    modal.setAttribute("aria-modal", "false");
    logAria(modal);
  }
};

export const showModal = (modal: HTMLElement): void => {
  modal.classList.replace("hidden", "flex");
  modal.setAttribute("aria-hidden", "false");
  modal.setAttribute("aria-modal", "true");
  logAria(modal);
};

export function initModal(
  id: string = "first-modal",
  save: boolean = true,
): void {
  const modal = document.getElementById(id);

  if (modal) {
    logger.Log(`Element with id(${id}) found.\n Save to localStorage? ${save}.`);

    const okBtn = modal.querySelector("[data-modal-ok]");
    const closeBtn = modal.querySelector("[data-modal-close]");

    if (okBtn && closeBtn) {
      modal.addEventListener("click", () => hideModal(id, save));
      okBtn.addEventListener("click", () => hideModal(id, save));
      closeBtn.addEventListener("click", () => hideModal(id, save));
    }

    if (save) {
      const shown = localStorage.getItem(id);
      if (!shown) showModal(modal);
      logger.Log(`Shown variable in initModal(): ${shown}`);
    }
  }
}

addEventListener("DOMContentLoaded", () => initModal());
