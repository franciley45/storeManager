const productService = require('../services/product.services');

const getProductController = async (_req, res) => {
  const { type, message } = await productService.getProduct();
  if (type) return res.status(type).json(message);

  return res.status(200).json(message);
};

const getProductByIdController = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getProductByIdServices(id);

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const newProductController = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await productService.newProductServices(name);

  if (type) return res.status(type).json({ message });

  res.status(201).json(message);
};

const updateProductController = async (req, res) => {
  const { id } = req.params;
  
  const { name } = req.body;

  const { type, message } = await productService.updateProductServices(id, name);

  if (type) return res.status(type).json({ message });

  res.status(200).json(message);
};

module.exports = {
  getProductController,
  getProductByIdController,
  newProductController,
  updateProductController,
};