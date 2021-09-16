const express = require('express');
const products = require('./data/products');
const dotenv = require('dotenv');

//dotenv configure
dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to node server</h1>');
});

app.get('/products', (req, res) => {
    res.send(products);
});

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
});

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => { console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${process.env.PORT}`)});