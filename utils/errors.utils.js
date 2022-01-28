module.exports.signUpErrors = (err) => {
    let errors = { email: '', password: '' };

    if (err.message.includes('email')) {
        errors.email = 'Email incorrect';
    }

    if (err.message.includes('password')) {
        errors.password = 'Mot de passe incorrect (minimum 6 caractères)';
    }

    if (err.code == 11000 && Object.keys(err.keyValue)[0].includes('email')) {
        errors.email = 'Cet email est déjà pris';
    }
    return errors;
}

module.exports.signInErrors = (err) => {
    let errors = { email: '', password: '' };

    if (err.message.includes('email')) {
        errors.email = 'Email inconnu';
    }

    if (err.message.includes('password')) {
        errors.password = 'Password incorrect';
    }

    return errors;
}

module.exports.uploadErrors = (err) => {
    let errors = { format: '', maxSize: '' };
    
    if (err.message.includes('invalid file')) {
        errors.format = 'Format incompatible'
    }
    if (err.message.includes('max size')) {
        errors.maxSize = 'Image trop volumineuse'
    }

    return errors;
};