const salesModels = require('../models/sales.model');

const insertSales = async (sale) => {
  const idsProducts = await sale.map(({ productId }) => productId);
  
  const idExist = await salesModels.checkIds(idsProducts);
  
  if (idExist.length !== idsProducts.length) {
    return { type: 404, message: 'Product not found' };
  }

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

const deleteSalesServices = async (id) => {
  const result = await salesModels.checkIdSales(id);
  
  if (result.length === 0) return { type: 404, message: 'Sale not found' };

  await salesModels.deleteSales(id);

  return { type: null };
};

const updateSalesServices = async (id, body) => {
  const result = await salesModels.checkIdSales(id);

  const idsProducts = await body.map(({ productId }) => productId);

  const idExist = await salesModels.checkIds(idsProducts);

  if (idExist.length !== idsProducts.length) return { type: 404, message: 'Product not found' };

  if (result.length === 0) return { type: 404, message: 'Sale not found' };

  await Promise.all(body.map(async (element) => salesModels.updateSales(id, element)));

  const response = { saleId: id, itemsUpdated: body };

  return { type: null, message: response };
};

module.exports = {
  insertSales,
  getAllSalesServices,
  getSalesByIdSevices,
  deleteSalesServices,
  updateSalesServices,
};