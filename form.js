let pass = document.getElementById("passwordInput");
let passConfirm = document.getElementById("passwordConfirmInput");
let submit = document.querySelector("button");

submit.addEventListener('click', () => {
    if (pass.value == passConfirm.value) {
        alert('password is correct');
    } else {
        alert('password does not match');
    }
})


