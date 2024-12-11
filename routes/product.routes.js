const express = require('express');
const ProductController = require('../controllers/product.controller');
const router = express.Router();

router.get('/', ProductController.getAllProducts);
router.get('/category', ProductController.getProductsByCategory);
router.get('/:productId', ProductController.getProductById);
router.get('/search-by-product-name', ProductController.searchProductsByProductName);
router.post('/create-catalog-request', ProductController.createProductCatalogRequest);
router.put('/update-product-status', ProductController.updateProductStatus);

module.exports = router;
