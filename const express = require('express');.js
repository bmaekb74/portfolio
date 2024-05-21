const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new product (for testing purposes, in real scenarios you might use a POST method)
router.get('/add-product', async (req, res) => {
    const product = new Product({
        name: 'Sample Product',
        description: 'This is a sample product.',
        price: 19.99,
        image: 'https://via.placeholder.com/150'
    });

    try {
        const newProduct = await product.save();
        res.json(newProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
