function checkPassword(password) {
    if (password.length < 10) {
        throw new Error('The password must contain at least 10 characters.');
    } else if (password.length > 50) {
        throw new Error('The password must not contain more than 50 characters.');
    }
    return 'The password meets all conditions.';
}
try {
    const password = 'simple';
    checkPassword(password);
    const message = 'The password meets all conditions.';
    // ... here further processing ...
} catch (error) {
    console.error(error);
}