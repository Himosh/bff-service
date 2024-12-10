const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL,
    PRODUCT_SERVICE_URL: process.env.PRODUCT_SERVICE_URL,
    ORDER_SERVICE_URL: process.env.ORDER_SERVICE_URL,
};