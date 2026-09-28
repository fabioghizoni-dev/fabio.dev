const transition = "transition-[width] duration-300 ease-in-out";

addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const listMenu = document.getElementById("list-menu");

  const closeBtn = document.querySelector("[data-menu-close]");

  let isMenuVisible: boolean = false;

  if (menu && listMenu && closeBtn) {
    const hide = (el: HTMLElement = listMenu) => {
      isMenuVisible = false;
      document.body.style.overflow = "";
      el.classList.add("ml-auto");
      el.classList.replace("fixed", "hidden");
      el.classList.remove(
        "ml-auto",
        "z-10",
        "inset-0",
        "h-screen",
        "w-screen",
        "overflow-hidden",
        "bg-gray-default",
      );
    };

    const show = (el: HTMLElement = listMenu) => {
      isMenuVisible = true;
      document.body.style.overflow = "hidden";

      const lines = menu.children;
      const line1 = lines[0];
      const line2 = lines[1];

      line1.classList.add(...(transition.split(" ") + "w-full"));
      line2.classList.add(...(transition.split(" ") + "w-9/12"));

      el.classList.remove("ml-auto");
      el.classList.replace("hidden", "fixed");
      el.classList.add(
        "z-10",
        "inset-0",
        "h-screen",
        "w-screen",
        "overflow-hidden",
        "bg-gray-default",
      );
    };

    closeBtn.addEventListener("click", () => hide());

    document.querySelectorAll("[data-menu-link]").forEach((link) => {
      link.addEventListener("click", () => hide());
    });

    menu.addEventListener("click", () => {
      isMenuVisible ? hide() : show();
    });
  }
});
