import c from "clogs.ts";
import { initModal } from "./modal";

export function initContactModal(id: string = "modal-success-email"): void {
  c.debug("Uploaded file: contact-modal.ts");
  const modal = document.getElementById(id);
  initModal(id, false);
}

if (typeof document !== "undefined" && document.readyState === "loading") document.addEventListener("DOMContentLoaded",
  () => initContactModal());