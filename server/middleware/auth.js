const jwt = require('jsonwebtoken');
const user = require('../controllers/user');
const User = require('../models/user');

const protect = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (token && token.startsWith('Bearer')) {
            const decoded = jwt.verify(
                token.split(' ')[1],
                process.env.JWT_SECRET_KEY
            );

            req.user = await User.findById(decoded.id).select('-password');

            next();
        } else {
            res.status(401);
            throw new Error('Not authorized');
        }
    } catch (error) {
        const statusCode = res.statusCode !== 500 ? res.statusCode : 500;
        res.status(statusCode).send({ message: error.message });
    }
};

module.exports = protect;
