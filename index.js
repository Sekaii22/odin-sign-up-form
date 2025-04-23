const pwdInput = document.querySelector("#pwd");
const pwdConfirmInput = document.querySelector("#pwd-confirm");

pwdConfirmInput.addEventListener("input", (e) => {
    if (pwdInput.value !== pwdConfirmInput.value) {
        pwdConfirmInput.setCustomValidity("Password not the same");
    }
    else {
        pwdConfirmInput.setCustomValidity("");
    }
});