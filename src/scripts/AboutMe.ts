const calculateAge = (birthDate: string): number => {
  const today = new Date();
  const birth = new Date(birthDate);
  const month = today.getMonth() - birth.getMonth();
  let age = today.getFullYear() - birth.getFullYear();

  if (month < 0 || (month === 4 && today.getDate() < 30)) {
    age--;
  }
  return age;
}

addEventListener("DOMContentLoaded", () => {
  const currentAge = calculateAge("2005-05-30");
  const aboutEl = document.getElementById("about");
  if (aboutEl) {
    aboutEl.textContent = aboutEl.textContent.replace(
      "????",
      String(currentAge)
    );
  }
})
