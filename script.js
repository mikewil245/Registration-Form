"use strict";

/* 'DOMContentLoaded waits for the HTML to load first'*/
document.addEventListener("DOMContentLoaded", (e) => {
  const form = document.querySelector("#form");
  const userNameInput = document.querySelector("#username");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const passwordInput2 = document.querySelector("#password2");

  /* ERROR MESSAGES  */
  const userNameError = userNameInput.nextElementSibling;
  const emailError = emailInput.nextElementSibling;
  const passwordError = passwordInput.nextElementSibling;
  const password2Error = passwordInput2.nextElementSibling;

  /* ERRORS AND CHECK ICONS */
  const userNameIconError = document.getElementById("usernameIconError");
  const userNameIconCheck = document.getElementById("usernameIconCheck");
  const emailIconError = document.getElementById("emailIconError");
  const emailIconCheck = document.getElementById("emailIconCheck");
  const passwordIconError = document.getElementById("passwordErrorIcon");
  const passwordIconCheck = document.getElementById("passwordCheckIcon");
  const password2IconError = document.getElementById("password2ErrorIcon");
  const password2IconCheck = document.getElementById("password2CheckIcon");

  function showError(input, message, errorElement, iconError, iconCheck) {
    errorElement.textContent = message;
    errorElement.classList.remove("hidden");
    iconError.classList.remove("hidden");
    iconCheck.classList.add("hidden");
    input.classList.add("border-red-600");
  }

  function hideError(input, errorElement, iconError, iconCheck) {
    errorElement.classList.add("hidden");
    iconError.classList.add("hidden");
    iconCheck.classList.remove("hidden");
    input.classList.remove("border-red-600");
  }

  function validateUsername() {
    const userName = userNameInput.value.trim();
    if (userName.length < 5) {
      showError(
        userNameInput,
        "Username must be atleast 5 characters or more",
        userNameError,
        userNameIconError,
        userNameIconCheck
      );
      return false;
    } else {
      hideError(
        userNameInput,
        userNameError,
        userNameIconError,
        userNameIconCheck
      );
      return true;
    }
  }

  function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError(
        emailInput,
        "please enter a valid email",
        emailError,
        emailIconCheck
      );
      return false;
    } else {
      hideError(emailInput, emailError, emailIconError, emailIconCheck);
      return true;
    }
  }

  function validatePassword() {
    const password = passwordInput.value.trim();
    if (password === "") {
      showError(
        passwordInput,
        "please enter a password",
        passwordError,
        passwordIconError,
        passwordIconCheck
      );
      return false;
    } else {
      hideError(
        passwordInput,
        passwordError,
        passwordIconError,
        passwordIconCheck
      );
      return true;
    }
  }

  function validatePassword2() {
    const password = passwordInput.value.trim();
    const password2 = passwordInput2.value.trim();
    if (password2 !== password) {
      showError(
        passwordInput2,
        "Passwords do not match",
        password2Error,
        password2IconError,
        password2IconCheck
      );
      return false;
    } else {
      hideError(
        passwordInput2,
        password2Error,
        password2IconError,
        password2IconCheck
      );
      return true;
    }
  }

  /** As you type in the 'input' field 
 the addEventListener fires & the functions checks to see if it valid*/
  userNameInput.addEventListener("input", validateUsername);
  emailInput.addEventListener("input", validateEmail);
  passwordInput.addEventListener("input", validatePassword);
  passwordInput2.addEventListener("input", validatePassword2);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isUserNameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isPassword2Valid = validatePassword2();

    if (
      isUserNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isPassword2Valid
    ) {
      alert("Form submitted successfully!");
      form.reset();
      // Hide all error messages and reset input styles

      hideError(
        userNameInput,
        userNameError,
        userNameIconError,
        userNameIconCheck
      );
      hideError(emailInput, emailError, emailIconError, emailIconCheck);

      hideError(
        passwordInput,
        passwordError,
        passwordIconError,
        passwordIconCheck
      );
      hideError(
        passwordInput2,
        password2Error,
        password2IconError,
        password2IconCheck
      );
    }
  });
});
