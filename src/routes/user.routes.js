const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user.controller');

router.route('/register').post(usersController.createNewUser);

module.exports = router;
