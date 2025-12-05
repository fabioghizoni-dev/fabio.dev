
document.addEventListener("DOMContentLoaded", () => {

  const btnLang = document.getElementById("btn-lang");
  const listLangs = document.getElementById("list-langs");
  if (listLangs && btnLang) {
    let isJp = true;
    const show = () => {
      isJp = true;
      listLangs.classList.remove("max-h-0", "invisible");
    }
    const hide = () => {
      isJp = false;
      listLangs.classList.add("max-h-0", "invisible");
    }
    const toggle = () => {
      if (isJp) {
        hide();
      } else {
        show();
      }
    };

    btnLang.addEventListener("click", toggle);
  }
});


