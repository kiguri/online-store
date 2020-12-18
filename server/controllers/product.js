const Product = require('../models/product');

// GET /api/products
//Fetch all products
const fetchAllProduct = async (req, res) => {
    try {
        const pageSize = 6;
        const page = Number(req.query.pageNumber) || 1;
        const keyword = req.query.keyword
            ? {
                  name: {
                      $regex: req.query.keyword,
                      $options: 'i',
                  },
              }
            : {};
        const count = await Product.countDocuments({ ...keyword });
        const products = await Product.find({ ...keyword })
            .limit(pageSize)
            .skip(pageSize * (page - 1));

        res.json({ products, page, pages: Math.ceil(count / pageSize) });
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

// POST /api/products
// Create a product
const createProduct = async (req, res) => {
    try {
        const product = new Product({
            name: 'Escape Run',
            price: 80,
            user: req.user._id,
            image:
                'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a591d6c-1a30-49f1-8413-2fdc9e04b9e2/react-escape-run-running-shoe-94nDwX.jpg',
            brand: 'Nike',
            category: 'Women',
            countInStock: 0,
            numReviews: 0,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        const statusCode = res.statusCode !== 500 ? res.statusCode : 500;
        res.status(statusCode).send({ message: error.message });
    }
};

// PUT /api/products/:id
// Update a product
const updateProduct = async (req, res) => {
    try {
        const {
            name,
            price,
            description,
            image,
            brand,
            category,
            countInStock,
        } = req.body;

        const product = await Product.findById(req.params.id);

        if (product) {
            product.name = name;
            product.price = price;
            product.description = description;
            product.image = image;
            product.brand = brand;
            product.category = category;
            product.countInStock = countInStock;

            const updatedProduct = await product.save();
            res.json(updatedProduct);
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
    createProduct,
    updateProduct,
};
