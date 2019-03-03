
/**
 * USER CONTROLLER (server/controllers/apis/v1/user.js)
 */

const express = require('express');
const userService = require('../../../services/v1/users/users');
const authClientRequest = require('../../../middlewares/authGaurd');

const router = express.Router();

router.get('/:userId', authClientRequest.authClientToken, userService.getUserDetails);

module.exports = router;

