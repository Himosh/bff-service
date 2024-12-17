const express = require('express');
const CartController = require('../controllers/cart.controller');

const router = express.Router();

router.get('/user', CartController.getCartByUserId);
router.get('/all', CartController.getAllCarts);
router.post('/create-cart/:userId', CartController.createCart);
router.patch('/add-or-update/:cartId', CartController.addOrUpdateProductInCart);
router.patch('/:cartId/remove', CartController.removeProductFromCart);

module.exports = router;
