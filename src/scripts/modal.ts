import c from "clogs.ts";
import { ready } from "../constants";

const debugAria = (modal: HTMLElement) => {
  c.debug(`initModal(): Aria-hidden in element(${modal.id}): ${modal.getAttribute("aria-hidden")}`);
}

export const hideModal = (id: string = "first-modal", save: boolean = true): void => {
  if (save) localStorage.setItem(id, "1");
  c.debug(`Element saved in localStorage with id(${id}) and item: 1.`);
  const modal = document.getElementById(id);

  if (modal) {
    modal.classList.replace("flex", "hidden");
    modal.setAttribute("aria-hidden", "true");
    debugAria(modal);
  }
};

export const showModal = (modal: HTMLElement): void => {
  modal.classList.replace("hidden", "flex");
  modal.setAttribute("aria-hidden", "false");
  debugAria(modal);
};

export function initModal(id: string = "first-modal", save: boolean = true): void {
  const modal = document.getElementById(id);
  c.debug(`The initModal() function has been loaded.`);

  if (modal) {
    c.debug(`Save to localStorage in initModal()? ${save}`);
    c.debug(`Element with id(${id}) found in initModal().`);

    const okBtn = modal.querySelector("[data-modal-ok]");
    const closeBtn = modal.querySelector("[data-modal-close]");
    const backdrop = modal.querySelector("[data-modal-backdrop]");

    if (save) {
      const shown = localStorage.getItem(id);
      c.debug(`Shown variable in initModal(): ${shown}`);
      if (!shown) showModal(modal);
    } else if (modal.getAttribute("aria-hidden") === "true") showModal(modal);

    if (okBtn && closeBtn && backdrop) {
      okBtn.addEventListener("click", () => hideModal(id, save));
      closeBtn.addEventListener("click", () => hideModal(id, save));
      backdrop.addEventListener("click", () => hideModal(id, save));
    }
  }
}

if (ready) document.addEventListener("DOMContentLoaded", () => initModal());