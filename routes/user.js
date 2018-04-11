const express    =  require('express');
const router     =  express.Router();
const chackAuth = require('../middlewere/check-auth');

const UserController = require('../controllers/user');

router.post('/signup', UserController.user_signup);

router.post('/login', UserController.user_login);

router.delete('/:userId', chackAuth, UserController.delete_user);

    module.exports = router;