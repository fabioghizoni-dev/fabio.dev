let isVisible: boolean = false;

let arrowUp: HTMLElement | null = document.getElementById("arrow-up");

const showArrowUp = (arrowUp: HTMLElement, animation: boolean = false) => {
  isVisible = true;
  arrowUp.classList.remove(
    "hidden",
    "opacity-0",
    "pointer-events-none",
    "animate-hide-y-bottom",
  );
  arrowUp.removeAttribute("aria-hidden");
  if (animation) arrowUp.classList.add("animate-show-y-bottom", "opacity-100")
  else arrowUp.classList.add("opacity-100");
}

const hideArrowUp = (arrowUp: HTMLElement, animation: boolean = false) => {
  isVisible = false;
  arrowUp.setAttribute("aria-hidden", "true");
  arrowUp.classList.remove("hidden", "opacity-100", "animate-show-y-bottom");
  if (animation) arrowUp.classList.add("opacity-0", "pointer-events-none", "animate-hide-y-bottom")
  else arrowUp.classList.add("opacity-0");
}

const onLoadPage = () => {
  if (arrowUp) {
    if (window.scrollY > 300 && !isVisible) showArrowUp(arrowUp);
    else if (window.scrollY <= 300 && isVisible) hideArrowUp(arrowUp)
  }
}

const onScrollWindow = () => {
  if (arrowUp) {
    if (window.scrollY > 300 && !isVisible) showArrowUp(arrowUp, true);
    else if (window.scrollY <= 300 && isVisible) hideArrowUp(arrowUp, true);
  }
};

addEventListener("scroll", onScrollWindow);
addEventListener("astro:page-load", onLoadPage);
addEventListener("DOMContentLoaded", onLoadPage);

const onClickArrowUp = () => {
  if (window.scrollY > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

arrowUp?.addEventListener("click", onClickArrowUp);
