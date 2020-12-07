const Product = require('../models/product');

//Fetch all products
const fetchAllProduct = async (req, res) => {
    try {
        const products = await Product.find({});

        res.json(products);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

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
        res.status(500).send({ message: error.message });
    }
};

module.exports = {
    fetchAllProduct,
    fetchProductById,
};
