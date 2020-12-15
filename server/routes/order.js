const express = require('express');
const {
    addOrder,
    getOrderById,
    updateOrderToPaid,
    getOrderList,
} = require('../controllers/order');
const { protect } = require('../middleware/auth');
const orderRouter = express.Router();

// POST /api/orders
orderRouter.route('/myorders').get(protect, getOrderList);
orderRouter.route('/').post(protect, addOrder);
orderRouter.route('/:id').get(protect, getOrderById);
orderRouter.route('/:id/pay').put(protect, updateOrderToPaid);

module.exports = orderRouter;
