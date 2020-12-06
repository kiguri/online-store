const express = require('express');
const products = require('./data/products');

const app = express();
const PORT = 5001;

app.get('/', (req, res) => {
    res.send('Api running');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find((product) => product._id === req.params.id);
    res.json(product);
});

app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`));
