let passwordTooShort = password.length < 10;
let message = '';
if (passwordTooShort) {
  message = 'The password must contain at least 10 characters.';
} else {
  message = 'The password meets all conditions.';
}
document.getElementById('info').textContent = message;