const express = require('express');
const productController = require('../controllers/product.controller');

const productRouter = express.Router();

productRouter.get('/', productController.getProductController);

productRouter.get('/:id', productController.getProductByIdController);

module.exports = productRouter;