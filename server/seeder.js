const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const products = require('./data/products');
const User = require('./models/user');
const Product = require('./models/product');
const Order = require('./models/order');
const connectDb = require('./config/db');

dotenv.config();

connectDb();

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data destroyed successfully');
        process.exit();
    } catch (error) {
        console.log(`Error: ${error}`);
        process.exit(1);
    }
};

const importData = async () => {
    try {
        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map((product) => ({
            ...product,
            user: adminUser,
        }));

        await Product.insertMany(sampleProducts);

        console.log('Data imported successfully');
        process.exit();
    } catch (error) {
        console.log(`Error: ${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
