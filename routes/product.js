const express = require('express');
const router = express.Router();
const { getProducts, getSingleProduct } = require('../controllers/productController');

// Define routes
router.route('/products').get(getProducts); // Ensure getProducts matches the exported function name
router.route('/product/:id').get(getSingleProduct); // Ensure getSingleProduct matches the exported function name

module.exports = router;
