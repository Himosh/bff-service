const express = require('express');
const ProductCategoryController = require('../controllers/productCategory.controller');
const router = express.Router();

router.get('/categories', ProductCategoryController.getAllCategories);
router.post('/category', ProductCategoryController.createCategory);
router.post('/category/update', ProductCategoryController.updateCategory);
router.delete('/category/delete', ProductCategoryController.deleteCategory);

module.exports = router;
