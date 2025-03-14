const passwordBox = document.querySelector("#password");
const createPassword = document.querySelector("#createPassword");
const copyPassword = document.querySelector("#copyPassword");

const len = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTWXYZ";
const lowerCase = "abcdefghijklmnopqrstwxyz";
const number = "0123456789";
const symbol = "@#$%^&*";

const allchars = upperCase + lowerCase + number + symbol;

const generatePassword = () => {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (len > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }
  passwordBox.value = password;
};

createPassword.addEventListener("click", () => {
  generatePassword();
});

copyPassword.addEventListener("click", () => {
  const password = passwordBox.value;
  navigator.clipboard.writeText(password);
});
