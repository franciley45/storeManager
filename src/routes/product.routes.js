const express = require('express');
const productController = require('../controllers/product.controller');
const { validationProduct } = require('../middlewares/validationProduct');

const productRouter = express.Router();

productRouter.get('/', productController.getProductController);

productRouter.get('/search', productController.getAllProductsByIncludes);

productRouter.get('/:id', productController.getProductByIdController);

productRouter.post('/', validationProduct, productController.newProductController);

productRouter.put('/:id', validationProduct, productController.updateProductController);

productRouter.delete('/:id', productController.deleteProductController);

module.exports = productRouter;