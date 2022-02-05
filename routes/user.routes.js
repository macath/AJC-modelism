const router = require('express').Router();
const authController = require('../controllers/user.controller');
const userController = require('../controllers/user.controller');

// authentification
router.post('/create_profile', authController.signUp);
router.post('/admin', authController.signIn); // route login
router.get('/logout', authController.logout);

module.exports = router;