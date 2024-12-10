const AuthService = require('../services/auth.service');

exports.createUser = async (req, res, next) => {
    try {
        const { userDTO } = req.body;
        const response = await AuthService.createUser(userDTO);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.getAllUsers = async (req, res, next) => {
    try {
        const response = await AuthService.getAllUsers();
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.getUserById = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const response = await AuthService.getUserById(userId);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const response = await AuthService.deleteUser(userId);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};
