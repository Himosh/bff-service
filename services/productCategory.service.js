const axios = require('axios');
const { PRODUCT_SERVICE_URL } = require('../config/services');

exports.getAllCategories = () => {
    return axios.get(`${PRODUCT_SERVICE_URL}/api/v1/products/categories`);
};

exports.createCategory = (category) => {
    return axios.post(`${PRODUCT_SERVICE_URL}/api/v1/products/category`, category);
};

exports.updateCategory = (category) => {
    return axios.post(`${PRODUCT_SERVICE_URL}/api/v1/products/category/update`, category);
};

exports.deleteCategory = (categoryId) => {
    return axios.delete(`${PRODUCT_SERVICE_URL}/api/v1/products/category/delete`, {
        params: { categoryId }
    });
};
