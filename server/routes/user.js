const express = require('express');
const {
    signup,
    login,
    getUser,
    updateUser,
    getAllUser,
    deleteUser,
    getUserById,
    updateUserById,
} = require('../controllers/user');
const { protect, admin } = require('../middleware/auth');

const userRouter = express.Router();

userRouter.route('/').post(signup).get(protect, admin, getAllUser);
userRouter.route('/login').post(login);
userRouter.route('/profile').get(protect, getUser).put(protect, updateUser);
userRouter
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUserById);

module.exports = userRouter;
