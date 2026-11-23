let isVisible = false;

const getArrow = (): HTMLElement | null => document.getElementById("arrow-up");

const showArrow = (element: HTMLElement, animate: boolean): void => {
  isVisible = true;
  element.classList.remove(
    "hidden",
    "opacity-0",
    "pointer-events-none",
    "animate-hide-y-bottom",
  );
  element.classList.add("opacity-100");
  element.setAttribute("aria-hidden", "false");
  element.setAttribute("tabindex", "0");

  if (animate) {
    element.classList.remove("animate-show-y-bottom");
    void element.offsetWidth;
    element.classList.add("animate-show-y-bottom");
  }
};

const hideArrow = (element: HTMLElement, animate: boolean): void => {
  isVisible = false;
  element.setAttribute("aria-hidden", "true");
  element.setAttribute("tabindex", "-1");
  element.classList.remove("opacity-100", "animate-show-y-bottom");
  element.classList.add("opacity-0");

  if (animate) {
    element.classList.add("pointer-events-none", "animate-hide-y-bottom");
  } else {
    element.classList.add("pointer-events-none");
  }
};

const syncArrow = (animate: boolean): void => {
  const element = getArrow();
  if (!element) return;

  if (window.scrollY > 300 && !isVisible) showArrow(element, animate);
  else if (window.scrollY <= 300 && isVisible) hideArrow(element, animate);
};

addEventListener("scroll", () => syncArrow(true), { passive: true });
addEventListener("astro:page-load", () => {
  isVisible = false;
  syncArrow(false);
});
addEventListener("DOMContentLoaded", () => syncArrow(false));

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element) || !target.closest("#arrow-up")) return;

  if (window.scrollY > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
