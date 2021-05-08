//define variables
const nameError = document.querySelector('.error_name');
const emailError = document.querySelector('.error_email');
const passError = document.querySelector('.error_pass');
const passCheckError = document.querySelector('.error_passCheck');

const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const passInput = document.querySelector('.pass-input');
const passCheckInput = document.querySelector('.passCheck-input');

let send = true;
//name check
nameInput.addEventListener('blur', () => {
        const index = nameInput.value.indexOf(' ');
        if (nameInput.value.length <= index + 1) {
            nameError.textContent = 'Podaj imię i nazwisko';
            send = false;
        } else if (!nameInput.value.includes(' ')) {
            nameError.textContent = 'Podaj imię i nazwisko';
            send = false
        } else {
            nameError.textContent = '';
            send = true;
        }
    })
    //email check
emailInput.addEventListener('blur', () => {
        const index = emailInput.value.indexOf('@');
        if (!emailInput.value.includes('@') || emailInput.value.length <= index + 1) {
            emailError.textContent = 'Niepoprawny email';
            send = false;
        } else {
            emailError.textContent = '';
            send = true;
        }
    })
    //pasword check
passInput.addEventListener('blur', () => {
        const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$!%*?&)(=])([a-zA-Z0-9@#$!%*?&()=]{8,})$/;
        if (regex.exec(passInput.value) === null) {
            passError.textContent = 'Hasło musi zawierać duże i małe litery, cyfry, znaki oraz długość min. 8 znaków';
            send = false;
        } else {
            passError.textContent = '';
            send = true;
        }
    })
    //checking that the passwords are the same
passInput.addEventListener('input', () => {
    if (passCheckInput.value !== passInput.value) {
        passCheckError.textContent = "Hasła są różne";
        send = false
    } else {
        passCheckError.textContent = "";
        send = true;
    }
})