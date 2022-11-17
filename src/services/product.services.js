const productModel = require('../models/product.model');

const getProduct = async () => {
  const result = await productModel.getAllProducts();

  if (!result) return { type: 404, message: 'Product not found' };
  
  return { type: null, message: result };
};

const getProductByIdServices = async (id) => {
  const result = await productModel.getProductById(id);

  if (!result) return { type: 404, message: 'Product not found' };

  return { type: null, message: result };
};

const newProductServices = async (name) => {
  const result = await productModel.newProduct(name);
  
  return { type: null, message: result };
};

const updateProductServices = async (id, name) => {
  const result = await productModel.checkIdProduct(id);
  
  if (result.length === 0) return { type: 404, message: 'Product not found' };

  await productModel.updateProduct(id, name);
 
  return { type: null, message: { id, name } };
};

const deleteProductServices = async (id) => {
  const result = await productModel.checkIdProduct(id);

  if (result.length === 0) return { type: 404, message: 'Product not found' };

  await productModel.deleteProduct(id); 

  return { type: null };
};

module.exports = {
  getProduct,
  getProductByIdServices,
  newProductServices,
  updateProductServices,
  deleteProductServices,
};