export function initModal(id: string = "first-modal"): void {
  const modal = document.getElementById(id);
  if (!modal) return;

  const okBtn = modal.querySelector("[data-modal-ok]");
  const closeBtn = modal.querySelector("[data-modal-close]");
  const backdrop = modal.querySelector("[data-modal-backdrop]");

  const hideModal = (): void => {
    localStorage.setItem(id, "1");
    modal.classList.replace("flex", "hidden");
  };

  const showModal = (): void => {
    modal.classList.replace("hidden", "flex");
  };

  const shown = localStorage.getItem(id);
  if (!shown) {
    showModal();
  }

  closeBtn?.addEventListener("click", hideModal);
  okBtn?.addEventListener("click", hideModal);
  backdrop?.addEventListener("click", hideModal);
}

addEventListener("DOMContentLoaded", () => {
  initModal();
})