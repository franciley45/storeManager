const salesModels = require('../models/sales.model');

const insertSales = async (sale) => {
  const idsProducts = await sale.map(({ productId }) => productId);
  
  const idExist = await salesModels.checkIds(idsProducts);

  if (idExist.length !== idsProducts.length) return { type: 404, message: 'Product not found' };

  const idSale = await salesModels.insert(sale);

  return { type: null, message: { id: idSale, itemsSold: sale } };
};

const getAllSalesServices = async () => {
  const result = await salesModels.getAllSales();
  
  return { type: null, message: result };
};

const getSalesByIdSevices = async (id) => {
  const result = await salesModels.getSalesById(id);

  if (result.length === 0) return { type: 404, message: 'Sale not found' };

  return { type: null, message: result };
};
module.exports = {
  insertSales,
  getAllSalesServices,
  getSalesByIdSevices,
};