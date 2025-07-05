// DOM Elements
const loginForm = document.getElementById('login-form');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('checkbox');
const existingButton = document.getElementById('existing');

// Show existing user button if credentials exist on page load
function checkSavedCredentials() {
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');
  if (savedUsername && savedPassword) {
    existingButton.style.display = 'block';
  } else {
    existingButton.style.display = 'none';
  }
}

checkSavedCredentials();

// Handle form submission
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = usernameField.value.trim();
  const password = passwordField.value;

  if (!username || !password) {
    alert('Please enter both username and password.');
    return;
  }

  if (rememberMeCheckbox.checked) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  alert(`Logged in as ${username}`);

  checkSavedCredentials();
});

// Existing user login button click handler
existingButton.addEventListener('click', function () {
  const savedUsername = localStorage.getItem('username');
  alert(`Logged in as ${savedUsername}`);
});
