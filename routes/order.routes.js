const express = require('express');
const OrderController = require('../controllers/order.controller');

const router = express.Router();

router.get('/all', OrderController.getAllOrders);
router.get('/user', OrderController.getOrdersByUserId);
router.get('/order', OrderController.getOrderById);
router.post('/create-order-from-cart/:cartId', OrderController.createOrderFromCart);

module.exports = router;
