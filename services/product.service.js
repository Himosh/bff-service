const axios = require('axios');
const { PRODUCT_SERVICE_URL } = require('../config/services');
const {getProductsByCategory} = require("../controllers/product.controller");

exports.getAllProducts = (page, size) => {
    return axios.get(`${PRODUCT_SERVICE_URL}/api/v1/products`, {
        params: { page, size }
    });
};

exports.getProductsByCategory = (category, page, size) => {
    return axios.get(`${PRODUCT_SERVICE_URL}/api/v1/products/category`, {
        params: { category, page, size }
    });
};

// Function to call Spring Boot service
exports.fetchProductsByCategoryId = (categoryId, page, size) => {
    return axios.get(`${PRODUCT_SERVICE_URL}/api/v1/products/search-by-category-id`, {
        params: { categoryId, page, size }
    });
};


exports.getProductById = (productId) => {
    return axios.get(`${PRODUCT_SERVICE_URL}/api/v1/products/${productId}`);
};

exports.searchProductsByProductName = (productName, page, size) => {
    return axios.get(`${PRODUCT_SERVICE_URL}/api/v1/products/search-by-product-name`, {
        params: { productName, page, size }
    });
};

exports.createProductCatalogRequest = (productCatalogRequestDTO) => {
    return axios.post(`${PRODUCT_SERVICE_URL}/api/v1/products/create-catalog-request`, productCatalogRequestDTO);
};

exports.updateProductStatus = (updateProductStatusDTOList) => {
    return axios.put(`${PRODUCT_SERVICE_URL}/api/v1/products/update-product-status`, updateProductStatusDTOList);
};
