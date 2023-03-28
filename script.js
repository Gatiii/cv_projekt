const btn = document.querySelector('.form__btn');
const error = document.querySelector('.error-alert');
const namee = document.querySelector('#first-input');
const email = document.querySelector('#second-input');
const message = document.querySelector('#third-input');
const formi = document.querySelector('.contact__form');

function submitform(event) {
    event.preventDefault();
}
formi.addEventListener("submit", submitform);

btn.addEventListener('click', () => {
    if(namee.value.length == 0 || email.value.length == 0 || message.value.length == 0) {
        error.innerHTML = "Please add needed information";
        return false;
    } else {
        swal("Thank you for sending me a message", "I will contact with you soon");
        error.innerHTML = "";
        return true;
    }
})