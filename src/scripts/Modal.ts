import c from "clogs.ts";

export const hideModal = (id: string = "first-modal", save: boolean = true): void => {
  if (save) localStorage.setItem(id, "1");
  const modal = document.getElementById(id);

  if (modal) {
    modal.classList.replace("flex", "hidden");
    modal.setAttribute("aria-hidden", "true");
  }
};

export const showModal = (modal: HTMLElement): void => {
  modal.classList.replace("hidden", "flex");
  modal.setAttribute("aria-hidden", "false");
};

export function initModal(id: string = "first-modal", save: boolean = true): void {
  c.debug("Uploaded file: modal.ts");
  const modal = document.getElementById(id);

  if (modal) {

    const okBtn = modal.querySelector("[data-modal-ok]");
    const closeBtn = modal.querySelector("[data-modal-close]");
    const backdrop = modal.querySelector("[data-modal-backdrop]");

    if (save) {
      const shown = localStorage.getItem(id);
      if (!shown) showModal(modal);
    } else if (modal.getAttribute("aria-hidden") === "true") showModal(modal);

    if (okBtn && closeBtn && backdrop) {
      okBtn.addEventListener("click", () => hideModal(id, save));
      closeBtn.addEventListener("click", () => hideModal(id, save));
      backdrop.addEventListener("click", () => hideModal(id, save));
    }
  }
}

if (typeof document !== "undefined" && document.readyState === "loading") document.addEventListener("DOMContentLoaded",
  () => initModal());