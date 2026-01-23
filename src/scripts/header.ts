export const goHome = (): void => {
  if (window.location.pathname !== "/") {
    window.location.href = "/";
  }
};

export const goSection = (id: string): void => {
  goHome();
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
};

let isVisible: boolean = window.scrollY <= 300;

export const showHeader = (el: HTMLElement, animation: boolean = true
): void => {
  const cls: DOMTokenList = el.classList;

  if (animation) {
    cls.remove("hidden", "reverse", "no-transition", "animate-height");
    void (el.offsetWidth);
    cls.add("animate-height");
  } else {
    cls.remove("hidden");
  }
  isVisible = true;
};

export const hideHeader = (el: HTMLElement, animation: boolean = true): void => {
  const cls: DOMTokenList = el.classList;

  if (animation) {
    cls.remove("hidden", "no-transition", "animate-height");
    void (el.offsetWidth);
    cls.add("reverse", "animate-height");
  } else {
    cls.add("hidden");
  }
  isVisible = false;
};

export const setupHeader = (divHeader: HTMLElement | null = document.getElementById("div-header")): void => {

  if (!divHeader) return;

  const headerHiddenOnLoad = () => {
    if (window.scrollY <= 300) {
      isVisible = true;
      showHeader(divHeader, false);
    } else if (window.scrollY > 300) {
      isVisible = false;
      hideHeader(divHeader, false);
    }
  };

  const updateHeaderVisibility = () => {
    if (!isVisible && window.scrollY <= 300) {
      showHeader(divHeader);
    } else if (isVisible && window.scrollY > 300) {
      hideHeader(divHeader);
    };
  };
  headerHiddenOnLoad();
  window.addEventListener("scroll", updateHeaderVisibility);
};

document.addEventListener("DOMContentLoaded", () => {
  const logo: HTMLElement | null = document.getElementById("logo");
  logo?.addEventListener("click", goHome);

  const li_home: HTMLElement | null = document.getElementById("li-home");

  const li_about_me: HTMLElement | null = document.getElementById("li-about-me");

  const li_contact_me: HTMLElement | null =
    document.getElementById("li-contact-me");

  li_home?.addEventListener("click", () => {
    goSection("hero");
  });
  li_about_me?.addEventListener("click", () => {
    goSection("about-me");
  });
  li_contact_me?.addEventListener("click", () => {
    goSection("contact-me");
  });
  setupHeader();
});

document.addEventListener("astro:page-load", () => setupHeader());
