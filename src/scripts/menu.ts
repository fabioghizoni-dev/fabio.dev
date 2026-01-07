addEventListener("DOMContentLoaded", () => {

  const menu = document.getElementById("menu");
  const listMenu = document.getElementById("list-menu");

  const closeBtn = document.querySelector("[data-menu-close]");

  let isMenuVisible: boolean = false;

  if (menu && listMenu && closeBtn) {
    const hide = (el: HTMLElement = listMenu) => {
      isMenuVisible = false;
      el.classList.add("ml-auto");
      el.classList.replace("fixed", "hidden");
      el.classList.remove("ml-auto", "z-10", "inset-0", "h-screen", "w-screen", "overflow-hidden", "bg-gray-default");
    }

    const show = (el: HTMLElement = listMenu) => {
      isMenuVisible = true;
      el.classList.remove("ml-auto");
      el.classList.replace("hidden", "fixed");
      el.classList.add("z-10", "inset-0", "h-screen", "w-screen", "overflow-hidden", "bg-gray-default");
    }

    closeBtn.addEventListener("click", () => hide());

    menu.addEventListener("click", () => {
      isMenuVisible ? hide() : show();
    })
  }
})
