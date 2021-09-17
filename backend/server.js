const express = require('express');
const products = require('./data/products');
const dotenv = require('dotenv');
const connectDb = require('./config/config');
const productRoutes = require('./routes/productRoutes');

// dotenv configure
dotenv.config();

const app = express();

// Connecting to  mongodb Database
connectDb();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to node server</h1>');
});

app.use('/api', productRoutes);

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => { console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${process.env.PORT}`)});