const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogIn);

router.post('/login', authController.postLogIn);

router.get('/signup', authController.getSignUp);

router.post('/signup', authController.postSignUp);

router.post('/logout', authController.postLogOut);

module.exports = router;