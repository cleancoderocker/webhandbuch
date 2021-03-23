let passwordTooShort = password.length < 10;
let message = '';
if (passwordTooShort) {
  message = 'Das Passwort muss mindestens 10 Zeichen enthalten.';
} else {
  message = 'Das Passwort erfüllt alle Bedingungen.';
}
document.getElementById('info').textContent = message;