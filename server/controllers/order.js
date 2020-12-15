const Order = require('../models/order');

// POST /api/orders
// Create new order
const addOrder = async (req, res) => {
    try {
        const {
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        } = req.body;

        if (orderItems && orderItems.length == 0) {
            res.status(400);
            throw new Error('No order items');
        } else {
            const order = new Order({
                orderItems,
                user: req.user._id,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                taxPrice,
                shippingPrice,
                totalPrice,
            });

            const createdOrder = await order.save();
            res.status(201).json(createdOrder);
        }
    } catch (error) {
        const statusCode = res.statusCode !== 500 ? res.statusCode : 500;
        res.status(statusCode).send({ message: error.message });
    }
};

// GET /api/orders/:id
// Get order by ID

const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate(
            'user',
            'name email'
        );

        if (order) {
            res.json(order);
        } else {
            res.status(404);
            throw new Error('Order not found');
        }
    } catch (error) {
        const statusCode = res.statusCode !== 500 ? res.statusCode : 500;
        res.status(statusCode).send({ message: error.message });
    }
};

// PUT /api/orders/:id/pay
// Update order to paid

const updateOrderToPaid = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (order) {
            order.isPaid = true;
            order.paidAt = Date.now();
            order.paymentResult = {
                id: req.body.id,
                status: req.body.status,
                update_time: req.body.update_time,
                email_address: req.body.payer.email_address,
            };

            const paidOrder = await order.save();
            res.json(paidOrder);
        } else {
            res.status(404);
            throw new Error('Order not found');
        }
    } catch (error) {
        const statusCode = res.statusCode !== 500 ? res.statusCode : 500;
        res.status(statusCode).send({ message: error.message });
    }
};

module.exports = { addOrder, getOrderById, updateOrderToPaid };
