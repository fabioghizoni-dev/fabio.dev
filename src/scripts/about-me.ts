export const calculateAge = (birthDate: string) => {
  const today = new Date();
  const birth = new Date(birthDate);
  const month = today.getMonth() - birth.getMonth();
  let age = today.getFullYear() - birth.getFullYear();

  if (month < 0 || (month === 4 && today.getDate() < 30)) {
    age--;
  }
  return age;
};
