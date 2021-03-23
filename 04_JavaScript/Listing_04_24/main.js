function checkPassword(password) {
    if (password.length < 10) {
        throw new Error('Das Passwort muss mindestens 10 Zeichen enthalten.');
    } else if (password.length > 50) {
        throw new Error('Das Passwort muss mindestens 10 Zeichen enthalten.');
    }
    return 'Das Passwort erfüllt alle Bedingungen.';
}
try {
    const password = 'simple';
    checkPassword(password);
    const message = 'Das Passwort erfüllt alle Bedingungen.'; // ... hier weitere Verarbeitung ...
} catch (error) {
    console.error(error)
}