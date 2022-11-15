const salesServices = require('../services/sales.services');

const createNewSales = async (req, res) => {
  const { type, message } = await salesServices.insertSales(req.body);
  if (type) return res.status(type).json({ message });

  res.status(201).json(message);
};

module.exports = {
  createNewSales,
};