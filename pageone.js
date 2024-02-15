function toPageTwo() {
  window.location.href = 'pagetwo.html';
}

function logout() {
  // Clear local storage
  localStorage.clear();
  // Redirect to the previous page
  window.location.href = 'index.html';
}