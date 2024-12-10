const express = require('express');
const AuthController = require('../controllers/auth.controller');
const router = express.Router();

router.post('/users/create', AuthController.createUser);
router.get('/users', AuthController.getAllUsers);
router.get('/users/:userId', AuthController.getUserById);
router.delete('/users/:userId', AuthController.deleteUser);

module.exports = router;
