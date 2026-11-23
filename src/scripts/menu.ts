const transition = "transition-[width] duration-300 ease-in-out";

const setupMenu = (): void => {
  const menu = document.getElementById("menu");
  const listMenu = document.getElementById("list-menu");
  const closeBtn =
    document.querySelector<HTMLButtonElement>("[data-menu-close]");

  if (!menu || !listMenu || !closeBtn || menu.dataset.initialized) return;
  menu.dataset.initialized = "true";

  let isMenuVisible = false;
  let previouslyFocused: HTMLElement | null = null;

  const focusableElements = (): HTMLElement[] =>
    Array.from(
      listMenu.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );

  const hide = (returnFocus = false): void => {
    isMenuVisible = false;
    document.body.style.overflow = "";
    menu.setAttribute("aria-expanded", "false");
    listMenu.classList.replace("fixed", "hidden");
    listMenu.classList.remove(
      "z-10",
      "inset-0",
      "h-screen",
      "w-screen",
      "overflow-hidden",
      "bg-gray-default",
    );

    if (returnFocus) {
      (previouslyFocused ?? menu).focus();
    }
  };

  const show = (): void => {
    isMenuVisible = true;
    previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    menu.setAttribute("aria-expanded", "true");

    const [line1, line2] = Array.from(menu.children) as HTMLElement[];

    line1?.classList.add(...(transition.split(" ") as string[]), "w-full");
    line2?.classList.add(...(transition.split(" ") as string[]), "w-9/12");

    listMenu.classList.replace("hidden", "fixed");
    listMenu.classList.add(
      "z-10",
      "inset-0",
      "h-screen",
      "w-screen",
      "overflow-hidden",
      "bg-gray-default",
    );

    closeBtn.focus();
  };

  closeBtn.addEventListener("click", () => hide(true));

  document.querySelectorAll("[data-menu-link]").forEach((link) => {
    link.addEventListener("click", () => {
      if (isMenuVisible) hide();
    });
  });

  menu.addEventListener("click", () => {
    if (isMenuVisible) hide(true);
    else show();
  });

  document.addEventListener("keydown", (event) => {
    if (!isMenuVisible) return;

    if (event.key === "Escape") {
      event.preventDefault();
      hide(true);
      return;
    }

    if (event.key !== "Tab") return;

    const elements = focusableElements();
    if (!elements.length) return;

    const first = elements[0];
    const last = elements[elements.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first?.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (isMenuVisible && window.matchMedia("(min-width: 48rem)").matches) {
      hide();
    }
  });
};

addEventListener("DOMContentLoaded", setupMenu);
addEventListener("astro:page-load", setupMenu);

if (document.readyState !== "loading") setupMenu();
