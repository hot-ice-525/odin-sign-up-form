const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

password.addEventListener("input", () => {
  if (password.value !== confirmPassword.value) {
    password.setCustomValidity("Invalid field");
    confirmPassword.setCustomValidity(" ");
  }
  else {
    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");
  }
})

confirmPassword.addEventListener("input", () => {
  if (password.value !== confirmPassword.value) {
    password.setCustomValidity("Invalid field");
    confirmPassword.setCustomValidity(" ");
  }
  else {
    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");
  }
})