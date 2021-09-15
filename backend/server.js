const express = require('express');
const products = require('./data/products');

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


app.listen(8080, () => { console.log('Server listening to port 8080')});