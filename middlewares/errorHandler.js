module.exports = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.response?.status || 500).json({
        error: err.message || 'Internal Server Error',
    });
};
