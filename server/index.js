const express = require('express');
const connectDb = require('./config/db');
const dotenv = require('dotenv');
const productRouter = require('./routes/product');
const { notFound } = require('./middleware/error');

dotenv.config();
connectDb();
const app = express();

app.get('/', (req, res) => {
    res.send('Api running');
});

//products endpoint
app.use('/api/products', productRouter);

//middleware
app.use(notFound);

//run
app.listen(
    process.env.PORT,
    console.log(
        `Server is running in ${process.env.NODE_ENV} mode on http://localhost:${process.env.PORT}`
    )
);
