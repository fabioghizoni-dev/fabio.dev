const animateHide = (el: HTMLElement | null = document.getElementById("sun")) => {
  if (el) {
    try {
      el.classList.add("animate-hide");
      el.addEventListener(
        "animationend",
        () => {
          el.classList.add("hidden");
          el.classList.remove("animate-hide");
        },
        { once: true },
      );
    } catch (err) {
      el.classList.add("hidden")
      console.error(`Failed to hide element: ${err}`);
    }
  }
}

const animateShow = (el: HTMLElement | null = document.getElementById("sun")) => {
  if (el) {
    try {
      el.classList.remove("hidden");
      el.classList.add("animate-show");
      el.addEventListener(
        "animationend",
        () => {
          el.classList.remove("animate-show");
        },
        { once: true },
      );
    } catch (err) {
      el.classList.add("hidden")
      console.error(`Failed to show element: ${err}`);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btnSun = document.getElementById("sun");
  const btnMoon = document.getElementById("moon");
  const btnTheme = document.getElementById("btn-theme");
  if (btnSun && btnMoon && btnTheme) {

    let isDarkMode = true;

    const toggle = () => {

      isDarkMode = !isDarkMode;

      if (isDarkMode) {
        animateHide(btnSun);
        animateShow(btnMoon);
        document.documentElement.setAttribute("data-theme", "dark");

      } else {
        animateShow(btnSun);
        animateHide(btnMoon);
        document.documentElement.setAttribute("data-theme", "light");
      }
    };
    btnTheme.addEventListener("click", toggle);
  }
});
