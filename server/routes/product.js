const express = require('express');
const {
    fetchAllProduct,
    fetchProductById,
    deleteProduct,
    createProduct,
    updateProduct,
    createReview,
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

productRouter.route('/:id/reviews').post(protect, createReview);

module.exports = productRouter;
