const User = require('../models/user');
const generateToken = require('../utils/generateToken');

// POST /api/users/login
// FAuth user & get token
const authUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            });
        } else {
            res.status(401);
            throw new Error('Invalid email or password');
        }
    } catch (error) {
        const statusCode = res.statusCode !== 500 ? res.statusCode : 500;
        res.status(statusCode).send({ message: error.message });
    }
};

// GET /api/users/profile
// get user's profile
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            });
        } else {
            res.status(404);
            throw new Error('User not found');
        }
    } catch (error) {
        const statusCode = res.statusCode !== 500 ? res.statusCode : 500;
        res.status(statusCode).send({ message: error.message });
    }
};
// POST /api/users
// Sign up
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.findOne({ email });
        if (user) {
            res.status(400);
            throw new Error('Email already taken');
        }

        const newUser = await User.create({ name, email, password });

        if (newUser) {
            res.status(201).json({
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                isAdmin: newUser.isAdmin,
                token: generateToken(newUser._id),
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }
    } catch (error) {
        const statusCode = res.statusCode !== 500 ? res.statusCode : 500;
        res.status(statusCode).send({ message: error.message });
    }
};

module.exports = {
    authUser,
    getUserProfile,
    signup,
};
