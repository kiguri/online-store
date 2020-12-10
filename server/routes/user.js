const express = require('express');
const { authUser, getUserProfile, signup } = require('../controllers/user');
const protect = require('../middleware/auth');

const userRouter = express.Router();

userRouter.route('/').post(signup);
userRouter.route('/login').post(authUser);
userRouter.route('/profile').get(protect, getUserProfile);

module.exports = userRouter;
