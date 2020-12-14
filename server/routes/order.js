const express = require('express');
const { addOrder, getOrderById } = require('../controllers/order');
const protect = require('../middleware/auth');
const orderRouter = express.Router();

// POST /api/orders
orderRouter.route('/').post(protect, addOrder);
orderRouter.route('/:id').get(protect, getOrderById);

module.exports = orderRouter;
