const navbarMenu = document.querySelector(".navbar .links");
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopoup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a")

menuBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

hideMenuBtn.addEventListener("click", () => menuBtn.click());

showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignupLink.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopoup.classList [link.id === "signup-link" ? 'add' : 'remove']("show-signup");
  });
});

function doesAccountExist(username) {
  return localStorage.getItem(username) !== null;
}

function registerAccount(username, password) {
  localStorage.setItem(username, password);
}

function verifyLogin(username, password) {
  const storedPassword = localStorage.getItem(username);
  return storedPassword !== null && storedPassword === password;
}

function login() {
  const enteredUsername = document.getElementById('username').value;
  const enteredPassword = document.getElementById('password').value;

  if (enteredUsername && enteredPassword) {
      if (doesAccountExist(enteredUsername) && verifyLogin(enteredUsername, enteredPassword)) {
          // Successful login, redirect to the next page
          window.location.href = 'pageone.html';
      } else {
          // Invalid credentials or account doesn't exist
          alert('Invalid credentials. Please try again or register.');
      }
  } else {
      // Empty input
      alert('Please fill in both username and password fields.');
  }
}

function register() {
  const newUsername = document.getElementById('new-username').value;
  const newPassword = document.getElementById('new-password').value;

  if (newUsername && newPassword) {
      if (!doesAccountExist(newUsername)) {
          // Register the new account
          registerAccount(newUsername, newPassword);

          // Redirect to the next page after successful registration
          window.location.href = 'pageone.html';
      } else {
          // Username already exists
          alert('Username already exists. Please choose a different one.');
      }
  } else {
      // Empty input
      alert('Please fill in both username and password fields.');
  }
}
