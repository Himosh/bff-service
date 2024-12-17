const OrderService = require('../services/order.service');

exports.getAllOrders = async (req, res, next) => {
    try {
        const { page = 0, size = 10 } = req.query;
        const response = await OrderService.getAllOrders(page, size);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.getOrdersByUserId = async (req, res, next) => {
    try {
        const { userId, page = 0, size = 10 } = req.query;
        const response = await OrderService.getOrdersByUserId(userId, page, size);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.getOrderById = async (req, res, next) => {
    try {
        const { orderId } = req.query;
        const response = await OrderService.getOrderById(orderId);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.createOrderFromCart = async (req, res, next) => {
    try {
        const { cartId } = req.params;
        const response = await OrderService.createOrderFromCart(cartId);
        res.status(201).json(response.data);
    } catch (error) {
        next(error);
    }
};
