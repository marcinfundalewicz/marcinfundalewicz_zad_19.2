let passwordInput = document.getElementById('passwordInput');
let confirmPasswordInput = document.getElementById('confirmPasswordInput');
let passwordError = document.getElementById('passwordError');
let confirmPasswordError = document.getElementById('confirmPasswordError');

function checkPassword() {
    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;

    if (password.length === 0 && confirmPassword.length === 0)
        return;
    else
        passwordError.innerHTML = '';
    confirmPasswordError.innerHTML = '';

    let lengthRegex = /.{8,}/;
    let upperCaseRegex = /[A-Z]/;
    let specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    let isLengthValid = lengthRegex.test(password);
    let isUppercaseValid = upperCaseRegex.test(password);
    let isSpecialCharValid = specialCharRegex.test(password);

    let isPasswordMatch = password === confirmPassword;

    if (!isLengthValid) passwordError.innerHTML += 'Hasło musi zawierać minimum 8 znaków<br>';
    if (!isUppercaseValid) passwordError.innerHTML += 'Hasło powinno zawierać co najmniej 1 dużą literę<br>';
    if (!isSpecialCharValid) passwordError.innerHTML += 'Hasło powinno zawierać co najmniej 1 znak specjalny<br>';
    if (!isPasswordMatch) confirmPasswordError.innerHTML = 'Hasła nie są identyczne<br>';
}

passwordInput.addEventListener('keyup', checkPassword);
confirmPasswordInput.addEventListener('keyup', checkPassword);