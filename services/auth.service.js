const axios = require('axios');
const { AUTH_SERVICE_URL } = require('../config/services');

exports.createUser = (userDTO) => {
    return axios.post(`${AUTH_SERVICE_URL}/api/users/create`, {
        userDTO
    });
};

exports.getAllUsers = () => {
    return axios.get(`${AUTH_SERVICE_URL}/api/users`);
};


// exports.getAllUsers = () => {
//     return axios.get(`http://localhost:8086/api/users`);
// };

exports.getUserById = (userId) => {
    return axios.get(`${AUTH_SERVICE_URL}/api/users/${userId}`);
};

exports.deleteUser = (userId) => {
    return axios.delete(`${AUTH_SERVICE_URL}/api/users/${userId}`);
};
