const ProductService = require('../services/product.service');

exports.getAllProducts = async (req, res, next) => {
    try {
        const { page = 0, size = 10 } = req.query;
        const response = await ProductService.getAllProducts(page, size);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.getProductsByCategory = async (req, res, next) => {
    try {
        const { category } = req.query;
        const { page = 0, size = 10 } = req.query;
        const response = await ProductService.getProductsByCategory(category, page, size);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.getProductById = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const response = await ProductService.getProductById(productId);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.searchProductsByProductName = async (req, res, next) => {
    try {
        const { productName } = req.query;
        const { page = 0, size = 10 } = req.query;
        const response = await ProductService.searchProductsByProductName(productName, page, size);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.createProductCatalogRequest = async (req, res, next) => {
    try {
        const productCatalogRequestDTO = req.body;
        const response = await ProductService.createProductCatalogRequest(productCatalogRequestDTO);
        res.status(201).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.updateProductStatus = async (req, res, next) => {
    try {
        const updateProductStatusDTOList = req.body;
        const response = await ProductService.updateProductStatus(updateProductStatusDTOList);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};
