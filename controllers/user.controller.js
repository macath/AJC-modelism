const UserModel = require('../models/user.model');
const { signUpErrors, signInErrors } = require('../utils/errors.utils');
const jwt = require('jsonwebtoken');

const maxAge = 12 * 60 * 60 * 1000;
// GENERATE TOKEN
const createToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
};

// CREATE USER
module.exports.signUp = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await UserModel.create({email, password});
        res.status(201).json({user: user._id});
    } catch (err) {
        const errors = signUpErrors(err);
        res.status(200).send({ errors });
    }
};

// CONNEXION
module.exports.signIn = async (req, res) => {
    const { email, password } = req.body;

    try {   
        const user = await UserModel.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge });
        res.status(200).json({user: user._id});
    } catch (err) {
        const errors = signInErrors(err);
        res.status(200).send({ errors });
    }
};

// DECONNEXION
module.exports.logout = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
};