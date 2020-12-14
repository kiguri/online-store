const express = require('express');
const connectDb = require('./config/db');
const dotenv = require('dotenv');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');
const orderRouter = require('./routes/user');
const { notFound } = require('./middleware/error');

dotenv.config();
connectDb();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Api running');
});

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

//middleware
app.use(notFound);

//run
app.listen(
    process.env.PORT,
    console.log(
        `Server is running in ${process.env.NODE_ENV} mode on http://localhost:${process.env.PORT}`
    )
);
