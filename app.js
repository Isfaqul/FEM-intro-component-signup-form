let fNameEl = document.getElementById("fName");
let lNameEl = document.getElementById("lName");
let emailEl = document.getElementById("email");
let pwdEl = document.getElementById("pwd");
let formEl = document.querySelector("#form");

// Event Listeners

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  validateFName(fNameEl, e);
  validateLName(lNameEl, e);
  validateEmail(emailEl, e);
  validatePwd(pwdEl, e);
});

// functions

function validateFName(input, e) {
  if (!input.value) {
    fNameEl.parentElement.classList.add("input-ctnr-error");
    fNameEl.classList.add("input-box-error");
  } else {
    fNameEl.parentElement.classList.remove("input-ctnr-error");
    fNameEl.classList.remove("input-box-error");
  }
}

function validateLName(input, e) {
  if (!input.value) {
    addErrors(input);
  } else {
    removeErrors(input);
  }
}

function validateEmail(input, e) {
  const PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!PATTERN.test(input.value)) {
    addErrors(input);
  } else {
    removeErrors(input);
  }
}

function validatePwd(input, e) {
  const PATTERN =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (!PATTERN.test(input.value)) {
    addErrors(input);
  } else {
    removeErrors(input);
  }
}

function addErrors(element) {
  element.parentElement.classList.add("input-ctnr-error");
  element.classList.add("input-box-error");
}

function removeErrors(element) {
  element.parentElement.classList.remove("input-ctnr-error");
  element.classList.remove("input-box-error");
}
