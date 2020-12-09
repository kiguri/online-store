const express = require('express');
const { authUser } = require('../controllers/user');
const userRouter = express.Router();

userRouter.route('/login').post(authUser);

module.exports = userRouter;
