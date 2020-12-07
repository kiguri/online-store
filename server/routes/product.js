const express = require('express');
const { fetchAllProduct, fetchProductById } = require('../controllers/product');
const productRouter = express.Router();

// GET /api/products
productRouter.route('/').get(fetchAllProduct);

// GET /api/products/:id
productRouter.route('/:id').get(fetchProductById);

module.exports = productRouter;
