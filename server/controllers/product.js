const Product = require('../models/product');

// GET /api/products
//Fetch all products
const fetchAllProduct = async (req, res) => {
    try {
        const products = await Product.find({});

        res.json(products);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// GET /api/products/:id
// Fetch single product by id
const fetchProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            res.status(404);
            throw new Error('Product not found');
        }

        res.json(product);
    } catch (error) {
        const statusCode = res.statusCode !== 500 ? res.statusCode : 500;
        res.status(statusCode).send({ message: error.message });
    }
};

// DELETE /api/products/:id
// Delete product
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            await product.remove();
            res.json({ message: 'Product removed' });
        } else {
            res.status(404);
            throw new Error('Product not found');
        }
    } catch (error) {
        const statusCode = res.statusCode !== 500 ? res.statusCode : 500;
        res.status(statusCode).send({ message: error.message });
    }
};

module.exports = {
    fetchAllProduct,
    fetchProductById,
    deleteProduct,
};
