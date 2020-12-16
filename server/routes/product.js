const express = require('express');
const {
    fetchAllProduct,
    fetchProductById,
    deleteProduct,
    createProduct,
    updateProduct,
} = require('../controllers/product');
const { protect, admin } = require('../middleware/auth');
const productRouter = express.Router();

productRouter
    .route('/')
    .get(fetchAllProduct)
    .post(protect, admin, createProduct);

productRouter
    .route('/:id')
    .get(fetchProductById)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct);

module.exports = productRouter;
