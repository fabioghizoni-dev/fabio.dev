let isVisible = window.scrollY <= 300;

const showHeader = (element: HTMLElement, animation: boolean = true): void => {
  const classes = element.classList;

  if (animation) {
    classes.remove("hidden", "reverse", "no-transition", "animate-height");
    void element.offsetWidth;
    classes.add("animate-height");
  } else {
    classes.remove("hidden");
  }

  isVisible = true;
};

const hideHeader = (element: HTMLElement, animation: boolean = true): void => {
  const classes = element.classList;

  if (animation) {
    classes.remove("hidden", "no-transition", "animate-height");
    void element.offsetWidth;
    classes.add("reverse", "animate-height");
  } else {
    classes.add("hidden");
  }

  isVisible = false;
};

export const setupHeader = (
  divHeader: HTMLElement | null = document.getElementById("div-header"),
): void => {
  if (!divHeader || divHeader.dataset.initialized) return;
  divHeader.dataset.initialized = "true";

  const headerHiddenOnLoad = (): void => {
    if (window.scrollY <= 300) {
      showHeader(divHeader, false);
    } else {
      hideHeader(divHeader, false);
    }
  };

  const updateHeaderVisibility = (): void => {
    if (!isVisible && window.scrollY <= 300) {
      showHeader(divHeader);
    } else if (isVisible && window.scrollY > 300) {
      hideHeader(divHeader);
    }
  };

  headerHiddenOnLoad();
  window.addEventListener("scroll", updateHeaderVisibility, { passive: true });
};

addEventListener("DOMContentLoaded", () => setupHeader());
addEventListener("astro:page-load", () => setupHeader());
