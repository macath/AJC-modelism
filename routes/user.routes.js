const router = require('express').Router();
const authController = require('../controllers/user.controller');
const userController = require('../controllers/user.controller');

// authentification
router.post('/create_profile', authController.signUp);
router.post('/login', authController.signIn);
router.get('/logout', authController.logout);

module.exports = router;