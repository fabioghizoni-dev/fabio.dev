/**
 * @param {boolean} isVisible The button starts as **`isVisible`** = **`false`**
 */
let isVisible = false;
/**
 * @param {HTMLElement} arrowUp Button html element (can be replaced with yours...)
 */
const arrowUp = document.getElementById("arrow-up");
/**
 * When scrolling the window, trigger the event.
 */
const onScrollWindow = () => {
  if (window.scrollY > 300 && !isVisible) {
    isVisible = true;
    arrowUp.classList.remove(
      "animate-hide-y-bottom",
      "opacity-0",
      "pointer-events-none",
    );
    arrowUp.classList.add("animate-show-y-bottom", "opacity-100");
  } else if (window.scrollY <= 300 && isVisible) {
    isVisible = false;
    arrowUp.classList.remove("animate-show-y-bottom", "opacity-100");
    arrowUp.classList.add(
      "animate-hide-y-bottom",
      "opacity-0",
      "pointer-events-none",
    );
  }
};

// add event listener on scroll
window.addEventListener("scroll", onScrollWindow);

/**
 * On click arrow up, trigger the event
 */
const onClickArrowUp = () => {
  if (window.scrollY > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

// add event listener on click in <arrowUp />
arrowUp.addEventListener("click", onClickArrowUp);
