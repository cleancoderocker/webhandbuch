let passwordTooShort = password.length < 10;
let passwordTooLong = password.length > 50;
let message = '';
if (passwordTooShort) {
  message = 'Das Passwort muss mindestens 10 Zeichen enthalten.';
} else if (passwordTooLong) {
  message = 'Das Passwort darf maximal 50 Zeichen enthalten.';
} else {
  message = 'Das Passwort erfüllt alle Bedingungen.';
}
document.getElementById('info').textContent = message;