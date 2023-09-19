const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user.controller');
const { authenticateToken } = require('../middlewares/auth.guard');

router.route('/register').post(usersController.createNewUser);

module.exports = router;
