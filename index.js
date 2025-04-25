const pwdInput = document.querySelector("#pwd");
const pwdConfirmInput = document.querySelector("#pwd-confirm");
const form = document.querySelector("form");

pwdConfirmInput.addEventListener("input", (e) => {
    if (pwdInput.value !== pwdConfirmInput.value) {
        pwdConfirmInput.setCustomValidity("Password do not match.");
    }
    else {
        pwdConfirmInput.setCustomValidity("");
    }
});

pwdInput.addEventListener("input", (e) => {
    if (pwdInput.value !== pwdConfirmInput.value) {
        pwdConfirmInput.setCustomValidity("Password do not match.");
    }
    else {
        pwdConfirmInput.setCustomValidity("");
    }
});

form.addEventListener("submit", (e) => {
    if (pwdInput.value !== pwdConfirmInput.value) {
        pwdConfirmInput.setCustomValidity("Password do not match.");
        e.preventDefault();
    }
});