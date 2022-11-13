const express = require('express');
const productController = require('../controllers/product.controller');
const { validationProduct } = require('../middlewares/validationProduct');

const productRouter = express.Router();

productRouter.get('/', productController.getProductController);

productRouter.get('/:id', productController.getProductByIdController);

productRouter.post('/', validationProduct, productController.newProductController);

module.exports = productRouter;