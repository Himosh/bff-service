const ProductCategoryService = require('../services/productCategory.service');

exports.getAllCategories = async (req, res, next) => {
    try {
        const response = await ProductCategoryService.getAllCategories();
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.createCategory = async (req, res, next) => {
    try {
        const category = req.body;
        const response = await ProductCategoryService.createCategory(category);
        res.status(201).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.updateCategory = async (req, res, next) => {
    try {
        const category = req.body;
        const response = await ProductCategoryService.updateCategory(category);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.deleteCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.query;
        const response = await ProductCategoryService.deleteCategory(categoryId);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};
