const emailIcon = document.querySelector(".mail");
const lockIcon = document.querySelector(".lock");
const emailField = document.querySelector("input#email");
const passwordField = document.querySelector("input#password");

// Change source of the image on focus
function changeMailIcon() {
  emailIcon.setAttribute("src", "./assets/mail-focus.svg");
}

// Change source of the image on focus
function changeLockIcon() {
  lockIcon.setAttribute("src", "./assets/lock-focus.svg");
}

// Reset images after input loses focus
function resetImages() {
  emailIcon.setAttribute("src", "./assets/mail.svg");
  lockIcon.setAttribute("src", "./assets/lock.svg");
}
