const express = require('express');
const {
    signup,
    login,
    getUser,
    updateUser,
    getAllUser,
} = require('../controllers/user');
const { protect, admin } = require('../middleware/auth');

const userRouter = express.Router();

userRouter.route('/').post(signup).get(protect, admin, getAllUser);
userRouter.route('/login').post(login);
userRouter.route('/profile').get(protect, getUser).put(protect, updateUser);

module.exports = userRouter;
