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
  
  await productModel.updateProduct(id, name);

  if (result.length === 0) return { type: 404, message: 'Product not found' };
 
  return { type: null, message: { id, name } };
};

const deleteProductServices = async (id) => {
  const result = await productModel.checkIdProduct(id);

  await productModel.deleteProduct(id); 
  
  if (result.length === 0) return { type: 404, message: 'Product not found' };

  return { type: null };
};

const getAllProductsByIncludes = async (q) => {
  const AllProducts = await productModel.getAllProducts();
  
  if (AllProducts.length === 0) return { type: 200, message: AllProducts };
  
  const ProductsList = await AllProducts.filter((e) => e.name.includes(q));

  return { type: null, message: ProductsList };
};

module.exports = {
  getProduct,
  getProductByIdServices,
  newProductServices,
  updateProductServices,
  deleteProductServices,
  getAllProductsByIncludes,
};