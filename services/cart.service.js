const axios = require('axios');
const { ORDER_SERVICE_URL } = require('../config/services');

exports.getCartByUserId = (userId) => {
    return axios.get(`${ORDER_SERVICE_URL}/api/v1/cart/user`, {
        params: { userId }
    });
};

exports.getAllCarts = () => {
    return axios.get(`${ORDER_SERVICE_URL}/api/v1/cart/all`);
};

exports.createCart = (userId) => {
    return axios.post(`${ORDER_SERVICE_URL}/api/v1/cart/create-cart/${userId}`);
};

exports.addOrUpdateProductInCart = (cartId, productId, quantity) => {
    return axios.patch(`${ORDER_SERVICE_URL}/api/v1/cart/add-or-update/${cartId}`, null, {
        params: { productId, quantity }
    });
};

exports.removeProductFromCart = (cartId, productId) => {
    return axios.patch(`${ORDER_SERVICE_URL}/api/v1/cart/${cartId}/remove`, null, {
        params: { productId }
    });
};
