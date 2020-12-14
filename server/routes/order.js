const express = require('express');
const { addOrder } = require('../controllers/order');
const protect = require('../middleware/auth');
const orderRouter = express.Router();

// POST /api/orders
orderRouter.route('/').post(protect, addOrder);

module.exports = orderRouter;
