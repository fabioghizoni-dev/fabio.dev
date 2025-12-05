


addEventListener("DOMContentLoaded", () => {

  const menu = document.getElementById("menu");
  const header = document.getElementById("header");
  const listMenu = document.getElementById("list-menu");

  let isMenuVisible: boolean = false;

  if (menu && header && listMenu) {
    const hide = (el: HTMLElement = listMenu) => {
      isMenuVisible = false;
      header.classList.add("p-2");
      el.classList.add("ml-auto");
      el.classList.replace("absolute", "hidden");
      el.classList.remove("ml-auto", "z-10", "inset-0", "bg-gray-default", "w-screen", "h-screen");
    }

    const show = (el: HTMLElement = listMenu) => {
      isMenuVisible = true;
      header.classList.remove("p-2");
      el.classList.remove("ml-auto");
      el.classList.replace("hidden", "absolute");
      el.classList.add("z-10", "inset-0", "bg-gray-default", "w-screen", "h-screen");
    }

    menu.addEventListener("click", () => {
      isMenuVisible ? hide() : show();
    })
  }
})
