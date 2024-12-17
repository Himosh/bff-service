const ProductService = require('../services/product.service');
const ProductCategoryService = require('../services/productCategory.service');

exports.getAllProducts = async (req, res, next) => {
    try {
        const { page = 0, size = 10 } = req.query;
        const response = await ProductService.getAllProducts(page, size);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.getProductsByCategory = async (req, res, next) => {
    try {
        const { category } = req.query;
        const { page = 0, size = 10 } = req.query;
        const response = await ProductService.getProductsByCategory(category, page, size);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.getProductById = async (req, res, next) => {
    try {
        const { productId } = req.params;

        const productResponse = await ProductService.getProductById(productId);

        const product = productResponse.data;

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        const categoryResponse = await ProductCategoryService.getAllCategories();
        const category = categoryResponse.data.find((cat) => cat.id === product.categoryId);

        const productWithCategoryName = {
            ...product,
            categoryName: category ? category.name : "Unknown Category",
        };

        res.status(200).json(productWithCategoryName);
    } catch (error) {
        next(error);
    }
};


exports.getProductsByCategoryId = async (req, res, next) => {
    try {
        // Extract query parameters
        const { categoryId } = req.query; // 'categoryId' as string from the query
        const { page = 0, size = 10 } = req.query;

        // Log incoming query parameters for debugging
        console.log("Received categoryId:", categoryId);
        console.log("Received page:", page);
        console.log("Received size:", size);

        // Validate required 'categoryId'
        if (!categoryId) {
            return res.status(400).json({ error: 'categoryId is required' });
        }

        // Ensure 'categoryId' is forwarded correctly to Spring Boot
        const response = await ProductService.fetchProductsByCategoryId(categoryId, page, size)
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error forwarding request to Spring Boot service:", error.message);
        next(error);
    }
};

exports.searchProductsByProductName = async (req, res, next) => {
    try {
        const { productName } = req.query;
        const { page = 0, size = 10 } = req.query;
        const response = await ProductService.searchProductsByProductName(productName, page, size);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.createProductCatalogRequest = async (req, res, next) => {
    try {
        const productCatalogRequestDTO = req.body;
        const response = await ProductService.createProductCatalogRequest(productCatalogRequestDTO);
        res.status(201).json(response.data);
    } catch (error) {
        next(error);
    }
};

exports.updateProductStatus = async (req, res, next) => {
    try {
        const updateProductStatusDTOList = req.body;
        const response = await ProductService.updateProductStatus(updateProductStatusDTOList);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};
