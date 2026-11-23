import { defaultLogger as logger } from "clogs.ts";

let activeModal: HTMLElement | null = null;
let activeModalSave = true;
let previouslyFocused: HTMLElement | null = null;

const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const onKeydown = (event: KeyboardEvent): void => {
  if (!activeModal) return;

  if (event.key === "Escape") {
    event.preventDefault();
    hideModal(activeModal.id, activeModalSave);
    return;
  }

  if (event.key !== "Tab") return;

  const focusable = Array.from(
    activeModal.querySelectorAll<HTMLElement>(focusableSelector),
  );
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last?.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first?.focus();
  }
};

export const hideModal = (
  id: string = "first-modal",
  save: boolean = true,
): void => {
  const modal = document.getElementById(id);
  if (!modal) return;

  if (save) {
    try {
      localStorage.setItem(id, "1");
    } catch {
      /* Storage can be unavailable in private mode. */
    }
  }

  modal.classList.replace("flex", "hidden");
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-modal", "false");
  document.body.style.overflow = "";

  document.removeEventListener("keydown", onKeydown);
  activeModal = null;
  previouslyFocused?.focus();
  previouslyFocused = null;
};

export const showModal = (modal: HTMLElement, save: boolean = true): void => {
  if (activeModal && activeModal !== modal) {
    hideModal(activeModal.id, false);
  }

  previouslyFocused = document.activeElement as HTMLElement | null;
  activeModal = modal;
  activeModalSave = save;

  modal.classList.replace("hidden", "flex");
  modal.setAttribute("aria-hidden", "false");
  modal.setAttribute("aria-modal", "true");
  document.body.style.overflow = "hidden";

  document.addEventListener("keydown", onKeydown);

  const focusable = modal.querySelector<HTMLElement>(focusableSelector);
  (
    focusable ?? modal.querySelector<HTMLElement>("[data-modal-panel]")
  )?.focus();

  logger.Log(`showModal(): modal "${modal.id}" opened.`);
};

export function initModal(
  id: string = "first-modal",
  save: boolean = true,
): void {
  const modal = document.getElementById(id);
  if (!modal || modal.dataset.initialized) return;
  modal.dataset.initialized = "true";

  const okButton = modal.querySelector<HTMLElement>("[data-modal-ok]");
  const closeButton = modal.querySelector<HTMLElement>("[data-modal-close]");

  okButton?.addEventListener("click", () => hideModal(id, save));
  closeButton?.addEventListener("click", () => hideModal(id, save));

  modal.addEventListener("click", (event) => {
    if (event.target === modal) hideModal(id, save);
  });

  if (save) {
    let shown = false;
    try {
      shown = Boolean(localStorage.getItem(id));
    } catch {
      shown = false;
    }

    if (!shown) showModal(modal, save);
  }
}

addEventListener("DOMContentLoaded", () => initModal());
addEventListener("astro:page-load", () => initModal());
