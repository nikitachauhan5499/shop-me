const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const router = express.Router();
const Product = require('../models/product');

router.get('/products', expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}));

router.get('/products/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({message: 'Product not found'});
    }
}));

module.exports = router;