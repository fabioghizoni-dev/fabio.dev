/**
 * @description Function to return to the home `page`
 */
export function goHome() {
  if (window.location.pathname !== "/") {
    window.location.href = "/";
  }
}

/**
 * @type {HTMLElement} HTML element with id `"logo"`
 */
let logo = document.getElementById("logo");
logo.addEventListener("click", goHome);

/**
 * @param {string} id - ID of the HTML element to scroll.
 * @description Scroll function into the section or element...
 */
const goSection = (id) => {
  if (id === "hero") {
    goHome();
  }
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

/**
 * @type {HTMLElement} HTML element with id `"li-home"`
 */
let li_home = document.getElementById("li-home");
/**
 * @type {HTMLElement} HTML element with id `"li-about-me"`
 */
let li_about_me = document.getElementById("li-about-me");
/**
 * @type {HTMLElement} HTML element with id `"li-contact-me"`
 */
let li_contact_me = document.getElementById("li-contact-me");

li_home.addEventListener("click", () => {
  goSection("hero");
});
li_about_me.addEventListener("click", () => {
  goSection("about-me");
});
li_contact_me.addEventListener("click", () => {
  goSection("contact-me");
});

/**
 * @description Merging **`headerHiddenOnLoad()`** and **`updateHeaderVisibility()`**
 */
const setupHeader = () => {
  /**
   * @type {HTMLElement} HTML element with id `"div-header"`
   */
  const divHeader = document.getElementById("div-header");
  if (!divHeader) return;

  /**
   * @type {DOMTokenList} HTML element classes with id `"div-header"`
   */
  const headerClass = divHeader.classList;

  /**
   * @description Set this `property` to change the global state of **`isVisible`**
   * @type {boolean} The header starts as **`isVisible`** = `window.scrollY <= 300`
   */
  let isVisible = window.scrollY <= 300;

  /**
   * @description Function when loading the `page`
   */
  const headerHiddenOnLoad = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY <= 300) {
      isVisible = true;
      headerClass.remove("hidden");
    } else if (currentScrollY > 300) {
      isVisible = false;
      headerClass.add("hidden");
    }
  };

  /**
   * @description Updates header `visibility` on scroll
   */
  const updateHeaderVisibility = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY <= 300 && !isVisible) {
      isVisible = true;
      headerClass.remove("hidden", "no-transition");
    } else if (currentScrollY > 300 && isVisible) {
      isVisible = false;
      headerClass.add("reverse");
      headerClass.remove("hidden", "no-transition");
    }
  };
  window.addEventListener("DOMContentLoaded", headerHiddenOnLoad);
  window.addEventListener("scroll", updateHeaderVisibility);
};

setupHeader();
