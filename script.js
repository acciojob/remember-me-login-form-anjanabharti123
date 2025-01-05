//your JS code here. If required.
// Get DOM elements
const loginForm = document.getElementById('login-form');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('checkbox');
const submitButton = document.getElementById('submit');
const existingButton = document.getElementById('existing');

// Function to handle login submission
loginForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission
  
  const username = usernameField.value;
  const password = passwordField.value;

  // Check if "Remember me" is checked
  if (rememberMeCheckbox.checked) {
    // Store username and password in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    // Remove stored username and password from local storage
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  alert(`Logged in as ${username}`); // Show login alert

  // Show "Login as existing user" button if there are saved credentials
  if (localStorage.getItem('username') && localStorage.getItem('password')) {
    existingButton.style.display = 'block';
  }
});

// Function for existing user login
existingButton.addEventListener('click', function () {
  const savedUsername = localStorage.getItem('username');
  alert(`Logged in as ${savedUsername}`); // Show alert for existing user login
});

// Check if there are saved credentials in local storage
if (localStorage.getItem('username') && localStorage.getItem('password')) {
  existingButton.style.display = 'block'; // Show "Login as existing user" button if data exists
}
