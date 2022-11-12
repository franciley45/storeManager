const productModel = require('../models/product.model');

const getProduct = async () => {
  const result = await productModel.getAllProducts();
  return { type: null, message: result };
};

const getProductByIdServices = async (id) => {
  const result = await productModel.getProductById(id);

  if (!result) return { type: 404, message: 'Product not found' };

  return { type: null, message: result };
};

module.exports = {
  getProduct,
  getProductByIdServices,
};