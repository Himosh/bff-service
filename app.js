const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/bff/auth', authRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
