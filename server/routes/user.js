const express = require('express');
const { signup, login, getUser, updateUser } = require('../controllers/user');
const protect = require('../middleware/auth');

const userRouter = express.Router();

userRouter.route('/').post(signup);
userRouter.route('/login').post(login);
userRouter.route('/profile').get(protect, getUser).put(protect, updateUser);

module.exports = userRouter;
