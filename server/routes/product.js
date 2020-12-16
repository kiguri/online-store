const express = require('express');
const {
    fetchAllProduct,
    fetchProductById,
    deleteProduct,
} = require('../controllers/product');
const { protect, admin } = require('../middleware/auth');
const productRouter = express.Router();

productRouter.route('/').get(fetchAllProduct);

productRouter
    .route('/:id')
    .get(fetchProductById)
    .delete(protect, admin, deleteProduct);

module.exports = productRouter;
