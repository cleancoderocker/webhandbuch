let passwordTooShort = password.length < 10;
let passwordTooLong = password.length > 50;
let message = '';
if (passwordTooShort) {
  message = 'The password must contain at least 10 characters.';
} else if (passwordTooLong) {
  message = 'The password must not contain more than 50 characters.';
} else {
  message = 'The password meets all conditions.';
}
document.getElementById('info').textContent = message;