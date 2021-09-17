const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('colors');
const users = require('./data/users');
const User = require('./models/user');
const Product = require('./models/product');
const Order = require('./models/order');
const products = require('./data/products');
const connectDb = require('./config/config');

dotenv.config();
connectDb();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createUser = await User.insertMany(users);
        const adminUser = createUser[0]._id;
        const sampleData = products.map(product => {
            return {...product, user: adminUser};
        })
        await Product.insertMany(sampleData);
        console.log('Data imported'.inverse.green);
        process.exit();
    } catch (error) {
        console.log(`Error: ${error}`.inverse.red);
    }
};

const dataDestroy = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log('Data destroyed'.green.inverse);
    } catch (error) {
        console.log(`Error: ${error}`.inverse.red);
    }
};

if(process.argv[2] === "-d") {
    dataDestroy();
} else {
    importData();
}