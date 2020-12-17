const express = require('express');
const {
    addOrder,
    getOrderById,
    updateOrderToPaid,
    getOrderList,
    getAllOrder,
} = require('../controllers/order');
const { protect, admin } = require('../middleware/auth');
const orderRouter = express.Router();

// POST /api/orders
orderRouter.route('/').post(protect, addOrder).get(protect, admin, getAllOrder);
orderRouter.route('/myorders').get(protect, getOrderList);
orderRouter.route('/:id').get(protect, getOrderById);
orderRouter.route('/:id/pay').put(protect, updateOrderToPaid);

module.exports = orderRouter;
