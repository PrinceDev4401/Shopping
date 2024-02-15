function toPageOne() {
  window.location.href = 'pageone.html';
}

function toPageThree() {
  window.location.href = 'pagethree.html';
}

function logout() {
  // Clear local storage
  localStorage.clear();
  // Redirect to the previous page
  window.location.href = 'index.html';
}