// add event listener when loading DOM
document.addEventListener("DOMContentLoaded", () => {
  // get HTML element
  const btnLang = document.getElementById("btn-lang");
  const listLangs = document.getElementById("list-langs");
  if (listLangs && btnLang) {
    let isJp = true;
    const toggle = () => {
      isJp = !isJp;
      listLangs.classList.toggle("invisible");
      listLangs.classList.toggle("max-h-0");
    };
    // add event listener on buttons
    btnLang.addEventListener("click", toggle);
  }
});
