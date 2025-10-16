document.addEventListener("DOMContentLoaded", () => {
  const btnSun = document.getElementById("btn-sun");
  const btnMoon = document.getElementById("btn-moon");
  const btnTheme = document.getElementById("btn-theme");
  if (btnSun && btnMoon && btnTheme) {
    const hide = (el: HTMLElement) => {
      el.classList.add("animate-hide");
      el.addEventListener(
        "animationend",
        () => {
          el.classList.remove("animate-hide");
          el.classList.add("hidden");
        },
        { once: true },
      );
    };
    const show = (el: HTMLElement) => {
      el.classList.remove("hidden");
      el.classList.add("animate-show");
      el.addEventListener(
        "animationend",
        () => {
          el.classList.remove("animate-show");
        },
        { once: true },
      );
    };
    let isDarkMode = true;
    const toggle = () => {
      isDarkMode = !isDarkMode;
      if (isDarkMode) {
        hide(btnSun);
        show(btnMoon);
      } else {
        show(btnSun);
        hide(btnMoon);
      }
    };
    btnTheme.addEventListener("click", toggle);
  }
});
