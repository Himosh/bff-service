const axios = require('axios');
const { ORDER_SERVICE_URL } = require('../config/services');

exports.getAllOrders = (page, size) => {
    return axios.get(`${ORDER_SERVICE_URL}/api/v1/order/all`, {
        params: { page, size }
    });
};

exports.getOrdersByUserId = (userId, page, size) => {
    return axios.get(`${ORDER_SERVICE_URL}/api/v1/order/user`, {
        params: { userId, page, size }
    });
};

exports.getOrderById = (orderId) => {
    return axios.get(`${ORDER_SERVICE_URL}/api/v1/order/order`, {
        params: { orderId }
    });
};

exports.createOrderFromCart = (cartId) => {
    return axios.post(`${ORDER_SERVICE_URL}/api/v1/order/create-order-from-cart/${cartId}`);
};
