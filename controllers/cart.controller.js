const CartService = require('../services/cart.service');

exports.getCartByUserId = async (req, res, next) => {
    try {
        const { userId } = req.query;
        const response = await CartService.getCartByUserId(userId);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.getAllCarts = async (req, res, next) => {
    try {
        const response = await CartService.getAllCarts();
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.createCart = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const response = await CartService.createCart(userId);
        res.status(201).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.addOrUpdateProductInCart = async (req, res, next) => {
    try {
        const { cartId } = req.params;
        const { productId, quantity } = req.query;
        const response = await CartService.addOrUpdateProductInCart(cartId, productId, quantity);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.removeProductFromCart = async (req, res, next) => {
    try {
        const { cartId } = req.params;
        const { productId } = req.query;
        const response = await CartService.removeProductFromCart(cartId, productId);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};
