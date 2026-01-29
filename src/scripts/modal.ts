import c from "clogs.ts";

const logAria = (modal: HTMLElement) => c.log(
  `initModal(): Aria-hidden in element(${modal.id}): ${modal.getAttribute("aria-hidden")}`,
);

export const hideModal = (id: string = "first-modal", save: boolean = true): void => {
  if (save) localStorage.setItem(id, "1");
  c.log(`Element saved in localStorage with id(${id}) and item: 1.`);
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

export function initModal(id: string = "first-modal", save: boolean = true): void {
  const modal = document.getElementById(id);

  if (modal) {
    c.log(`Element with id(${id}) found.\n Save to localStorage? ${save}.`);

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
      c.log(`Shown variable in initModal(): ${shown}`);
    }
  }
};

addEventListener("DOMContentLoaded", () => initModal());
