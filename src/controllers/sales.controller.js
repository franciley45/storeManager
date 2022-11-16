const salesServices = require('../services/sales.services');

const createNewSales = async (req, res) => {
  const { type, message } = await salesServices.insertSales(req.body);

  if (type) return res.status(type).json({ message });

  res.status(201).json(message);
};

const getAllSalesController = async (_req, res) => {
  const { type, message } = await salesServices.getAllSalesServices();

  if (type) return res.status(type).json({ message });

  res.status(200).json(message);
};

const getSalesByIdController = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await salesServices.getSalesByIdSevices(id);

  if (type) return res.status(type).json({ message });
 
  return res.status(200).json(message);
};

module.exports = {
  createNewSales,
  getAllSalesController,
  getSalesByIdController,
};